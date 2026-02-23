import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Shield, Award, Users, Star, Brain, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Elementos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-600/10 rounded-full animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div className="animate-fade-in-up">
            <div className="flex items-center space-x-3 lg:space-x-4 mb-6">
              <img 
                src="/wasabi azul 2.png" 
                alt="Wasabi Trader Logo" 
                className="h-12 lg:h-16 w-auto object-contain"
                style={{ maxWidth: '180px', height: 'auto' }}
              />
              <div>
                <h3 className="text-xl lg:text-2xl font-black">Wasabi Trader</h3>
                <p className="text-blue-400 font-bold text-sm lg:text-base">Comparador Inteligente</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 lg:mb-8 leading-relaxed text-sm lg:text-base">
              <span className="text-blue-400 font-black text-base lg:text-lg">+12 años ayudando</span> a familias y empresas. 
              <span className="text-blue-400 font-black text-base lg:text-lg"> +100 expertos</span> con IA avanzada.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 lg:space-x-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-3 lg:p-4 shadow-blue-glow hover-lift-intense">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div>
                  <a href="tel:+34621508300" className="font-black text-lg lg:text-xl hover:text-blue-300 transition-colors">621 50 83 00</a>
                  <p className="text-blue-200 font-bold text-xs lg:text-sm">Llamada gratuita</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 lg:space-x-4 text-gray-300">
                <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-blue-400" />
                <span className="font-bold text-sm lg:text-base">info@wasabitrader.com</span>
              </div>
              
              <div className="flex items-center space-x-3 lg:space-x-4 text-gray-300">
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-blue-400" />
                <span className="font-bold text-sm lg:text-base">Calle Andarella 2, 46950 Valencia</span>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h4 className="text-lg lg:text-xl font-black mb-4 lg:mb-6 text-blue-400">Servicios</h4>
            <ul className="space-y-3 lg:space-y-4 text-gray-300">
              <li>
                <Link to="/#formulario" className="hover:text-blue-400 transition-all duration-300 font-bold flex items-center group text-sm lg:text-base">
                  <Brain className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3 group-hover:animate-pulse" />
                  Comparar Luz
                </Link>
              </li>
              <li>
                <Link to="/#formulario" className="hover:text-blue-400 transition-all duration-300 font-bold flex items-center group text-sm lg:text-base">
                  <Brain className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3 group-hover:animate-pulse" />
                  Comparar Gas
                </Link>
              </li>
              <li>
                <Link to="/#formulario" className="hover:text-blue-400 transition-all duration-300 font-bold flex items-center group text-sm lg:text-base">
                  <Users className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3 group-hover:animate-pulse" />
                  Empresas
                </Link>
              </li>
              <li>
                <Link to="/asesoramiento" className="hover:text-blue-400 transition-all duration-300 font-bold flex items-center group text-sm lg:text-base">
                  <Award className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3 group-hover:animate-pulse" />
                  Asesoramiento
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <h4 className="text-lg lg:text-xl font-black mb-4 lg:mb-6 text-blue-400">Empresa</h4>
            <ul className="space-y-3 lg:space-y-4 text-gray-300 mb-6 lg:mb-8">
              <li><Link to="/sobre-nosotros" className="hover:text-blue-400 transition-colors font-bold text-sm lg:text-base">Sobre Nosotros</Link></li>
              <li><Link to="/nuestro-equipo" className="hover:text-blue-400 transition-colors font-bold text-sm lg:text-base">Nuestro Equipo</Link></li>
              <li><Link to="/contacto" className="hover:text-blue-400 transition-colors font-bold text-sm lg:text-base">Contacto</Link></li>
            </ul>
            
            <div className="bg-gradient-to-r from-blue-600/20 to-blue-700/20 rounded-2xl p-4 lg:p-6 border border-blue-500/30">
              <h5 className="font-black text-blue-400 mb-3 lg:mb-4 text-sm lg:text-base">🏆 Garantía de Calidad</h5>
              <div className="flex items-center space-x-2 lg:space-x-3 mb-2 lg:mb-3">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 lg:w-4 lg:h-4 text-yellow-400 fill-current animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                  ))}
                </div>
                <span className="text-white font-black text-sm lg:text-base">4.9/5</span>
              </div>
              <p className="text-blue-200 text-xs lg:text-sm font-bold">+10,000 clientes satisfechos</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 lg:mt-12 pt-6 lg:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 lg:mb-6">
            <p className="text-gray-400 mb-4 md:mb-0 text-sm lg:text-base">
              &copy; 2025 Wasabi Trader. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-4 lg:space-x-6 text-gray-400">
              <Link to="/privacidad" className="hover:text-blue-400 transition-colors font-bold text-sm lg:text-base">Privacidad</Link>
              <Link to="/terminos" className="hover:text-blue-400 transition-colors font-bold text-sm lg:text-base">Términos</Link>
              <Link to="/cookies" className="hover:text-blue-400 transition-colors font-bold text-sm lg:text-base">Cookies</Link>
            </div>
          </div>
          
          <div className="text-center">
            <a href="#formulario" className="inline-flex items-center btn-primary text-white px-6 lg:px-8 py-3 lg:py-4 rounded-2xl font-black text-base lg:text-lg hover-lift-intense shine-effect shadow-blue-intense">
              <Shield className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3" />
              AHORRO GARANTIZADO
              <Clock className="w-5 h-5 lg:w-6 lg:h-6 ml-2 lg:ml-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}