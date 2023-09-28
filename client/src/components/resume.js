import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import Leadership from "./leadership";
import Button from "react-bootstrap/Button";

class Resume extends Component {
  state = {
    display: false,
  };

  toggleHandler = () => {
    const currentStatus = this.state.display;
    this.setState({
      display: !currentStatus,
    });
  };

  render() {
    let content1 = null;
    let content2 = null;
    let content3 = null;
    let content4 = null;
    let content5 = null;
    let content6 = null;
    let content7 = null;
    if (this.state.display) {
      content1 = (
        <Skills
          skill1="Python"
          progress1={94}
          skill2="C++"
          progress2={90}
          skill3="Java"
          progress3={92}
        />
      );
      content2 = (
        <Skills
          skill1="React"
          progress1={95}
          skill2="Node.JS"
          progress2={90}
          skill3="React Native"
          progress3={82}
        />
      );
      content3 = (
        <Skills
          skill1="HTML\CSS"
          progress1={90}
          skill2="JavaScript"
          progress2={90}
          skill3="PHP"
          progress3={71}
        />
      );
      content4 = (
        <Skills
          skill1="SQLite"
          progress1={84}
          skill2="FireBase"
          progress2={82}
          skill3="MySQL"
          progress3={35}
        />
      );
      content5 = (
        <Skills
          skill1="Computer Networking"
          progress1={70}
          skill2="CCENT Certification"
          progress2={65}
          skill3="CCNA Certification"
          progress3={30}
        />
      );
      content6 = (
        <Skills
          skill3="Photoshop"
          progress3={73}
          skill2="AdobeXD"
          progress2={84}
          skill1="PowerPoint"
          progress1={89}
        />
      );
      content7 = (
        <Skills
          skill1="French"
          progress1={99}
          skill2="English"
          progress2={92}
          skill3="Spanish"
          progress3={10}
        />
      );
    }

    return (
      <div className="resume-page">
        <Grid>
          <Cell className="resume-left-col" col={4}>
            <div
              className="resume-div"
              style={{ paddingLeft: "10", paddingTop: "25" }}
            >
              <img
                src="https://r7crow.dm.files.1drv.com/y4mGEAgO7ze6qgP2vyCycchYjYQ45LKnQ0ituWQoLxKg8qenaNY1oAD4v6fmEgaA6AviqynzSHQ96_eopleL56I4ZRVdchSpQWEuGnmb13MNkbt9BTd4P-JNSxB9BZa9AZbSz-IB8qd3HAMHpWEjUBcpygJ5zmDMTmx0LOQ2EO-Qn8I6SKy7W3-RO1rw72nfAF-Jn6jugj1wXn1Y8Pi0KdSPg?width=500&height=500&cropmode=none"
                alt="roby-pic-2"
                style={{ height: "200px" }}
              />
            </div>

            <h2
              style={{
                paddingTop: "1.75em",
                fontFamily: "Josefin Slab",
                fontWeight: "bold",
                fontSize: "40px",
              }}
            >
              Roby Nkwamo
            </h2>
            <h4
              style={{
                color: "grey",
                fontFamily: "Josefin Slab",
                fontWeight: "bold",
                fontSize: "30px",
              }}
            >
              Computer Engineer
            </h4>
            <hr style={{ borderTop: "3px solid #ffe767", width: "50%" }} />
            <p style={{ fontSize: "18px" }}>
              I am a Computer Engineering working as a Fullstack developer who
              graduated from Texas A&M in December of 2019. I'm working to
              expand my knowledge across the various areas of computer
              Engineering specifically in the area of Cyber Security and web
              development. I aspire to use the skills and knowledge that I have
              acquired so far to develop ideas and applications that makes the
              world a better place.
            </p>
            <hr style={{ borderTop: "3px solid #ffe767", width: "50%" }} />
            <h5
              style={{
                fontFamily: "Josefin Slab",
                fontWeight: "bold",
                fontSize: "30px",
              }}
            >
              Address
            </h5>
            <p style={{ fontSize: "18px" }}>
              Please Email or call me for my address
            </p>
            <h5
              style={{
                fontFamily: "Josefin Slab",
                fontWeight: "bold",
                fontSize: "30px",
              }}
            >
              Phone
            </h5>
            <p style={{ fontSize: "18px" }}>
              <a href="tel:+1832-462-9808" style={{ color: "#000000" }}>
                (832) 462-9808
              </a>
            </p>
            <h5
              style={{
                fontFamily: "Josefin Slab",
                fontWeight: "bold",
                fontSize: "30px",
              }}
            >
              Email
            </h5>
            <p style={{ fontSize: "18px" }}>
              <a
                href="mailto:nkwamoroby@gmail.com"
                style={{ color: "#000000" }}
              >
                nkwamoroby@gmail.com
              </a>
            </p>
            <h5
              style={{
                fontFamily: "Josefin Slab",
                fontWeight: "bold",
                fontSize: "30px",
              }}
            >
              Web
            </h5>
            <p style={{ fontSize: "18px" }}>
              <a href="https://nkwamo.com" style={{ color: "#000000" }}>
                www.robynkwamo.com
              </a>
            </p>
            <hr style={{ borderTop: "3px solid #ffe767", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2
              style={{
                color: "white",
                fontFamily: "Josefin Slab",
                fontWeight: "bold",
                fontSize: "40px",
              }}
            >
              Education
            </h2>

            <Education
              startYear={"August 2016"}
              endYear={"December 2019"}
              schoolName="Texas A&M University, College Station, Texas"
              schoolDescription1=" Bachelor of Science in Computer Engineering"
              schoolDescription2=" Minor in Cybersecurity"
              schoolDescription3=" Minor in Electrical Engineering"
            />

            <hr style={{ borderTop: "3px solid #ffe767" }} />

            <h2
              style={{
                color: "white",
                fontFamily: "Josefin Slab",
                fontWeight: "bold",
                fontSize: "40px",
              }}
            >
              Experience
            </h2>

            <Experience
              startYear={"May 2021"}
              endYear={"Present"}
              jobPlace={"JPMorgan Chase & Co"}
              jobName={"Software Engineer"}
              jobDescription1="Full-stack developer for the team responsible for creating UI-shared components and microservices"
              jobDescription2="● Designing react UI components used internally and externally by various company applications"
              jobDescription3="● Creating microservices and protected APIs that serve a lot of various applications within the company and third parties software"
              jobDescription4="● Refining our pipelines process to ease and facilitate CI/CD flows of all our different applications"
            />

            <Experience
              startYear={"December 2019"}
              endYear={"Present"}
              jobPlace={"LetServU LLC"}
              jobName={"Full Stack Engineer"}
              jobDescription1="Led a team of 5 frontend and backend developers to develop a platform that allows businesses to offer different services to their customers."
              jobDescription2="● Designed a fully functional frontend interface with React.JS (for web) and React Native (for natives app)"
              jobDescription3="● Designed a backend with Node.JS running on an Express server and using MongoDB as a database."
              jobDescription4="● Designed many internal APIs that can be accessed from different endpoints, which allow communication between our backend and front end and using external APIs and webhooks to communicate with third parties"
            />

            <Experience
              startYear={"January 2019"}
              endYear={"December 2019"}
              jobPlace={"Captsone Project"}
              jobName={"Backend programmer"}
              jobDescription1="● Collaborate in a team of 4 to design an AI algorithm for a system that is used to reduce power consumption 
                                               in an IOT enable house with solar panel as energy source"
              jobDescription2="● Use python 3.0 to program the decision mecanism of the system based on the data receive by all the 
                                               smart censors and accessories installed in the house."
            />

            <Experience
              startYear={"August 2017"}
              endYear={"December 2019"}
              jobPlace={
                "Distance Learning Education for College of  Engineering at Texas A&M University"
              }
              jobName={
                "Texas A&M Dwight Look College of Engineering, Engineering Online"
              }
              jobDescription1="● Collaborate as a student assistant in a team"
              jobDescription2="● Help creating structure and interactive content for online courses"
              jobDescription3="● Help in the recording and live streaming process of courses and 
                                               school related events"
            />

            <Experience
              startYear={"September 2018"}
              endYear={"May 2019"}
              jobPlace={
                "Engineering Incubator Program at the department of Entrepreneurship"
              }
              jobName={"Team Leader"}
              jobDescription1="● Collaborate in a team of 3 people to design a platform to help householder with  
                                               house reparations schedule and work process"
              jobDescription2="● Used androidstudio and java to develop the first app prototype"
              jobDescription3="● Gained experience in customer service by talking to potential customers"
            />

            <Experience
              startYear={"May 2017"}
              endYear={"Present"}
              jobPlace={"WineEmpire & Co"}
              jobName={"Founder and Co-Owner"}
              jobDescription1="● Founded a local service company in Cameroon in charge of catering and delivering beverages to people  
                                               in most part of the country"
              jobDescription2="● Designed and in charge of the maintenance of the e-commerce website www.wineempire.store"
              jobDescription3="● Customer service representant for non cameroonian resisdent and other bussiness related inquiries "
            />

            <hr style={{ borderTop: "3px solid #ffe767" }} />

            <h2
              style={{
                color: "white",
                fontFamily: "Josefin Slab",
                fontWeight: "bold",
                fontSize: "40px",
              }}
            >
              Leadership
            </h2>

            <Leadership
              startYear={"Fall 2017"}
              endYear={"Fall 2018"}
              leadershipPlace={"Texas A&M IEEE"}
              leadershipDescription1="● Active Member of the organisation"
            />

            <Leadership
              startYear={"Fall 2016"}
              endYear={"Spring 2017"}
              leadershipPlace={"Texas A&M Cybersecurity Club"}
              leadershipDescription1="● Active Member and led the club in different cybersecurity competitions during
                                                     Fall 2016 and Spring 2017"
            />

            <hr style={{ borderTop: "3px solid #ffe767" }} />

            <h2
              style={{
                color: "white",
                fontFamily: "Josefin Slab",
                fontWeight: "bold",
                fontSize: "40px",
              }}
            >
              Skills
            </h2>

            <Button
              style={{
                color: "black",
                fontFamily: "Josefin Slab",
                fontWeight: "bold",
                fontSize: "20px",
                paddingLeft: "2.5rem",
                paddingRight: "2.5rem",
              }}
              onClick={this.toggleHandler}
            >
              Languages
            </Button>
            {content1}
            <Button
              style={{
                color: "black",
                fontFamily: "Josefin Slab",
                fontWeight: "bold",
                fontSize: "20px",
                marginLeft: "2rem",
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
              }}
              onClick={this.toggleHandler}
            >
              Frameworks
            </Button>
            {content2}
            <Button
              style={{
                color: "black",
                fontFamily: "Josefin Slab",
                fontWeight: "bold",
                fontSize: "20px",
                marginLeft: "2rem",
              }}
              onClick={this.toggleHandler}
            >
              Web development
            </Button>
            {content3}
            <Button
              style={{
                color: "black",
                fontFamily: "Josefin Slab",
                fontWeight: "bold",
                fontSize: "20px",
                marginLeft: "2rem",
                paddingLeft: "2.5rem",
                paddingRight: "2.5rem",
              }}
              onClick={this.toggleHandler}
            >
              DataBases
            </Button>
            {content4}
            <Button
              style={{
                color: "black",
                fontFamily: "Josefin Slab",
                fontWeight: "bold",
                fontSize: "20px",
                marginLeft: "3.5rem",
                paddingLeft: "2.5rem",
                paddingRight: "2.5rem",
              }}
              onClick={this.toggleHandler}
            >
              Cybersecurity
            </Button>
            {content5}
            <Button
              style={{
                color: "black",
                fontFamily: "Josefin Slab",
                fontWeight: "bold",
                fontSize: "20px",
                marginLeft: "4rem",
                paddingLeft: "3rem",
                paddingRight: "3rem",
              }}
              onClick={this.toggleHandler}
            >
              Design
            </Button>
            {content6}
            <Button
              style={{
                color: "black",
                fontFamily: "Josefin Slab",
                fontWeight: "bold",
                fontSize: "20px",
                marginLeft: "4rem",
                paddingLeft: "3rem",
                paddingRight: "3rem",
              }}
              onClick={this.toggleHandler}
            >
              Others
            </Button>
            {content7}

            <hr style={{ borderTop: "3px solid #ffe767" }} />

            <h2
              style={{
                color: "white",
                fontFamily: "Josefin Slab",
                fontWeight: "bold",
                fontSize: "40px",
              }}
            >
              Some Important Courses
            </h2>
            <p style={{ color: "white", fontFamily: "Acme", fontSize: "15px" }}>
              <p>
                <a
                  style={{ color: "white" }}
                  href="http://courses.cse.tamu.edu/keyser/csce121/"
                >
                  CSCE 121:INTRO TO PROGRAM DESIGN AND CONCEPTS
                </a>
              </p>
              <p>
                <a
                  style={{ color: "white" }}
                  href="http://courses.cs.tamu.edu/teresa/csce221/csce221-index.html"
                >
                  CSCE 221:DATA STRUCTURES AND ALGORITHMS
                </a>
              </p>
              <p>
                <a
                  style={{ color: "white" }}
                  href="http://faculty.cs.tamu.edu/shsze/courses/spring17/"
                >
                  CSCE 222:DISCRETE STRUCTURES FOR COMPUTING
                </a>
              </p>
              <p>
                <a
                  style={{ color: "white" }}
                  href="http://faculty.cse.tamu.edu/tanzir/sp19/313/"
                >
                  CSCE 313:INTRO TO COMPUTER SYSTEM
                </a>
              </p>
              <p>
                <a
                  style={{ color: "white" }}
                  href="http://faculty.cse.tamu.edu/tanzir/sp19/315/"
                >
                  CSCE 315:PROGRAMMING STUDIO
                </a>
              </p>
              <p>
                <a
                  style={{ color: "white" }}
                  href="http://courses.cse.tamu.edu/guofei/csce465/"
                >
                  CSCE 465:COMPUTER AND NETWORK SECURITY
                </a>
              </p>
              <p>
                <a
                  style={{ color: "white" }}
                  href="https://engineering.tamu.edu/electrical/academics/degrees/graduate/phd-qualifying-exams/ecen214.html"
                >
                  ECEN 214:ELECTRONIC CIRCUIT THEORY
                </a>
              </p>
              <p>
                <a
                  style={{ color: "white" }}
                  href="https://compass-ssb.tamu.edu/pls/PROD/bwykfupd.p_showdoc?doctype_in=SY&crn_in=34530&termcode_in=201831"
                >
                  ECEN 248:INTRO TO DIGITAL SYSTEM DESIGN
                </a>
              </p>
              <p>
                <a
                  style={{ color: "white" }}
                  href="https://engineering.tamu.edu/electrical/academics/degrees/graduate/phd-qualifying-exams/ecen314.html"
                >
                  ECEN 314:SIGNALS AND SYSTEMS
                </a>
              </p>
              <p>
                <a
                  style={{ color: "white" }}
                  href="http://www.ece.tamu.edu/~spalermo/ecen325.html"
                >
                  ECEN 325:ELECTRONICS
                </a>
              </p>
              <p>
                <a
                  style={{ color: "white" }}
                  href="https://cesg.tamu.edu/courses/ecen-350-computer-architecture-and-design-spring-2019/"
                >
                  ECEN 350:COMPUTER ARCHITECTURE & DESIGN
                </a>
              </p>
              <p>
                <a
                  style={{ color: "white" }}
                  href="https://cesg.tamu.edu/courses/ecen-424-fundamentals-of-networking/"
                >
                  ECEN 424:FUNDAMENTALS OF NETWORKING
                </a>
              </p>
              <p>
                <a
                  style={{ color: "white" }}
                  href="http://ece.tamu.edu/~sunilkhatri/courses/ee449/"
                >
                  ECEN 449:MICROPROCESSOR SYSTEM DESIGN
                </a>
              </p>
              <p>
                <a
                  style={{ color: "white" }}
                  href="http://ece.tamu.edu/~jyyz/ecen454.html"
                >
                  ECEN 454:DIGITAL INTEGRAL CIRCUIT DESIGN
                </a>
              </p>
              <p>
                <a
                  style={{ color: "white" }}
                  href="https://cesg.tamu.edu/courses/ecen-489-mob-apps-android/"
                >
                  ECEN 489:MOBILE APP ANDROID
                </a>
              </p>
              <p>
                <a style={{ color: "white" }} href="https://www.tamu.edu">
                  ECEN 489:SECURITY EMBEDDED SYSTEM
                </a>
              </p>
              <p>
                <a
                  style={{ color: "white" }}
                  href="https://engineering.tamu.edu/student-life/eep/courses.html"
                >
                  ENGR 462:ENGINEERING ENTREPRENEURSHIP HOUR
                </a>
              </p>
              <p>
                <a
                  style={{ color: "white" }}
                  href="https://core.tamu.edu/pdf/ENGR%20482-Syllabus.pdf"
                >
                  ENGR 482:ETHICS AND ENGINEERING
                </a>
              </p>
              <p>
                <a
                  style={{ color: "white" }}
                  href="https://www.math.tamu.edu/courses/math311/"
                >
                  MATH 311:TOPICS IN APPLIED MATHEMATICS I
                </a>
              </p>
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
