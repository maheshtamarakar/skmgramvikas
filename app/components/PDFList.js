// components/PDFList.js
import React from 'react';
import './style.css'

const PDFList = ({ pdfs }) => {
  return (
    <div className="pdf-list">
      {pdfs.map((pdf, index) => (
        <div key={index} className="pdf-item">
          <span className="pdf-name">{pdf.name}</span>
          <a href={pdf.url} download className="download-button">
            Download
          </a>
        </div>
      ))}
    </div>
  );
};

export default PDFList;
