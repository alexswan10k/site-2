import Link from "next/link";
import { FC } from "react";
import { css } from '@emotion/css'
import { motion } from "framer-motion";

const Menu: FC<{ items: { displayName: string, link: string }[] }> = ({ items }) => {
    return <div className={css`
        display: flex;
        align-items: center;
    `}>
                    <Link href="./">
                        <img 
                            src="lambda.png" 
                            alt="Lambda Logo" 
                            style={{
                                height: "30px"
                            }}
                        />
                    </Link>
        {items.map((item, idx) => <div key={item.displayName} className={css`
                padding: 1rem
            `}>
            <motion.div
                initial={{ 
                    opacity: 0.6, 
                    // scale: 0.6 
                }}
                // animate= {{
                //     opacity: 1,
                //     scale: 1
                // }}
                // transition= {{
                //     duration: 1,
                //     delay: idx * 0.3
                // }}
                whileHover={{
                    scale: 1.2,
                    opacity: 1,
                    transition: { duration: 1 },
                }}>
                <Link href={item.link}>{item.displayName}</Link>
                
            </motion.div>

        </div>
        )}
    </div>
}

export default Menu;