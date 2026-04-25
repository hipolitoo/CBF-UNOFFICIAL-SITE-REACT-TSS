import React from 'react'
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="min-h-screen bg-gradient-to-br from-black-200 to-black-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-cbf-yellow mb-4">CBF</h3>
            <p className="text-white-200 text-sm">
              Confederação Brasileira de Futebol
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-cbf-yellow mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-cbf-yellow transition-colors">Sobre</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cbf-yellow transition-colors">Regulamentos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cbf-yellow transition-colors">Notícias</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cbf-yellow transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-cbf-yellow mb-4">Contato</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-cbf-yellow" />
                <span>info@cbf.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-cbf-yellow" />
                <span>+55 (21) 2131-9700</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-cbf-yellow" />
                <span>Rio de Janeiro, Brasil</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold text-cbf-yellow mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <button className="w-10 h-10 rounded-full bg-cbf-blue hover:bg-cbf-yellow transition-colors flex items-center justify-center">
                <Facebook size={18} className="text-white" />
              </button>
              <button className="w-10 h-10 rounded-full bg-cbf-blue hover:bg-cbf-yellow transition-colors flex items-center justify-center">
                <Instagram size={18} className="text-white" />
              </button>
              <button className="w-10 h-10 rounded-full bg-cbf-blue hover:bg-cbf-yellow transition-colors flex items-center justify-center">
                <Twitter size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cbf-yellow/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 Confederação Brasileira de Futebol. Todos os direitos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-cbf-yellow transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-cbf-yellow transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
