import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Contact us at support@khushiyaanfoundation.or </h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>KHUSHIYAAN FOUNDATION</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>Reach Us Out at</p>
            
            
            <a href="https://www.facebook.com/khushiyaanorg/"><i className='fab fa-facebook-f icon'></i></a>
            <a href="https://twitter.com/Khushiyaan_Org"><i className='fab fa-twitter icon'></i></a>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
          <a href="https://www.khushiyaanfoundation.org/">
          <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </a>
          </div>


          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                GB 21, High Street Mall, Kapurbawdi, Thane, Maharashtra 400607
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                097691 81218
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                support@khushiyaanfoundation.org
              </li>
            </ul>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer
