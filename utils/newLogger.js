// eslint-disable-next-line import/no-extraneous-dependencies
const errorToJSON = require('error-to-json');
const InfoLogs = require('../models/infoLog.model');
const ErrorLogs = require('../models/errorLog.model');
const WarnLogs = require('../models/warmLog.model');
const { convertErrorToGoodFormat } = require('./logger');
const log = require('./serverLog');

const convertPayloadToErrorJson = (payload) => {
  const output = {};
  Object.keys(payload).forEach((key) => {
    if (payload[key] instanceof Error) {
      output[key] = errorToJSON.default(payload[key]);
    } else {
      output[key] = payload[key];
    }
  });
  return output;
};

class CustomMongoLogger {
  constructor(logThreshold = 2, errorThreshold = 5, warningThreshold = 5) {
    this.warnings = [];
    this.errors = [];
    this.infos = [];
    this.levels = {
      info: 'info',
      error: 'error',
      warning: 'warning',
    };
    this.logThreshold = logThreshold;
    this.errorThreshold = errorThreshold;
    this.warningThreshold = warningThreshold;
  }

  hasAnyData() {
    return this.infos.length || this.errors.length || this.warnings.length;
  }

  async saveInfoLogs() {
    const toBeUploaded = [...this.infos];
    this.infos.length = 0;
    await InfoLogs.insertMany(toBeUploaded);
  }

  async saveErrorLogs() {
    const toBeUploaded = [...this.errors];
    this.errors.length = 0;
    await ErrorLogs.insertMany(toBeUploaded);
  }

  async saveWarningLogs() {
    const toBeUploaded = [...this.warnings];
    this.warnings.length = 0;
    await WarnLogs.insertMany(toBeUploaded);
  }

  // eslint-disable-next-line class-methods-use-this
  #createEntry(payload, level) {
    const checkedPayload = typeof payload === 'string' ? { message: payload } : payload;
    const input = {
      timestamp: new Date(),
      level,
      message: checkedPayload.message,
      meta: {
        ...checkedPayload,
        ENV: process.env.NODE_ENV,
        service: 'main',
        timestamp: new Date(),
      },
    };
    return input;
  }

  async #syncChanges(listKey) {
    try {
      switch (listKey) {
        case this.levels.info:
          if (this.infos.length >= this.logThreshold) {
            await this.saveInfoLogs();
          }
          break;
        case this.levels.error:
          if (this.errors.length >= this.errorThreshold) {
            await this.saveErrorLogs();
          }
          break;
        case this.levels.warning:
          if (this.warnings.length >= this.warningThreshold) {
            await this.saveWarningLogs();
          }
          break;
        default:
          break;
      }
    } catch (error) {
      log.error(error);
      log.info('==');
      log.error(error.message);
      this.error({
        message: error.message,
        critical: 1,
      });
    }
  }

  info(payload) {
    this.infos.push(this.#createEntry(payload, this.levels.info));
    this.#syncChanges(this.levels.info);
  }

  error(payload) {
    const isString = typeof payload === 'string';
    const error = isString ? new Error(payload) : payload.err ?? payload.error ?? new Error(payload.message);
    convertErrorToGoodFormat(error);
    const customizedPayload = isString ? { error, message: payload } : { ...payload, error };
    this.errors.push(this.#createEntry(convertPayloadToErrorJson(customizedPayload), this.levels.error));
    this.#syncChanges(this.levels.error);
  }

  warn(payload) {
    this.warnings.push(this.#createEntry(payload, this.levels.warning));
    this.#syncChanges(this.levels.warning);
  }
}

module.exports = CustomMongoLogger;
