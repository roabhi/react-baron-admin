import { createContext, useState } from 'react'
import Modal from '../components/shared/Modal'

const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [modalContent, setModalContent] = useState({
    type: '',
    title: '',
    text: '',
    action: () => {},
  })

  const paintModalContent = (_type, _title, _text, _action) => {
    setModalContent({
      type: _type,
      title: _title,
      text: _text,
      action: _action,
    })
  }

  const showModal = () => {
    setIsModalVisible(true)
    console.log(isModalVisible)
  }

  const hideModal = () => {
    setIsModalVisible(false)
    console.log(isModalVisible)
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
        />
      )}
      {/* {!isModalVisible && null} */}
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContext
