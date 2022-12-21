import { useContext } from 'react'
import ModalContext from '../context/ModalContext'
import { useNavigate } from 'react-router-dom'
import APIContext from '../context/APIContext'

const CompanyItem = ({ id, company_name, picture_url }) => {
  /**
   * * Use API Context
   */

  const { deleteCompany } = useContext(APIContext)

  /**
   * * Use Modal Context
   */

  const { showModal, hideModal, paintModalContent } = useContext(ModalContext)

  /**
   * * Use Navigate
   */

  const navigate = useNavigate()

  /**
   * * Component functions ================================================================
   */

  const hideCurrentModal = () => {
    console.log('hide modal')
    hideModal()
  }

  const removeCompanyFromDB = async (_companyId) => {
    // TODO el DELETE desde la API no devuelve nada
    const msg = await deleteCompany(_companyId)
    console.log(msg)
    hideModal()
  }

  const selectAction = (e) => {
    if (e.target.id.toString().includes('confirm')) {
      paintModalContent(
        'info', //type
        'info', //title of modal
        'Un momento por favor', //text of modal
        hideCurrentModal, // function to modal
        false //false will paint just a single button for modal
      )
      removeCompanyFromDB(document.querySelector('[data-delete="true"]').id)
    } else {
      hideCurrentModal()
    }
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

  const onDeleteCompanyClick = (e) => {
    /**
     * ? This is a workaround since I cannot / know
     * ? how to pass additional dynamic parameters to functions
     * ? inside components
     */

    // eslint-disable-next-line
    Array.from(document.querySelectorAll('tbody tr')).map((el) => {
      delete el.dataset.delete
    }) // ? Delete any previous markers for company deletion

    // ? Assign new target
    const _target = e.target.parentNode.parentNode.parentNode
    _target.dataset.delete = 'true'

    showModal()
    paintModalContent(
      'alert', //type
      'Alerta!', //title of modal
      `¿Seguro que quieres borrar la compañia ${
        _target.querySelector('td:nth-child(2').textContent
      }?`, //text of modal
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
