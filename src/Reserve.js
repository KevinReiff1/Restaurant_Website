import "./styles.css";
import React from "react";

function Reserve() {
  return (
    <div>
      <div className="ReserveContainer">
        <div className="homeTitle">
          <h1>
            <b>Reservations</b>
          </h1>
        </div>
      </div>
      <br></br>

      <h2 className="Time2">
        12:00 PM - 9:00 PM---------------------------------2:00 PM - 7:00
        PM---------------------------------11:00 AM - 9:00 PM
      </h2>
      <div className="homeLinks">
        <div className="homeMenuLink">
          <p>Reserve Indoor!</p>
          <img
            className="ReserveImage"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDjRFTDrRFKokZ_9nZJ841KQbO7przTHAzwA&usqp=CAU"
            alt="Indoor Image"
          />
          <p className="ReserveP">
            Enjoy comfortable indoor lunch, dinner, and dessert seating!
          </p>
          <br></br>
          <input name="myInput" defaultValue="Put Date/Time here!" />
          <button>Submit</button>
        </div>
        <div className="homeResLink">
          <p>Reserve Outdoor!</p>
          <img
            className="ReserveImage"
            src="data:image/jpeg;base64,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"
            alt="Outdoor Image"
          />
          <p className="ReserveP">
            Take advantadge of a beautiful day with a delicious meal outside!
          </p>
          <br></br>
          <input name="myInput1" defaultValue="Put Date/Time here!" />
          <button>Submit</button>
        </div>
        <div className="homeSocialLink">
          <p>Reserve Catering!</p>
          <img
            className="ReserveImage"
            src="https://imgproxy.ezcater.com/ws5-kTvfewcbvnDvG2ttCCJL9psmVkpg5m4NKNUm10M/crop:1001:667/g:nowe:218:0/rs:fit:288:154/czM6Ly9lemltYWdl/cy1wcm9kL3VwbG9h/ZHMvZXpfaW1hZ2Uv/aW1hZ2UvMTIwMjQw/L09TRi1QRFgtQW5k/cmV3LTA4MjIyMDE4/LV83MDc4LmpwZw.jpg"
            alt="Catering Image"
          />
          <p className="ReserveP">On demand home cooking for any occasion!</p>
          <br></br>
          <input name="myInput2" defaultValue="Put Date/Time/Address here!" />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Reserve;