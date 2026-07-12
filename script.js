const cvFiles = {
  en: "/public/Piotr-Obara-CV-PL.pdf",
  pl: "/public/Piotr-Obara-CV-PL.pdf"
};

const translations = {
  en: {
    brandRole: "Manual QA Engineer",
    navExpertise: "Expertise",
    navCases: "Cases",
    navApi: "API Console",
    navArtifacts: "Artifacts",
    navContact: "Contact",
    navCta: "Hire-ready contact",
    heroEyebrow: "Payment systems QA / REST API / transaction diagnostics",
    heroTitle: "Manual QA Engineer who tests the business path behind every transaction.",
    heroLead: "I help teams verify payment flows, backend services, API contracts and data consistency across logs, databases and product behavior.",
    downloadCv: "Download CV",
    linkedinProfile: "LinkedIn profile",
    tryApi: "Try QA API",
    signalDomainLabel: "Domain",
    signalDomain: "Payments, e-commerce, banking",
    signalStackLabel: "Core stack",
    signalStack: "Postman, Jira, SQL, logs",
    signalScopeLabel: "Testing scope",
    signalScope: "API, E2E, regression, exploratory",
    releaseReadiness: "Release readiness",
    apiChecks: "API checks",
    apiChecksSmall: "contract + business validation",
    riskFocus: "Risk focus",
    riskFocusSmall: "auth, reversal, refund",
    defectPath: "Defect path",
    defectPathSmall: "root cause oriented",
    expertiseEyebrow: "What I bring to a QA team",
    expertiseTitle: "Manual testing with technical diagnosis, not just screen checking.",
    expertise1Title: "Payment flow understanding",
    expertise1Text: "Card transactions, acquiring, money transfers, chargebacks, refunds, reversals, fraud monitoring and 3DS/MPI verification.",
    expertise2Title: "API-first testing",
    expertise2Text: "REST API validation in Postman: request and response data, HTTP statuses, authorization, negative paths and regression scenarios.",
    expertise3Title: "Data-backed investigation",
    expertise3Text: "Diagnostics across API, application logs and PostgreSQL to confirm whether product behavior matches business rules.",
    expertise4Title: "Production-aware mindset",
    expertise4Text: "Second Line Support background helps me read incidents, communicate with technical and business teams, and protect critical workflows.",
    timelineEyebrow: "Career trajectory",
    timelineTitle: "From technical support and banking systems to focused QA engineering.",
    job1Time: "Jul 2024 - Present",
    job1Title: "Manual QA Engineer (Manual Tester / Quality Assurance) / Fenige S.A.",
    job1Text: "Full-time hybrid role in Lublin. Manual testing of Java/Spring backend systems and Angular web applications in payments and transaction processes since July 2024.",
    job2Time: "Apr 2023 - Jul 2024",
    job2Title: "Second Line Support Engineer / Fenige S.A.",
    job2Text: "On-site role in Lublin from April 2023 to July 2024. Technical analysis of payment systems, incidents, API data, logs, SQL records and business inconsistencies.",
    job3Time: "Oct 2021 - Apr 2023",
    job3Title: "Help Desk Support Specialist / PKO Bank Polski",
    job3Text: "On-site role in Lublin from October 2021 to April 2023. Technical support, Active Directory, access requests and banking application incidents.",
    job4Time: "Oct 2020 - Oct 2021",
    job4Title: "Customer Service Specialist / PKO Bank Polski",
    job4Text: "Hybrid role from October 2020 to October 2021. Customer service in banking processes and direct support for business users.",
    casesEyebrow: "Portfolio concept",
    casesTitle: "Case studies built around real QA thinking and safe synthetic data.",
    case1Impact: "High business impact",
    case1Title: "Payment authorization regression",
    case1Text: "API and backend checks for amount, currency, merchant configuration, authentication result and final transaction state.",
    case1Li1: "Positive and negative Postman scenarios",
    case1Li2: "Database status verification",
    case1Li3: "Log correlation by transaction identifier",
    case2Impact: "Risk based",
    case2Title: "Refund and reversal validation",
    case2Text: "Scenario coverage for partial refund, failed reversal, duplicate request prevention and correct customer-facing status.",
    case2Li1: "Boundary and duplicate request testing",
    case2Li2: "Business rule checks",
    case2Li3: "Jira-ready defect evidence",
    case3Impact: "Technical diagnosis",
    case3Title: "Async status mismatch",
    case3Text: "Microservice and RabbitMQ-oriented analysis when frontend state, API response and database record do not agree.",
    case3Li1: "API -> logs -> DB investigation",
    case3Li2: "Async event consistency check",
    case3Li3: "Root cause hypothesis for developers",
    openCase: "Open case details",
    apiEyebrow: "Interactive recruiter endpoint",
    apiTitle: "Send a GET request and receive my QA profile as JSON.",
    apiIntro: "A lightweight Postman-style console built into the portfolio. It turns the CV into structured, testable information.",
    sendRequest: "Send",
    endpointProfile: "Summary, contact, domain focus and availability signal.",
    endpointExperience: "Timeline from banking support to payment QA engineering.",
    endpointSkills: "Testing methods, tools, diagnostics and API coverage.",
    endpointHire: "A concise hiring pitch written like a clean API response.",
    artifactsEyebrow: "Recruiter and QA Lead evidence",
    artifactsTitle: "Selected work samples to add from your materials.",
    tabBug: "Bug report",
    tabTestCase: "Test case",
    tabRisk: "Risk matrix",
    tabPostman: "Postman check",
    syntheticSample: "Synthetic sample",
    bugTitle: "Refund status remains PENDING after successful provider confirmation",
    severity: "Severity",
    environment: "Environment",
    expected: "Expected",
    actual: "Actual",
    bugExpected: "Refund status changes to COMPLETED and is visible in transaction history.",
    bugActual: "API returns provider success but database status remains PENDING.",
    testCaseTitle: "Refund API validation after successful payment transaction",
    testCase1: "Prepare a paid transaction with valid merchant, amount, currency and transaction identifier.",
    testCase2: "Send refund request in Postman and validate authorization, HTTP status and response schema.",
    testCase3: "Verify refund amount, original transaction reference and business status in response body.",
    testCase4: "Confirm final status in PostgreSQL, correlate logs by transaction ID and prepare Jira evidence if the status is inconsistent.",
    riskTitle: "Payment regression risk matrix",
    riskHighHigh: "High impact / high probability",
    riskHighHighText: "3DS timeout, duplicate refund, incorrect reversal status",
    riskHighLow: "High impact / low probability",
    riskHighLowText: "Currency mismatch, acquiring configuration error",
    riskMedium: "Medium impact",
    riskMediumText: "Frontend status delay, missing error translation",
    postmanTitle: "Postman validation checklist",
    stackEyebrow: "Tools and methods",
    stackTitle: "A practical stack for modern manual QA.",
    contactEyebrow: "Available for QA opportunities",
    contactTitle: "Looking for a tester who understands both user impact and backend evidence?",
    contactText: "I am ready to support teams building payment, transaction, banking and e-commerce products where quality depends on details hidden behind the UI.",
    close: "Close"
  },
  pl: {
    brandRole: "Tester Manualny / Manual QA",
    navExpertise: "Specjalizacja",
    navCases: "Case studies",
    navApi: "API Console",
    navArtifacts: "Artefakty",
    navContact: "Kontakt",
    navCta: "Kontakt rekrutacyjny",
    heroEyebrow: "QA systemów płatniczych / REST API / diagnostyka transakcji",
    heroTitle: "Tester manualny, który sprawdza biznesową ścieżkę za każdą transakcją.",
    heroLead: "Pomagam zespołom weryfikować przepływy płatności, usługi backendowe, kontrakty API oraz spójność danych w logach, bazie i zachowaniu produktu.",
    downloadCv: "Pobierz CV",
    linkedinProfile: "Profil LinkedIn",
    tryApi: "Wypróbuj QA API",
    signalDomainLabel: "Domena",
    signalDomain: "Płatności, e-commerce, bankowość",
    signalStackLabel: "Główny stack",
    signalStack: "Postman, Jira, SQL, logi",
    signalScopeLabel: "Zakres testów",
    signalScope: "API, E2E, regresja, eksploracja",
    releaseReadiness: "Gotowość release'u",
    apiChecks: "Testy API",
    apiChecksSmall: "kontrakt + walidacja biznesowa",
    riskFocus: "Obszar ryzyka",
    riskFocusSmall: "auth, reversal, refund",
    defectPath: "Ścieżka defektu",
    defectPathSmall: "orientacja na root cause",
    expertiseEyebrow: "Co wnoszę do zespołu QA",
    expertiseTitle: "Testowanie manualne z diagnozą techniczną, nie tylko sprawdzanie ekranów.",
    expertise1Title: "Rozumienie flow płatności",
    expertise1Text: "Transakcje kartowe, acquiring, money transfers, chargebacki, refundy, reversale, fraud monitoring oraz weryfikacja 3DS/MPI.",
    expertise2Title: "Testowanie API-first",
    expertise2Text: "Walidacja REST API w Postmanie: request/response, statusy HTTP, autoryzacja, ścieżki negatywne i scenariusze regresyjne.",
    expertise3Title: "Diagnoza oparta o dane",
    expertise3Text: "Analiza API, logów aplikacyjnych i PostgreSQL, aby potwierdzić zgodność zachowania produktu z regułami biznesowymi.",
    expertise4Title: "Myślenie produkcyjne",
    expertise4Text: "Doświadczenie Second Line Support pomaga mi analizować incydenty, komunikować się z biznesem i chronić krytyczne procesy.",
    timelineEyebrow: "Ścieżka kariery",
    timelineTitle: "Od wsparcia technicznego i systemów bankowych do świadomego QA engineeringu.",
    job1Time: "Lip 2024 - obecnie",
    job1Title: "Manual QA Engineer (Manual Tester / Quality Assurance) / Fenige S.A.",
    job1Text: "Pełnoetatowa rola hybrydowa w Lublinie. Manualne testowanie backendów Java/Spring i aplikacji Angular w obszarze płatności oraz procesów transakcyjnych od lipca 2024.",
    job2Time: "Kwi 2023 - Lip 2024",
    job2Title: "Second Line Support Engineer / Fenige S.A.",
    job2Text: "Rola stacjonarna w Lublinie od kwietnia 2023 do lipca 2024. Analiza systemów płatniczych, incydentów, API, logów, SQL i niespójności biznesowych.",
    job3Time: "Paź 2021 - Kwi 2023",
    job3Title: "Help Desk Support Specialist / PKO Bank Polski",
    job3Text: "Rola stacjonarna w Lublinie od października 2021 do kwietnia 2023. Wsparcie techniczne, Active Directory, uprawnienia i incydenty aplikacji bankowych.",
    job4Time: "Paź 2020 - Paź 2021",
    job4Title: "Customer Service Specialist / PKO Bank Polski",
    job4Text: "Rola hybrydowa od października 2020 do października 2021. Obsługa klienta w procesach bankowych i bezpośrednie wsparcie użytkowników biznesowych.",
    casesEyebrow: "Koncepcja portfolio",
    casesTitle: "Case studies oparte o realne myślenie QA i bezpieczne dane syntetyczne.",
    case1Impact: "Wysoki wpływ biznesowy",
    case1Title: "Regresja autoryzacji płatności",
    case1Text: "Testy API i backendu dla kwoty, waluty, konfiguracji merchanta, wyniku autoryzacji i finalnego statusu transakcji.",
    case1Li1: "Pozytywne i negatywne scenariusze w Postmanie",
    case1Li2: "Weryfikacja statusu w bazie danych",
    case1Li3: "Korelacja logów po identyfikatorze transakcji",
    case2Impact: "Risk based",
    case2Title: "Walidacja refundów i reversali",
    case2Text: "Pokrycie scenariuszy dla częściowego refundu, nieudanego reversala, duplikatu żądania i poprawnego statusu dla użytkownika.",
    case2Li1: "Testy brzegowe i duplikaty requestów",
    case2Li2: "Weryfikacja reguł biznesowych",
    case2Li3: "Ewidencja defektu gotowa do Jira",
    case3Impact: "Diagnoza techniczna",
    case3Title: "Niespójność statusu asynchronicznego",
    case3Text: "Analiza mikroserwisowa i RabbitMQ, gdy frontend, API i baza danych pokazują różne statusy.",
    case3Li1: "Diagnoza API -> logi -> DB",
    case3Li2: "Weryfikacja spójności eventów asynchronicznych",
    case3Li3: "Hipoteza root cause dla developerów",
    openCase: "Otwórz szczegóły",
    apiEyebrow: "Interaktywny endpoint dla rekrutera",
    apiTitle: "Wyślij request GET i odbierz mój profil QA jako JSON.",
    apiIntro: "Lekka konsola w stylu Postmana wbudowana w portfolio. Zamienia CV w uporządkowane, testowalne informacje.",
    sendRequest: "Wyślij",
    endpointProfile: "Podsumowanie, kontakt, domena i sygnał dostępności.",
    endpointExperience: "Historia od supportu bankowego do QA systemów płatniczych.",
    endpointSkills: "Metody testowania, narzędzia, diagnostyka i pokrycie API.",
    endpointHire: "Krótki pitch rekrutacyjny zapisany jak czysty response API.",
    artifactsEyebrow: "Dowody dla rekrutera i QA Leada",
    artifactsTitle: "Przykładowe artefakty do podmiany na Twoje materiały.",
    tabBug: "Bug report",
    tabTestCase: "Test case",
    tabRisk: "Risk matrix",
    tabPostman: "Postman check",
    syntheticSample: "Próbka syntetyczna",
    bugTitle: "Status refundu pozostaje PENDING po poprawnym potwierdzeniu providera",
    severity: "Waga",
    environment: "Środowisko",
    expected: "Oczekiwane",
    actual: "Rzeczywiste",
    bugExpected: "Status refundu zmienia się na COMPLETED i jest widoczny w historii transakcji.",
    bugActual: "API zwraca sukces providera, ale status w bazie pozostaje PENDING.",
    testCaseTitle: "Walidacja API refundu po poprawnej transakcji płatniczej",
    testCase1: "Przygotuj opłaconą transakcję z poprawnym merchantem, kwotą, walutą i identyfikatorem transakcji.",
    testCase2: "Wyślij request refundu w Postmanie i zweryfikuj autoryzację, status HTTP oraz schemat response.",
    testCase3: "Sprawdź kwotę refundu, referencję do transakcji źródłowej i status biznesowy w body response.",
    testCase4: "Potwierdź finalny status w PostgreSQL, skoreluj logi po transaction ID i przygotuj dowody do Jira, jeśli status jest niespójny.",
    riskTitle: "Macierz ryzyka regresji płatności",
    riskHighHigh: "Wysoki wpływ / wysokie prawdopodobieństwo",
    riskHighHighText: "Timeout 3DS, duplikat refundu, błędny status reversala",
    riskHighLow: "Wysoki wpływ / niskie prawdopodobieństwo",
    riskHighLowText: "Niespójność waluty, błąd konfiguracji acquiringu",
    riskMedium: "Średni wpływ",
    riskMediumText: "Opóźniony status frontendu, brak tłumaczenia błędu",
    postmanTitle: "Checklist walidacji w Postmanie",
    stackEyebrow: "Narzędzia i metody",
    stackTitle: "Praktyczny stack nowoczesnego testera manualnego.",
    contactEyebrow: "Otwarty na możliwości QA",
    contactTitle: "Szukasz testera, który rozumie wpływ na użytkownika i dowody po stronie backendu?",
    contactText: "Jestem gotowy wspierać zespoły budujące produkty płatnicze, transakcyjne, bankowe i e-commerce, gdzie jakość zależy od detali ukrytych za interfejsem.",
    close: "Zamknij"
  }
};

