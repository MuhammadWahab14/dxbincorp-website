// All copy below is taken from the live https://dxbincorp.com/ website.
// Only formatting was normalised (Title Case -> sentence case, obvious typos, "Domtax" -> "We").

export const SITE = {
  url: 'https://dxbincorp.com',
  phone: '+971 54 722 9600',
  tel: '+971547229600',
  email: 'sarmad@dxbincorp.com',
  wa: 'https://wa.me/971547229600?text=',
  head: 'Suite 1002, New Century City Tower, Port Saeed, Deira, Dubai, UAE.',
};

export const HERO = {
  h1: 'Incorporate your Dream Business',
  sub: 'We are one of leaders in the UAE for business incorporation activities.',
  cta: 'Get Your Consultation Now',
};

export const ABOUT = {
  lead: 'DXBINCORP is a Business Consultancy division of A2Z Consulting, Ahmad Alagbari Chartered Accountants Group affiliate company.',
  body: 'We specialize in guiding businesses through the process of establishing their presence in one of the world’s most dynamic and thriving business hubs. Our team of experts is dedicated to providing comprehensive support, from initial setup to ongoing compliance, ensuring a seamless and efficient incorporation experience.',
};

export const NEED_HELP = {
  h: 'Need help? Book a call at a time to suit you',
  p: 'Our services comprise of Complete Business Incorporation and support services all provided under one Umbrella.',
  cta: 'Book your appointment',
};

export const OFFICES = [
  { city: 'Dubai', addr: 'Suite 1002, New Century City Tower, Port Saeed, Deira, Dubai, UAE.' },
  { city: 'Sharjah', addr: 'Saif Suite Y1-014, P.O.Box 121866, Sharjah, UAE' },
  { city: 'Abu Dhabi', addr: 'Island East 8-0, Abu Dhabi, UAE' },
  { city: 'Karachi, Pakistan', addr: 'Suite 113, 3rd Floor, Hafeez Center, Block 7 & 8 Shahra-e Faisal Karachi Pakistan.' },
  { city: 'London, UK', addr: '115 London Road, Morden, Surrey, SM4 5HP, London, UK' },
  { city: 'Labuan, Malaysia', addr: 'U0067, 1st Floor, Jalan OKK Awang Besar P.O.Box 82257, 87007 W.P Labuan, Malaysia' },
];

const I = {
  home: 'M3 21V8l9-5 9 5v13M9 21v-6h6v6M3 21h18',
  star: 'M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.5 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z',
  doc: 'M4 4h16v16H4zM8 9h8M8 13h8M8 17h5',
  pct: 'M5 19 19 5M7.5 8a1.5 1.5 0 1 0 0-.01M16.5 17a1.5 1.5 0 1 0 0-.01',
  chart: 'M4 20V10M10 20V4M16 20v-7M22 20H2',
  shield: 'M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6zM9 12l2 2 4-4',
  bank: 'M3 10l9-6 9 6M5 10v9M9.5 10v9M14.5 10v9M19 10v9M3 21h18',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0',
  cross: 'M12 3v18M3 12h18M6 6l12 12M18 6 6 18',
  grc: 'M5 3h14v18H5zM9 8h6M9 12h6M9 16h3',
  it: 'M4 5h16v11H4zM9 20h6M12 16v4',
  bin: 'M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13',
};

