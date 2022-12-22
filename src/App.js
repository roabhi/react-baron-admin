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

/**
 * * CONTEXT
 */

import { APIProvider } from './context/APIContext'
import { ModalProvider } from './context/ModalContext'

const App = () => {
  return (
    <>
      <ModalProvider>
        <APIProvider>
          <Router>
            <div
              id="holder"
              className="holder overflow-x-hidden container md:mx-auto"
            >
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/companies" element={<Companies />} />
                <Route path="/company/:id" element={<Company />} />
                <Route path="/create" element={<CreateCompany />} />
                <Route path="/update/:id" element={<EditCompany />} />
              </Routes>
            </div>
          </Router>
        </APIProvider>
      </ModalProvider>
      {/* <div id="grid"></div> */}
    </>
  )
}

export default App
