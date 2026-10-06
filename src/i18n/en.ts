import type { Dict } from './pl';

const en: Dict = {
  lang: 'en',
  otherLang: { code: 'pl', label: 'PL', href: '/', name: 'Wersja polska' },
  meta: {
    title: 'Piotr Obara · Software tester, test analyst',
    description:
      'Software tester based in Lublin, Poland. Banking, payments and insurance: requirements analysis, test design, APIs, SQL and accessibility. This site is tested by its own Playwright pipeline.'
  },
  skip: 'Skip to content',
  nav: {
    label: 'Main navigation',
    menu: 'Menu',
    items: [
      { href: '#o-mnie', label: 'About' },
      { href: '#jak-testuje', label: 'How I test' },
      { href: '#doswiadczenie', label: 'Experience' },
      { href: '#dowody', label: 'Evidence' },
      { href: '#kontakt', label: 'Contact' }
    ],
    cv: 'Download CV'
  },
  status: {
    e2e: 'E2E tests',
    a11y: 'WCAG 2.2 AA',
    lastRun: 'last run',
    passing: 'passing',
    failing: 'failing',
    violations: (n: number) => (n === 1 ? '1 violation' : `${n} violations`),
    noData: 'no data',
    ciLabel: 'Results of the latest test run of this site'
  },
  hero: {
    label: 'Software tester · Test analyst',
    title: 'I test systems where every detail matters.',
    lead: 'Banking, payments and insurance. I analyse requirements, design tests and verify data from the UI, through the API, down to the database. I am building my test automation skills in Playwright.',
    portraitAlt: 'Piotr Obara, software tester'
  },
  candidate: {
    label: 'Candidate summary',
    items: [
      { k: 'Availability', v: 'Immediately' },
      { k: 'Contract', v: 'Employment contract · B2B' },
      { k: 'Work mode', v: 'Remote · hybrid · on-site (Lublin)' },
      { k: 'Languages', v: 'Polish · English B2 (documentation, meetings, communication)' },
      { k: 'Certification', v: 'ISTQB CTFL 4.0' }
    ]
  },
  about: {
    label: 'About me',
    title: "Hi, I'm Piotr.",
    lead: 'I am a software tester from Lublin. I started on the other side of the systems - in customer service and IT support at PKO Bank Polski, where I saw how an application defect turns into a real problem for a specific person.',
    text: 'At Fenige, as a Second Line Support Engineer, I learned to look for root causes in logs, APIs and databases. Moving into testing was a natural next step: I would rather find a problem before release than explain it afterwards.',
    whyTitle: 'Why software testing?',
    why: [
      { t: 'Customer service', d: 'I saw what a defect means for the customer.' },
      { t: 'Help Desk', d: "I solved users' problems with banking applications." },
      { t: 'Second Line Support', d: 'I looked for the root cause in logs, APIs and SQL.' },
      { t: 'QA Engineer', d: 'I catch defects before they reach the customer.' }
    ],
    hobbyTitle: 'Outside work',
    hobbyIntro: 'I like to spend my free time actively. Sport teaches me regularity and patience, which help in long regression cycles too.',
    hobbies: [
      { img: 'mountains', w: 720, h: 960, t: 'Mountain trails', d: 'Hiking is my way to reset after a busy week.', alt: 'Piotr on a mountain trail with a mountain ridge in the background' },
      { img: 'running', w: 960, h: 640, t: 'Charity runs', d: 'I take part in charity runs - sport with a purpose.', alt: 'Piotr running a race with a start number', credit: 'Photo: Daniel Musiał Fotografia' },
      { img: 'cycling', w: 960, h: 640, t: 'Cycling', d: 'Gravel and road rides - my favourite way to spend a weekend.', alt: 'Piotr with a gravel bike on a country road' }
    ],
    finance: {
      t: 'Finance and the stock market',
      d: 'I invest long-term and follow the capital market. It helps me understand the financial products I test from the customer’s perspective.'
    }
  },
  domains: {
    label: 'Domains',
    title: 'Industries and processes I know',
    intro: 'Honestly marked: where I have worked and where I am still learning.',
    levels: { worked: 'worked in', learning: 'learning' },
    items: [
      { t: 'Card payments and e-commerce', level: 'worked', d: 'Authorisation, 3DS, clearing, refunds, reversals, Visa and Mastercard chargebacks.' },
      { t: 'Fraud and AML', level: 'worked', d: 'Monitoring rules, IP and gambling-domain blocking, profiling, alerts.' },
      { t: 'Banking', level: 'worked', d: 'Supporting banking applications in branches, handling the loan process by phone.' },
      { t: 'Regulation and settlement', level: 'worked', d: 'CESOP reporting to the Polish tax authority, settlement files, deposit currency conversion.' },
      { t: 'Insurance', level: 'learning', d: 'Loan repayment insurance and premium calculation - in my QA Lab.' }
    ]
  },
  howITest: {
    label: 'How I test',
    title: 'Testing starts before the first line of code',
    items: [
      { t: 'Requirements analysis', d: 'I question requirements before code is written and write acceptance criteria that can be verified.', ev: 'Specification in Figma', href: 'figma' },
      { t: 'Test design techniques', d: 'Boundary values, equivalence partitioning and decision tables instead of random clicking.', ev: 'Criteria 6-10 in the spec', href: 'figma' },
      { t: 'Risk-based testing', d: 'I scope regression and UAT around what could hurt the customer or settlement.', ev: 'Test story', href: '#historia' },
      { t: 'Diagnosis: API → logs → database', d: 'Postman, SQL and PostgreSQL. A bug report should be reproducible without my help.', ev: 'GET /api/profile.json', href: '/api/profile.json' }
    ]
  },
  experience: {
    label: 'Experience',
    title: 'From customer service to quality assurance',
    jobs: [
      {
        time: '07.2024 - present',
        role: 'Manual QA Engineer',
        org: 'Fenige S.A. · fintech, payments',
        points: [
          'The only tester in a team of three developers, in two-week Scrum sprints.',
          'I test Visa and Mastercard chargebacks, fraud and AML rules, and CESOP reporting.',
          'I test REST APIs and data flow: application → API → microservices → PostgreSQL.',
          'I run UAT and choose the regression scope based on risk analysis.',
          'I write tests and scripts in Postman, run with the Collection Runner.'
        ]
      },
      {
        time: '04.2023 - 07.2024',
        role: 'Second Line Support Engineer',
        org: 'Fenige S.A.',
        points: [
          'Diagnosed production incidents by correlating APIs, logs and SQL data.',
          'Verified transactions and settlements together with banks, Visa and Mastercard.',
          'Generated and submitted CESOP reports to the tax authority via API.'
        ]
      },
      {
        time: '10.2021 - 04.2023',
        role: 'IT Support Specialist (Help Desk)',
        org: 'PKO Bank Polski',
        points: ['Handled incidents and access issues in banking applications used by branches.']
      },
      {
        time: '10.2020 - 10.2021',
        role: 'Customer Service Consultant',
        org: 'PKO Bank Polski',
        points: ['Handled the loan process by phone: data and creditworthiness checks, completing applications.']
      }
    ],
    story: {
      label: 'Test story',
      title: 'One fix, three more defects',
      steps: [
        { k: 'Situation', v: 'A fix for saving monitoring rules when editing a merchant in the admin panel.' },
        { k: 'Action', v: 'Besides the fix itself, I tested the neighbouring edit paths and checked the data in the database.' },
        { k: 'Result', v: 'I found three independent defects, including a risk of overwriting another merchant’s configuration.' }
      ]
    }
  },
  evidence: {
    label: 'Evidence',
    title: 'Every claim comes with evidence',
    intro: 'Things you can open and check. Statuses come from the latest test run of this site in GitHub Actions.',
    soon: 'in progress',
    reports: { summary: 'Download the test report (HTML)', full: 'Full Playwright report online', trace: 'Test recording in Trace Viewer' },
    open: 'Open',
    items: [
      { key: 'a11y', t: 'WCAG report', d: 'This site is scanned with axe-core on every CI run. A report including manual tests is in progress.', href: 'report' },
      { key: 'figma', t: 'Design QA with Figma', d: 'Design, tokens and 10 acceptance criteria in Figma. Tests check that the site matches them.', href: 'figma' },
      { key: 'e2e', t: 'Playwright in CI', d: 'E2E, accessibility and design-conformance tests run on every change and nightly.', href: 'repo' },
      { key: 'api', t: 'API', d: 'A real JSON endpoint with my profile. OpenAPI specification in progress.', href: '/api/profile.json' },
      { key: 'lab', t: 'QA Lab', d: 'A cash-loan application with repayment insurance, in a version with hidden defects to find.', href: null },
      { key: 'sql', t: 'SQL sandbox', d: 'An in-browser database with hidden data inconsistencies to catch with queries.', href: null }
    ]
  },
  growth: {
    label: 'Growth',
    title: 'What I am learning',
    items: [
      { t: 'ISTQB Certified Tester Foundation Level 4.0', s: 'certified' },
      { t: 'Playwright + TypeScript', s: 'in progress · tests of this site' },
      { t: 'Digital accessibility, WCAG 2.2', s: 'in progress · audit of this site' }
    ]
  },
  contact: {
    label: 'Contact',
    title: 'Let’s talk about testing in your team',
    text: 'Email is the fastest way to reach me. I am happy to walk you through my tests in an interview.',
    email: 'Email',
    phone: 'Phone',
    showPhone: 'Show number',
    noJsPhone: 'I will share my number in reply to your email.'
  },
  footer: {
    design: 'Design in Figma',
    code: 'Code and tests on GitHub',
    tested: 'Site tested with Playwright and axe-core'
  }
};

export default en;
