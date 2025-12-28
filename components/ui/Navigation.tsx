import { css, cx } from '@emotion/css';
import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Flex } from './Layout';
import { Container } from './Container';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

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

                    {/* Desktop Menu */}
                    <div className={css`
                        @media (max-width: 768px) {
                            display: none;
                        }
                    `}>
                        <Flex gap="1rem">
                            {items.map((item) => (
                                <NavLink key={item.displayName} href={item.link}>
                                    {item.displayName}
                                </NavLink>
                            ))}
                        </Flex>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className={css`
                        display: none;
                        @media (max-width: 768px) {
                            display: block;
                        }
                    `} onClick={() => setIsOpen(!isOpen)}>
                        <div className={css`cursor: pointer; padding: 0.5rem;`}>
                            {isOpen ? <CloseIcon /> : <MenuIcon />}
                        </div>
                    </div>
                </Flex>
            </Container>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className={css`
                            overflow: hidden;
                            background-color: white;
                            border-bottom: 1px solid #e2e8f0;
                            @media (min-width: 769px) {
                                display: none;
                            }
                        `}
                    >
                        <Container>
                            <Flex direction="column" align="flex-start" gap="1rem" className={css`padding: 1rem 0;`}>
                                {items.map((item) => (
                                    <div key={item.displayName} onClick={() => setIsOpen(false)} className={css`width: 100%;`}>
                                        <Link href={item.link}>
                                            <a className={css`
                                                display: block;
                                                font-family: 'Inter', sans-serif;
                                                color: #334155;
                                                font-weight: 500;
                                                text-decoration: none;
                                                padding: 0.75rem 1rem;
                                                border-radius: 6px;
                                                width: 100%;
                                                &:hover {
                                                    color: #6366f1;
                                                    background-color: #f1f5f9;
                                                }
                                            `}>
                                                {item.displayName}
                                            </a>
                                        </Link>
                                    </div>
                                ))}
                            </Flex>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
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

const MenuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
)

const CloseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
)
