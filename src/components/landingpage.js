import React, { Component } from 'react'; 
import { Grid, Cell} from 'react-mdl'; 

class Landing extends Component {
    render() {
        return(
            <div style = {{width: '100', margin: 'auto'}}> 
                <Grid className = "landing-grid">
                    <Cell col={12}>
                        <img 
                            src= "https://r7ctow.dm.files.1drv.com/y4m7OrUyGv6TGW4meP_xgxpFAGP1kdbQUf_L45q30NThT65Gm9vM0FrTrOyO9yFxmQnQG7Pceoyqea5SXmc90pJJpz6IehRtR9XrOdkH86UjUjnMOGu7WXYlINxHGv5Jb1c7aC6vNH1CPI0s7RW2YpMT6CDOZAlv_gqk6gadYBsZVtxU1_e-X6Dv6fWvuKYGaSxwZ5UyernpI6AJd-h4KBk4g?width=917&height=1529&cropmode=none" 
                            alt = "robypic"
                            className = "profil_picture"
                        />
                        <div className = "banner-text">
                            <h1>
                                <p>
                                Welcome to my website. Here, you will find a copy of my 
                                    <a href='./resume' style={{color: '#000000', fontWeight: 'bold'}}> resume </a> as well as the incredible projects I have worked on. 
                                You will also find some very interesting facts about me. Please do not hesitate to 
                                    <a href='./contact' style={{color: '#000000', fontWeight: 'bold'}}> contact </a> 
                                me with any questions that you may have.   
                                </p>
                            </h1>
                            <div className = "social-links">
                                {/*Linkedin*/}
                                <a href="https://www.linkedin.com/in/roby-nkwamo-820274147" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden = "true"> </i>
                                </a>

                                {/*Github*/}
                                <a href="https://github.com/robynkwamo" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden = "true"> </i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing; 