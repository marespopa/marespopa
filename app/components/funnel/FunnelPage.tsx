import React from 'react'

import ContactForm from '../contact/ContactForm'
import Container from '../container/Container'

const FunnelPage = () => {
  return (
    <Container>
      <div className="prose prose-invert my-4">
        <section>
          <h1>
            Take Your Business Beyond Social Media with a{` `}
            <span className="font-bold underline">One Page Website</span>
          </h1>
          <h2>Greetings, Ambitious Business Owner! 👋</h2>
          <p>
            Are you ready to Boost Your Online Presence and Sales? If
            you&apos;ve invested time in building a social media following or
            have the potential to grow one, I&apos;m here to offer a
            game-changing solution that will drastically improve your online
            presence and drive sales.
          </p>
          <p>
            A One Page Funnel carefully crafted to take your business to new
            heights beyond the realms of social media.
          </p>
        </section>
        <section>
          <h2>How will this help my business?</h2>
          <h3>Likes and Views ≠ sales</h3>
          <p>
            Fed up with engagement that doesn&apos;t translate into tangible
            results? A focused, targeted page seamlessly guides your visitors
            from interest to action, resulting in increased sales and measurable
            ROI.
          </p>
          <h3>People buy stories, not products.</h3>
          <p>
            A one-page format encourages a narrative flow. You can tell a
            cohesive brand story, narrating your business journey, values, and
            unique selling propositions in a compelling way.
          </p>
          <h3>A clear action for who visits your website</h3>
          <p>
            A one-page funnel enables you to concentrate your messaging on key
            value propositions, products, or services. This focused approach
            ensures that visitors quickly understand what you offer.
          </p>
          <p>
            You can strategically place a clear and compelling Call-to-Action at
            the end of your content. Whether it&apos;s to make a purchase,
            contact you, or subscribe, a one-page layout directs visitors toward
            a specific action.
          </p>
        </section>
        <section>
          <h2>I want one. How do I get it?</h2>

          <h3>1. Initial Chat</h3>
          <p>
            We start with a casual chat—over a coffee or tea, whichever suits
            your preference. Share your social media successes, goals, and your
            vision for an expanded online marketing hub. This sets the stage for
            crafting the perfect One Page Funnel for you.
          </p>

          <h3>2. Research Phase </h3>
          <p>
            Together, we pinpoint your target audience to ensure your One Page
            Funnel speaks directly to the right people, maximizing its impact
            and engagement.
          </p>
          <h3>3. Content Phase</h3>
          <p>
            I&apos;ll deliver content that&apos;s concise and compelling—an
            instant connection with your audience. No fluff. Just words that
            convince and convert.
          </p>

          <h3>4. Design Phase</h3>
          <p>
            Your expanded online marketing hub will be an extension of your
            social media prowess. No complicated templates—just designs that
            stand out and drive action. The final design will be optimized for
            both desktops/tablets and mobiles.
          </p>

          <h3>5. Implementation Phase</h3>
          <p>
            The final step involves bringing your One Page Funnel to life using
            the latest tools in website development. Every line of code is
            strategically placed to create a seamless user experience, ensuring
            your audience is engaged from the moment they land on your page.
          </p>

          <h3>The result?</h3>
          <p>
            A stunning design that not only captivates but also performs
            exceptionally well, obtaining a 100% Lighthouse score. This not only
            boosts overall performance but also gives your online hub a
            significant edge in SEO, ensuring your business shines brightly on
            search engines.
          </p>
        </section>
        <section>
          <h2>
            Ready to elevate your business with a uniquely crafted One Page
            Funnel?
          </h2>
          <p>
            Act now! Complete the form bellow, and I&apos;ll personally get in
            touch with you to discuss how we can transform your online presence.
          </p>
        </section>

        <ContactForm showIntro={false} />
      </div>
    </Container>
  )
}

export default FunnelPage
