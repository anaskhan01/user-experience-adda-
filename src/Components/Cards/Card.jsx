import React from 'react'
import "./style.css"
import { CiCalendar } from "react-icons/ci";
import { FaComments } from "react-icons/fa";
import news from "./news.webp"
const Card = (props) => {
  return (
    <>
      <div className="cardmaincontainer">
            <div className="cardwrapper">
              <div className="cards">
                <div className="firstcard">
                  <div className="designpicture">
                    <img src={props.firstimg} alt="" />
                  </div>
                  <div className="cardcontext">
                    <h3>{props.firstheading}</h3>
                    <div className="dateandicon"> <CiCalendar /><span>{props.firstdate}</span> <FaComments /> <span>{props.firstcmnt}</span></div>
                    <p>{props.firstpara}</p>
                  </div>
                </div>
                <div className='singlecard'>
                  <div>
                    <img src={props.secondimg} alt="uiux" />
                  </div>
                  <div className='singalcardtext'>
                    <h3>{props.secondheading}</h3>
                    <div className="dateandicon"> <CiCalendar /><span>{props.seconddate}</span><FaComments /> <span>{props.secondcmnt}</span> <span>{props.secondmeta}</span></div>
                    <p>{props.secondpara}</p>
                  </div>
                </div>
                <div className='firstcard'>
                  <div>
                    <img src={props.thirdimg} alt="uiux" />
                  </div>
                  <div className='cardtext'>
                    <h3>{props.thirdheading}</h3>
                    <div className="dateandicon"> <CiCalendar /><span>{props.thirddate}</span><FaComments /> <span>{props.thirdcmnt}</span> <span>{props.thirdmeta}</span></div>
                    <p>{props.thirdpara}</p>
                  </div>
                </div>
                <div className='firstcard'>
                  <div>
                    <img src={props.fourthimg} alt="uiux" />
                  </div>
                  <div className='cardtext'>
                    <h3>{props.fourtheading}</h3>
                    <div className="dateandicon"> <CiCalendar /><span>{props.fourthdate}</span><FaComments /> <span>{props.fourthcmnt}</span> <span>{props.fourthmeta}</span></div>
                    <p>{props.fourthpara}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="news">
              <img src={news} alt="" />
            </div>
          </div>
    </>
  )
}

export default Card
