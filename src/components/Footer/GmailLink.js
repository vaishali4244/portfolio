import React from 'react';
import './Footer.css';

class GmailLink extends React.Component {
  openGmailCompose() {
    const recipient = 'vaishali120895@gmail.com'; // Replace with your desired recipient email address
    const subject = 'Hello Mam'; // Replace with your desired email subject 

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}`;
    window.open(gmailUrl);
  }

  render() {
    return (
      <img src={require(('../../assets/gm.png'))} className='gmail' onClick={this.openGmailCompose} alt="/"></img>
    );
  }
}

export default GmailLink;
