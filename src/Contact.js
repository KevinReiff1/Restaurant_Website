import "./styles.css";
import React from "react";

function Contact() {
  return (
    <div>
      <div className="contactImgContainer">
        <div className="contactTitle">
          <h2>Contact Us!</h2>
        </div>
      </div>
      <div className="contactInfo">
        <p>
          <u>Hours:</u>
          <br></br>
          Monday-Thursday: 11:00 am - 10:00 pm
          <br></br>
          Friday-Saturday: 11:00 am - 12:00 pm
          <br></br>
          Sunday: Closed
        </p>
        <p>
          <u>Location:</u>
          <br></br>
          123 Main Street, Poughkeepsie, NY
        </p>
        <p>
          <u>Phone:</u>
          <br></br>(123) 456-7890
        </p>
        <p>
          <u>Email:</u>
          <br></br>ristorante.italiano@gmail.com
        </p>
      </div>
    </div>
  );
}

export default Contact;
