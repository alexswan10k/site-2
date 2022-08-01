import Link from "next/link";
import { FC } from "react";
import { css } from '@emotion/css'

const Menu: FC<{ items: { displayName: string, link: string }[] }> = ({ items }) => {
    return <div className={css`
        display: flex;
    `}>
        {items.map(item => <div key={item.displayName} className={css`
                padding: 1rem
            `}>
                <Link href={item.link}>{item.displayName}</Link>
            </div>
            )}
    </div>
}

export default Menu;