import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Pagination from '../components/Pagination'
import DefaultIconButton from '../components/shared/DefaultIconButton'
import Spinner from '../components/shared/Spinner'
import CompanyItem from '../components/CompanyItem'
import { useNavigate } from 'react-router-dom'

import APIContext from '../context/APIContext'
import { useContext, useEffect } from 'react'

const Companies = () => {
  const { companies, setCompanies, loading, setLoading, fetchAllCompanies } =
    useContext(APIContext)

  useEffect(() => {
    const getDataCompanies = async () => {
      const _companies = await fetchAllCompanies()
      setCompanies(_companies)
      setLoading(false)
    }
    getDataCompanies()
    // document.querySelector('header div h1').textContent = 'Listado de Compañías'
  }, [fetchAllCompanies, setCompanies, setLoading])

  const navigate = useNavigate()

  const goToCreateCompany = (e) => {
    navigate('/create')
  }

  return (
    <>
      <div className="holder-page">
        <header className="max-w-[85.750rem] w-10/12 xl:w-full flex items-center justify-between mx-auto mt-[6rem]">
          <div>
            <h1 className="text-[1.375rem] font-['Poppins'] font-[600] text-[#2A3042]">
              Listado de Compa&ntilde;&iacute;as
            </h1>
          </div>
          <div>
            <DefaultIconButton
              text="Nueva Compa&ntilde;&iacute;a"
              iconType="plus"
              action={goToCreateCompany}
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
                            className="text-white font-['Poppins'] font-[600] text-[0.875rem] rounded-tl-[0.500rem] pl-12 py-4 text-left"
                          >
                            Logo
                          </th>
                          <th
                            scope="col"
                            className="text-white font-['Poppins'] font-[600] text-[0.875rem] px-6 py-4 text-left min-w-[5rem]"
                          >
                            Nombre
                          </th>
                          <th
                            scope="col"
                            className="text-white font-['Poppins'] font-[600] text-[0.875rem] rounded-tr-[0.500rem] px-6 py-4 text-left"
                          >
                            Acciones
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {companies.map((_obj) => (
                          <CompanyItem
                            key={_obj.id}
                            id={_obj.id}
                            company_name={_obj.name}
                          />
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>
          <Pagination />
        </main>
      </div>
      <Header />
      <Sidebar />
    </>
  )
}

export default Companies
