import { css, cx } from '@emotion/css';
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Flex } from './Layout';
import { Container } from './Container';

export const Navbar = () => {
    const items = [
        { displayName: 'Home', link: '/' },
        { displayName: 'About Us', link: '/about-us' },
        { displayName: 'Projects', link: '/projects' },
        { displayName: 'Contact', link: '/contact' }
    ];

    return (
        <nav className={css`
      padding: 1rem 0;
      border-bottom: 1px solid #e2e8f0;
      background-color: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(10px);
      position: sticky;
      top: 0;
      z-index: 100;
    `}>
            <Container>
                <Flex justify="space-between">
                    <Link href="/">
                        <a className={css`display: flex; align-items: center; text-decoration: none;`}>
                            <Image
                                src="/lambda.png"
                                alt="Lambda Logo"
                                height={30}
                                width={30}
                            />
                            <span className={css`
                    font-family: 'Outfit', sans-serif;
                    font-weight: 700;
                    font-size: 1.25rem;
                    margin-left: 0.5rem;
                    color: #0f172a;
                `}>Lambdasafe</span>
                        </a>
                    </Link>

                    <Flex gap="1rem">
                        {items.map((item) => (
                            <NavLink key={item.displayName} href={item.link}>
                                {item.displayName}
                            </NavLink>
                        ))}
                    </Flex>
                </Flex>
            </Container>
        </nav>
    );
};

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Link href={href}>
                <a className={css`
                    font-family: 'Inter', sans-serif;
                    color: #334155;
                    font-weight: 500;
                    text-decoration: none;
                    padding: 0.5rem 1rem;
                    border-radius: 6px;
                    transition: all 0.2s;
                    &:hover {
                        color: #6366f1;
                        background-color: #f1f5f9;
                    }
                `}>
                    {children}
                </a>
            </Link>
        </motion.div>
    )
}
