import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Things I use - Brett Snyder</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="What I use and recommend."
        intro="Here’s a growing list of all of my favorite stuff for work and life."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="Zephyrus G15 Laptop">
              2021 model. Clean look. Keys and trackpad feel great. 3070 GPU is
              just the right balance of power and heat. The Ryzen 9 5900HS is so
              fast. 1TB NVMe, and 1TB External SSD for portability. Ports are
              adequate. Missing a built-in webcam. Either I use my Logitech HD
              clip-on webcam, connect via phone, or go audio only.
            </Tool>
            <Tool title="47” External Monitor">
              My LG 47” LED monitor is way old, but I still love the one large
              monitor vs 2 small side by side. Anything larger than 47” was too
              big to work comfortably. It does have a fast 240Hz refresh - and
              super cool 3D I never needed. I just stick my app windows left and
              right. No dock needed. Plus, I have the desktop extended to my
              elevated laptop screen for chat or whatever.
            </Tool>
            <Tool title="Laptop Stand and Fan">
              My laptop is kept cool by using a portable iVoler laptop stand on
              the highest setting. Then a small Vornado destop fan behind it. I
              can angle the fan a bit towards me if I want a breeze. Better than
              a standard laptop cooler tray.
            </Tool>
            <Tool title="Logitech MX Keys">
              I had a Logitech mechanical gaming keyboard. All the bells and
              whistles - so rad. Gave it to my son after trying the MX Keys. Has
              3 bluetooth keys for multiple devices. Thin profile. Each charge
              lasts a long time. Feels great to type on it.
            </Tool>
            <Tool title="Logitech MX Master and G502">
              Mainly run my wired G502 mouse. All the buttons I will ever need.
              Feels great in-hand. When I go remote, I switch to the MX Master.
              They are both several years old - I heart them both.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Software">
            <Tool title="VS Code">
              I have tried brackets, sublime, eclipse, netbeans, and some from
              Jetbrains. However, VS Code seems to be the way of the coder
              lately. It is free and constantly updated. Everyone uses it. Get
              it.
            </Tool>
            <Tool title="Chrome DevTools">
              For any basic cms website edits, this is the first and only tool
              needed. Inspect - Edit HTML - Copy working code. Or it can be
              refactored back into your component.
            </Tool>
            <Tool title="Figma">
              My absolute favorite web layout and collaboration tool. Easy and
              fast way to work together in real time or leave notes. From
              planning to prototype...Figma does it all. Easy components and
              instances. Once you figure out the how to select groups and
              individual elements, it is a simple style reference. I prefer not
              to use their Auto Layout feature - sounds cool but locks
              constrained elements together just to wrap. For mobile, it is
              simpler just to stack elements later than to have every content
              block element locked down from the beginning. Why limit yourself?
            </Tool>
            <Tool title="Tailwind CSS">
              Want to use a css framework? Ultra lightweight and simple to use?
              Look no further than Tailwindcss. It comes out of the box with a
              clean look that can easily be customized. I have been a Taiwind
              fan for several years now. Smart team.
            </Tool>
            <Tool title="Adobe CC">
              Industry standard stuff we all have to use. The Affinity products
              are also pretty cool...just wish they had more cross compatibility
              with Adobe.
            </Tool>
            <Tool title="OneNote and OneDrive">
              Sure, Office 365 is also a industry standard. But these two are my
              favorite multidevice apps. OneNote keeps my notes as organized as
              I make it. And OneDrive is great to keep my files accessible and
              versioned. It has saved me many times. I love how I can easily
              remove local unused files. Note: It is best not to bog down any
              file sync setup with npm folders.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Gadgets">
            <Tool title="Groove Wallet">
              I am a Groove Life fan. I use their belts and rings. But my
              favorite thing is their Groove Wallet. A thin front pocket metal
              slide wallet that vertically fans my cards out with a satifying
              push click. Take card out to use, then easily slide it back in. I
              like to slide the card in from the back so when the wallet opens,
              my last card used always shows at the top. I add a bandaid to the
              money clip. Lifetime warraty. Cards held securly. Smart design.
              Last wallet I will ever buy. This replaced my old Ridge Wallet.
            </Tool>
            {/* <Tool title="Icom ID-5100 and ID-51a Ham Radio">Lorem Ipsum</Tool>
            <Tool title="Sony WH-H900N Headset">Lorem Ipsum</Tool>
            <Tool title="Google Speakers">Lorem Ipsum</Tool>
            <Tool title="Google TV">Lorem Ipsum</Tool>
            <Tool title="Google Nest">Lorem Ipsum</Tool>
            <Tool title="Samsung Galaxy Phones">Lorem Ipsum</Tool>
            <Tool title="Quest 2">Lorem Ipsum</Tool> */}
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
