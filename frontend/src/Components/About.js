import React from "react";
import "../App.css"; // Import the CSS file
import Footer from "./footerAbout";

export default function About() {
  return (
    <div className="aligncenter1">
      <section id="about">
        <div className="quicksand18">
          <h1 style={{ fontSize: "100px" }}>ABOUT US</h1>
          <p>
            Welcome to GuidedTravels! We're excited to assist you in planning
            your next adventure. Whether you're a seasoned traveler or a
            first-time explorer, our goal is to provide you with personalized
            trip recommendations that cater to your preferences and interests.
            So, get ready to embark on unforgettable journeys with
            GuidedTravels.
          </p>
        </div>
        <div id="about-2">
          <br />
          <div className="content-box-lg">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="about-item text-center">
                    <h1>MISSION</h1>
                    <hr />
                    <p className="quicksand10">
                      At GuidedTravels, our mission is to simplify the process
                      of trip planning and provide you with personalized travel
                      recommendations. We understand that each traveler has
                      unique preferences and desires when it comes to their
                      journeys. That's why we leverage a combination of data
                      analysis and algorithms to analyze your travel preferences
                      and suggest the perfect destinations and experiences for
                      you. Our website aims to inspire and guide travelers,
                      helping them discover new destinations and create
                      memorable travel experiences effortlessly.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="about-item text-center">
                    <h1>FEATURES</h1>
                    <hr />
                    <p className="quicksand10">
                      GuidedTravels offers a range of features to enhance your
                      travel planning experience. Users can search for
                      destinations based on their interests, such as adventure,
                      culture, nature, or relaxation. Our platform allows
                      registered users to save and rate their favorite trips,
                      enabling them to create personalized travel itineraries
                      and keep track of their past adventures. With features
                      like "Recommended Trips," we strive to provide a diverse
                      selection of travel options to cater to every traveler's
                      preferences. Our user-friendly interface ensures that
                      finding and selecting your dream destinations is quick and
                      hassle-free.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="about-item text-center">
                    <h1>FUTURE UPDATES</h1>
                    <hr />
                    <p className="quicksand10">
                      We have exciting plans for the future of GuidedTravels.
                      One of our potential enhancements includes integrating
                      with renowned travel services, allowing users to
                      seamlessly book flights, accommodations, and activities
                      directly through our platform. We also aspire to create a
                      community of passionate travelers who can share their
                      travel stories, tips, and recommendations. Additionally,
                      we plan to expand our offerings beyond traditional trips
                      and incorporate unique travel experiences, such as
                      eco-tours, culinary adventures, and wellness retreats.
                      Stay tuned for these exciting updates!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h1 className="quicksand20" style={{ marginTop: "0" }}>
        <i>*Hope You Enjoy Your Journeys with GuidedTravels*</i>
      </h1>
      <Footer />
    </div>
  );
}
