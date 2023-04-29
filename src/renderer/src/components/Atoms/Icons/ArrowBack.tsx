const ArrowBack = (props: Icons): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 40"
    style={{
      width: props.size,
      height: props.size
    }}
    {...props}
  >
    <path
      className="fill-white"
      d="M19.736 1.768a2.5 2.5 0 1 1 3.535 3.535L3.536 25.04 0 21.503 19.736 1.768Z"
    />
    <path
      className="fill-white"
      d="M0 21.535 3.536 18 23.14 37.605a2.5 2.5 0 0 1-3.535 3.535L0 21.535Z"
    />
  </svg>
)
export default ArrowBack
