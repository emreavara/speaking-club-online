import React from 'react'
import MeetingCard from '../components/MeetingCard'
import MeetingCardList from '../components/MeetingCardList'
import Navi from '../components/Navi'
import meetings from '../data/dummy'
function Main() {
  return (
    <>
    <Navi/>
    <MeetingCardList/>
    </>
  )
}

export default Main
