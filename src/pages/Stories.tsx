import React, { useState } from 'react'
import { Calendar, Award } from 'lucide-react'

interface Story {
  id: number
  title: string
  year: number
  description: string
  fullText: string
  category: string
  image: string
}

const Stories: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null)

  const stories: Story[] = [
    {
      id: 1,
      title: 'O Milagre de 1970',
      year: 1970,
      category: 'Campeonato Mundial',
      description: 'A maior seleção de todos os tempos vence a Copa do Mundo no México',
      fullText: 'Em 1970, a Seleção Brasileira chegou ao seu auge com Pelé, Ronaldinho Gaúcho, Carlos Alberto Torres e muitos outros talentos. O Brasil conquistou sua terceira Copa do Mundo com um futebol deslumbrante, vencendo a Itália na final por 4 a 1. Este foi considerado o melhor Brasil de todos os tempos.',
      image: '🏆'
    },
    {
      id: 2,
      title: 'O Tricampeonato Histórico',
      year: 1960,
      category: 'Dois Campeonatos Mundiais',
      description: 'Brasil conquista sua segunda e terceira Copas do Mundo consecutivas',
      fullText: 'Após vencer a Copa de 1958 como estreante no futebol internacional, o Brasil surpreendeu o mundo ao ganhar novamente em 1962 no Chile, e consolidou seu domínio ao vencer em 1970 no México. Esses três títulos em 12 anos criaram uma dinastia incomparável.',
      image: '🥇'
    },
    {
      id: 3,
      title: 'O Gol de Ronaldinho Gaúcho',
      year: 2002,
      category: 'Momento Icônico',
      description: 'O gol de bicicleta que ajudou o Brasil a conquistar a Taça América',
      fullText: 'Ronaldinho Gaúcho marcou um dos gols mais bonitos da história do futebol com um chute de bicicleta em 2002. Este momento icônico simboliza a beleza e a criatividade do futebol brasileiro que encanta o mundo há décadas.',
      image: '⚡'
    },
    {
      id: 4,
      title: 'Ronaldo em 2002',
      year: 2002,
      category: 'Ataque Fulminante',
      description: 'O "Fenômeno" chuta a bola sete vezes na final em Yokohama',
      fullText: 'Ronaldo "O Fenômeno" foi absolutamente devastador na Copa de 2002 na Coreia do Sul e Japão. Marcou 8 gols na competição, incluindo dois na final contra a Alemanha. Seu desempenho naquele torneio é considerado um dos melhores de um atacante em uma Copa do Mundo.',
      image: '🔥'
    },
    {
      id: 5,
      title: 'O Estilo Único Brasileiro',
      year: 1994,
      category: 'Filosofia do Jogo',
      description: 'A maestria técnica do futebol em sua máxima expressão',
      fullText: 'O Brasil é conhecido mundialmente por seu estilo único de jogar - um futebol criativo, fluido e repleto de habilidades. Nomes como Pelé, Zico, Ronaldinho e Neymar representam esta tradição de beleza técnica que define a identidade do futebol nacional.',
      image: '🎨'
    },
    {
      id: 6,
      title: 'As Taças América',
      year: 2019,
      category: 'Competição Continental',
      description: 'Domínio histórico do Brasil no torneio continental',
      fullText: 'O Brasil ganhou 9 Taças América, mais do que qualquer outro país. Estes títulos demonstram a consistência da seleção em competições continentais ao longo de mais de 50 anos. O futebol brasileiro continua sendo uma referência no continente.',
      image: '🏅'
    }
  ]

  return (
    <div className="w-full pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
            Histórias Memoráveis
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore os momentos mais importantes que marcaram a história do futebol brasileiro
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {stories.map((story) => (
            <div
              key={story.id}
              onClick={() => setSelectedStory(story)}
              className="group card-hover p-6 rounded-2xl glass-effect border border-cbf-yellow/20 hover:border-cbf-yellow/50 cursor-pointer transition-all"
            >
              <div className="text-6xl mb-4">{story.image}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{story.title}</h3>
              <p className="text-cbf-yellow font-semibold mb-3">{story.category}</p>
              <p className="text-gray-300 mb-4">{story.description}</p>
              <div className="flex items-center space-x-2 text-gray-400">
                <Calendar size={16} />
                <span>{story.year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Section */}
        <div className="mt-20 mb-12">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Linha do Tempo
          </h2>
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cbf-yellow to-cbf-green"></div>
            <div className="space-y-12">
              {[
                { year: 1958, title: 'Primeira Copa do Mundo', desc: 'Brasil vence a Suécia no estádio Rasunda' },
                { year: 1962, title: 'Segunda Copa Consecutiva', desc: 'Vitória no Chile consagra hegemonia brasileira' },
                { year: 1970, title: 'O Melhor Brasil de Todos', desc: 'Tricampeonato com futebol deslumbrante' },
                { year: 1994, title: 'Quarto Título', desc: 'Natureza em 1994 nos EUA' },
                { year: 2002, title: 'Pentacampeonato', desc: 'O Brasil conquista seu quinto título' },
              ].map((item, idx) => (
                <div key={idx} className={`flex ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="lg:w-1/2 lg:pr-8">
                    <div className="p-6 rounded-lg glass-effect border border-cbf-yellow/20">
                      <div className="text-cbf-yellow font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.desc}</p>
                    </div>
                  </div>
                  <div className="hidden lg:flex lg:w-1/2 justify-center items-center">
                    <div className="w-4 h-4 rounded-full bg-cbf-yellow border-4 border-cbf-dark"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Story Modal */}
      {selectedStory && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedStory(null)}
        >
          <div
            className="bg-gradient-to-br from-cbf-blue/40 to-cbf-green/40 glass-effect border border-cbf-yellow/30 rounded-3xl max-w-2xl w-full p-8 animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-6xl mb-6">{selectedStory.image}</div>
            <h2 className="text-4xl font-bold text-white mb-4">{selectedStory.title}</h2>
            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center space-x-2 text-cbf-yellow">
                <Calendar size={18} />
                <span className="font-semibold">{selectedStory.year}</span>
              </div>
              <div className="flex items-center space-x-2 text-cbf-yellow">
                <Award size={18} />
                <span className="font-semibold">{selectedStory.category}</span>
              </div>
            </div>
            <p className="text-gray-200 text-lg leading-relaxed mb-8">
              {selectedStory.fullText}
            </p>
            <button
              onClick={() => setSelectedStory(null)}
              className="w-full py-3 bg-cbf-yellow text-cbf-dark font-bold rounded-lg hover:bg-cbf-green transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Stories
