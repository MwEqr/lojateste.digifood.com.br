"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';

export default function SplashScreen() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // A splash screen fica visível por 1.5s (segundo a regra de vinheta)
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-blue-700 dark:bg-slate-900 text-white"
                >
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-center"
                    >
                        <Loader2 className="w-16 h-16 animate-spin mb-6 text-yellow-300" />
                        <h1 className="text-5xl md:text-6xl font-black tracking-tight flex items-center">
                            Petz<span className="text-yellow-400">.</span>
                        </h1>
                        <p className="mt-4 text-blue-100 font-medium text-lg">Preparando a melhor experiência...</p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
