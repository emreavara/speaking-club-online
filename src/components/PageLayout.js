import React from "react";
import Footer from "../components/Footer";
import styled from "styled-components";
import MeetingCardList from "../components/MeetingCardList";
import Navi from "../components/Navi";
function PageLayout({children}) {
  return (
    <MainDiv>
      <Navi />
      {children}
    </MainDiv>
  );
}

export default PageLayout;

const MainDiv = styled.div`
  height: 100vh;
  background-color: #555555;
  overflow: auto;
`;
