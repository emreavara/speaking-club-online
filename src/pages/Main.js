import React from "react";
import Footer from "../components/Footer";
import styled from "styled-components";
import MeetingCardList from "../components/MeetingCardList";
import Navi from "../components/Navi";
import PageLayout from "../components/PageLayout";
function Main() {
  return (
    <PageLayout>
      <MeetingCardList />
    </PageLayout>
  );
}

export default Main;

const MainDiv = styled.div`
  height: 100vh;
  background-color: #555555;
  overflow: auto;
`;
