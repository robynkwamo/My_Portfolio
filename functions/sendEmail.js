const express = require('express');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');
const date = require('date-and-time');

const viewPath = path.resolve(__dirname, './emailTemplates/views/');
const partialsPath = path.resolve(__dirname, './emailTemplates/partials');
const now = new Date();
const pattern = date.compile('ddd, MMM DD YYYY');
const invoiceTime = date.format(now, pattern);
const log = require('../utils/serverLog');

const sendMail = async (name, receiptNumber, productsOrdered, paymentInfo, customerEmail) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.DO_NOT_REPLY_EMAIL,
        pass: process.env.DO_NOT_REPLY_PASS,
      },
    });
    transporter.use(
      'compile',
      hbs({
        viewEngine: {
          extName: '.handlebars',
          // partialsDir: viewPath,
          layoutsDir: viewPath,
          defaultLayout: false,
          partialsDir: partialsPath,
          express,
        },
        viewPath,
        extName: '.handlebars',
      })
    );

    const mailOptions = {
      from: 'Do-Not-Reply@letservu.com',
      to: customerEmail,
      subject: `Bonjour ${name}, Votre Commande a ete Confirmer`,
      template: 'index',
      context: {
        name,
        invoiceTime,
        receiptNumber,
        items: productsOrdered,
        paymentInfo,
        total: paymentInfo.total,
      },
      // attachments: [
      //   {
      //     filename: "fastez.png",
      //     path: path.resolve(__dirname, "./image/fastez.png"),
      //   },
      // ],
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        log.error('Error while sending mail', error);
      } else {
        log.info(`Email Receipt Sent to ${mailOptions.to} with respose => ${info.response}`);
      }
    });
    return true;
  } catch (error) {
    log.error(error);
    return false;
  }
};

module.exports = { sendMail };
