"use client";

import { motion } from "framer-motion";
import { Mail, Send, MapPin } from "lucide-react";

import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = `Portfolio Inquiry from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        window.location.href = `mailto:yeasir.ahnaf.1996@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };
    return (
        <section id="contact" className="py-24 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-3xl p-8 md:p-12 overflow-hidden relative"
                >
                    {/* Decorative gradients */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Let's work together</h2>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                Have a project in mind or want to discuss modern web technologies?
                                I'm always open to new opportunities and collaborations.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-slate-800/50 rounded-full text-cyan-400">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm text-slate-500 font-medium uppercase tracking-wider">Email</h4>
                                        <a href="mailto:yeasir.ahnaf.1996@gmail.com" className="text-white hover:text-cyan-400 transition-colors">
                                            yeasir.ahnaf.1996@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-slate-800/50 rounded-full text-purple-400">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm text-slate-500 font-medium uppercase tracking-wider">Location</h4>
                                        <p className="text-white">Dhaka, Bangladesh</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                                />
                            </div>
                            <div>
                                <textarea
                                    rows={4}
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2 group"
                            >
                                Send Message
                                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
