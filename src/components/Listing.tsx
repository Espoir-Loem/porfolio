import Badge from "./Badge";
import Button from "./Button"
import Card, { BlogCrad, BlogCradType, RowCard, RowCardType } from "./Card"
import Headling from "./Headling"

type ListingType = {
    type: "blog" | "experience" | "projet" | "expertise";
    data : RowCardType[] | BlogCradType[]
}
const Listing = ({ type , data }: ListingType) => {
    

    
    return (
        <section className="px-2 lg:px-xpage py-32  flex flex-col items-center gap-28">
            <Headling />
            {
                type == "blog" &&
                <>
                    <div className="grid md:grid-cols-2 gap-9">

                        {
                            data.map((blog,index)=>(
                                <BlogCrad data={blog as BlogCradType} key={index} />
                            ))
                        }
                        
                        
                    </div>
                    <Button>Voir plus  👉🏾</Button>
                </>
            }

            {
                type == "experience" &&
                <div className="grid grid-cols-2 gap-9">
                    {
                            data.map((item, index)=>(
                                <RowCard data={item as RowCardType} key={index} />
                            ))
                    }
                </div>
            }

            {
                type !== "blog" && type !== "experience" &&
                <div className="space-y-9">
                    <div className="flex  justify-center md:justify-between ">
                        <nav className="tab flex items-center font-light gap-1.5 border bg-1/2 rounded-[17px] p-[5px] ">
                            <Badge active={true}>Web 🕸️</Badge>
                            <hr className="h-[7px] bg-violet-1 w-[1.5px] rounded-4xl border-0 opacity-70" />
                            <button className="px-[12px] py-[6px]">
                                Mobile 📱
                            </button>
                            <hr className="h-[7px] bg-violet-1 w-[1.5px] rounded-4xl border-0 opacity-70" />
                            <button className="px-[12px] py-[6px]">
                                Design 🎨
                            </button>
                            <hr className="h-[7px] bg-violet-1w-[1.5px] rounded-4xl border-0 opacity-70" />
                            <button className="px-[12px] py-[6px]">
                                Autre  🦦
                            </button>
                        </nav>
                        <div className="hidden md:block">
                            <Button>Voir plus  👉🏾</Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-9  ">
                        {
                            data.map((item, index)=>(
                                index<3 ? <Card key={index} data={item as RowCardType} type={type == "projet" ? true : false} /> :null
                            ))
                        }

                    </div>
                    <div className="grid grid-cols-2 gap-9" >
                        <RowCard data={data[3] as RowCardType} />
                        <RowCard data={data[4] as RowCardType} />
                    </div>
                </div>

            }

        </section>
    )
}

export default Listing