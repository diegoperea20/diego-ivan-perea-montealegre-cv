import React from 'react'
import CardProject from './CardProject'
import "./experience.css";

function Experience() {
  return (
    <div className='my-projects'>
        <h2 className='my-experince-subtiitle '  id="Experience">Work Experience</h2>
        
        <CardProject url="https://github.com/JeickH" title="Software Engineer in EUPHORIA " text='Full Stack python in online store development and deployment with methodology 
        agile. 2023 ' items={["Backend: Database administration, inventory management and shopping cart, using Wompi API (payment gateway), sending html emails and  deployment on AWS.", "Fronted: Creation of header, image carousel, pop-ups, footer, categorical filters and responsive design."]}/>
        <CardProject url="https://www.pressex.co/" title="Full-stack Developer in Pressex Logistics " text="Backend Python and frontend React software development of ERP (enterprise resource planning). 2024 
          "/>
       
        
         </div>

         
  )
}

export default Experience