import PropTypes from 'prop-types'

const DefaultIconButton = ({ text, iconType }) => {
  return (
    <div className="flex items-center justify-between bg-[#08A18F] rounded-[0.500rem] py-2.5 px-4 hover:bg-[#00D183] active:bg-[#08A18F] active:outline-none active:ring-2 ring-inset ring-[#2A3042] cursor-pointer">
      {iconType === 'plus' && (
        <span className="inline-block w-[1.125rem] h-[1.125rem] mr-[0.5rem] pointer-events-none">
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.8306 7.33329H9.46304V3.33329C9.46304 3.15648 9.38635 2.98691 9.24984 2.86189C9.11333 2.73686 8.92818 2.66663 8.73512 2.66663C8.54206 2.66663 8.35691 2.73686 8.2204 2.86189C8.08389 2.98691 8.0072 3.15648 8.0072 3.33329V7.33329H3.63967C3.44661 7.33329 3.26146 7.40353 3.12495 7.52855C2.98843 7.65358 2.91174 7.82315 2.91174 7.99996C2.91174 8.17677 2.98843 8.34634 3.12495 8.47136C3.26146 8.59639 3.44661 8.66663 3.63967 8.66663H8.0072V12.6666C8.0072 12.8434 8.08389 13.013 8.2204 13.138C8.35691 13.2631 8.54206 13.3333 8.73512 13.3333C8.92818 13.3333 9.11333 13.2631 9.24984 13.138C9.38635 13.013 9.46304 12.8434 9.46304 12.6666V8.66663H13.8306C14.0236 8.66663 14.2088 8.59639 14.3453 8.47136C14.4818 8.34634 14.5585 8.17677 14.5585 7.99996C14.5585 7.82315 14.4818 7.65358 14.3453 7.52855C14.2088 7.40353 14.0236 7.33329 13.8306 7.33329Z"
              fill="white"
            />
          </svg>
        </span>
      )}

      {iconType === 'download' && (
        <span className="inline-block w-[0.688rem] h-[0.813rem] mr-[0.5rem] pointer-events-none">
          <svg
            width="11"
            height="13"
            viewBox="0 0 11 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.625 8.67426V10.8471H1.375V8.67426H0V10.8471C0 11.6438 0.61875 12.2957 1.375 12.2957H9.625C10.3813 12.2957 11 11.6438 11 10.8471V8.67426H9.625ZM8.9375 5.77713L7.96813 4.75589L6.1875 6.62454V0.707153H4.8125V6.62454L3.03187 4.75589L2.0625 5.77713L5.5 9.39854L8.9375 5.77713Z"
              fill="white"
            />
          </svg>
        </span>
      )}

      {iconType === 'back' && (
        <span className="inline-block w-[0.5rem] h-[0.5rem] mr-[0.5rem] pointer-events-none">
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.93323 7.08203L3.76041 6.11266L2.24685 4.33203L7.03979 4.33203L7.03979 2.95703L2.24685 2.95703L3.76041 1.17641L2.93323 0.207031L-2.44436e-05 3.64453L2.93323 7.08203Z"
              fill="white"
            />
          </svg>
        </span>
      )}

      <button className="text-white font-['Work_Sans'] font-[600] text-[0.875rem] pointer-events-none">
        {text}
      </button>
    </div>
  )
}

DefaultIconButton.defaultProps = {
  text: 'OK',
  iconType: '',
}

DefaultIconButton.propTypes = {
  text: PropTypes.string,
  iconType: PropTypes.string,
}

export default DefaultIconButton
