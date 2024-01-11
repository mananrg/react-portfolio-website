// DownloadButton.js
import React from 'react';
import { ArrowRightCircle } from 'react-bootstrap-icons';

const DownloadButton = () => {
  const handleDownload = () => {
    const resumeUrl = '/resumes/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Manan_Gandhi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
     <button  onClick={handleDownload} id="Lets-Connect" >Download Resume<ArrowRightCircle size={25} /></button>
  );
};

export default DownloadButton;
