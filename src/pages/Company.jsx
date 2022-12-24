import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
// import Pagination from '../components/Pagination'
import Insurance from '../components/Insurance'
import DefaultIconButton from '../components/shared/DefaultIconButton'
import Spinner from '../components/shared/Spinner'

import APIContext from '../context/APIContext'
import ModalContext from '../context/ModalContext'
import { useContext, useEffect, useState } from 'react'

import { useParams, useNavigate } from 'react-router-dom'

const Company = () => {
  /**
   * * Returned insurance.data from API
   *
   * ? capital_range
   * ? category
   * ? company_category
   * ? company_id
   * ? cost
   * ? created_at (not_visible)
   * ? domain
   * ? id (this is the id for the insurance itself)
   * ? scrore
   * ? updated_at (not visible)
   */

  /**
   * * Use Modal Context
   */

  const { showModal, hideModal, paintModalContent } = useContext(ModalContext)

  /**
   * * Use navigate
   */

  const navigate = useNavigate()

  /**
   * * Use API Context
   */

  const {
    loading,
    setLoading,
    fetchCompany,
    companyInsurances,
    setCompanyInsurances,
    fetchCompanyInsurances,
  } = useContext(APIContext)

  /**
   * * Use params
   */

  const params = useParams()

  /**
   * * Use State
   */

  const [companyData, setCompanyData] = useState({})
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  /**
   * * Use Effect
   */

  useEffect(() => {
    const getCompanyInfo = async () => {
      const _companyInfo = await fetchCompany(params.id)

      if (_companyInfo?.error) {
        showModal()
        paintModalContent(
          'error', //type
          'error', //title of modal
          'Error leyendo compañia desde la base de datos', //text of modal
          hideModalAndRedirect, // function to modal
          false //false will paint just a single button for modal
        )
      } else {
        setCompanyData({
          name: _companyInfo.name,
          picture_url: _companyInfo.picture_data.url,
          file_url: _companyInfo.csv_data.url,
        }) // ? Set the header info for company component. Call API and set just name for now
      }
    }

    const getCompanyInsurances = async () => {
      await fetchCompanyInsurances(params.id, currentPage).then(
        (_insurances) => {
          setTotalPages(_insurances.meta.page_count)
          setCurrentPage(parseInt(_insurances.meta.current_page))
          setCompanyInsurances(_insurances.data)
          setLoading(false)
        }
      )
    }

    getCompanyInfo()
    getCompanyInsurances()
    // eslint-disable-next-line
  }, [currentPage])

  /**
   * ? Dependency Array for useEffect
   * @param currentPage -> State
   * ? This will cause each change of currentPage state
   * ? to trigger execution of functions
   * ? included inside useEffect() as page re-renders
   * ? no need to use loadPage() functions anymore
   */

  const hideModalAndRedirect = () => {
    hideModal()
    navigate('/companies')
  }

  const selectAction = (e) => {
    if (e.target.id.toString().includes('confirm')) {
      window.location.href = companyData.file_url
    }
    hideModal()
  }

  const downloadFile = () => {
    showModal()
    paintModalContent(
      'info', //type
      'info', //title of modal
      `¿Descargar el archivo para ${companyData.name}?`, //text of modal
      selectAction, // function to modal
      true //false will paint just a single button for modal
    )
  }

  /**
   * * Get X page
   */

  const setNewPage = (e) => {
    if (
      e.target.id.toString().includes('next') &&
      currentPage + 1 <= totalPages
    ) {
      setLoading(true)
      setCurrentPage((currentPage) => currentPage + 1)
    } else if (
      e.target.id.toString().includes('prev') &&
      currentPage - 1 >= 1
    ) {
      setLoading(true)
      setCurrentPage((currentPage) => currentPage - 1)
    }
  }

  /**
   * * Render
   */

  return (
    <>
      <div className="holder-page">
        <header className="max-w-[85.750rem] w-10/12 xl:w-full flex items-center justify-between mx-auto mt-[6rem]">
          <div className="flex items-center justify-between">
            <img
              className="w-[3.125rem] h-[3.125rem] mx-auto"
              src={companyData.picture_url}
              alt="logo"
            />
            <h1 className="text-[1.375rem] font-['Poppins'] font-[600] text-[#2A3042] ml-[3rem]">
              {companyData.name}
            </h1>
          </div>
          <div>
            <DefaultIconButton
              text="Descargar Fichero"
              iconType="download"
              action={downloadFile}
            />
          </div>
        </header>
        <main className="card mt-8 max-w-[85.750rem] w-10/12 xl:w-full mx-auto mb-[8.125rem]">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-x-auto">
                  {loading ? (
                    <div className="mx-auto w-[2rem] h-[2rem] my-8 spinner-container">
                      <Spinner />
                    </div>
                  ) : (
                    <table className="min-w-full">
                      <thead className="bg-[#2A3042]">
                        <tr>
                          <th
                            scope="col"
                            className="text-white font-['Poppins'] font-[600] text-[0.875rem] rounded-tl-[0.500rem] pl-6 py-4 text-left w-3/12"
                          >
                            Grupo
                          </th>
                          <th
                            scope="col"
                            className="text-white font-['Poppins'] font-[600] text-[0.875rem] pl-6 py-4 text-left w-3/12"
                          >
                            Especialidad
                          </th>
                          <th
                            scope="col"
                            className="text-white font-['Poppins'] font-[600] text-[0.875rem] pl-6 py-4 text-left w-1/12"
                          >
                            &Aacute;mbito
                          </th>
                          {/* <th
                            scope="col"
                            className="text-white font-['Poppins'] font-[600] text-[0.875rem] pl-6 py-4 text-left w-1/12"
                          >
                            F.Est&eacute;tica
                          </th> */}
                          <th
                            scope="col"
                            className="text-white font-['Poppins'] font-[600] text-[0.875rem] pl-6 py-4 text-left w-1/12"
                          >
                            Capital
                          </th>
                          <th
                            scope="col"
                            className="text-white font-['Poppins'] font-[600] text-[0.875rem] pl-6 py-4 text-left w-1/12"
                          >
                            Coste
                          </th>
                          <th
                            scope="col"
                            className="text-white font-['Poppins'] font-[600] text-[0.875rem] rounded-tr-[0.500rem] pl-3 py-4 text-left w-1/12"
                          >
                            Puntuaci&oacute;n
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {companyInsurances.map((_obj) => (
                          <Insurance
                            company_id={_obj.company_id}
                            category={_obj.category}
                            company_category={_obj.company_category}
                            domain={_obj.domain}
                            // estetic={''}
                            capital_range={_obj.capital_range}
                            cost={_obj.cost}
                            score={_obj.score}
                            key={_obj.id}
                          ></Insurance>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* <Pagination /> */}
          <div className="pagination font-['Work_Sans'] font-[600] text-[0.813rem] text-[#2A3042] flex items-center justify-end py-5 max-w-[71.188rem] mx-auto">
            <div className="mr-10">
              <p>
                P&aacute;gina <span>{currentPage}</span> de
                <span className="ml-[0.3rem]">{totalPages}</span>
              </p>
            </div>
            <div>
              <span
                id="get-prev-page"
                className="inline-block w-[0.438rem] h-[0.750rem] cursor-pointer mr-[3rem]"
                onClick={setNewPage}
              >
                <svg
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="pointer-events-none"
                >
                  <path
                    d="M6.76308 1.84593C7.41927 1.22621 6.3803 0.244991 5.72412 0.916353L0.912089 5.40931C0.638679 5.66753 0.638679 6.13232 0.912089 6.39054L5.72412 10.9351C6.3803 11.5549 7.41927 10.5736 6.76308 9.95392C4.44333 7.76309 4.45732 4.05147 6.76308 1.84593Z"
                    fill="#2A3042"
                  />
                </svg>
              </span>
              <span
                id="get-next-page"
                className="inline-block w-[0.438rem] h-[0.750rem] cursor-pointer"
                onClick={setNewPage}
              >
                <svg
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="pointer-events-none"
                >
                  <path
                    d="M0.391583 1.84593C-0.264603 1.22621 0.774358 0.244991 1.43054 0.916353L6.24257 5.40931C6.51598 5.66753 6.51598 6.13232 6.24257 6.39054L1.43054 10.9351C0.774358 11.5549 -0.264603 10.5736 0.391583 9.95392C2.71133 7.76309 2.69735 4.05147 0.391583 1.84593Z"
                    fill="#2A3042"
                  />
                </svg>
              </span>
            </div>
          </div>
        </main>
      </div>
      <Header />
      <Sidebar />
    </>
  )
}

export default Company
