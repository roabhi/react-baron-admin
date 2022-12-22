import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import DefaultIconButton from '../components/shared/DefaultIconButton'
import { useEffect, useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import APIContext from '../context/APIContext'

const EditCompany = () => {
  /**
   * * Use API Context
   */

  const { fetchCompany } = useContext(APIContext)

  /**
   * * Use State
   */

  const [name, setName] = useState('')
  // const [logo, setLogo] = useState([])
  // const [insurances, setInsurances] = useState([])

  /**
   * * Use params
   */

  const params = useParams()

  /**
   * * Use navigate
   */

  const navigate = useNavigate()

  const goBack = () => {
    navigate('/companies')
  }

  /**
   * * Use Effect
   */

  useEffect(() => {
    const getCompanyInfo = async () => {
      const _companyInfo = await fetchCompany(params.id)

      if (_companyInfo?.error) {
        // showModal()
        // paintModalContent(
        //   'error', //type
        //   'error', //title of modal
        //   'Error leyendo compañia desde la base de datos', //text of modal
        //   hideModalAndRedirect, // function to modal
        //   false //false will paint just a single button for modal
        // )
        console.log('error')
      } else {
        setName(_companyInfo.name)
      }
    }
    getCompanyInfo()
  }, [fetchCompany, params.id])

  return (
    <>
      <div className="holder-page">
        <header className="max-w-[85.750rem] w-10/12 xl:w-full flex items-center justify-between mx-auto mt-[6rem]">
          <div>
            <h1 className="text-[1.375rem] font-['Poppins'] font-[600] text-[#2A3042]">
              Editar Compa&ntilde;&iacute;a
            </h1>
          </div>
          <div>
            <DefaultIconButton
              text="Volver Atr&aacute;s"
              iconType="back"
              action={goBack}
            />
          </div>
        </header>
        <div className="border-b h-[2rem] w-full"></div>
        <main className="mt-[5rem] max-w-[85.750rem] w-10/12 xl:w-full mx-auto">
          <div className="flex items-center justify-center">
            <div className="card form px-[3.5rem]">
              <h1 className="mt-[3.125rem] font-['Public_Sans'] font-[700] text-[1.625rem]">
                Datos de Compa&ntilde;&iacute;a
              </h1>
              <form className="mt-[2rem] px-1" action="" method="get">
                <label
                  className="font-['Public_Sans'] text-[0.813rem]"
                  htmlFor="GET-user"
                >
                  Nombre de Compa&ntilde;&iacute;a
                </label>
                <input
                  id="GET-name"
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  defaultValue={name}
                  className="placeholder:text-[#DFDFDF] placeholder:font-['Work_Sans'] placeholder:font-[600] placeholder:text-[0.813rem] block bg-[#F0F0F0] w-96 border border-[#DFDFDF] rounded-[0.500rem] py-3 px-3 mt-[0.813rem] focus:outline-none focus:ring-1 ring-inset ring-[#7C8691] font-['Work_Sans'] text-[0.813rem] text-[#7C8691]"
                />
                <div className="flex items-center justify-between w-96 mt-[2.750rem]">
                  <label className="font-['Public_Sans'] text-[0.813rem] w-1/2">
                    Logo de Compa&ntilde;&iacute;a
                  </label>
                  <input
                    className="file:bg-[#08A18F] file:py-2.5 file:px-[3.75rem] file:rounded-[0.500rem] file:border-0 file:font-['Work_Sans'] file:font-[600] file:text-[0.750rem] hover:file:bg-[#00D183] file:text-white text-[rgba(0,0,0,0)] file:cursor-pointer w-1/2 active:file:bg-[#00D183] focus:file:outline-none focus:file:ring-2 ring-inset ring-[#2A3042]"
                    type="file"
                  />
                </div>
                <span className="translate-y-[-1rem] inline-block font-[400] font-['Work_Sans'] text-[#2A3042] text-[0.688rem]">
                  Archivo.png
                </span>
                <div className="flex items-center justify-between w-96 mt-[1.250rem]">
                  <label className="font-['Public_Sans'] text-[0.813rem] w-1/2">
                    Datos de Compa&ntilde;&iacute;a
                  </label>
                  <input
                    className="file:bg-[#08A18F] file:py-2.5 file:px-[3.75rem] file:rounded-[0.500rem] file:border-0 file:font-['Work_Sans'] file:font-[600] file:text-[0.750rem] hover:file:bg-[#00D183] file:text-white text-[rgba(0,0,0,0)] file:cursor-pointer w-1/2 active:file:bg-[#00D183] focus:file:outline-none focus:file:ring-2 ring-inset ring-[#2A3042]"
                    type="file"
                  />
                </div>
                <span className="translate-y-[-1rem] inline-block font-[400] font-['Work_Sans'] text-[#2A3042] text-[0.688rem]">
                  Archivo.csv
                </span>
                <input
                  type="submit"
                  value="Enviar"
                  className="block mt-[3.125rem] mb-[3.313rem] bg-[#2A3042] text-white font-['Work_Sans'] font-[600] text-[0.875rem] rounded-[0.500rem] py-2.5 px-3 w-96 cursor-pointer hover:bg-[#7C8691] active:bg-[#7C8691] focus:outline-none focus:ring-2 ring-inset ring-[#2A3042]"
                />
              </form>
            </div>
          </div>
        </main>
      </div>
      <Header />
      <Sidebar />
    </>
  )
}

export default EditCompany
