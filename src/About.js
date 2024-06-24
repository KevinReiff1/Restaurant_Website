import "./styles.css";
import React from "react";

function About() {
  function infoAlert() {
    alert(
      "Unfortunately, our social media sites are undergoing maintenance. Please try again later.",
    );
  }

  return (
    <div className="aboutWrapper">
      <div className="ourStoryContainer">
        <div className="aboutImage">
          <div className="aboutTitle">
            <h2>Our Story</h2>
          </div>
        </div>
        <div className="storyText">
          <p>
            Welcome to La Famiglia! Here, every dish tells a story of tradition,
            passion, and the warmth of Italian hospitality. Our journey began
            with a dream, nurtured in a small kitchen in Italy, where family
            recipes were passed down through generations. We started from
            scratch, quite literally, with our founders rolling out their first
            batch of homemade pasta on a humble wooden table. It was more than
            just flour and water; it was a blend of history, culture, and a
            pinch of love.
            <br />
            <br />
            In the heart of gorgeous downtown Poughkeepsie, we found a home for
            our dream. Every day, our kitchen buzzes with the same excitement
            and dedication, as we craft each strand of pasta and simmer our
            sauces to perfection. Our hands knead the dough, our hearts infuse
            the flavors, and our family grows with every guest who walks through
            our doors.
            <br />
            <br />
            Join our family for an authentic Italian experience, where every
            meal is a celebration of life’s simple pleasures. We invite you to
            be a part of our story, one plate of handcrafted pasta at a time.
          </p>
        </div>
      </div>
      <div className="contactVisitBoxes">
        <div className="contactContainer">
          <h2> Contact Us!</h2>
          <div className="logosBanner">
            <div className="FacebookLogo">
              <img
                className="FBImage"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png"
              ></img>
            </div>
            <div className="InstagramLogo">
              <img
                className="INImage"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1024px-Instagram-Icon.png"
              ></img>
            </div>
            <div className="YelpLogo">
              <img
                className="YPImage"
                src="https://cdn.freebiesupply.com/logos/large/2x/yelp-icon-logo-png-transparent.png"
              ></img>
            </div>
          </div>
          <div className="contactText">
            <a href="" onClick={infoAlert}>
              Join us on Facebook!
            </a>
            <br /> <br />
            <a href="" onClick={infoAlert}>
              Follow us on Instagram!
            </a>
            <br /> <br />
            <a href="" onClick={infoAlert}>
              Leave a review on Yelp!
            </a>
          </div>
        </div>
        <div className="visitContainer">
          <h2> Visit Us! </h2>
          <img
            className="map"
            src="https://media.istockphoto.com/id/1167641541/vector/city-map-gps-vector-illustration.jpg?s=612x612&w=0&k=20&c=8hbEyRP8GQTRC8a0B3gS9wp8GQm8oGaqChZZhbfsHiA="
          ></img>
          <div className="visitText">
            <p>
              <u>
                123 Main Street,
                <br></br>Poughkeepsie, NY
                <br></br>(123) 456 7890
              </u>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
