import React from "react";
import "../App.css"; // Import the CSS file
import Footer from "./footerAbout";

export default function About() {
  return (
  
  <div className="aligncenter1">
  

    <section id="about">
        <div className="quicksand18">
            <h1 style={{fontSize:'100px'}}> ABOUT US</h1>
            <p>Welcome to our movie recommendation website! We're excited to help you find your next favorite film. So, kick back, grab some popcorn, and let us help you discover your next favorite movie.</p>
        </div>
        <div id="about-2">
        <br/>
            <div className="content-box-lg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="about-item text-center">
                    
                                <h1>MISSION</h1>
                                <hr/>
                                <p className="quicksand10">At our site, we strive to provide you with personalized movie recommendations that match your preferences and tastes. We understand that everyone's movie taste is unique, which is why we use a variety of data and algorithms to analyze your movie preferences and suggest the perfect movie for you. Our website aims to help users discover new movies they may not have otherwise found, and to make the process of finding and selecting high-quality movies as easy and enjoyable as possible.  </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="about-item text-center">
                                
                                <h1>FEATURES</h1>
                                <hr/>
                                <p className="quicksand10">Users can search for movies by genre, their mood, cast, directors to find movies that match their interests. A registered user can also rate movies that they have watched and also create a watchlist of movies that they want to watch and keep track of movies they have already watched. Our site includes features such as "Recommended Movies", all curated to give you a diverse selection of movies to choose from. We take pride in our user-friendly interface, which makes finding and selecting movies quick and easy.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="about-item text-center">
                             
                                <h1>FUTURE UPDATES</h1>
                                <hr/>
                                <p className="quicksand10">Some potential future enhancements for our website include integration with popular streaming services like Netflix, Hulu, to allow users to easily access recommended movies directly from their streaming accounts. The website could allow users to submit their own movie reviews, creating a community of movie lovers who can share their thoughts and opinions. The website could also expand its content by allowing users to search for series, documentaries and short films that match their interests.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <hr/>
    <br/>
    <br/>
    <h1 className="quicksand20"><i>*Hope You Enjoy Your Visit*</i></h1>

<Footer/>
        </div>
        
  );
}