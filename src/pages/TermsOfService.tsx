import React from 'react';
import { ArrowLeft, FileText, AlertTriangle, CheckCircle, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
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
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-gray-900">Términos y Condiciones</h1>
              <p className="text-gray-600">Última actualización: Enero 2025</p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-black text-blue-900 mb-3 flex items-center">
              <Scale className="w-5 h-5 mr-2" />
              Información de la Empresa
            </h2>
            <div className="text-blue-800 space-y-2">
              <p><strong>Razón Social:</strong> WASABI TRADER S.L.</p>
              <p><strong>CIF:</strong> B42709378</p>
              <p><strong>Dirección:</strong> Calle Andarella 2, 46950 Valencia</p>
              <p><strong>Teléfono:</strong> +34 621 50 83 00</p>
              <p><strong>Email:</strong> info@wasabitrader.com</p>
              <p><strong>Sitio web:</strong> wasabitrader.com</p>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-4">1. Objeto y Ámbito de Aplicación</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Los presentes términos y condiciones regulan el uso del servicio de comparación 
                de tarifas energéticas ofrecido por WASABI TRADER S.L. a través de su plataforma 
                web wasabitrader.com.
              </p>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-yellow-800 mb-2">Importante</h3>
                    <p className="text-yellow-700 text-sm">
                      El uso de nuestros servicios implica la aceptación íntegra de estos 
                      términos y condiciones.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-4">2. Servicios Ofrecidos</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800">Servicios Principales</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Comparación de Tarifas</h4>
                  <p className="text-sm text-gray-700">
                    Análisis personalizado de tarifas de luz y gas utilizando inteligencia artificial
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Asesoramiento Experto</h4>
                  <p className="text-sm text-gray-700">
                    Consultoría especializada con más de 100 asesores expertos
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Gestión de Cambios</h4>
                  <p className="text-sm text-gray-700">
                    Tramitación completa del cambio de compañía energética
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Seguimiento Post-Cambio</h4>
                  <p className="text-sm text-gray-700">
                    Atención continuada para garantizar la satisfacción del cliente
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-4">3. Condiciones de Uso</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800">Obligaciones del Usuario</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Proporcionar información veraz y actualizada</li>
                <li>Utilizar el servicio de forma responsable y legal</li>
                <li>No interferir con el funcionamiento de la plataforma</li>
                <li>Respetar los derechos de propiedad intelectual</li>
                <li>Mantener la confidencialidad de sus credenciales de acceso</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800">Uso Prohibido</h3>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <ul className="list-disc pl-6 space-y-1 text-red-700 text-sm">
                  <li>Uso comercial no autorizado de la plataforma</li>
                  <li>Introducción de virus o código malicioso</li>
                  <li>Suplantación de identidad</li>
                  <li>Spam o comunicaciones no solicitadas</li>
                  <li>Violación de derechos de terceros</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-4">4. Garantía de Ahorro</h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-bold text-green-800">Compromiso de Ahorro</h3>
              </div>
              <div className="space-y-3 text-green-700">
                <p>
                  <strong>WASABI TRADER S.L.</strong> garantiza que encontrará una tarifa energética 
                  más económica que su tarifa actual, o le devolveremos el tiempo invertido en el proceso.
                </p>
                <div className="text-sm">
                  <p><strong>Condiciones de la garantía:</strong></p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Aplicable a usuarios residenciales</li>
                    <li>Basada en consumos históricos reales</li>
                    <li>Válida por 12 meses desde la contratación</li>
                    <li>Sujeta a condiciones del mercado energético</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-4">5. Precios y Facturación</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-bold text-blue-800 mb-2">Servicio Gratuito</h3>
                <p className="text-blue-700 text-sm">
                  El servicio de comparación y asesoramiento es completamente gratuito para el usuario. 
                  Nuestros ingresos provienen de comisiones de las compañías energéticas.
                </p>
              </div>
              
              <p className="text-gray-700">
                No existen costes ocultos ni comisiones para el usuario. El cambio de compañía 
                energética no conlleva ningún coste adicional.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-4">6. Responsabilidades y Limitaciones</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800">Limitación de Responsabilidad</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
                  <li>
                    WASABI TRADER S.L. no se responsabiliza de interrupciones del servicio 
                    por causas ajenas a su control
                  </li>
                  <li>
                    Las comparativas se basan en información proporcionada por el usuario 
                    y datos públicos de las compañías
                  </li>
                  <li>
                    Los precios pueden variar según las condiciones del mercado energético
                  </li>
                  <li>
                    No garantizamos la disponibilidad continua de todas las ofertas mostradas
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-4">7. Propiedad Intelectual</h2>
            <div className="space-y-3">
              <p className="text-gray-700">
                Todos los contenidos de la plataforma (textos, imágenes, logotipos, software, etc.) 
                son propiedad de WASABI TRADER S.L. o de sus licenciantes y están protegidos por 
                las leyes de propiedad intelectual.
              </p>
              <p className="text-gray-700">
                Queda prohibida la reproducción, distribución o modificación de cualquier contenido 
                sin autorización expresa.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-4">8. Modificaciones</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800">
                WASABI TRADER S.L. se reserva el derecho a modificar estos términos y condiciones 
                en cualquier momento. Los cambios serán notificados a través de la plataforma 
                con al menos 30 días de antelación.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-4">9. Legislación Aplicable</h2>
            <div className="space-y-3">
              <p className="text-gray-700">
                Estos términos y condiciones se rigen por la legislación española. Para cualquier 
                controversia, las partes se someten a los juzgados y tribunales de Albacete.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-4">10. Contacto</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-blue-800 mb-4">
                Para cualquier consulta sobre estos términos y condiciones:
              </p>
              <div className="space-y-2 text-blue-700">
                <p><strong>Email:</strong> info@wasabitrader.com</p>
                <p><strong>Teléfono:</strong> +34 621 50 83 00</p>
                <p><strong>Horario:</strong> Lunes a Viernes de 9:00 a 18:00</p>
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