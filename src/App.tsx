import { motion, AnimatePresence } from 'framer-motion';
import { Star, MapPin, Clock, Globe, ChevronDown, Menu, X, Instagram, Facebook, Heart, Languages } from 'lucide-react';
import { useState, useEffect } from 'react';

type Language = 'fr' | 'en' | 'ja' | 'zh';

const translations = {
  fr: {
    home: 'Accueil',
    menu: 'Menu',
    about: 'À propos',
    reviews: 'Avis',
    contact: 'Contact',
    heroTitle: '久一',
    heroSubtitle: 'HISASHII RAMEN',
    heroTagline: 'L\'authentique Ramen japonais au cœur de Rouen',
    viewMenu: 'Voir le menu',
    findUs: 'Nous trouver',
    ourMenu: 'Notre Menu',
    menuTagline: 'Saveurs japonaises authentiques, préparées avec passion',
    ramenTitle: 'Ramen ラーメン',
    entreeTitle: 'Entrée 前菜',
    donburiTitle: 'Donburi 丼',
    dessertTitle: 'Desserts デザート',
    drinksTitle: 'Drinks 飲み物',
    aboutTitle: 'À propos de nous',
    ourStory: 'Notre Histoire',
    story1: 'Hisashii Ramen apporte le goût authentique du Japon au cœur de Rouen. Notre nom "Hisashii" (久し) signifie "longue période" ou "nostalgique" en japonais, reflétant notre engagement envers les techniques traditionnelles de fabrication du ramen transmises de génération en génération.',
    story2: 'Chaque bol de ramen est préparé avec soin, avec des ingrédients frais et des bouillons riches mijotés pendant des heures pour obtenir une profondeur de saveur parfaite. Notre intérieur vous transporte au Japon avec des décorations traditionnelles, des lanternes en papier et une atmosphère chaleureuse et accueillante.',
    story3: 'Que vous soyez un amateur de ramen ou que vous goûtiez pour la première fois, nous vous invitons à découvrir l\'art du ramen japonais chez Hisashii.',
    madeWithLove: 'Fait avec Amour',
    madeWithLoveDesc: 'Chaque plat est préparé avec passion et attention aux détails, garantissant une expérience culinaire japonaise authentique.',
    qualityIngredients: 'Ingrédients de Qualité',
    qualityIngredientsDesc: 'Nous sélectionnons les meilleurs ingrédients, des nouilles fraîches aux pièces de viande de première qualité, pour créer le bol de ramen parfait.',
    traditionalMethods: 'Méthodes Traditionnelles',
    traditionalMethodsDesc: 'Nos bouillons mijotent pendant des heures selon les techniques traditionnelles japonaises, créant des bases riches et savoureuses pour nos ramen.',
    reviewsTitle: 'Ce que disent nos clients',
    happyCustomers: 'Et 559 autres clients satisfaits !',
    visitUs: 'Visitez-nous',
    address: 'Adresse',
    openingHours: 'Horaires d\'ouverture',
    openToday: 'Ouvert aujourd\'hui jusqu\'à 22h30',
    walkIns: 'Sans réservation, accueil au fil de l\'eau',
    priceRange: 'Gamme de prix',
    perPerson: 'Par personne',
    reportedBy: 'Signalé par 361 personnes',
    serviceOptions: 'Options de service',
    atmosphere: 'Atmosphère',
    goodFor: 'Idéal pour',
    casual: 'Décontracté',
    cozy: 'Comfortable',
    japaneseThemed: 'Thème japonais',
    groups: 'Groupes',
    quickBite: 'Repas rapide',
    dateNight: 'Soirée en amoureux',
    getDirections: 'Obtenir l\'itinéraire',
    footerTagline: 'L\'authentique ramen japonais au cœur de Rouen. Découvrez le goût du Japon.',
    arigato: 'Arigato gozaimasu! ありがとうございます!',
    special: 'Spécial',
    spicy: 'Épicé',
    veggie: 'Végé',
  },
  en: {
    home: 'Home',
    menu: 'Menu',
    about: 'About',
    reviews: 'Reviews',
    contact: 'Contact',
    heroTitle: '久一',
    heroSubtitle: 'HISASHII RAMEN',
    heroTagline: 'Authentic Japanese Ramen in the Heart of Rouen',
    viewMenu: 'View Menu',
    findUs: 'Find Us',
    ourMenu: 'Our Menu',
    menuTagline: 'Authentic Japanese flavors, crafted with passion',
    ramenTitle: 'Ramen ラーメン',
    entreeTitle: 'Entrée 前菜',
    donburiTitle: 'Donburi 丼',
    dessertTitle: 'Desserts デザート',
    drinksTitle: 'Drinks 飲み物',
    aboutTitle: 'About Us',
    ourStory: 'Our Story',
    story1: 'Hisashii Ramen brings the authentic taste of Japan to the heart of Rouen. Our name "Hisashii" (久し) means "long time" or "nostalgic" in Japanese, reflecting our commitment to traditional ramen-making techniques passed down through generations.',
    story2: 'Every bowl of ramen is crafted with care, using fresh ingredients and rich broths simmered for hours to achieve the perfect depth of flavor. Our interior transports you to Japan with traditional decorations, paper lanterns, and a warm, welcoming atmosphere.',
    story3: 'Whether you\'re a ramen enthusiast or trying it for the first time, we invite you to experience the art of Japanese ramen at Hisashii.',
    madeWithLove: 'Made with Love',
    madeWithLoveDesc: 'Every dish is prepared with passion and attention to detail, ensuring an authentic Japanese dining experience.',
    qualityIngredients: 'Quality Ingredients',
    qualityIngredientsDesc: 'We source the finest ingredients, from fresh noodles to premium cuts of meat, to create the perfect bowl of ramen.',
    traditionalMethods: 'Traditional Methods',
    traditionalMethodsDesc: 'Our broths are simmered for hours using traditional Japanese techniques, creating rich, flavorful bases for our ramen.',
    reviewsTitle: 'What Our Customers Say',
    happyCustomers: 'And 559 more happy customers!',
    visitUs: 'Visit Us',
    address: 'Address',
    openingHours: 'Opening Hours',
    openToday: 'Open today until 10:30 PM',
    walkIns: 'Walk-ins welcome, no reservations required',
    priceRange: 'Price Range',
    perPerson: 'Per person',
    reportedBy: 'Reported by 361 people',
    serviceOptions: 'Service Options',
    atmosphere: 'Atmosphere',
    goodFor: 'Good for',
    casual: 'Casual',
    cozy: 'Cozy',
    japaneseThemed: 'Japanese-themed',
    groups: 'Groups',
    quickBite: 'Quick bite',
    dateNight: 'Date night',
    getDirections: 'Get Directions',
    footerTagline: 'Authentic Japanese ramen in the heart of Rouen. Experience the taste of Japan.',
    arigato: 'Arigato gozaimasu! ありがとうございます!',
    special: 'Special',
    spicy: 'Spicy',
    veggie: 'Veggie',
  },
  ja: {
    home: 'ホーム',
    menu: 'メニュー',
    about: '当店について',
    reviews: 'レビュー',
    contact: 'アクセス',
    heroTitle: '久一',
    heroSubtitle: 'HISASHII RAMEN',
    heroTagline: 'ルーアンの中心で味わう本場の日本のラーメン',
    viewMenu: 'メニューを見る',
    findUs: 'アクセス',
    ourMenu: 'メニュー',
    menuTagline: '情熱を込めて作られた本場の日本の味',
    ramenTitle: 'ラーメン',
    entreeTitle: '前菜',
    donburiTitle: '丼',
    dessertTitle: 'デザート',
    drinksTitle: '飲み物',
    aboutTitle: '久一ラーメンについて',
    ourStory: '私たちの物語',
    story1: '久一ラーメンは、ルーアンの中心部に本場日本の味をお届けします。店名の「久し」は、日本語で「長い時間」や「懐かしさ」を意味し、世代を超えて受け継がれてきた伝統的なラーメン作りの技術へのこだわりを反映しています。',
    story2: '一杯一杯、厳選された新鮮な食材を使用し、何時間も煮込んだ濃厚なスープで、完璧な旨味を引き出しています。店内は伝統的な装飾や提灯で飾られ、日本にいるような温かく居心地の良い雰囲気を楽しめます。',
    story3: 'ラーメン愛好家の方も、初めての方も、久一で日本のラーメンの芸術をぜひ体験してください。',
    madeWithLove: '真心を込めて',
    madeWithLoveDesc: 'すべての料理は情熱と細部へのこだわりを持って準備され、本格的な日本食体験を保証します。',
    qualityIngredients: '厳選された食材',
    qualityIngredientsDesc: '新鮮な麺から最高級の肉まで、最高の食材を調達し、完璧なラーメンを作り上げます。',
    traditionalMethods: '伝統的な製法',
    traditionalMethodsDesc: 'スープは伝統的な日本の技法を用いて何時間も煮込み、豊かで味わい深いベースを作り出します。',
    reviewsTitle: 'お客様の声',
    happyCustomers: '他にも559名以上のお客様にご満足いただいています！',
    visitUs: 'ご来店をお待ちしております',
    address: '住所',
    openingHours: '営業時間',
    openToday: '本日は22:30まで営業',
    walkIns: '予約不要、直接ご来店ください',
    priceRange: '価格帯',
    perPerson: 'お一人様',
    reportedBy: '361名の報告に基づく',
    serviceOptions: 'サービス',
    atmosphere: '雰囲気',
    goodFor: 'おすすめ',
    casual: 'カジュアル',
    cozy: '居心地が良い',
    japaneseThemed: '和風',
    groups: 'グループ',
    quickBite: 'クイックランチ',
    dateNight: 'デート',
    getDirections: 'ルートを検索',
    footerTagline: 'ルーアン中心部にある本格的な日本のラーメン。日本の味を体験してください。',
    arigato: 'ありがとうございます！',
    special: 'スペシャル',
    spicy: '辛口',
    veggie: 'ベジ',
  },
  zh: {
    home: '首页',
    menu: '菜单',
    about: '关于我们',
    reviews: '评价',
    contact: '联系我们',
    heroTitle: '久一',
    heroSubtitle: 'HISASHII RAMEN',
    heroTagline: '鲁昂市中心的正宗日本拉面',
    viewMenu: '查看菜单',
    findUs: '寻找我们',
    ourMenu: '我们的菜单',
    menuTagline: '倾情打造的正宗日本风味',
    ramenTitle: '拉面 ラーメン',
    entreeTitle: '前菜 Entrée',
    donburiTitle: '盖饭 Donburi',
    dessertTitle: '甜点 Desserts',
    drinksTitle: '饮料 Drinks',
    aboutTitle: '关于久一',
    ourStory: '品牌故事',
    story1: '久一拉面将正宗的日本味道带到了鲁昂的心脏。我们的店名“久一”意为长久，体现了我们对代代相传的传统拉面制作工艺的承诺。',
    story2: '每一碗拉面都是用心制作的，使用新鲜的食材和熬制数小时的浓郁高汤，以达到完美的风味深度。我们的内部装饰充满了传统元素、纸灯笼，营造出温馨、欢迎的氛围。',
    story3: '无论您是拉面爱好者还是第一次尝试，我们都邀请您在久一体验日本拉面的艺术。',
    madeWithLove: '用心制作',
    madeWithLoveDesc: '每一道菜都充满了热情和对细节的关注，确保正宗的日本餐饮体验。',
    qualityIngredients: '优质食材',
    qualityIngredientsDesc: '我们采购最好的食材，从新鲜面条到优质肉类，打造完美的拉面。',
    traditionalMethods: '传统方法',
    traditionalMethodsDesc: '我们的汤底采用传统日本工艺熬制数小时，为拉面打造丰富可口的底蕴。',
    reviewsTitle: '客户评价',
    happyCustomers: '还有559位满意的客户！',
    visitUs: '欢迎光临',
    address: '地址',
    openingHours: '营业时间',
    openToday: '今日营业至晚上10:30',
    walkIns: '无需预约，欢迎光临',
    priceRange: '价格范围',
    perPerson: '人均',
    reportedBy: '361人反馈',
    serviceOptions: '服务选项',
    atmosphere: '氛围',
    goodFor: '适用场景',
    casual: '休闲',
    cozy: '舒适',
    japaneseThemed: '日式风格',
    groups: '团队聚餐',
    quickBite: '速食',
    dateNight: '约会之夜',
    getDirections: '获取路线',
    footerTagline: '鲁昂市中心的正宗日本拉面。体验日本的味道。',
    arigato: '多谢！ Arigato gozaimasu!',
    special: '特制',
    spicy: '香辣',
    veggie: '素食',
  },
};

