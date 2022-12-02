import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Pagination from '../components/Pagination'
import DefaultIconButton from '../components/shared/DefaultIconButton'
import CompanyItem from '../components/CompanyItem'

const Companies = () => {
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
            />
          </div>
        </header>
        <main className="card mt-8 max-w-[85.750rem] w-10/12 xl:w-full mx-auto mb-[8.125rem]">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-x-auto">
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
                      <CompanyItem />
                      <CompanyItem />
                      <CompanyItem />
                      <CompanyItem />
                      <CompanyItem />
                      <CompanyItem />
                      <CompanyItem />
                      <CompanyItem />
                      <CompanyItem />
                      <CompanyItem />
                    </tbody>
                  </table>
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
