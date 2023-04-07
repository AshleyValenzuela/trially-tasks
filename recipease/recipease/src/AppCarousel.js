import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import InitialQueryModal from "./InitialQueryModal";

function AppCarousel(props) {
  const navigate = props.navigate;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/resized-recipease-img-2.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Need meal plan ideas?</h3>
          <p>
            Not knowing what to cook is a pain. Let us do all the thinking for
            you.
          </p>
          <InitialQueryModal navigate={navigate} />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/resized-recipease-img1.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Need meal plan ideas?</h3>
          <p>
            Not knowing what to cook is a pain. Let us do all the thinking for
            you.
          </p>
          <InitialQueryModal navigate={navigate} />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/resized-recipease-img-3.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Need meal plan ideas?</h3>
          <p>
            Not knowing what to cook is a pain. Let us do all the thinking for
            you.
          </p>
          <InitialQueryModal navigate={navigate} />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default AppCarousel;
