import React from 'react'
import PageLayout from '../components/PageLayout'
import MeetingInfo from '../components/MeetingInfo'
function MeetingDetails({meetingInfo}) {
  return (
    <PageLayout>
      <MeetingInfo meeting={meetingInfo} />
    </PageLayout>
  )
}

export default MeetingDetails
