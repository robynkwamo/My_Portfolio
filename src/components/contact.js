import React, { Component } from 'react'; 
import {Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

class Contacts extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        {/* <h2>Roby Nkwamo</h2> */}
                        <img
                            src="https://r7ctow.dm.files.1drv.com/y4m7OrUyGv6TGW4meP_xgxpFAGP1kdbQUf_L45q30NThT65Gm9vM0FrTrOyO9yFxmQnQG7Pceoyqea5SXmc90pJJpz6IehRtR9XrOdkH86UjUjnMOGu7WXYlINxHGv5Jb1c7aC6vNH1CPI0s7RW2YpMT6CDOZAlv_gqk6gadYBsZVtxU1_e-X6Dv6fWvuKYGaSxwZ5UyernpI6AJd-h4KBk4g?width=917&height=1529&cropmode=none"
                            alt="roby-pic"
                            style={{height: '250px', paddingTop: '2em'}}
                        />
                        {/* <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}> 
                            I am always open to new opprtunity and always ready to learn. If you have a question or 
                            a any other thing you want to know please contact me using my phone, my email or directly on my LinkdIn
                            page. 
                        </p> */}
                    </Cell>
                    <Cell col={6}>
                        <h2> Contact Me</h2>
                        <hr></hr> 

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                       <i className="fa fa-phone-square" aria-hidden="true" style={{color: '#ffe767'}}></i>
                                        <a href="tel:+1832-462-9808" style={{color: 'black'}}>(832) 462-9808</a>
                                    </ListItemContent>
                                </ListItem>
                                {/* <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                       <i className="fa fa-fax" aria-hidden="true" style={{color: '#ffe767'}}></i>
                                        <a>(832) 462-9808</a>
                                    </ListItemContent>
                                </ListItem> */}
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                       <i className="fa fa-envelope" aria-hidden="true" style={{color: '#ffe767'}}></i>
                                       <a href="mailto:nkwamoroby@gmail.com" style={{color: 'black'}}>nkwamoroby@gmail.com</a>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                       <i className="fa fa-linkedin" aria-hidden="true" style={{color: '#ffe767'}}></i>
                                        <a href="https://www.linkedin.com/in/roby-nkwamo-820274147" style={{color: 'black'}}>Roby Nkwamo</a>
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                        
                    </Cell>
                </Grid> 
            </div>
        )
    }
}

export default Contacts; 