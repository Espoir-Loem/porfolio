import Badge from "./Badge"
import { ReactNode } from "react"
import { Icon } from "./Icon"




export const IconButton = ({children}:{children:ReactNode, href?:string}) => {
    return (
        <button  className=" backdrop-blur-lg grid place-content-center size-[35px] bg-1/10 border rounded-[10px]">
            {children}
        </button>
    )
}

export const NetworkIcons = ({opacity}:{opacity?:number}) => {
    
    return (
        <div style={{opacity:opacity}} className="flex items-center gap-2.5 border bg-1/2 backdrop-blur-lg rounded-[17px] p-[5px] ">
            <IconButton>
                <Icon name="github"/>
            </IconButton>
            <IconButton>
                <Icon name="whatsapp"/>
            </IconButton>
            <IconButton>
                <Icon name="linkedin"/>
            </IconButton>
            <IconButton>
                <Icon name="Instagram"/>
            </IconButton>
        </div>
    )
}



type ButtonType = {
    children :  ReactNode
    zoom?:number
}
const Button = ({children,zoom}: ButtonType) => {
    return (
        <button style={{zoom}} className="backdrop-blur-lg hover:scale-110 transition-all duration-300 cursor-pointer flex items-center font-light gap-1.5 border-[0.5px]  bg-1/2 rounded-[17px] p-[5px] ">
            <Badge active={true}>{children}</Badge>
            <hr className="h-[7px] bg-violet-1 w-[1.5px] rounded-4xl border-0 opacity-70" />
            <hr className="h-[7px] bg-violet-1 w-[1.5px] rounded-4xl border-0 opacity-70" />
        </button>
    )
}

export default Button