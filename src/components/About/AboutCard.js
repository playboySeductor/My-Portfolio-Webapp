import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sainik Khaddar </span>
            from <span className="purple"> Kolkata, West Bengal, India.</span>
            <br />I am pursuing B-TECH in electrical engineering from Jadavpur University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Motivational/Tech/Sports Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Video Editing
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Talk is cheap. Show me the Code"{" "}
          </p>
          <footer className="blockquote-footer">Sainik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
