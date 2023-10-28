import React, { useState } from "react"
import Back from "../common/back/Back"
import "./contact.css"
import axios from "axios";

const Contact = () => {
const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d48268.71758134831!2d72.959591!3d19.2565626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1652535615693!5m2!1sen!2sin" width="300" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'


  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }
  const handleName = (event) => {
    setName(event.target.value);
  }
  const handleSubject = (event) => {
    setSubject(event.target.value);
  }
  const handleMessage = (event) => {
    setMessage(event.target.value);
  }

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/sendmessage", {
        email: email,
        name: name,
        subject: subject,
        message: message,
      });
      console.log(response.message);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flex'>
          <div className='left row'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.348132883469!2d72.99238177490818!3d19.223653747321205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf8698d42afb%3A0x35be78f0704b5c65!2sAnanta%20Khushiyaan%20Ashram!5e0!3m2!1sen!2sin!4v1698474494490!5m2!1sen!2sin" style={{width:"550px", height:"1000px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='right'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>
            <div className='items grid-row'>
              <div className='box '>
                <h4>ADDRESS:</h4>
                <p>GB 21, High Street Mall, Kapurbawdi, Thane, Maharashtra 400607</p>
                <br />
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> support@khushiyaanfoundation.org</p>
                <br />
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p>097691 81218</p>
              </div>
            </div>

            <form action=''>
              <div className='flex'>
                <input type='text' placeholder='Name' onChange={handleName} />
                <input type='email' placeholder='Email' onChange={handleEmail}/>
              </div>
              <input type='text' placeholder='Subject' onChange={handleSubject}/>
              <textarea cols='30' rows='10' onChange={handleMessage} placeholder="Create a message here...">
                
              </textarea>
              <button className='primary-btn' onClick={handleSubmit}>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
           
            <a href="https://www.facebook.com/khushiyaanorg/"><span>FACEBOOK </span></a>
            <a href=" https://twitter.com/Khushiyaan_Org"><span>TWITTER </span></a>
            <a href=" https://www.instagram.com/khushiyaanorg/?hl=en"><span>INSTAGRAM </span></a>
 
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
