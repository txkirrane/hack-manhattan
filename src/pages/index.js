import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import PageRoot from '../components/PageRoot'

import ImageCard from '../components/ImageCard'

import { cardImage } from "../components/ImageCard.module.css"

const HeroImage = {
  width: "100%"
}

const HeroTitle = {
  fontSize: "65px",
  textAlign: "center",
  fontWeight: 300
}

const Index = () => {
  return(
    <PageRoot>
      {/* Hero */}
      <StaticImage
        style={HeroImage}
        src="../images/hero_hm.jpg"
      />
      <h1 style={HeroTitle}>Manhattan's public hackerspace</h1>
      <div>
        <ImageCard
          image={<StaticImage className={cardImage} src='../images/hm1.jpg' alt='' />}
        >
          {/* About us card */}
          <h1>About Us</h1>
          <p>
            Hack Manhattan is a non-profit, all-volunteer hackerspace in New York City.
            Our space is a place for people to come together and socialize, work on projects,
            and share knowledge. We welcome anyone interested in art, craft, and technology -
            whether you're interested in electronics or gardening, textiles or 3D printing, we
            invite you to come, work, and be part of the community.
          </p>
        </ImageCard>
        <ImageCard
          reversed
          id='visiting'
          image={<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.5081899406136!2d-73.98718878419709!3d40.75084617932764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259aa244c279f%3A0x488128b03b5fb366!2s34%20W%2037th%20St%2C%20New%20York%2C%20NY%2010018!5e0!3m2!1sen!2sus!4v1661196474483!5m2!1sen!2sus" className={cardImage} />}
        >
          {/* Visiting Card */}
          <h1>Visiting</h1>
          <p>
            We are located on 34 West 37th St, between 5th and 6th Avenues.
          </p>
          <p>
            First-time visitors are encouraged to attend one of our Open House events, held every Tuesday and Thursday from 7:00PM until late.
            Open Houses have members giving tours and introductions to the space and tools and are an excellent way to get oriented and meet people.
            Bring your project or start a new one!
          </p>
          <p>
            We are open to the public whenever a member is present.
          </p>
        </ImageCard>
        <ImageCard
          id='events'
          image={<StaticImage className={cardImage} src='../images/hm3.jpg' alt='' />}
        >
          {/* Events card */}
          <h1>Events and Classes</h1>
          <p>In addition to the Open House nights, Hack Manhattan holds a variety of workshops, classes, and events.</p>
          <p>
            Recurring events include a monthly Shakespeare reading and a monthly repair session with the
            <a href="http://www.fixerscollective.org"> Fixer's Collective</a>,
            while past classes have ranged from a 3D printer build to introductory sewing.
          </p>
          <p>
            For a full list of upcoming events, please see our <a href="http://www.meetup.com/hackmanhattan">Meetup page</a> where you can also sign up to be notified of future ones.
          </p>
        </ImageCard>
        <ImageCard
          reversed
          id='equipment'
          image={<StaticImage className={cardImage} src='../images/hm4.jpg' alt='' />}
        >
          {/* Equipment card */}
          <h1>Equipment</h1>
          <p>If you need it, we've got it. If we don't got it, we'll get it. (Or make it) Our equipment includes:</p>
          <ul>
            <li>3D printers</li>
            <li>3-axis mill</li>
            <li>Router table</li>
            <li>Soldering stations</li>
            <li>Sewing machines + Sergers, plus free fabrics and threads</li>
            <li>Homebrewing equipment for making beer</li>
            <li>Bench grinder</li>
            <li>Hand tools for wood and metalworking</li>
            <li>Infrared soldering station</li>
            <li>Bandsaw</li>
            <li>Mitre saw</li>
            <li>Track saw</li>
          </ul>
        </ImageCard>
        <ImageCard
          id='membership'
          image={<StaticImage className={cardImage} src='../images/hm5.jpg' alt='' />}
        >
          {/* Membership card */}
          <h1>Membership</h1>
          <p>
            Hack Manhattan is a member-supported organization. Membership dues go directly to rent,
            utilities, and the occasional equipment purchase. If you'd like to join us
            (or make a donation), we'd love to have you. Dues are $110 per month.
          </p>
          <p>Because we're building a community, plus the fact that members get 24/7 access,
            storage, and the right to vote on decisions that affect the space, we want to get to know you
            first - we ask that you visit us a few times to make sure it's a good fit. Full details are
            on the wiki <a href="http://wiki.hackmanhattan.com/MembershipInfo">MembershipInfo page.</a>
          </p>
        </ImageCard>
        <ImageCard
          reversed
          id='questions'
          image={<StaticImage className={cardImage} src='../images/hm6.jpg' alt='' />}
        >
          {/* Questions card */}
          <h1>Questions?</h1>
          <p>Have a burning question not answered here? Try our self-help options:</p>
          <ul>
            <li><a name="contact"></a><a href="https://discord.com/invite/jh56s2v5PP">Join our Discord</a> and ask your question there (preferred)</li>
            <li><a href="http://wiki.hackmanhattan.com">Read our wiki</a></li>
          </ul>
          <p>
            You may also email us at <a href="mailto:info@hackmanhattan.com">info@hackmanhattan.com</a>,
            especially with questions that you wish to remain private. This email address is staffed by
            a few volunteers, so it may take a very long time for us to get back to you.
          </p>
        </ImageCard>
      </div>
    </PageRoot>
  )
}

export default Index