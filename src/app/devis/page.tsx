'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export default function DevisPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    product: '',
    details: '',
    name: '',
    email: '',
    phone: ''
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => Math.max(1, s - 1));

  const handleSelect = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    setTimeout(nextStep, 300);
  };

  return (
    <main className="min-h-screen bg-[#111111] text-[#F3F1EC] flex flex-col">

      <div className="flex-1 flex flex-col pt-32 px-6 md:px-12 container mx-auto">
        <div className="flex-1 flex items-center justify-center max-w-4xl mx-auto w-full relative">
          
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="w-full"
              >
                <div className="mb-8 font-mono text-sm tracking-widest text-[#A7A7A3] uppercase">Étape 1 sur 4</div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-12 leading-tight">
                  Parlez-nous de votre projet. <br/>
                  <span className="text-[#A7A7A3]">Quel est votre profil ?</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {['Particulier / Résidentiel', 'Architecte / Bureau d\'études', 'Promoteur Immobilier', 'Entreprise / Industriel'].map((type) => (
                    <button 
                      key={type}
                      onClick={() => handleSelect('projectType', type)}
                      className={`text-left p-8 border ${formData.projectType === type ? 'border-[#8A4A32] bg-[#8A4A32]/10' : 'border-[#F3F1EC]/20 hover:border-[#F3F1EC]/50'} transition-all group relative`}
                    >
                      <span className="text-xl md:text-2xl font-bold">{type}</span>
                      {formData.projectType === type && <Check className="absolute top-8 right-8 w-6 h-6 text-[#8A4A32]" />}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="w-full"
              >
                <div className="mb-8 font-mono text-sm tracking-widest text-[#A7A7A3] uppercase">Étape 2 sur 4</div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-12 leading-tight">
                  Quels systèmes <br/>
                  <span className="text-[#A7A7A3]">vous intéressent ?</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {['Volets Roulants', 'Rideaux Métalliques', 'Portails Automatiques', 'Motorisation & Domotique'].map((prod) => (
                    <button 
                      key={prod}
                      onClick={() => handleSelect('product', prod)}
                      className={`text-left p-8 border ${formData.product === prod ? 'border-[#8A4A32] bg-[#8A4A32]/10' : 'border-[#F3F1EC]/20 hover:border-[#F3F1EC]/50'} transition-all group relative`}
                    >
                      <span className="text-xl md:text-2xl font-bold">{prod}</span>
                      {formData.product === prod && <Check className="absolute top-8 right-8 w-6 h-6 text-[#8A4A32]" />}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="w-full"
              >
                <div className="mb-8 font-mono text-sm tracking-widest text-[#A7A7A3] uppercase">Étape 3 sur 4</div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-12 leading-tight">
                  Décrivez <br/>
                  <span className="text-[#A7A7A3]">brièvement vos besoins.</span>
                </h2>
                <textarea 
                  value={formData.details}
                  onChange={(e) => setFormData({...formData, details: e.target.value})}
                  placeholder="Dimensions approximatives, contraintes spécifiques, délais..."
                  className="w-full bg-transparent border-b border-[#F3F1EC]/20 py-4 text-2xl placeholder:text-[#F3F1EC]/20 focus:outline-none focus:border-[#F3F1EC] transition-colors resize-none h-48"
                />
                <div className="mt-12 flex justify-end">
                  <button 
                    onClick={nextStep}
                    className="flex items-center gap-4 text-xl font-bold uppercase tracking-widest hover:text-[#8A4A32] transition-colors group"
                  >
                    Suivant <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div 
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="w-full"
              >
                <div className="mb-8 font-mono text-sm tracking-widest text-[#A7A7A3] uppercase">Étape 4 sur 4</div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-12 leading-tight">
                  Où pouvons-nous <br/>
                  <span className="text-[#A7A7A3]">vous joindre ?</span>
                </h2>
                <div className="space-y-8">
                  <input 
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Nom complet ou Société"
                    className="w-full bg-transparent border-b border-[#F3F1EC]/20 py-4 text-2xl placeholder:text-[#F3F1EC]/20 focus:outline-none focus:border-[#F3F1EC] transition-colors"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <input 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="Adresse Email"
                      className="w-full bg-transparent border-b border-[#F3F1EC]/20 py-4 text-2xl placeholder:text-[#F3F1EC]/20 focus:outline-none focus:border-[#F3F1EC] transition-colors"
                    />
                    <input 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="Téléphone"
                      className="w-full bg-transparent border-b border-[#F3F1EC]/20 py-4 text-2xl placeholder:text-[#F3F1EC]/20 focus:outline-none focus:border-[#F3F1EC] transition-colors"
                    />
                  </div>
                </div>
                <div className="mt-16 flex justify-end">
                  <button 
                    onClick={nextStep}
                    className="bg-[#F3F1EC] text-[#111111] px-8 py-4 text-xl font-bold uppercase tracking-widest hover:bg-[#8A4A32] hover:text-[#F3F1EC] transition-colors flex items-center gap-4 group"
                  >
                    Envoyer la demande <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div 
                key="step5"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full text-center"
              >
                <div className="w-24 h-24 rounded-full bg-[#8A4A32]/20 border border-[#8A4A32] mx-auto flex items-center justify-center mb-12">
                  <Check className="w-12 h-12 text-[#8A4A32]" />
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-8">
                  Demande reçue.
                </h2>
                <p className="text-[#A7A7A3] text-2xl max-w-2xl mx-auto mb-16">
                  Notre équipe technique étudie vos besoins et vous recontactera dans un délai de 24 à 48 heures.
                </p>
                <a href="/" className="inline-flex items-center gap-4 text-xl font-bold uppercase tracking-widest border-b border-[#F3F1EC] pb-2 hover:text-[#8A4A32] hover:border-[#8A4A32] transition-colors">
                  Retour à l'accueil
                </a>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
        
        {step < 5 && (
          <div className="py-8 border-t border-[#F3F1EC]/10 flex justify-between">
            <button 
              onClick={prevStep}
              className={`font-mono text-sm tracking-widest uppercase transition-colors ${step === 1 ? 'opacity-0 pointer-events-none' : 'text-[#A7A7A3] hover:text-[#F3F1EC]'}`}
            >
              Retour
            </button>
            <div className="flex gap-2">
              {[1,2,3,4].map(s => (
                <div key={s} className={`w-12 h-1 ${s <= step ? 'bg-[#F3F1EC]' : 'bg-[#F3F1EC]/20'} transition-colors`} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
