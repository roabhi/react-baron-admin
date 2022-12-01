const DefaultActionButton = ({ text }) => {
  return (
    <>
      <button className="border-2 border-[#2A3042] rounded-[0.500rem] py-1 px-10 hover:border-[#7C8691] hover:text-[#7C8691] active:border-[#2A3042] focus:outline-none">
        {text}
      </button>
    </>
  )
}

export default DefaultActionButton
