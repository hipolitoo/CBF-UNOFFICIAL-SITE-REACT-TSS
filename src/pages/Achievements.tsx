import React from 'react'
import { Trophy, Award, Zap } from 'lucide-react'

interface Achievement {
  id: number
  title: string
  count: number
  description: string
  icon: string
  color: string
  details: string[]
}

const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: 'Copas do Mundo',
      count: 5,
      description: 'Maior vencedor da história da Copa do Mundo',
      icon: '🏆',
      color: 'from-cbf-yellow to-amber-500',
      details: ['1958 - Suécia', '1962 - Chile', '1970 - México', '1994 - EUA', '2002 - Coreia/Japão']
    },
    {
      id: 2,
      title: 'Taças América',
      count: 9,
      description: 'Domínio supremo no torneio continental',
      icon: '🥇',
      color: 'from-emerald-400 to-teal-600',
      details: ['1921', '1922', '1927', '1949', '1953', '1955', '1957', '2019', '2021']
    },
    {
      id: 3,
      title: 'Campeonato Ouro',
      count: 3,
      description: 'Triunfo nas competições pan-americanas',
      icon: '🎖️',
      color: 'from-orange-400 to-red-600',
      details: ['Pan-americanos 2016', 'Torneios internacionais diversos', 'Competições amistosas Premium']
    },
    {
      id: 4,
      title: 'Títulos Olímpicos',
      count: 2,
      description: 'Glórias nos Jogos Olímpicos',
      icon: '🥇',
      color: 'from-blue-400 to-purple-600',
      details: ['Ouro - Rio 2016 (Futebol Masculino)', 'Competições olímpicas históricas', 'Legado do futebol brasileiro']
    },
    {
      id: 5,
      title: 'Majors Internacionais',
      count: 20,
      description: 'Vitórias em grandes competições',
      icon: '⭐',
      color: 'from-pink-400 to-rose-600',
      details: ['Torneios de seleções internacionais', 'Competições triangulares', 'Jogos amistosos valiosos']
    },
    {
      id: 6,
      title: 'Recordes Mundiais',
      count: 15,
      description: 'Marcas inesquecíveis na história',
      icon: '🚀',
      color: 'from-indigo-400 to-blue-600',
      details: ['Maior sequência invicta', 'Maior número de gols', 'Recordes de público', 'Maiores goleadas']
    }
  ]

  return (
    <div className="w-full pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
            Conquistas Gloriosas
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Uma história repleta de títulos, recordes e momentos inesquecíveis que marcaram a supremacia do futebol brasileiro
          </p>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 rounded-2xl glass-effect border-2 border-cbf-yellow/50 text-center animate-slideUp">
            <div className="text-6xl font-bold text-cbf-yellow mb-3">5</div>
            <h3 className="text-2xl font-bold text-white mb-2">Copas do Mundo</h3>
            <p className="text-gray-300">Tricampeão em 12 anos (1958-1970)</p>
          </div>
          <div className="p-8 rounded-2xl glass-effect border-2 border-cbf-green/50 text-center animate-slideUp" style={{ animationDelay: '0.1s' }}>
            <div className="text-6xl font-bold text-cbf-green mb-3">9</div>
            <h3 className="text-2xl font-bold text-white mb-2">Taças América</h3>
            <p className="text-gray-300">Maior vencedor do torneio continental</p>
          </div>
          <div className="p-8 rounded-2xl glass-effect border-2 border-cbf-yellow/50 text-center animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <div className="text-6xl font-bold text-cbf-yellow mb-3">∞</div>
            <h3 className="text-2xl font-bold text-white mb-2">Legado</h3>
            <p className="text-gray-300">Influência eterna no futebol mundial</p>
          </div>
        </div>

        {/* Achievements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className="group card-hover rounded-2xl glass-effect border border-cbf-yellow/20 hover:border-cbf-yellow/50 overflow-hidden transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-24 bg-gradient-to-r ${achievement.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <span className="text-6xl">{achievement.icon}</span>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-cbf-yellow mb-2">{achievement.count}+</div>
                <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{achievement.description}</p>
                <ul className="space-y-1">
                  {achievement.details.slice(0, 3).map((detail, idx) => (
                    <li key={idx} className="text-xs text-gray-400 flex items-center">
                      <span className="w-1.5 h-1.5 bg-cbf-yellow rounded-full mr-2 inline-block"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Detail */}
        <div className="my-20 p-8 rounded-2xl glass-effect border-2 border-cbf-yellow/30">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Evolução das Conquistas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { decade: '1950s', titles: 1, desc: 'Primeiro Tricampeão' },
              { decade: '1960s', titles: 1, desc: 'Consolidação' },
              { decade: '1970s', titles: 1, desc: 'Pico Histórico' },
              { decade: '1990s', titles: 1, desc: 'Retomada' },
              { decade: '2000s', titles: 2, desc: 'Pentacampeonato' }
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-cbf-blue/20 border border-cbf-yellow/30 text-center hover:bg-cbf-yellow/20 transition-colors">
                <div className="text-2xl font-bold text-cbf-yellow mb-2">{item.decade}</div>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  {[...Array(item.titles)].map((_, i) => (
                    <Trophy key={i} size={20} className="text-cbf-green" />
                  ))}
                </div>
                <p className="text-xs text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Records Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-2xl glass-effect border border-cbf-yellow/20">
            <Award className="w-12 h-12 text-cbf-yellow mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Recordes Ofensivos</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-cbf-yellow rounded-full"></span>
                <span>Maior número de vitórias internacionais</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-cbf-yellow rounded-full"></span>
                <span>Mais gols em Copas do Mundo</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-cbf-yellow rounded-full"></span>
                <span>Maior sequência invicta contínua</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-cbf-yellow rounded-full"></span>
                <span>Público recorde em finais</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl glass-effect border border-cbf-green/20">
            <Zap className="w-12 h-12 text-cbf-green mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Estatísticas Notáveis</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-cbf-green rounded-full"></span>
                <span>Participação em 21 Copas do Mundo</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-cbf-green rounded-full"></span>
                <span>Nunca foi rebaixado em Copa</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-cbf-green rounded-full"></span>
                <span>500+ jogos internacionais</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-cbf-green rounded-full"></span>
                <span>2000+ gols em história oficial</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-8 rounded-2xl glass-effect border-2 border-cbf-yellow/30 bg-gradient-to-r from-cbf-yellow/10 to-cbf-green/10">
          <h3 className="text-3xl font-bold text-white mb-4">
            Uma Herança de Glória e Excelência
          </h3>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Cada título conquistado, cada gol marcado, cada partida vitoriosa contribui para a epopéia do futebol brasileiro. 
            A história continua sendo escrita a cada geração de campeões que vestem a camisa Verde e Amarela.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Achievements
