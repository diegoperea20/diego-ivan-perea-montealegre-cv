import React from 'react'
import CardProject from './CardProject'
function Projects() {
  return (
    <div className='my-projects'>
        <h2 className='my-skills-subtiitle2'  style={{marginTop:"0px" , marginLeft:"20px"}} id="Projects">Projects</h2>
        
        <CardProject url="https://github.com/diegoperea20/deep_learning/blob/main/semana6/ENTREGABLE/ENTREGABLE/DesarrolloExamen_IEEE.pdf" title="Application of multilayer networks (MLP) to regression problems" text='Data set "Seoul Bike Sharing Demand" contains the count of public bikes rented in one hour, bike availability problem solved. 2022'/>
        <CardProject url="https://github.com/diegoperea20/IoT_-internet_of_things-/blob/main/tercer_corte/tercer_parcial/Parcial_3_diego_perea_IoT/Parcial_3_iot.pdf" title="IoT project with MQTT protocol and BBDD" text="IoT object that measures temperature, humidity, date and time variables converted
        into JSON to be sent with MQTT protocol and stored in a database. 2022
          "/>
        <CardProject url="https://github.com/diegoperea20/ia_sistemas_embebidos/blob/main/tercer_corte/miniproyecto/audio_informe.pdf" title="Audio recognition arduino nano BLE Tiny ML" text="Audio recognition in arduino nano BLE Sense Tiny ML where it recognizes voice
        commands to activate a LED and motor. 2022
        "/>
        <CardProject url="https://github.com/diegoperea20/deep_learning/blob/main/semana12/DesarrolloExamen_IEEE.pdf" title="Application of convolutional networks to image processing" text="Convolutional networks in the Colombian wildlife data set. 2022
        "/>
        <CardProject url="https://github.com/diegoperea20/robotics_final_project/blob/main/INFORM%20ROBOTICS.docx.pdf" title="Robotic umbrella ROS2" text="Robotic sunshade or umbrella with trajectories to shade according to sun
        positioning angles 2022"/>
        <CardProject url="https://github.com/diegoperea20/diego-ivan-perea-montealegre-cv" title="Create my own website" text="I created my own website using different languages and learned tools to visualize my information, skills, projects, education and my contact.2023 "/>
        <CardProject url="https://github.com/diegoperea20/IOT-Flask-React" title="Iot project with backend and frontend " text="IOT project with Backend in  Python(Flask) and Frontend in React. 2023 "/>
         </div>

         
  )
}

export default Projects