const menuData = {
  entree: [
    { name: 'Edamame', desc: 'Fèves de soja en cosse', price: 5.0, icon: '🫛' },
    { name: 'Tori Karaage', desc: 'Poulet frit mariné dans notre sauce maison, accompagné sauce mayo-spicy', price: 6.5, icon: '🍗' },
    { name: 'Takoyaki', desc: 'Boulettes de pâtes frites avec poulpes, sauce takoyaki, mayonnaise japonaise, bonite séchées', price: 6.5, icon: '' },
    { name: 'Gyoza', desc: 'Raviolis japonais au poulet et légumes, grillés', price: 6.0, icon: '🥟' },
    { name: 'Bao bun poulet', desc: 'Petit pain blanc vapeur poulet, salade, mayonnaise', price: 3.5, icon: '' },
    { name: 'Eby furai', desc: 'Crevettes pannées à la façon japonaise, légère et croustillante', price: 6.0, icon: '🍤' },
  ],
  ramen: [
    { name: 'KARAKA', desc: 'Bouillon de TONKOTSU (porc), nouilles fraîches, 2 chashu de porc, porc haché aux épices, pousse de soja et ciboule', price: 13.5, icon: '🍜', spicy: true },
    { name: 'KARAKA Version spéciale', desc: 'KARAKA + 2 chashu de porc + œuf ni-tamago + 2 feuilles d\'algue nori', price: 17.5, icon: '🍜', special: true },
    { name: 'WONTON', desc: 'Bouillon de TONKOTSU (porc), nouilles fraîches, 2 chashu de porc, 2 wonton crevette/poulet, ciboule et blanc de poireau', price: 14.0, icon: '🥟' },
    { name: 'WONTON Version spéciale', desc: 'WONTON + 2 chashu de porc + œuf ni-tamago + 2 feuilles d\'algue nori', price: 18.0, icon: '🥟', special: true },
    { name: 'MISO', desc: 'Bouillon de TONKOTSU (porc), nouilles fraîches, 2 chashu de porc, sauce miso, lamelles de tofu frit, mâche, pousses de soja, et ciboule', price: 13.5, icon: '🍲' },
    { name: 'MISO Version spéciale', desc: 'MISO + 2 chashu de porc + œuf ni-tamago + 2 feuilles d\'algue nori', price: 17.5, icon: '🍲', special: true },
    { name: 'TORI SHOYU', desc: 'Bouillon de poulet fermier PAITAN, nouilles fraîches, 2 chashu de poulet, menma, oignon frit et ciboule', price: 13.0, icon: '🍜' },
    { name: 'TORI SHOYU Version spéciale', desc: 'TORI SHOYU + 2 chashu de poulet + œuf ni-tamago + 2 tomates cocktail rôties + 2 feuilles d\'algue nori', price: 17.0, icon: '', special: true },
    { name: 'TANTANMEN', desc: 'Bouillon de poulet fermier PAITAN, pâte de cacahuète, huile sésame, nouilles fraîches, 2 chashu de poulet, menma, oignon frit, pousse de soja, ciboule', price: 13.5, icon: '🍜', spicy: true },
    { name: 'TANTANMEN Version spéciale', desc: 'TANTANMEN + 2 chashu de poulet + œuf ni-tamago + 2 tomates cocktail rôties + 2 feuilles d\'algue nori', price: 17.5, icon: '', special: true },
    { name: 'VEGGIE', desc: 'Bouillon de légumes, nouilles fraîches de blé végétariennes, 2 tranches de tofu mijoté, cébette, mâche, mayonnaise mariné', price: 13.0, icon: '🥬', veggie: true },
    { name: 'VEGGIE Version spéciale', desc: 'VEGGIE + 2 tranches de tofu mijoté + œuf ni-tamago + 2 tomates cocktail rôties + 2 feuilles d\'algue nori', price: 17.0, icon: '', special: true, veggie: true },
  ],
  donburi: [
    { name: 'Tori katsu', desc: 'Poulet pané avec du panko, servi avec riz blanc, mâche et sauce tonkatsu', price: 13.0, icon: '🍚' },
    { name: 'Tori katsudon', desc: 'Poulet pané cuit dans un œuf battu, oignon, recouvrant une couche de riz chaud', price: 13.0, icon: '🍛' },
    { name: 'Beef curry', desc: 'Boeuf au curry, avec pommes de terre, carottes, riz blanc', price: 13.0, icon: '' },
  ],
  desserts: [
    { name: 'Cheesecake au yuzu', desc: '', price: 6, icon: '🍰' },
    { name: 'Mochi glacé 2 pièces', desc: 'Vanille, matcha (thé vert), chocolat, yuzu, lychee', price: 6, icon: '🍡' },
    { name: 'Glace japonais 2 boules', desc: 'Vanille, matcha (thé vert), sesame noir', price: 5, icon: '🍨' },
    { name: 'Daifuku Matcha', desc: 'Mochi crémeux au thé vert', price: 4, icon: '🍵' },
    { name: 'Daifuku Sesame noir', desc: 'Mochi crémeux au sesame noir', price: 4, icon: '⚫' },
  ],
  drinks: [
    { name: 'Ramune limonade japonaise 20cl', desc: 'Nature, lychee, melon, yuzu, pastèque ou fraise', price: 4.5 },
    { name: 'Coca cola 33cl', desc: 'original, zéro ou cherry', price: 3.5 },
    { name: 'Umeshu 10cl', desc: 'Vin aux abricot du Japon, sucré et fruité', price: 7 },
    { name: 'Yuzu shu au saké 5cl', desc: 'Mélange de saké ginjo et de yuzu japonais', price: 7 },
    { name: 'Saké Daiginjo 10 cl (verre)', desc: 'Atelier du saké - Notes florales, généreux et parfumé', price: 8 },
    { name: 'Saké Daiginjo 50cl (bouteille)', desc: '', price: 32 },
  ]
};

