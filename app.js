
const { useState, useEffect } = React;

// --- Sub-componente de Ícones ---
const Icon = ({ name, size = 24, className = "" }) => {
    useEffect(() => { 
        if (window.lucide) window.lucide.createIcons(); 
    }, [name]);

    return <i data-lucide={name} className={className} style={{ width: size, height: size }}></i>;
};

// --- Dados da Apresentação ---
const SLIDES_DATA = [
    {
        type: 'cover',
        title: "Cláudia Heleno",
        subtitle: "Profissional de Tecnologia & Educadora",
        badge: "+33 Anos de Experiência em Sistemas",
        icon: "code"
    },
    {
        type: 'content',
        title: "Quem Sou Eu",
        content: (
            <div className="flex flex-col md:flex-row items-center gap-12 mt-6"> 
                
                {/* Avatar com IMAGEM */}
                <div className="w-56 h-56 rounded-full bg-blue-900 flex items-center justify-center border-4 border-blue-500 shadow-2xl overflow-hidden shrink-0">
                    <img
                        src="foto.jpg"
                        alt="Cláudia Heleno"
                        className="w-full h-full object-cover object-[center_35%] transition-transform duration-300"
                    />
                </div>

                {/* Bloco de Texto */}
                <div className="space-y-8 text-left flex-1">
                    <div>
                        <h3 className="text-4xl font-bold text-blue-400">
                            Cláudia Heleno, 50 anos
                        </h3>
                        <p className="text-2xl text-gray-300 mt-2">
                            Casada e apaixonada por tecnologia e educação.
                        </p>
                    </div>

                    <div className="bg-blue-900/30 p-8 rounded-2xl border border-blue-500/30 shadow-lg">
                        <p className="text-xl italic leading-relaxed text-blue-100">
                            "Minha missão é compartilhar conhecimento e inspirar a próxima geração de desenvolvedores."
                        </p>
                    </div>
                </div>
            </div>
        )
    },
    {
        type: 'timeline',
        title: "Trajetória Acadêmica",
        events: [
            { year: "1993", desc: "Técnico em Proc. de Dados" },
            { year: "1996", desc: "Ciência da Computação (USP)" },
            { year: "2023", desc: "ADS (UNOPAR)" },
            { year: "2024", desc: "Matemática (FAEP)" }
        ]
    },
    {
        type: 'timeline',
        title: "Especializações",
        events: [
            { year: "07/2025", desc: "Pós: Docência Superior" },
            { year: "12/2025", desc: "MBA: AI, Data Science & Big Data" }
        ]
    },
    {
        type: 'timeline',
        title: "Carreira: Início",
        events: [
            { year: "1993", desc: "Correios (Suporte)" },
            { year: "1994", desc: "Citibank (Sistemas)" },
            { year: "2000-07", desc: "UOL (Analista Sênior)" }
        ]
    },
    {
        type: 'content',
        title: "Carreira: Educação",
        content: (
            <div className="space-y-6 text-left">
                <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 flex items-center gap-4">
                    <Icon name="users" size={32} className="text-blue-400" />
                    <div>
                        <h4 className="font-bold text-xl">
                            Escola Profissionalizante (2008 - 2020)
                        </h4>
                        <p className="text-gray-400 text-sm">
                            Coordenadora, Professora e Product Owner
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-900/20 p-4 rounded-xl border-l-4 border-cyan-500 flex items-center gap-3">
                        <Icon name="book-open" size={24} className="text-cyan-400" />
                        <div>
                            <h5 className="font-bold text-sm">E.E. Dr. Jorge Coury</h5>
                            <p className="text-[10px] text-gray-400">
                                Desenv. de Sistemas (2024-Atual)
                            </p>
                        </div>
                    </div>

                    <div className="bg-blue-900/20 p-4 rounded-xl border-l-4 border-indigo-500 flex items-center gap-3">
                        <Icon name="graduation-cap" size={24} className="text-indigo-400" />
                        <div>
                            <h5 className="font-bold text-sm">Anhanguera</h5>
                            <p className="text-[10px] text-gray-400">
                                Ciência da Computação (Atual)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        type: 'content',
        title: "Empreendedorismo",
        content: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="bg-gray-800 p-6 rounded-xl border-b-4 border-green-500">
                    <Icon name="briefcase" className="text-green-500 mb-2" size={20} />
                    <h4 className="font-bold text-white text-lg">Capacitação</h4>
                    <p className="text-xs text-gray-400 italic">Desde 2007</p>
                    <p className="text-sm text-gray-300 mt-2">
                        Treinamentos Técnicos Corporativos.
                    </p>
                </div>

                <div className="bg-gray-800 p-6 rounded-xl border-b-4 border-blue-500">
                    <Icon name="terminal" className="text-blue-500 mb-2" size={20} />
                    <h4 className="font-bold text-white text-lg">Sistemas</h4>
                    <p className="text-xs text-gray-400 italic">Desde 2016</p>
                    <p className="text-sm text-gray-300 mt-2">
                        Criação de Sistemas Integrados.
                    </p>
                </div>
            </div>
        )
    },

    {
    type: 'content',
    title: "Contato & Redes",
    content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-8">

            <a
                href="https://www.linkedin.com/in/SEU-LINKEDIN"
                target="_blank"
                className="bg-blue-900/30 p-6 rounded-xl border border-blue-500/40 hover:scale-105 transition"
            >
                <Icon name="linkedin" size={36} className="text-blue-400 mx-auto mb-4" />
                <h4 className="font-bold text-lg">LinkedIn</h4>
                <p className="text-sm text-gray-400 mt-2">
                    Conexões profissionais
                </p>
            </a>

            <a
                href="https://www.instagram.com/SEU-INSTAGRAM"
                target="_blank"
                className="bg-pink-900/20 p-6 rounded-xl border border-pink-500/40 hover:scale-105 transition"
            >
                <Icon name="instagram" size={36} className="text-pink-400 mx-auto mb-4" />
                <h4 className="font-bold text-lg">Instagram</h4>
                <p className="text-sm text-gray-400 mt-2">
                    Conteúdo e bastidores
                </p>
            </a>

            <a
                href="mailto:SEUEMAIL@institucional.com"
                className="bg-green-900/20 p-6 rounded-xl border border-green-500/40 hover:scale-105 transition"
            >
                <Icon name="mail" size={36} className="text-green-400 mx-auto mb-4" />
                <h4 className="font-bold text-lg">E-mail</h4>
                <p className="text-sm text-gray-400 mt-2">
                    Contato institucional
                </p>
            </a>

        </div>
    )
},

