import React from 'react';
import { Grid, Cell } from 'react-mdl';

const Landing = () => {
  return (
    <div style={{ width: '100', margin: 'auto' }}>
      <Grid className="landing-grid">
        <Cell col={12}>
          <img
            src="https://fdwzow.dm.files.1drv.com/y4m051q3R3P-xF2TcEQgdSR8rhhd4gCtW9ysTJIBl850-fCWK9DHpvaLDrQQok2t15FJNn_oQlk0xpxuVw7_xkhSr7FmmSLd8RB3lcazu5zqhxx0HEVI0Npc4UoFYWbbvNGcpltOvTgr1FFEFKs1mlQXFLyPm6IX4vEDaI7DDaSE0GHcJT3wiURJhOrh5vFqB9iK_L641ikUqe5XaPEBzfGAQ?width=1350&height=650&cropmode=none"
            alt="robypic"
            className="profil_picture"
          />
          <div className="banner-text">
            <h1>
              <p>
                I was going to introduce myself but what better way than showing you my &nbsp;
                <a href="./resume" style={{ color: '#000000', fontWeight: 'bold' }}>
                  resume
                </a>
                . You can find &nbsp;
                <a href="./contact" style={{ color: '#000000', fontWeight: 'bold' }}>
                  my contact info here
                </a>
                .
              </p>
            </h1>
            <div className="social-links">
              {/*Linkedin*/}
              <a href="https://www.linkedin.com/in/roby-nkwamo-820274147" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>

              {/*Github*/}
              <a href="https://github.com/robynkwamo" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Landing;
