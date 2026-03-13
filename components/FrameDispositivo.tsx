'use client'

interface FrameDispositivoProps {
  children: React.ReactNode
  aoApertarBotao?: () => void
}

export default function FrameDispositivo({ children, aoApertarBotao }: FrameDispositivoProps) {
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-gray-950 dark:to-gray-900 transition-colors duration-300">
      {/* Área do conteúdo: altura fixa da viewport para o flex preencher */}
      <main className="flex flex-1 flex-col min-h-0 w-full relative px-0 sm:px-6 md:px-8 overflow-hidden">
        <div className="flex flex-1 flex-col min-h-0 pb-12 sm:pb-16 overflow-hidden">
          {children}
        </div>
      </main>

      {/* Botão de navegação: mesmo comportamento (início / painel dos pais) */}
      <button
        type="button"
        onPointerDown={(e) => {
          e.currentTarget.classList.add('nav-button-pressed')
        }}
        onPointerUp={(e) => {
          e.currentTarget.classList.remove('nav-button-pressed')
          if (e.pointerType === 'mouse' && e.button !== 0) return
          e.preventDefault()
          e.stopPropagation()
          aoApertarBotao?.()
        }}
        onPointerLeave={(e) => {
          e.currentTarget.classList.remove('nav-button-pressed')
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            aoApertarBotao?.()
          }
        }}
        onClick={(e) => e.preventDefault()}
        className="nav-button"
        aria-label="Início ou Painel dos Pais"
        title="Início / Painel dos Pais"
      >
        <span className="nav-button-dot" aria-hidden />
      </button>
    </div>
  )
}
