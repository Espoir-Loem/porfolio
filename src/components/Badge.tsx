import { ReactNode } from "react";

type BadgeType = {
    children:ReactNode;
    zoom?:number;
    active?:boolean
}
const Badge = ({children,zoom,active}:BadgeType) => {
    return (
        <span style={{zoom,borderWidth:0.5}}  className={`${active?"bg-1/35":"bg-1/2"} text-[18px] md:text-[20px] backdrop-blur-lg  size-fit border  px-[12px] py-[6px] rounded-[12px] `}>
            {children}
        </span>
    )
}

export default Badge