
const Actions = ({icon, text}) => {
  return (
      <button className="flex gap-1 items-center">
          {text}
          {icon}
        </button>
  )
}

export default Actions
