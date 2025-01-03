import Image from "next/image"
import Button from "./Button"
import Badge from "./Badge"

export type BlogCradType = {
    image: string;
    alt?: string;
    headling: string;
    description: string;
    date: string

}
export const BlogCrad = (props: { data: BlogCradType }) => {
    const { image, alt, headling, description, date } = props.data;
    return (
        <article className="space-y-3 bg-1/2 border p-4 rounded-[30px] overflow-hidden">
            <div className="flex gap-4">
                <figure className="relative overflow-hidden w-[4rem] h-[3rem] aspect-square rounded-[15px]">
                    <Image src={image} alt={alt || ""} fill />
                </figure>
                <h2 className="flex-auto  font-semibold ">
                    {headling}
                </h2>
            </div>

            <p className="opacity-75 text-sm">
                {description}
            </p>

            <p className="first-letter:mr-1 first-letter:text-violet-1 first-letter:text-xl font-light opacity-50 mb-5 text-sm">|  {date}</p>
            <Button zoom={.7}>Lire l’article  👉🏾</Button>
        </article>
    )
}


export type RowCardType = {
    image: string;
    alt?: string;
    headling: string;
    description: string;
    tags: string[]
}
export const RowCard = (props: { data: RowCardType }) => {
    const { image, alt, headling, description, tags } = props.data
    return (
        <article className="group relative md:hover:scale-105 duration-300 cursor-pointer transition-all hover:z-20 grid grid-cols-2 gap-5  items-center bg-1/2 border p-3 rounded-[30px] overflow-hidden">
            <figure className="relative overflow-hidden size-full rounded-[18px] ">
                <Image src={image} alt={alt || ""} fill />
                <div className="z-10 absolute  inset-0  md:bg-dark-bg/50 transition-all duration-300 group-hover:bg-transparent"></div>
            </figure>
            <div className="space-y-3">
                <h2 className="text-2xl" >{headling}</h2>
                <p className="opacity-75">
                    {description}
                </p>
                <div className="space-x-3">
                    {
                        tags.map((tag) => ((
                            <Badge zoom={.8} key={tag}>{tag}</Badge>
                        )))
                    }
                </div>
            </div>


        </article>
    );
}

const Card = ({ type, data }: { type: boolean, data: RowCardType }) => {
    const { image, alt, headling, description, tags } = data
    return (
        <article className="  group relative md:hover:scale-105 duration-300 cursor-pointer transition-all hover:z-20 flex flex-col gap-5  items-center bg-1/2 border  p-3 rounded-[30px] overflow-hidden">
            <figure className={`relative overflow-hidden  w-full ${type ? "h-48" : "h-32"}  rounded-[18px]`}>
                <Image src={image} alt={alt || ""} fill />

                <div className="z-10 absolute inset-0 md:bg-dark-bg/50 transition-all duration-300 group-hover:bg-transparent"></div>
            </figure>
            <div className="space-y-3 px-1 pb-1">
                <h2 className="text-2xl" >{headling}</h2>
                <p className="opacity-75">
                    {description}
                </p>
                <div className="space-x-3">
                    {
                        tags.map((tag) => ((
                            <Badge zoom={.8} key={tag}>{tag}</Badge>
                        )))
                    }
                </div>
            </div>


        </article>
    )
}

export default Card