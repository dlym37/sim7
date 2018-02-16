import React, {Component} from 'react';
import {getPet} from '../ducks/reducer'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

 class Browse extends Component {
     constructor(){
         super()
         this.state = {
             animals : []
         }
     }
    componentDidMount(){
        this.props.getPet()
        // console.log('animals', this.props.pets)
    }
    render(){
 
        const animals = this.props.pets.map((e, i)=> {
            return (
                <div key={i}>
                    <div>{e.title}</div>
                    <img src={e.image} alt='image'/>
                    <div>weight: {e.weight}</div>
                    <Link to={`/details/${e.id}`}><div className='logButt'>View Me</div></Link> {/*Sim1 42J*/}
                </div>
            )
        })
        return(
            <div className='login'>
                {animals}
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        pets: state.pets
    }
}

export default connect(mapStateToProps, {getPet})(Browse);