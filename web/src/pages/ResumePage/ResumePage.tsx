// import React from 'react'

// const ResumePage = () => {
//   return (
//     <div className="w-full h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-full h-full max-w-6xl shadow-lg">
//         <embed
//           src="/resume.pdf"
//           type="application/pdf"
//           width="100%"
//           height="100%"
//           className="w-full h-full"
//           title="James_Crews_Resume"
//         />
//       </div>
//     </div>
//   )
// }

// export default ResumePage
import React, { useState, useEffect } from 'react'

const ResumePage = () => {
  const [pdfError, setPdfError] = useState(false)
  const pdfUrl = '/resume.pdf' // Adjust this path as needed

  useEffect(() => {
    // Check if the PDF can be loaded
    fetch(pdfUrl)
      .then((response) => {
        if (!response.ok) {
          setPdfError(true)
        }
      })
      .catch(() => setPdfError(true))
  }, [])

  if (pdfError) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
        <p className="text-xl mb-4">Unable to display the PDF.</p>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Download Resume PDF
        </a>
      </div>
    )
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full h-full max-w-6xl shadow-lg">
        <object
          data={pdfUrl}
          type="application/pdf"
          width="100%"
          height="100%"
          className="w-full h-full"
        >
          <p>
            Your browser does not support PDFs.
            <a href={pdfUrl}>Download the PDF</a>.
          </p>
        </object>
      </div>
    </div>
  )
}

export default ResumePage
