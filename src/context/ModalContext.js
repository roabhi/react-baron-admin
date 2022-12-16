import { createContext, useState } from 'react'
import Modal from '../components/shared/Modal'

const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [modalContent, setModalContent] = useState({
    // type: '',
    // title: '',
    // text: '',
    // action: () => {},
    // kind: '',
    // Seems that e do not need to define each prop for initialState, just an empty object will do
  })

  const paintModalContent = (_type, _title, _text, _action, _isCancelable) => {
    setModalContent({
      type: _type,
      title: _title,
      text: _text,
      action: _action,
      isCancelable: _isCancelable,
    })
  }

  const showModal = () => {
    setIsModalVisible(true)
    // console.log(isModalVisible)
  }

  const hideModal = () => {
    setIsModalVisible(false)
    // console.log(isModalVisible)
  }

  return (
    <ModalContext.Provider
      value={{
        showModal: showModal,
        hideModal: hideModal,
        paintModalContent: paintModalContent,
        isModalVisible: isModalVisible, // This is a state
      }}
    >
      {isModalVisible && (
        <Modal
          type={modalContent.type}
          title={modalContent.title}
          text={modalContent.text}
          action={modalContent.action}
          isCancelable={modalContent.isCancelable}
        />
      )}
      {/* {!isModalVisible && null} */}
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContext
