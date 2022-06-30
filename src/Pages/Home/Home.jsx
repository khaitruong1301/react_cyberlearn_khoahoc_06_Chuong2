import React, { Component } from 'react'
import { WithNavigate } from '../../HOC/WithNavigate/WithNavigate';

class Home extends Component {
  render() {
    console.log(this.props)
    return (
      <div>

        <button onClick={()=>{
          this.props.navigate('shop');
        }}>Chuyển hướng</button>
      </div>
    )
  }
}


const HomeWithNavigate = new WithNavigate(Home);

export default HomeWithNavigate;