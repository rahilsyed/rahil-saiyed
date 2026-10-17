const DeutscheFlag = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <defs>
      <clipPath id="germanCircle">
        <circle cx="12" cy="12" r="10" />
      </clipPath>
    </defs>
    <g clipPath="url(#germanCircle)">
      <rect width="24" height="8" fill="#000000" />
      <rect y="8" width="24" height="8" fill="#DD0000" />
      <rect y="16" width="24" height="8" fill="#FFCE00" />
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
export default DeutscheFlag;