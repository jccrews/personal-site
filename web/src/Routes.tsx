// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import NavLayout from 'src/layouts/NavLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={NavLayout}>
        <Set>
          <Route path="/personal-projects/henhouse" page={PersonalProjectsHenhousePage} name="henhouse" />
        </Set>
        <Set>
          <Route path="/projects/wordification" page={ProjectsWordificationPage} name="wordification" />
          <Route path="/projects/whats-that-plant" page={ProjectsWhatsThatPlantPage} name="whatsThatPlant" />
          <Route path="/projects/dkms" page={ProjectsDkmsPage} name="dkms" />
        </Set>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
