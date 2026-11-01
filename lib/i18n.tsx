"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "pt", label: "Português" },
  { code: "ar", label: "العربية" },
] as const;

export type LanguageCode = (typeof languages)[number]["code"];

const translations: Record<
  Exclude<LanguageCode, "en">,
  Record<string, string>
> = {
  es: {
    About: "Acerca de",
    "Our Approach": "Nuestro enfoque",
    Guarantee: "Garantía",
    Exchange: "Intercambio",
    Markets: "Mercados",
    FAQs: "Preguntas frecuentes",
    "Log in": "Iniciar sesión",
    "Create account": "Crear cuenta",
    "Close menu": "Cerrar menú",
    "Open menu": "Abrir menú",
    Company: "Empresa",
    Learning: "Aprendizaje",
    "Escrow Services": "Servicios de depósito en garantía",
    "Terms of Service": "Términos del servicio",
    "Privacy Policy": "Política de privacidad",
    "What is Crypto": "Qué son las criptomonedas",
    "What is Bitcoin": "Qué es Bitcoin",
    "What is Blockchain": "Qué es Blockchain",
    "What is Ethereum": "Qué es Ethereum",
    "Escrow process": "Proceso de depósito en garantía",
    "Start Escrow": "Iniciar depósito en garantía",
    "Our Trusted Partners": "Nuestros socios de confianza",
    Settings: "Configuración",
    "Profile Information": "Información del perfil",
    "Change Password": "Cambiar contraseña",
    Activity: "Actividad",
    Deposit: "Depositar",
    "Wallet Balances": "Saldos de la cartera",
    Balances: "Saldos",
    "Request Withdrawal": "Solicitar retiro",
    "Available Asset": "Activo disponible",
    "Current Balance (Est.)": "Saldo actual (est.)",
    Trades: "Operaciones",
    "Start Trade": "Iniciar operación",
    "Select role type": "Selecciona el tipo de rol",
    "Who pays trade fee?": "¿Quién paga la comisión de la operación?",
    Split: "Dividido",
    Seller: "Vendedor",
    Buyer: "Comprador",
    "Confirm Trade": "Confirmar operación",
    "Trade Created 🎉": "Operación creada 🎉",
    "Live prices for the top assets by market cap.":
      "Precios en vivo de los principales activos por capitalización de mercado.",
    "Search coins": "Buscar monedas",
    Coin: "Moneda",
    Price: "Precio",
    "Market cap": "Capitalización de mercado",
    Volume: "Volumen",
    "Market data didn’t load": "No se pudieron cargar los datos del mercado",
    Following: "Siguiendo",
    Name: "Nombre",
    Change: "Variación",
    "Start Escrow Trade": "Iniciar operación de depósito en garantía",
    "Escrow Locked Funds": "Fondos bloqueados en garantía",
    "Verified Participants": "Participantes verificados",
    "Human + Automated Review": "Revisión humana y automatizada",
    Users: "Usuarios",
    User: "Usuario",
    Email: "Correo electrónico",
    Action: "Acción",
    Transactions: "Transacciones",
    "Transaction ID": "ID de transacción",
    Type: "Tipo",
    Asset: "Activo",
    Amount: "Cantidad",
    Status: "Estado",
    Date: "Fecha",
    "No active trades": "No hay operaciones activas",
    "Confirm Logout": "Confirmar cierre de sesión",
    "Are you sure you want to logout?":
      "¿Seguro que quieres cerrar sesión?",
    "Secured by Paychex": "Protegido por Paychex",
    "All escrows are protected": "Todos los depósitos están protegidos",
    Rank: "Clasificación",
    "Market Cap": "Capitalización de mercado",
    "Search activity...": "Buscar actividad...",
    "Search by ID, type or asset": "Buscar por ID, tipo o activo",
    "Search coin (BTC, ETH, USDT...)": "Buscar moneda (BTC, ETH, USDT...)",
    "Wallet address": "Dirección de la cartera",
    "Seller's Email": "Correo del vendedor",
    "Buyer's Email": "Correo del comprador",
    "Admin name": "Nombre del administrador",
    "Admin password": "Contraseña del administrador",
    "Balance (BTC)": "Saldo (BTC)",
    Main: "Principal",
    Language: "Idioma",
    "Select language": "Seleccionar idioma",
    "Authentication mode": "Modo de autenticación",
    "You Send": "Envías",
    "You Receive": "Recibes",
    "Search BTC, ETH, USDT": "Buscar BTC, ETH, USDT",
    "Amount (BTC)": "Cantidad (BTC)",
    "Jane Doe": "Nombre Apellido",
    "Enter your password": "Introduce tu contraseña",
  },
  fr: {
    About: "À propos",
    "Our Approach": "Notre approche",
    Guarantee: "Garantie",
    Exchange: "Échange",
    Markets: "Marchés",
    FAQs: "FAQ",
    "Log in": "Se connecter",
    "Create account": "Créer un compte",
    "Close menu": "Fermer le menu",
    "Open menu": "Ouvrir le menu",
    Company: "Entreprise",
    Learning: "Apprentissage",
    "Escrow Services": "Services de séquestre",
    "Terms of Service": "Conditions d’utilisation",
    "Privacy Policy": "Politique de confidentialité",
    "What is Crypto": "Qu’est-ce que la crypto ?",
    "What is Bitcoin": "Qu’est-ce que Bitcoin ?",
    "What is Blockchain": "Qu’est-ce que la blockchain ?",
    "What is Ethereum": "Qu’est-ce qu’Ethereum ?",
    "Escrow process": "Processus de séquestre",
    "Start Escrow": "Démarrer un séquestre",
    "Our Trusted Partners": "Nos partenaires de confiance",
    Settings: "Paramètres",
    "Profile Information": "Informations du profil",
    "Change Password": "Modifier le mot de passe",
    Activity: "Activité",
    Deposit: "Dépôt",
    "Wallet Balances": "Soldes du portefeuille",
    Balances: "Soldes",
    "Request Withdrawal": "Demander un retrait",
    "Available Asset": "Actif disponible",
    "Current Balance (Est.)": "Solde actuel (estim.)",
    Trades: "Transactions",
    "Start Trade": "Démarrer une transaction",
    "Select role type": "Sélectionner le rôle",
    "Who pays trade fee?": "Qui paie les frais de transaction ?",
    Split: "Partager",
    Seller: "Vendeur",
    Buyer: "Acheteur",
    "Confirm Trade": "Confirmer la transaction",
    "Trade Created 🎉": "Transaction créée 🎉",
    "Live prices for the top assets by market cap.":
      "Cours en direct des principaux actifs par capitalisation boursière.",
    "Search coins": "Rechercher des cryptos",
    Coin: "Crypto",
    Price: "Prix",
    "Market cap": "Capitalisation boursière",
    Volume: "Volume",
    "Market data didn’t load": "Échec du chargement des données du marché",
    Following: "Suivi",
    Name: "Nom",
    Change: "Variation",
    "Start Escrow Trade": "Démarrer une transaction séquestre",
    "Escrow Locked Funds": "Fonds bloqués en séquestre",
    "Verified Participants": "Participants vérifiés",
    "Human + Automated Review": "Examen humain et automatisé",
    Users: "Utilisateurs",
    User: "Utilisateur",
    Email: "E-mail",
    Action: "Action",
    Transactions: "Transactions",
    "Transaction ID": "ID de transaction",
    Type: "Type",
    Asset: "Actif",
    Amount: "Montant",
    Status: "Statut",
    Date: "Date",
    "No active trades": "Aucune transaction en cours",
    "Confirm Logout": "Confirmer la déconnexion",
    "Are you sure you want to logout?":
      "Voulez-vous vraiment vous déconnecter ?",
    "Secured by Paychex": "Sécurisé par Paychex",
    "All escrows are protected": "Tous les séquestres sont protégés",
    Rank: "Classement",
    "Market Cap": "Capitalisation boursière",
    "Search activity...": "Rechercher une activité...",
    "Search by ID, type or asset": "Rechercher par ID, type ou actif",
    "Search coin (BTC, ETH, USDT...)": "Rechercher une crypto (BTC, ETH, USDT...)",
    "Wallet address": "Adresse du portefeuille",
    "Seller's Email": "E-mail du vendeur",
    "Buyer's Email": "E-mail de l’acheteur",
    "Admin name": "Nom de l’administrateur",
    "Admin password": "Mot de passe administrateur",
    "Balance (BTC)": "Solde (BTC)",
    Main: "Principal",
    Language: "Langue",
    "Select language": "Choisir la langue",
    "Authentication mode": "Mode d’authentification",
    "You Send": "Vous envoyez",
    "You Receive": "Vous recevez",
    "Search BTC, ETH, USDT": "Rechercher BTC, ETH, USDT",
    "Amount (BTC)": "Montant (BTC)",
    "Jane Doe": "Jean Dupont",
    "Enter your password": "Saisissez votre mot de passe",
  },
  de: {
    About: "Über uns",
    "Our Approach": "Unser Ansatz",
    Guarantee: "Garantie",
    Exchange: "Börse",
    Markets: "Märkte",
    FAQs: "Häufige Fragen",
    "Log in": "Anmelden",
    "Create account": "Konto erstellen",
    "Close menu": "Menü schließen",
    "Open menu": "Menü öffnen",
    Company: "Unternehmen",
    Learning: "Lernen",
    "Escrow Services": "Treuhanddienste",
    "Terms of Service": "Nutzungsbedingungen",
    "Privacy Policy": "Datenschutzerklärung",
    "What is Crypto": "Was ist Krypto?",
    "What is Bitcoin": "Was ist Bitcoin?",
    "What is Blockchain": "Was ist Blockchain?",
    "What is Ethereum": "Was ist Ethereum?",
    "Escrow process": "Treuhandverfahren",
    "Start Escrow": "Treuhand starten",
    "Our Trusted Partners": "Unsere vertrauenswürdigen Partner",
    Settings: "Einstellungen",
    "Profile Information": "Profilinformationen",
    "Change Password": "Passwort ändern",
    Activity: "Aktivität",
    Deposit: "Einzahlung",
    "Wallet Balances": "Wallet-Guthaben",
    Balances: "Guthaben",
    "Request Withdrawal": "Auszahlung anfordern",
    "Available Asset": "Verfügbarer Vermögenswert",
    "Current Balance (Est.)": "Aktueller Kontostand (geschätzt)",
    Trades: "Transaktionen",
    "Start Trade": "Transaktion starten",
    "Select role type": "Rolle auswählen",
    "Who pays trade fee?": "Wer zahlt die Transaktionsgebühr?",
    Split: "Teilen",
    Seller: "Verkäufer",
    Buyer: "Käufer",
    "Confirm Trade": "Transaktion bestätigen",
    "Trade Created 🎉": "Transaktion erstellt 🎉",
    "Live prices for the top assets by market cap.":
      "Live-Kurse der wichtigsten Vermögenswerte nach Marktkapitalisierung.",
    "Search coins": "Coins suchen",
    Coin: "Coin",
    Price: "Preis",
    "Market cap": "Marktkapitalisierung",
    Volume: "Volumen",
    "Market data didn’t load": "Marktdaten konnten nicht geladen werden",
    Following: "Beobachtet",
    Name: "Name",
    Change: "Änderung",
    "Start Escrow Trade": "Treuhandtransaktion starten",
    "Escrow Locked Funds": "Treuhandgesperrte Gelder",
    "Verified Participants": "Verifizierte Teilnehmer",
    "Human + Automated Review": "Menschliche und automatisierte Prüfung",
    Users: "Benutzer",
    User: "Benutzer",
    Email: "E-Mail",
    Action: "Aktion",
    Transactions: "Transaktionen",
    "Transaction ID": "Transaktions-ID",
    Type: "Typ",
    Asset: "Vermögenswert",
    Amount: "Betrag",
    Status: "Status",
    Date: "Datum",
    "No active trades": "Keine aktiven Transaktionen",
    "Confirm Logout": "Abmeldung bestätigen",
    "Are you sure you want to logout?":
      "Möchtest du dich wirklich abmelden?",
    "Secured by Paychex": "Geschützt durch Paychex",
    "All escrows are protected": "Alle Treuhandtransaktionen sind geschützt",
    Rank: "Rang",
    "Market Cap": "Marktkapitalisierung",
    "Search activity...": "Aktivität suchen...",
    "Search by ID, type or asset": "Nach ID, Typ oder Vermögenswert suchen",
    "Search coin (BTC, ETH, USDT...)": "Coin suchen (BTC, ETH, USDT...)",
    "Wallet address": "Wallet-Adresse",
    "Seller's Email": "E-Mail des Verkäufers",
    "Buyer's Email": "E-Mail des Käufers",
    "Admin name": "Administratorname",
    "Admin password": "Administratorpasswort",
    "Balance (BTC)": "Guthaben (BTC)",
    Main: "Haupt",
    Language: "Sprache",
    "Select language": "Sprache auswählen",
    "Authentication mode": "Authentifizierungsmodus",
    "You Send": "Du sendest",
    "You Receive": "Du erhältst",
    "Search BTC, ETH, USDT": "BTC, ETH, USDT suchen",
    "Amount (BTC)": "Betrag (BTC)",
    "Jane Doe": "Erika Mustermann",
    "Enter your password": "Passwort eingeben",
  },
  pt: {
    About: "Sobre",
    "Our Approach": "Nossa abordagem",
    Guarantee: "Garantia",
    Exchange: "Câmbio",
    Markets: "Mercados",
    FAQs: "Perguntas frequentes",
    "Log in": "Entrar",
    "Create account": "Criar conta",
    "Close menu": "Fechar menu",
    "Open menu": "Abrir menu",
    Company: "Empresa",
    Learning: "Aprendizado",
    "Escrow Services": "Serviços de custódia",
    "Terms of Service": "Termos de serviço",
    "Privacy Policy": "Política de privacidade",
    "What is Crypto": "O que são criptomoedas",
    "What is Bitcoin": "O que é Bitcoin",
    "What is Blockchain": "O que é blockchain",
    "What is Ethereum": "O que é Ethereum",
    "Escrow process": "Processo de custódia",
    "Start Escrow": "Iniciar custódia",
    "Our Trusted Partners": "Nossos parceiros de confiança",
    Settings: "Configurações",
    "Profile Information": "Informações do perfil",
    "Change Password": "Alterar senha",
    Activity: "Atividade",
    Deposit: "Depósito",
    "Wallet Balances": "Saldos da carteira",
    Balances: "Saldos",
    "Request Withdrawal": "Solicitar saque",
    "Available Asset": "Ativo disponível",
    "Current Balance (Est.)": "Saldo atual (est.)",
    Trades: "Negociações",
    "Start Trade": "Iniciar negociação",
    "Select role type": "Selecione o tipo de função",
    "Who pays trade fee?": "Quem paga a taxa da negociação?",
    Split: "Dividir",
    Seller: "Vendedor",
    Buyer: "Comprador",
    "Confirm Trade": "Confirmar negociação",
    "Trade Created 🎉": "Negociação criada 🎉",
    "Live prices for the top assets by market cap.":
      "Preços ao vivo dos principais ativos por valor de mercado.",
    "Search coins": "Buscar moedas",
    Coin: "Moeda",
    Price: "Preço",
    "Market cap": "Valor de mercado",
    Volume: "Volume",
    "Market data didn’t load": "Não foi possível carregar os dados do mercado",
    Following: "Seguindo",
    Name: "Nome",
    Change: "Variação",
    "Start Escrow Trade": "Iniciar negociação em custódia",
    "Escrow Locked Funds": "Fundos bloqueados em custódia",
    "Verified Participants": "Participantes verificados",
    "Human + Automated Review": "Revisão humana e automatizada",
    Users: "Usuários",
    User: "Usuário",
    Email: "E-mail",
    Action: "Ação",
    Transactions: "Transações",
    "Transaction ID": "ID da transação",
    Type: "Tipo",
    Asset: "Ativo",
    Amount: "Valor",
    Status: "Status",
    Date: "Data",
    "No active trades": "Nenhuma negociação ativa",
    "Confirm Logout": "Confirmar saída",
    "Are you sure you want to logout?": "Tem certeza de que deseja sair?",
    "Secured by Paychex": "Protegido pela Paychex",
    "All escrows are protected": "Todas as custódias estão protegidas",
    Rank: "Classificação",
    "Market Cap": "Valor de mercado",
    "Search activity...": "Buscar atividade...",
    "Search by ID, type or asset": "Buscar por ID, tipo ou ativo",
    "Search coin (BTC, ETH, USDT...)": "Buscar moeda (BTC, ETH, USDT...)",
    "Wallet address": "Endereço da carteira",
    "Seller's Email": "E-mail do vendedor",
    "Buyer's Email": "E-mail do comprador",
    "Admin name": "Nome do administrador",
    "Admin password": "Senha do administrador",
    "Balance (BTC)": "Saldo (BTC)",
    Main: "Principal",
    Language: "Idioma",
    "Select language": "Selecionar idioma",
    "Authentication mode": "Modo de autenticação",
    "You Send": "Você envia",
    "You Receive": "Você recebe",
    "Search BTC, ETH, USDT": "Buscar BTC, ETH, USDT",
    "Amount (BTC)": "Valor (BTC)",
    "Jane Doe": "Maria Silva",
    "Enter your password": "Digite sua senha",
  },
  ar: {
    About: "من نحن",
    "Our Approach": "نهجنا",
    Guarantee: "الضمان",
    Exchange: "التبادل",
    Markets: "الأسواق",
    FAQs: "الأسئلة الشائعة",
    "Log in": "تسجيل الدخول",
    "Create account": "إنشاء حساب",
    "Close menu": "إغلاق القائمة",
    "Open menu": "فتح القائمة",
    Company: "الشركة",
    Learning: "التعلّم",
    "Escrow Services": "خدمات الضمان",
    "Terms of Service": "شروط الخدمة",
    "Privacy Policy": "سياسة الخصوصية",
    "What is Crypto": "ما هي العملات الرقمية",
    "What is Bitcoin": "ما هو بيتكوين",
    "What is Blockchain": "ما هي سلسلة الكتل",
    "What is Ethereum": "ما هو إيثيريوم",
    "Escrow process": "آلية الضمان",
    "Start Escrow": "بدء الضمان",
    "Our Trusted Partners": "شركاؤنا الموثوقون",
    Settings: "الإعدادات",
    "Profile Information": "معلومات الملف الشخصي",
    "Change Password": "تغيير كلمة المرور",
    Activity: "النشاط",
    Deposit: "إيداع",
    "Wallet Balances": "أرصدة المحفظة",
    Balances: "الأرصدة",
    "Request Withdrawal": "طلب سحب",
    "Available Asset": "الأصل المتاح",
    "Current Balance (Est.)": "الرصيد الحالي (تقديري)",
    Trades: "الصفقات",
    "Start Trade": "بدء صفقة",
    "Select role type": "اختر نوع الدور",
    "Who pays trade fee?": "من يدفع رسوم الصفقة؟",
    Split: "تقسيم",
    Seller: "البائع",
    Buyer: "المشتري",
    "Confirm Trade": "تأكيد الصفقة",
    "Trade Created 🎉": "تم إنشاء الصفقة 🎉",
    "Live prices for the top assets by market cap.":
      "أسعار مباشرة لأبرز الأصول حسب القيمة السوقية.",
    "Search coins": "ابحث عن العملات",
    Coin: "العملة",
    Price: "السعر",
    "Market cap": "القيمة السوقية",
    Volume: "حجم التداول",
    "Market data didn’t load": "تعذر تحميل بيانات السوق",
    Following: "المتابعة",
    Name: "الاسم",
    Change: "التغيير",
    "Start Escrow Trade": "بدء صفقة ضمان",
    "Escrow Locked Funds": "أموال محجوزة في الضمان",
    "Verified Participants": "مشاركون تم التحقق منهم",
    "Human + Automated Review": "مراجعة بشرية وآلية",
    Users: "المستخدمون",
    User: "المستخدم",
    Email: "البريد الإلكتروني",
    Action: "الإجراء",
    Transactions: "المعاملات",
    "Transaction ID": "معرّف المعاملة",
    Type: "النوع",
    Asset: "الأصل",
    Amount: "المبلغ",
    Status: "الحالة",
    Date: "التاريخ",
    "No active trades": "لا توجد صفقات نشطة",
    "Confirm Logout": "تأكيد تسجيل الخروج",
    "Are you sure you want to logout?":
      "هل أنت متأكد أنك تريد تسجيل الخروج؟",
    "Secured by Paychex": "مؤمّن بواسطة Paychex",
    "All escrows are protected": "جميع عمليات الضمان محمية",
    Rank: "الترتيب",
    "Market Cap": "القيمة السوقية",
    "Search activity...": "ابحث في النشاط...",
    "Search by ID, type or asset": "ابحث حسب المعرّف أو النوع أو الأصل",
    "Search coin (BTC, ETH, USDT...)": "ابحث عن عملة (BTC, ETH, USDT...)",
    "Wallet address": "عنوان المحفظة",
    "Seller's Email": "بريد البائع",
    "Buyer's Email": "بريد المشتري",
    "Admin name": "اسم المسؤول",
    "Admin password": "كلمة مرور المسؤول",
    "Balance (BTC)": "الرصيد (BTC)",
    Main: "الرئيسية",
    Language: "اللغة",
    "Select language": "اختر اللغة",
    "Authentication mode": "طريقة المصادقة",
    "You Send": "أنت ترسل",
    "You Receive": "أنت تستقبل",
    "Search BTC, ETH, USDT": "ابحث عن BTC أو ETH أو USDT",
    "Amount (BTC)": "المبلغ (BTC)",
    "Jane Doe": "الاسم الكامل",
    "Enter your password": "أدخل كلمة المرور",
  },
};

