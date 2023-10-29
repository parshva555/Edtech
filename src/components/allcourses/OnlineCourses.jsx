import React from "react"
import "./courses.css"
import { online } from "../../dummydata"
import Heading from "../common/heading/Heading"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
const OnlineCourses = () => {
  return (
    <>
      <section className='online '>
        <div className='container'>
          <Heading subtitle='' title='Browse our online notes' />
    <Link to='/courses'>
    <div className='content grid'>
            {online.map((val) => (
              <div className='box'>
                <div className='img'>
                  <img src={val.cover} alt="course" />
                  <img src={val.hoverCover} alt='COURSE' className='show' />
                </div>
                <h1>{val.courseName} </h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
    </Link>
        </div>
      </section>
    </>
  )
}

export default OnlineCourses
