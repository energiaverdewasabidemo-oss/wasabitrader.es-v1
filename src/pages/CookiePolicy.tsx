import React from 'react';
import { ArrowLeft, Cookie, Settings, Eye, BarChart3, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-bold mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>
          
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Cookie className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-gray-900">Política de Cookies</h1>
              <p className="text-gray-600">Última actualización: Enero 2025</p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-black text-blue-900 mb-3 flex items-center">
              <Eye className="w-5 h-5 mr-2" />
              Información del Responsable
            </h2>
            <div className="text-blue-800 space-y-2">
              <p><strong>Razón Social:</strong> WASABI TRADER S.L.</p>
              <p><strong>CIF:</strong> B42709378</p>
              <p><strong>Sitio web:</strong> wasabitrader.com</p>
              <p><strong>Email:</strong> info@wasabitrader.com</p>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-4">¿Qué son las Cookies?</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo 
                cuando visita nuestro sitio web. Nos ayudan a mejorar su experiencia de navegación 
                y a proporcionar servicios más personalizados.
              </p>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-bold text-green-800 mb-2">¿Por qué utilizamos cookies?</h3>
                <ul className="list-disc pl-6 space-y-1 text-green-700 text-sm">
                  <li>Mejorar la funcionalidad del sitio web</li>
                  <li>Recordar sus preferencias</li>
                  <li>Analizar el uso del sitio para mejorarlo</li>
                  <li>Personalizar el contenido y las ofertas</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-4">Tipos de Cookies que Utilizamos</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Settings className="w-6 h-6 text-gray-600" />
                  <h3 className="text-xl font-bold text-gray-800">Cookies Técnicas (Necesarias)</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Esenciales para el funcionamiento básico del sitio web. No se pueden desactivar.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-300">
                        <th className="text-left py-2 font-bold">Cookie</th>
                        <th className="text-left py-2 font-bold">Propósito</th>
                        <th className="text-left py-2 font-bold">Duración</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      <tr className="border-b border-gray-200">
                        <td className="py-2">PHPSESSID</td>
                        <td className="py-2">Mantener la sesión del usuario</td>
                        <td className="py-2">Sesión</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2">cookie_consent</td>
                        <td className="py-2">Recordar preferencias de cookies</td>
                        <td className="py-2">1 año</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-800">Cookies Analíticas</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Nos ayudan a entender cómo los usuarios interactúan con nuestro sitio web.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-300">
                        <th className="text-left py-2 font-bold">Cookie</th>
                        <th className="text-left py-2 font-bold">Propósito</th>
                        <th className="text-left py-2 font-bold">Duración</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      <tr className="border-b border-gray-200">
                        <td className="py-2">_ga</td>
                        <td className="py-2">Google Analytics - Identificar usuarios únicos</td>
                        <td className="py-2">2 años</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2">_ga_*</td>
                        <td className="py-2">Google Analytics - Estado de la sesión</td>
                        <td className="py-2">2 años</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="w-6 h-6 text-purple-600" />
                  <h3 className="text-xl font-bold text-gray-800">Cookies de Personalización</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Permiten recordar sus preferencias para personalizar su experiencia.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-300">
                        <th className="text-left py-2 font-bold">Cookie</th>
                        <th className="text-left py-2 font-bold">Propósito</th>
                        <th className="text-left py-2 font-bold">Duración</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      <tr className="border-b border-gray-200">
                        <td className="py-2">user_preferences</td>
                        <td className="py-2">Recordar configuraciones del usuario</td>
                        <td className="py-2">6 meses</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2">form_data</td>
                        <td className="py-2">Guardar progreso del formulario</td>
                        <td className="py-2">1 día</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-4">Cookies de Terceros</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Algunos servicios de terceros pueden establecer cookies en nuestro sitio web:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2">Google Analytics</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    Análisis de tráfico web y comportamiento de usuarios
                  </p>
                  <a 
                    href="https://policies.google.com/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-xs"
                  >
                    Ver política de privacidad →
                  </a>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2">WhatsApp Business</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    Integración con servicio de mensajería
                  </p>
                  <a 
                    href="https://www.whatsapp.com/legal/privacy-policy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-xs"
                  >
                    Ver política de privacidad →
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-4">Gestión de Cookies</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-blue-800 mb-3">Configuración del Navegador</h3>
                <p className="text-blue-700 mb-4 text-sm">
                  Puede configurar su navegador para aceptar o rechazar cookies:
                </p>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <h4 className="font-bold text-blue-800 mb-1">Chrome</h4>
                    <p className="text-blue-700">Configuración → Privacidad → Cookies</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800 mb-1">Firefox</h4>
                    <p className="text-blue-700">Opciones → Privacidad → Cookies</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800 mb-1">Safari</h4>
                    <p className="text-blue-700">Preferencias → Privacidad → Cookies</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800 mb-1">Edge</h4>
                    <p className="text-blue-700">Configuración → Privacidad → Cookies</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-bold text-yellow-800 mb-2">⚠️ Importante</h3>
                <p className="text-yellow-700 text-sm">
                  Desactivar las cookies puede afectar la funcionalidad del sitio web y 
                  su experiencia de usuario. Algunas funciones pueden no estar disponibles.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-4">Consentimiento</h2>
            <div className="space-y-3">
              <p className="text-gray-700">
                Al continuar navegando por nuestro sitio web, acepta el uso de cookies 
                según se describe en esta política. Puede retirar su consentimiento 
                en cualquier momento modificando la configuración de su navegador.
              </p>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-700 text-sm">
                  <strong>Su privacidad es importante para nosotros.</strong> Solo utilizamos 
                  las cookies necesarias para mejorar su experiencia y proporcionar nuestros servicios.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-4">Actualizaciones</h2>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700">
                Esta política de cookies puede actualizarse periódicamente. Le recomendamos 
                revisarla regularmente para estar informado de cualquier cambio. La fecha 
                de la última actualización se indica al inicio de este documento.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-4">Contacto</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-blue-800 mb-4">
                Si tiene preguntas sobre nuestra política de cookies:
              </p>
              <div className="space-y-2 text-blue-700">
                <p><strong>Email:</strong> info@wasabitrader.com</p>
                <p><strong>Teléfono:</strong> +34 621 50 83 00</p>
              </div>
            </div>
          </section>

          <div className="text-center pt-8 border-t border-gray-200">
            <Link 
              to="/" 
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:from-blue-400 hover:to-blue-500 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al Comparador
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}