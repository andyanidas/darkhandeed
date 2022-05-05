import React, { useEffect, useState } from "react";
import mainPic from "../images/pictures/pic1.png";
import "../style/main.css";
import partTwoPic from "../images/pictures/part-two-pic.png";
import { Carousel } from "react-bootstrap";
import { images } from "../services/otherServices";
import useFetch from "../customHooks/useFetch";
import NewsCard from "./NewsCard";
import { News } from "../types/fetch";
import { Container } from "react-bootstrap";

export default function Main() {
  const { loading, error, data } = useFetch(
    "https://darkhandeed.herokuapp.com/api/posts"
  );
  return (
    <Container className="order-1">
      <div className="carausel order-1">
        <Carousel className="order-1">
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
      </div>
      <div className="mainBG">
        <div className="headerContent contents">
          <div>
            <h1>We build scaleable & smart solutions</h1>
            <p>
              We are passionate about creating outstanding software solutions
              that create value for your business and lead to success
            </p>
          </div>
          <img src={mainPic} alt="" />
        </div>
        <div className="contents serviceBtn">
          <button>Check out our services... &#8594;</button>
        </div>
      </div>
      <div>
        <div className="part-one">
          <div className="contents secondPart">
            <p>
              We are a web & app development company that turns your ideas into
              a new driving force of your business.
            </p>
            <p>
              We hire brilliant web and mobile app developers to deliver
              projects on time and maintain the top-notch code standards.
            </p>
          </div>
        </div>
        <div className="part-two">
          <img src={partTwoPic} alt="" />
          <div>
            <h3>Custom Solutions for Your Business</h3>
            <p>
              Our expertise in e-commerce, adtech/martech, and people-to-people
              fields as well as other business areas helps us develop web and
              mobile solutions tailored with care for our clients. You can come
              to us at any stage of your project - from just an idea to
              architecture, from development to quality assurance and support.
            </p>
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
      </div>
    </Container>
  );
}
