import { MetaTags } from '@redwoodjs/web'

const PersonalProjectsHenhousePage = () => {
  /**
   * TODO: ADD PICTURES
   */
  return (
    <>
      <MetaTags title="Henhouse" description="Henhouse page" />

      <div className="flex flex-col gap-2">
        <div className="card w-full bg-primary text-primary-content mb-5">
          <div className="card-body">
            <h2 className="card-title text-3xl">Project Hen House</h2>
            <p>
              With the rising prices of eggs, it was time to build a coop and
              raise some chickens.
            </p>
          </div>
        </div>

        <div className="card w-full bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Planning Stages</h2>
            <p>
              The original plan between my partner in this venture and I was to
              raise 6 hens and go from there. This plan quickly changed as the
              minimum quantity of mail-ordered hens from the website we chose
              was at 15.
            </p>
            <p>
              No problem. We had our 15, day-old Cinnamon Queen chicks on the
              way and made purchases for more feed and a larger enclosure to
              raise them until they were fit to live outside in the coop.
            </p>
            <p>
              As far as building the coop, we decided to use an existing shed in
              the yard. Materials needed for this were at a minimum as majority
              of the wood for a door and metal sheeting for the walls were
              already on the property as well as used dog pens and netting for
              making the outdoor run. Two additional sheets of aluminium siding
              were purchased to finish the area of the wall that was incomplete.
            </p>
            <p>
              Doing further research, we found that one nesting box was needed
              for every 3-5 hens. As we were planning for 15 chickens, we built
              3 boxes. These were built in a way where adding additional boxes
              could be done easily.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <div className="card w-full bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Raising Chicks: Week 0 - 5</h2>
              <p>(Talk about food)</p>
            </div>
          </div>

          <div className="card w-full bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Raising Chicks: Week 6 - 18 </h2>
              <p>(Talk about food and size of bird)</p>
            </div>
          </div>

          <div className="card w-full bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Raising Chicks: Week 19 - Present </h2>
              <p>(Talk about food and size of bird)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PersonalProjectsHenhousePage
