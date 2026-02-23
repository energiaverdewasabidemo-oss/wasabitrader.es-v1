import React, { useState, useEffect } from 'react';
import { Check, Zap, Shield, Award, TrendingDown, Phone, Star, Users, Clock, Brain, ArrowRight, Sparkles, Gift, AlertCircle, Timer } from 'lucide-react';

export default function Asesoramiento() {
  const [telefono, setTelefono] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [aceptaInformacion, setAceptaInformacion] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const [showUrgency, setShowUrgency] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    const urgencyTimer = setTimeout(() => {
      setShowUrgency(true);
    }, 3000);

    return () => {
      clearInterval(timer);
      clearTimeout(urgencyTimer);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!telefono) {
      alert('Por favor, introduce tu teléfono');
      return;
    }

    if (!aceptaTerminos) {
      alert('Debes aceptar los términos y condiciones');
      return;
    }

    setIsLoading(true);

    try {
      const ipResponse = await fetch('https://api.ipify.org?format=json');
      const ipData = await ipResponse.json();
      const userIP = ipData.ip;

      const whatsappNumber = '34621508300';
      const mensaje = `¡NUEVA SOLICITUD DE ASESORAMIENTO! 🎯

📞 Teléfono: ${telefono}

✅ Términos aceptados
${aceptaInformacion ? '✅ Quiere recibir información' : ''}

📍 IP: ${userIP}

Origen: Landing Asesoramiento`;

      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`;

      window.location.href = whatsappURL;
    } catch (error) {
      console.error('Error al obtener la IP:', error);

      const whatsappNumber = '34621508300';
      const mensaje = `¡NUEVA SOLICITUD DE ASESORAMIENTO! 🎯

📞 Teléfono: ${telefono}

✅ Términos aceptados
${aceptaInformacion ? '✅ Quiere recibir información' : ''}

📍 IP: No disponible

Origen: Landing Asesoramiento`;

      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`;

      window.location.href = whatsappURL;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {showUrgency && (
        <div className="fixed top-0 left-0 right-0 bg-blue-600 text-white py-2.5 px-4 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-center space-x-3 text-sm">
            <Clock className="w-4 h-4" />
            <span className="font-semibold">Oferta especial expira en:</span>
            <span className="font-bold">{formatTime(timeLeft)}</span>
          </div>
        </div>
      )}

      <div className={`max-w-6xl mx-auto px-4 py-12 sm:py-16 lg:py-20 ${showUrgency ? 'mt-12' : ''}`}>
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-100">
            <Award className="w-4 h-4 mr-2" />
            Asesoramiento Profesional Gratuito
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Ahorra hasta <span className="text-blue-600">300€ al año</span>
            <br />en tus facturas de luz y gas
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Nuestros expertos te ayudan a encontrar la tarifa que mejor se adapta a tus necesidades. Sin compromiso, sin costes ocultos.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>Proceso 100% online</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>Sin compromiso</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>Respuesta inmediata</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10 border border-gray-200">
            <div className="mb-8">
              <div className="inline-flex items-center bg-green-50 text-green-700 px-3 py-1.5 rounded-lg text-sm font-semibold mb-4 border border-green-200">
                <Gift className="w-4 h-4 mr-2" />
                Bono de 50€ incluido
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Te llamamos gratis
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Déjanos tu teléfono y uno de nuestros asesores energéticos te contactará para ofrecerte una comparativa personalizada.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Número de teléfono
                </label>
                <input
                  type="tel"
                  placeholder="Ej: 612 345 678"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all text-base"
                  required
                />
              </div>

              <div className="space-y-3">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={aceptaTerminos}
                    onChange={(e) => setAceptaTerminos(e.target.checked)}
                    className="mt-0.5 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    required
                  />
                  <span className="text-sm text-gray-600">
                    He leído y acepto los{' '}
                    <a
                      href="/terminos"
                      target="_blank"
                      className="text-blue-600 hover:text-blue-700 underline"
                    >
                      términos y condiciones
                    </a>
                  </span>
                </label>

                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={aceptaInformacion}
                    onChange={(e) => setAceptaInformacion(e.target.checked)}
                    className="mt-0.5 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-600">
                    Quiero recibir información sobre ofertas y servicios
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 rounded-lg font-semibold text-base text-white transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2 ${
                  isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {isLoading ? (
                  <span>Procesando...</span>
                ) : (
                  <>
                    <Phone className="w-5 h-5" />
                    <span>Solicitar asesoramiento gratis</span>
                  </>
                )}
              </button>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-3">
                  <Shield className="w-4 h-4" />
                  <span>Tus datos están protegidos</span>
                </div>
                <p className="text-xs text-center text-gray-500">
                  Recibirás una confirmación por WhatsApp en los próximos minutos
                </p>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <TrendingDown className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Ahorro medio anual</h3>
              </div>
              <div className="text-5xl font-bold mb-2">300€</div>
              <p className="text-blue-100">
                Nuestros clientes ahorran de media 300€ al año en sus facturas de luz y gas
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">+12 años de experiencia</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Más de 10,000 familias ya confían en nosotros para gestionar sus contratos de energía
              </p>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-sm font-semibold text-gray-700">4.9/5</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                ¿Por qué elegirnos?
              </h3>

              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Análisis inteligente</h4>
                    <p className="text-sm text-gray-600">Comparamos todas las tarifas del mercado para encontrar la mejor opción</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Rápido y sencillo</h4>
                    <p className="text-sm text-gray-600">Todo el proceso se completa en menos de 5 minutos</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Sin compromiso</h4>
                    <p className="text-sm text-gray-600">Asesoramiento 100% gratuito sin obligación de cambio</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Servicio personalizado</h4>
                    <p className="text-sm text-gray-600">Asesores expertos que entienden tus necesidades</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-10 sm:p-14 text-white text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            Nuestro proceso es simple y transparente
          </p>

          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2 text-lg">Déjanos tu teléfono</h3>
              <p className="text-gray-400 text-sm">Rellena el formulario en menos de un minuto</p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2 text-lg">Te llamamos gratis</h3>
              <p className="text-gray-400 text-sm">Un asesor experto analiza tu situación</p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2 text-lg">Empieza a ahorrar</h3>
              <p className="text-gray-400 text-sm">Gestionamos todo el proceso por ti</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            Lo que dicen nuestros clientes
          </h2>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                "Me ahorraron 280€ al año. El proceso fue súper rápido y fácil. Lo recomiendo totalmente."
              </p>
              <p className="text-sm font-semibold text-gray-900">Ana M.</p>
              <p className="text-xs text-gray-500">Madrid</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                "Profesionales y honestos. Me ayudaron a encontrar la mejor tarifa sin ninguna presión."
              </p>
              <p className="text-sm font-semibold text-gray-900">Jorge L.</p>
              <p className="text-xs text-gray-500">Barcelona</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                "Servicio excelente. Me llamaron en minutos y en una semana tenía mi nueva tarifa."
              </p>
              <p className="text-sm font-semibold text-gray-900">Carmen R.</p>
              <p className="text-xs text-gray-500">Valencia</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-10 text-white text-center mb-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Oferta especial por tiempo limitado
            </h2>
            <p className="text-lg text-blue-100 mb-6">
              Bono de 50€ al contratar hoy. Esta promoción expira pronto.
            </p>
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
              <Clock className="w-5 h-5 mr-2" />
              <span className="font-semibold">Tiempo restante: {formatTime(timeLeft)}</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center bg-gray-100 text-gray-700 px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Users className="w-5 h-5 mr-2" />
            <span>Más de 10,000 clientes satisfechos</span>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-base shadow-md hover:shadow-lg transition-all"
          >
            <ArrowRight className="w-5 h-5 mr-2 rotate-[-90deg]" />
            Solicitar asesoramiento ahora
          </button>
        </div>
      </div>
    </div>
  );
}
