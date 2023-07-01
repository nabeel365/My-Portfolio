import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';


function PDFViewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPreviousPage = () => {
    setPageNumber((prevPageNumber) => prevPageNumber - 1);
  };

  const goToNextPage = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  return (
    <div>
      <Document
        file="/src/Components/Resume/Nabeel Choudhuri.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <button
          disabled={pageNumber <= 1}
          onClick={goToPreviousPage}
        >
          Previous
        </button>
        <button
          disabled={pageNumber >= numPages}
          onClick={goToNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

function Resume() {
  return (
    <div>
      <h1>PDF Viewer</h1>
      <PDFViewer />
    </div>
  );
}

export default Resume;
