import Container from "./Container"

const Header = () => {
  return (
    <div className=" fixed z-20 top-0 mb-8 p-4 border-gray-200 border-y w-full">
      <Container>
        <h2 className="text-black font-bold text-2xl  ">Instaclone</h2>
      </Container>

    </div>
  )
}

export default Header
