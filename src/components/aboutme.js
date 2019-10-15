import React, { Component } from 'react'; 
import {Grid, Cell } from 'react-mdl'

class About extends Component {
    render() {
        return(
            <div className='aboutMe-page'> 
                <Grid className='aboutMe-grid'>
                    <Cell className='aboutMe-cell' col = {9}>
                        <h1>
                            Intro
                        </h1>
                        <h2>
                            <p className='aboutMe-para1'>
                                I am currently a student at Texas A&M University majoring in Computer Engineering. 
                                I am one of those who think that we can change the world one person at the time. 
                                My way of doing it is throught technology because I think that it has so much influence in today's world.
                                I strive to do better today than what I did yesterday therefore I am always open to learn and grow. 
                            </p>
                        </h2>
                        <h1>
                            Some History
                        </h1>
                        <h2>
                            <p className='aboutMe-para1'>
                                I was born in Douala Cameroon and I lived there until I was 18 years old. 
                                During my time in Cameroon, I went through a lot of different experiences. 
                                During the summer of 2007, when I was 13 years old, I worked as an intern for Finoplast which is my mom's furniture store. 
                                I was working as a retail associate and in addition to that I was doing whatever the manager would tell me to do.  
                                At the end of my internship, when I went back to school I was so eager to come back the following summer that 
                                I told all my friends what I did during the summer. 
                                I did the same internship the following summers until I turned 18 and my task was to resolve all the purchase issues 
                                that customers may have and also get customers informations for our customer catalog. 
                                Then I got a student visa to come study in the United States. 
                                I came directly to Houston and I started English 
                                courses at University of Houston since I did not speak english at the time. 
                                Then after six months of english classes, I transfered to Houston Community College 
                                where I started and finished my associate degree in science. Two years later, 
                                I was accepted at Texas A&M to pursue a bachelor in Computer Engineering where I am currently student.
                            </p>
                        </h2>
                        <h1>
                            Hobby
                        </h1>
                        <h2>
                            <p className='aboutMe-para1'>
                                One of the greatest thing that I like is spending time with friends and familly. For me that's were my happyness resides.
                                I also like music and I am a DJ on my free time, music is one of the thing that usually put me in my right mind.
                                I think I am a techie because I like building new tech gadgets and use them for different purpose. Watching documentary
                                about different construction mechanism and theories. 
                            </p>
                        </h2>
                        <h1>
                            Fun Facts
                        </h1>
                        <h2>
                            <p className='aboutMe-para1'>
                            A lot of people I know and meet, relate greatly to my sense of humor because I am always cheerful and fun to be around. 
                            When I am engaged in a conversation, I tend to adopt the attitude of listening to understand and not hearing to argue. 
                            During my down time, you can find me watching TV shows about business and law because it teaches some of the valuable 
                            techniques I now know about the business world. Lastly, "si je meurs pauvre c'est que je suis juste mort tot".     
                            </p>
                        </h2>
                        <h1>
                            Life Goals
                        </h1>
                        <h2>
                            <p className='aboutMe-para1'>
                                My goal in life is greatly influenced by a person whose inspiration changed the trajectory of my life. 
                                I hope to be not only a source of inspiration to less privileged youths in underdeveloped countries, 
                                but a guide and mentor. I aim to make my parents proud which to me is valuable gratitude to them for 
                                the gift of life.
                            </p>
                        </h2>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About; 