/* ---------- Company types ---------- */
export const TYPES = [
  {
    slug: 'mainland-companies', title: 'Mainland Companies', label: 'Mainland Companies',
    teaser: 'Sole Establishment, Civil Company / Professional firm setup services, Limited Liability Companies – LLC Companies, Branch and Representative Office, Joint Venture, Public & Private Shareholding Company',
    desc: 'Formation of mainland companies in the UAE: sole establishment, civil company, LLC, branch and representative office, joint venture and shareholding companies.',
    h2: 'Formation of Mainland Companies in UAE',
    blocks: [
      ['p', 'A mainland company is a company registered in one of the UAE DED (Department of Economic Development). It means that if you choose to conduct business in UAE mainland, you will need to register a business entity with the DED, which will then provide you a business license to start doing business in UAE.'],
      ['p', 'Mainland companies can practice any industrial, commercial, trading, professional, or tourism activity. Some professional activities are excluded as per DED\'s business regulations, and others require approvals of authorities that regulate these activities.'],
      ['p', 'Foreign investors may start their business in a partnership where 51% ownership of the company belongs to UAE nationals or choose a sole establishment company formation to own 100% of shares. However, some business activities are reserved for UAE nationals only.'],
      ['p', 'Shareholders must fulfill the formation documents and processes, which included the appointment of a manager by the Memorandum of Association (MOA) or service agreement, for a limited or an unlimited period. Mainland must appoint a minimum of one manager and up to a maximum of five managers for the business.'],
      ['h3', 'The different types of mainland companies are as below:'],
      ['types', [
        ['1. Sole Establishment', [
          ['p', 'It is an establishment owned by a sole proprietor to operate an economic activity (commercial, professional, industrial, agricultural, or real property). An establishment’s financial liability is linked to the proprietor who shall be responsible for all its financial obligations.'],
        ]],
        ['2. Civil Company / Professional Firm Setup Services', [
          ['p', 'We undertake the entire process of establishing your civil or professional firm. Our services comprise of expert advisory, selection of local service agents, assistance in the selection of locations- offices, organize business plan, and handle paperwork and documentation formalities.'],
        ]],
        ['3. Limited Liability Companies – LLC Companies', [
          ['p', 'LLC is the most common form of business enterprise in UAE. LLC company formation requires a UAE citizen known as the local sponsor or local service agent. The industrial and commercial licensed companies need a local sponsor, and they will hold a minimum of 51% of the shares and the remaining 49% can only be held by the expat.'],
          ['p', 'A local service agent is required for a company formation under the professional license and the expat can hold 100% of the shares of the company.'],
          ['p', 'We can provide the local sponsor and will provide all the agreements with the local sponsor to protect your business.'],
        ]],
        ['4. Branch and Representative Office', [
          ['p', 'We provide end to end solutions relating to the establishment of branches and representative offices in the UAE. The basic details regarding the branch and representative offices are as below.'],
          ['ul', ['A branch office is permitted to promote and market the products of its parent entity.', 'Also, it can enter transactions and offer services to customers.', 'Representative offices are only allowed to promote/market the business activity of parent company.', 'And cannot enter into a transaction in the name of its company']],
          ['p', 'Look after the entire process of establishing your branch or representative offices. We give strategic inputs, help select local sponsors, assist to select locations, on your business plan, and also paperwork and documentation formalities.'],
        ]],
        ['5. Joint Venture', [
          ['p', 'We can assist all joint venture operations setup requirements in UAE. We will coordinate with the potential partners, set strategic directions, co-ordinate your business plan, and also handle paperwork and documentation formalities.'],
          ['ul', ['Minimum local equity participation of 51%.', 'Profit and loss distribution can be mutually agreed.', 'So, you can hold 49% equity and still be eligible for a higher share of profits.']],
        ]],
        ['6. Public & Private Shareholding Company', [
          ['p', 'We establish shareholding companies in UAE from inception to conclusion. We give strategic advisory on company structure, selection of local partners, exclusive office locations, organize business plan, and handle documentation formalities etc. Salient features of this type of company are as below.'],
          ['ul', ['Minimum capital required for a public shareholding company is AED 10 million (US$ 2.725 million).', 'Minimum capital required for a private shareholding company is AED 2 million (US$ 0.545 million).', 'UAE nationals are appointed as chairman/ director.']],
        ]],
      ]],
    ],
  },
  {
    slug: 'free-zone-companies', title: 'Free Zone Companies', label: 'Free Zone Companies',
    teaser: 'FZE – Free zone Establishment (Single shareholder) FZC – Free Zone Company (Multi shareholder)',
    desc: 'Free zones are autonomous specified regions where 100% foreign ownership is allowed. The UAE has over 40 free zones across its seven emirates.',
    h2: 'Free Zone Companies',
    blocks: [
      ['p', 'Free Zones are Autonomous specified regions where 100% foreign ownership is allowed. Another common benefit of opening a business in a Free Zone is a personal income tax free environment, and free zone persons that qualify can benefit from a 0% corporate tax rate on qualifying income.'],
      ['p', 'UAE has over 40+ free zones established in all seven of its Emirates.'],
      ['p', 'Each Free zone having its own advantages based on geographical location as well as the support provided by the government for the specific businesses these free zones are supporting.'],
      ['p', 'An investor can commonly set up 3 types of business companies within a Free Zone Establishment (FZE) and a Branch of a business concern. A free zone company is allowed to free trade within the free zone and do import and export activities, however they are restricted to only their free zone.'],
      ['p', 'As Business consultant we recommended that each individual or company coming to UAE to open a new business takes the time to access their own business needs and takes into consideration our advice on selecting the most appropriate Free Zone that suits their business Model.'],
    ],
  },
  {
    slug: 'holding-companies-offshore', title: 'Holding Companies & Offshore', label: 'Off Shore Companies',
    teaser: 'Holding companies and offshore entities are two separate concepts, but they are sometimes used together to achieve specific financial goals. Let\'s discuss each of these concepts individually.',
    desc: 'Formation of holding companies and offshore entities in the UAE: asset protection, risk management, tax optimization and types of offshore companies.',
    h2: 'Formation of Holding Companies & Offshore in UAE',
    blocks: [
      ['p', 'Holding companies and offshore entities are two separate concepts, but they are sometimes used together to achieve specific financial goals. Let\'s discuss each of these concepts individually.'],
      ['h3', 'Holding Companies:'],
      ['p', 'A holding company, also known as a parent or umbrella company, is a corporation that owns a controlling interest in one or more subsidiary companies. Its primary purpose is to own and control other companies, rather than engaging in operational activities itself. Holding companies are commonly used for various reasons, including:'],
      ['defs', [
        ['A. Asset Protection', 'Holding companies can separate valuable assets from potential liabilities, thus protecting them from legal claims or financial risks.'],
        ['B. Risk Management', 'By creating separate subsidiaries, a holding company can compartmentalize risks associated with different business ventures.'],
        ['C. Tax Optimization', 'Holding companies may benefit from favorable tax jurisdictions, tax incentives, or tax treaties, resulting in reduced overall tax liabilities.'],
        ['D. Streamlined Management and Governance', 'Holding companies provide a centralized management structure, allowing for efficient control and coordination among subsidiaries.'],
      ]],
      ['h3', 'Offshore Companies:'],
      ['p', 'An offshore entity refers to a company, trust, or other legal structure established in a foreign jurisdiction, typically one with low or no taxes and increased privacy regulations. These jurisdictions are commonly known as tax havens. Offshore entities can be used for legitimate purposes, such as international business expansion or asset protection, but they have also been associated with illegal activities like tax evasion and money laundering. The key reasons for establishing offshore entities include:'],
      ['defs', [
        ['A. Tax Minimization', 'Offshore jurisdictions often offer low or zero taxation on certain types of income, allowing individuals or corporations to reduce their tax burdens legally.'],
        ['B. Privacy and Confidentiality', 'Offshore entities can provide enhanced privacy protection by keeping ownership and financial information confidential, making it harder for competitors, creditors, or authorities to access such details.'],
        ['C. Asset Protection', 'Offshore jurisdictions often have robust laws and regulations that offer asset protection benefits, shielding assets from legal claims or financial risks.'],
      ]],
      ['h3', 'Types of Offshore Companies'],
      ['p', 'There are several types of offshore companies that can be established in offshore jurisdictions. The specific types available may vary depending on the jurisdiction\'s laws and regulations. Here are some common types of offshore companies:'],
      ['defs', [
        ['International Business Company (IBC)', 'An International Business Company (IBC) is a popular type of offshore company. It is often established in jurisdictions that offer favorable tax and regulatory environments. IBCs are typically used for international trade, investment, and asset protection. They are known for their flexibility, ease of setup, and minimal reporting requirements.'],
        ['Limited Liability Company (LLC)', 'Some offshore jurisdictions also offer the option to establish limited liability companies (LLCs). An LLC combines the limited liability protection of a corporation with the pass-through taxation benefits of a partnership. LLCs are commonly used for holding assets, international trading, and conducting business activities.'],
        ['Trusts', 'Offshore trusts are commonly used for asset protection and estate planning purposes. A trust involves the transfer of assets to a trustee who holds and manages them on behalf of the beneficiaries. Offshore trust structures can offer increased privacy, tax planning benefits, and asset protection features.'],
        ['Offshore Banking and Financial Institutions', 'Offshore jurisdictions often provide a range of financial services, including offshore banks, financial institutions, and investment funds. These entities can offer various financial services, such as banking, investment management, wealth management, and fund administration, to individuals and businesses from around the world.'],
        ['Holding Companies', 'Offshore jurisdictions are also used for establishing offshore holding companies. These companies are formed to hold and control the shares of subsidiary companies in different jurisdictions. Holding companies can provide tax advantages, asset protection, and facilitate international business operations.'],
      ]],
      ['p', 'It\'s important to note that the availability of these types of offshore companies and the specific regulations governing them can vary significantly between jurisdictions. Additionally, it is crucial to comply with the laws and regulations of both the offshore jurisdiction and your home country to ensure legal and ethical operations.'],
      ['p', 'When considering the establishment of an offshore company, it is advisable to seek professional advice from legal, financial, and tax experts who can guide you through the process and help you understand the implications and requirements associated with each type of offshore entity.'],
    ],
  },
];

