import React from "react";
import styled from "styled-components";
import QuotePaper from "../assets/Quote.png";
import Flower from "../assets/flower1.png";

const Wrapper = styled.div`
  padding-top: 42px;
  padding-left: 42px;
  padding-right: 42px;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
`;

const Content = styled.span`
  display: block;
  margin: 0 auto;
  font-size: 1.3rem;
  font-family: "mom_to_daughter";
  text-align: center;
  color: var(--title-color);
  line-height: 2.25rem;
  opacity: 0.75;
  background-image: url(${QuotePaper});
  background-repeat: no-repeat;
  background-position: center;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Quote = () => {
  return (
    <Wrapper>
      <Image src={Flower} data-aos="fade-up" />
      <Content data-aos="fade-up">
        매년 12월 21일이 되면,
        <br />
        저희는 이 날의 사진첩을 꺼내보며
        <br />
        인생에서 가장 행복했던 기억을
        <br />
        떠올릴 것입니다.
        <br />
        그 때, 그 사진 속에,
        <br />
        저희와 함께 웃고 있는
        <br />
        여러분이 있었으면 좋겠습니다.
        <br />
        <br />
      </Content>
    </Wrapper>
  );
};

export default Quote;
