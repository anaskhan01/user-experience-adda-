import React from 'react'
import './style.css'
import wocommerce from './Images/woocommerce-vs-shopify.jpg.webp';
import chatGpt from './Images/chatGPT-1.jpg.webp';
import Wrappers from '../../Components/Wrappers/Wrappers';
import firstimg from "./Images/design-system.jpg.webp"
import secondimg from "./Images/uiux.webp"
import thirdimg from "./Images/ux.webp"
import css from "./Images/css.jpg.webp"
import windowsimg from "./Images/microsoft.jpg.webp"
import iosimg from "./Images/ios.jpg.webp"
import androidimg from "./Images/android.jpg.webp"
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <section id="banner">
        <div className="container">
          <div className="bannermain">
            <h1 className='mb'>UX Adda Creates Meaningful Experiences Through Design</h1>
            <p className='mb'>Whether you are looking to improve the usability of an existing product or create a new one from scratch, our UX design services can help you <br /> achieve your goals. Contact us to learn more about how we can help you create a great user experience.</p>
            <button className='btn primary'>Contact Us</button>
          </div>
        </div>
      </section>
      <section id="trending">
        <div className="container">
          <h2>UX Adda | Trending Articles</h2>
          <div className="trendingmain">
            <div className="trending-left">
              <div className="wrapper">
                <div className="textleftwrapper" onClick={()=> navigate('/design')}>
                  <div className="meta">Design</div>
                  <h3>What is a Design System and How Useful Is It?</h3>
                  <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime asperiores quasi repellendus molestiae recusandae ut corporis quo saepe dolorum</span>
                </div>
              </div>
            </div>
            <div className="trending-right">
              <div className="rightwrapper" onClick={()=> navigate('/design')}>
                <div className="imgrightwrapper"> <img src={wocommerce} alt="woocommerce" /></div>
                <div className="textrightwrapper">
                  <div className="meta">Ecommerce</div>
                  <h3>Shopify vs WordPress WooCommerce User Experience</h3>
                  <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime asperiores quasi repellendus molestiae recusandae ut corporis quo saepe dolorum</span>
                </div>
              </div>
              <div className="rightwrapper no-margin">
                <div className="imgrightwrapper"> <img src={chatGpt} alt="ChatGpt" /></div>
                <div className="textrightwrapper">
                  <div className="meta">Technology</div>
                  <h3>What is ChatGpt and how powerful it is</h3>
                  <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime asperiores quasi repellendus molestiae recusandae ut corporis quo saepe dolorum</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     <section
     id='wrapper'>
     
      <Wrappers heading="Design" firstimg={firstimg} secondimg={secondimg} thirdimg={thirdimg}
        firsttitle="What is a Design System and How Useful Is It?"
        secondtitle="UI vs UX Design: Understanding the Difference"
        thirdtitle="What is UX Design? Understanding the Process"
        firstpara="What is a Design System and How Useful Is It? A Design ..."
        secondpara="UI vs UX Design: Understanding the Difference Learn about the differences between ..."
        thirdpara="What is UX Design? UX Design refers to the overall experience of ..."
        firstdate="February 24, 2024"
        seconddate="January 3, 2023"
        thirddate="July 7, 2021"
        firstmeta="Design"
        secondmeta="Design"
        thirdmeta="UX Design"
      />
     
      <Wrappers
        heading="Development"
        firstimg={wocommerce}
        secondimg={chatGpt}
        thirdimg={css}
        firsttitle="Shopify vs. WordPress WooCommerce User Experience"
        secondtitle="What is ChatGPT and How Powerful is it?"
        thirdtitle="What is CSS or Cascading Style Sheets & How Strong is it?"
        firstpara="Introduction Shopify vs. WordPress WooCommerce: When it comes to launching an online ..."
        secondpara="What is ChatGPT and How Powerful is it? GPT-3 (short for “Generative ..."
        thirdpara="What is CSS or Cascading Style Sheets & How Strong is it? ..."
        firstdate="October 21, 2023"
        seconddate="January 5, 2023"
        thirddate="January 3, 2023"
        firstmeta="Ecommerce"
        secondmeta="Technology"
        thirdmeta="CSS"
      />
      <Wrappers
        heading="App"
        firstimg={windowsimg}
        secondimg={iosimg}
        thirdimg={androidimg}
        firsttitle="What is Microsoft Windows and How User-friendly is it?"
        secondtitle="What is iOS and the Pros & Cons of Using it?"
        thirdtitle="What is Android and How Powerful Is It?"
        firstpara="What is Microsoft Windows and How User-friendly is it? Windows is a ..."
        secondpara="What is iOS? iOS is a mobile operating system developed by Apple ..."
        thirdpara="What is Android and How Powerful Is It? Android is a mobile ..."
        firstdate="January 4, 2023"
        seconddate="January 3, 2023"
        thirddate="January 3, 2023"
        firstmeta="Windows"
        secondmeta="IOS"
        thirdmeta="Android"
      />
    
     </section>
    </>
  )
}

export default Home
