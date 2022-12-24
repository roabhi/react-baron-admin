/**
 * * API endpoint -> https://murmuring-citadel-67317.herokuapp.com/
 * ? GET companies -> /companies
 * ? GET Company -> /company/:id/insurances
 * ? POST Company -> /companies/ @params name, tsv file, imagen (aun no)
 * ? PATCH Company -> /companies/:id @params name, tsv file, imagen (aun no)
 */

import { createContext, useState } from 'react'

const APIContext = createContext()

const APIENDPOINT = 'https://murmuring-citadel-67317.herokuapp.com/'

export const APIProvider = ({ children }) => {
  /**
   * * Set States
   */

  const [loading, setLoading] = useState(true)
  const [companyInsurances, setCompanyInsurances] = useState([])
  const [companies, setCompanies] = useState([])

  /**
   * * Modal functions
   */

  /**
   * * GET functions
   */

  const fetchCompany = async (company_id) => {
    let data

    try {
      const response = await fetch(`${APIENDPOINT}/companies/${company_id}`)
      data = await response.json()
    } catch (_error) {
      data = { error: _error }
    }
    return data
  }

  const fetchAllCompanies = async () => {
    try {
      const response = await fetch(`${APIENDPOINT}/companies`)
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
        `${APIENDPOINT}/companies/${company_id}/insurances?page=${pagination}&per_page=50`
      )
      const data = await response.json()
      return data
    } catch (error) {
      // TODO Here we prompt an error modal
      console.log('error')
    }
  }

  /**
   * * POST function
   */

  const createCompany = async (_data) => {
    let message

    try {
      const res = await fetch(`${APIENDPOINT}/companies`, {
        method: 'POST',
        body: _data,
      })
      message = await res.json()
    } catch (error) {
      message = { error: error }
    }

    return message
  }

  /**
   * * DELETE function
   */

  const deleteCompany = async (_company_id) => {
    let message

    try {
      const res = await fetch(`${APIENDPOINT}/companies/${_company_id}`, {
        method: 'DELETE',
      })
      message = await res.json()
    } catch (error) {
      message = { error: error }
    }

    return message
  }

  /**
   * * PATCH function
   */

  const editCompany = async (_company_id, _data) => {
    let message

    try {
      const res = await fetch(`${APIENDPOINT}/companies/${_company_id}`, {
        method: 'PATCH',
        body: _data,
      })
      message = await res.json()
    } catch (error) {
      message = { error: error }
    }
    return message
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
        createCompany: createCompany, // ? This is a function
        deleteCompany: deleteCompany, // ? This is a function
        editCompany: editCompany, //? This is a function
      }}
    >
      {children}
    </APIContext.Provider>
  )
}

export default APIContext
