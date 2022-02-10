import React from 'react'
import Northpic from './image/1.jpg';
import Southpic from './image/2.jpg';
import './loc.css'
const locationconfig ={
    North : {
        text :'hi,you are currently in North reagion.',
        picture: Northpic
    },
    South : {
        text :'hi,you are currently in South reagion.',
        picture: Southpic
    }
}
const locationdisplay = ({latitude}) => {
    var region = (latitude > 0) ? 'North' : 'South';
    const {text,picture} = locationconfig[region]
    // var picture  = (latitude > 0) ? Northpic : Southpic;
  return (
    // <div className='name'>
    <div className={region}>
        <div className='ui raised text cotainer segment'>
      {/* hi, your are currently in {region} region. */}
      <div className='image'>
      <img src={picture} alt="location picture"/>
 </div>
 <div className='ui teal bottom attached label'> <h1>{text}</h1>     
      </div>
     </div>
      </div>
      // </div>
      
    
    
    //  </div>
  )
}

export default locationdisplay
