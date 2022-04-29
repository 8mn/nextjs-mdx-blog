const Button = ({ text }) => {
  return (
    <button
      className=""
      onClick={event => event.target.innerText = 'You clicked me!'}
    >
      {text}
    </button>
  )
}

export default Button
