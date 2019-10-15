import React, {Component } from 'react'; 
import { Grid, Cell, ProgressBar } from 'react-mdl'; 

class Skills extends Component {
    render() {
        return(
            <Grid> 
                <Cell col={12}> 
                    <div style={{display: 'flex'}}> 
                        <h5 style={{color: 'white', fontFamily: 'Josefin Slab', fontWeight: 'bold', fontSize: '25px'}}>{this.props.skill1}</h5>
                        <ProgressBar style={{margin: 'auto', width:'75%'}} progress={this.props.progress1} />
                    </div>
                    <div style={{display: 'flex'}}>
                        <h5 style={{color: 'white', fontFamily: 'Josefin Slab', fontWeight: 'bold', fontSize: '25px'}}>{this.props.skill2}</h5>
                        <ProgressBar style={{margin: 'auto', width:'75%'}} progress={this.props.progress2} />
                    </div>
                    <div style={{display: 'flex'}}>
                        <h5 style={{color: 'white', fontFamily: 'Josefin Slab', fontWeight: 'bold', fontSize: '25px'}}>{this.props.skill3}</h5>
                        <ProgressBar style={{margin: 'auto', width:'75%'}} progress={this.props.progress3} />
                    </div>
                </Cell>
            </Grid>
        )
    }
}

export default Skills; 