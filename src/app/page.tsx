export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-black">
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl font-bold text-white mb-6">MODO CAVERNA</h1>
        <p className="text-xl text-gray-300 mb-8">
          Sua jornada de transformação começa aqui. Os próximos 40 dias podem mudar completamente sua vida.
        </p>
        <button 
          className="bg-red-600 text-white px-8 py-3 rounded-md text-lg font-bold hover:bg-red-700 transition-colors"
        >
          INICIAR JORNADA
        </button>
      </div>
    </main>
  );
}
