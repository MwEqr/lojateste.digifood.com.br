"use client"

import { useTheme } from "next-themes"
import { Search, ShoppingCart, User, Sun, Moon, Menu } from "lucide-react"
import { useState, useEffect } from "react"

export default function Header() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <header className="bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-slate-800 shadow-sm sticky top-0 z-50 transition-colors">
            <div className="container mx-auto px-4 lg:px-8">

                {/* Top Header - Logo, Search, Actions */}
                <div className="flex items-center justify-between py-4 lg:py-6 gap-4">

                    {/* Mobile Menu & Logo */}
                    <div className="flex items-center gap-3">
                        <button className="lg:hidden p-2 text-slate-700 dark:text-slate-300">
                            <Menu className="w-6 h-6" />
                        </button>
                        <a href="/" className="text-3xl lg:text-4xl font-black tracking-tighter text-blue-700 dark:text-blue-500">
                            Petz<span className="text-yellow-400">.</span>
                        </a>
                    </div>

                    {/* Search Bar - Center Desktop */}
                    <div className="hidden lg:flex flex-1 max-w-2xl mx-8 relative">
                        <input
                            type="text"
                            placeholder="O que o seu pet precisa hoje?"
                            className="w-full bg-slate-100 dark:bg-slate-900 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-slate-950 px-6 py-3 rounded-full outline-none transition-all pr-12 text-slate-700 dark:text-slate-200"
                        />
                        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600">
                            <Search className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Actions - Right */}
                    <div className="flex items-center gap-4 lg:gap-8">
                        {mounted && (
                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="flex items-center justify-center p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition shadow-sm border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
                                aria-label="Toggle Dark Mode"
                            >
                                {theme === "dark" ? (
                                    <Sun className="w-5 h-5 text-yellow-500" />
                                ) : (
                                    <Moon className="w-5 h-5 text-slate-600" />
                                )}
                            </button>
                        )}

                        <button className="hidden lg:flex items-center gap-2 hover:text-blue-700 dark:hover:text-blue-400 font-semibold text-slate-700 dark:text-slate-300 transition-colors">
                            <User className="w-6 h-6" />
                            <span>Entrar</span>
                        </button>

                        <button className="flex items-center gap-2 hover:text-blue-700 dark:hover:text-blue-400 font-bold text-slate-800 dark:text-slate-100 transition-colors relative">
                            <ShoppingCart className="w-7 h-7" />
                            <span className="absolute -top-1 -right-2 bg-yellow-400 text-blue-900 text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                0
                            </span>
                            <span className="hidden lg:inline-block ml-2">R$ 0,00</span>
                        </button>
                    </div>
                </div>

                {/* Mobile Search Bar - Shows only on small screens */}
                <div className="lg:hidden pb-4 relative">
                    <input
                        type="text"
                        placeholder="Buscar produtos..."
                        className="w-full bg-slate-100 dark:bg-slate-900 px-4 py-2 rounded-full outline-none text-sm"
                    />
                    <Search className="absolute right-4 top-1/2 -translate-y-[calc(50%+8px)] w-4 h-4 text-slate-400" />
                </div>

            </div>

            {/* Navigation Categories */}
            <nav className="hidden lg:block border-t border-gray-100 dark:border-slate-800/50 bg-white dark:bg-slate-950">
                <ul className="container mx-auto px-8 flex gap-8 items-center h-14 font-bold text-sm text-slate-600 dark:text-slate-400">
                    <li className="hover:text-blue-700 dark:hover:text-blue-400 cursor-pointer transition">Cachorros</li>
                    <li className="hover:text-blue-700 dark:hover:text-blue-400 cursor-pointer transition">Gatos</li>
                    <li className="hover:text-blue-700 dark:hover:text-blue-400 cursor-pointer transition">Pássaros</li>
                    <li className="hover:text-blue-700 dark:hover:text-blue-400 cursor-pointer transition">Peixes</li>
                    <li className="hover:text-blue-700 dark:hover:text-blue-400 cursor-pointer transition">Outros Pets</li>
                    <li className="hover:text-blue-700 dark:hover:text-blue-400 cursor-pointer transition">Casa e Jardim</li>
                    <li className="text-red-500 hover:text-red-600 cursor-pointer transition ml-auto flex items-center gap-1">
                        <span>🔥</span> Ofertas
                    </li>
                </ul>
            </nav>
        </header>
    )
}