const caseData = {
  en: {
    payment: {
      kicker: "Case 01 / payment authorization",
      title: "Payment authorization regression",
      body: `
        <p><strong>Goal:</strong> verify that a successful authorization is reflected consistently across API response, service logs, database state and merchant-facing transaction history.</p>
        <ul>
          <li>Prepared positive and negative scenarios for amount, currency, merchant configuration and authorization result.</li>
          <li>Validated response schema, HTTP status codes, business fields and transaction identifiers in Postman.</li>
          <li>Confirmed final status in PostgreSQL and correlated transaction identifiers in application logs.</li>
          <li>Outcome: faster evidence collection for developers and clearer regression scope for future releases.</li>
        </ul>
      `
    },
    refund: {
      kicker: "Case 02 / refund and reversal",
      title: "Refund and reversal validation",
      body: `
        <p><strong>Goal:</strong> reduce release risk around money movement scenarios where duplicate requests, partial amounts or provider delays can create inconsistent transaction states.</p>
        <ul>
          <li>Covered full refund, partial refund, failed reversal, duplicate request and invalid transaction state.</li>
          <li>Checked database state transitions and customer-visible statuses after each API call.</li>
          <li>Prepared Jira-ready bug evidence with exact steps, expected result, actual result and technical context.</li>
          <li>Outcome: stronger regression checklist around high-impact financial operations.</li>
        </ul>
      `
    },
    async: {
      kicker: "Case 03 / asynchronous systems",
      title: "Async status mismatch investigation",
      body: `
        <p><strong>Goal:</strong> diagnose a mismatch between frontend transaction status, backend API response and persisted database state in a microservice-based flow.</p>
        <ul>
          <li>Compared frontend state with REST API response and PostgreSQL records.</li>
          <li>Used logs and event timing to form a root cause hypothesis for asynchronous processing.</li>
          <li>Documented the scenario with synthetic identifiers and reproducible verification steps.</li>
          <li>Outcome: concise handoff to developers and better test coverage for delayed state propagation.</li>
        </ul>
      `
    }
  },
  pl: {
    payment: {
      kicker: "Case 01 / autoryzacja płatności",
      title: "Regresja autoryzacji płatności",
      body: `
        <p><strong>Cel:</strong> potwierdzić, że poprawna autoryzacja jest spójna w response API, logach serwisowych, stanie bazy i historii transakcji widocznej dla merchanta.</p>
        <ul>
          <li>Przygotowanie scenariuszy pozytywnych i negatywnych dla kwoty, waluty, konfiguracji merchanta i wyniku autoryzacji.</li>
          <li>Walidacja schematu response, statusów HTTP, pól biznesowych i identyfikatorów transakcji w Postmanie.</li>
          <li>Potwierdzenie finalnego statusu w PostgreSQL i korelacja identyfikatorów w logach aplikacyjnych.</li>
          <li>Efekt: szybsze zbieranie dowodów dla developerów i czytelniejszy zakres regresji.</li>
        </ul>
      `
    },
    refund: {
      kicker: "Case 02 / refund i reversal",
      title: "Walidacja refundów i reversali",
      body: `
        <p><strong>Cel:</strong> ograniczyć ryzyko release'u w scenariuszach money movement, gdzie duplikaty, częściowe kwoty albo opóźnienia providera mogą tworzyć niespójne statusy.</p>
        <ul>
          <li>Pokrycie pełnego refundu, częściowego refundu, nieudanego reversala, duplikatu requestu i błędnego stanu transakcji.</li>
          <li>Weryfikacja przejść statusów w bazie danych oraz statusów widocznych dla użytkownika.</li>
          <li>Przygotowanie defektu gotowego do Jira: kroki, expected, actual i kontekst techniczny.</li>
          <li>Efekt: mocniejsza checklista regresji dla operacji o wysokim wpływie finansowym.</li>
        </ul>
      `
    },
    async: {
      kicker: "Case 03 / systemy asynchroniczne",
      title: "Diagnoza niespójności statusu asynchronicznego",
      body: `
        <p><strong>Cel:</strong> zdiagnozować rozjazd między statusem na froncie, odpowiedzią API i stanem zapisanym w bazie w przepływie mikroserwisowym.</p>
        <ul>
          <li>Porównanie stanu frontendu z response REST API i rekordami PostgreSQL.</li>
          <li>Użycie logów i czasu eventów do zbudowania hipotezy root cause dla procesu asynchronicznego.</li>
          <li>Udokumentowanie scenariusza na syntetycznych identyfikatorach i powtarzalnych krokach weryfikacji.</li>
          <li>Efekt: zwięzłe przekazanie informacji developerom i lepsze pokrycie testowe opóźnionej propagacji statusu.</li>
        </ul>
      `
    }
  }
};

