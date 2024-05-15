import React from 'react';
import './Contact.css';


const GmailLink = () => {

  const openGmailCompose = () => {
    const recipient = 'vaishali120895@gmail.com'; // Replace with your desired recipient email address
    const subject = 'Regarding the Job Opportunity'; // Replace with your desired email subject 

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}`;
    window.open(gmailUrl);
  }


  return (
    <img src={require(('../../assets/logo/gm.png'))} className='gmail' onClick={openGmailCompose} alt="/"></img>
  );
}

export default GmailLink;
