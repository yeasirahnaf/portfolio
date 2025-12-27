"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Background() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 -z-50 overflow-hidden bg-slate-950">
            {/* Aurora Blob 1 */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px] mix-blend-screen"
            />

            {/* Aurora Blob 2 */}
            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.5, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
                className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen"
            />

            {/* Aurora Blob 3 */}
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, 50, 0],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5,
                }}
                className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[80px] mix-blend-screen"
            />
        </div>
    );
}
