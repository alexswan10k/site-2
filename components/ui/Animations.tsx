import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

export const FadeIn: FC<{ duration?: number, delay?: number, children: ReactNode }> = ({ duration, delay, children }) =>
    <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: duration ?? 0.5, delay: delay ?? 0 }}
    >{children}</motion.div>

export const FadeFromLeft: FC<{ duration?: number, delay?: number, children: ReactNode }> = ({ duration, delay, children }) =>
    <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: duration ?? 0.5, delay: delay ?? 0 }}
    >{children}</motion.div>