/* ---------- Home / Why UAE ---------- */
export const HOME_CARDS = {
  about: { title: 'About us', text: [ABOUT.lead, ABOUT.body] },
  why: { title: 'Why UAE?', text: ['We are committed to doing business in the UAE because it stands as a global beacon of economic growth, innovation, and opportunity. The UAE’s strategic location, business-friendly environment, and world-class infrastructure make it an ideal destination for businesses to thrive. By providing our services here, we empower companies to tap into this vibrant market, leveraging our expertise to navigate local regulations and capitalize on the numerous opportunities available.'] },
  zones: { title: 'List of Free Zones', text: ['Free Zones are Autonomous specified regions where 100% foreign ownership is allowed. The UAE’s strategic location, business-friendly environment, and world-class infrastructure make it an ideal destination for businesses to thrive. By providing our services here, we empower companies, including Free Zone Companies, to tap into this vibrant market. UAE has over 40+ free zones established in all seven of its Emirates.'] },
};

export const WHY_UAE = [
  'UAE is a major trade hub which acts as a nerve centre for trillions of dollars of business and investment into the Middle East, Europe, Africa, India, Asia and beyond, with the UAE being the world’s second largest economy in the Arab world. The nation sits at the centre of transcontinental traffic, connecting East and West, which has contributed to Dubai International retaining the title of the world’s busiest airport by international passengers for seven years running.',
  'UAE’s strategic global location, combined with business-friendly policies and future-forward infrastructure, have shaped the Emirates into a leading global trade, finance and e-commerce powerhouse.',
  'Whether in terms of global logistics or in terms of Aviation routes UAE is a major centre of activities. With is booming economy and the long adapted tradition of adapting all new trends and creating a tourist paradise UAE remains one of the few countries in the world which can claim to have 2.5 billion people living within a 4 four hour flight distance and 5 billion people living within 8 hours or less flight distance.',
];

/* ---------- Free zones table ---------- */
export const ZONES = [
  ['SAIF ZONE', 'Sharjah', 'Mixed-use'],
  ['HFZA', 'North, Port', 'Port, maritime, logistics, oil & gas'],
  ['RAKEZ', 'North, Port', 'Industries, production type'],
  ['SHAMS', 'Sharjah', 'E-commerce, media'],
  ['DMCC', 'Dubai', 'Commodity trade'],
  ['DAFZA', 'Dubai', 'Multinational, regional offices, various'],
  ['DIFC', 'Dubai', 'Financial'],
  ['JAFZA', 'Dubai', 'Industries, production type'],
  ['IFZA', 'Dubai', 'Various, offices'],
  ['DUQE', 'Dubai', 'Various, offices'],
  ['DTWCA', 'Dubai', 'Events, trading, etc.'],
  ['KIZAD', 'Abu Dhabi', 'Industrial activities'],
  ['Masdar City Free Zone', 'Abu Dhabi', 'Renewable energy'],
  ['Dubai Maritime City', 'Dubai', 'Maritime services'],
  ['Sharjah Publishing City', 'Sharjah', ''],
  ['Dubai Commercity', 'Dubai', ''],
  ['Khalifa Port Free Trade Zone', 'Abu Dhabi', 'Trade and logistics'],
  ['Creative City Free Zone', 'Fujairah', 'Creative design'],
  ['Ajman Free Zone', '', 'Trade'],
  ['Fujairah Free Zone', 'Fujairah', 'Trade and logistics'],
  ['Dubai South', 'Dubai', 'Artificial intelligence and futuristic activities'],
  ['Dubai Design District', 'Dubai', 'Creative design'],
  ['Dubai Science Park', 'Dubai', 'Scientific research'],
  ['International Humanitarian City', 'Dubai', 'Humanitarian hub'],
  ['Dubai Outsource City', 'Dubai', 'E-commerce and support services'],
  ['Dubai Silicon Oasis', 'Dubai', 'Technology, mixed-use'],
  ['Abu Dhabi Airports Free Zone', 'Abu Dhabi', 'Mixed use'],
  ['Abu Dhabi Global Market', 'Abu Dhabi', 'Financial hub'],
  ['Dubai Internet City', 'Dubai', 'Tecom-technology, mixed-use'],
  ['Twofour54', 'Abu Dhabi', 'Media'],
  ['Umm Al-Quwain Free Zone', 'Umm Al-Quwain', 'Mixed-use'],
  ['Ajman Media City Free Zone', 'Ajman', 'Media'],
  ['Meydan Free Zone', 'Dubai', 'Mixed-use'],
  ['Dubai Healthcare City', 'Dubai', 'Healthcare'],
  ['Dubai International Academic City', 'Dubai', 'Tecom-academic'],
  ['Dubai Production City', 'Dubai', 'Tecom-media'],
  ['Dubai Studio City', 'Dubai', 'Tecom-media'],
  ['Dubai Media City', 'Dubai', 'Tecom-media'],
];

/* ---------- Services ---------- */
const DOCS5 = ['Passport copy', 'Visa copy', 'Personal photo', 'Valid medical insurance', 'Medical test'];
const INVEST = [
  'Bringing a letter from an investment fund approved in the UAE stating that there is a deposit of 2 million dirhams',
  'Or bringing a valid commercial or industrial license with the company’s incorporation contract with the investor so that the investor\'s capital is not less than 2 million dirhams.',
  'Investing in a new or existing company as a partner with shares of a minimum of AED 2 million, not financed by a loan.',
  'Or bring a letter from the Federal Tax Authority stating that he is the owner of a company that pays the government no less than 250 thousand dirhams annually. On the other hand, bring a letter from the Federal Tax Authority stating that he is a partner in an establishment that pays the tax to the government and whose share in the tax is no less than 250 thousand dirhams annually.',
  ...DOCS5,
];

