import React from "react";
import img1 from "./images/bkt.jpg";
import img2 from "./images/lum.jpg";
import img3 from "./images/pkh.webp";
import img4 from "./images/chit.webp";
import img5 from "./images/patan.jpg";

export default function Home() {
  return (
    <>
      <div className="bg img-fluid ">
        <div className="align">
          <br />
          <br/>
          WELCOME TO
          <br />
          THE
          <br />
          <div style={{ color: "#FFFFFF" }}>
            "LAND OF THE MOUNTAINS" <br />
            <br />
            <br /> <br />
          </div>
        </div>
        <div className="align1">
          LET'S GO
          <br />
          <div className="align2">
            From the soaring peaks of the Himalayas to the serene beauty of its
            many lakes and rivers, Nepal is a land of astonishing natural
            wonders. Explore the natural beauty and discover the warmth and
            hospitality of Nepalese people.
            <br />
            <br />
            <div className="align2">
            <div className="card" style={{ width: "25rem" }}>
              <img
                src={img1}
                className=" card-img-top"
                alt="Logo"
                width="500"
                height="300"
              />
              <div className="card-body">
                <div className="align3">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                                  </p>
                                  </div>
              </div>
            </div>
            

            </div>
          </div>
        </div>
        </div>
    </>
  );
}
