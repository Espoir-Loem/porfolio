import Button, { NetworkIcons } from "./Button";
import Headling from "./Headling";

const Footer = () => {
    return (
        <footer className=" flex flex-col items-center gap-14 mt-20">
            <Headling/>
            <Button>
                Contacte-moi !
            </Button>
            <div className="mt-16  md:mt-24 w-full flex justify-between items-center py-10 border-t border-green-100/20">
                <div className="hidden md:block">
                    <NetworkIcons/>
                </div>
                <p className="-tracking-tighter opacity-70 font-light text-center md:text-start">Développé par Espoir Loém ©2024, Tout droit reservé</p>
            </div>
        </footer>
    );
}

export default Footer;