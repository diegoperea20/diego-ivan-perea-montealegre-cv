import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import photo_qr from "/src/assets/qrqrdiego.png";
import "./contact.css";
function Contact() {
  return (
    <div className='my-contact'>
        <h2 className='my-skills-subtiitle2'  style={{marginTop:"0px" , marginLeft:"20px" ,fontSize:"24px"}} id="Contact">Contact</h2>
        <div className='my-contact-flex'>
            <div style={{flex:1}}>
                <a className='my-education-list' href="https://www.linkedin.com/in/diego-perea-montealegre"><FaLinkedin /> Linkedin
                </a> <br />
                <a className='my-education-list'  href="https://github.com/diegoperea20"><FaGithub /> Github
                </a><br />
                <a className='my-education-list'  href="mailto:diego.perea@uao.edu.co"><FaEnvelope /> Email
                </a><br />
                <a className='my-education-list'  href="https://diegoperea20.github.io/diego-ivan-perea-montealegre-cv/"> Home
                </a><br />
                <a className='my-education-list'  href="#Projects"> Projects
                </a>
            </div>
            <div >
            <img style={{borderRadius: "10px"}} src={photo_qr}
        alt="QR"/>  
            
            </div>
        

        </div>
        
        
        
    
    
    </div>
  )
}

export default Contact