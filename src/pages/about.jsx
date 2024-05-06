import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

import Tilt from 'react-parallax-tilt'
// import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Brett Snyder</title>
        <meta name="description" content="I’m Brett Snyder." />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <Tilt className="mt-0 flex h-full w-full">
              <div className="max-w-xs px-2.5 lg:max-w-none">
                <Image
                  src={portraitImage}
                  alt="Brett Snyder"
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover grayscale-0 filter dark:bg-zinc-800"
                  priority
                />
              </div>
            </Tilt>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              About me. The long and short of it.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                The following are summaries of the work I have done. You must be
                bored if you are going to read this.
              </p>
              <p>
                After attending BYU-I(Ricks) and BYU, I worked for a couple of
                local ad agencies. Newspaper spreads, ads, illustrations. I was
                one of the first in Provo to break away from using a linotype
                typesetter and use a Mac Plus for paste-ups. Other firsts,
                during my Dance DJ days I was one of the first to go all
                digital. You should have seen the SLC club owners&apos; face
                when I first walked in with just a laptop.
              </p>
              <p>
                After a couple of years of local agency work, I joined the newly
                formed NuSkin International art department - the 3rd hire.
                NuSkin experienced explosive growth and I was able to work on a
                little of everything… photoshoots, catalogs, brochures,
                branding, multilingual versions, swag, etc. They even sent me to
                Hong Kong for some catalog press checks.
              </p>
              <p>
                While I was at NuSkin, they hired a fantastic creative director,
                Steven King. Not the scary dude, but a seasoned designer that
                allowed creative freedom. He is the kind of director that worked
                late when his team had to. Years later, when Steve left to work
                at Franklin Covey… he brought me over as well.
              </p>
              <p>
                Steve built an in-house agency at Franklin that was
                self-sustaining… he billed any department job as a paying
                client. I spent several years with Franklin working on catalogs,
                package designs, brochures, planner forms, etc. Soon after Steve
                left, I went to work with Smith Harrison Direct.
              </p>
              <p>
                At SHD, I learned about direct marketing. Conversions. A
                well-crafted sales letter, inviting marketing inserts with
                limited-time offers. Just a phone call away. It was a small
                office but they had several big clients. Names like American
                Express, Icon Health &amp; Fitness brands, and Easton Sports
                just to name a few. A lot of direct mail packets, brochures, web
                banners - some basic web pages. I started playing with
                Macromedia Flash. After a few years, SHD merged with a web house
                and we were known as Studeo Interactive Direct.
              </p>
              <p>
                I had already done some basic flash and HTML work for SHD, so I
                was excited to learn more web tech from Studeo. Websites, web
                banners, ads, brochures. This was before the days of cms sites,
                or CSS3 &amp; JQuery. Palm Pilot was a thing, responsive
                websites were not. One of my first personal
                <Link
                  target="samples"
                  href="http://www.topwebworks.com/assets/misc/pushpad/v2"
                >
                  <a className="text-teal-500"> html&nbsp;sites (v2) </a>
                </Link>
                created buzz being a site of the day somewhere was featured in a
                local newspaper, included in a course book about frames, and
                posted on coolhomepages.com. My Earthlink bill that month was
                ten times over what it usually was. Bittersweet.
              </p>
              <p>
                Studeo had awesome creative leadership and I stayed on for
                several more years. After a while, I decided to help my brother
                with his martial arts business in upstate Vermont. Yep, I did
                not know ANY martial arts or even how to teach children. Besides
                handling marketing, I was to be the enrollment director and
                intro instructor. Studeo offered me a year of remote work to
                transition me out. This allowed me to move back and help my
                brother grow his Taekwon-Do school to eventually one of the
                largest in Vermont.
              </p>
              <p>
                The Martial Arts school experience taught me how to be a leader,
                interact with parents, teach children, and find out what
                marketing works. Later, we added coaching gymnastics and running
                our afterschool program to my responsibilities. After a few
                years of literally getting kicked around at work… I found a
                woman to marry me, had kids, cozy log home, etc. Eventually, it
                was time to move closer to my wife’s family in Arizona. I
                secured a contract job with OrthoRehab in Phoenix refactoring
                their inter &amp; intranet sites from PHP to DotNet - frontend
                only.
              </p>
              <p>
                About a year or so later, Steve offered me remote work for
                creating various Ken Garff Automotive marketing materials. Ads,
                brochures, banners, etc. Ken Garff is one of the largest auto
                dealers in Utah. I also started hosting 3 dedicated servers to
                house new freelance client work. My freelance business went from
                ProtoPC.com, to CMSiteHosting.com, then later renamed
                TopWebWorks.com. These old sites are not maintained anymore.
              </p>
              <p>
                During the evening, I was a mild-mannered freelance designer.
                During the day, I started a recreational brick-and-mortar
                gymnastics business called Funastics. Teaching kids how to flip
                around. Within the first year, Funastics started to move into
                the black. Funastics.com was top-ranked on Google over all local
                franchise competitors. A recreational gymnastics program built
                on life skills, personal success, and having fun. Things were
                looking up. So I thought.
              </p>
              <p>
                However, the 2007 economic downturn decided to change plans for
                me … especially in Arizona. Many non-essential local small
                businesses shut their doors during this time. A few months
                later, I sold that Funastics location without any kids having to
                miss a class.
              </p>
              <p>
                I found local contract work – one being with Pearson Education.
                They hired me for 30 days to fix a broken CMS social site they
                had been developing for over a year. Seems the previous
                developers destroyed the CMS core files and left no upgrade
                path. After fixing their site, Pearson requested I return after
                the holidays. During my 2 week break, I created a new beta site
                of what their CMS site could have been.
              </p>
              <p>
                When I returned to Pearson after the holidays, I presented my
                beta site proposal. They ended up extending my contract that
                same day and switched to my new site the following week. Over
                the next year and a half, I was passed around to a few different
                departments building niche CMS sites for them.
              </p>
              <p>
                ...several years have past. I am happily working at Imagine
                Learning moving from Senior Designer, UI/UX, to Frontend Dev.
                Much to learn, much to look forward to.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://github.com/topwebworks"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/topwebworks"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:info@brettsnyder.me"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                info@brettsnyder.me
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
