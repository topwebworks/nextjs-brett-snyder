import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

// import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { GitHubIcon } from '@/components/SocialIcons'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import logoImagine from '@/images/logos/il-logo.svg'
import logoGlyn from '@/images/logos/glynlyon-logo.svg'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'

import Tilt from 'react-parallax-tilt'
import { RoughNotation } from 'react-rough-notation'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="p-1 -m-1 group" {...props}>
      <Icon className="w-6 h-6 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

// function Newsletter() {
//   return (
//     <form
//       action="/thank-you"
//       className="p-6 border rounded-2xl border-zinc-100 dark:border-zinc-700/40"
//     >
//       <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
//         <MailIcon className="flex-none w-6 h-6" />
//         <span className="ml-3">Stay up to date</span>
//       </h2>
//       <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
//         Get notified when I publish something new, and unsubscribe at any time.
//       </p>
//       <div className="flex mt-6">
//         <input
//           type="email"
//           placeholder="Email address"
//           aria-label="Email address"
//           required
//           className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
//         />
//         <Button type="submit" className="flex-none ml-4">
//           Join
//         </Button>
//       </div>
//     </form>
//   )
// }

function Resume() {
  let resume = [
    {
      company: 'Imagine Learning - AOP Marketing',
      title: 'Marketing Frontend Developer',
      logo: logoImagine,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Imagine Learning - AOP Marketing',
      title: 'UI/UX Designer/Developer',
      logo: logoImagine,
      start: '2019',
      end: '2022',
    },
    {
      company: 'Glynlyon',
      title: 'Senior Graphic/Web Designer',
      logo: logoGlyn,
      start: '2016',
      end: '2019',
    },
  ]

  return (
    <div className="p-6 border rounded-2xl border-zinc-100 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="flex-none w-6 h-6" />
        <span className="ml-3">Recent Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative flex items-center justify-center flex-none w-10 h-10 mt-1 rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={role.logo}
                alt="Logo"
                className="h-7 w-7"
                unoptimized
              />
            </div>
            <dl className="flex flex-wrap flex-auto gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="flex-none w-full text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      {/* <Button
        href="/resume/Brett_Snyder_Resume.pdf"
        id="download-resume"
        target="_cv"
        variant="secondary"
        className="w-full mt-6 group"
      >
        Download CV
        <ArrowDownIcon className="w-4 h-4 transition stroke-zinc-400 group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button> */}
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  const imageUrls = [
    '/articles/jesus-christ-art',
    '/articles/funastics',
    '/projects',
    '/about',
    '/about',
  ]

  return (
    <div className="mt-16 sm:mt-20">
      <div className="flex justify-center gap-5 py-4 -my-4 overflow-hidden sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <Tilt key={image.src} className="flex w-full h-full mt-0 rounded-lg">
            <div
              className={clsx(
                'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
                rotations[imageIndex % rotations.length]
              )}
            >
              <Link href={imageUrls[imageIndex]} passHref>
                <Image
                  src={image}
                  alt="Brett Snyder Gallery"
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="absolute inset-0 object-cover w-full h-full transition-opacity hover:opacity-80"
                  priority
                />
              </Link>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Brett Snyder - Artist. Coach. Designer. Dev.</title>
        <meta
          name="description"
          content="Brett Snyder - Frontend Developer, UI/UX, Web Designer."
        />
      </Head>
      <Container className="relative z-0 mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Artist. Coach. Designer.&nbsp;Dev.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m{' '}
            <RoughNotation
              type="underline"
              color="#55B5A6"
              animationDelay="3000"
              show={true}
              strokeWidth="1"
            >
              Brett&nbsp;Snyder
            </RoughNotation>
            , at 17 did a sketch that ended up in some stores. Spent several
            years working for corporations in graphic and web design. And now,
            making those designs come to life using code. Along the way, taught
            hundreds of kids in Vermont and Arizona to believe in themselves
            through gymnastics. This site is a collection of my interests and
            some projects I have&nbsp;done.
          </p>
          <div className="flex gap-6 mt-6">
            <SocialLink
              href="https://github.com/topwebworks"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            {/* <SocialLink
              href="https://www.linkedin.com/in/topwebworks"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            /> */}
          </div>
        </div>
        {/* Animated Background Shapes - Experimental */}
        <div className="absolute top-0 w-full h-64 max-w-lg right-10 -z-10 lg:right-10 xl:opacity-90">
          <div className="absolute top-0 w-56 h-56 bg-purple-600 rounded-full -left-4 animate-blob opacity-20 mix-blend-multiply blur-xl filter sm:h-72 sm:w-72"></div>
          <div className="absolute top-0 w-56 h-56 bg-green-600 rounded-full animation-delay-2000 right-4 animate-blob opacity-20 mix-blend-multiply blur-xl filter sm:h-72 sm:w-72"></div>
          <div className="absolute top-0 w-56 h-56 bg-orange-600 rounded-full animation-delay-4000 left-20 animate-blob opacity-20 mix-blend-multiply blur-xl filter sm:h-72 sm:w-72"></div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="grid max-w-xl grid-cols-1 mx-auto gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* <Newsletter /> */}
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 2)
        .map(({ component, ...meta }) => meta),
    },
  }
}
