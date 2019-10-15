import React, {Component } from 'react'; 
import { Grid, Cell } from 'react-mdl'; 

class Leadership extends Component {
    render() {
        return(
            <Grid>
                <Cell col={4}> 
                    <p style={{fontSize: '19px'}}>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}> 
                    <h4 style={{marginTop: '0px', fontStyle:'bold', fontFamily: 'Josefin Slab', fontWeight: 'bold', fontSize: '25px'}}>{this.props.leadershipPlace}</h4>
                    <h5 style={{marginTop: '0px', fontStyle: 'italic', fontFamily: 'Josefin Slab', fontWeight: 'bold', fontSize: '20px'}}>{this.props.leadershipName}</h5>
                    <p style={{fontSize: '18px'}}>{this.props.leadershipDescription1}</p>
                    <p style={{fontSize: '18px'}}>{this.props.leadershipDescription2}</p>
                    <p style={{fontSize: '18px'}}>{this.props.leadershipDescription3}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Leadership;