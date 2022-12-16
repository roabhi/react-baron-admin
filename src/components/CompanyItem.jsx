import { useContext } from 'react'
import ModalContext from '../context/ModalContext'
import { useNavigate } from 'react-router-dom'

/**
 * TODO This companyItem component show have an id or reference to perform actions on DB
 */

const CompanyItem = ({ id, company_name }) => {
  const { showModal, hideModal, paintModalContent } = useContext(ModalContext)

  const navigate = useNavigate()

  /**
   * TODO This hideCurrentModal function is reused just to hide the modal for now
   * TODO Once we have final actions from CRUD each Modal should be passed and
   * TODO an action to perform DB operations or whatever
   */

  const hideCurrentModal = () => {
    console.log('hide modal')
    hideModal()
  }

  const selectAction = (e) => {
    // ? Test
    e.target.id.toString().includes('confirm')
      ? console.log('clicked on confirm')
      : console.log('clicked on cancel')

    // ? Hide anyways
    hideCurrentModal()
  }

  const onEditCompanyClick = () => {
    showModal()
    paintModalContent(
      'info', //type
      'info', //title of modal
      'You are about to edit this company', //text of modal
      hideCurrentModal, // function to modal
      false //false will paint just a single button for modal
    )
  }

  const onDeleteCompanyClick = () => {
    showModal()
    paintModalContent(
      'alert', //type
      'Alert', //title of modal
      'Are you sure you want to delete this company', //text of modal
      selectAction, // function to modal
      true // isCancelable will paint OK / Cancel buttons
    )
  }

  return (
    <>
      <tr id={id} className="border-b">
        <td className="px-6 py-4 whitespace-nowrap">
          <svg
            className="w-[3.125rem] h-[3.125rem] ml-[-3.5rem]
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
        </td>
        <td className="font-['Public_Sans'] font-[500] text-[#2A3042] text-[1.063rem] px-6 py-4 whitespace-nowrap min-w-[16.5rem]">
          {company_name}
        </td>
        <td className="font-['Work_Sans'] font-[600] text-[#2A3042] text-[0.813rem] px-6 py-4 whitespace-nowrap">
          <div className="w-10/12 flex items-center justify-between">
            <button
              className="border-2 border-[#2A3042] rounded-[0.500rem] py-1 px-10 hover:border-[#7C8691] hover:text-[#7C8691] active:border-[#2A3042] focus:outline-none"
              onClick={() => navigate(`/company/${id}`)}
            >
              Abrir
            </button>
            <button
              className="border-2 border-[#2A3042] rounded-[0.500rem] py-1 px-10 hover:border-[#7C8691] hover:text-[#7C8691] active:border-[#2A3042] focus:outline-none"
              onClick={onEditCompanyClick}
            >
              Editar
            </button>
            <button
              className="border-2 border-[#2A3042] rounded-[0.500rem] py-1 px-10 hover:border-[#7C8691] hover:text-[#7C8691] active:border-[#2A3042] focus:outline-none"
              onClick={onDeleteCompanyClick}
            >
              Eliminar
            </button>
          </div>
        </td>
      </tr>
    </>
  )
}

export default CompanyItem
