/**
 * * API endpoint -> https://murmuring-citadel-67317.herokuapp.com/
 * ? GET companies -> /companies
 * ? GET Company -> /company/:id/insurances
 * ? POST Company -> /companies/ @params name, tsv file, imagen (aun no)
 * ? PATCH Company -> /companies/:id @params name, tsv file, imagen (aun no)
 */

import { createContext, useState } from 'react'

const APIContext = createContext()

export const APIProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [companyInsurances, setCompanyInsurances] = useState([])
  const [companies, setCompanies] = useState([])

  const fetchAllCompanies = async () => {
    try {
      const response = await fetch(
        `https://murmuring-citadel-67317.herokuapp.com/companies`
      )
      const data = await response.json()
      return data
    } catch (error) {
      // TODO here we prompt an error modal
      console.log(error)
    }
  }

  const fetchCompany = async (company_id) => {
    try {
      const response = await fetch(
        `https://murmuring-citadel-67317.herokuapp.com/companies/${company_id}`
      )
      const data = await response.json()
      return data
    } catch (error) {
      // TODO here we prompt an error modal
      console.log(error)
    }
  }

  const fetchCompanyInsurances = async (company_id, pagination) => {
    try {
      const response = await fetch(
        `https://murmuring-citadel-67317.herokuapp.com/companies/${company_id}/insurances?page=${pagination}&per_page=50`
      )
      const data = await response.json()
      return data
    } catch (error) {
      // TODO Here we prompt an error modal
      console.log('error')
    }
  }

  return (
    <APIContext.Provider
      value={{
        companies: companies, // ?This is a State
        setCompanies: setCompanies, // ?This is a state
        companyInsurances: companyInsurances, // ? This is a state
        setCompanyInsurances: setCompanyInsurances, // ? This is a state
        loading: loading, //? This is a state
        setLoading: setLoading, //? This is a state
        fetchAllCompanies: fetchAllCompanies, // ? This is a function
        fetchCompany: fetchCompany, // ? This is a function
        fetchCompanyInsurances: fetchCompanyInsurances, // ? This is a function
      }}
    >
      {children}
    </APIContext.Provider>
  )
}

export default APIContext
