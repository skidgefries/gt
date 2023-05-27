import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Card1() {
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
                <Button variant="primary">Read more</Button>
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
                <Button variant="primary">Read more</Button>
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
                <Button variant="primary">Read more</Button>
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
                <Button variant="primary">Read more</Button>
              </Card.Body>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card1;