const apiResponses = {
  en: {
    "/api/profile": {
      candidate: "Piotr Obara",
      role: "Manual QA Engineer / Manual Tester",
      domain_focus: ["payment systems", "transactional processes", "e-commerce", "banking applications"],
      summary: "Manual QA Engineer focused on REST API testing, payment flow verification, test data preparation and issue diagnosis across API, logs and PostgreSQL.",
      contact: {
        email: "piotr.obara.97@gmail.com",
        phone: "+48 602 363 240",
        linkedin: "linkedin.com/in/piotr-obara-aab063121"
      },
      cv: "Piotr-Obara-CV-PL.pdf"
    },
    "/api/experience": {
      current: {
        company: "Fenige S.A.",
        employment: "Full-time",
        location: "Lublin, Lubelskie, Poland",
        role: "Manual QA Engineer (Manual Tester / Quality Assurance)",
        period: "2024-07 - Present",
        work_mode: "Hybrid",
        focus: ["Java/Spring backend systems", "Angular web applications", "payments", "transactional processes", "REST API testing"]
      },
      previous: [
        {
          company: "Fenige S.A.",
          role: "Second Line Support Engineer",
          period: "2023-04 - 2024-07",
          work_mode: "On-site",
          value: "Production-aware diagnosis based on API responses, logs, database records and business context."
        },
        {
          company: "PKO Bank Polski",
          employment: "Full-time",
          location: "Lublin, Lubelskie, Poland",
          roles: [
            {
              role: "Help Desk Support Specialist",
              period: "2021-10 - 2023-04",
              work_mode: "On-site",
              value: "Technical ticket handling, Active Directory, access requests and banking application incidents."
            },
            {
              role: "Customer Service Specialist",
              period: "2020-10 - 2021-10",
              work_mode: "Hybrid",
              value: "Customer service in banking processes and direct business user support."
            }
          ]
        }
      ]
    },
    "/api/skills": {
      testing: ["functional", "integration", "regression", "E2E", "exploratory", "negative scenarios"],
      api: ["Postman", "Swagger", "request/response validation", "HTTP status codes", "authorization", "business data validation"],
      diagnostics: ["SQL", "PostgreSQL", "log analysis", "API -> logs -> database flow", "event correlation"],
      tools: ["Jira", "Confluence", "Metabase", "pgAdmin", "IntelliJ IDEA", "Gerrit", "Jenkins/CI", "Playwright basics", "Docker basics"],
      architecture: ["microservices basics", "RabbitMQ asynchronous integrations"]
    },
    "/api/hire-me": {
      status: "hire_ready",
      why: [
        "Understands critical payment flows and transactional risk.",
        "Can test beyond UI by checking API, logs and database state.",
        "Writes defects with technical evidence and business context.",
        "Brings support-engineering experience from production and banking environments."
      ],
      best_fit: ["fintech", "payments", "banking", "e-commerce", "backend-heavy product teams"],
      call_to_action: "Invite Piotr to a QA interview focused on API, payments and diagnostics."
    }
  },
  pl: {
    "/api/profile": {
      kandydat: "Piotr Obara",
      rola: "Tester Manualny / Manual QA Engineer",
      specjalizacja: ["systemy płatnicze", "procesy transakcyjne", "e-commerce", "aplikacje bankowe"],
      podsumowanie: "Tester manualny skupiony na REST API, weryfikacji flow płatności, przygotowywaniu danych testowych i diagnostyce problemów na ścieżce API, logi, PostgreSQL.",
      kontakt: {
        email: "piotr.obara.97@gmail.com",
        telefon: "+48 602 363 240",
        linkedin: "linkedin.com/in/piotr-obara-aab063121"
      },
      cv: "Piotr-Obara-CV-PL.pdf"
    },
    "/api/experience": {
      aktualnie: {
        firma: "Fenige S.A.",
        zatrudnienie: "Pełny etat",
        lokalizacja: "Lublin, Lubelskie, Polska",
        rola: "Manual QA Engineer (Manual Tester / Quality Assurance)",
        okres: "2024-07 - obecnie",
        tryb: "Hybrydowo",
        obszar: ["backend Java/Spring", "aplikacje Angular", "płatności", "procesy transakcyjne", "testowanie REST API"]
      },
      poprzednio: [
        {
          firma: "Fenige S.A.",
          rola: "Second Line Support Engineer",
          okres: "2023-04 - 2024-07",
          tryb: "Stacjonarnie",
          wartosc: "Diagnoza problemów produkcyjno-testowych na podstawie API, logów, bazy danych i kontekstu biznesowego."
        },
        {
          firma: "PKO Bank Polski",
          zatrudnienie: "Pełny etat",
          lokalizacja: "Lublin, Lubelskie, Polska",
          role: [
            {
              rola: "Help Desk Support Specialist",
              okres: "2021-10 - 2023-04",
              tryb: "Stacjonarnie",
              wartosc: "Obsługa zgłoszeń technicznych, Active Directory, uprawnień i incydentów aplikacji bankowych."
            },
            {
              rola: "Customer Service Specialist",
              okres: "2020-10 - 2021-10",
              tryb: "Hybrydowo",
              wartosc: "Obsługa klienta w procesach bankowych i bezpośrednie wsparcie użytkowników biznesowych."
            }
          ]
        }
      ]
    },
    "/api/skills": {
      testowanie: ["funkcjonalne", "integracyjne", "regresyjne", "E2E", "eksploracyjne", "scenariusze negatywne"],
      api: ["Postman", "Swagger", "walidacja request/response", "statusy HTTP", "autoryzacja", "walidacja danych biznesowych"],
      diagnostyka: ["SQL", "PostgreSQL", "analiza logów", "flow API -> logi -> baza", "korelacja zdarzeń"],
      narzedzia: ["Jira", "Confluence", "Metabase", "pgAdmin", "IntelliJ IDEA", "Gerrit", "Jenkins/CI", "podstawy Playwright", "podstawy Docker"],
      architektura: ["podstawy mikroserwisów", "integracje asynchroniczne RabbitMQ"]
    },
    "/api/hire-me": {
      status: "gotowy_do_zatrudnienia",
      dlaczego: [
        "Rozumie krytyczne flow płatnicze i ryzyka transakcyjne.",
        "Testuje poza UI: API, logi i stan bazy danych.",
        "Opisuje defekty z dowodami technicznymi i kontekstem biznesowym.",
        "Wnosi doświadczenie support-engineering z produkcji i bankowości."
      ],
      najlepsze_dopasowanie: ["fintech", "płatności", "bankowość", "e-commerce", "zespoły produktowe z mocnym backendem"],
      call_to_action: "Zaproś Piotra na rozmowę QA o API, płatnościach i diagnostyce."
    }
  }
};

