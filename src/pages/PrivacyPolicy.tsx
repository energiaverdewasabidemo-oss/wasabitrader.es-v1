import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
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
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-gray-900">Política de Privacidad</h1>
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
              <p><strong>Dirección:</strong> Calle Andarella 2, 46950 Valencia</p>
              <p><strong>Teléfono:</strong> +34 621 50 83 00</p>
              <p><strong>Email:</strong> info@wasabitrader.com</p>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-4">1. Información que Recopilamos</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800">Datos Personales</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Nombre y apellidos</li>
                <li>Fecha de nacimiento</li>
                <li>Género</li>
                <li>Teléfono y email</li>
                <li>Dirección completa (calle, código postal, municipio, provincia)</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800">Datos de Consumo Energético</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Tipo de suministro (luz, gas o ambos)</li>
                <li>Potencia contratada</li>
                <li>Horarios de consumo</li>
                <li>Número de residentes</li>
                <li>Facturas de luz y gas (si las proporciona)</li>
                <li>Historial de cambios de compañía</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800">Datos Técnicos</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Dirección IP</li>
                <li>Información del navegador</li>
                <li>Fecha y hora de acceso</li>
                <li>Páginas visitadas</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-4">2. Finalidades del Tratamiento</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Finalidad Principal</h3>
                <p className="text-gray-700">
                  Realizar comparativas personalizadas de tarifas de luz y gas, y proporcionar 
                  asesoramiento energético especializado para optimizar sus costes.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Finalidades Adicionales</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Gestión de la relación comercial</li>
                  <li>Seguimiento del proceso de cambio de tarifa</li>
                  <li>Atención al cliente y soporte técnico</li>
                  <li>Mejora de nuestros servicios</li>
                  <li>Cumplimiento de obligaciones legales</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-4">3. Base Legal del Tratamiento</h2>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>Consentimiento:</strong> Para el tratamiento de sus datos personales y 
                  comunicaciones comerciales (si acepta recibirlas).
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>Interés legítimo:</strong> Para la prestación del servicio de comparación 
                  y asesoramiento energético.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>Cumplimiento legal:</strong> Para cumplir con las obligaciones normativas 
                  del sector energético.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-4">4. Conservación de Datos</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-gray-700">
                Sus datos personales se conservarán durante el tiempo necesario para cumplir 
                con las finalidades para las que fueron recogidos y, en todo caso, durante los 
                plazos establecidos por la legislación aplicable (mínimo 6 años para datos 
                fiscales y contables).
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-4">5. Sus Derechos</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-gray-800 mb-2">Derechos de Acceso</h3>
                <p className="text-sm text-gray-700">Conocer qué datos tenemos sobre usted</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-gray-800 mb-2">Derecho de Rectificación</h3>
                <p className="text-sm text-gray-700">Corregir datos inexactos o incompletos</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-gray-800 mb-2">Derecho de Supresión</h3>
                <p className="text-sm text-gray-700">Solicitar la eliminación de sus datos</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-gray-800 mb-2">Derecho de Oposición</h3>
                <p className="text-sm text-gray-700">Oponerse al tratamiento de sus datos</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-4">6. Seguridad de los Datos</h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Lock className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-bold text-green-800">Medidas de Seguridad</h3>
              </div>
              <ul className="space-y-2 text-green-700">
                <li>• Cifrado SSL/TLS en todas las comunicaciones</li>
                <li>• Acceso restringido a personal autorizado</li>
                <li>• Copias de seguridad regulares</li>
                <li>• Auditorías de seguridad periódicas</li>
                <li>• Cumplimiento del RGPD y LOPDGDD</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-4">7. Contacto</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-blue-800 mb-4">
                Para ejercer sus derechos o resolver cualquier duda sobre el tratamiento 
                de sus datos personales, puede contactarnos:
              </p>
              <div className="space-y-2 text-blue-700">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@wasabitrader.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+34 621 50 83 00</span>
                </div>
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