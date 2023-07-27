import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const HeaderPopUp = () => {
  /**
   * * Use Auth Context
   */

  const { logOutUser } = useContext(AuthContext)

  /**
   * * Use Navigate
   */

  const navigate = useNavigate()

  const userLogOut = (e) => {
    logOutUser()
    navigate('/')
  }

  return (
    <div
      id="logout-panel"
      className="logout-panel absolute invisible flex flex-col items-start justify-around rounded-[0.500rem] w-[11.500rem] h-[5.500rem] bottom-[-6rem] right-[-0.1250rem] bg-[#2A3042]"
    >
      <div
        className="flex flex-row justify-start items-center px-[1rem] text-white font-['Poppins'] font-[600] text-[0.625rem] w-full h-[50%] hover:opacity-50"
        onClick={() => console.log('download informe')}
      >
        <svg
          width="11"
          height="12"
          viewBox="0 0 11 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.625 7.96711V10.14H1.375V7.96711H0V10.14C0 10.9367 0.61875 11.5885 1.375 11.5885H9.625C10.3813 11.5885 11 10.9367 11 10.14V7.96711H9.625ZM8.9375 5.06998L7.96813 4.04874L6.1875 5.91739V0H4.8125V5.91739L3.03187 4.04874L2.0625 5.06998L5.5 8.69139L8.9375 5.06998Z"
            fill="white"
          />
        </svg>

        <span className="pl-[1rem]">Descargar Informe</span>
      </div>
      <div
        className="flex flex-row justify-start items-center px-[1rem] text-white font-['Poppins'] font-[600] text-[0.625rem] w-full h-[50%] border-t-[0.063rem] border-[#1A2938] hover:opacity-50"
        onClick={userLogOut}
      >
        <svg
          width="12"
          height="9"
          viewBox="0 0 12 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.00005 1.57505C3.21304 1.57505 2.57505 2.21304 2.57505 3.00005C2.57505 3.78705 3.21304 4.42505 4.00005 4.42505C4.78706 4.42505 5.42505 3.78705 5.42505 3.00005C5.42505 2.21304 4.78706 1.57505 4.00005 1.57505ZM6.57505 3.00005C6.57505 3.74437 6.25924 4.41493 5.75432 4.88505C6.03528 5.04327 6.29592 5.24011 6.52796 5.47214C7.1984 6.14258 7.57505 7.0519 7.57505 8.00005C7.57505 8.31761 7.31761 8.57505 7.00005 8.57505C6.68249 8.57505 6.42505 8.31761 6.42505 8.00005C6.42505 7.3569 6.16956 6.74009 5.71478 6.28531C5.26001 5.83054 4.6432 5.57505 4.00005 5.57505C3.3569 5.57505 2.74009 5.83054 2.28531 6.28531C1.83054 6.74009 1.57505 7.3569 1.57505 8.00005C1.57505 8.31761 1.31761 8.57505 1.00005 8.57505C0.682485 8.57505 0.425049 8.31761 0.425049 8.00005C0.425049 7.0519 0.8017 6.14258 1.47214 5.47214C1.70417 5.24011 1.96482 5.04327 2.24578 4.88505C1.74085 4.41493 1.42505 3.74437 1.42505 3.00005C1.42505 1.57792 2.57792 0.425049 4.00005 0.425049C5.42218 0.425049 6.57505 1.57792 6.57505 3.00005ZM8.90664 2.09346C8.68208 1.86891 8.31801 1.86891 8.09346 2.09346C7.86891 2.31801 7.86891 2.68208 8.09346 2.90664L8.93688 3.75005L8.09346 4.59346C7.86891 4.81801 7.86891 5.18208 8.09346 5.40664C8.31801 5.63119 8.68208 5.63119 8.90664 5.40664L9.75005 4.56322L10.5935 5.40664C10.818 5.63119 11.1821 5.63119 11.4066 5.40664C11.6312 5.18208 11.6312 4.81801 11.4066 4.59346L10.5632 3.75005L11.4066 2.90664C11.6312 2.68208 11.6312 2.31801 11.4066 2.09346C11.1821 1.86891 10.818 1.86891 10.5935 2.09346L9.75005 2.93688L8.90664 2.09346Z"
            fill="white"
          />
        </svg>
        <span className="pl-[1rem]">Cerrar Sesi&oacute;n</span>
      </div>
    </div>
  )
}

export default HeaderPopUp