const reviews = [
  { name: 'Kitty Brighton', rating: 5, text: 'We had such a wonderful experience here! The food was amazing – fresh, delicious, and perfectly cooked.', date: '6 months ago' },
  { name: 'Alara Civelek', rating: 5, text: 'The interior is so cute. The chicken karaage was DELICIOUS, the gyozas were amazing and the japanese wine is so good!', date: '11 months ago' },
  { name: 'Regina Reynolds', rating: 5, text: 'The atmosphere of the restaurant is really nice. The food was delicious! I got the Umakara-men special and the bao bun poulet.', date: '11 months ago' },
  { name: 'Clement Leung', rating: 5, text: 'Probably the coolest ramen place I have ever been to. The decorations are beautiful and make you feel transported straight into Japan.', date: '10 months ago' },
];

const ToriiGate = () => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <defs>
      <linearGradient id="toriiGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#dc2626', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#991b1b', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect x="20" y="60" width="15" height="90" fill="url(#toriiGradient)" rx="2" />
    <rect x="165" y="60" width="15" height="90" fill="url(#toriiGradient)" rx="2" />
    <rect x="10" y="40" width="180" height="12" fill="url(#toriiGradient)" rx="6" />
    <rect x="5" y="20" width="190" height="15" fill="url(#toriiGradient)" rx="7" />
    <rect x="50" y="5" width="100" height="8" fill="url(#toriiGradient)" rx="4" />
  </svg>
);

