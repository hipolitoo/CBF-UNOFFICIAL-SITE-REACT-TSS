import React, { useState } from 'react'
import { Star, Trophy, Heart } from 'lucide-react'
import pele from '../assets/Pelé_JPG.jpg'
import ronaldinho from '../assets/Ronaldinho.jpg'
import ronaldo from '../assets/ronaldo.jpeg'
import neymar from '../assets/Neymar.png'
import zico from '../assets/zico.jpg'
import garrincha from '../assets/garrincha.jpg'
import cafu from '../assets/cafu.jpg'
import endrick from '../assets/endrick.jpg'
import taffarel from '../assets/taffarel.jpg'
import rivaldo from '../assets/rivaldo.png'
import socrates from '../assets/socrates.png'
import marcos from '../assets/marcos.png'
import roberto_carlos from '../assets/roberto carlos.jpg'
import romario from '../assets/romario.jpg'
import dunga from '../assets/dunga.jpg'
import zagallo from '../assets/zagallo.jpg'
import jairzinho from '../assets/jairzinho.jpg'
import leonidas from '../assets/leonidas.jpg'
import carlos_alberto from '../assets/carlos alberto.jpg'
import kaká from '../assets/kaka.jpg'
import tostao from '../assets/tostao.jpg'
import thiago_silva from '../assets/thiago silva.png'
import lucio from '../assets/lucio.jpg'
import bebeto from '../assets/bebeto.jpeg'

interface Legend {
    id: number
    name: string
    nickname: string
    position: string
    era: string
    achievements: string[]
    biography: string
    image: string
    stats: string
}

