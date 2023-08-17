import { MetaTags } from '@redwoodjs/web'

const ProjectsWordificationPage = () => {
  return (
    <>
      <MetaTags title="Wordification" description="Wordification page" />

      <div className="flex flex-col gap-2">
        <div className="card w-full bg-primary text-primary-content mb-5">
          <div className="card-body">
            <h2 className="card-title text-3xl">Wordification</h2>
            <p>
              I am working as lead Software Developer on the Wordification
              Project under Stanley Dubinsky through The University of South
              Carolina. My responsibilities on the project include: developing
              the webapp using RedwoodJS, linking data on the backend with
              GraphQL and Prisma, managing deployments of the webapp through
              Netlify, and managing the database through Neon.
            </p>
            <p>
              As a part of the Wordification project I worked on creating and
              managing the web application. Here, I will discuss some of the
              technologies used.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <div className="card w-full bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">RedwoodJS</h2>
              <p>
                RedwoodJS is a javascript framework that manages the front-end
                and back-end of the application. RedwoodJS uses Next.js,
                GraphQL, Primsa, and TypeScript to achieve this.
              </p>
            </div>
          </div>

          <div className="card w-full bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Next.js</h2>
              <p>
                Next.js is similar to the React framework, however, Next.js
                comes loaded with packages that are going to be made use of such
                as routing, webpack support, pre-rendering, and code splitting
                all pre-loaded.
              </p>
            </div>
          </div>

          <div className="card w-full bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">GraphQL</h2>
              <p>
                GraphQL is a query language used to manage the back-end data.
                The formatting is easy to understand making writing more complex
                queries go smoothly. An example of using GraphQL in RedwoodJS is
                through the use of Cells.
              </p>
              <p>
                Cells are a Redwood component that “provide a simpler and more
                declarative approach to data fetching”<sup>1</sup> Cells are
                independent from the rest of the components on a page, therefore
                faster for data retrieval, able to act on their own without
                passing data down through page props.
              </p>
            </div>
          </div>

          <div className="card w-full bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Prisma</h2>
              <p>
                Prisma is defines the schema for the application&apos;s
                database. Prisma, next-generation Node.js and TypeScript ORM are
                used to communicate with the database. Models for the schema of
                the data are defined and types are used so that mismatching
                datatype entry is prevented.
              </p>
              <p>
                RedwoodJS automates a lot of creating of code with code
                generation. Making additions and applying changes to the
                database schema is also automated. When using the `prisma
                migrate dev` command, SQL statements are written for you that
                modify the database. Additionally, you can directly edit these
                SQL files to work through errors when migrating.
              </p>
            </div>
          </div>

          <div className="card w-full bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">TypeScript</h2>
              <p>
                Typescript is used the same way javascript would be in our
                application, but types are taken advantage of to prevent data
                errors. When working in large projects, types can become
                confusing and overlooked. Using typescript has made debugging
                code for correctness much easier.
              </p>
            </div>
          </div>

          <div className="card w-full bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Netlify</h2>
              <p>
                In this project we decided to use server-less deployment for our
                application. Server-less deployment is a good option to allow
                the developer to not have to consider managing the physical
                server. This also allows for scalability. We use Netlify for
                deployment, as our usage increases we can easily pay for
                additional resources.
              </p>
            </div>
          </div>
        </div>
        <a
          href="https://redwoodjs.com/docs/tutorial/chapter2/cells"
          target="_blank"
          rel="noreferrer"
        >
          <p className="italic ml-2">
            <sup>1</sup> https://redwoodjs.com/docs/tutorial/chapter2/cells
          </p>
        </a>

        <a
          href="https://wordification.scholastechnology.com"
          target="_blank"
          rel="noreferrer"
        >
          <div className="card w-full bg-primary text-primary-content transition hover:shadow-2xl hover:bg-secondary mt-5">
            <div className="card-body">
              <h2 className="card-title">
                For More Information, Check Out Our Site!
              </h2>
              <p>
                Go to <i>https://wordification.scholastechnology.com/</i> or
                click here to visit!
              </p>
              <p></p>
            </div>
          </div>
        </a>
      </div>
    </>
  )
}

export default ProjectsWordificationPage
