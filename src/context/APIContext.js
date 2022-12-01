import { createContext, useState, useEffect } from 'react'

const APIContext = createContext()

export const APIProvider = ({ children }) => {
  const [loading, setLoading] = useState(true),
    [feed, setFeed] = useState([])

  // useEffect(() => {
  //   fetchFeed()
  // }, [])

  const fetchAllCompanies = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/albums/1/photos`
    )

    const data = await response.json()

    console.log(data)
    setFeed(data)
    setLoading(false)
  }

  return (
    <APIContext.Provider
      value={{
        // feed: feed, // ?This is a State
        // loading: loading, //? This is a state
        // feedbackEdit: feedbackEdit, // ? This is the STATE editing Feedback
        // isLoading: isLoading, // ? This is a State
        // deleteFeedback: deleteFeedback, // ? This is a function
        // addFeedback: addFeedback, // ? This is a function
        // editFeedback: editFeedback, // ? This is the FUNCTION editing Feedback
        // updateFeedback: updateFeedback, // ? This is a function
        fetchAllCompanies: fetchAllCompanies, // ? This is a function
      }}
    >
      {children}
    </APIContext.Provider>
  )
}

export default APIContext