{
    type: 'content',
    title: "Agora é com Vocês",
    content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-8">

            {/* Sobre você */}
            <div className="bg-emerald-900/20 p-8 rounded-xl border border-emerald-500/40 hover:scale-105 transition">
                <Icon name="user" size={36} className="text-emerald-400 mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">
                    Quem é você?
                </h4>
                <p className="text-sm text-gray-400">
                    Fale um pouco sobre você, seus interesses e expectativas.
                </p>
            </div>

            {/* Curso */}
            <div className="bg-blue-900/20 p-8 rounded-xl border border-blue-500/40 hover:scale-105 transition">
                <Icon name="book-open" size={36} className="text-blue-400 mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">
                    Qual é o seu curso?
                </h4>
                <p className="text-sm text-gray-400">
                    Conte qual curso você está fazendo e por que escolheu essa área.
                </p>
            </div>

            {/* Futuro */}
            <div className="bg-purple-900/20 p-8 rounded-xl border border-purple-500/40 hover:scale-105 transition">
                <Icon name="trending-up" size={36} className="text-purple-400 mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">
                    E depois da formação?
                </h4>
                <p className="text-sm text-gray-400">
                    O que você pretende fazer após concluir sua formação?
                </p>
            </div>

        </div>
    )
},



];




// --- Componente Principal ---
const App = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES_DATA.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES_DATA.length) % SLIDES_DATA.length);

    const slide = SLIDES_DATA[currentSlide];

    return (
        <div className="min-h-screen flex flex-col relative animate-fade-in text-white">
            {/* Header */}
            <div className="p-6 flex justify-between items-center border-b border-white/5">
                <div className="text-blue-500 font-black uppercase tracking-widest">
                    CH | TECH
                </div>
                <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
                    SLIDE {currentSlide + 1} / {SLIDES_DATA.length}
                </div>
            </div>

            {/* Conteúdo */}
            <div className="flex-1 flex items-center justify-center p-8">
                <div className="max-w-4xl w-full text-center">
                    {slide.type === 'cover' && (
                        <div className="space-y-6">
                            <Icon name={slide.icon} size={60} className="text-blue-400 mx-auto" />
                            <h1 className="text-6xl md:text-8xl font-black tracking-widest">
                                {slide.title}
                            </h1>
                            <p className="text-xl text-gray-400">
                                {slide.subtitle}
                            </p>
                            <div className="inline-block mt-4 px-8 py-2 bg-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                                {slide.badge}
                            </div>
                        </div>
                    )}

                    {slide.type === 'content' && (
                        <div className="space-y-8 text-left">
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-widest border-l-4 border-blue-600 pl-4">
                                {slide.title}
                            </h2>
                            {slide.content}
                        </div>
                    )}

                    {slide.type === 'timeline' && (
                        <div className="space-y-16 text-left">
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-widest border-l-4 border-blue-600 pl-4">
                                {slide.title}
                            </h2>
                            <div className="relative pt-16">
                                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-800"></div>
                                <div className="flex justify-between items-start relative px-2">
                                    {slide.events.map((e, i) => (
                                        <div key={i} className="flex flex-col items-center flex-1">
                                            <div className="bg-gray-800 text-[12px] font-bold text-blue-400 px-2 py-1 rounded mb-4">
                                                {e.year}
                                            </div>
                                            <div className="w-4 h-4 rounded-full bg-blue-500 z-10 border-4 border-[#050810]"></div>
                                            <div className="mt-4 text-[12px] text-gray-400 text-center font-bold uppercase max-w-[80px]">
                                                {e.desc}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Navegação */}
            <div className="p-8 flex justify-between items-center">
                <button onClick={prevSlide} className="text-gray-500 hover:text-white flex items-center gap-2">
                    <Icon name="chevron-left" size={16}/> 
                    <span className="text-[10px] font-bold uppercase">Voltar</span>
                </button>

                <div className="flex gap-2">
                    {SLIDES_DATA.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1 rounded-full transition-all ${
                                i === currentSlide ? 'w-8 bg-blue-500' : 'w-2 bg-gray-800'
                            }`}
                        />
                    ))}
                </div>

                <button onClick={nextSlide} className="text-blue-500 hover:text-white flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase">Próximo</span> 
                    <Icon name="chevron-right" size={16}/>
                </button>
            </div>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);