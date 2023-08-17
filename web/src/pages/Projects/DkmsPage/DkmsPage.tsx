import { MetaTags } from '@redwoodjs/web'

const ProjectsDkmsPage = () => {
  /**
   * TODO: TALK ABOUT TECHNOLOGIES USED
   */
  return (
    <>
      <MetaTags title="Dkms" description="Dkms page" />

      <div className="flex flex-col gap-2">
        <div className="card w-full bg-primary text-primary-content mb-5">
          <div className="card-body">
            <h2 className="card-title text-3xl">DKMS</h2>
            <p>
              DKMS is a social media aspect to Spotify that links with a
              user&apos;s Spotify account.
            </p>
            <p>
              I worked in a team setting on this project for my CSCE 492:
              Capstone Computing Project II course.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
          <div className="card w-full bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Project Introduction</h2>
              <p>
                I collaborated as part of a team to develop a web application
                named DKMS, which seamlessly integrates social media features
                with Spotify functionalities. Our team worked collectively to
                create an engaging platform that allows users to log in
                effortlessly using their Spotify accounts, enabling interactions
                with other DKMS users. The application goes beyond basic
                interaction by providing users with the ability to search for
                and enjoy music directly from Spotify within the platform.
              </p>
            </div>
          </div>
          <div className="card w-full bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Dynamic Social Feed</h2>
              <p>
                Within DKMS, we introduced a dynamic social feed where users can
                share posts about various music-related elements, including
                artists, albums, tracks, and playlists. These shared posts are
                visible to fellow users on their feed, fostering a vibrant
                community. Users have the flexibility to tailor their
                experience, either by engaging exclusively with content from
                individuals they follow on Spotify or by exploring a global feed
                encompassing content from all users. To ensure privacy, our
                application includes a feature that allows users to switch their
                accounts to private mode, safeguarding their information from
                non-followers.
              </p>
            </div>
          </div>
          <div className="card w-full bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">
                Personalization and Recommendations
              </h2>
              <p>
                Our team took pride in offering insightful statistics about
                users&apos; musical preferences, showcasing their top songs,
                favored artists, and public playlists. Additionally, we
                implemented a recommendation system that suggests music similar
                to their taste. To enhance personalization, we created a
                dedicated page for song and artist recommendations, along with
                the option to receive genre-specific &quot;popular,&quot; or
                &quot;danceable.&quot; Users could further customize their
                experience by selecting a preferred color theme for the webpage
                and modifying their display name.
              </p>
            </div>
          </div>
          <div className="card w-full bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Enriched User Experience</h2>
              <p>
                Collaborating as a team, we enabled users to craft posts
                enriched with text content and supplemented with shared songs,
                artists, albums, or playlists. Interaction was a key focus,
                allowing users to comment, like, or save posts that resonated
                with them. Through filtered feeds, users could conveniently
                access their saved posts. Moreover, our application facilitated
                direct re-sharing of content from the feed and provided
                comprehensive details about shared music items upon clicking.
                All shared music content was seamlessly playable within the
                platform.
              </p>
            </div>
          </div>
        </div>
        <div className="card w-full bg-primary text-primary-content mt-1">
          <div className="card-body">
            <h2 className="card-title">Bringing DKMS to Life</h2>
            <p>
              Through our collective dedication and innovation, we successfully
              merged the social aspects of media sharing with Spotify&apos;s API
              calls, resulting in the creation of DKMS.
            </p>
          </div>
        </div>

        <a href="https://dkms.vercel.app/" target="_blank" rel="noreferrer">
          <div className="card w-full bg-primary text-primary-content transition mt-5 hover:shadow-2xl hover:bg-secondary">
            <div className="card-body">
              <h2 className="card-title">Check Out Our Site!</h2>
              <p>
                Go to <i>https://dkms.vercel.app/</i> or click here for more
                information!
              </p>
              <p></p>
            </div>
          </div>
        </a>
      </div>
    </>
  )
}

export default ProjectsDkmsPage
