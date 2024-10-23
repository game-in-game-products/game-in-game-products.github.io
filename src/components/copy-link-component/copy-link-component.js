import React, { useState } from 'react';

const CopyLinkComponent = ({link}) => {
  const [copySuccess, setCopySuccess] = useState('');
 

  // Function to copy the link to the clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(link).then(() => {
      setCopySuccess('Copied!');
    }).catch((err) => {
      setCopySuccess('Failed to copy');
      console.error('Error copying text: ', err);
    });
  };

  return (
    <div className=" mt-4 w-100">
      <div className="">
          <p className="card-text">
            Here's the link: <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
          </p>
          <button className="btn btn-primary w-100" onClick={copyToClipboard}>
            Copy Link
          </button>
          {copySuccess && <p className="mt-2 text-success">{copySuccess}</p>}
     
      </div>
    </div>
  );
};

export default CopyLinkComponent;