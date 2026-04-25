import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

interface GalleryItem {
  id: number
  title: string
  category: string
  description: string
  image: string
  year: string
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const gallery: GalleryItem[] = [
    {
      id: 1,
      title: 'Copa do Mundo 1970 - O Auge',
      category: 'copas',
      description: 'A maior seleção de todos os tempos em seu esplendor',
      image: '🏆',
      year: '1970'
    },
    {
      id: 2,
      title: 'Pelé e Seus Records',
      category: 'idolos',
      description: 'O Rei do Futebol em ação durante uma partida histórica',
      image: '👑',
      year: '1968'
    },
    {
      id: 3,
      title: 'Tricampeonato 1970',
      category: 'copas',
      description: 'Celebração do tricampeonato que marcou gerações',
      image: '🎊',
      year: '1970'
    },
    {
      id: 4,
      title: 'Ronaldinho Gaúcho - Magia em Ação',
      category: 'idolos',
      description: 'O mágico do futebol brasileiro em seu melhor momento',
      image: '✨',
      year: '2005'
    },
    {
      id: 5,
      title: 'Copa 1994 - Pentacampeonato',
      category: 'copas',
      description: 'O Brasil conquista seu quinto título mundial',
      image: '🥇',
      year: '1994'
    },
    {
      id: 6,
      title: 'Ronaldo - O Fenômeno',
      category: 'idolos',
      description: 'Ronaldo em sua melhor forma atletica e técnica',
      image: '🔥',
      year: '2002'
    },
    {
      id: 7,
      title: 'Taças da América',
      category: 'conquistas',
      description: 'Títulos que demonstram a hegemonia brasileira',
      image: '🏅',
      year: '2019'
    },
    {
      id: 8,
      title: 'Estádio Lleno de Cores',
      category: 'cultura',
      description: 'A paixão dos torcedores em cores vibrantes',
      image: '🌈',
      year: '2022'
    },
    {
      id: 9,
      title: 'Seleção em Treino',
      category: 'treinos',
      description: 'Preparação intensa para grandes competições',
      image: '⚽',
      year: '2023'
    },
    {
      id: 10,
      title: 'Neymar - Futuro Brilhante',
      category: 'idolos',
      description: 'O talento que leva o futebol brasileiro ao mundo',
      image: '⭐',
      year: '2016'
    },
    {
      id: 11,
      title: 'Garrincha - O Dribista',
      category: 'idolos',
      description: 'A técnica e habilidade que definem uma era',
      image: '🪶',
      year: '1962'
    },
    {
      id: 12,
      title: 'Campeões Olímpicos',
      category: 'conquistas',
      description: 'Ouro nos Jogos Olímpicos representando a nação',
      image: '🎖️',
      year: '2016'
    }
  ]

  const categories = [
    { id: 'all', name: 'Todas' },
    { id: 'copas', name: 'Copas do Mundo' },
    { id: 'idolos', name: 'Ídolos' },
    { id: 'conquistas', name: 'Conquistas' },
    { id: 'cultura', name: 'Cultura' },
    { id: 'treinos', name: 'Treinos' }
  ]

  const filteredGallery = selectedCategory === 'all'
    ? gallery
    : gallery.filter(item => item.category === selectedCategory)

  const currentIndex = selectedImage
    ? filteredGallery.findIndex(item => item.id === selectedImage.id)
    : -1

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredGallery[currentIndex - 1])
    }
  }

  const handleNext = () => {
    if (currentIndex < filteredGallery.length - 1) {
      setSelectedImage(filteredGallery[currentIndex + 1])
    }
  }

  return (
    <div className="w-full pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
            Galeria Interativa
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore uma coleção visual dos momentos mais importantes do futebol brasileiro
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-cbf-yellow to-cbf-green text-cbf-dark'
                  : 'bg-cbf-blue/40 text-white hover:bg-cbf-blue/60 border border-cbf-yellow/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group card-hover cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl glass-effect border border-cbf-yellow/20 hover:border-cbf-yellow/50 aspect-square flex items-center justify-center transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-cbf-yellow/10 to-cbf-green/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 text-center">
                  <div className="text-9xl mb-4">{item.image}</div>
                  <h3 className="text-lg font-bold text-white px-4 line-clamp-2">{item.title}</h3>
                  <p className="text-cbf-yellow text-sm mt-2">{item.year}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <ChevronRight size={48} className="text-cbf-yellow" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 rounded-2xl glass-effect border border-cbf-yellow/20 text-center">
            <div className="text-5xl font-bold text-cbf-yellow mb-2">{gallery.length}</div>
            <p className="text-gray-300">Momentos Capturados</p>
          </div>
          <div className="p-8 rounded-2xl glass-effect border border-cbf-yellow/20 text-center">
            <div className="text-5xl font-bold text-cbf-green mb-2">100+</div>
            <p className="text-gray-300">Anos de História</p>
          </div>
          <div className="p-8 rounded-2xl glass-effect border border-cbf-yellow/20 text-center">
            <div className="text-5xl font-bold text-cbf-yellow mb-2">∞</div>
            <p className="text-gray-300">Memórias Eternas</p>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 md:top-4 md:-right-10 right-4 z-10 text-white hover:text-cbf-yellow transition-colors"
            >
              <X size={32} />
            </button>

            {/* Main Content */}
            <div className="bg-gradient-to-br from-cbf-blue/40 to-cbf-green/40 glass-effect border border-cbf-yellow/30 rounded-3xl p-8 animate-slideUp">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                {/* Image */}
                <div className="flex items-center justify-center">
                  <div className="text-9xl">{selectedImage.image}</div>
                </div>

                {/* Details */}
                <div>
                  <p className="text-cbf-yellow font-semibold mb-2 uppercase text-sm">
                    {selectedImage.category}
                  </p>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {selectedImage.title}
                  </h2>
                  <p className="text-gray-200 leading-relaxed mb-6">
                    {selectedImage.description}
                  </p>
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-cbf-yellow/10 border border-cbf-yellow/30">
                    <span className="text-cbf-yellow font-semibold">Ano:</span>
                    <span className="text-white font-bold text-lg">{selectedImage.year}</span>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={handlePrevious}
                  disabled={currentIndex === 0}
                  className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-cbf-blue/40 text-white hover:bg-cbf-blue/60 disabled:opacity-50 disabled:cursor-not-allowed transition-all border border-cbf-yellow/20"
                >
                  <ChevronLeft size={20} />
                  <span>Anterior</span>
                </button>

                <div className="text-center">
                  <p className="text-gray-300">
                    <span className="text-cbf-yellow font-bold">{currentIndex + 1}</span>
                    {' '}de{' '}
                    <span className="text-cbf-yellow font-bold">{filteredGallery.length}</span>
                  </p>
                </div>

                <button
                  onClick={handleNext}
                  disabled={currentIndex === filteredGallery.length - 1}
                  className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-cbf-green/40 text-white hover:bg-cbf-green/60 disabled:opacity-50 disabled:cursor-not-allowed transition-all border border-cbf-yellow/20"
                >
                  <span>Próxima</span>
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="w-full mt-6 py-3 bg-cbf-yellow text-cbf-dark font-bold rounded-lg hover:bg-cbf-green transition-colors"
              >
                Fechar Galeria
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
