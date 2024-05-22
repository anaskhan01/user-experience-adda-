import React from 'react'
import './style.css'
import { Link } from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import { MdDriveFileMove } from "react-icons/md";

const Wrappers = (props) => {
    return (
        <>
            <section id='wrappersection'>
                <div className="container">
                    <div className="wrapperheading">
                        <h3>{props.heading}</h3>
                        <Link>View All <FaArrowRightLong /></Link>
                    </div>
                    <div className="wrapper-main">
                        <div className="wrappers">
                            <div className="wrappersimg">
                                <img src={props.firstimg} alt="design-system" />
                            </div>
                            <div className="wrapperstext">
                                <h3>{props.firsttitle}</h3>
                                <div className="dateandicon"> <CiCalendar /><span>{props.firstdate}</span> <MdDriveFileMove /> <span>{props.firstmeta}</span></div>
                                <p>{props.firstpara}</p>
                            </div>
                        </div>


                        <div className="wrappers">
                            <div className="wrappersimg">
                                <img src={props.secondimg} alt="uivsux" />
                            </div>
                            <div className="wrapperstext">
                                <h3>{props.secondtitle}</h3>
                                <div className="dateandicon"> <CiCalendar /><span>{props.seconddate}</span> <MdDriveFileMove /> <span>{props.secondmeta}</span></div>
                                <p>{props.secondpara}</p>
                            </div>
                        </div>


                        <div className="wrappers">
                            <div className="wrappersimg">
                                <img src={props.thirdimg} alt="uxdesign" />
                            </div>
                            <div className="wrapperstext">
                                <h3>{props.thirdtitle}</h3>
                                <div className="dateandicon"> <CiCalendar /><span>{props.thirddate}</span> <MdDriveFileMove /> <span>{props.thirdmeta}</span></div>
                                <p>{props.thirdpara}</p>
                            </div>
                        </div>
                    </div>
                  
                </div>
            </section>
        </>
    )
}

export default Wrappers
