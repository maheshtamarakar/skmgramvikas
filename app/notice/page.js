// pages/index.js
"use client";
import React from 'react';
import PDFList from '../components/PDFList.js'
import './style.css';
import { useMyContext } from '../context/MyContext'

export default function Home() {
  const isMarathi = useMyContext();

  const pdfFiles = [
    { name: 'Joining Form', url: '/pdfs/skmgsf-1.pdf' },
    // { name: 'Sample PDF 2', url: '/pdfs/sample2.pdf' },
    // { name: 'Sample PDF 3', url: '/pdfs/sample3.pdf' },
  ];
  const annualReportPdfFiles = [
    { name: '2024', url: '/pdfs/2024.pdf' },
    // { name: 'Sample PDF 2', url: '/pdfs/sample2.pdf' },
    // { name: 'Sample PDF 3', url: '/pdfs/sample3.pdf' },
  ];

  return (
    <div>
      <div className="notice">

      <PDFList pdfs={pdfFiles} />
      </div>
      <div className="annual-report">
        
      <h1 className='text-center'>{
        isMarathi ? 'वाषिक अहवाल': 'Annual Report'
        }</h1>
      <PDFList pdfs={annualReportPdfFiles} />
      </div>

    </div>
  );
}
