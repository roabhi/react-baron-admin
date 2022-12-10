import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Pagination from '../components/Pagination'
import Insurance from '../components/Insurance'
import DefaultIconButton from '../components/shared/DefaultIconButton'
// import { useNavigate } from 'react-router-dom'

const Company = () => {
  // const navigate = useNavigate()

  const download = () => {
    //code to download archive from db
    console.log('download archive')
  }

  return (
    <>
      <div className="holder-page">
        <header className="max-w-[85.750rem] w-10/12 xl:w-full flex items-center justify-between mx-auto mt-[6rem]">
          <div className="flex items-center justify-between">
            <svg
              className="w-[3.125rem] h-[3.125rem] ml-[-4.75rem]
                            min-w-[12.5rem]"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25" cy="25" r="25" fill="#DFDFDF" />
              <path
                d="M32.0673 15.8784H18.149C17.358 15.8784 16.5994 16.1945 16.0401 16.7571C15.4807 17.3197 15.1665 18.0828 15.1665 18.8784V28.8784C15.1665 29.6741 15.4807 30.4371 16.0401 30.9997C16.5994 31.5623 17.358 31.8784 18.149 31.8784H32.0673C32.8583 31.8784 33.6169 31.5623 34.1762 30.9997C34.7356 30.4371 35.0498 29.6741 35.0498 28.8784V18.8784C35.0498 18.0828 34.7356 17.3197 34.1762 16.7571C33.6169 16.1945 32.8583 15.8784 32.0673 15.8784ZM18.149 29.8784C17.8853 29.8784 17.6325 29.7731 17.446 29.5855C17.2596 29.398 17.1548 29.1436 17.1548 28.8784V26.4584L20.4356 23.1684C20.6214 22.9852 20.8713 22.8826 21.1315 22.8826C21.3917 22.8826 21.6416 22.9852 21.8274 23.1684L28.4983 29.8784H18.149ZM33.0615 28.8784C33.0615 29.1436 32.9567 29.398 32.7703 29.5855C32.5838 29.7731 32.331 29.8784 32.0673 29.8784H31.3018L27.514 26.0484L28.3889 25.1684C28.5747 24.9852 28.8246 24.8826 29.0848 24.8826C29.345 24.8826 29.5949 24.9852 29.7807 25.1684L33.0615 28.4584V28.8784ZM33.0615 25.6384L31.1924 23.7684C30.6258 23.2209 29.8706 22.915 29.0848 22.915C28.2991 22.915 27.5438 23.2209 26.9772 23.7684L26.1023 24.6484L23.2391 21.7684C22.6725 21.2209 21.9172 20.915 21.1315 20.915C20.3457 20.915 19.5905 21.2209 19.0239 21.7684L17.1548 23.6384V18.8784C17.1548 18.6132 17.2596 18.3588 17.446 18.1713C17.6325 17.9838 17.8853 17.8784 18.149 17.8784H32.0673C32.331 17.8784 32.5838 17.9838 32.7703 18.1713C32.9567 18.3588 33.0615 18.6132 33.0615 18.8784V25.6384Z"
                fill="white"
              />
            </svg>
            <h1 className="text-[1.375rem] font-['Poppins'] font-[600] text-[#2A3042] ml-[-3rem]">
              Nombre de Compa&ntilde;&iacute;a
            </h1>
          </div>
          <div>
            <DefaultIconButton
              text="Descargar Fichero"
              iconType="download"
              action={download}
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
                        <th
                          scope="col"
                          className="text-white font-['Poppins'] font-[600] text-[0.875rem] pl-6 py-4 text-left w-1/12"
                        >
                          F.Est&eacute;tica
                        </th>
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
                      <Insurance
                        category="alergología"
                        company_category="alergología"
                        domain="pub"
                        estetic="1"
                        capital_range="300000"
                        cost="70"
                        score="9"
                      />
                      <Insurance
                        category="Cirugía Est&eacute;tica, pl&aacute;tica y reparadora"
                        company_category="Cirugía Est&eacute;tica, pl&aacute;tica y reparadora"
                        domain="pub"
                        estetic="1"
                        capital_range="600000"
                        cost="125"
                        score="7"
                      />
                      <Insurance
                        category="alergología"
                        company_category="alergología"
                        domain="priv"
                        estetic="1"
                        capital_range="1000000"
                        cost="80.5"
                        score="6"
                      />
                      <Insurance
                        category="cirugía est&eacute;tica, pl&aacute;tica y reparadora"
                        company_category="cirugía est&eacute;tica, pl&aacute;tica y reparadora"
                        domain="mix"
                        estetic="1"
                        capital_range="600000"
                        cost="80"
                        score="8"
                      />
                      <Insurance
                        category="alergología"
                        company_category="alergología"
                        domain="pub"
                        estetic="1"
                        capital_range="300000"
                        cost="70"
                        score="9"
                      />
                      <Insurance
                        category="Cirugía Est&eacute;tica, pl&aacute;tica y reparadora"
                        company_category="Cirugía Est&eacute;tica, pl&aacute;tica y reparadora"
                        domain="pub"
                        estetic="1"
                        capital_range="600000"
                        cost="125"
                        score="7"
                      />
                      <Insurance
                        category="alergología"
                        company_category="alergología"
                        domain="priv"
                        estetic="1"
                        capital_range="1000000"
                        cost="80.5"
                        score="6"
                      />
                      <Insurance
                        category="cirugía est&eacute;tica, pl&aacute;tica y reparadora"
                        company_category="cirugía est&eacute;tica, pl&aacute;tica y reparadora"
                        domain="mix"
                        estetic="1"
                        capital_range="600000"
                        cost="80"
                        score="8"
                      />
                      <Insurance
                        category="alergología"
                        company_category="alergología"
                        domain="pub"
                        estetic="1"
                        capital_range="300000"
                        cost="70"
                        score="9"
                      />
                      <Insurance
                        category="Cirugía Est&eacute;tica, pl&aacute;tica y reparadora"
                        company_category="Cirugía Est&eacute;tica, pl&aacute;tica y reparadora"
                        domain="pub"
                        estetic="1"
                        capital_range="600000"
                        cost="125"
                        score="7"
                      />
                      <Insurance
                        category="alergología"
                        company_category="alergología"
                        domain="pub"
                        estetic="1"
                        capital_range="300000"
                        cost="70"
                        score="9"
                      />
                      <Insurance
                        category="Cirugía Est&eacute;tica, pl&aacute;tica y reparadora"
                        company_category="Cirugía Est&eacute;tica, pl&aacute;tica y reparadora"
                        domain="pub"
                        estetic="1"
                        capital_range="600000"
                        cost="125"
                        score="7"
                      />
                      <Insurance
                        category="alergología"
                        company_category="alergología"
                        domain="priv"
                        estetic="1"
                        capital_range="1000000"
                        cost="80.5"
                        score="6"
                      />
                      <Insurance
                        category="cirugía est&eacute;tica, pl&aacute;tica y reparadora"
                        company_category="cirugía est&eacute;tica, pl&aacute;tica y reparadora"
                        domain="mix"
                        estetic="1"
                        capital_range="600000"
                        cost="80"
                        score="8"
                      />
                      <Insurance
                        category="alergología"
                        company_category="alergología"
                        domain="pub"
                        estetic="1"
                        capital_range="300000"
                        cost="70"
                        score="9"
                      />
                      <Insurance
                        category="Cirugía Est&eacute;tica, pl&aacute;tica y reparadora"
                        company_category="Cirugía Est&eacute;tica, pl&aacute;tica y reparadora"
                        domain="pub"
                        estetic="1"
                        capital_range="600000"
                        cost="125"
                        score="7"
                      />
                      <Insurance
                        category="alergología"
                        company_category="alergología"
                        domain="priv"
                        estetic="1"
                        capital_range="1000000"
                        cost="80.5"
                        score="6"
                      />
                      <Insurance
                        category="cirugía est&eacute;tica, pl&aacute;tica y reparadora"
                        company_category="cirugía est&eacute;tica, pl&aacute;tica y reparadora"
                        domain="mix"
                        estetic="1"
                        capital_range="600000"
                        cost="80"
                        score="8"
                      />
                      <Insurance
                        category="alergología"
                        company_category="alergología"
                        domain="pub"
                        estetic="1"
                        capital_range="300000"
                        cost="70"
                        score="9"
                      />
                      <Insurance
                        category="Cirugía Est&eacute;tica, pl&aacute;tica y reparadora"
                        company_category="Cirugía Est&eacute;tica, pl&aacute;tica y reparadora"
                        domain="pub"
                        estetic="1"
                        capital_range="600000"
                        cost="125"
                        score="7"
                      />
                      {/* <tr className="border-b">
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          Cirugía Est&eacute;tica, pl&aacute;tica y reparadora
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          Cirugía Est&eacute;tica, pl&aacute;tica y reparadora
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          Público
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          1
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          300000
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          125
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-3 py-4 w-1/12">
                          6
                        </td>
                      </tr> */}
                      {/* <tr className="border-b">
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          An&aacute;lisis Cl&iacute;nicos
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          An&aacute;lisis Cl&iacute;nicos
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          Público
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4">
                          1
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          1000000
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          125.25
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-3 py-4 w-1/12">
                          6
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          Cirugía Est&eacute;tica, pl&aacute;tica y reparadora
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          Cirugía Est&eacute;tica, pl&aacute;tica y reparadora
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          Público
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          1
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          300000
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          125
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-3 py-4 w-1/12">
                          6
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          An&aacute;lisis Cl&iacute;nicos
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          An&aacute;lisis Cl&iacute;nicos
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          Público
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4">
                          0
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          600000
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          45.5
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-3 py-4 w-1/12">
                          6
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          Cirugía Est&eacute;tica, pl&aacute;tica y reparadora
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          Cirugía Est&eacute;tica, pl&aacute;tica y reparadora
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          Público
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          1
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          300000
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          125
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-3 py-4 w-1/12">
                          6
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          An&aacute;lisis Cl&iacute;nicos
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          An&aacute;lisis Cl&iacute;nicos
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          Público
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4">
                          0
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          300000
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          125
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-3 py-4 w-1/12">
                          6
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          Cirugía Est&eacute;tica, pl&aacute;tica y reparadora
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          Cirugía Est&eacute;tica, pl&aacute;tica y reparadora
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          Privado
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          1
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          300000
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          125
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-3 py-4 w-1/12">
                          6
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          An&aacute;lisis Cl&iacute;nicos
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          An&aacute;lisis Cl&iacute;nicos
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          Público
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4">
                          1
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          300000
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          125
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-3 py-4 w-1/12">
                          6
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          Cirugía Est&eacute;tica, pl&aacute;tica y reparadora
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          Cirugía Est&eacute;tica, pl&aacute;tica y reparadora
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          Mixto
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          1
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          300000
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          125
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-3 py-4 w-1/12">
                          6
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          An&aacute;lisis Cl&iacute;nicos
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          An&aacute;lisis Cl&iacute;nicos
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          Público
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4">
                          1
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          300000
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          125
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-3 py-4 w-1/12">
                          6
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          An&aacute;lisis Cl&iacute;nicos
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          An&aacute;lisis Cl&iacute;nicos
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          Público
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4">
                          1
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          300000
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          125
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-3 py-4 w-1/12">
                          6
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          An&aacute;lisis Cl&iacute;nicos
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          An&aacute;lisis Cl&iacute;nicos
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          Público
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4">
                          1
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          300000
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          125
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-3 py-4 w-1/12">
                          6
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          An&aacute;lisis Cl&iacute;nicos
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          An&aacute;lisis Cl&iacute;nicos
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          Público
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4">
                          1
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          300000
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          125
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-3 py-4 w-1/12">
                          6
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          An&aacute;lisis Cl&iacute;nicos
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          An&aacute;lisis Cl&iacute;nicos
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          Público
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4">
                          1
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          300000
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          125
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-3 py-4 w-1/12">
                          6
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          An&aacute;lisis Cl&iacute;nicos
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          An&aacute;lisis Cl&iacute;nicos
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          Público
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4">
                          1
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          300000
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          125
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-3 py-4 w-1/12">
                          6
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          An&aacute;lisis Cl&iacute;nicos
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          An&aacute;lisis Cl&iacute;nicos
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          Público
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4">
                          1
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          300000
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          125
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-3 py-4 w-1/12">
                          6
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          An&aacute;lisis Cl&iacute;nicos
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          An&aacute;lisis Cl&iacute;nicos
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          Público
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4">
                          1
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          300000
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          125
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-3 py-4 w-1/12">
                          6
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          An&aacute;lisis Cl&iacute;nicos
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          An&aacute;lisis Cl&iacute;nicos
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          Público
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4">
                          1
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          300000
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          125
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-3 py-4 w-1/12">
                          6
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          An&aacute;lisis Cl&iacute;nicos
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          An&aacute;lisis Cl&iacute;nicos
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          Público
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4">
                          1
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          300000
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          125
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-3 py-4 w-1/12">
                          6
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          An&aacute;lisis Cl&iacute;nicos
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-3/12">
                          An&aacute;lisis Cl&iacute;nicos
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          Público
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4">
                          1
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          300000
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-6 py-4 w-1/12">
                          125
                        </td>
                        <td className="font-['Public_Sans'] font-[500] text-[0.813rem] pl-3 py-4 w-1/12">
                          6
                        </td>
                      </tr> */}
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

export default Company
