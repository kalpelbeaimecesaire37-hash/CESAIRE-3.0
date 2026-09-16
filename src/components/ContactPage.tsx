import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, Phone, Clock, ShieldCheck, AlertCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Renseignement sur une formation');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formbold.com/s/94Yk7', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Fallback: submit natively to FormBold
        HTMLFormElement.prototype.submit.call(form);
      }
    } catch {
      // In case of CORS or network limitation, submit natively
      HTMLFormElement.prototype.submit.call(form);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent(
      `Bonjour CESAIRE 3.0, je vous contacte depuis votre site web officiel. Mon nom est ${name || 'un visiteur'}.`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="pt-28 pb-24 bg-slate-950 text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950 border border-sky-800 text-sky-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Support & Échanges</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Contacter CESAIRE 3.0
          </h1>
          <p className="text-slate-300 text-base sm:text-lg">
            Une question sur un produit, une demande d'orientation ou une assistance pour votre commande ? Nous sommes à votre écoute.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Methods (Left 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-sky-950 border border-sky-800/60 flex items-center justify-center text-sky-400 mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Email Officiel</h3>
              <p className="text-xs text-slate-400 mb-3">Pour toute demande formelle ou questions d'accès :</p>
              <a
                href="mailto:kalpelbeaimecesaire37@gmail.com"
                className="text-sm font-semibold text-sky-400 hover:text-sky-300 break-all transition-colors"
              >
                kalpelbeaimecesaire37@gmail.com
              </a>
            </div>

            {/* WhatsApp card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-800/60 flex items-center justify-center text-emerald-400 mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Canal WhatsApp</h3>
              <p className="text-xs text-slate-400 mb-3">Idéal pour une réponse rapide ou pour finaliser un paiement Mobile Money.</p>
              <button
                onClick={handleWhatsAppChat}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Ouvrir la discussion WhatsApp</span>
              </button>
            </div>

            {/* Commitments */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 space-y-3 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Réponse garantie sous <strong>24 heures ouvrées</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Assistance dédiée pour vos téléchargements & accès</span>
              </div>
            </div>

          </div>

          {/* Form (Right 7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
              {!submitted ? (
                <form
                  action="https://formbold.com/s/94Yk7"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-bold text-white mb-4">
                    Envoyer un message direct
                  </h3>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-rose-950/80 border border-rose-800 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Ton nom complet :
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Kalpelbe Aimé Césaire"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Ton adresse email :
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="exemple@domaine.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Objet de ta demande :
                    </label>
                    <select
                      name="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-sky-500"
                    >
                      <option value="Renseignement sur une formation">Renseignement sur une formation</option>
                      <option value="Question sur un guide pratique">Question sur un guide pratique</option>
                      <option value="Aide pour le paiement Mobile Money">Aide pour le paiement Mobile Money</option>
                      <option value="Autre demande">Autre demande</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Ton message :
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Précise ta question ou ton besoin avec un maximum de clarté..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 disabled:opacity-70 text-white text-sm font-bold shadow-lg shadow-sky-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.99]"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Envoi en cours via FormBold...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Transmettre mon message</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-white">
                    Message transmis avec succès !
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Merci <strong>{name}</strong>. Votre message a bien été réceptionné par l'équipe de CESAIRE 3.0. Nous vous répondrons à l'adresse <strong>{email}</strong> sous 24h ouvrées.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 text-xs font-bold text-sky-400 hover:bg-slate-700"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
