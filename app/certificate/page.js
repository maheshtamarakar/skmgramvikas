"use client";
import React from "react";
import PDFList from '../components/PDFList.js'
import { useMyContext } from '../context/MyContext'
import ComingSoon from "../components/ComingSoon";

const page = () => {
    const isMarathi = useMyContext();
  
    const pdfFiles = [
      { name: 'Shri Kedareshwar Mahakali Gramvikas Sanstha Form-1', url: '/pdfs/skmgsf-1.pdf' },
      // { name: 'Sample PDF 2', url: '/pdfs/sample2.pdf' },
      // { name: 'Sample PDF 3', url: '/pdfs/sample3.pdf' },
    ];
    const annualReportPdfFiles = [
      { name: '2024', url: '/pdfs/2024.pdf' },
      // { name: 'Sample PDF 2', url: '/pdfs/sample2.pdf' },
      // { name: 'Sample PDF 3', url: '/pdfs/sample3.pdf' },
    ];
  // return (
  //   <div>
  //     <div className="notice">
  //     <PDFList pdfs={pdfFiles} />
  //     </div>
  //     {/* <div className="annual-report">
        
  //     <h1 className='text-center'>{
  //       isMarathi ? 'वाषिक अहवाल': 'Annual Report'
  //       }</h1>
  //     <PDFList pdfs={annualReportPdfFiles} />
  //     </div> */}

  //   </div>
  // );
  return (
    <>
      <ComingSoon />
    </>
  );
};

export default page;
