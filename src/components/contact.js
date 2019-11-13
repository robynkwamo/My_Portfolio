import React, { Component } from 'react'; 
import {Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'; 
import { hotjar } from 'react-hotjar';

hotjar.initialize(1568765, 6);

class Contacts extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        {/* <h2>Roby Nkwamo</h2> */}
                        <img
                            src="https://r7crow.dm.files.1drv.com/y4mGEAgO7ze6qgP2vyCycchYjYQ45LKnQ0ituWQoLxKg8qenaNY1oAD4v6fmEgaA6AviqynzSHQ96_eopleL56I4ZRVdchSpQWEuGnmb13MNkbt9BTd4P-JNSxB9BZa9AZbSz-IB8qd3HAMHpWEjUBcpygJ5zmDMTmx0LOQ2EO-Qn8I6SKy7W3-RO1rw72nfAF-Jn6jugj1wXn1Y8Pi0KdSPg?width=500&height=500&cropmode=none"
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