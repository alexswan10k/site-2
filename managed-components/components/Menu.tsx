import Link from "next/link";
import { FC } from "react";


const Menu: FC<{ items: { displayName: string, link: string }[] }> = ({ items }) => {
    return <ul>
        {items.map(item => <li key={item.displayName}><Link href={item.link}>{item.displayName}</Link></li>)}
    </ul>
}

export default Menu;