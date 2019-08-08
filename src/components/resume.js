import React, { Component } from 'react'; 
import {Grid, Cell } from 'react-mdl'; 
import Education from './education'; 
import Experience from './experience'; 
import Skills from './skills'; 


class Resume extends Component {
    render() {
        return(
            <div> 
                <Grid>
                    <Cell col={4}> 
                        <div style={{paddingLeft: '10', paddingTop: '25'}}>
                            <img
                                src="https://ezw2ow.dm.files.1drv.com/y4mqp7SY_JczJefKt2aJ1JXyR6_wLCzbylo7-mLtjVJt__iuZWphftb56Z0oBcv5bigZKIDLIhZQteikUUxzmYQxDp_T02cnZahyukKr_NfBUGWA4QdQhGfuUMZ7ryKc6WjlVI3L13ROdmop9_yCzFPdFdcYEiU4eBIcCWFbYdZiQ0zLyaHQlJAOhnKWbV_R8C3JuIOBv1rr_gn3IgIx0WJIw?width=500&height=500&cropmode=none"
                                alt="avatar"
                                style={{height: '200px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '1.75em'}}> Roby Nkwamo</h2>
                        <h4 style={{color: 'grey'}}> Computer Engineer </h4>
                        <hr style={{borderTop: '3px solid #e16145', width: '50%'}}/>
                        <p>
                            I am entrepreneur majoring in computer Engineering with minors in Electrical engineering and Cyber security. 
                            I am graduating in December 2019 and looking for opportunities to demonstrate my skills and expand my knowledge 
                            across the various areas of computer Engineering specifically in the area of Cyber Security and web development. 
                            I aspire to use the skills and knowledge that I have acquired so far to develop ideas and applications 
                            that makes the world a better place. 
                        </p>
                        <hr style={{borderTop: '3px solid #e16145', width: '50%'}}/>
                        <h5>Address</h5>
                        <p> 14515 Briar Forest Dr, Apt 1624, Houston, Texas, 77077.</p>
                        <h5>Phone</h5>
                        <p> (832) 462-9808</p>
                        <h5>Email</h5>
                        <p> nkwamoroby@gmail.com</p>
                        <h5>Web</h5>
                        <p>www.robynkwamo.com</p>
                        <hr style={{borderTop: '3px solid #e16145', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}> 
                        <h2>Education</h2>


                        <Education
                            startYear = {"August 2016"}
                            endYear={"December 2019"}
                            schoolName="Texas A&M University"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                                when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />

                        <hr style={{borderTop: '3px solid #e16145'}} />

                        <h2>Experience</h2>

                        <Experience 
                            startYear={"August 2017"}
                            endYear={"Present"}
                            jobName={"Courses Designer Assistant"}
                            jobDescription="- Collaborate as a student assistant in a team of 8
                                            - Help creating structure and design interactive app 
                                              and content for online courses
                                            - Aided in the recording and live streaming process
                                              of conferences and educationals events"
                        />

                        <Experience 
                            startYear={"March 2018"}
                            endYear={"Present"}
                            jobName={"Project Lead"}
                            jobDescription="- Collaborate as a student assistant in a team of 8
                                            - Help creating structure and design interactive app 
                                              and content for online courses
                                            - Aided in the recording and live streaming process
                                              of conferences and educationals events"
                        />  

                        <Experience 
                            startYear={"August 2017"}
                            endYear={"Present"}
                            jobName={"Courses Designer Assistant"}
                            jobDescription="- Collaborate as a student assistant in a team of 8
                                            - Help creating structure and design interactive app 
                                              and content for online courses
                                            - Aided in the recording and live streaming process
                                              of conferences and educationals events"
                        />

                        <Experience 
                            startYear={"August 2017"}
                            endYear={"Present"}
                            jobName={"Courses Designer Assistant"}
                            jobDescription="- Collaborate as a student assistant in a team of 8
                                            - Help creating structure and design interactive app 
                                              and content for online courses
                                            - Aided in the recording and live streaming process
                                              of conferences and educationals events"
                        />

                        <hr style={{borderTop: '3px solid #e16145'}} />

                        <h2>Skills</h2>
                            <Skills
                                skill="javascript"
                                progress={95}
                            />
                            <Skills
                                skill="javascript"
                                progress={95}
                            />
                            <Skills
                                skill="javascript"
                                progress={95}
                            />
                            <Skills
                                skill="javascript"
                                progress={95}
                            />
                            <Skills
                                skill="javascript"
                                progress={95}
                            />
                            <Skills
                                skill="javascript"
                                progress={95}
                            />
                            <Skills
                                skill="javascript"
                                progress={95}
                            />
                            <Skills
                                skill="javascript"
                                progress={95}
                            />
                            <Skills
                                skill="javascript"
                                progress={95}
                            />
                            <Skills
                                skill="javascript"
                                progress={95}
                            />
                            <Skills
                                skill="javascript"
                                progress={95}
                            />
                            <Skills
                                skill="javascript"
                                progress={95}
                            />
                            <Skills
                                skill="javascript"
                                progress={95}
                            />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume; 