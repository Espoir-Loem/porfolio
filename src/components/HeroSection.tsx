import Image from "next/image"
import Badge from "./Badge"
import Button, { NetworkIcons } from "./Button";

const HeroSection = () => {
    const data: string[] = ["Développeur", "Web", "Mobile", "Designer", "UI", "UX", "DX"];
    return (
        <section className=" flex flex-col gap-9 items-center pb-20 relative path-line">

            <div style={{ zoom: 1.04 }} className="backdrop-blur-lg mb-3 p-5 size-80 rounded-full border bg-1/10">
                <figure className=" relative size-full overflow-hidden rounded-full  shadow-[0_0_30px]  shadow-violet-1/20">
                    <Image src="/espoir loém 2.jpg" alt="" fill objectFit="cover" className="hover:scale-110 transition-all" />
                </figure>
            </div>
            <Badge zoom={.75}>👋🏾 , Salut moi c’est</Badge>
            <h1 className="font-semibold text-5xl md:text-6xl">Espoir Loém</h1>
            <div className="flex gap-3 flex-wrap  justify-center px-3">
                {
                    data.map((item) => (
                        <Badge zoom={.8} key={item} active={item == "Développeur" || item == "Designer" ? true : false}>{item}</Badge>
                    ))
                }
            </div>
            <p className="md:px-20 text-[18px] md:text-[20px] text-center font-light">
                Chaque projet est une histoire 🌱, et je m’efforce d’en faire une œuvre mémorable 🎨. Je crée des solutions sur-mesure
                🛠️ qui allient esthétique et efficacité ⚡, avec un œil attentif aux détails ✨. Ensemble, transformons vos idées
                en expériences inoubliables 💫.
            </p>
            <div className="flex gap-9">
                <div className="hidden md:block">
                    <NetworkIcons  opacity={.75}/>
                </div>
                <Button>
                    En savoir plus 👉🏾
                </Button>
            </div>



        </section>
    )
}

export default HeroSection