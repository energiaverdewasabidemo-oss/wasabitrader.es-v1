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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {showUrgency && (
        <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-4 z-50 shadow-lg animate-fade-in-up">
          <div className="max-w-7xl mx-auto flex items-center justify-center space-x-3 text-center flex-wrap">
            <AlertCircle className="w-5 h-5 animate-pulse" />
            <span className="font-black text-sm sm:text-base">OFERTA LIMITADA</span>
            <span className="font-bold text-sm sm:text-base">Esta asesoría gratuita expira en:</span>
            <div className="flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full">
              <Timer className="w-4 h-4" />
              <span className="font-black text-lg">{formatTime(timeLeft)}</span>
            </div>
          </div>
        </div>
      )}

      <div className={`max-w-7xl mx-auto px-4 py-8 sm:py-12 lg:py-16 ${showUrgency ? 'mt-16' : ''}`}>
        <div className="text-center mb-8 sm:mb-12 animate-fade-in-up">
          <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-black mb-4 sm:mb-6 shadow-lg animate-pulse">
            <Gift className="w-4 h-4 mr-2" />
            SOLO HOY: ASESORÍA GRATIS + BONO 50€
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6">
            Ahorra hasta
            <span className="block bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent text-4xl sm:text-5xl lg:text-7xl mt-2">
              300€ al año
            </span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-bold max-w-3xl mx-auto px-4">
            Compara y cambia a la mejor tarifa de luz y gas en menos de 5 minutos
          </p>

          <div className="mt-6 inline-flex items-center bg-yellow-100 border-2 border-yellow-400 text-yellow-900 px-6 py-3 rounded-2xl font-black text-sm sm:text-base shadow-lg">
            <Zap className="w-5 h-5 mr-2" />
            ¡Solo quedan 3 huecos disponibles hoy!
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 border-2 border-red-200 animate-fade-in-up relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-to-br from-red-500 to-red-600 text-white px-6 py-2 rounded-bl-3xl font-black text-sm shadow-lg">
              BONO 50€ INCLUIDO
            </div>

            <div className="mb-6 sm:mb-8 mt-8">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">
                Te llamamos AHORA GRATIS
              </h2>
              <p className="text-base sm:text-lg text-gray-600 font-bold">
                Sin compromiso. Sin letra pequeña. Solo ahorro garantizado.
              </p>

              <div className="mt-4 bg-green-50 border-2 border-green-300 rounded-xl p-4">
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-black text-green-900 text-sm sm:text-base">
                      Respuesta en menos de 2 minutos
                    </p>
                    <p className="text-green-700 font-bold text-xs sm:text-sm mt-1">
                      Nuestro equipo está disponible ahora mismo
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-black mb-2 text-sm sm:text-base">
                  Tu teléfono
                </label>
                <input
                  type="tel"
                  placeholder="Ej: 612 345 678"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all text-base sm:text-lg font-bold"
                  required
                />
              </div>

              <div className="space-y-4">
                <label className="flex items-start space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={aceptaTerminos}
                    onChange={(e) => setAceptaTerminos(e.target.checked)}
                    className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    required
                  />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900 font-bold">
                    He leído y acepto los{' '}
                    <a
                      href="/terminos"
                      target="_blank"
                      className="text-blue-600 hover:text-blue-800 underline font-black"
                    >
                      términos y condiciones
                    </a>
                  </span>
                </label>

                <label className="flex items-start space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={aceptaInformacion}
                    onChange={(e) => setAceptaInformacion(e.target.checked)}
                    className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900 font-bold">
                    Quiero recibir información sobre ofertas y servicios
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg text-white transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-3 relative overflow-hidden ${
                  isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 animate-pulse'
                }`}
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
                <span>{isLoading ? 'PROCESANDO...' : 'SÍ, QUIERO MI BONO DE 50€'}</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <div className="text-center space-y-2">
                <p className="text-xs text-gray-500 font-bold">
                  Al enviar recibirás una confirmación por WhatsApp
                </p>
                <div className="flex items-center justify-center space-x-4 text-xs text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Check className="w-3 h-3 text-green-600" />
                    <span className="font-bold">Sin spam</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Check className="w-3 h-3 text-green-600" />
                    <span className="font-bold">Respuesta inmediata</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Check className="w-3 h-3 text-green-600" />
                    <span className="font-bold">100% gratis</span>
                  </div>
                </div>
              </div>
            </form>

            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <Shield className="w-4 h-4 text-blue-500" />
                <span className="font-bold">Datos protegidos con encriptación SSL</span>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <p className="text-center font-black text-blue-900 text-sm mb-2">
                  🔥 Últimas solicitudes:
                </p>
                <div className="space-y-1 text-xs text-blue-800 font-bold">
                  <p>• María de Madrid - Hace 3 minutos</p>
                  <p>• Carlos de Valencia - Hace 7 minutos</p>
                  <p>• Laura de Sevilla - Hace 12 minutos</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-6 sm:p-8 text-white shadow-2xl border-4 border-yellow-400">
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4 mx-auto">
                <Gift className="w-8 h-8 animate-bounce" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-center mb-4">
                BONO EXCLUSIVO 50€
              </h3>
              <p className="text-center text-white font-bold text-base sm:text-lg mb-4">
                Al contratar hoy, recibes un bono adicional de 50€ en tu primera factura
              </p>
              <div className="bg-white/20 rounded-xl p-3 text-center">
                <p className="font-black text-yellow-300 text-sm">
                  ⏰ Válido solo para las primeras 10 solicitudes
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-6 sm:p-8 text-white shadow-2xl">
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4 mx-auto">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-center mb-4">
                +12 años de experiencia
              </h3>
              <p className="text-center text-blue-100 font-bold text-base sm:text-lg">
                Ayudando a más de 10,000 familias a ahorrar en sus facturas
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-blue-100">
              <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-6">
                ¿Por qué elegirnos?
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Brain className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 mb-1 text-sm sm:text-base">Análisis con IA</h4>
                    <p className="text-gray-600 font-bold text-xs sm:text-sm">Comparamos todas las tarifas del mercado automáticamente</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 mb-1 text-sm sm:text-base">Rápido y fácil</h4>
                    <p className="text-gray-600 font-bold text-xs sm:text-sm">Proceso completo en menos de 5 minutos</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingDown className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 mb-1 text-sm sm:text-base">Ahorro garantizado</h4>
                    <p className="text-gray-600 font-bold text-xs sm:text-sm">Media de 200-300€ de ahorro anual</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 mb-1 text-sm sm:text-base">Sin compromiso</h4>
                    <p className="text-gray-600 font-bold text-xs sm:text-sm">Asesoramiento gratuito sin obligación de cambio</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-3xl p-6 sm:p-8 border-2 border-yellow-200">
              <div className="flex items-center justify-center space-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-center text-gray-800 font-black text-lg sm:text-xl mb-2">4.9/5</p>
              <p className="text-center text-gray-700 font-bold text-sm sm:text-base">
                Valoración de nuestros clientes
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-12 text-white text-center shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 sm:mb-6">
              ¿Cómo funciona?
            </h2>

            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black">
                  1
                </div>
                <h3 className="font-black mb-2 text-base sm:text-lg">Déjanos tu teléfono</h3>
                <p className="text-blue-200 font-bold text-sm sm:text-base">Rellena el formulario en 30 segundos</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black">
                  2
                </div>
                <h3 className="font-black mb-2 text-base sm:text-lg">Te llamamos gratis</h3>
                <p className="text-blue-200 font-bold text-sm sm:text-base">Un experto analiza tu caso</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black">
                  3
                </div>
                <h3 className="font-black mb-2 text-base sm:text-lg">Empieza a ahorrar</h3>
                <p className="text-blue-200 font-bold text-sm sm:text-base">Nos encargamos de todo el cambio</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border-2 border-blue-100 mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 text-center mb-8">
            Testimonios Reales
          </h2>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 font-bold text-sm mb-3">
                "Me ahorraron 280€ al año. El proceso fue súper rápido y fácil. Lo recomiendo 100%"
              </p>
              <p className="text-blue-600 font-black text-xs">- Ana M., Madrid</p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 font-bold text-sm mb-3">
                "Profesionales y honestos. Me ayudaron a encontrar la mejor tarifa sin presiones"
              </p>
              <p className="text-blue-600 font-black text-xs">- Jorge L., Barcelona</p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 font-bold text-sm mb-3">
                "Increíble servicio. Me llamaron en 5 minutos y en una semana ya tenía mi nueva tarifa"
              </p>
              <p className="text-blue-600 font-black text-xs">- Carmen R., Valencia</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-8 sm:p-12 text-white text-center shadow-2xl mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4">
            ⚠️ ATENCIÓN: OFERTA LIMITADA
          </h2>
          <p className="text-lg sm:text-xl font-bold mb-6 max-w-2xl mx-auto">
            El bono de 50€ solo está disponible para las primeras personas que se registren HOY
          </p>
          <div className="inline-flex items-center bg-white text-red-600 px-8 py-4 rounded-2xl font-black text-lg shadow-xl">
            <Timer className="w-6 h-6 mr-3 animate-pulse" />
            Tiempo restante: {formatTime(timeLeft)}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 sm:px-6 py-3 rounded-full font-black text-sm sm:text-base mb-4">
            <Users className="w-5 h-5 mr-2" />
            <span>Más de 10,000 clientes confían en nosotros</span>
          </div>

          <div className="mt-6">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-2xl font-black text-base sm:text-lg shadow-2xl hover:scale-105 transition-transform"
            >
              <Gift className="w-6 h-6 mr-3 animate-bounce" />
              RECLAMAR MI BONO DE 50€
              <ArrowRight className="w-6 h-6 ml-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
