/**
 * ! useNavigate until we create actual login validaton
 * ! right now there is NONE
 */
import { useNavigate } from 'react-router-dom'

import baronLogo from '../assets/Logo.png'

const Login = () => {
  const navigate = useNavigate()

  const onLoginSubmit = (e) => {
    e.preventDefault()

    /**
     * TODO Validation Will Go Here
     */

    navigate('/companies')
  }

  return (
    <>
      <div id="holder" className="container-fw">
        <div className="flex items-center justify-center h-screen">
          <div className="card relative form px-[2.5rem]">
            <div className="flex items-center justify-center">
              <img
                className="absolute top-[-3rem] w-[7.813rem] h-[5.188rem] mx-auto"
                src={baronLogo}
              />
            </div>
            <h1 className="mt-[3.125rem] font-['Public_Sans'] font-[700] text-[1.625rem]">
              LogIn
            </h1>
            <form className="mt-[2rem] px-1" action="" method="get">
              <label
                className="font-['Public_Sans'] text-[0.813rem]"
                htmlFor="GET-user"
              >
                Usuario
              </label>
              <input
                id="GET-name"
                type="text"
                name="name"
                placeholder="Usuario"
                autoComplete="username"
                className="placeholder:text-[#DFDFDF] placeholder:font-['Work_Sans'] placeholder:font-[600] placeholder:text-[0.813rem] block bg-[#F0F0F0] w-full border border-[#DFDFDF] rounded-[0.500rem] py-3 px-3 mt-[0.813rem] focus:outline-none focus:ring-1 ring-inset ring-[#7C8691] font-['Work_Sans'] text-[0.813rem] text-[#7C8691] w-80"
              />
              <label
                htmlFor="GET-password"
                className="block mt-[1.813rem] font-['Public_Sans'] text-[0.813rem]"
              >
                Password
              </label>
              <input
                id="GET-password"
                type="password"
                name="Password"
                autoComplete="current-password"
                placeholder="password"
                className="placeholder:text-[#DFDFDF] placeholder:font-['Work_Sans'] placeholder:font-[600] placeholder:text-[0.813rem] bg-[#F0F0F0] block w-full border border-[#DFDFDF] rounded-[0.500rem] py-3 px-3 mt-[0.813rem] focus:outline-none focus:ring-1 ring-inset ring-[#7C8691] text-[0.813rem] text-[#7C8691] w-80"
              />
              <input
                type="submit"
                value="Enviar"
                onClick={onLoginSubmit}
                className="mt-[4.63rem] mb-[3.313rem] bg-[#2A3042] text-white font-['Work_Sans'] font-[600] text-[0.875rem] rounded-[0.500rem] py-2.5 px-3 w-80 cursor-pointer hover:bg-[#7C8691] active:bg-[#7C8691] focus:outline-none focus:ring-2 ring-inset ring-[#2A3042]"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
