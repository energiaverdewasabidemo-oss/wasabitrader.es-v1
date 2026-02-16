import React, { useState, useCallback } from 'react';
import { ChevronRight, ChevronLeft, Upload, Zap, Flame, Home, Users, Clock, MessageCircle, Phone, Mail, MapPin, Calendar, User, FileText, Send, CheckCircle, Shield, Info } from 'lucide-react';

interface FormData {
  supplyType: string;
  activeSupplies: string;
  lastChange: string;
  hasBill: string;
  contractedPower: string;
  consumptionSchedule: string;
  gasUsage: string;
  residents: string;
  motivation: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  postalCode: string;
  municipality: string;
  province: string;
  locality: string;
  uploadedFile?: File;
  acceptsTerms: boolean;
  acceptsMarketing: boolean;
  userIP?: string;
  uploadedFileName?: string;
}

const initialFormData: FormData = {
  supplyType: '',
  activeSupplies: '',
  lastChange: '',
  hasBill: '',
  contractedPower: '',
  consumptionSchedule: '',
  gasUsage: '',
  residents: '',
  motivation: '',
  firstName: '',
  lastName: '',
  birthDate: '',
  gender: '',
  phone: '',
  email: '',
  address: '',
  postalCode: '',
  municipality: '',
  province: '',
  locality: '',
  acceptsTerms: false,
  acceptsMarketing: false,
  userIP: '',
  uploadedFileName: ''
};

const questions = [
  {
    id: 'supplyType',
    title: '¿Qué tipo de suministro quieres comparar?',
    type: 'choice',
    options: [
      { value: 'luz', label: 'Luz', icon: Zap },
      { value: 'gas', label: 'Gas', icon: Flame },
      { value: 'luz-gas', label: 'Luz + Gas', icon: Home }
    ]
  },
  {
    id: 'activeSupplies',
    title: '¿Tus suministros de luz y gas están activos?',
    type: 'choice',
    options: [
      { value: 'ambos-activos', label: 'Sí, tengo Luz y Gas dados de alta' },
      { value: 'luz-activa', label: 'Tengo Luz, pero el Gas lo tengo que dar de alta' },
      { value: 'ninguno-activo', label: 'Tengo que dar de alta la Luz y el Gas' }
    ]
  },
  {
    id: 'lastChange',
    title: '¿Recuerdas la última vez que cambiaste de compañía?',
    type: 'choice',
    options: [
      { value: 'menos-año', label: 'Sí, hace menos de un año' },
      { value: 'mas-año', label: 'Sí, hace más de un año' },
      { value: 'no-recuerdo', label: 'No lo recuerdo' }
    ]
  },
  {
    id: 'hasBill',
    title: '¿Tienes una factura de luz o gas a mano?',
    type: 'choice',
    options: [
      { value: 'subir-factura', label: 'Sí, quiero subir la factura', icon: Upload },
      { value: 'manual', label: 'Sí, indicaré mi consumo manualmente' },
      { value: 'ayuda-estimar', label: 'No, necesito ayuda para estimar mi consumo' },
      { value: 'datos-promedio', label: 'No, calcular con datos de consumo promedios' }
    ]
  },
  {
    id: 'contractedPower',
    title: '¿Cuánta potencia tienes contratada?',
    type: 'choice',
    options: [
      { value: 'menos-3kw', label: 'Menos de 3 kW' },
      { value: '3-6kw', label: 'Entre 3 y 6 kW' },
      { value: '6-10kw', label: 'Entre 6 y 10 kW' },
      { value: 'mas-10kw', label: 'Más de 10 kW' },
      { value: 'no-se', label: 'No lo sé' }
    ]
  },
  {
    id: 'consumptionSchedule',
    title: '¿En qué horario consumes más luz?',
    type: 'choice',
    options: [
      { value: 'todo-dia', label: 'Todo el día', icon: Clock },
      { value: 'fines-semana', label: 'Fines de semana' },
      { value: 'mañanas', label: 'Mañanas' },
      { value: 'noches', label: 'Noches' },
      { value: 'festivos', label: 'Fines de semana y festivos' }
    ]
  },
  {
    id: 'gasUsage',
    title: '¿Qué uso le das al gas?',
    type: 'choice',
    options: [
      { value: 'agua-calefaccion', label: 'Agua caliente + calefacción' },
      { value: 'solo-agua', label: 'Solo agua caliente' }
    ],
    condition: (data: FormData) => data.supplyType === 'gas' || data.supplyType === 'luz-gas'
  },
  {
    id: 'residents',
    title: '¿Cuántas personas conviven en la vivienda?',
    type: 'choice',
    options: [
      { value: '1', label: '1', icon: User },
      { value: '2', label: '2', icon: Users },
      { value: '3-4', label: '3-4', icon: Users },
      { value: '4-6', label: '4-6', icon: Users }
    ]
  },
  {
    id: 'motivation',
    title: '¿Qué te ha animado a usar el comparador?',
    type: 'choice',
    options: [
      { value: 'pago-mucho', label: 'Pago demasiado en mis facturas' },
      { value: 'subida-precio', label: 'Me han subido el precio' },
      { value: 'segunda-vivienda', label: 'Segunda vivienda' },
      { value: 'contraoferta', label: 'Comparar contraoferta' },
      { value: 'otro', label: 'Otro motivo' }
    ]
  }
];

