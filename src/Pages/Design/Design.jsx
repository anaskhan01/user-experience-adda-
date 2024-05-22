import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import Card from '../../Components/Cards/Card'
import design from "./designsystem.jpg.webp"
import uiux from "./uiux.webp"
import ux from "./ux.webp"
import userinteface from "./ui-design.jpg.webp"
// import adobe from "./adobe.jpg"

const Design = () => {
  return (
    <>
      <section id='design'>
        <p className='blackborder'></p>
        <div className="container">
          <div className="pageid mt30">
            <Link>Home</Link>  <span>- Design</span>
          </div>
          <h2 className='mt30'>Design</h2>
          <Card
            firstimg={design}
            firstheading="What is a Design System and How Useful Is It?"
            firstdate="February 24, 2024"
            firstcmnt="No Comments"
            firstmeta="Design"
            firstpara="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste vero quas voluptatum accusamus iure, nemo consequatur voluptatem eius nesciunt officia."

            secondimg={uiux}
            secondheading="UI vs UX Design: Understanding the Difference"
            seconddate="January 3, 2023"
            secondmeta="Design"
            secondcmnt="No Comments"
            secondpara="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio voluptatum voluptatibus,."

            thirdimg={ux}
            thirdheading="What is UX Design? Understanding the Process"
            thirddate="July 7, 2021"
            thirdmeta="UX Design"
            thirdcmnt="1 Comments"
            thirdpara="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio voluptatum voluptatibus,."

            fourthimg={userinteface}
            fourtheading="User Interface (UI) Design: Exploring the Fundamentals"
            fourthdate="July 7, 2021"
            fourthmeta="UI Design"
            fourthcmnt="No Comments"
            fourthpara="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio voluptatum voluptatibus,."
          />


        </div>
      </section>
    </>
  )
}

export default Design
