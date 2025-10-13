import React from 'react';
import PixelBlast from '../components/PixelBlast';
import GlassButton from '../components/GlassButton';

const Home = () => {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center">
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
          <PixelBlast
            variant="circle"
            pixelSize={6}
            color="#B19EEF"
            patternScale={3}
            patternDensity={1.2}
            pixelSizeJitter={0.5}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.6}
            edgeFade={0.25}
            transparent
          />
        </div>
        <div className="z-10">
          <h1 className="text-6xl font-extrabold mb-4">
            Votre Chatbot IA Suisse ne dort jamais.
          </h1>
          <p className="text-xl mb-8">
            Transformez les visiteurs de votre site en clients, 24h/24, grâce à notre chatbot IA intelligent conçu en Suisse.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <GlassButton className="w-48 h-14 text-black bg-white">Voir nos offres</GlassButton>
            <GlassButton className="w-48 h-14 text-white">Tester une démo gratuite</GlassButton>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-20 px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Vous manquez des clients sans même le savoir.</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-300">
          Plus de 60% des visiteurs quittent un site web s'ils ne trouvent pas une réponse immédiate à leur question. Notre chatbot IA suisse capture ces opportunités perdues et transforme chaque visiteur en client potentiel.
        </p>
      </section>

      {/* Section 3 */}
      <section className="py-20 px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">Réponses Instantanées 24/7</h3>
            <p className="text-gray-300">Libérez-vous du temps, l'IA répond aux questions sur vos horaires, tarifs et services.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Ne Perdez Plus un Client</h3>
            <p className="text-gray-300">Capturez l'intérêt des visiteurs et guidez-les vers une prise de contact ou un achat.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Une Image Moderne</h3>
            <p className="text-gray-300">Montrez que votre entreprise est à la pointe de la technologie.</p>
          </div>
        </div>
      </section>

      {/* "How it works" Section */}
      <section className="py-20 px-8 text-center">
        <h2 className="text-4xl font-bold mb-12">Comment ça marche ?</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 -translate-y-1/2 hidden md:block" />

          <div className="relative z-10 bg-gray-900 p-8 rounded-xl border border-gray-700 glassmorphism">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#B19EEF] text-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-2xl">1</div>
            <h3 className="text-2xl font-bold mt-8 mb-2">Prise de contact</h3>
            <p className="text-gray-300">Nous discutons de vos besoins pour comprendre votre entreprise.</p>
          </div>
          <div className="relative z-10 bg-gray-900 p-8 rounded-xl border border-gray-700 glassmorphism">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#B19EEF] text-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-2xl">2</div>
            <h3 className="text-2xl font-bold mt-8 mb-2">Personnalisation</h3>
            <p className="text-gray-300">Nous formons l'IA avec vos données pour des réponses parfaites.</p>
          </div>
          <div className="relative z-10 bg-gray-900 p-8 rounded-xl border border-gray-700 glassmorphism">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#B19EEF] text-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-2xl">3</div>
            <h3 className="text-2xl font-bold mt-8 mb-2">Installation simple</h3>
            <p className="text-gray-300">Nous intégrons le chatbot sur votre site en quelques minutes.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 text-center bg-gray-900 rounded-xl my-20 max-w-6xl mx-auto glassmorphism border border-gray-700">
        <h2 className="text-4xl font-bold mb-4">Prêt à transformer votre entreprise ?</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
          Ne laissez plus un seul client potentiel vous échapper. Installez un assistant IA dès aujourd'hui.
        </p>
        <div className="flex items-center justify-center space-x-4">
            <GlassButton className="w-48 h-14 text-black bg-[#B19EEF]">Découvrir nos offres</GlassButton>
            <GlassButton className="w-48 h-14 text-[#B19EEF]">Tester une démo gratuite</GlassButton>
        </div>
      </section>
    </div>
  );
};

export default Home;
