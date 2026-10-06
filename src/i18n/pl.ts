export const FIGMA_URL = 'https://www.figma.com/design/yC0ZGGqHkUO7Y10Mz4iyMy';
export const GITHUB_URL = 'https://github.com/PiotrObaraCoder';
export const REPO_URL = 'https://github.com/PiotrObaraCoder/web';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/piotrobara/';
export const EMAIL = 'piotr.obara.97@gmail.com';
export const CV_URL = '/public/Piotr-Obara-CV-PL.pdf';

const pl = {
  lang: 'pl',
  otherLang: { code: 'en', label: 'EN', href: '/en/', name: 'English version' },
  meta: {
    title: 'Piotr Obara · Tester oprogramowania, analityk testów',
    description:
      'Tester oprogramowania z Lublina. Bankowość, płatności i ubezpieczenia: analiza wymagań, projektowanie testów, API, SQL i dostępność. Strona testowana własnym pipeline’em Playwright.'
  },
  skip: 'Przejdź do treści',
  nav: {
    label: 'Nawigacja główna',
    menu: 'Menu',
    items: [
      { href: '#o-mnie', label: 'O mnie' },
      { href: '#jak-testuje', label: 'Jak testuję' },
      { href: '#doswiadczenie', label: 'Doświadczenie' },
      { href: '#dowody', label: 'Dowody' },
      { href: '#kontakt', label: 'Kontakt' }
    ],
    cv: 'Pobierz CV'
  },
  status: {
    e2e: 'testy E2E',
    a11y: 'WCAG 2.2 AA',
    lastRun: 'ostatni run',
    passing: 'passing',
    failing: 'failing',
    violations: (n: number) => (n === 0 ? '0 naruszeń' : `${n} naruszeń`),
    noData: 'brak danych',
    ciLabel: 'Wyniki ostatniego przebiegu testów tej strony'
  },
  hero: {
    label: 'Tester oprogramowania · Analityk testów',
    title: 'Testuję systemy, w których liczy się każdy szczegół.',
    lead: 'Bankowość, płatności i ubezpieczenia. Analizuję wymagania, projektuję testy i weryfikuję dane od interfejsu, przez API, aż po bazę. Rozwijam automatyzację w Playwright.',
    portraitAlt: 'Piotr Obara, tester oprogramowania'
  },
  candidate: {
    label: 'Karta kandydata',
    items: [
      { k: 'Dostępność', v: 'Od zaraz' },
      { k: 'Forma współpracy', v: 'UoP · B2B' },
      { k: 'Tryb pracy', v: 'Zdalnie · hybrydowo · stacjonarnie (Lublin)' },
      { k: 'Języki', v: 'Polski · angielski B2 (dokumentacja, spotkania, komunikacja)' },
      { k: 'Certyfikat', v: 'ISTQB CTFL 4.0' }
    ]
  },
  about: {
    label: 'O mnie',
    title: 'Cześć, jestem Piotr.',
    lead: 'Jestem testerem oprogramowania z Lublina. Zaczynałem po drugiej stronie systemów - w obsłudze klienta i wsparciu IT w PKO Banku Polskim, gdzie widziałem, jak błąd w aplikacji przekłada się na realny problem konkretnej osoby.',
    text: 'W Fenige, jako Second Line Support Engineer, nauczyłem się szukać przyczyn w logach, API i bazie danych. Testowanie było naturalnym krokiem: wolę znaleźć problem przed wdrożeniem niż tłumaczyć go po fakcie.',
    whyTitle: 'Dlaczego testowanie?',
    why: [
      { t: 'Obsługa klienta', d: 'Widziałem, co błąd oznacza dla klienta.' },
      { t: 'Help Desk', d: 'Rozwiązywałem problemy użytkowników aplikacji bankowych.' },
      { t: 'Second Line Support', d: 'Szukałem przyczyny w logach, API i SQL.' },
      { t: 'QA Engineer', d: 'Wyłapuję błędy, zanim trafią do klienta.' }
    ],
    hobbyTitle: 'Poza pracą',
    hobbyIntro: 'Wolny czas lubię spędzać aktywnie. Sport uczy mnie regularności i cierpliwości, a te przydają się też przy długich cyklach regresji.',
    hobbies: [
      { img: 'mountains', w: 720, h: 960, t: 'Górskie szlaki', d: 'Wędrówki to mój sposób na reset po intensywnym tygodniu.', alt: 'Piotr na górskim szlaku, w tle pasmo górskie' },
      { img: 'running', w: 960, h: 640, t: 'Biegi charytatywne', d: 'Biorę udział w biegach charytatywnych - sport, który przy okazji pomaga.', alt: 'Piotr podczas biegu z numerem startowym', credit: 'Fot. Daniel Musiał Fotografia' },
      { img: 'cycling', w: 960, h: 640, t: 'Rower', d: 'Gravel i szosa - mój ulubiony sposób na weekend.', alt: 'Piotr z rowerem gravelowym na wiejskiej drodze' }
    ],
    finance: {
      t: 'Finanse i giełda',
      d: 'Inwestuję długoterminowo i śledzę rynek kapitałowy. Dzięki temu lepiej rozumiem produkty finansowe, które testuję, z perspektywy klienta.'
    }
  },
  domains: {
    label: 'Domeny',
    title: 'Branże i procesy, które znam',
    intro: 'Uczciwie: tam, gdzie pracowałem, i tam, gdzie dopiero się uczę.',
    levels: { worked: 'pracowałem', learning: 'uczę się' },
    items: [
      { t: 'Płatności kartowe i e-commerce', level: 'worked', d: 'Autoryzacja, 3DS, clearing, zwroty, reversal, chargebacki Visa i Mastercard.' },
      { t: 'Fraud i AML', level: 'worked', d: 'Reguły monitoringu, blokady IP i domen hazardowych, profilowanie, alerty.' },
      { t: 'Bankowość', level: 'worked', d: 'Wsparcie aplikacji bankowych w oddziałach, telefoniczna obsługa procesu kredytowego.' },
      { t: 'Regulacje i rozliczenia', level: 'worked', d: 'Raportowanie CESOP do KAS, pliki rozliczeniowe, przewalutowania depozytów.' },
      { t: 'Ubezpieczenia', level: 'learning', d: 'Ubezpieczenie spłaty kredytu i wyliczanie składek - w moim QA Lab.' }
    ]
  },
  howITest: {
    label: 'Jak testuję',
    title: 'Testowanie zaczyna się przed pierwszą linią kodu',
    items: [
      { t: 'Analiza wymagań', d: 'Zadaję pytania do wymagań, zanim powstanie kod, i spisuję kryteria akceptacji, które da się sprawdzić.', ev: 'Specyfikacja w Figmie', href: 'figma' },
      { t: 'Techniki projektowania testów', d: 'Wartości brzegowe, klasy równoważności i tablice decyzyjne zamiast losowego klikania.', ev: 'Kryteria 6-10 w specyfikacji', href: 'figma' },
      { t: 'Testy oparte na ryzyku', d: 'Dobieram zakres regresji i UAT do tego, co może zaszkodzić klientowi lub rozliczeniom.', ev: 'Historia testowa', href: '#historia' },
      { t: 'Diagnoza: API → logi → baza', d: 'Postman, SQL i PostgreSQL. Zgłoszenie błędu ma dać się odtworzyć bez mojej pomocy.', ev: 'GET /api/profile.json', href: '/api/profile.json' }
    ]
  },
  experience: {
    label: 'Doświadczenie',
    title: 'Od obsługi klienta do zapewniania jakości',
    jobs: [
      {
        time: '07.2024 - obecnie',
        role: 'Manual QA Engineer',
        org: 'Fenige S.A. · fintech, płatności',
        points: [
          'Jedyny tester w zespole trzech programistów, w dwutygodniowych sprintach Scrum.',
          'Testuję chargebacki Visa i Mastercard, reguły fraudowe i AML oraz raportowanie CESOP.',
          'Testuję REST API i przepływ danych: aplikacja → API → mikroserwisy → PostgreSQL.',
          'Prowadzę testy UAT i dobieram zakres regresji na podstawie analizy ryzyka.',
          'Tworzę testy i skrypty w Postmanie uruchamiane przez Collection Runner.'
        ]
      },
      {
        time: '04.2023 - 07.2024',
        role: 'Second Line Support Engineer',
        org: 'Fenige S.A.',
        points: [
          'Diagnozowałem incydenty produkcyjne, korelując API, logi i dane SQL.',
          'Weryfikowałem transakcje i rozliczenia we współpracy z bankami, Visa i Mastercard.',
          'Generowałem i wysyłałem raporty CESOP do KAS przez API.'
        ]
      },
      {
        time: '10.2021 - 04.2023',
        role: 'Specjalista wsparcia IT (Help Desk)',
        org: 'PKO Bank Polski',
        points: ['Obsługiwałem incydenty i problemy z dostępem w aplikacjach bankowych używanych przez oddziały.']
      },
      {
        time: '10.2020 - 10.2021',
        role: 'Konsultant obsługi klienta',
        org: 'PKO Bank Polski',
        points: ['Telefonicznie obsługiwałem proces kredytowy: weryfikację danych i zdolności kredytowej, kompletowanie wniosków.']
      }
    ],
    story: {
      label: 'Historia testowa',
      title: 'Jedna poprawka, trzy dodatkowe błędy',
      steps: [
        { k: 'Sytuacja', v: 'Poprawka dotyczyła zapisu reguł monitoringu przy edycji kontrahenta w panelu administracyjnym.' },
        { k: 'Działanie', v: 'Oprócz samej poprawki przetestowałem sąsiednie ścieżki edycji i sprawdziłem dane w bazie.' },
        { k: 'Efekt', v: 'Znalazłem trzy niezależne błędy, w tym ryzyko nadpisania konfiguracji innego kontrahenta.' }
      ]
    }
  },
  evidence: {
    label: 'Dowody',
    title: 'Każde twierdzenie ma dowód',
    intro: 'Rzeczy, które można otworzyć i sprawdzić. Statusy pochodzą z ostatniego przebiegu testów tej strony w GitHub Actions.',
    soon: 'w przygotowaniu',
    reports: { summary: 'Pobierz raport z testów (HTML)', full: 'Pełny raport Playwright online', trace: 'Nagranie testu w Trace Viewer' },
    open: 'Otwórz',
    items: [
      { key: 'a11y', t: 'Raport WCAG', d: 'Ta strona jest skanowana axe-core w każdym przebiegu CI. Raport z testami ręcznymi w przygotowaniu.', href: 'report' },
      { key: 'figma', t: 'Design QA z Figmą', d: 'Projekt, tokeny i 10 kryteriów akceptacji w Figmie. Testy sprawdzają, czy strona jest z nimi zgodna.', href: 'figma' },
      { key: 'e2e', t: 'Playwright w CI', d: 'Testy E2E, dostępności i zgodności z projektem uruchamiane przy każdej zmianie i co noc.', href: 'repo' },
      { key: 'api', t: 'API', d: 'Prawdziwy endpoint JSON z moim profilem. Specyfikacja OpenAPI w przygotowaniu.', href: '/api/profile.json' },
      { key: 'lab', t: 'QA Lab', d: 'Wniosek o kredyt gotówkowy z ubezpieczeniem spłaty, w wersji z ukrytymi błędami do znalezienia.', href: null },
      { key: 'sql', t: 'SQL sandbox', d: 'Baza w przeglądarce z ukrytymi niespójnościami danych do wykrycia zapytaniami.', href: null }
    ]
  },
  growth: {
    label: 'Rozwój',
    title: 'Czego się uczę',
    items: [
      { t: 'ISTQB Certified Tester Foundation Level 4.0', s: 'zdobyty' },
      { t: 'Playwright + TypeScript', s: 'w toku · testy tej strony' },
      { t: 'Dostępność cyfrowa, WCAG 2.2', s: 'w toku · audyt tej strony' }
    ]
  },
  contact: {
    label: 'Kontakt',
    title: 'Porozmawiajmy o testowaniu w Twoim zespole',
    text: 'Najszybciej odpowiadam na e-mail. Chętnie opowiem o swoich testach na rozmowie.',
    email: 'E-mail',
    phone: 'Telefon',
    showPhone: 'Pokaż numer',
    noJsPhone: 'Numer podam w odpowiedzi na e-mail.'
  },
  footer: {
    design: 'Projekt w Figmie',
    code: 'Kod i testy na GitHubie',
    tested: 'Strona testowana przez Playwright i axe-core'
  }
};

export default pl;
export type Dict = typeof pl;
