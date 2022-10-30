import React from "react";
import Main from "./pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MeetingCard from "./components/MeetingCard";
import MeetingDetails from "./pages/MeetingDetails";
import meetings from "./data/dummy";
function App() {
  const germanA2B1 = "German A2 B1 ";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/german-a2-b1" element={<MeetingDetails meetingInfo={meetings[2]} />} />
        <Route path="/english-a2-b1" element={<MeetingDetails meetingInfo={meetings[2]} />} />
        <Route path="*" element={<Main />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
