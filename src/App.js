import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'; 
import Main from './components/main'; 
import { Link } from 'react-router-dom';  
import myHeader from './components/header'; 

function App() {
  return (
    <div>
      <h1>
        {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
<div className="demo-big-content">
    <Layout>
        <Header title={<Link style={{textDecoration: 'none', color: 'white', fontFamily: 'Acme'}} to="/"> Roby Nkwamo </Link>} className="header-color" scroll>
            <Navigation style={{fontFamily:'Josefin Slab', fontWeight:'bold', fontSize:'40px'}}>
                <Link style={{fontFamily:'Josefin Slab', fontWeight:'bold', fontSize:'20px'}} to="/resume">Resume</Link>
                <Link style={{fontFamily:'Josefin Slab', fontWeight:'bold', fontSize:'20px'}} to="/aboutme">About Me</Link>
                <Link style={{fontFamily:'Josefin Slab', fontWeight:'bold', fontSize:'20px'}} to="/work">Projects</Link>
                <Link style={{fontFamily:'Josefin Slab', fontWeight:'bold', fontSize:'20px'}} to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'Black', fontFamily: 'Acme'}} to="/"> Roby Nkwamo</Link>}>
            <Navigation style={{fontFamily:'Josefin Slab', fontWeight:'bold', fontSize:'20px'}}>
                <Link style={{fontFamily:'Josefin Slab', fontWeight:'bold', fontSize:'20px'}} to="/resume">Resume</Link>
                <Link style={{fontFamily:'Josefin Slab', fontWeight:'bold', fontSize:'20px'}} to="/aboutme">About Me</Link>
                <Link style={{fontFamily:'Josefin Slab', fontWeight:'bold', fontSize:'20px'}} to="/work">Projects</Link>
                <Link style={{fontFamily:'Josefin Slab', fontWeight:'bold', fontSize:'20px'}} to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
      </h1>
    </div>
  );
}

export default App;
