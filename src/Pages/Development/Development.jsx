import React from 'react'
import Card from '../../Components/Cards/Card'
import { Link } from 'react-router-dom'
import wvs from "../Images/woocommerce-vs-shopify.jpg.webp"
import gpt from "../Images/chatGPT-1.jpg.webp"
import css from "../Images/css.jpg.webp"
import html from "../Images/html.jpg.webp"
const Development = () => {
  return (
    <div>
      <section id='Development'>
        <p className='blackborder'></p>
        <div className="container">
          <div className="pageid mt30">
            <Link>Home</Link>  <span>- Development</span>
          </div>
          <h2 className='mt30'>Development</h2>
          <Card 
          firstimg = {wvs}
          firstheading = "Shopify vs. Wordpress Woocommerce User Experience"
          firstdate = "October 21, 2023"
          firstcmnt = "No Comments"
          firstmeta = "Development"
          firstpara = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste vero quas voluptatum accusamus iure, nemo consequatur voluptatem eius nesciunt officia."

          secondimg = {gpt}
          secondheading = "What is ChatGPT and How Powerful is it?"
          seconddate = "January 5, 2023"
          secondmeta = "Technology"
          secondcmnt = "No Comments"
          secondpara = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio voluptatum voluptatibus,."

          thirdimg = {css}
          thirdheading = "What is CSS or Cascading Style Sheets & How Strong is it?"
          thirddate = "January 3, 2023"
          thirdmeta = "CSS"
          thirdcmnt = "No Comments"
          thirdpara = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio voluptatum voluptatibus,."

          fourthimg = {html}
          fourtheading = "What is HTML: Understanding HyperText Markup Language"
          fourthdate = "January 5, 2023"
          fourthmeta = "HTML"
          fourthcmnt = "No Comments"
          fourthpara = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio voluptatum voluptatibus,."
          />
        </div>
      </section>
    </div>
  )
}

export default Development
