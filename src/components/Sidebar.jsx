import { Link } from 'react-router-dom'
import baronLogo from '../assets/Logo.png'

const Sidebar = () => {
  return (
    <>
      <aside className="fixed top-0 left-0 w-4/5 md:w-[17.938rem] h-screen bg-[#2A3042]">
        <div className="w-4/5 mx-auto md:w-full flex items-center justify-start md:justify-center">
          <img
            className="w-[3.813rem] h-[2.500rem] mt-[1.500rem] mx-0 md:mx-auto"
            src={baronLogo}
          />
        </div>
        <h1 className="w-4/5 mx-auto md:w-full font-['Poppins'] font-[700] text-white text-[0.750rem] text-left md:text-center mt-[2.125rem]">
          Admin Panel
        </h1>
        <div className="w-4/5 mx-auto mt-[1.375rem]">
          <h2 className="font-['Poppins'] font-[400] text-[#7C8691] text-[0.750rem]">
            Menu
          </h2>
          <ul className="font-['Poppins'] font-[500] font-[0.875rem] p-0 mt-[1.125rem]">
            <li>
              <Link
                className="text-[#DFDFDF] hover:text-[#08A18F]"
                to="/companies"
              >
                Compa&ntilde;&iacute;as
              </Link>
            </li>
            {/* <li>
              <a className="text-[#DFDFDF] hover:text-[#08A18F]" href="#">
                Otra cosa
              </a>
            </li> */}
          </ul>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