const CherryBlossom = ({ style }: { style: React.CSSProperties }) => (
  <motion.div
    className="absolute text-pink-300 text-2xl pointer-events-none"
    style={style}
    animate={{
      y: [0, 100, 200],
      x: [0, Math.random() * 100 - 50, Math.random() * 150 - 75],
      rotate: [0, 180, 360],
      opacity: [1, 0.8, 0],
    }}
    transition={{
      duration: 8 + Math.random() * 4,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    🌸
  </motion.div>
);

export function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [lang, setLang] = useState<Language>('fr');
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[lang];

  const navItems = [
    { id: 'home', label: t.home },
    { id: 'menu', label: t.menu },
    { id: 'about', label: t.about },
    { id: 'reviews', label: t.reviews },
    { id: 'contact', label: t.contact },
  ];

  const languages: { id: Language; label: string }[] = [
    { id: 'fr', label: 'Français' },
    { id: 'en', label: 'English' },
    { id: 'ja', label: '日本語' },
    { id: 'zh', label: '中文' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-orange-50 overflow-x-hidden">
      {/* Cherry Blossoms Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <CherryBlossom
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${16 + Math.random() * 20}px`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div
              className="flex items-center space-x-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection('home')}
            >
              <div className="w-12 h-12">
                <ToriiGate />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-red-700">久一</h1>
                <p className="text-xs text-gray-600 tracking-widest">HISASHII RAMEN</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-red-600'
                      : 'text-gray-700 hover:text-red-600'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}

              {/* Language Switcher Desktop */}
              <div className="relative">
                <motion.button
                  className="flex items-center space-x-1 text-gray-700 hover:text-red-600 text-sm font-medium uppercase"
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  whileHover={{ scale: 1.1 }}
                >
                  <Languages size={18} />
                  <span>{lang}</span>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${langMenuOpen ? 'rotate-180' : ''}`} />
                </motion.button>

                <AnimatePresence>
                  {langMenuOpen && (
                    <motion.div
                      className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border py-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      {languages.map((l) => (
                        <button
                          key={l.id}
                          className={`block w-full text-left px-4 py-2 text-sm hover:bg-red-50 transition-colors ${lang === l.id ? 'text-red-600 font-bold' : 'text-gray-700'}`}
                          onClick={() => {
                            setLang(l.id);
                            setLangMenuOpen(false);
                          }}
                        >
                          {l.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-4 md:hidden">
               <button
                  className="flex items-center space-x-1 text-gray-700 text-sm"
                  onClick={() => {
                    const nextLangIdx = (languages.findIndex(l => l.id === lang) + 1) % languages.length;
                    setLang(languages[nextLangIdx].id);
                  }}
                >
                  <Languages size={18} />
                  <span className="uppercase">{lang}</span>
                </button>
              <button
                className="text-gray-700"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden bg-white border-t"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="px-4 py-4 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-gray-700 hover:text-red-600 py-2"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-red-100/50 via-transparent to-orange-100/50" />
        
        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="w-32 h-32 mx-auto mb-8"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <ToriiGate />
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="text-red-600">{t.heroTitle}</span>
          </motion.h1>

          <motion.h2
            className="text-4xl md:text-5xl font-light text-gray-800 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {t.heroSubtitle}
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {t.heroTagline}
          </motion.p>

          <motion.div
            className="flex items-center justify-center space-x-2 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-lg font-semibold text-gray-700">4.6</span>
            <span className="text-gray-500">(563 reviews)</span>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.button
              onClick={() => scrollToSection('menu')}
              className="px-8 py-4 bg-red-600 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-red-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.viewMenu}
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white text-red-600 rounded-full font-semibold text-lg shadow-lg border-2 border-red-600 hover:bg-red-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.findUs}
            </motion.button>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-red-600" />
          </motion.div>
        </motion.div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-gray-800 mb-4">{t.ourMenu}</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto" />
            <p className="text-gray-600 mt-4">{t.menuTagline}</p>
          </motion.div>

          {/* Ramen Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-4xl">🍜</span>
              <h3 className="text-3xl font-bold text-gray-800">{t.ramenTitle}</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {menuData.ramen.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-red-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{item.icon || '🍜'}</span>
                      <div>
                        <h4 className="text-xl font-bold text-gray-800">{item.name}</h4>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {item.special && (
                            <span className="text-[10px] uppercase font-bold bg-red-100 text-red-600 px-2 py-0.5 rounded-full">{t.special}</span>
                          )}
                          {item.spicy && (
                            <span className="text-[10px] uppercase font-bold bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">{t.spicy}</span>
                          )}
                          {item.veggie && (
                            <span className="text-[10px] uppercase font-bold bg-green-100 text-green-600 px-2 py-0.5 rounded-full">{t.veggie}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-red-600">€{item.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Entrée Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-4xl">🥟</span>
              <h3 className="text-3xl font-bold text-gray-800">{t.entreeTitle}</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {menuData.entree.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-orange-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{item.icon || '🥢'}</span>
                      <h4 className="text-lg font-bold text-gray-800">{item.name}</h4>
                    </div>
                    <span className="text-xl font-bold text-orange-600">€{item.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Donburi Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-4xl">🍚</span>
              <h3 className="text-3xl font-bold text-gray-800">{t.donburiTitle}</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {menuData.donburi.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-yellow-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{item.icon || '🍛'}</span>
                      <h4 className="text-lg font-bold text-gray-800">{item.name}</h4>
                    </div>
                    <span className="text-xl font-bold text-yellow-600">€{item.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Desserts Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-4xl">🍡</span>
              <h3 className="text-3xl font-bold text-gray-800">{t.dessertTitle}</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {menuData.desserts.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-pink-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{item.icon || '🍨'}</span>
                      <h4 className="text-lg font-bold text-gray-800">{item.name}</h4>
                    </div>
                    <span className="text-xl font-bold text-pink-600">€{item.price}</span>
                  </div>
                  {item.desc && <p className="text-gray-600 text-sm">{item.desc}</p>}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Drinks Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-4xl">🍵</span>
              <h3 className="text-3xl font-bold text-gray-800">{t.drinksTitle}</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {menuData.drinks.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-blue-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">{item.name}</h4>
                      {item.desc && <p className="text-gray-600 text-sm">{item.desc}</p>}
                    </div>
                    <span className="text-xl font-bold text-blue-600">€{item.price}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-gray-800 mb-4">{t.aboutTitle}</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="w-24 h-24 mx-auto mb-6">
                  <ToriiGate />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4 text-center">{t.ourStory}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{t.story1}</p>
                <p className="text-gray-600 mb-4 leading-relaxed">{t.story2}</p>
                <p className="text-gray-600 leading-relaxed">{t.story3}</p>
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-red-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">{t.madeWithLove}</h4>
                </div>
                <p className="text-gray-600">{t.madeWithLoveDesc}</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-orange-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">{t.qualityIngredients}</h4>
                </div>
                <p className="text-gray-600">{t.qualityIngredientsDesc}</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">{t.traditionalMethods}</h4>
                </div>
                <p className="text-gray-600">{t.traditionalMethodsDesc}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-gray-800 mb-4">{t.reviewsTitle}</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto" />
            <div className="flex items-center justify-center space-x-2 mt-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-2xl font-bold text-gray-700">4.6</span>
              <span className="text-gray-500">(563 reviews)</span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">{review.name}</span>
                  <span className="text-xs text-gray-400">{review.date}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 mb-4">{t.happyCustomers}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Excellent ramen!', 'Best in town', 'Amazing atmosphere', 'Fast service', 'Delicious food'].map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-red-600 to-orange-600 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-4">{t.visitUs}</h2>
            <div className="w-24 h-1 bg-white mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <MapPin className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">{t.address}</h3>
                </div>
                <p className="text-lg">135 Rue du Gros Horloge</p>
                <p className="text-lg">76000 Rouen, France</p>
                <div className="mt-4 flex items-center space-x-2 text-sm">
                  <span className="bg-white/20 px-3 py-1 rounded-full"> Rouen</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <Clock className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">{t.openingHours}</h3>
                </div>
                <p className="text-lg">{t.openToday}</p>
                <p className="text-sm text-white/80 mt-2">{t.walkIns}</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <Globe className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">{t.contact}</h3>
                </div>
                <p className="text-lg">Follow us on social media!</p>
                <div className="flex space-x-4 mt-4">
                  <motion.a
                    href="https://www.instagram.com/hisashii_ramen/"
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Instagram className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://www.facebook.com/profile.php?id=61578771701283"
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Facebook className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">{t.priceRange}</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{t.perPerson}</span>
                  <span className="text-2xl font-bold text-red-600">€10–20</span>
                </div>
                <p className="text-sm text-gray-500">{t.reportedBy}</p>
                
                <div className="border-t pt-4 mt-4">
                  <h4 className="font-semibold text-gray-800 mb-3">{t.serviceOptions}</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm">✓ Dine-in</span>
                    <span className="px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm">✓ Takeaway</span>
                    <span className="px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm">✓ Delivery</span>
                  </div>
                </div>

                <div className="border-t pt-4 mt-4">
                  <h4 className="font-semibold text-gray-800 mb-3">{t.atmosphere}</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm">{t.casual}</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm">{t.cozy}</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm">{t.japaneseThemed}</span>
                  </div>
                </div>

                <div className="border-t pt-4 mt-4">
                  <h4 className="font-semibold text-gray-800 mb-3">{t.goodFor}</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm">{t.groups}</span>
                    <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm">{t.quickBite}</span>
                    <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm">{t.dateNight}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <motion.button
              onClick={() => window.open('https://www.google.com/maps/dir//Hisashii+ramen,+135+Rue+du+Gros+Horloge,+76000+Rouen/@49.4450878,1.0863786,16z/data=!3m1!4b1!4m18!1m7!3m6!1s0x47e0dd63081cbd63:0x9edebc90cdab44a6!2sHisashii+ramen!8m2!3d49.4419177!4d1.0901365!16s%2Fg%2F11x855knn7!4m9!1m1!4e1!1m5!1m1!1s0x47e0dd63081cbd63:0x9edebc90cdab44a6!2m2!1d1.0901365!2d49.4419177!3e3?entry=ttu&g_ep=EgoyMDI2MDMxMC4wIKXMDSoASAFQAw%3D%3D', '_blank')}
              className="px-8 py-4 bg-white text-red-600 rounded-full font-semibold text-lg shadow-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.getDirections}
            </motion.button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10">
                  <ToriiGate />
                </div>
                <div>
                  <h3 className="text-xl font-bold">久一</h3>
                  <p className="text-xs text-gray-400">HISASHII RAMEN</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">{t.footerTagline}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>135 Rue du Gros Horloge</p>
                <p>76000 Rouen, France</p>
                <p>hisashii-ramen.fr</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Hisashii Ramen. All rights reserved.</p>
            <p className="mt-2">{t.arigato}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
