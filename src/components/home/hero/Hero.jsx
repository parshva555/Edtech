import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

import { Link } from "react-router-dom/cjs/react-router-dom.min"
const Hero = () => {
  const buttonStyle={
      marginLeft:"1000px",
      marginTop:"100px"
  }
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO KHUSHIYAAN FOUNDATION' title='Best Online Education Expertise' />
            <p>Khushiyaan is a platform for selfless service for uplifting the helpless and needy. Also, the mission of Khushiyaan is to empower generations beyond the boundaries of caste, creed, communities, cultures, colours, religion and deliver stability, hope and well-being.</p>

          </div>
        </div>
      </section>
      <div className='button' style={buttonStyle}>
              <Link to='courses'>              
              <button >
                VIEW NOTES <i className='fa fa-long-arrow-alt-right'></i>
              </button></Link>
      </div>

            <div className='margin' style={{marginBottom:"100px"}}></div>

    </>
  )
}

export default Hero
