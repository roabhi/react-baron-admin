import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

/**
 * * COMPONENTS
 */

/**
 * * PAGES
 */

import Login from './pages/Login'
import Companies from './pages/Companies'
import Company from './pages/Company'
import CreateCompany from './pages/CreateCompany'
import EditCompany from './pages/EditCompany'
// import Modal from './components/shared/Modal'

/**
 * * CONTEXT
 */

import { APIProvider } from './context/APIContext'

const App = () => {
  /**
   * ! Delete this function. Testing passing funcs as props
   */

  // const actionFunc = (e) => {
  //   console.log('clicked on modal')
  // }

  return (
    <>
      <APIProvider>
        <Router>
          <div
            id="holder"
            className="holder overflow-x-hidden container md:mx-auto"
          >
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/companies" element={<Companies />} />
              <Route path="/company" element={<Company />} />
              <Route path="/create" element={<CreateCompany />} />
              <Route path="/update" element={<EditCompany />} />
            </Routes>
          </div>
        </Router>
      </APIProvider>
      {/**
       * ! Modal show go into its own Context!
       */}
      {/* <Modal
        type="success"
        title="Header"
        text="Lorem Ipsum dolor sit amet consecuteur lorem ipsum"
        action={actionFunc}
      /> */}
      <div id="grid"></div>
    </>
  )
}

export default App
