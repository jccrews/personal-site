const IntroAndResume = () => {
  return (
    <div className="hero 1/2-h-screen bg-base-200 rounded-lg">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse py-20">
        <div className="flex flex-col">
          <a
            href="https://docs.google.com/viewer?url=https://jccrews.com/resume.pdf&embedded=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="resume_img.png"
              className="max-w-sm w-full h-auto rounded-lg shadow-2xl"
              alt="James Crews Resume"
            />
          </a>
          <p className="italic ml-2">Click to view my resume!</p>
        </div>
        <div className="max-w-md text-center mr-10">
          <h1 className="text-5xl font-bold">James (Clay) Crews</h1>
          <p className="py-6">
            Graduating May 2025 with an M.S. in Computer Engineering at The
            University of South Carolina
          </p>
          <div>
            <p>Contact me:</p>
            <p className="font-semibold">j.clayton.crews@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroAndResume
