import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function PrizesCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          
            These are some of my working experiences <p></p> <p></p>
        
          <ul>
            <li className="about-activity">
              <ImPointRight /> WEBMASTER at Jadavpur University IEEE JUSB - <b>June 2022 – PRESENT</b>   <p></p>
            </li>
            <li className="about-activity">
              <ImPointRight /> Techical LEAD Coordinator at Jadavpur University E-CELL - July 2021 – PRESENT <p></p>
            </li>
            <li className="about-activity">
              <ImPointRight /> TEACHING ASSISSANT AT CODING NINJAS (DATA-STRUCTURES AND ALGORITHM) April 2022-Present <p></p>
            </li>
            <li className="about-activity">
              <ImPointRight /> BACKEND DEVELOPER +MARKETING INTERN AT FLUTTER - DECEMBER 2021 – MARCH 2022 <br />
(Made a few changes in the matching algorithm and fixed a few bugs. Also developed creative content for marketing.)

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

export default PrizesCard;
