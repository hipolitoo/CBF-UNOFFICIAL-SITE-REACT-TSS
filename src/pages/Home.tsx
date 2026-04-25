import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Trophy, Users, Zap } from 'lucide-react'

const Home: React.FC = () => {
  const features = [
    {
      icon: Trophy,
      title: 'Conquistas',
      description: 'Explore os maiores títulos da história do futebol brasileiro',
      color: 'from-cbf-yellow to-cbf-yellow_bright',
    },
    {
      icon: Users,
      title: 'Ídolos',
      description: 'Conheça os maiores talentos que vestiram a camisa',
      color: 'from-cbf-yellow_bright to-cbf-yellow_dark',
    },
    {
      icon: Zap,
      title: 'Histórias',
      description: 'Reviva os momentos que definiram o futebol nacional',
      color: 'from-cbf-yellow_dark to-cbf-yellow',
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 pb-10 flex items-center justify-center px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 right-10 w-96 h-96 bg-cbf-yellow/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-cbf-yellow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cbf-blue_light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="animate-fadeInUp">
              <div className="inline-block mb-6 px-6 py-3 rounded-full glass-effect-yellow border-cbf-yellow/50 border-2">
                <span className="text-cbf-yellow text-sm font-bold uppercase tracking-wider">⚽ O Melhor Futebol do Mundo</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
                <span className="gradient-text">Futebol Brasileiro</span>
                <br />
                <span className="text-white">Em Toda Sua Glória</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Descubra a história, os ídolos e as conquistas que tornaram o Brasil a maior potência do futebol mundial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/stories"
                  className="group px-8 py-4 bg-gradient-to-r from-cbf-yellow to-cbf-yellow_bright text-cbf-dark font-bold rounded-xl button-glow flex items-center justify-center space-x-2 hover:from-cbf-yellow_bright hover:to-cbf-yellow_dark w-full sm:w-auto text-lg"
                >
                  <span>Explorar</span>
                  <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/legends"
                  className="px-8 py-4 border-2 border-cbf-yellow text-cbf-yellow font-bold rounded-xl button-glow hover:bg-cbf-yellow/10 flex items-center justify-center space-x-2 w-full sm:w-auto text-lg transition-colors"
                >
                  <span>Conhecer Ídolos</span>
                  <ChevronRight size={22} />
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="animate-slideInRight hidden lg:flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-cbf-yellow/30 to-cbf-yellow_bright/30 rounded-3xl blur-3xl"></div>
                <div className="relative neon-border rounded-3xl p-1 h-96 flex items-center justify-center overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-cbf-yellow/20 to-transparent"></div>
                  <img
                    src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=600&fit=crop"
                    alt="Seleção Brasileira"
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-cbf-dark via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
              <span className="gradient-text">Explore a História</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Uma experiência interativa completa sobre o futebol brasileiro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="group card-hover p-8 rounded-2xl glass-effect border-cbf-yellow/30 border hover:border-cbf-yellow/70 transition-all animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`mb-6 w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform group-hover:shadow-xl group-hover:shadow-cbf-yellow/30`}>
                    <Icon size={40} className="text-cbf-dark" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  <div className="mt-6 pt-6 border-t border-cbf-yellow/20 flex items-center text-cbf-yellow font-semibold group-hover:translate-x-2 transition-transform">
                    <ChevronRight size={20} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '5', label: 'Copas do Mundo', icon: '🏆' },
              { value: '9', label: 'Taças América', icon: '🥇' },
              { value: '∞', label: 'Talentos Imortais', icon: '⭐' },
              { value: '1M+', label: 'Fãs Apaixonados', icon: '❤️' },
            ].map((stat, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl glass-effect-yellow border-2 border-cbf-yellow/30 hover:border-cbf-yellow/70 transition-all transform hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">{stat.icon}</div>
                <div className="text-4xl font-extrabold text-cbf-yellow mb-2">{stat.value}</div>
                <p className="text-gray-300 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl p-12 md:p-16 glass-effect border-2 border-cbf-yellow/50 group">
            <div className="absolute inset-0 bg-gradient-to-r from-cbf-yellow/20 to-cbf-yellow_bright/20"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
                <span className="gradient-text">O Legado Continua</span>
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Viaje através das eras douradas, dos ídolos inesquecíveis e dos momentos que moldaram a história do futebol universal.
              </p>
              <Link
                to="/achievements"
                className="inline-block px-12 py-4 bg-gradient-to-r from-cbf-yellow to-cbf-yellow_bright text-cbf-dark font-bold rounded-xl button-glow hover:from-cbf-yellow_bright hover:to-cbf-yellow_dark text-lg"
              >
                Descobrir Conquistas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
