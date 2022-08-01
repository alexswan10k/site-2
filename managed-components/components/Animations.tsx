import { motion } from "framer-motion";
import { FC, PropsWithChildren } from "react";


export const FadeIn: FC<PropsWithChildren<{duration?: number, delay?: number}>> = ({duration, delay, children}) =>
    <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: duration ?? 0.5, delay: delay ?? 0 }}
        >{children}</motion.div>

export const FadeFromLeft: FC<PropsWithChildren<{duration?: number, delay?: number}>> = ({duration, delay, children}) =>
    <motion.div
        initial={{ opacity: 0, left: -300 }}
        animate={{ opacity: 1 }}
        transition={{ duration: duration ?? 0.5, delay: delay ?? 0 }}
        >{children}</motion.div>