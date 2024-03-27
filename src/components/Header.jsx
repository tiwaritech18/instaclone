import Container from "./Container"

const Header = () => {
  return (
    <div className=" fixed z-20 bg-black top-0 mb-8 p-4 border-gray-700 border-y w-full">
      <Container>
        <h2 className="text-white font-bold text-2xl  ">Instagram</h2>
      </Container>

    </div>
  )
}

export default Header
