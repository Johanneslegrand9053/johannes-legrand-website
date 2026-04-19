import { createClient } from '@sanity/client'

const token = process.env.SANITY_TOKEN
if (!token) {
  console.error('❌  SANITY_TOKEN fehlt. Führe das Script so aus:')
  console.error('   SANITY_TOKEN=<dein-token> node migrate.mjs')
  process.exit(1)
}

const client = createClient({
  projectId: 'c0w7chas',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

// ─── SITE SETTINGS ─────────────────────────────────────────────────────────

const siteSettings = {
  _type: 'siteSettings',
  _id: 'site-settings',
  contactEmail: 'johannes.legrand@icloud.com',
  linkedinUrl: 'https://www.linkedin.com/in/johannes-legrand-12920b199/',
  footerTagline: 'Interim COO & Geschäftsführer',
  footerTagline_en: 'Interim COO & Managing Director',
  footerCopyright: '© 2025 Johannes Legrand. Alle Rechte vorbehalten.',
}

// ─── HERO ───────────────────────────────────────────────────────────────────

const hero = {
  _type: 'hero',
  _id: 'hero-singleton',
  available: 'Ab sofort verfügbar',
  available_en: 'Available immediately',
  subtitle: 'Interim COO & Geschäftsführer',
  subtitle_en: 'Interim COO & Managing Director',
  tagline: 'Operationale Exzellenz. Strategische Wirkung. Messbare Ergebnisse.',
  tagline_en: 'Operational Excellence. Strategic Impact. Measurable Results.',
  description:
    'Ich übernehme operative Führungsverantwortung in kritischen Phasen – von Transformation und Restrukturierung bis hin zu Wachstum und Internationalisierung. Mit klarem Blick, Tempo und Erfahrung aus über 15 Jahren in Führungspositionen.',
  description_en:
    'I take operational leadership responsibility in critical phases – from transformation and restructuring to growth and internationalization. With clear vision, speed, and over 15 years of experience in leadership roles.',
  stats: [
    { value: 15000, suffix: '+', label: 'Mitarbeiter geführt', label_en: 'Employees led' },
    { value: 10, suffix: ' Mrd. €+', label: 'Umsatzverantwortung', label_en: 'Revenue responsibility' },
    { value: 25, suffix: '+', label: 'Jahre Erfahrung', label_en: 'Years of experience' },
  ],
}

// ─── ABOUT ──────────────────────────────────────────────────────────────────

const about = {
  _type: 'about',
  _id: 'about-singleton',
  label: 'Über mich',
  label_en: 'About',
  title: 'Vom Strategen zum Macher',
  title_en: 'From Strategist to Executor',
  bio: 'Johannes Legrand ist ein erfahrener Interim Manager mit nachgewiesener Erfolgsbilanz als COO, Geschäftsführer und Transformationsverantwortlicher. Er verbindet strategisches Denken mit operativer Durchsetzungsstärke – und bringt Unternehmen in Bewegung, wenn es darauf ankommt.',
  bio_en: 'Johannes Legrand is an experienced Interim Manager with a proven track record as COO, Managing Director, and transformation leader. He combines strategic thinking with operational decisiveness – and gets organizations moving when it matters most.',
  bio2: 'Seine Stärke liegt in der schnellen Situationsanalyse, dem Aufbau leistungsfähiger Teams und der konsequenten Umsetzung – messbar, nachhaltig, mit Respekt für Kultur und Menschen.',
  bio2_en: 'His strengths lie in rapid situation analysis, building high-performance teams, and consistent execution – measurable, sustainable, with respect for culture and people.',
  highlights: [
    { text: '15+ Jahre Führungserfahrung', text_en: '15+ years of leadership experience' },
    { text: 'Mittelstand & internationale Konzerne', text_en: 'SMEs & international corporations' },
    { text: 'Branchen: Industrie, Handel, Tech, Services', text_en: 'Industries: Manufacturing, Retail, Tech, Services' },
    { text: 'DACH-Region + internationaler Einsatz', text_en: 'DACH region + international deployment' },
  ],
  badgeValue: '15+',
  badgeLabel: 'Jahre\nFührung',
  badgeLabel_en: 'Years\nLeadership',
}

// ─── SERVICES ───────────────────────────────────────────────────────────────

const services = [
  {
    _type: 'service',
    title: 'Interim COO / Geschäftsführer',
    title_en: 'Interim COO / Managing Director',
    description: 'Nahtlose Übernahme der operativen Führung. Ich handle Vakanzüberbrückung, Restrukturierung oder Wachstumsphasen – mit voller Verantwortung und klarem Mandat.',
    description_en: 'Seamless takeover of operational leadership. I handle vacancy bridging, restructuring, or growth phases – with full accountability and a clear mandate.',
    order: 1,
  },
  {
    _type: 'service',
    title: 'Transformation & Restrukturierung',
    title_en: 'Transformation & Restructuring',
    description: 'Change Management, Prozessoptimierung und organisationale Neuausrichtung. Ich führe durch Veränderung – strukturiert, schnell, mit Fokus auf Ergebnisse.',
    description_en: 'Change management, process optimization, and organizational realignment. I lead through change – structured, fast, with a focus on results.',
    order: 2,
  },
  {
    _type: 'service',
    title: 'Wachstum & Skalierung',
    title_en: 'Growth & Scaling',
    description: 'Aufbau skalierbarer Strukturen, Prozesse und Teams für nachhaltiges Wachstum. Von der Strategie bis zur operativen Umsetzung.',
    description_en: 'Building scalable structures, processes, and teams for sustainable growth. From strategy to operational execution.',
    order: 3,
  },
  {
    _type: 'service',
    title: 'Internationalisierung',
    title_en: 'Internationalization',
    description: 'Markteintritt, Cross-Border-Operationen und internationale Teamführung. Mit Erfahrung in der DACH-Region und darüber hinaus.',
    description_en: 'Market entry, cross-border operations, and international team leadership. With experience across the DACH region and beyond.',
    order: 4,
  },
  {
    _type: 'service',
    title: 'Post-Merger Integration',
    title_en: 'Post-Merger Integration',
    description: 'Steuerung von M&A-Integrationsprojekten: Prozesse, Systeme, Kulturen zusammenführen – effizient und mit Blick für den Menschen.',
    description_en: 'Managing M&A integration projects: aligning processes, systems, and cultures – efficiently and with care for people.',
    order: 5,
  },
  {
    _type: 'service',
    title: 'Board Advisory & Projektmandat',
    title_en: 'Board Advisory & Project Mandate',
    description: 'Strategische Beratung für Gesellschafter und Boards. Kurzfristige Projektmandate mit definierten Zielen und klarem Reporting.',
    description_en: 'Strategic advisory for shareholders and boards. Short-term project mandates with defined goals and clear reporting.',
    order: 6,
  },
]

// ─── TESTIMONIALS ───────────────────────────────────────────────────────────

const testimonials = [
  {
    _type: 'testimonial',
    name: 'Mark Dorn',
    role: 'Member of Henkel Management Board, Executive Vice President',
    quote: 'Johannes war immer ein zuverlässiger Partner.',
    quote_en: 'Johannes was always a reliable partner.',
    order: 1,
  },
  {
    _type: 'testimonial',
    name: 'Jan Dirk Auriss',
    role: 'CEO, Schülke',
    quote: 'Ich habe immer genossen, mit Johannes zusammenzuarbeiten.',
    quote_en: 'I always enjoyed working with Johannes.',
    order: 2,
  },
  {
    _type: 'testimonial',
    name: 'Louise Legrand',
    role: 'Tochter',
    quote: 'Die beste Tochter.',
    quote_en: 'Die beste Tochter.',
    order: 3,
  },
]

// ─── CASE STUDIES ───────────────────────────────────────────────────────────

const cases = [
  {
    _type: 'caseStudy',
    tag: 'Restrukturierung', tag_en: 'Restructuring',
    title: 'Turnaround in 90 Tagen', title_en: 'Turnaround in 90 Days',
    industry: 'Mittelstand | Industrie',
    result: 'EBITDA +12% innerhalb von 3 Monaten', result_en: 'EBITDA +12% within 3 months',
    description: 'Übernahme der Interim-COO-Rolle in einem produzierenden Unternehmen mit akutem Ergebnisdruck. Strukturanalyse, Quick Wins in Einkauf und Produktion, Neuausrichtung des Führungsteams.',
    description_en: 'Took over the Interim COO role in a manufacturing company under acute profit pressure. Structural analysis, quick wins in procurement and production, realignment of the leadership team.',
    order: 1,
  },
  {
    _type: 'caseStudy',
    tag: 'Wachstum', tag_en: 'Growth',
    title: 'Skalierung auf 3 Märkte', title_en: 'Scaling to 3 Markets',
    industry: 'E-Commerce | Tech',
    result: 'Internationaler Rollout in 6 Monaten', result_en: 'International rollout in 6 months',
    description: 'Aufbau der operativen Infrastruktur für die Expansion in DE, AT und CH. Prozessdesign, Teamaufbau, Systemauswahl und Implementierung.',
    description_en: 'Built operational infrastructure for expansion into DE, AT, and CH. Process design, team building, system selection and implementation.',
    order: 2,
  },
  {
    _type: 'caseStudy',
    tag: 'PMI', tag_en: 'PMI',
    title: 'Post-Merger Integration', title_en: 'Post-Merger Integration',
    industry: 'B2B Services',
    result: '2 Unternehmen, 1 Einheit, 4 Monate', result_en: '2 companies, 1 unit, 4 months',
    description: 'Steuerung der Integration nach Akquisition: Harmonisierung von Prozessen, Systemen und Unternehmenskultur unter Zeitdruck.',
    description_en: 'Managed post-acquisition integration: harmonization of processes, systems, and corporate culture under time pressure.',
    order: 3,
  },
]

// ─── EXPERIENCE ─────────────────────────────────────────────────────────────

const experience = [
  {
    _type: 'experience', company: 'Henry Lamotte', location: 'Hamburg', order: 1,
    roles: [{
      period: 'März 2025 – Heute',
      role: 'Interim COO', role_en: 'Interim COO',
      description: 'Operative Gesamtverantwortung als Interim COO bei Henry Lamotte, einem der führenden europäischen Spezialrohstoff-Händler. Steuerung der internen Operations, Optimierung von Prozessen und Führungsstrukturen.',
      description_en: "Overall operational responsibility as Interim COO at Henry Lamotte, one of Europe's leading specialty raw material traders. Steering internal operations, optimizing processes and leadership structures.",
    }],
  },
  {
    _type: 'experience', company: 'Henkel', location: 'Amsterdam', order: 2,
    roles: [
      {
        period: 'Juli 2023 – März 2025',
        role: 'CSVP Operations & Supply Chain', role_en: 'CSVP Operations & Supply Chain',
        description: 'Mitglied des Executive Committee Henkel Adhesive Technologies. Verantwortung für einen Umsatz von über 10 Mrd. € und Führung von 15.000 Mitarbeiterinnen und Mitarbeitern weltweit.',
        description_en: 'Member of the Executive Committee of Henkel Adhesive Technologies. Responsible for revenue of over €10 billion and leading 15,000 employees worldwide. Strategic oversight of global operations and supply chain.',
      },
      {
        period: 'September 2020 – Januar 2024',
        role: 'Head of Global Operations & Supply Chain Adhesive Technologies',
        role_en: 'Head of Global Operations & Supply Chain Adhesive Technologies',
        description: 'Globale Verantwortung für Operations und Supply Chain im Bereich Adhesive Technologies. Aufbau resilienter Lieferketten, Standortoptimierung und Steuerung internationaler Produktionsnetzwerke.',
        description_en: 'Global responsibility for operations and supply chain in Adhesive Technologies. Building resilient supply chains, site optimization, and steering international production networks.',
      },
    ],
  },
  {
    _type: 'experience', company: 'Beiersdorf', location: 'Hamburg', order: 3,
    roles: [
      {
        period: 'Januar 2018 – Dezember 2019',
        role: 'VP Supply Chain Europe & Global Continuous Improvement',
        role_en: 'VP Supply Chain Europe & Global Continuous Improvement',
        description: 'Leitung der europäischen Supply Chain sowie Verantwortung für das globale Continuous Improvement Programm. Einführung konzernweiter Lean-Methoden und signifikante Effizienzsteigerungen in der Lieferkette.',
        description_en: 'Led European supply chain and the global Continuous Improvement program. Introduced group-wide lean methodologies and delivered significant efficiency gains across the supply chain.',
      },
      {
        period: 'Januar 2015 – Dezember 2017',
        role: 'VP Manufacturing Europe and Americas & Global Continuous Improvement',
        role_en: 'VP Manufacturing Europe and Americas & Global Continuous Improvement',
        description: 'Verantwortung für Produktionsstandorte in Europa und Amerika. Leitung umfangreicher Investitionsprojekte, Kapazitätserweiterungen und Qualitätsoffensiven.',
        description_en: 'Responsible for manufacturing sites across Europe and the Americas. Led major investment projects, capacity expansions, and quality initiatives.',
      },
    ],
  },
  {
    _type: 'experience', company: 'Procter & Gamble', location: 'Europa', order: 4,
    roles: [{
      period: 'Mai 2001 – Dezember 2014',
      role: 'Supply Chain & Manufacturing – verschiedene Führungspositionen',
      role_en: 'Supply Chain & Manufacturing – Various Leadership Roles',
      description: 'Über 13 Jahre in verschiedenen leitenden Funktionen in Supply Chain und Manufacturing quer durch Europa. Aufbau fundierter Expertise in internationalen Produktionsnetzwerken, operativer Exzellenz und Führung multikultureller Teams.',
      description_en: 'Over 13 years in various senior roles across supply chain and manufacturing throughout Europe. Built deep expertise in international production networks, operational excellence, and leading multicultural teams.',
    }],
  },
]

// ─── MIGRATION ──────────────────────────────────────────────────────────────

async function deleteAll(type) {
  const ids = await client.fetch(`*[_type == $type]._id`, { type })
  if (!ids.length) return
  const tx = client.transaction()
  ids.forEach((id) => tx.delete(id))
  await tx.commit()
}

async function migrate() {
  console.log('🚀 Starte vollständige Migration nach Sanity...\n')

  // Delete existing docs to avoid duplicates
  console.log('🗑  Lösche bestehende Daten...')
  await Promise.all([
    deleteAll('testimonial'),
    deleteAll('caseStudy'),
    deleteAll('experience'),
    deleteAll('service'),
  ])

  // Singletons
  await client.createOrReplace(siteSettings)
  console.log('✅ Website Einstellungen')

  await client.createOrReplace(hero)
  console.log('✅ Hero')

  await client.createOrReplace(about)
  console.log('✅ Über mich')

  // Lists
  for (const s of services) await client.create(s)
  console.log(`✅ ${services.length} Leistungen`)

  for (const t of testimonials) await client.create(t)
  console.log(`✅ ${testimonials.length} Referenzen`)

  for (const c of cases) await client.create(c)
  console.log(`✅ ${cases.length} Case Studies`)

  for (const e of experience) await client.create(e)
  console.log(`✅ ${experience.length} Erfahrungs-Einträge`)

  console.log('\n🎉 Migration abgeschlossen! Alle Inhalte sind in Sanity.')
}

migrate().catch((err) => {
  console.error('❌ Fehler:', err.message)
  process.exit(1)
})
