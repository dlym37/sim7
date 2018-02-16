import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div className='login'>
                <div className='black'>
                    <div ></div>
                </div>
                <div className='blue'>
                    <input placeholder='New Name'/>
                    <input placeholder='New URL' className='urlInput'/>
                   <Link to='/browse'> 
                      <div className='logButt'>Login</div> 
                   </Link>
                </div>
            </div>
    );
  }
}

export default Login;