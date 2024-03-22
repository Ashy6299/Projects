import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/esm/Container";
import "../components/Image.css";
import { Typography } from "@mui/material";
import { mySlide } from "./Images";

function Liveshow() {
  return (
    <>
      <Container className='container'>
        {mySlide.map((a) => (
          <Carousel key={a.id}>
            <Carousel.Item interval={1000}>
              <img className='img' src={a.img} alt='#' />
              <Carousel.Caption>
                <Typography variant='h3'>{a.title}</Typography>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        ))}
      </Container>
    </>
  );
}

export default Liveshow;