let currentLang = localStorage.getItem("language") || "en";

const revealElements = document.querySelectorAll("[data-reveal]");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealElements.forEach((element) => revealObserver.observe(element));

const tabs = document.querySelectorAll(".artifact-tab");
const panels = document.querySelectorAll(".artifact-panel");
const modal = document.querySelector("#caseModal");
const modalTitle = document.querySelector("#modalTitle");
const modalKicker = document.querySelector("#modalKicker");
const modalBody = document.querySelector("#modalBody");
const modalClose = document.querySelector(".modal-close");
const endpointSelect = document.querySelector("#endpointSelect");
const jsonResponse = document.querySelector("#jsonResponse");
const apiStatus = document.querySelector("#apiStatus");
const apiTime = document.querySelector("#apiTime");

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("language", lang);
  document.documentElement.lang = lang;
  document.title = lang === "pl" ? "Piotr Obara - Tester Manualny" : "Piotr Obara - Manual QA Engineer";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = translations[lang][key] || translations.en[key] || element.textContent;
  });

  document.querySelectorAll("[data-cv-link]").forEach((link) => {
    link.href = cvFiles[lang];
  });

  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  renderApiResponse(endpointSelect.value, true);
}

function renderApiResponse(endpoint, instant = false) {
  const response = apiResponses[currentLang][endpoint];
  apiStatus.textContent = "200 OK";
  apiTime.textContent = `${instant ? 18 : Math.floor(34 + Math.random() * 90)} ms`;
  jsonResponse.textContent = JSON.stringify(response, null, 2);
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;
    tabs.forEach((item) => item.classList.toggle("active", item === tab));
    panels.forEach((panel) => panel.classList.toggle("active", panel.id === target));
  });
});

document.querySelectorAll("[data-artifact]").forEach((button) => {
  button.addEventListener("click", () => {
    const caseItem = caseData[currentLang][button.dataset.artifact];
    modalKicker.textContent = caseItem.kicker;
    modalTitle.textContent = caseItem.title;
    modalBody.innerHTML = caseItem.body;
    modal.showModal();
  });
});

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

document.querySelector("#sendRequest").addEventListener("click", () => {
  renderApiResponse(endpointSelect.value);
});

document.querySelectorAll("[data-endpoint]").forEach((button) => {
  button.addEventListener("click", () => {
    endpointSelect.value = button.dataset.endpoint;
    renderApiResponse(button.dataset.endpoint);
  });
});

endpointSelect.addEventListener("change", () => renderApiResponse(endpointSelect.value));
modalClose.addEventListener("click", () => modal.close());

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});

applyLanguage(currentLang);
