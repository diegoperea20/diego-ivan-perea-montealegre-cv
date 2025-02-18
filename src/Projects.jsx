import React from 'react'
import CardProject from './CardProject'
import "./projects.css";

function Projects() {
  return (
    <div className='my-projects'>
        <h2 className='my-project-subtiitle'  id="Projects">Projects <h6>More than 150 projects in github</h6></h2>
        <CardProject url="https://shoptest-diegoperea.vercel.app/" title="Store Online" text="E-commerce store built with Next.js, TypeScript, and Tailwind CSS. Fast, scalable, and customizable, with shopping cart, authentication, order creation, and payments via PayPal. 2025 "/>
        <CardProject url="https://adminshoptest-diegoperea.vercel.app/sign-in" title="Admin Store Online" text="Admin E-commerce store built with Next.js, TypeScript, and Tailwind CSS. Fast, scalable, and customizable, with shopping cart, authentication, order creation, and payments via PayPal. 2025 "/>
        <CardProject url="https://react-file-input-component.vercel.app/" title="React File Input Component" text="React File Input Component in which you can Drag and drop files or select files and you can see a visualization of files like photos, pdf, .docx and .xlsx. 2024 "/>
        <CardProject url="https://minimum-temperature-melbourne.vercel.app/" title="Minimum Temperature Predictions since 1991 in Melbourne" text="Nextjs Minimum Temperature Predictions since 1991 in Melbourne with dataset Daily Minimum Temperatures in Melbourne. 2024 "/>
        <CardProject url="https://clasification-x-ray-pneumonia.vercel.app/" title="Clasification XRAY Pneumonia" text="Nextjs Classification of chest x-ray images with pneumonia and normal using the kaggle dataset Chest X-Ray Images (Pneumonia), converting to .h5 model to tensorflowjs that is .json and .bin 2024 "/>
        <CardProject url="https://qr-scanner-online.vercel.app/" title="Qr Scanner" text="Qr Scanner where you can scan with the camera (change camera) and be redirected to the scanned url and shown the url. Or you can also select the file or drag the file and be redirected to the scanned url and shown the url. 2024 "/>
        <CardProject url="https://sentiment-analysis-twitter-x.vercel.app/" title="Sentiment Analysis Twitter X" text="Nextjs Sentiment Analysis Twitter X with Tensorflow converting to .h5 model to tensorflowjs that is .json and .bin 2024 "/>
        <CardProject url="https://netflix-cluster.vercel.app/" title=" Netflix Cluster" text="Nextjs Netflix Cluster with Tensorflow converting a kmeans cluster model to tensorflowjs that is .json 2024 "/>
        <CardProject url="https://nextjs-wine-quality-prediction.vercel.app/" title="Wine quality prediction" text="Nextjs Wine quality prediction with Tensorflow converting .h5 model to tensorflowjs that is .json and .bin 2024 "/>
        <CardProject url="https://iris-plant-classification.vercel.app/" title="Iris Plant Classification" text="Nextjs Iris Plant Classification data with Tensorflow converting to .h5 model to tensorflowjs that is .json and .bin. 2024 "/>
        <CardProject url="https://classification-cats-dogs.vercel.app/" title="Application for classifying images of cats and dogs" text="Nextjs application for classifying images of cats and dogs using tensoflowjs, converting a.h5 model to tensorflowjs that is .json and .bin. 2024 "/>
        <CardProject url="https://listanime-umber.vercel.app/" title="Anime list" text="Anime list where you can filter anime by categories, value, order and status. 2024 "/>
        <CardProject url="https://github.com/diegoperea20/IOT-Flask-React" title="Iot project with backend and frontend " text="IOT project with Backend in  Python(Flask) and Frontend in React. 2023 "/>
        <CardProject url="https://github.com/diegoperea20/diego-ivan-perea-montealegre-cv" title="Create my own website" text="I created my own website using different languages and learned tools to visualize my information, skills, projects, education and my contact.2023 "/>
        <CardProject url="https://github.com/diegoperea20/robotics_final_project/blob/main/INFORM%20ROBOTICS.docx.pdf" title="Robotic umbrella ROS2" text="Robotic sunshade or umbrella with trajectories to shade according to sun
        positioning angles 2022"/>
        <CardProject url="https://github.com/diegoperea20/deep_learning/blob/main/semana12/DesarrolloExamen_IEEE.pdf" title="Application of convolutional networks to image processing" text="Convolutional networks in the Colombian wildlife data set. 2022
        "/>
        <CardProject url="https://github.com/diegoperea20/ia_sistemas_embebidos/blob/main/tercer_corte/miniproyecto/audio_informe.pdf" title="Audio recognition arduino nano BLE Tiny ML" text="Audio recognition in arduino nano BLE Sense Tiny ML where it recognizes voice
        commands to activate a LED and motor. 2022
        "/>
        <CardProject url="https://github.com/diegoperea20/IoT_-internet_of_things-/blob/main/tercer_corte/tercer_parcial/Parcial_3_diego_perea_IoT/Parcial_3_iot.pdf" title="IoT project with MQTT protocol and BBDD" text="IoT object that measures temperature, humidity, date and time variables converted
        into JSON to be sent with MQTT protocol and stored in a database. 2022
          "/>
        <CardProject url="https://github.com/diegoperea20/deep_learning/blob/main/semana6/ENTREGABLE/ENTREGABLE/DesarrolloExamen_IEEE.pdf" title="Application of multilayer networks (MLP) to regression problems" text='Data set "Seoul Bike Sharing Demand" contains the count of public bikes rented in one hour, bike availability problem solved. 2022'/>
        

        
       

         </div>

         
  )
}

export default Projects