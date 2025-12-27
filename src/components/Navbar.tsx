"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6"
        >
            <div className="glass rounded-full px-6 py-3 flex items-center gap-8">
                <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 hover:opacity-80 transition-opacity">
                    YA
                </Link>

                <div className="flex items-center gap-6 text-sm font-medium text-slate-300">
                    <Link href="#about" className="hover:text-cyan-400 transition-colors">About</Link>
                    <Link href="#skills" className="hover:text-cyan-400 transition-colors">Skills</Link>
                    <Link href="#projects" className="hover:text-cyan-400 transition-colors">Projects</Link>
                    <Link href="#contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
                </div>

                <div className="flex items-center gap-4 border-l border-white/10 pl-6">
                    <Link href="https://github.com/yeasirahnaf" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                        <Github size={20} />
                    </Link>
                    <Link href="https://linkedin.com/in/yeasir-ahnaf-asif" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                        <Linkedin size={20} />
                    </Link>
                    <a href="mailto:yeasir.ahnaf.1996@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </motion.nav>
    );
}
