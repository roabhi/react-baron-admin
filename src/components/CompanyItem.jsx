import { useContext } from 'react'
import ModalContext from '../context/ModalContext'
import { useNavigate } from 'react-router-dom'

/**
 * TODO This companyItem component show have an id or reference to perform actions on DB
 */

const CompanyItem = ({ id, company_name, picture_url }) => {
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
      '¿Seguro que quieres borrar esta compañia?', //text of modal
      selectAction, // function to modal
      true // isCancelable will paint OK / Cancel buttons
    )
  }

  return (
    <>
      <tr id={id} className="border-b">
        <td className="px-6 py-4 whitespace-nowrap">
          <img
            className="w-[3.125rem] h-[3.125rem] mx-auto"
            src={picture_url}
            alt="logo"
          />
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
