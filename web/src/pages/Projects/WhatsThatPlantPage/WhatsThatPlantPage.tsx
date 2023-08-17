import { MetaTags } from '@redwoodjs/web'

const WhatsThatPlantPage = () => {
  return (
    <>
      <MetaTags title="WhatsThatPlant" description="WhatsThatPlant page" />

      <div className="flex flex-col gap-2">
        <div className="card w-full bg-primary text-primary-content mb-5">
          <div className="card-body">
            <h2 className="card-title text-3xl">What&apos;s That Plant</h2>
            <p>
              I developed an Android application called{' '}
              <i>What&apos;s That Plant</i> for my CSCE 546: Mobile Application
              Development course final project.
            </p>
          </div>
        </div>

        <div className="card w-full bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Project Information</h2>
            <p>This application was created using Android Studio and Kotlin.</p>
            <p>
              Overall, this app is made to be able to identify a plant, either
              &apos;s saved photos or using a live image they capture in that
              moment, and display information about the plant to the user.{' '}
            </p>
            <p>
              The information returned includes the match accuracy percentage
              from the provided image as compared to the plant determined by the
              API call, the common name of the plant, scientific name, edible
              parts, propagation method, a similar image of the plant, and a
              link to the wikipedia page relating to the plant to see further
              information.
            </p>
            <p>
              API calls are made to{' '}
              <i>
                plant.id <sup>1</sup>
              </i>{' '}
              and the response is parsed out to display inforamtion about the
              plant to the user.
            </p>
          </div>
        </div>
        <div className="card w-full bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">
              To view more features of this application, watch this demo video
            </h2>
            <div className="rounded-box mt-5 bg-neutral p-4 shadow-inner">
              <iframe
                className="w-full md:w-1120 h-630"
                width="1120"
                height="630"
                src="https://www.youtube-nocookie.com/embed/Hei898xyUTM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <a
          href="https://github.com/flowerchecker/Plant-id-API/wiki"
          target="_blank"
          rel="noreferrer"
        >
          <p className="italic ml-2">
            <sup>1</sup> https://github.com/flowerchecker/Plant-id-API/wiki
          </p>
        </a>

        <a
          href="https://github.com/claycrews2002/Whats_That_Plant"
          target="_blank"
          rel="noreferrer"
        >
          <div className="card w-full bg-primary text-primary-content transition hover:shadow-2xl hover:bg-secondary mt-5">
            <div className="card-body">
              <h2 className="card-title">Check Out My GitHub Repo!</h2>
              <p>
                Go to <i>https://github.com/claycrews2002/Whats_That_Plant</i>{' '}
                or click here for more information!
              </p>
              <p></p>
            </div>
          </div>
        </a>
      </div>
    </>
  )
}

export default WhatsThatPlantPage
