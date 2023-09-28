import React, {Component } from 'react'; 
import { Grid, Cell } from 'react-mdl'; 

class Education extends Component {
    render() {
        return(
            <Grid>
                <Cell col={4}> 
                    <p style={{fontSize: '17px'}}>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}> 
                    <h4 style={{marginTop: '0px', fontFamily: 'Josefin Slab', fontWeight: 'bold', fontSize: '25px'}}>{this.props.schoolName}</h4>
                    <h5 style={{fontFamily: 'Josefin Slab', fontWeight: 'bold', fontSize: '40px'}} >
                        <p style={{fontSize: '18px'}}>{this.props.schoolDescription1}</p>
                        <p style={{fontSize: '18px'}}>{this.props.schoolDescription2}</p>
                        <p style={{fontSize: '18px'}}>{this.props.schoolDescription3}</p>
                    </h5>
                </Cell>
            </Grid>
        )
    }
}

export default Education; 