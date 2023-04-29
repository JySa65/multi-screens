const ZoomOut = (props: Icons): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    style={{
      width: props.size,
      height: props.size
    }}
    {...props}
  >
    <path
      stroke="#ECECEC"
      strokeWidth={3.125}
      d="M19.167 35C27.91 35 35 27.911 35 19.167c0-8.745-7.089-15.834-15.833-15.834-8.745 0-15.834 7.09-15.834 15.834S10.423 35 19.167 35Z"
    />
    <path
      stroke="#ECECEC"
      strokeLinecap="round"
      strokeWidth={3.125}
      d="m30.833 30.833 5.834 5.834M15 19.167h8.333"
    />
  </svg>
)
export default ZoomOut
