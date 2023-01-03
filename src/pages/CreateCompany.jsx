import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import DefaultIconButton from '../components/shared/DefaultIconButton'
import AuthContext from '../context/AuthContext'
import APIContext from '../context/APIContext'
import ModalContext from '../context/ModalContext'
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/shared/Spinner'

const CreateCompany = () => {
  /**
   * * Use AuthContext
   */

  const { isUserLogged } = useContext(AuthContext)

  /**
   * * Use API Context
   */

  const { createCompany } = useContext(APIContext)

  /**
   * * Use Modal Context
   */

  const { showModal, hideModal, paintModalContent } = useContext(ModalContext)

  /**
   * * Use State
   */

  const [name, setName] = useState('')
  const [logo, setLogo] = useState([])
  const [insurances, setInsurances] = useState([])
  const [isFormBusy, setIsFormBusy] = useState(false)

  useEffect(() => {
    if (!isUserLogged('baron-user-logged') === true) {
      navigate('/')
    }
  })

  /**
   * * Use navigate
   */

  const navigate = useNavigate()

  /**
   * * Component functions ================================================================
   */

  const goBack = () => {
    navigate('/companies')
  }

  const redirectToCompanies = () => {
    hideModal()
    goBack()
  }
  const handleInsuranceFile = (e) => {
    document.getElementById(
      'POST-insurances'
    ).parentNode.nextSibling.textContent = e.target.files[0].name // ? set tsv name in form
    setInsurances(e.target.files[0])
  }

  const handleLogoFile = (e) => {
    document.getElementById('POST-logo').parentNode.nextSibling.textContent =
      e.target.files[0].name // ? set logo name in form
    setLogo(e.target.files[0])
  }

  const insertCompany = async (_formData) => {
    const msg = await createCompany(_formData)

    setIsFormBusy(false)

    showModal()

    if (msg?.error) {
      paintModalContent(
        'error', //type
        'Error', //title of modal
        'Error al crear compañia', //text of modal
        redirectToCompanies, // function to modal
        false //false will paint just a single button for modal
      )
    } else {
      paintModalContent(
        'success', //type
        'Ok', //title of modal
        `La compañia ${msg.name} se ha creado correctamente`, //text of modal
        redirectToCompanies, // function to modal
        false //false will paint just a single button for modal
      )
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()

    formData.append('csv_file', insurances)
    formData.append('name', name)
    formData.append('picture', logo)

    setIsFormBusy(true)

    insertCompany(formData)
  }

  /**
   * * Render
   */

  return (
    <>
      <div className="holder-page">
        <header className="max-w-[85.750rem] w-10/12 xl:w-full flex items-center justify-between mx-auto mt-[6rem]">
          <div>
            <h1 className="text-[1.375rem] font-['Poppins'] font-[600] text-[#2A3042]">
              A&ntilde;adir Compa&ntilde;&iacute;a
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
              <form
                className="mt-[2rem] px-1"
                encType="multipart/form-data"
                method="post"
                onSubmit={handleFormSubmit}
              >
                <label
                  className="font-['Public_Sans'] text-[0.813rem]"
                  htmlFor="POST-name"
                >
                  Nombre de Compa&ntilde;&iacute;a
                </label>
                <input
                  id="POST-name"
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Nombre"
                  className="placeholder:text-[#DFDFDF] placeholder:font-['Work_Sans'] placeholder:font-[600] placeholder:text-[0.813rem] block bg-[#F0F0F0] w-96 border border-[#DFDFDF] rounded-[0.500rem] py-3 px-3 mt-[0.813rem] focus:outline-none focus:ring-1 ring-inset ring-[#7C8691] font-['Work_Sans'] text-[0.813rem] text-[#7C8691]"
                  onChange={(e) => setName(e.target.value)}
                />
                <div className="flex items-center justify-between w-96 mt-[2.750rem]">
                  <label
                    htmlFor="POST-logo"
                    className="font-['Public_Sans'] text-[0.813rem] w-1/2"
                  >
                    Logo de Compa&ntilde;&iacute;a
                  </label>
                  <input
                    id="POST-logo"
                    className="file:bg-[#08A18F] file:py-2.5 file:px-[3.75rem] file:rounded-[0.500rem] file:border-0 file:font-['Work_Sans'] file:font-[600] file:text-[0.750rem] hover:file:bg-[#00D183] file:text-white text-[rgba(0,0,0,0)] file:cursor-pointer w-1/2 active:file:bg-[#00D183] focus:file:outline-none focus:file:ring-2 ring-inset ring-[#2A3042]"
                    type="file"
                    name="logo"
                    onChange={handleLogoFile}
                  />
                </div>
                <span className="translate-y-[-0.5rem] inline-block font-[400] font-['Work_Sans'] text-[#2A3042] text-[0.688rem] w-1/3 truncate"></span>
                <div className="flex items-center justify-between w-96 mt-[2.750rem]">
                  <label
                    htmlFor="POST-insurances"
                    className="font-['Public_Sans'] text-[0.813rem] w-1/2"
                  >
                    Datos de Compa&ntilde;&iacute;a
                  </label>
                  <input
                    id="POST-insurances"
                    className="file:bg-[#08A18F] file:py-2.5 file:px-[3.75rem] file:rounded-[0.500rem] file:border-0 file:font-['Work_Sans'] file:font-[600] file:text-[0.750rem] hover:file:bg-[#00D183] file:text-white text-[rgba(0,0,0,0)] file:cursor-pointer w-1/2 active:file:bg-[#00D183] focus:file:outline-none focus:file:ring-2 ring-inset ring-[#2A3042]"
                    type="file"
                    name="insurances"
                    onChange={handleInsuranceFile}
                  />
                </div>
                <span className="translate-y-[-0.5rem] inline-block font-[400] font-['Work_Sans'] text-[#2A3042] text-[0.688rem] w-1/3 truncate"></span>
                {!isFormBusy ? (
                  <input
                    type="submit"
                    value="Enviar"
                    className="block relative mt-[4.63rem] mb-[3.313rem] bg-[#2A3042] text-white font-['Work_Sans'] font-[600] text-[0.875rem] rounded-[0.500rem] py-2.5 px-3 w-96 cursor-pointer hover:bg-[#7C8691] active:bg-[#7C8691] focus:outline-none focus:ring-2 ring-inset ring-[#2A3042]"
                  />
                ) : (
                  <div className="pointer-events-none mt-[4.63rem] mb-[3.313rem] bg-[#2A3042] rounded-[0.500rem] flex items-center justify-center w-96 pl-[1rem]">
                    <div className="spinner-container w-[1rem] h-[1rem]">
                      <Spinner className="" color="#ffffff" />
                    </div>
                    <input
                      type="submit"
                      value="Un momento por favor"
                      className="inline-block bg-[#2A3042] text-white font-['Work_Sans'] font-[600] text-[0.875rem] py-2.5 pr-[1.5rem] mx-auto w-3/4"
                    />
                  </div>
                )}
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

export default CreateCompany