type TranslationContextValue = {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
};

const TranslationContext = createContext<TranslationContextValue | null>(null);
const storageKey = "paychex-language";
const textSources = new WeakMap<Text, { source: string; translated: string }>();
const attributeSources = new WeakMap<
  Element,
  Map<string, { source: string; translated: string }>
>();

function getStoredLanguage(): LanguageCode {
  if (typeof window === "undefined") return "en";
  const savedLanguage = window.localStorage.getItem(storageKey);
  return languages.find(({ code }) => code === savedLanguage)?.code ?? "en";
}

function getServerLanguage(): LanguageCode {
  return "en";
}

function subscribeToLanguage(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener("paychex-language-change", onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener("paychex-language-change", onChange);
  };
}

function translateNode(node: Node, language: LanguageCode) {
  const dictionary = language === "en" ? undefined : translations[language];
  const translateText = (text: string) => {
    const match = text.match(/^(\s*)([\s\S]*?)(\s*)$/);
    if (!match) return text;
    const translated = dictionary?.[match[2]];
    return translated ? `${match[1]}${translated}${match[3]}` : text;
  };

  const root =
    node instanceof Text ? node.parentElement ?? document.body : node;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let textNode: Node | null;
  while ((textNode = walker.nextNode())) {
    if (!(textNode instanceof Text)) continue;
    const currentText = textNode.nodeValue ?? "";
    const previous = textSources.get(textNode);
    const source =
      previous?.translated === currentText ? previous.source : currentText;
    const translated = language === "en" ? source : translateText(source);
    textSources.set(textNode, { source, translated });
    if (translated !== currentText) textNode.nodeValue = translated;
  }

  const elements = root instanceof Element
    ? [root, ...root.querySelectorAll("*")]
    : root instanceof Document
      ? [...root.querySelectorAll("*")]
      : [];
  for (const element of elements) {
    let elementSources = attributeSources.get(element);
    if (!elementSources) {
      elementSources = new Map();
      attributeSources.set(element, elementSources);
    }

    for (const attribute of ["placeholder", "title", "aria-label"]) {
      const currentValue = element.getAttribute(attribute);
      if (!currentValue) continue;
      const previous = elementSources.get(attribute);
      const source =
        previous?.translated === currentValue ? previous.source : currentValue;
      const translated = language === "en" ? source : translateText(source);
      elementSources.set(attribute, { source, translated });
      if (translated !== currentValue) {
        element.setAttribute(attribute, translated);
      }
    }
  }
}

export function TranslationProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore<LanguageCode>(
    subscribeToLanguage,
    getStoredLanguage,
    getServerLanguage,
  );

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    translateNode(document.body, language);

    const observer = new MutationObserver((records) => {
      for (const record of records) {
        if (record.type === "characterData" && record.target instanceof Text) {
          translateNode(record.target, language);
        } else {
          record.addedNodes.forEach((node) => translateNode(node, language));
          if (record.type === "attributes" && record.target instanceof Element) {
            translateNode(record.target, language);
          }
        }
      }
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["placeholder", "title", "aria-label"],
      childList: true,
      characterData: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [language]);

  const setLanguage = useCallback((nextLanguage: LanguageCode) => {
    window.localStorage.setItem(storageKey, nextLanguage);
    window.dispatchEvent(new Event("paychex-language-change"));
  }, []);

  return (
    <TranslationContext.Provider value={{ language, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useLanguage must be used within a TranslationProvider");
  }
  return context;
}
