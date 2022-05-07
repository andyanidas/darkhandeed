import React, { useEffect, useState } from "react";
import "../style/main.css";
import partTwoPic from "../images/pictures/part-two-pic.png";
import { Carousel } from "react-bootstrap";
import { images } from "../services/otherServices";
import useFetch from "../customHooks/useFetch";
import NewsCard from "./NewsCard";
import { News } from "../types/fetch";
import { Container } from "react-bootstrap";
import { useContent } from "../contexts/Content";
interface Content {
  id: number;
  attributes: {
    body: string;
    createdAt: Date;
    publishedAt: Date;
    title: string;
    updatedAt: Date;
  };
}

const partTwoStyle = {
  backgroundImage:
    "url(" +
    "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" +
    ")",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
export default function Main() {
  const { loading, error, data } = useFetch("posts");
  const [about, setAbout] = useState<Content | undefined>();
  const contents = useContent();
  useEffect(() => {
    setAbout(contents.find((content) => content.id === 1));
  }, [contents]);
  const partTwoStyle = {
    backgroundImage:
      "url(" +
      "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" +
      ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="main">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-30"
            src={images.slide.image1}
            alt="First slide"
          />
          <Carousel.Caption>
            <img src={images.other.slideLogo} alt="" />
            <h3>First slide label</h3>

            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images.slide.image2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-30"
            src={images.slide.image3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container className="carausel order-1">
        <div className="part-two">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Container>
      <Container>
        <div className="d-flex align-items-center mt-4">
          <div>
            <h1 className="font-weight-bold text-uppercase ms-4">
              {about && about?.attributes["title"]}
            </h1>
            <p>{about && about?.attributes["body"]}</p>
          </div>
          <img src="./pictures/back-to-school.png" alt="" className="w-30" />
        </div>
      </Container>
      <Container>
        <div className="part-one">
          <p>
            We are a web & app development company that turns your ideas into a
            new driving force of your business.
          </p>
          <p>
            We hire brilliant web and mobile app developers to deliver projects
            on time and maintain the top-notch code standards.
          </p>
        </div>
        <div className="part-two">
          <div>
            <img src="" alt="" />
          </div>
        </div>
        <div className="part-three">
          {data?.data.map((data: News) => (
            <NewsCard key={data.id} {...data} />
          ))}
        </div>
        <div className="part-four">
          <div className="texts">
            <h2>Mobile Applications</h2>
            <p>
              To create a fast and smooth app for any platform, we also deliver
              products with outsourcing app development model. This model gives
              a reasonable solution to control the budget and other recourses.{" "}
            </p>
            <p>
              Our team connects conventional essential technologies and
              architecture with the unique logic of the app. Combined with a
              polished design and UI/UX an app becomes the one that reaches
              goals of our customers and wins the hearts of users.
            </p>
            <button>Get the app price &#8594;</button>
          </div>
        </div>
      </Container>
    </div>
  );
}
