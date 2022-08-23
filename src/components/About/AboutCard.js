import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Muhammad Ahmad Niaz </span>
            from <span className="purple"> Lahore, Punjab, Pakistan.</span>
            <br />I have successfully completed my graduation in Information
            Technology in August 2022 from University of Education, Lahore. I
            really love to work on latest technologies and apply them in my
            work. I have a keen interest in developing my Skillset to become a
            competetive developer. I am a self-driven, self-motivated person.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Sports (pro cricketer)
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies and Animes
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "You can't know if you can do it or not without doing it!"{" "}
          </p>
          <footer className="blockquote-footer">Ahmad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
