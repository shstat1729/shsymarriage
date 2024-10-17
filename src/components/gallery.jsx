import React from "react";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import styled from "styled-components";

import GalleryPhoto1 from "../assets/2.jpeg";
import GalleryPhoto2 from "../assets/3.jpeg";
import GalleryPhoto3 from "../assets/4.jpeg";
import GalleryPhoto4 from "../assets/5.jpeg";
import GalleryPhoto5 from "../assets/6.jpeg";
import GalleryPhoto6 from "../assets/7.jpeg";
import GalleryPhoto7 from "../assets/8.jpeg";
import GalleryPhoto8 from "../assets/9.jpeg";
import GalleryPhoto9 from "../assets/10.jpeg";
import GalleryPhoto10 from "../assets/11.jpeg";
import GalleryPhoto11 from "../assets/12.jpeg";
import GalleryPhoto12 from "../assets/13.jpeg";
import GalleryPhoto13 from "../assets/14.jpeg";
import GalleryPhoto14 from "../assets/15.jpeg";
import GalleryPhoto15 from "../assets/16.jpeg";
import GalleryPhoto16 from "../assets/17.jpeg";
import GalleryPhoto17 from "../assets/1.jpeg";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;
// Create a styled ImageGallery with fixed width and height
const StyledImageGallery = styled(ImageGallery)`
  .image-gallery-image {
    width: 20px;  // Set your desired width
    height: 20px;  // Set your desired height
  }
`;

const images = [
  {
    original: GalleryPhoto17,
    thumbnail: GalleryPhoto17,
  },
  {
    original: GalleryPhoto1,
    thumbnail: GalleryPhoto1,
  },
  {
    original: GalleryPhoto2,
    thumbnail: GalleryPhoto2,
  },
  {
    original: GalleryPhoto3,
    thumbnail: GalleryPhoto3,
  },
  {
    original: GalleryPhoto4,
    thumbnail: GalleryPhoto4,
  },
  {
    original: GalleryPhoto5,
    thumbnail: GalleryPhoto5,
  },
  {
    original: GalleryPhoto6,
    thumbnail: GalleryPhoto6,
  },
  {
    original: GalleryPhoto7,
    thumbnail: GalleryPhoto7,
  },
  {
    original: GalleryPhoto8,
    thumbnail: GalleryPhoto8,
  },
  {
    original: GalleryPhoto9,
    thumbnail: GalleryPhoto9,
  },
  {
    original: GalleryPhoto10,
    thumbnail: GalleryPhoto10,
  },
  {
    original: GalleryPhoto11,
    thumbnail: GalleryPhoto11,
  },
  {
    original: GalleryPhoto12,
    thumbnail: GalleryPhoto12,
  },
  {
    original: GalleryPhoto13,
    thumbnail: GalleryPhoto13,
  },
  {
    original: GalleryPhoto14,
    thumbnail: GalleryPhoto14,
  },
  {
    original: GalleryPhoto15,
    thumbnail: GalleryPhoto15,
  },
  {
    original: GalleryPhoto16,
    thumbnail: GalleryPhoto16,
  },

];

const Gallery = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>우리의 아름다운 순간</Title>
      </Divider>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
      />
    </Wrapper>
  );
};

export default Gallery;
