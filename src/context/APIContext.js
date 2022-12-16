/**
 * * API endpoint -> https://murmuring-citadel-67317.herokuapp.com/
 * GET companies -> /companies
 * GET Company -> /company/:id/insurances
 * POST Company -> /companies/ @params name, tsv file, imagen (aun no)
 * PATCH Company -> /companies/:id @params name, tsv file, imagen (aun no)
 */

import { createContext, useState } from 'react'

const APIContext = createContext()

export const APIProvider = ({ children }) => {
  const [loading, setLoading] = useState(true),
    [companyInsurances, setCompanyInsurances] = useState([]),
    [companies, setCompanies] = useState([])

  const fetchAllCompanies = async () => {
    const response = await fetch(
      `https://murmuring-citadel-67317.herokuapp.com/companies`
    )
    const data = await response.json()
    return data
  }

  const fetchCompany = async (company_id) => {
    const response = await fetch(
      `https://murmuring-citadel-67317.herokuapp.com/companies/${company_id}`
    )
    const data = await response.json()
    return data
  }

  const fetchCompanyInsurances = async (company_id) => {
    const response = await fetch(
      `https://murmuring-citadel-67317.herokuapp.com/companies/${company_id}/insurances?page=1&per_page=50`
    )
    const data = await response.json()
    return data
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
