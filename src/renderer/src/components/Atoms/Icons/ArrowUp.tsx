const ArrowUp = (props: Icons): JSX.Element => (
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
      d="M5.303 41.14a2.5 2.5 0 1 1-3.535-3.535l19.735-19.736 3.536 3.536L5.303 41.14Z"
    />
    <path
      className="fill-white"
      d="m25.04 21.372-3.537 3.536L1.9 5.303a2.5 2.5 0 1 1 3.535-3.535L25.04 21.372Z"
    />
  </svg>
)
export default ArrowUp
