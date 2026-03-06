import Image from "next/image"
import { ChevronRight, Star } from "lucide-react"

const CATEGORIES = [
  { name: "Cachorro", icon: "🐶", color: "bg-blue-100 text-blue-800" },
  { name: "Gato", icon: "🐱", color: "bg-orange-100 text-orange-800" },
  { name: "Pássaro", icon: "🦜", color: "bg-green-100 text-green-800" },
  { name: "Peixe", icon: "🐠", color: "bg-cyan-100 text-cyan-800" },
  { name: "Outros", icon: "🐢", color: "bg-purple-100 text-purple-800" },
  { name: "Jardim", icon: "🏡", color: "bg-emerald-100 text-emerald-800" },
]

const PRODUCTS = [
  {
    id: 1,
    title: "Ração Premier Fórmula para Cães Adultos",
    price: 219.90,
    oldPrice: 249.90,
    rating: 4.8,
    reviews: 124,
    badge: "Mais Vendido",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    id: 2,
    title: "Brinquedo Arranhador para Gatos Torre",
    price: 89.90,
    oldPrice: null,
    rating: 4.5,
    reviews: 89,
    badge: "Lançamento",
    image: "https://images.unsplash.com/photo-1545249390-6bdfa2860c9f?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    id: 3,
    title: "Petisco Golden Cookie Sabor Carne",
    price: 15.90,
    oldPrice: 19.90,
    rating: 4.9,
    reviews: 342,
    badge: "Oferta",
    image: "https://images.unsplash.com/photo-1582798242133-cff113c19fce?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    id: 4,
    title: "Cama Nuvem Pet Super Macia Tam M",
    price: 129.90,
    oldPrice: 159.90,
    rating: 4.7,
    reviews: 215,
    badge: "",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=400&h=400",
  }
]

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16 lg:py-24 px-4 overflow-hidden relative">
        <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-black leading-tight">
              Tudo o que seu pet precisa, <span className="text-yellow-300">em um só lugar!</span>
            </h1>
            <p className="text-lg lg:text-xl text-blue-100 max-w-xl">
              As melhores marcas, o maior carinho e entrega rápida na sua porta.
              10% OFF na primeira compra pelo app.
            </p>
            <div className="pt-4">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-8 py-4 rounded-full text-lg transition-transform hover:scale-105 shadow-lg">
                Comprar Agora
              </button>
            </div>
          </div>
          <div className="flex-1 right-0 lg:-mr-20 w-full max-w-lg lg:max-w-none relative aspect-square lg:aspect-auto h-[300px] lg:h-[450px]">
            {/* Fallback image if unsplash fails */}
            <div className="absolute inset-0 bg-blue-400/20 rounded-full animate-pulse blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800&h=800"
              alt="Cachorro Feliz"
              className="object-cover w-full h-full rounded-[3rem] shadow-2xl rotate-3 relative z-10 border-8 border-white/10"
            />
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-4 max-w-6xl -mt-10 relative z-20">
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-gray-100 dark:border-slate-800 p-8">
          <h2 className="text-2xl font-black text-slate-800 dark:text-slate-100 mb-8 flex items-center justify-between">
            Navegue por categoria
            <a href="#" className="hidden md:flex text-sm font-bold text-blue-600 dark:text-blue-400 items-center hover:underline">
              Ver todas <ChevronRight className="w-4 h-4" />
            </a>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 md:grid-cols-6 gap-4">
            {CATEGORIES.map((cat) => (
              <div key={cat.name} className="flex flex-col items-center gap-3 cursor-pointer group">
                <div className={`w-20 h-20 rounded-full ${cat.color} flex items-center justify-center text-4xl shadow-sm transition-transform group-hover:scale-110 group-hover:shadow-md dark:bg-opacity-20`}>
                  {cat.icon}
                </div>
                <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="container mx-auto px-4 max-w-6xl mt-8">
        <h2 className="text-3xl font-black text-slate-800 dark:text-slate-100 mb-8">Produtos em Destaque</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {PRODUCTS.map((prod) => (
            <div key={prod.id} className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-shadow group flex flex-col h-full">
              <div className="relative aspect-square overflow-hidden bg-slate-50 dark:bg-slate-800">
                {prod.badge && (
                  <span className="absolute top-3 left-3 bg-yellow-400 text-slate-900 text-xs font-black px-2 py-1 rounded-md z-10 uppercase tracking-wide">
                    {prod.badge}
                  </span>
                )}
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="object-cover w-full h-full mix-blend-multiply dark:mix-blend-normal group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-1 mb-2 text-yellow-500 text-sm">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-bold text-slate-700 dark:text-slate-300">{prod.rating}</span>
                  <span className="text-slate-400 font-normal">({prod.reviews})</span>
                </div>
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-4 line-clamp-2 leading-tight">
                  {prod.title}
                </h3>
                <div className="mt-auto">
                  {prod.oldPrice && (
                    <p className="text-slate-400 line-through text-sm font-medium h-5">
                      R$ {prod.oldPrice.toFixed(2).replace('.', ',')}
                    </p>
                  )}
                  <p className="text-2xl font-black text-blue-700 dark:text-blue-400">
                    R$ {prod.price.toFixed(2).replace('.', ',')}
                  </p>
                </div>
                <button className="w-full mt-4 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 font-bold py-3 rounded-xl transition-colors">
                  Pronto para adicionar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Banner Assinatura Petz Style */}
      <section className="container mx-auto px-4 max-w-6xl mt-8">
        <div className="bg-yellow-400 rounded-3xl p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="space-y-4 text-slate-900 max-w-xl text-center md:text-left">
            <h2 className="text-3xl font-black">Assinatura Petz<span className="text-blue-700">.</span></h2>
            <p className="text-lg font-medium opacity-90">Receba os produtos do seu pet em casa, com desconto, sem esquecer de nada. Você agenda, a gente entrega!</p>
          </div>
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg whitespace-nowrap transition-colors">
            10% OFF em tudo
          </button>
        </div>
      </section>
    </div>
  )
}