const Legends: React.FC = () => {
    const [selectedLegend, setSelectedLegend] = useState<Legend | null>(null)

    const legends: Legend[] = [
        {
            id: 1,
            name: 'Pelé',
            nickname: 'Rei',
            position: 'Atacante',
            era: '1956-1977',
            achievements: ['3 Copas do Mundo', '1000+ Gols', 'Prêmio Ballon d\'Or'],
            biography: 'Pelé é amplamente considerado o maior jogador de futebol de todos os tempos. Ganhou três Copas do Mundo (1958, 1962, 1970) e revolucionou o jogo com sua habilidade técnica, inteligência tática e liderança. Marcou mais de 1000 gols em sua carreira profissional.',
            image: pele,
            stats: '1283 gols em 1366 jogos'
        },
        {
            id: 2,
            name: 'Ronaldinho Gaúcho',
            nickname: 'Bruxo',
            position: 'Atacante',
            era: '2001-2012',
            achievements: ['Dois Prêmios Ballon d\'Or', 'Campeão da Champions', 'Campeão Libertadores', 'Copa do Mundo 2002'],
            biography: 'Ronaldinho Gaúcho revolucionou o futebol moderno com sua criatividade, drible e técnica excepcional. Ganhou dois Prêmios Ballon d\'Or e foi fundamental na reentrada do Brasil no topo do futebol mundial com seu futebol mágico e divertido.',
            image: ronaldinho,
            stats: '67 gols em 97 jogos pela Seleção'
        },
        {
            id: 3,
            name: 'Ronaldo',
            nickname: 'Fenômeno',
            position: 'Atacante',
            era: '1994-2011',
            achievements: ['Dois Prêmios Ballon d\'Or', '62 gols pela Seleção', '2 Copas do Mundo'],
            biography: 'Ronaldo "O Fenômeno" é um dos maiores atacantes da história. Com velocidade, força e técnica, ganhou dois Prêmios Ballon d\'Or. Sua performance na Copa de 2002 (8 gols) e seus gols pelo Brasil o tornaram uma lenda imortal.',
            image: ronaldo,
            stats: '62 gols em 98 jogos pela Seleção'
        },
        {
            id: 4,
            name: 'Neymar',
            nickname: 'Príncipe',
            position: 'Meia-Atacante',
            era: '2010-Presente',
            achievements: ['Ouro Olímpico', 'Maior artilheiro vivo', 'Líder moderno'],
            biography: 'Neymar é considerado um dos maiores talentos do futebol moderno. Com sua habilidade de drible, criatividade e capacidade de decisão, continua levando o futebol brasileiro para o mundo. Ganhou a medalha de ouro na Olimpíada de 2016.',
            image: neymar,
            stats: '79 gols em 124 jogos pela Seleção'

        },
        {
            id: 5,
            name: 'Zico',
            nickname: 'Galinho de Ouro',
            position: 'Meia-Atacante',
            era: '1971-1989',
            achievements: ['Lenda da década de 80', '66 gols pela Seleção', 'Capitão inspirador'],
            biography: 'Zico foi o maestro do futebol brasileiro na década de 1980. Com sua inteligência tática, dribles e finalizações precisas, liderou a Seleção por anos. Marcou 66 gols e é considerado um dos maiores meias ofensivos de todos os tempos.',
            image: zico,
            stats: '66 gols em 72 jogos pela Seleção'
        },
        {
            id: 6,
            name: 'Garrincha',
            nickname: 'Anjo das Pernas Tortas',
            position: 'Atacante',
            era: '1950-1969',
            achievements: ['Dois títulos mundiais', 'Dribista incomparável', 'Libertador de povos'],
            biography: 'Garrincha foi um dos maiores driblistas de todos os tempos. Ganhou duas Copas do Mundo (1958, 1962) e foi fundamental naquelas equipes históricas. Sua habilidade de drible e sua coragem o fazem ser lembrado até hoje.',
            image: garrincha,
            stats: '49 gols em 50 jogos (estimado) pela Seleção'
        },
        {
            id: 7,
            name: 'Cafu',
            nickname: 'Capitão',
            position: 'Lateral Direito',
            era: '1990-2006',
            achievements: ['2 Copas do Mundo', 'Lenda da defesa', 'Velocista incomparável'],
            biography: 'Cafu é considerado um dos melhores laterais da história do futebol. Com sua velocidade, resistência e inteligência tática, participou de duas Copas do Mundo (1994, 2002) como importante peça de defesa. Jogou 143 vezes pela Seleção.',
            image: cafu,
            stats: '143 jogos pela Seleção'
        },
        {
            id: 8,
            name: 'Endrick',
            nickname: 'Predestinado',
            position: 'Atacante',
            era: '2023-Presente',
            achievements: ['Campeão Brasileiro', 'Promessa', 'Matador'],
            biography: 'Endrick representa a nova geração de talentos do futebol brasileiro. Com velocidade impressionante, técnica refinada e capacidade de decisão, ele está escrevendo sua própria história no futebol europeu e pela Seleção, prometendo ser um grande nome na história do Brasil.',
            image: endrick,
            stats: '3 gols em 15 jogos pela Seleção'
        },
        {
            id: 9,
            name: 'Taffarel',
            nickname: 'Mão de Ouro',
            position: 'Goleiro',
            era: '1985-2001',
            achievements: ['2 Copas do Mundo', 'Lenda dos goleiros', 'Defesas memoráveis'],
            biography: 'Taffarel é um dos maiores goleiros da história do futebol brasileiro. Com reflexos incríveis e liderança, foi fundamental nas conquistas das Copas de 1994 e 2002. Suas defesas memoráveis o tornam uma lenda entre os arqueiros.',
            image: taffarel,
            stats: '101 jogos pela Seleção'
        },
        {
            id: 10,
            name: 'Rivaldo',
            nickname: 'Rivaldo',
            position: 'Meia-Atacante',
            era: '1991-2015',
            achievements: ['Copa do Mundo 2002', 'Prêmio Ballon d\'Or', 'Craque da Copa 2002'],
            biography: 'Rivaldo foi um dos maiores meias-atacantes da história do futebol brasileiro. Com habilidade técnica, visão de jogo e capacidade de decisão, foi fundamental na conquista da Copa do Mundo de 2002. Ganhou o Prêmio Ballon d\'Or em 1999 e é lembrado por seus gols e assistências incríveis.',
            image: rivaldo,
            stats: '74 gols em 83 jogos pela Seleção'
        },
        {
            id: 11,
            name: 'Sócrates',
            nickname: 'Doutor',
            position: 'Meia',
            era: '1974-1989',
            achievements: ['Líder da Democracia Corinthiana', 'Ícone dos anos 80', 'Símbolo de resistência'],
            biography: 'Sócrates foi um dos maiores meias da história do futebol brasileiro. Com sua inteligência tática, habilidade técnica e liderança, foi o símbolo da Democracia Corinthiana nos anos 80. Sua influência transcendeu o campo, tornando-se um ícone de resistência e pensamento crítico.',
            image: socrates,
            stats: '60 gols em 60 jogos pela Seleção'
        },
        {
            id: 12,
            name: 'Marcos',
            nickname: 'São Marcos',
            position: 'Goleiro',
            era: '1992-2012',
            achievements: ['Copa do Mundo 2002', 'Lenda do Palmeiras', 'Defesas milagrosas'],
            biography: 'Marcos é um dos maiores goleiros da história do futebol brasileiro. Com reflexos incríveis e liderança, foi fundamental na conquista da Copa do Mundo de 2002. Sua lealdade ao Palmeiras e suas defesas milagrosas o tornam uma lenda entre os arqueiros.',
            image: marcos,
            stats: '29 jogos pela Seleção'
        },
        {
            id: 13,
            name: 'Roberto Carlos',
            nickname: 'Roberto Carlos',
            position: 'Lateral Esquerdo',
            era: '1991-2011',
            achievements: ['Copa do Mundo 2002', 'Lenda dos laterais', 'Chute potente'],
            biography: 'Roberto Carlos é um dos maiores laterais da história do futebol brasileiro. Com sua velocidade, resistência e chute potente, foi fundamental na conquista da Copa do Mundo de 2002. Sua habilidade de ataque e defesa o torna uma lenda entre os laterais.',
            image: roberto_carlos,
            stats: '11 gols em 125 jogos pela Seleção'
        },
        {
            id: 14,
            name: 'Romário',
            nickname: 'Baixinho',
            position: 'Atacante',
            era: '1985-2007',
            achievements: ['Copa do Mundo 1994', '1000+ Gols', 'Prêmio Ballon d\'Or'],
            biography: 'Romário é um dos maiores atacantes da história do futebol brasileiro. Com sua habilidade de finalização, velocidade e inteligência tática, foi fundamental na conquista da Copa do Mundo de 1994. Marcou mais de 1000 gols em sua carreira profissional, tornando-se uma lenda imortal.',
            image: romario,
            stats: '55 gols em 70 jogos pela Seleção'
        },
        {
            id: 15,
            name: 'Dunga',
            nickname: 'Dunga',
            position: 'Volante',
            era: '1983-2000',
            achievements: ['Copa do Mundo 1994', 'Líder de meio-campo', 'Capitão inspirador'],
            biography: 'Dunga foi um dos maiores volantes da história do futebol brasileiro. Com sua liderança, resistência e habilidade de marcação, foi fundamental na conquista da Copa do Mundo de 1994. Sua presença no meio-campo e sua capacidade de liderança o tornam uma lenda entre os volantes.',
            image: dunga,
            stats: '91 jogos pela Seleção'
        },
        {
            id: 16,
            name: 'Zagallo',
            nickname: 'Zagallo',
            position: 'Atacante/Meia',
            era: '1948-1970',
            achievements: ['2 Copas do Mundo como jogador', '3 Copas do Mundo como técnico', 'Lenda viva do futebol'],
            biography: 'Zagallo é uma lenda viva do futebol brasileiro. Como jogador, conquistou duas Copas do Mundo (1958, 1962) e como técnico, liderou o Brasil a três títulos mundiais (1970, 1994, 2002). Sua contribuição para o futebol brasileiro é incomparável, tornando-se um ícone eterno.',
            image: zagallo,
            stats: '33 jogos pela Seleção como jogador'
        },
        {
            id: 17,
            name: 'Jairzinho',
            nickname: 'Motorzinho',
            position: 'Atacante',
            era: '1957-1974',
            achievements: ['Copa do Mundo 1970', 'Goleador da Copa de 1970', 'Lenda dos atacantes'],
            biography: 'Jairzinho foi um dos maiores atacantes da história do futebol brasileiro. Com sua velocidade, habilidade de drible e capacidade de decisão, foi fundamental na conquista da Copa do Mundo de 1970. Marcou gols em todos os jogos daquela Copa, tornando-se uma lenda entre os atacantes.',
            image: jairzinho,
            stats: '33 gols em 81 jogos pela Seleção'
        },
        {
            id: 18,
            name: 'Leônidas da Silva',
            nickname: 'Diamante',
            position: 'Atacante',
            era: '1929-1950',
            achievements: ['Copa do Mundo 1938', 'Inventor da bicicleta', 'Lenda dos anos 30'],
            biography: 'Leônidas da Silva foi um dos maiores atacantes da história do futebol brasileiro. Com sua habilidade de drible, velocidade e capacidade de decisão, foi fundamental na conquista da Copa do Mundo de 1938. É creditado como o inventor do chute de bicicleta, tornando-se uma lenda entre os atacantes.',
            image: leonidas,
            stats: '21 gols em 28 jogos pela Seleção'
        },
        {
            id: 19,
            name: 'Carlos Alberto Torres',
            nickname: 'Capitão Carlos Alberto',
            position: 'Lateral Direito',
            era: '1964-1977',
            achievements: ['Copa do Mundo 1970', 'Gol mais bonito da história', 'Lenda dos laterais'],
            biography: 'Carlos Alberto Torres é um dos maiores laterais da história do futebol brasileiro. Com sua habilidade de ataque e defesa, foi fundamental na conquista da Copa do Mundo de 1970. Seu gol na final contra a Itália é considerado um dos mais bonitos da história do futebol, tornando-se uma lenda entre os laterais.',
            image: carlos_alberto,
            stats: '53 jogos pela Seleção'
        },
        {
            id: 20,
            name: 'Kaká',
            nickname: 'Menino de Ouro',
            position: 'Meia-Atacante',
            era: '2001-2016',
            achievements: ['Copa do Mundo 2002', 'Prêmio Ballon d\'Or', 'Craque da Champions'],
            biography: 'Kaká é um dos maiores meias-atacantes da história do futebol brasileiro. Com sua habilidade técnica, visão de jogo e capacidade de decisão, foi fundamental na conquista da Copa do Mundo de 2002. Ganhou o Prêmio Ballon d\'Or em 2007 e é lembrado por seus gols e assistências incríveis.',
            image: kaká,
            stats: '29 gols em 92 jogos pela Seleção'
        },
        {
            id: 21,
            name: 'Tostão',
            nickname: 'Tostão',
            position: 'Atacante',
            era: '1962-1972',
            achievements: ['Copa do Mundo 1970', 'Lenda dos anos 60', 'Craque da Copa de 1970'],
            biography: 'Tostão foi um dos maiores atacantes da história do futebol brasileiro. Com sua habilidade de drible, visão de jogo e capacidade de decisão, foi fundamental na conquista da Copa do Mundo de 1970. Ganhou o título de Craque da Copa de 1970, tornando-se uma lenda entre os atacantes.',
            image: tostao,
            stats: '32 gols em 54 jogos pela Seleção'
        },
        {
            id: 22,
            name: 'Thiago Silva',
            nickname: 'Monstro',
            position: 'Zagueiro',
            era: '2008-2024',
            achievements: ['Copa do Mundo 2014', 'Lenda dos zagueiros', 'Líder moderno'],
            biography: 'Thiago Silva é um dos maiores zagueiros da história do futebol brasileiro. Com sua habilidade de marcação, liderança e capacidade de decisão, foi fundamental na conquista da Copa do Mundo de 2014. Sua presença sólida na defesa o torna uma lenda entre os zagueiros.',
            image: thiago_silva,
            stats: '7 gols em 100 jogos pela Seleção'
        },
        {
            id: 23,
            name: 'Lúcio',
            nickname: 'Xerife',
            position: 'Zagueiro',
            era: '2000-2014',
            achievements: ['Copa do Mundo 2002', 'Lenda dos zagueiros', 'Defesas decisivas'],
            biography: 'Lúcio é um dos maiores zagueiros da história do futebol brasileiro. Com sua habilidade de marcação, liderança e capacidade de decisão, foi fundamental na conquista da Copa do Mundo de 2002. Sua presença sólida na defesa o torna uma lenda entre os zagueiros.',
            image: lucio,
            stats: '7 gols em 105 jogos pela Seleção'
        },
        {
            id: 24,
            name: 'Bebeto',
            nickname: 'Bebeto',
            position: 'Atacante',
            era: '1985-2000',
            achievements: ['Copa do Mundo 1994', 'Lenda dos anos 90', 'Goleador decisivo'],
            biography: 'Bebeto é um dos maiores atacantes da história do futebol brasileiro. Com sua habilidade de finalização, velocidade e inteligência tática, foi fundamental na conquista da Copa do Mundo de 1994. Marcou gols decisivos em momentos importantes, tornando-se uma lenda entre os atacantes.',
            image: bebeto,
            stats: '39 gols em 75 jogos pela Seleção'
        },

    ]

    return (
        <div className="w-full pt-32 pb-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
                        Ídolos Eternos
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Conheça os maiores talentos que vestiram a camisa da Seleção Brasileira
                    </p>
                </div>

                {/* Legends Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {legends.map((legend) => (
                        <div
                            key={legend.id}
                            onClick={() => setSelectedLegend(legend)}
                            className="group card-hover cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-2xl glass-effect border border-cbf-yellow/30 hover:border-cbf-yellow/70 p-0 h-full flex flex-col transition-all">
                                <div className="relative w-full h-64 overflow-hidden bg-gradient-to-br from-cbf-yellow/20 to-cbf-dark">
                                    <img
                                        src={legend.image}
                                        alt={legend.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-cbf-dark via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                                </div>
                                <div className="relative z-10 p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-2xl font-bold text-cbf-yellow mb-1">{legend.name}</h3>
                                        <p className="text-cbf-yellow font-semibold text-sm mb-3 opacity-80">{legend.nickname}</p>
                                    </div>
                                    <div className="space-y-2 mb-4">
                                        <p className="text-gray-300 text-sm"><span className="text-cbf-yellow font-semibold">Posição:</span> {legend.position}</p>
                                        <p className="text-gray-300 text-sm"><span className="text-cbf-yellow font-semibold">Era:</span> {legend.era}</p>
                                    </div>
                                    <button className="w-full mt-auto py-2 bg-gradient-to-r from-cbf-yellow to-cbf-yellow_bright text-cbf-dark font-bold rounded-lg hover:from-cbf-yellow_bright hover:to-cbf-yellow_dark transition-all text-sm">
                                        Ver Perfil
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Greatest XI Section */}
                <div className="my-20 p-8 rounded-2xl glass-effect border-2 border-cbf-yellow/30">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">
                        Os Maiores que Vestiram a Camisa
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center p-4 rounded-lg bg-cbf-blue/20 border border-cbf-yellow/20">
                            <Trophy className="w-12 h-12 text-cbf-yellow mx-auto mb-3" />
                            <h3 className="text-xl font-bold text-white mb-2">34 Copas Participadas</h3>
                            <p className="text-gray-300">Brasileiros em cada Copa do Mundo</p>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-cbf-green/20 border border-cbf-yellow/20">
                            <Star className="w-12 h-12 text-cbf-yellow mx-auto mb-3" />
                            <h3 className="text-xl font-bold text-white mb-2">5 Títulos Mundiais</h3>
                            <p className="text-gray-300">Maior vencedor de Copas do Mundo</p>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-cbf-blue/20 border border-cbf-yellow/20">
                            <Heart className="w-12 h-12 text-cbf-yellow mx-auto mb-3" />
                            <h3 className="text-xl font-bold text-white mb-2">Legado Eterno</h3>
                            <p className="text-gray-300">Inspiração para gerações futuras</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Legend Modal */}
            {selectedLegend && (
                <div
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto"
                    onClick={() => setSelectedLegend(null)}
                >
                    <div
                        className="bg-gradient-to-br from-cbf-dark_lighter to-cbf-dark glass-effect border border-cbf-yellow/50 rounded-3xl max-w-4xl w-full p-8 animate-slideUp my-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                            <div>
                                <div className="relative w-full h-96 rounded-2xl overflow-hidden mb-6 border-2 border-cbf-yellow/50">
                                    <img
                                        src={selectedLegend.image}
                                        alt={selectedLegend.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-cbf-dark via-transparent to-transparent"></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="p-4 bg-gradient-to-r from-cbf-yellow/20 to-cbf-yellow/10 rounded-lg border border-cbf-yellow/50">
                                        <p className="text-gray-400 text-sm font-semibold">POSIÇÃO</p>
                                        <p className="text-cbf-yellow font-bold text-lg">{selectedLegend.position}</p>
                                    </div>
                                    <div className="p-4 bg-gradient-to-r from-cbf-yellow_bright/20 to-cbf-yellow/10 rounded-lg border border-cbf-yellow/50">
                                        <p className="text-gray-400 text-sm font-semibold">ERA DE OURO</p>
                                        <p className="text-cbf-yellow_bright font-bold text-lg">{selectedLegend.era}</p>
                                    </div>
                                    <div className="p-4 bg-gradient-to-r from-cbf-blue_light/20 to-cbf-blue/10 rounded-lg border border-cbf-yellow/50">
                                        <p className="text-gray-400 text-sm font-semibold">ESTATÍSTICAS</p>
                                        <p className="text-white font-bold text-lg">{selectedLegend.stats}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-5xl font-extrabold text-cbf-yellow mb-2">{selectedLegend.name}</h2>
                                <p className="text-cbf-yellow_bright text-2xl font-bold mb-6 italic">{selectedLegend.nickname}</p>
                                <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                                    {selectedLegend.biography}
                                </p>
                                <div className="mb-6">
                                    <p className="text-cbf-yellow font-bold mb-4 text-lg">Conquistas Principais:</p>
                                    <ul className="space-y-3">
                                        {selectedLegend.achievements.map((achievement, idx) => (
                                            <li key={idx} className="flex items-center text-gray-300 text-base">
                                                <div className="w-2 h-2 bg-gradient-to-r from-cbf-yellow to-cbf-yellow_bright rounded-full mr-3"></div>
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => setSelectedLegend(null)}
                            className="w-full py-4 bg-gradient-to-r from-cbf-yellow to-cbf-yellow_bright text-cbf-dark font-bold rounded-lg hover:from-cbf-yellow_bright hover:to-cbf-yellow_dark transition-all text-lg"
                        >
                            Fechar Perfil
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Legends
