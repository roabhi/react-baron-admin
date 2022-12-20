import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import DefaultIconButton from '../components/shared/DefaultIconButton'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateCompany = () => {
  const [name, setName] = useState('')
  const [logo, setLogo] = useState(null)
  const [insurances, setInsurances] = useState(null)

  const handleInsuranceFile = (e) => {
    // console.log(e.target.files[0])
    document.getElementById(
      'POST-insurances'
    ).parentNode.nextSibling.textContent = e.target.files[0].name // ? set tsv name in form
    setInsurances(e.target.files[0])
  }

  const handleLogoFile = (e) => {
    // console.log(e.target.files[0])
    document.getElementById('POST-logo').parentNode.nextSibling.textContent =
      e.target.files[0].name // ? set logo name in form
    setLogo(e.target.files[0])
  }

  const postEntry = async (_data) => {
    // ? log out content of formData. They seem to be fine
    console.log(_data.get('csv_file'), _data.get('name'), _data.get('picture'))

    /**
     * TODO get the fetch to work
     */

    try {
      const res = await fetch(
        `https://murmuring-citadel-67317.herokuapp.com/companies`,
        {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          body: _data,
        }
      )

      const string = await res.text()
      const data = string === '' ? {} : JSON.parse(string)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()

    formData.append('csv_file', insurances)
    formData.append('name', name)
    formData.append('picture', logo)

    postEntry(formData)
  }

  const navigate = useNavigate()

  const goBack = () => {
    navigate('/companies')
  }

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
                <input
                  type="submit"
                  value="Enviar"
                  className="block mt-[4.63rem] mb-[3.313rem] bg-[#2A3042] text-white font-['Work_Sans'] font-[600] text-[0.875rem] rounded-[0.500rem] py-2.5 px-3 w-96 cursor-pointer hover:bg-[#7C8691] active:bg-[#7C8691] focus:outline-none focus:ring-2 ring-inset ring-[#2A3042]"
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

export default CreateCompany