const personalDataFields = [
  { id: 'firstName', label: 'Nombre', type: 'text', icon: User, required: true },
  { id: 'lastName', label: 'Apellidos', type: 'text', icon: User, required: true },
  { id: 'birthDate', label: 'Fecha de nacimiento', type: 'date', icon: Calendar, required: true },
  { id: 'gender', label: 'Género', type: 'select', icon: User, required: true, options: ['Masculino', 'Femenino', 'Otro'] },
  { id: 'phone', label: 'Teléfono', type: 'tel', icon: Phone, required: true },
  { id: 'email', label: 'Email', type: 'email', icon: Mail, required: true },
  { id: 'address', label: 'Dirección', type: 'text', icon: MapPin, required: true },
  { id: 'postalCode', label: 'Código Postal', type: 'text', icon: MapPin, required: true },
  { id: 'municipality', label: 'Municipio', type: 'text', icon: MapPin, required: true },
  { id: 'province', label: 'Provincia', type: 'text', icon: MapPin, required: true },
  { id: 'locality', label: 'Localidad', type: 'text', icon: MapPin, required: true }
];

export default function ComparisonForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [uploadError, setUploadError] = useState<string>('');
  const [isUploading, setIsUploading] = useState(false);

  const filteredQuestions = questions.filter(q => !q.condition || q.condition(formData));
  const totalSteps = filteredQuestions.length + 1; // +1 for personal data
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const handleChoice = (questionId: string, value: string) => {
    setFormData(prev => ({ ...prev, [questionId]: value }));
    setTimeout(() => {
      if (currentStep < filteredQuestions.length) {
        setCurrentStep(prev => prev + 1);
      }
    }, 300);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = useCallback(async (file: File) => {
    setUploadError('');
    setIsUploading(true);
    
    // Validate file
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
    
    if (file.size > maxSize) {
      setUploadError('El archivo es demasiado grande. Máximo 10MB.');
      setIsUploading(false);
      return;
    }
    
    if (!allowedTypes.includes(file.type)) {
      setUploadError('Tipo de archivo no válido. Solo PDF, JPG o PNG.');
      setIsUploading(false);
      return;
    }
    
    try {
      // Convert file to base64 for storage
      const reader = new FileReader();
      reader.onload = () => {
        setFormData(prev => ({ 
          ...prev, 
          uploadedFile: file,
          uploadedFileName: file.name
        }));
        setIsUploading(false);
      };
      reader.onerror = () => {
        setUploadError('Error al procesar el archivo.');
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      setUploadError('Error al subir el archivo.');
      setIsUploading(false);
    }
  }, []);

  const getUserIP = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error('Error getting IP:', error);
      return 'No detectada';
    }
  };

  const sendToWhatsApp = async () => {
    setIsSubmitting(true);
    
    try {
      // Get user IP
      const userIP = await getUserIP();
      setFormData(prev => ({ ...prev, userIP }));
      
      const message = `🔥 NUEVA CONSULTA COMPARADOR ENERGÉTICO

👤 DATOS PERSONALES:
• Nombre: ${formData.firstName} ${formData.lastName}
• Teléfono: ${formData.phone}
• Email: ${formData.email}
• Dirección: ${formData.address}, ${formData.postalCode} ${formData.municipality}

⚡ INFORMACIÓN SUMINISTRO:
• Tipo: ${formData.supplyType}
• Estado suministros: ${formData.activeSupplies}
• Último cambio: ${formData.lastChange}
• Potencia contratada: ${formData.contractedPower}
• Horario consumo: ${formData.consumptionSchedule}
${formData.gasUsage ? `• Uso gas: ${formData.gasUsage}` : ''}
• Personas en vivienda: ${formData.residents}
• Motivación: ${formData.motivation}
${formData.uploadedFileName ? `• Factura adjunta: ${formData.uploadedFileName}` : ''}

🌐 INFORMACIÓN TÉCNICA:
• IP del usuario: ${userIP}
• Origen: wasabitrader.com
🕐 Fecha: ${new Date().toLocaleString('es-ES')}

📋 Lead verificado y completo para seguimiento.`;

      const whatsappUrl = `https://wa.me/34621508300?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      setIsCompleted(true);
    } catch (error) {
      console.error('Error sending data:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const goNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const canProceed = () => {
    if (currentStep >= filteredQuestions.length) {
      // Personal data step
      const requiredFields = personalDataFields.filter(field => field.required);
      return requiredFields.every(field => formData[field.id as keyof FormData]) && 
             formData.acceptsTerms;
    }
    return true;
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl p-8 shadow-xl text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-black text-gray-900 mb-4">
            ¡Formulario Enviado!
          </h2>
          <p className="text-gray-700 mb-6">
            Tus datos han sido enviados correctamente. Un experto se pondrá en contacto contigo muy pronto.
          </p>
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <p className="text-blue-700 font-bold text-sm">
              📱 También puedes contactarnos directamente en WhatsApp
            </p>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = filteredQuestions[currentStep];
  const isPersonalDataStep = currentStep >= filteredQuestions.length;

  return (
    <section id="formulario" className="min-h-screen bg-white py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900">
              Comparador Inteligente
            </h2>
            <span className="text-sm font-bold text-blue-600">
              {currentStep + 1} de {totalSteps}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl min-h-[400px] sm:min-h-[500px] flex flex-col">
          {!isPersonalDataStep && currentQuestion ? (
            <>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight">
                  {currentQuestion.title}
                </h3>

                {currentQuestion.id === 'hasBill' && formData.hasBill === 'subir-factura' && (
                  <div className="mb-6">
                    <div className={`border-2 border-dashed rounded-xl p-4 sm:p-8 text-center transition-colors ${
                      uploadError ? 'border-red-300 bg-red-50' : 
                      formData.uploadedFileName ? 'border-green-300 bg-green-50' : 
                      'border-blue-300 hover:border-blue-400'
                    }`}>
                      <Upload className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                      
                      {formData.uploadedFileName ? (
                        <div className="mb-4">
                          <p className="text-green-700 font-bold mb-2 text-sm sm:text-base">✓ Archivo subido correctamente</p>
                          <p className="text-green-600 text-xs sm:text-sm">{formData.uploadedFileName}</p>
                        </div>
                      ) : (
                        <>
                          <p className="text-gray-700 font-bold mb-2 text-sm sm:text-base">
                            {isUploading ? 'Subiendo archivo...' : 'Sube tu factura'}
                          </p>
                          <p className="text-gray-500 text-xs sm:text-sm mb-4">PDF, JPG o PNG (máx. 10MB)</p>
                        </>
                      )}
                      
                      {uploadError && (
                        <p className="text-red-600 text-xs sm:text-sm mb-4">{uploadError}</p>
                      )}
                      
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            handleFileUpload(file);
                          }
                        }}
                        className="hidden"
                        id="file-upload"
                        disabled={isUploading}
                      />
                      <label
                        htmlFor="file-upload"
                        className={`inline-block px-4 sm:px-6 py-2 rounded-lg font-bold cursor-pointer transition-colors text-sm sm:text-base ${
                          isUploading ? 'bg-gray-400 text-white cursor-not-allowed' :
                          formData.uploadedFileName ? 'bg-green-500 text-white hover:bg-green-600' :
                          'bg-blue-500 text-white hover:bg-blue-600'
                        }`}
                      >
                        {isUploading ? 'Subiendo...' : 
                         formData.uploadedFileName ? 'Cambiar archivo' : 
                         'Seleccionar archivo'}
                      </label>
                    </div>
                  </div>
                )}

                <div className="grid gap-3 sm:gap-4">
                  {currentQuestion.options?.map((option, index) => {
                    const Icon = option.icon;
                    const isSelected = formData[currentQuestion.id as keyof FormData] === option.value;
                    
                    return (
                      <button
                        key={index}
                        onClick={() => handleChoice(currentQuestion.id, option.value)}
                        className={`p-3 sm:p-4 rounded-xl border-2 text-left transition-all duration-200 hover:scale-[1.02] ${
                          isSelected
                            ? 'border-blue-500 bg-blue-50 shadow-lg'
                            : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                        }`}
                      >
                        <div className="flex items-center space-x-3 sm:space-x-4">
                          {Icon && (
                            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center ${
                              isSelected ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'
                            }`}>
                              <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                          )}
                          <span className={`font-bold text-sm sm:text-base ${isSelected ? 'text-blue-700' : 'text-gray-700'}`}>
                            {option.label}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 mb-6 sm:mb-8">
                  Datos Personales
                </h3>
                <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                  Para completar tu comparativa personalizada, necesitamos algunos datos básicos.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {personalDataFields.map((field) => {
                    const Icon = field.icon;
                    return (
                      <div key={field.id}>
                        <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                          {field.label} {field.required && <span className="text-red-500">*</span>}
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Icon className="w-5 h-5 text-gray-400" />
                          </div>
                          {field.type === 'select' ? (
                            <select
                              value={formData[field.id as keyof FormData] as string}
                              onChange={(e) => handleInputChange(field.id, e.target.value)}
                              className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                              required={field.required}
                            >
                              <option value="">Seleccionar...</option>
                              {field.options?.map((option) => (
                                <option key={option} value={option}>{option}</option>
                              ))}
                            </select>
                          ) : (
                            <input
                              type={field.type}
                              value={formData[field.id as keyof FormData] as string}
                              onChange={(e) => handleInputChange(field.id, e.target.value)}
                              className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                              required={field.required}
                            />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Legal Checkboxes */}
                <div className="mt-6 sm:mt-8 space-y-4">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="acceptsTerms"
                      checked={formData.acceptsTerms}
                      onChange={(e) => handleInputChange('acceptsTerms', e.target.checked)}
                      className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      required
                    />
                    <label htmlFor="acceptsTerms" className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      <span className="font-bold text-red-500">*</span> Acepto el tratamiento de mis datos personales por parte de <span className="font-bold">WASABI TRADER S.L.</span> (CIF: B42709378) para gestionar mi solicitud de comparativa energética. 
                      <span className="block mt-2 text-xs text-gray-500">
                        Puede ejercer sus derechos dirigiéndose a: info@wasabitrader.com. 
                        <a href="/privacidad" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                          Ver política de privacidad
                        </a>
                      </span>
                    </label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="acceptsMarketing"
                      checked={formData.acceptsMarketing}
                      onChange={(e) => handleInputChange('acceptsMarketing', e.target.checked)}
                      className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="acceptsMarketing" className="text-xs sm:text-sm text-gray-700">
                      Acepto recibir comunicaciones comerciales sobre productos y servicios energéticos.
                    </label>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                    <div className="flex items-start space-x-2">
                      <Info className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div className="text-xs text-blue-700">
                        <p className="font-bold mb-1">Información de la empresa:</p>
                        <p>WASABI TRADER S.L. - CIF: B42709378</p>
                        <p>Calle Andarella 2, 46950 Valencia</p>
                        <p>Tel: +34 621 50 83 00 | Email: info@wasabitrader.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8">
                  <button
                    onClick={sendToWhatsApp}
                    disabled={isSubmitting || !canProceed()}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 sm:py-4 rounded-xl font-black text-base sm:text-lg hover:from-green-400 hover:to-green-500 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-5 h-5" />
                        <span>ENVIAR POR WHATSAPP</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
            <button
              onClick={goBack}
              disabled={currentStep === 0}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="font-bold">Anterior</span>
            </button>

            {!isPersonalDataStep && (
              <button
                onClick={goNext}
                disabled={!formData[currentQuestion?.id as keyof FormData]}
                className="flex items-center space-x-2 bg-blue-500 text-white px-4 sm:px-6 py-2 rounded-lg font-bold hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                <span>Siguiente</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}