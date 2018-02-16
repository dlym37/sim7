import React, {Component} from 'react';
import {connect} from 'react-redux';
import {petDetails} from '../ducks/reducer';

class Details extends Component {

componentDidMount(){
    const {id} = this.props.match.params //Sim1 42K
    this.props.petDetails(id);

}
    render(){
       const animal= this.props.pet.map((e, i)=> {
            return (
                <div key={i}>
                    <div>{e.title}</div>
                    <img src={e.image} alt='image'/>
                    <div>weight: {e.weight}</div>
                </div>
            )
        })
        return (
            <div>
                {animal}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        pet : state.pet
    }
}

export default connect(mapStateToProps, {petDetails})(Details);