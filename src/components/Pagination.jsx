const Pagination = () => {
  return (
    <>
      <div className="pagination font-['Work_Sans'] font-[600] text-[0.813rem] text-[#2A3042] flex items-center justify-end py-5 max-w-[71.188rem] mx-auto">
        <div className="mr-10">
          <p>
            P&aacute;gina <span>1</span> de <span>10</span>
          </p>
        </div>
        <div>
          <span className="inline-block w-[0.438rem] h-[0.750rem] cursor-pointer mr-[3rem]">
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.76308 1.84593C7.41927 1.22621 6.3803 0.244991 5.72412 0.916353L0.912089 5.40931C0.638679 5.66753 0.638679 6.13232 0.912089 6.39054L5.72412 10.9351C6.3803 11.5549 7.41927 10.5736 6.76308 9.95392C4.44333 7.76309 4.45732 4.05147 6.76308 1.84593Z"
                fill="#2A3042"
              />
            </svg>
          </span>
          <span className="inline-block w-[0.438rem] h-[0.750rem] cursor-pointer">
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.391583 1.84593C-0.264603 1.22621 0.774358 0.244991 1.43054 0.916353L6.24257 5.40931C6.51598 5.66753 6.51598 6.13232 6.24257 6.39054L1.43054 10.9351C0.774358 11.5549 -0.264603 10.5736 0.391583 9.95392C2.71133 7.76309 2.69735 4.05147 0.391583 1.84593Z"
                fill="#2A3042"
              />
            </svg>
          </span>
        </div>
      </div>
    </>
  )
}

export default Pagination
