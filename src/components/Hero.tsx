"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const titles = ["Full Stack Developer", "Backend Specialist", "React Enthusiast", "Problem Solver"];

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % titles.length;
            const fullText = titles[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed, titles]);

    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 overflow-hidden relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 max-w-4xl z-10"
            >
                <div className="relative w-32 h-32 mx-auto mb-8">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-cyan-500/30 rounded-full blur-xl"
                    />
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1, y: [0, -10, 0] }}
                        transition={{
                            scale: { duration: 0.5 },
                            opacity: { duration: 0.5 },
                            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                        }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl z-10"
                    >
                        <Image
                            src="/profile.jpg"
                            alt="Yeasir Ahnaf Asif"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </div>

                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-medium mb-4"
                >
                    Available for Hire
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                    Hi, I'm <span className="text-gradient">Yeasir Ahnaf Asif</span>
                    <br />
                    <span className="text-2xl md:text-4xl text-slate-400 mt-4 block min-h-[1.2em]">
                        I am a {text}
                        <span className="animate-pulse">|</span>
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    Full Stack Developer passionate about building scalable web applications and solving complex problems with efficient, user-friendly solutions.
                </p>

                <div className="flex items-center justify-center gap-4 mt-8">
                    <Link href="#projects">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-8 py-3 bg-white text-slate-900 rounded-full font-semibold hover:bg-cyan-50 transition-colors flex items-center gap-2"
                        >
                            View Work
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </Link>

                    <Link href="https://github.com/yeasirahnaf/cv/blob/main/Yeasir_Ahnaf_CV.pdf" target="_blank">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-slate-900 border border-slate-700 text-white rounded-full font-semibold hover:border-cyan-500/50 hover:text-cyan-400 transition-colors flex items-center gap-2"
                        >
                            Resume
                            <Download className="w-4 h-4" />
                        </motion.button>
                    </Link>
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
            </motion.div>
        </section>
    );
}
