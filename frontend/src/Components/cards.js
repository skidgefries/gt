import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Card1() {

  const [user, setUser] = useState("");

  const { id } = useParams();
  const token = localStorage.getItem("accessToken");
  const headers = {
    Authorization: token,
    "Content-Type": "application/json",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/user/userProfile/${id}`,
          { headers }
        );
        setUser(response.data.details);
        console.log("This is the data from the backend >>>>>>>", response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [id]);



  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">View</Button>
              </Card.Body>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">View</Button>
              </Card.Body>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">View</Button>
              </Card.Body>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">View</Button>
              </Card.Body>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card1;
