import React from 'react'
import DiagramPDF from './DiagramPDF'
import SamplePDF from './../DownloadableFiles/DC_Connectivity.pdf'
import { Worker } from '@react-pdf-viewer/core';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';




function ShowDiagrams() {
  return (
    <div className='w-full flex ml-64 mt-20'>
      <div className='w-11/12 mx-auto p-6 flex gap-6 bg-slate-400'>
        <div className='flex-1 diag-nav text-white'>
          <ul>
            <li>File 1</li>
            <li>File 1</li>
            <li>File 1</li>
            <li>File 1</li>
          </ul>
        </div>
        <div className='flex-6 w-10/12'>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          // Your render function
            <Viewer fileUrl={SamplePDF} />;
          </Worker>
        </div>
      </div>
    </div>
  )
}

export default ShowDiagrams