import Badge from "./Badge";
import { IconButton } from "./Button";
import { Icon } from "./Icon";

const Header = () => {
    return (
        <header className="px-2 lg:px-xpage  w-full flex justify-between   md:py-7 fixed md:sticky top-5 md:top-0 z-30">
            <Badge zoom={.8}>Qui suis-je 👇🏾 ?</Badge>
            <IconButton>
                <Icon name="menu"/>
            </IconButton>

        </header>
    )
}

export default Header;