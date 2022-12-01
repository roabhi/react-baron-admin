import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

/**
 * * COMPONENTS
 */

/**
 * * PAGES
 */

import Login from './pages/Login'
import Companies from './pages/Companies'

/**
 * * CONTEXT
 */

import { APIProvider } from './context/APIContext'

const App = () => {
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
              {/* <Route path="/populate" element={<Populate />} /> */}
            </Routes>
          </div>
        </Router>
      </APIProvider>
      <div id="grid"></div>
    </>
  )
}

export default App
