"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Terminal, Cpu } from "lucide-react";

const skills = [
    {
        category: "Languages",
        icon: <Terminal className="w-6 h-6 text-purple-400" />,
        items: ["JavaScript", "TypeScript", "Java", "C++"]
    },
    {
        category: "Frontend",
        icon: <Layout className="w-6 h-6 text-cyan-400" />,
        items: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
        category: "Backend",
        icon: <Server className="w-6 h-6 text-blue-400" />,
        items: ["Node.js", "NestJS", "Express"]
    },
    {
        category: "Tools & Others",
        icon: <Cpu className="w-6 h-6 text-emerald-400" />,
        items: ["Git", "GitHub", "VS Code", "Postman"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-4 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Technical Arsenal</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Tools and technologies I use to craft exceptional digital experiences.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="glass-card p-6 rounded-2xl hover:bg-slate-800/50 transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                                    {skill.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-white">{skill.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1 text-sm rounded-full bg-slate-900/50 border border-slate-800 text-slate-300"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
