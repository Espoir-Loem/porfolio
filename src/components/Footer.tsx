import Button, { NetworkIcons } from "./Button";
import Headling from "./Headling";

const Footer = () => {
    return (
        <footer className="px-xpage  flex flex-col items-center gap-14 mt-20">
            <Headling/>
            <Button>
                Contacte-moi !
            </Button>
            <div className="mt-24 w-full flex justify-between items-center py-10 border-t border-green-100/20">
                <NetworkIcons/>
                <p className="-tracking-tighter opacity-70 font-light">Développé par Espoir Loém ©2024, Tout droit reservé</p>
            </div>
        </footer>
    );
}

export default Footer;