export const SERVICES = [
  {
    slug: 'company-incorporation', title: 'Company Incorporation', icon: I.home,
    short: 'The process of creating a company or commercial entity legally so that it can function as a separate legal entity is known as incorporation. In order to execute business activities.',
    h2: 'Company Incorporation Services in UAE',
    blocks: [
      ['p', 'The process of creating a company or commercial entity legally so that it can function as a separate legal entity is known as incorporation. In order to execute business activities. This process requires registering the firm with the appropriate government agencies and acquiring the requisite licenses.'],
      ['p', 'To create a company in Dubai, the following are the necessary steps:'],
      ['steps', [
        ['Select the business type', 'Choose the kind of business you wish to start. A mainland firm, a free zone company, or an offshore company are popular choices. Each type has its own rules, advantages, and limitations.'],
        ['Select a company name', 'Choose a distinctive name for your business that meets with the DED\'s (Department of Economic Development) naming standards. Make sure the name accurately describes your company\'s operations and does not infringe on any trademarks or copyrights.'],
        ['Engage local partners or sponsors', 'You could require a local partner or sponsor that owns the majority of the stock in the company, depending on the sort of business you choose. Depending on the sort of business and the jurisdiction, this need changes.'],
        ['Create the Memorandum of Association (MOA)', 'The MOA lists the goals, activities, shareholders, and other pertinent information for the company. It needs to be written up and notarized in front of a notary public, or by way of a business registration agency.'],
        ['Get the first approval', 'Send the required paperwork, such as the MOA, copies of passports, and other forms of identification, to the DED or appropriate free zone authority for initial permission. This stage makes sure that the intended business operations comply with the rules.'],
        ['Lease office space', 'Depending on the nature of your company and the relevant rules, you might be required to lease office space in Dubai. Free zones usually provide flexible options for office space, but mainland enterprises would need to have a real office presence.'],
        ['Finalize legal paperwork', 'Prepare the MOA, the lease agreement, and any other contracts that are necessary for the incorporation of the company. Hire a lawyer or a company registration agent to help you with this process.'],
        ['Acquire a trade license', 'Submit an application for the trade license necessary for your line of work. The DED or the appropriate free zone authority issues the license. The application requires the submission of required paperwork, payment of fees, and compliance with particular rules.'],
        ['Register with government agencies', 'Register with the Federal Authority for Identity and Citizenship, the General Directorate of Residency and Foreigners Affairs, the Dubai Chamber of Commerce and Industry, and other government agencies involved in processing visas.'],
        ['Apply for visas and permits', 'Submit applications for visas and work permits for your shareholders and workers based on the structure of your business and your staffing needs. This normally entails providing the required paperwork, including copies of passports, photos, and medical documents.'],
        ['Open bank accounts', 'To manage your business transactions, create a corporate bank account in Dubai after your firm has been incorporated. Please submit the necessary paperwork, including your company\'s trading license, a MOA, and other forms of identification.'],
      ]],
    ],
  },
  {
    slug: 'company-liquidation-services', title: 'Company Liquidation Services', icon: I.bin,
    short: 'The Process of closing out a Company\'s Financial Affairs Is called Liquidation. We Provide Qualified Advise on Liquidation, and our Qualified staff can support You at every stage of the process.',
    h2: 'Company Liquidation Services in UAE',
    blocks: [
      ['p', 'The process of closing out a Company\'s financial affairs is called liquidation. We provide qualified advise on liquidation, and our qualified staff can support you at every stage of the process. We are a specialized accounting firm in Dubai that has experience handling company liquidations. If you need Company Liquidation Services in Dubai, let us know!'],
      ['p', 'We ensure that the UAE liquidation process is carried out correctly and that all established regulations are adhered to, and we handle professional liquidation of existing companies. We draft the report of the liquidator written by a certified auditor. This document is also known as a Liquidator\'s Letter or a No Liability Letter.'],
      ['p', 'We offer liquidation services for all types of businesses in Dubai, Sharjah, Ajman, Abu Dhabi, Fujairah, and Ras Al Khaimah, including limited liability corporations, free zone businesses, and offshore businesses. We also help with the creation of necessary documents for liquidation, such as the Board decision, power of attorney, audit report, liquidator\'s statement, etc.'],
      ['h3', 'Liquidation services include:'],
      ['ul', ['Appointment as liquidator', 'Administer the liquidation process', 'Supervise asset disposals', 'Direct payments to creditors', 'Liaise with liquidation accountants', 'Process third party liquidation costs', 'File de-registrations and other formal notifications', 'Administer the complete documentation', 'Supervise the on-going and liquidation specific accounting requirements.']],
    ],
  },
  {
    slug: 'golden-visa-services', title: 'Golden Visa Services', icon: I.star,
    short: 'The Golden Visa is A Residency Program Introduced by The UAE, Including Dubai, To Attract Foreign Investors, Entrepreneurs, Talented Professionals, and Their Families To Live And Work In The Country.',
    h2: 'Golden Visa Services in Dubai, UAE',
    blocks: [
      ['p', 'The "Golden Visa" is a residency program introduced by the United Arab Emirates (UAE), including Dubai, to attract foreign investors, entrepreneurs, talented professionals, and their families to live and work in the country. It offers long-term residency permits with a range of benefits to eligible individuals. We are specialized for Golden Visa services in dubai, UAE.'],
      ['p', 'The Golden Visa provides an extended residency period beyond the usual tourist or employment visas. It allows individuals to live and work in the UAE for a longer duration, typically ranging from 5 to 10 years, and can be renewed. The visa also offers various benefits, such as:'],
      ['defs', [
        ['Residency', 'Holders of the Golden Visa can reside in the UAE for an extended period, providing stability and security for themselves and their families.'],
        ['Business Opportunities', 'Golden Visa holders can establish and own businesses in the UAE without the need for a local sponsor or partner.'],
        ['Education', 'The visa facilitates access to educational institutions in the UAE for the visa holder and their dependents.'],
        ['Health Care', 'Golden Visa holders can access the healthcare system in the UAE, including government and private healthcare facilities.'],
        ['Sponsorship', 'The visa allows Golden Visa holders to sponsor their immediate family members, including spouse and children, enabling them to reside in the UAE.'],
      ]],
      ['h3', 'Formation of Golden Visa Services in Dubai'],
      ['reqs', [
        ['An investor in public investments', INVEST],
        ['Real estate investor', ['Letter from the Real Estate Registration Department in the relevant emirate stating that he owns one or more properties whose value is not less than 2 million dirhams, stating that the property is not subject to a loan', 'Proof of housing in the country (home ownership or house rental contract).', ...DOCS5]],
        ['Entrepreneurs', INVEST],
        ['Special Talent – Doctors', ['Having the approval Letter from the Ministry of Health in the country to practice the profession of medicine.', ...DOCS5]],
        ['Special Talent – Creative people in the fields of culture and art', ['Having an approved letter from the Department of Culture and Arts in the relevant emirate. (People of culture and art)', ...DOCS5]],
        ['Special Talent – Executive Directors', ['Holding a certified degree from the university', 'Minimum 5 years of experience.', 'Salary not less than AED 50,000', 'Valid work contract.', ...DOCS5]],
        ['Special Talent – Fields of science and athletes', ['Having an approved letter from the Department of Culture and Arts in the relevant emirate. (People of culture and art).', ...DOCS5]],
        ['Special Talent – PhD holders', ['Having a certified copy of the PhD from the Ministry of Education in one of the priority disciplines (PhD degrees).', ...DOCS5]],
        ['Special Talent – Specialists in the fields of engineering and science', ['Fields: epidemiology and viruses, engineering of artificial intelligence, engineering of big data, computer engineering, electronics engineering, software engineering, electrical engineering, genetics engineering, biotechnology engineering', 'Bring a certified copy of the university degree from the Ministry of Education in one of the mentioned majors (engineering and science fields)', 'Bring a work contract for a profession in one of the mentioned specializations (engineering and science fields)', ...DOCS5]],
        ['Outstanding Students – High school student', ['Bring a recommendation letter from the Ministry of Education.', 'Passport copy', 'Visa copy', 'Personal photo']],
        ['Outstanding Students – University student', ['Having a certified copy of the PhD from the Ministry of Education in one of the priority disciplines (PhD degrees).', ...DOCS5]],
      ]],
    ],
  },
  {
    slug: 'license-renewal-pro-services', title: 'License Renewal (PRO) Services', icon: I.doc,
    short: 'License renewal refers to the process of extending or updating a license that is granted by a regulatory or licensing authority.',
    h2: 'License Renewal (PRO) Services in UAE',
    blocks: [
      ['p', 'License renewal refers to the process of extending or updating a license that is granted by a regulatory or licensing authority. Various professions and industries require individuals to obtain licenses to practice legally or engage in specific activities. These licenses often have an expiration date, and individuals must renew them to maintain their legal standing.'],
      ['p', 'If you are looking for Pro Services in Dubai, UAE. We\'ll provide you the solutions regarding PRO Services. The requirements for license renewal services can vary depending on the specific jurisdiction and type of license you are referring to. Here is some general information on common requirements for license renewal in Dubai, UAE.'],
      ['defs', [
        ['Application form', 'Most license renewal processes require filling out an application form. The form may be available online or obtained from the relevant licensing authority.'],
        ['Proof of identity', 'You will typically need to provide proof of your identity, such as a valid government-issued identification document (e.g., passport, driver\'s license).'],
        ['Current license information', 'You may be asked to provide details about your current license, including the license number, issue date, and expiration date.'],
        ['Renewal fee', 'License renewal usually involves paying a renewal fee. The amount can vary based on the type of license and the jurisdiction.'],
        ['Continuing education or training', 'Certain professions or industries may require you to complete a certain number of continuing education or training hours to renew your license. You may need to provide proof of completing the required courses or programs.'],
        ['Compliance with regulations', 'Depending on the nature of the license, you may need to demonstrate compliance with specific regulations or standards. This can include maintaining certain certifications, adhering to professional codes of conduct, or meeting specific criteria related to safety and competence.'],
        ['Renewal period', 'It\'s important to renew your license within the designated renewal period. Renewing after the expiration date may involve additional requirements or penalties.'],
      ]],
      ['p', 'It\'s worth noting that these requirements can vary significantly based on the type of license you are renewing. Professional licenses can include medical licenses, engineering licenses, real estate licenses, and many others. Therefore, it\'s essential to consult the specific licensing authority or regulatory body that governs the license you are interested in renewing for accurate and up-to-date information.'],
    ],
  },
  {
    slug: 'economic-substance-regulation-services', title: 'Economic Substance Regulation Services', icon: I.bank,
    short: 'Economic Substance Regulation (ESR) Services refer to professional services provided to assist companies or entities in complying with the economic substance.',
    h2: 'Economic Substance Regulation Services in UAE',
    blocks: [
      ['note', 'Update: The UAE Ministry of Finance has cancelled economic substance reporting requirements for financial years ending after 31 December 2022 (Cabinet Decision No. 98 of 2024, amending Cabinet Decision No. 57 of 2020). The ESR rules continue to apply to financial years from 1 January 2019 to 31 December 2022. Substance still matters under corporate tax: a free zone person that wants to be treated as a Qualifying Free Zone Person must demonstrate adequate substance in the UAE.'],
      ['p', 'Economic Substance Regulation (ESR) Services refer to professional services provided to assist companies or entities in complying with the economic substance requirements implemented by certain authority.'],
      ['p', 'ESR Services are a set of rules and guidelines introduced by several jurisdictions to combat tax avoidance and promote transparency in business activities. We are specialized for ESR Services in Dubai, UAE.'],
      ['p', 'These regulations required certain entities, typically those engaged in specific activities such as banking, insurance, fund management, intellectual property holding, and distribution and service center activities, to demonstrate adequate economic substance within the jurisdiction where they operate.'],
      ['h3', 'ESR services may include:'],
      ['defs', [
        ['Compliance assessment', 'Professionals assess whether a company or entity falls within the scope of the economic substance regulations and determine the specific requirements that apply to them.'],
        ['Structuring and restructuring', 'Consultants assist companies in designing or modifying their corporate structures and operational processes to ensure compliance with the economic substance regulations.'],
        ['Policy and procedure development', 'Professionals help develop internal policies, procedures, and controls to meet the economic substance requirements effectively.'],
        ['Record keeping and reporting', 'Services may include establishing and maintaining appropriate record-keeping systems to demonstrate economic substance, as well as preparing and submitting required reports to the relevant authorities.'],
        ['Monitoring and compliance reviews', 'Consultants conduct periodic reviews and assessments to ensure ongoing compliance with the economic substance regulations.'],
        ['Advisory and guidance', 'Experts provide guidance on interpreting and understanding the economic substance requirements, helping businesses navigate the complexities of the regulations.'],
        ['Substance review for corporate tax', 'Assessing whether a free zone person can demonstrate adequate substance in the UAE to be treated as a Qualifying Free Zone Person.'],
      ]],
      ['p', 'It\'s important to note that the specific services offered may vary among service providers and jurisdictions, as economic substance regulations can differ from one jurisdiction to another. Companies seeking ESR services should consult with professional advisors who specialize in this area and have a thorough understanding of the applicable regulations in the relevant authority.'],
    ],
  },
  {
    slug: 'vat-corporate-tax-filing-services', title: 'VAT & Corporate Tax Filing Services', icon: I.pct,
    short: 'We have Corporate Tax services as well as VAT services. In the UAE, businesses are required to comply with certain tax regulations, including Value Added Tax (VAT) and corporate Tax.',
    h2: 'VAT & Corporate Tax Filing Services in UAE',
    blocks: [
      ['p', 'We have Corporate Tax services as well as VAT services. In the United Arab Emirates (UAE), businesses are required to comply with certain tax regulations, including VAT & corporate tax in Dubai, UAE. To ensure proper compliance and avoid penalties, many businesses seek the assistance of tax filing services.'],
      ['h3', 'VAT Filing Services:'],
      ['p', 'Value Added Tax (VAT) was introduced in the UAE on January 1, 2018. It is a consumption tax imposed on the supply of goods and services. VAT Services in Dubai, UAE assist businesses in managing their VAT-related obligations. These services typically include:'],
      ['defs', [
        ['VAT Registration', 'Helping businesses with the initial VAT registration process and obtaining a Tax Registration Number (TRN) from the Federal Tax Authority (FTA).'],
        ['VAT Returns', 'Preparing and filing VAT returns on a quarterly basis, including calculating the VAT liability or refund.'],
        ['Compliance Review', 'Conducting periodic reviews of financial records and transactions to ensure VAT compliance.'],
        ['Record-Keeping', 'Assisting businesses in maintaining proper records and documentation to support VAT filings.'],
        ['VAT Advisory', 'Providing guidance and advice on VAT matters, such as the applicability of VAT on specific transactions or industries.'],
      ]],
      ['h3', 'Corporate Tax Filing Services:'],
      ['p', 'Federal corporate tax applies in the UAE to financial years starting on or after 1 June 2023. Taxable income up to AED 375,000 is taxed at 0%, and the portion above AED 375,000 is taxed at 9%. A free zone person that meets the conditions of a Qualifying Free Zone Person can benefit from a 0% rate on its qualifying income, while its other income is taxed at 9%. All taxable persons, including free zone persons, must register with the Federal Tax Authority for corporate tax and obtain a registration number. Corporate tax filing services in the UAE primarily focus on assisting businesses with these requirements, which may include:'],
      ['defs', [
        ['Corporate Tax Registration', 'Helping businesses, including free zone companies, register for corporate tax with the Federal Tax Authority (FTA) and obtain a corporate tax registration number.'],
        ['Corporate Tax Assessments', 'Determining whether a business is subject to corporate tax, whether it can qualify as a Qualifying Free Zone Person, and how its income is treated based on its activities and location.'],
        ['Corporate Tax Returns', 'Preparing the corporate tax computation and filing the annual corporate tax return.'],
        ['Tax Planning', 'Advising businesses on tax-efficient strategies and structures to minimize tax liabilities.'],
        ['Tax Optimization', 'Identifying potential tax incentives, exemptions, or deductions that a business may be eligible for.'],
        ['Tax Representation', 'Representing businesses in dealings with the tax authorities, if required.'],
      ]],
      ['p', 'It\'s important to note that tax regulations can change over time, and businesses should consult with professional advisors or tax filing services to ensure compliance with the latest requirements and obligations in the UAE.'],
    ],
  },
  {
    slug: 'ultimate-beneficial-owner-ubo', title: 'Ultimate Beneficial Owner (UBO)', icon: I.user,
    short: 'The main objective of this was to regulate Ultimate Beneficial Ownership Procedures by making corporate affairs more transparent and reportable.',
    h2: 'Ultimate Beneficial Owner (UBO) in UAE',
    blocks: [
      ['p', 'The main objective of this was to regulate Ultimate Beneficial Ownership Procedures by making corporate affairs more transparent and reportable. If you are looking for UBO Services in Dubai, UAE then let us know!'],
      ['p', 'Cabinet Resolution 58 was issued by the UAE government on 28 August 2020 and was brought in place of Cabinet resolution 34. The main objective of this was to regulate Ultimate Beneficial Ownership Procedures by making corporate affairs more transparent and reportable.'],
      ['p', 'The legal arrangements are complex and detangling them is also cumbersome. Several factors hinder UBO verification, such as lack of clarity on multiple beneficial ownership outlines, non-co-operation, and other factors that make it difficult to carry out the process quickly and prevent compliance with the KYC process.'],
      ['p', 'This regulation was brought into force in order to enhance corporate transparency. This resolution is applicable to all entities that are registered in the UAE mainland and free zones.'],
      ['p', 'The ultimate beneficial owner (UBO) refers to the natural person(s) who ultimately owns or controls a legal entity or has the final ownership or control over its assets. The UBO is the individual who enjoys the economic benefits and risks associated with the ownership of the entity, even if the legal ownership is held in the name of another person or entity.'],
      ['p', 'The definition of UBO can vary slightly from one jurisdiction to another, but generally, it refers to the person who meets one or more of the following criteria:'],
      ['defs', [
        ['Direct Ownership', 'Any individual who owns a significant percentage of shares or voting rights in a company, typically above a specified threshold (e.g., 25% ownership).'],
        ['Indirect Ownership', 'In cases where ownership is held through other legal entities, the UBO would be the natural person(s) who ultimately own or control those intermediary entities.'],
        ['Control through Other Means', 'Individuals who exercise significant control over the management or decision-making processes of a company, such as through dominant influence or contractual arrangements.'],
      ]],
      ['p', 'It\'s important to note that some jurisdictions may have specific regulations and disclosure requirements regarding the identification and verification of UBO’s. These regulations aim to enhance transparency, prevent financial crimes, and ensure compliance with regulatory frameworks related to AML, CFT, and corporate governance.'],
      ['p', 'To determine the UBO of a legal entity, it is advisable to consult the relevant laws and regulations of the jurisdiction in question or seek professional advice from legal and financial experts familiar with the applicable rules.'],
    ],
  },
  {
    slug: 'audit-assurance-services', title: 'Audit & Assurance Services', icon: I.shield,
    short: 'Audit and assurance services we are provided by qualified auditors to assess an independent opinion on the accuracy and reliability of financial statements and other financial information of an organization.',
    h2: 'Audit & Assurance Services in UAE',
    blocks: [
      ['p', 'We are providing Audit and assurance services in Dubai, UAE by qualified auditors to assess an independent opinion on the accuracy and reliability of financial statements and other financial information of an organization.'],
      ['h3', 'Here are some key components of audit and assurance services:'],
      ['defs', [
        ['Financial Statement Audit', 'This is the most common type of audit service. It involves a thorough examination of an organization\'s financial statements, including the balance sheet, income statement, and cash flow statement. The auditor assesses whether the financial statements are prepared in accordance with relevant accounting standards, present a true and fair view of the organization\'s financial position, and disclose all material information.'],
        ['Compliance Audit', 'Compliance audits focus on evaluating an organization\'s adherence to applicable laws, regulations, and industry standards. The auditor assesses whether the organization has complied with legal and regulatory requirements and determines any areas of non-compliance that need attention.'],
        ['Internal Audit', 'Internal audit services are provided by auditors employed within an organization or outsourced to an external audit firm. Internal auditors assess the effectiveness and efficiency of internal controls, risk management processes, and governance structures within the organization. They provide recommendations for improving operations, mitigating risks, and enhancing overall organizational performance.'],
        ['IT Audit', 'IT audit services involve the evaluation of an organization\'s IT systems, infrastructure, and controls. The auditor assesses the reliability and security of IT systems, the effectiveness of data management processes, and the organization\'s ability to protect sensitive information from unauthorized access or cyber threats.'],
        ['Review Engagements', 'Review engagements provide a limited level of assurance on financial statements. The auditor performs analytical procedures and inquiries to determine if the financial statements are plausible and free from material misstatements. However, the level of assurance provided in a review engagement is lower compared to a full financial statement audit.'],
        ['Assurance on Non-Financial Information', 'Besides financial information, assurance services can also be provided on non-financial information. This can include sustainability reports, corporate social responsibility (CSR) disclosures, or other non-financial performance indicators. The auditor evaluates the reliability and accuracy of such information and provides an independent opinion or assurance.'],
      ]],
      ['p', 'It\'s important to note that audit and assurance services are typically conducted in accordance with relevant auditing standards, professional ethics, and regulatory requirements. The specific scope and nature of these services may vary depending on the nature of the engagement and the needs of the organization.'],
    ],
  },
  {
    slug: 'it-software-services', title: 'IT Software Services', icon: I.it,
    short: 'IT software services refer to the range of services provided by companies in the information technology sector that focus on the development, deployment, maintenance, and support of software applications and systems.',
    h2: 'Get the best of IT software services in UAE',
    blocks: [
      ['p', 'IT software services refer to the range of services provided by companies in the information technology sector that focus on the development, deployment, maintenance, and support of software applications and systems. We are providing IT Software Services in Dubai, UAE.'],
      ['h3', 'Some of the following mentioned below:'],
      ['defs', [
        ['Software Development', 'This involves designing, coding, and testing software applications to meet specific business requirements. It includes both custom software development and the modification of existing software to add new features or improve functionality.'],
        ['Application Maintenance and Support', 'Once software applications are deployed, they require ongoing maintenance and support to ensure they continue to function effectively. This includes bug fixing, performance optimization, and providing technical assistance to end-users.'],
        ['System Integration', 'IT software services often involve integrating software applications with existing systems and infrastructure. This could include integrating enterprise resource planning (ERP) systems, customer relationship management (CRM) software, or other third-party applications.'],
        ['Quality Assurance and Testing', 'Testing is a critical part of software development to ensure the reliability, security, and usability of applications. IT software services may include quality assurance and testing processes, such as functional testing, performance testing, security testing, and user acceptance testing.'],
        ['IT Consulting', 'IT software service providers often offer consulting services to help organizations make informed decisions about their software needs. This could involve assessing current systems, recommending software solutions, providing technology roadmaps, and advising on best practices.'],
        ['Cloud Services', 'With the increasing adoption of cloud computing, IT software services may include cloud-based solutions such as software-as-a-service (SaaS), platform-as-a-service (PaaS), and infrastructure-as-a-service (IaaS). These services allow organizations to access software and computing resources remotely via the internet.'],
        ['Mobile Application Development', 'As mobile devices have become worldwide, IT software services also cover the development of mobile applications for various platforms such as iOS and Android. This includes creating native apps, hybrid apps, or responsive web applications optimized for mobile devices.'],
        ['Data Analytics and Business Intelligence', 'IT software services may involve implementing data analytics and business intelligence solutions to help organizations gather, analyze, and visualize data for informed decision-making. This includes data warehousing, data mining, reporting, and dashboard development.'],
      ]],
      ['p', 'Overall, IT software services encompass a wide range of activities related to software development, maintenance, integration, and support. These services play a crucial role in helping organizations leverage technology to streamline processes, enhance productivity, and achieve their business objectives.'],
    ],
  },
  {
    slug: 'governance-risk-compliance', title: 'Governance Risk & Compliance', icon: I.grc,
    short: 'Governance, Risk, and Compliance (GRC) is a framework that organizations use to manage and address various aspects of risk and compliance with applicable laws, regulations, and internal policies.',
    h2: 'Governance Risk & Compliance in UAE',
    blocks: [
      ['p', 'Governance, Risk, and Compliance (GRC) is a framework that organizations use to manage and address various aspects of risk and compliance with applicable laws, regulations, and internal policies. It involves implementing processes, controls, and policies to ensure that an organization operates within legal and regulatory boundaries while minimizing risks. We\'ll provide you the best solutions regarding Governance Risk & Compliance services in Dubai, UAE.'],
      ['h3', 'Here\'s a breakdown of the key components within the GRC framework:'],
      ['defs', [
        ['Governance', 'Governance refers to the overall management and oversight of an organization\'s operations. It involves establishing structures, processes, and policies to ensure accountability, transparency, and ethical behavior at all levels of the organization. Governance encompasses areas such as strategic decision-making, risk management, and setting organizational objectives.'],
        ['Risk Management', 'Risk management involves identifying, assessing, and mitigating risks that could impact an organization\'s ability to achieve its objectives. It includes understanding and evaluating both internal and external risks, such as financial risks, operational risks, legal and compliance risks, cybersecurity risks, and reputational risks. Risk management aims to minimize the likelihood and impact of adverse events and ensure business continuity.'],
        ['Compliance', 'Compliance refers to adhering to laws, regulations, industry standards, and internal policies relevant to the organization\'s operations. Compliance activities involve monitoring and ensuring that the organization operates in accordance with these requirements. This includes activities such as regulatory reporting, data protection, anti-money laundering (AML), anti-bribery and corruption (ABC) measures, and industry-specific compliance obligations.'],
        ['Controls and Internal Processes', 'Effective GRC relies on implementing appropriate controls and internal processes to manage risks and achieve compliance. This includes establishing internal controls, procedures, and workflows to ensure that operations are conducted in a controlled and compliant manner. Controls can encompass segregation of duties, access controls, data protection measures, and monitoring mechanisms to detect and prevent fraud, errors, and unauthorized activities.'],
        ['Reporting and Auditing', 'Reporting and auditing are essential elements of the GRC framework. Organizations need to establish mechanisms to monitor and report on their governance, risk management, and compliance activities. This includes regular reporting to management, board of directors, regulatory bodies, and external auditors. Audits are conducted to assess the effectiveness of controls, identify gaps, and provide assurance that the organization\'s GRC objectives are being met.'],
        ['GRC Technology Solutions', 'Many organizations utilize GRC software and technology solutions to streamline and automate their GRC processes. These solutions provide centralized repositories for policies, controls, and compliance requirements, enable risk assessments and monitoring, facilitate reporting and analytics, and enhance collaboration and communication across the organization.'],
      ]],
      ['p', 'By implementing an effective GRC framework, organizations can proactively manage risks, ensure compliance with regulations and internal policies, enhance decision-making, and safeguard their reputation. It helps create a culture of accountability, transparency, and ethical behavior throughout the organization, leading to improved governance and overall business performance.'],
    ],
  },
  {
    slug: 'accounting-services', title: 'Accounting Services', icon: I.chart,
    short: 'Accounting is a systematic process of recording, summarizing, analyzing, and reporting financial transactions and information of an individual, business, or organization. Accounting Services Encompass A Wide Range Of Financial Tasks And Activities.',
    h2: 'Accounting Services in UAE',
    blocks: [
      ['p', 'Accounting is a systematic process of recording, summarizing, analyzing, and reporting financial transactions and information of an individual, business, or organization. It involves the measurement, processing, and communication of financial data to various stakeholders, including management, investors, creditors, and regulatory authorities. The primary objective of accounting is to provide relevant, reliable, and timely financial information that facilitates decision-making and helps stakeholders assess the financial health and performance of the entity.'],
      ['p', 'Accounting services in Dubai encompass a wide range of financial tasks and activities that are essential for businesses and organizations to manage their financial records, ensure compliance with regulations, and make informed decisions. These services can be provided by accounting firms, certified public accountants (CPAs), or in-house accounting departments. Here are some key components of accounting services:'],
      ['defs', [
        ['Bookkeeping', 'Bookkeeping involves the systematic recording of financial transactions, such as sales, purchases, receipts, and payments. It includes maintaining ledgers, reconciling accounts, and organizing financial data in a structured manner. Bookkeeping forms the foundation of accurate and reliable financial reporting.'],
        ['Financial Statement Preparation', 'Accounting services include the preparation of financial statements, such as the income statement (profit and loss statement), balance sheet, and cash flow statement. These statements provide a snapshot of an organization\'s financial performance, position, and cash flows over a specific period.'],
        ['Payroll Processing', 'Managing payroll is a critical aspect of accounting services. It involves calculating employee wages, withholding taxes, deducting benefits and contributions, and ensuring timely and accurate payment to employees. Payroll processing also includes filing payroll-related tax returns and complying with employment regulations.'],
        ['Tax Planning and Compliance', 'Accounting services often include tax planning and compliance activities. This involves understanding and applying tax laws, regulations, and incentives to optimize an organization\'s tax position. Accountants can help businesses identify tax deductions, credits, and strategies to minimize tax liabilities. They also prepare and file tax returns and assist with tax audits, if necessary.'],
        ['Financial Analysis and Reporting', 'Accounting services may involve analyzing financial data to provide insights and recommendations to management. This includes assessing financial performance, conducting ratio analysis, identifying trends, and comparing actual results with budgets and forecasts. Accountants often generate management reports, financial dashboards, and other analytical tools to aid decision-making.'],
        ['Auditing and Assurance', 'Some accounting firms also offer auditing and assurance services. These services involve conducting independent examinations of financial statements to provide an opinion on their fairness, accuracy, and compliance with accounting standards. Auditors verify the reliability of financial information and assess internal controls to detect any material misstatements or fraud.'],
        ['Advisory and Consulting', 'Accountants can provide advisory and consulting services to assist businesses in various financial matters. This may include financial planning, budgeting, cash flow management, risk assessment, and internal control implementation. Accountants can offer insights and guidance on financial strategies, mergers and acquisitions, and other business decisions.'],
        ['Compliance and Regulatory Reporting', 'Accounting services encompass ensuring compliance with financial regulations and reporting requirements. This includes staying up to date with accounting standards (e.g., Generally Accepted Accounting Principles or International Financial Reporting Standards) and preparing financial statements in accordance with the applicable framework. Accountants also assist with regulatory filings and disclosures.'],
        ['Forensic Accounting', 'Forensic accounting services involve investigating financial irregularities, fraud, or disputes. Forensic accountants apply accounting principles and investigative techniques to analyze financial data, reconstruct transactions, and provide expert opinions in legal proceedings.'],
      ]],
      ['p', 'Accounting services are crucial for businesses of all sizes to maintain accurate financial records, comply with regulations, make informed decisions, and demonstrate financial transparency. By outsourcing or utilizing professional accounting services, organizations can focus on their core operations while ensuring their financial matters are handled effectively and efficiently.'],
    ],
  },
  {
    slug: 'aml-cft', title: 'AML & CFT', icon: I.cross,
    short: 'AML stands for Anti-Money Laundering, and CFT stands for Combating the Financing of Terrorism. Both AML and CFT are regulatory frameworks designed to prevent and detect illicit financial activities, such as money laundering and terrorist financing.',
    h2: 'AML & CFT Services in UAE',
    blocks: [
      ['p', 'AML stands for Anti-Money Laundering, and CFT stands for Combating the Financing of Terrorism. Both AML & CFT are regulatory frameworks designed to prevent and detect illicit financial activities, such as money laundering and terrorist financing. We\'ll provide you the best solutions regarding AML & CFT Services in Dubai, UAE. Here\'s a breakdown of each term:'],
      ['h3', 'Anti-Money Laundering (AML)'],
      ['p', 'AML refers to a set of laws, regulations, and procedures aimed at combating money laundering. Money laundering involves disguising the origins of illegally obtained funds and making them appear legitimate. The primary objective of AML measures is to prevent criminals from using the financial system to hide the proceeds of their illicit activities. AML regulations require financial institutions and certain businesses to implement robust policies, controls, and reporting mechanisms to identify and report suspicious activities.'],
      ['p', 'Key components of AML include:'],
      ['defs', [
        ['Customer Due Diligence (CDD)', 'Financial institutions are required to establish procedures to verify the identity of their customers and assess the risk associated with their transactions. This involves collecting and verifying customer identification information, conducting risk assessments, and ongoing monitoring of customer activities.'],
        ['Know Your Customer (KYC)', 'KYC procedures involve gathering information about customers, their sources of funds, and the nature of their business relationships. This helps financial institutions understand the legitimacy of customer transactions and identify any potential red flags or suspicious activities.'],
        ['Suspicious Activity Reporting (SAR)', 'Financial institutions are obligated to report any transactions or activities that appear suspicious or are indicative of money laundering to the relevant authorities. SARs are filed with the appropriate regulatory bodies, such as financial intelligence units, to initiate investigations and further actions.'],
        ['Training and Compliance Programs', 'AML regulations require financial institutions to establish comprehensive training programs to educate employees about money laundering risks, detection techniques, and reporting obligations. Institutions are also expected to have robust internal controls, policies, and procedures to ensure compliance with AML regulations.'],
      ]],
      ['h3', 'Combating the Financing of Terrorism (CFT)'],
      ['p', 'CFT refers to measures taken to prevent and detect the financing of terrorism. It involves disrupting the flow of funds and resources to terrorist organizations and individuals involved in terrorist activities. CFT measures are closely related to AML efforts since money laundering often plays a significant role in financing terrorism.'],
      ['p', 'Key components of CFT include:'],
      ['defs', [
        ['Enhanced Due Diligence', 'Financial institutions are required to implement enhanced due diligence measures for customers or transactions that pose a higher risk of terrorist financing. This may involve additional scrutiny, monitoring, and risk assessment procedures.'],
        ['Watchlist Screening', 'Financial institutions are expected to screen their customers and transactions against government-sanctioned watchlists and lists of known terrorists or terrorist organizations. This helps identify individuals or entities with known links to terrorism.'],
        ['Reporting and Information Sharing', 'Like AML, financial institutions are obligated to report any suspicious activities or transactions related to terrorist financing. Effective information sharing and cooperation among financial institutions, law enforcement agencies, and intelligence agencies are crucial in identifying and disrupting terrorist financing networks.'],
      ]],
      ['p', 'AML and CFT regulations vary across jurisdictions, but they share the common goal of combating financial crimes and protecting the integrity of the global financial system. By implementing robust AML and CFT measures, countries and financial institutions aim to prevent money laundering, terrorist financing, and other illicit financial activities that can have severe societal and economic consequences.'],
    ],
  },
];

// "Our Packages" pricing flyer from the live home page (text is baked into the site's slideshow images)
export const PRICING = {
  title: 'Our Packages',
  sub: 'Set up Business in Dubai',
  get: 'What you will get:',
  plans: [
    { name: 'Basic', price: '14,900 AED', items: ['One visa quota', 'Multiple shareholders', '3 business activity', 'Flexi desk office', '2 years residence visa'] },
    { name: 'All Inclusive', price: '16,900 AED', items: ['Two visa quota', 'Multiple shareholders', '3 business activity', 'Flexi desk office', '2 years residence visa'] },
  ],
  call: 'Call us',
  cta: 'Request for free Consultation',
};
