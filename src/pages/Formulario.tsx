import React, { useState } from 'react';

export default function Formulario() {
  const [telefono, setTelefono] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [aceptaInformacion, setAceptaInformacion] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
      const mensaje = `Hola, me gustaría que me contactaran.

📞 Mi teléfono: ${telefono}

✅ He aceptado los términos y condiciones
${aceptaInformacion ? '✅ Quiero recibir información sobre servicios' : ''}

📍 IP del dispositivo: ${userIP}`;

      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`;

      window.location.href = whatsappURL;
    } catch (error) {
      console.error('Error al obtener la IP:', error);

      const whatsappNumber = '34621508300';
      const mensaje = `Hola, me gustaría que me contactaran.

📞 Mi teléfono: ${telefono}

✅ He aceptado los términos y condiciones
${aceptaInformacion ? '✅ Quiero recibir información sobre servicios' : ''}

📍 IP del dispositivo: No disponible`;

      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`;

      window.location.href = whatsappURL;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1920")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-3">
              ¿Te llamamos?
            </h1>
            <p className="text-blue-700 font-medium">
              Déjanos tus datos y te llamamos sin compromiso
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="tel"
                placeholder="Teléfono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
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
                <span className="text-sm text-gray-700 group-hover:text-gray-900">
                  He leído y acepto los{' '}
                  <a
                    href="/terminos"
                    target="_blank"
                    className="text-blue-600 hover:text-blue-800 underline font-medium"
                  >
                    términos y condiciones
                  </a>
                  .
                </span>
              </label>

              <label className="flex items-start space-x-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={aceptaInformacion}
                  onChange={(e) => setAceptaInformacion(e.target.checked)}
                  className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700 group-hover:text-gray-900">
                  Quiero recibir información sobre servicios o sobre ofertas paquetizadas de Endesa relacionadas con el ámbito de la actividad energética.
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 rounded-full font-bold text-white text-lg transition-all transform hover:scale-105 ${
                isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 shadow-lg hover:shadow-xl'
              }`}
            >
              {isLoading ? 'ENVIANDO...' : 'SOLICITAR LLAMADA'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              Al enviar este formulario, serás redirigido a WhatsApp para confirmar tu solicitud
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
