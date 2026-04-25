import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/CBF_PNG.png'

const Navigation: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    const navLinks = [
        { name: 'Início', path: '/' },
        { name: 'Histórias', path: '/stories' },
        { name: 'Ídolos', path: '/legends' },
        { name: 'Conquistas', path: '/achievements' },
        { name: 'Galeria', path: '/gallery' },
    ]

    return (
        <nav className="fixed top-0 w-full z-50 glass-effect border-b border-cbf-yellow/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="relative bg-gradient-to-br rounded-xl flex items-center justify-center">
                            <img
                                src={logo}
                                alt="CBF Logo"
                                className="h-12"
                            />
                        </div>
                        <div>
                            <span className="text-2xl font-extrabold gradient-text">CBF</span>
                            <p className="text-xs text-cbf-yellow/50 leading-none">Confederação Brasileira de Futebol</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="text-white hover:text-cbf-yellow transition-colors duration-300 font-semibold relative group"
                            >
                                {link.name}
                                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cbf-yellow to-cbf-yellow_bright group-hover:w-full transition-all duration-300 rounded-full"></div>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden bg-gradient-to-r from-cbf-yellow to-cbf-yellow_bright text-cbf-dark p-2 rounded-lg hover:shadow-lg hover:shadow-cbf-yellow/60 transition-all"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden pb-4 animate-slideDown bg-gradient-to-b from-transparent to-cbf-dark/50 rounded-lg p-4 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="block py-3 px-4 text-white hover:text-cbf-yellow hover:bg-cbf-yellow/10 transition-all duration-300 font-semibold rounded-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navigation
