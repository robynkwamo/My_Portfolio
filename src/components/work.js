import React, { Component } from 'react'; 
import {Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Work extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={6}>
                        <div className="project-card1" >
                            <Card shadow={0} style={{width: '512px', height:'350px', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '176px', backgroundSize:'10em', background: 'url(https://itwxow.dm.files.1drv.com/y4mnpEwX4nOW9Nnb8UtuW5j-tQAyX4wpR3MgtLp_xAmHauLIrSbHIfIjGTa6Gu5tk6YXMt_AaC3ub80oQifHH7ODxwpbXXSf-H1oclhz1-Av8XyAFSMfU5ozx1whEJt9YcbGLLfLVQobo2mcQHm_zsawkt-037G55fx4OqUFacwTaxiwLf5FkDutYK0TgRyg7jyUgu9nECVZZ0PFIezZc2nWg?width=256&height=256&cropmode=none) center / cover'}}></CardTitle>
                                <CardText>
                                    <h6>Wine Empire is an online store that sells and delivers wine/spirit/beer online in Africa.</h6>
                                </CardText>
                                <CardActions border>
                                    <Button colored href = 'https://www.wineempire.store'>Click here to Check wineempire</Button>
                                </CardActions>
                                <CardMenu style={{color: '#00c6ff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                        </div>
                        {/* <div className="project-card3">
                            <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris sagittis pellentesque lacus eleifend lacinia...
                                </CardText>
                                <CardActions border>
                                    <Button colored>Get Started</Button>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                        </div> */}
                    </Cell>

                    <Cell col={6}>
                        <div className='project-card2' style={{left: '100', top: '25'}}>
                            <Card shadow={0} style={{width: '512px', height:'350px', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://itwqow.dm.files.1drv.com/y4m2fQzyPDLBe1sWguWCwoYpTfG-Z5z61UbeXwSKQg6_flUTxxwkGSwAPWdQ8q2fha31tmRC4hkdlgw90orqWO9sLa7J8NSzAXftLrAR9VfZjm02NDw3IiYqL3HOL4YnjKeTP0buIi_fIUgo0PcEQA5XJhZwhXyN4Yc4qBt9hNXXQxDKckb04o_5tD6XTO3p4wCtjxXwp4e45jEekV0ow9N6g?width=256&height=174&cropmode=none) center / cover'}}>  </CardTitle>
                                <CardText>
                                    <h6>RUBi is an AI algorithm that was developed in python by my team and I to minimized the power consumption 
                                        of an IOT enable house that get energy from solar panels. </h6>
                                </CardText>
                                <CardActions border>
                                    <Button colored href='https://github.com/robynkwamo/RUBi.git'>Click here to look at RUBi's code</Button>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                        </div>
                        {/* <div className="project-card4">
                            <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris sagittis pellentesque lacus eleifend lacinia...
                                </CardText>
                                <CardActions border>
                                    <Button colored>Get Started</Button>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                        </div> */}
                    </Cell>
                </Grid>


            </div>
            
        )
    }
}

export default Work; 