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

import React from 'react'

const ResumePage = () => {
  return (
      <iframe src="http://docs.google.com/gview?url=http://jccrews.com/resume.pdf&embedded=true"
        style="width:600px; height:500px;" frameborder="0"></iframe>

  )
}

export default ResumePage

