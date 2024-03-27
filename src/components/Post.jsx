import Image from "next/image";
import { RxAvatar } from "react-icons/rx";
import { CiHeart } from "react-icons/ci";
import { FaRegComment ,FaShare} from "react-icons/fa";
import postImg from "../../public/nextimage3.png"
import Actions from "./Actions";
import Container from "./Container";

const actions = [
  {
  id:1,
  text:"Like",
  icon:<CiHeart/>
},
  {
  id:2,
  text:"Comment",
  icon:<FaRegComment/>
},
  {
  id:3,
  text:"Share",
  icon:<FaShare/>
},]

const Post = () => {
  return (
    <Container>
      <div className="flex justify-center mt-5">
        <div className="p-2">
          <div className="flex gap-3 items-center ml-2">
            <RxAvatar className="text-3xl"/>
            <p className="font-bold">john doe</p>
          </div>
          <div className="mt-1">
            <Image width={400} height={400} src={postImg} alt="post" className="rounded-md lg:w-[700px] lg:h-[400px] object-cover"/>
          </div>
          <div className="flex gap-4 mt-2 px-5 py-2">
            {actions.map((action) => {
              return(
                <Actions key={action.id} text={action.text} icon={action.icon}/>
              )
            })}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Post
