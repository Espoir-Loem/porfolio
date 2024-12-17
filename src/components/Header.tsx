import Badge from "./Badge";
import { IconButton } from "./Button";
import { Icon } from "./Icon";

const Header = () => {
    return (
        <header className="flex justify-between px-xpage py-7 sticky top-0 z-30">
            <Badge zoom={.8}>Qui suis-je 👇🏾 ?</Badge>
            <IconButton>
                <Icon name="menu"/>
            </IconButton>

        </header>
    )
}

export default Header;