"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { MouseEvent } from "react";

const projects = [
    {
        title: "Event Ticketing SaaS Backend",
        description: "A robust backend system for an event ticketing platform. Handles user management, ticket booking, and event scheduling functionalities with focus on scalability.",
        tags: ["TypeScript", "Node.js", "Express", "Database"],
        github: "https://github.com/yeasirahnaf/Event-Ticketing-SaaS-Backend",
        demo: null, // Add demo link if exists
        image: null // Placeholder handled in UI
    },
    {
        title: "University Management System",
        description: "Backend service for a University Management System (Mid Project). Features student enrollment, course management, and handling academic records.",
        tags: ["TypeScript", "Backend", "API"],
        github: "https://github.com/yeasirahnaf/UMS-Mid-Project-Backend",
        demo: null,
        image: null
    },
    {
        title: "Artemis Program",
        description: "A C++ project demonstrating algorithmic problem solving and system programming concepts styled as a space program simulation or utility.",
        tags: ["C++", "Algorithms", "System"],
        github: "https://github.com/yeasirahnaf/Artemis-program",
        demo: null,
        image: null
    },
    {
        title: "Pazzle Backend",
        description: "Backend infrastructure for a puzzle or game application, ensuring secure data handling and game logic verification.",
        tags: ["TypeScript", "Game Dev", "Backend"],
        github: "https://github.com/yeasirahnaf/Pazzle-Backend",
        demo: null,
        image: null
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-4 bg-slate-950/30">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-cyan-400 uppercase rounded-full bg-cyan-900/20 border border-cyan-800">
                        Selected Work
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Featured Projects</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A diverse collection of backend systems, applications, and experiments.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <Card key={project.title} project={project} index={index} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link href="https://github.com/yeasirahnaf" target="_blank">
                        <button className="px-8 py-3 rounded-full border border-slate-700 text-slate-300 hover:text-white hover:border-white transition-colors">
                            View All Repositories
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

function Card({ project, index }: { project: any, index: number }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="group relative rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 overflow-visible transition-all hover:bg-slate-900/70 perspective-1000"
        >
            <div
                style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
                className="p-8 h-full flex flex-col"
            >
                <div
                    style={{ transform: "translateZ(50px)" }}
                    className="flex justify-between items-start mb-6"
                >
                    <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
                        <ArrowUpRight size={24} />
                    </div>
                    <div className="flex gap-3">
                        <Link href={project.github} target="_blank" className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors">
                            <Github size={20} />
                        </Link>
                        {project.demo && (
                            <Link href={project.demo} target="_blank" className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors">
                                <ExternalLink size={20} />
                            </Link>
                        )}
                    </div>
                </div>

                <h3
                    style={{ transform: "translateZ(50px)" }}
                    className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors"
                >
                    {project.title}
                </h3>

                <p
                    style={{ transform: "translateZ(25px)" }}
                    className="text-slate-400 mb-6 flex-grow leading-relaxed"
                >
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag: any) => (
                        <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
