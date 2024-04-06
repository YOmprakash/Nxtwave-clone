import {useState} from 'react'
import { IoMdMenu } from "react-icons/io";
import './index.css'

function Navbar() {
    const[menu,setMenu] = useState(false)
    

  return (
    <header>
    <div>
        <img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Nxtwave_Colored.svg' alt='logo' className='logo'/>
       


        <ul>
            <a href='#'>Home</a>
           <a href='#'>Programs</a>
            <a href='#'>Reviews</a>
           <a href='#'>Hire With Us</a>
          
            <a href='#login'>Login</a>
           
        </ul>

    </div>      
    </header>
  )
}

export default Navbar
