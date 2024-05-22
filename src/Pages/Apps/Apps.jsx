import React from 'react'
import Card from '../../Components/Cards/Card'
import { Link } from 'react-router-dom'
import micro from "../Images/microsoft.jpg.webp"
import ios from "../Images/ios.jpg.webp"
import android from "../Images/android.jpg.webp"

const Apps = () => {
  return (
    <>
      <section id='Apps'>
        <p className='blackborder'></p>
        <div className="container">
          <div className="pageid mt30">
            <Link>Home</Link>  <span>- App</span>
          </div>
          <h2 className='mt30'>App</h2>
          <Card 
          firstimg = {micro}
          firstheading = "What is Microsoft Windows and How User-friendly is it?"
          firstdate = "January 4, 2023"
          firstcmnt = "No Comments"
          firstmeta = "Windows"
          firstpara = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste vero quas voluptatum accusamus iure, nemo consequatur voluptatem eius nesciunt officia."

          secondimg = {ios}
          secondheading = "What is iOS and the Pros & Cons of Using it?"
          seconddate = "January 3, 2023"
          secondmeta = "IOS"
          secondcmnt = "No Comments"
          secondpara = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio voluptatum voluptatibus,."

          thirdimg = {android}
          thirdheading = "What is Android and How Powerful Is It?"
          thirddate = "January 3, 2023"
          thirdmeta = "Android"
          thirdcmnt = "No Comments"
          thirdpara = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio voluptatum voluptatibus,."

          fourthimg = {ios}
          fourtheading = "What is iOS and the Pros & Cons of Using it?"
          fourthdate = "January 5, 2023"
          fourthmeta = "IOS"
          fourthcmnt = "No Comments"
          fourthpara = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio voluptatum voluptatibus,."
          />
        </div>
      </section>
    </>
  )
}

export default Apps
