import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

import logoImagine from '@/images/logos/il-logo.svg'
import logoAloTrack from '@/images/logos/at-logo.svg'
import logoEr60 from '@/images/logos/er60-logo.svg'
import logoInspire from '@/images/logos/insp-logo.svg'
import logoJCA from '@/images/logos/jca-logo.svg'

const projects = [
  {
    name: 'Master Blocks Template',
    description:
      'I was told their busy season started 3 weeks ago, and they needed several landing pages - fast. WordPress, custom CMS, and standalone - mutiple brands. I quickly built a modular custom HTML template & demo that allowed for platform & variable overrides. Now landing pages can be setup before the job ticket is.',

    links: [
      {
        url: 'https://www.figma.com/file/Touan7noP4nCCu9D7xioU2/Master-LP-Blocks-Graybox-(Copy)?type=design&node-id=0%3A1&t=iLDWaBbBw2Z5Y7jr-1',
        label: 'Figma',
      },
      {
        url: 'https://www.brettsnyder.me/demo/master-blocks/aop-master-lp-blocks.html',
        label: 'Template',
      },
      {
        url: 'https://www.brettsnyder.me/demo/master-blocks/example-aop-lp.html',
        label: 'Demo',
      },
    ],

    logo: logoImagine,
  },
  {
    name: 'AloTrack Prototype',
    description:
      'Tasked with building an HTML prototype with Tailwind for a student management app. Figma played a central player as most design and functionality concepts were iterated virtually alongside stakeholders. The architect/dev chose Elixir for stability and speed. A presentation-friendly landing page was added later.',

    links: [
      {
        url: 'https://www.figma.com/file/T9GziBSOjabPtOsCmr6NVD/AloTrack-Phase-2?node-id=0%3A1',
        label: 'Figma',
      },
      {
        url: 'https://www.brettsnyder.me/demo/alototrack-prototype/index.html',
        label: 'Prototype',
      },
      { url: 'https://www.alotrack.com/', label: 'LP-1' },
    ],

    logo: logoAloTrack,
  },
  {
    name: 'Escape Room 60',
    description:
      'They wanted a more performant modern solution than their current WordPress site I did for them years ago. Kept header branding, but went with a Next.js refactor that included large content images for more interest. Why? With Next.js baked-in image optimization, the site loads very fast. Just waiting for them to make the switch.',

    links: [
      {
        url: 'https://www.brettsnyder.me/demo/escaperoom60-demo.jpg',
        label: 'Image',
      },
    ],

    logo: logoEr60,
  },
  {
    name: 'Monarch Catalog Prototype',
    description:
      'I was asked to build an HTML prototype for home & detail pages, from a provided design. It was for a new online catalog and the devs wanted to see styles and responsive use before building it in Angular. They decided to use Material UI componenets, so I used Material.io (mdc) to get the ball rolling.',

    links: [
      {
        url: 'https://www.brettsnyder.me/demo/monarch-catalog/course-catalog.html',
        label: 'Prototype',
      },
      {
        url: 'https://www.brettsnyder.me/demo/monarch-catalog/course-detail.html',
        label: 'Detail',
      },
      {
        url: 'https://www.brettsnyder.me/demo/monarch-catalog/error-404.html',
        label: '404',
      },
    ],

    logo: logoImagine,
  },
  {
    name: 'Monarch Microsite',
    description:
      'Here is the microsite I built alongside the catalog prototype from provided designs. Marketing wanted an easy access CMS so I chose WordPress. Later, I updated CTA buttons with Free Trial email forms to forward to an onboarding site. EDIT: This microsite will retire soon, here is a screenshot.',

    links: [
      {
        url: 'https://www.brettsnyder.me/demo/monarch-demo.jpg',
        label: 'Image',
      },
    ],

    logo: logoImagine,
  },
  {
    name: 'Figma Samples',
    description:
      'For NDA, these Figma samples are ones I did 4-5 years back, so either released or abandoned. But they do show initial IA site requirements, basic page flows with wireframes, and hi-def prototypes. Not shown here, graybox protoypes could be shoe-horned in if consumer paths need further review.',

    links: [
      {
        url: 'https://www.figma.com/file/szhi0LuC7ONppezVLWAOrd/Dragonfly-Admin-Tool-Flow?type=design&node-id=0%3A1&t=JrqwKy1F0errT3YZ-1',
        label: 'S-1',
      },
      {
        url: 'https://www.figma.com/file/8Hy8ozuu8OWsK60GjOV5sH/Dragonfly-Admin-Tool-Designs?type=design&node-id=0%3A1&t=rQQA3Cz37YdmheE0-1',
        label: 'S-2',
      },
      {
        url: 'https://www.figma.com/proto/1GUcUTPBXLUX7GzE5naVTT/AOP.com-Refactor?page-id=0%3A1&type=design&node-id=429-476&viewport=-1%2C486%2C0.05&scaling=scale-down&starting-point-node-id=429%3A476&show-proto-sidebar=1',
        label: 'S-3',
      },
      {
        url: 'https://www.figma.com/proto/5U2u2F5os9Ah6tDvgJmeDM/Homeschool-Desktop-Content-(DONE)?page-id=0%3A1&type=design&node-id=12-2&viewport=765%2C362%2C0.04&scaling=min-zoom&starting-point-node-id=12%3A2&show-proto-sidebar=1',
        label: 'S-4',
      },
    ],

    logo: logoImagine,
  },
  {
    name: 'Jesus Christ Art',
    description:
      'I made a basic Nextjs static page to share my Jesus Christ artwork. After research, I removed the nav and some sections that were killing the user flow. It all began with me explaining why I drew two Christ sketches a long time ago. Now, it has grown to include composite images. I used a variety of local beta AI tools to create starting elements. Then, I manually refined each element of the composite portraits.',

    links: [
      {
        url: 'https://www.jesuschrist.art/',
        label: 'Site',
      },
    ],

    logo: logoJCA,
  },
  {
    name: 'Inspiration Library',
    description:
      'I created the Inspiration Library using Nextjs as a safe spot for sharing my favorite short inspirational stories. It began as an extension of the message on JesusChrist.art. I decided to keep them separate to avoid overwhelming visitors. I deliberately made it text-only, no images, for easy access on phones and easy copying. I use it frequently.',

    links: [
      {
        url: 'https://inspire.jesuschrist.art/',
        label: 'Site',
      },
    ],

    logo: logoInspire,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Brett Snyder</title>
        <meta name="description" content="Things I’ve made." />
      </Head>
      <SimpleLayout
        title="Things I’ve made."
        intro="I’ve worked on tons of projects over the years; here are some of my favorites. Each project has a brief summary and some sample links."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card
              className="p-6 hover:scale-100 hover:bg-zinc-50 hover:opacity-100 dark:hover:bg-zinc-800/50 sm:rounded-2xl"
              as="li"
              key={project.name}
            >
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt="Logo"
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                {/* <Card>{project.name}</Card> */}
                {project.name}
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex flex-wrap text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="mr-2 h-6 w-6 flex-none" />
                {project.links.map((link) => (
                  <span
                    key={link.url}
                    className="mr-3 hover:text-teal-500 hover:underline"
                  >
                    <Link target="samples" href={link.url}>
                      {link.label}
                    </Link>
                  </span>
                ))}
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
