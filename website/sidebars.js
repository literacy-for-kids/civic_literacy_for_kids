// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  curriculumSidebar: [
    'intro',
    'curriculum-overview',
    {
      type: 'category',
      label: 'Unit 1: The Logic of Cooperation',
      collapsed: false,
      items: [
        'week01-rules-we-already-follow',
        'week02-the-island-challenge',
        'week03-from-families-to-nations',
        'week04-the-social-contract',
      ],
    },
    {
      type: 'category',
      label: 'Unit 2: The Architecture of Government',
      collapsed: false,
      items: [
        'week05-the-constitution',
        'week06-three-branches-one-government',
        'week07-how-a-law-is-made',
        'week08-checks-and-balances',
        'week09-elections-and-voting',
      ],
    },
    {
      type: 'category',
      label: 'Unit 3: Your Local Government',
      collapsed: false,
      items: [
        'week10-your-town-your-rules',
        'week11-schools-libraries-and-public-services',
        'week12-seeing-government-in-action',
      ],
    },
    {
      type: 'category',
      label: 'Unit 4: The Global Community',
      collapsed: false,
      items: [
        'week13-why-countries-talk',
        'week14-solving-problems-across-borders',
      ],
    },
    {
      type: 'category',
      label: 'Unit 5: The Community Patch',
      collapsed: false,
      items: [
        'week15-spotting-problems-worth-solving',
        'week16-research-and-plan',
        'week17-build-your-case',
        'week18-citizen-showcase',
      ],
    },
    {
      type: 'category',
      label: 'Bonus: The Justice System',
      collapsed: true,
      items: [
        'week-bonus-1-understanding-courts',
        'week-bonus-2-the-mock-trial',
      ],
    },
    {
      type: 'category',
      label: 'Resources and Guides',
      collapsed: true,
      items: [
        'how-to-use',
        'assessment-framework',
        'scope-and-sequence',
        'glossary',
        {
          type: 'category',
          label: 'Printable Resources',
          collapsed: true,
          items: [
            'resources/local-civic-toolkit',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Explore Other Literacies',
      collapsed: true,
      items: [
        {
          type: 'link',
          label: 'Literacy for Kids Hub',
          href: 'https://literacy-for-kids.github.io/literacy_for_kids/',
        },
        {
          type: 'link',
          label: 'Decision Literacy',
          href: 'https://literacy-for-kids.github.io/decision_literacy_for_kids/',
        },
        {
          type: 'link',
          label: 'Computer Literacy',
          href: 'https://literacy-for-kids.github.io/computer_literacy_for_kids/',
        },
        {
          type: 'link',
          label: 'Media Literacy',
          href: 'https://literacy-for-kids.github.io/media_literacy_for_kids/',
        },
        {
          type: 'link',
          label: 'Financial Literacy',
          href: 'https://literacy-for-kids.github.io/financial_literacy_for_kids/',
        },
        {
          type: 'link',
          label: 'Civic Literacy',
          href: 'https://literacy-for-kids.github.io/civic_literacy_for_kids/',
        },
      ],
    },
    'license',
  ],
};

export default sidebars;
