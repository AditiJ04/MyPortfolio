import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Aditi Jeena </span>
            from <span className="purple"> Dehradun, India.</span>
            <br />
            I am currently a final year BTech student at Grpahic Era Hill University Dehradun.
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The secret of getting ahead is getting started!!"{" "}
          </p>
          <footer className="blockquote-footer">Aditi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
