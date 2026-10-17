const EnglandFlag = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <defs>
      <clipPath id="englishCircle">
        <circle cx="12" cy="12" r="10" />
      </clipPath>
    </defs>
    <g clipPath="url(#englishCircle)">
      <rect width="24" height="24" fill="#012169" />
      <path
        d="M0 0L24 24M24 0L0 24"
        stroke="#FFFFFF"
        strokeWidth="5"
      />
      <path
        d="M0 0L24 24M24 0L0 24"
        stroke="#C8102E"
        strokeWidth="2"
      />
      <path
        d="M12 0V24M0 12H24"
        stroke="#FFFFFF"
        strokeWidth="8"
      />
      <path
        d="M12 0V24M0 12H24"
        stroke="#C8102E"
        strokeWidth="4.5"
      />
    </g>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="none"
      stroke="#000000"
      strokeOpacity="0.12"
    />
  </svg>
);
export default EnglandFlag;