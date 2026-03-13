'use client'

import { useTema } from '@/contexts/ThemeContext'

interface PainelPaisProps {
  aoVoltar?: () => void
}

export default function PainelPais({ aoVoltar }: PainelPaisProps) {
  const { temaEscuro } = useTema()

  const stats = [
    { label: "Uso de Hoje", valor: '25 min', icone: '⏱️' },
    { label: 'Perguntas Feitas', valor: '7', icone: '❓' },
    { label: 'Tópicos Explorados', valor: '3', icone: '🎓' },
    { label: 'Sequência de Aprendizado', valor: '5 dias', icone: '🔥' },
  ]

  const topicos = ['Dinossauros', 'Espaço', 'Animais']

  return (
    <div className={`flex flex-col h-full ${temaEscuro ? 'bg-gray-800' : 'bg-white'}`}>
      <header className={`flex items-center justify-between p-4 sm:p-5 border-b ${temaEscuro ? 'border-gray-700 bg-gray-900' : 'border-gray-100 bg-gray-50'}`}>
        <h1 className={`text-lg sm:text-xl font-semibold ${temaEscuro ? 'text-white' : 'text-neutral-900'}`}>Painel dos Pais</h1>
        <button onClick={aoVoltar} className={`p-1 rounded-lg transition-colors ${temaEscuro ? 'text-gray-400 hover:text-white hover:bg-gray-700' : 'text-gray-500 hover:text-neutral-900 hover:bg-gray-100'}`} aria-label="Fechar">✕</button>
      </header>

      <div className={`flex-1 overflow-y-auto ${temaEscuro ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 space-y-6 sm:space-y-8">
          {/* Boas-vindas */}
          <section className={`rounded-2xl p-5 sm:p-6 ${temaEscuro ? 'bg-gray-700' : 'bg-gradient-to-br from-blue-50 to-blue-100'}`}>
            <h2 className={`text-base sm:text-lg font-bold mb-2 ${temaEscuro ? 'text-white' : 'text-blue-900'}`}>Bem-vindo ao painel de monitoramento!</h2>
            <p className={`text-sm ${temaEscuro ? 'text-gray-300' : 'text-blue-800'}`}>Aqui você pode acompanhar a atividade educacional do seu filho no Primeiro Passo.</p>
          </section>

          {/* Estatísticas — 2 col mobile, 4 col desktop */}
          <section>
            <h3 className={`text-sm font-semibold mb-3 ${temaEscuro ? 'text-white' : 'text-neutral-900'}`}>Resumo</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className={`rounded-2xl p-4 border transition-colors ${temaEscuro ? 'bg-gray-700 border-gray-600 hover:border-blue-600' : 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:border-blue-400'}`}>
                  <p className="text-2xl sm:text-3xl mb-2">{stat.icone}</p>
                  <p className={`text-xs sm:text-sm mb-1 ${temaEscuro ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</p>
                  <p className={`text-lg sm:text-xl font-bold ${temaEscuro ? 'text-blue-400' : 'text-blue-600'}`}>{stat.valor}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tópicos explorados */}
          <section>
            <h3 className={`text-sm font-semibold mb-3 ${temaEscuro ? 'text-white' : 'text-neutral-900'}`}>Tópicos Explorados Hoje</h3>
            <div className="space-y-2">
              {topicos.map((topic, idx) => (
                <div key={idx} className={`flex items-center gap-3 p-3 sm:p-4 rounded-xl hover:opacity-90 transition-opacity ${temaEscuro ? 'bg-gray-700 text-white' : 'bg-gray-50 text-neutral-900'}`}>
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${temaEscuro ? 'bg-blue-400' : 'bg-blue-600'}`} />
                  <span className="text-sm font-medium">{topic}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Insight */}
          <section className={`rounded-2xl p-4 sm:p-5 border-l-4 ${temaEscuro ? 'bg-blue-900/30 border-blue-700 text-blue-200' : 'bg-blue-50 border-blue-400 text-blue-900'}`}>
            <h4 className="font-semibold text-sm mb-1">💡 Insight</h4>
            <p className="text-xs sm:text-sm leading-relaxed">Seu filho está mostrando curiosidade sobre tópicos de natureza e ciência. Continue incentivando perguntas - ele está desenvolvendo habilidades de pensamento crítico!</p>
          </section>
        </div>
      </div>

      <footer className={`flex-shrink-0 border-t p-4 text-center text-xs sm:text-sm ${temaEscuro ? 'border-gray-700 text-gray-400' : 'border-gray-100 text-gray-500'}`}>
        <p className="max-w-xl mx-auto">Primeiro Passo é projetado para inspirar curiosidade e aprendizado</p>
      </footer>
    </div>
  )
}
