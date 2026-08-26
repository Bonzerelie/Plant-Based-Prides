/* ==========================================================================
   PLANT-BASED PRIDES — LATEST NEWS ADMIN FILE
   ==========================================================================

   THIS IS THE FILE TO EDIT WHEN YOU WANT TO ADD, CHANGE OR REMOVE A NEWS
   ARTICLE ON THE WEBSITE. You do not need to touch any other file.

   THE EASY WAY TO ADD AN ARTICLE
   -------------------------------
   Open admin.html in a browser, fill in the form, and click "Generate
   code". It will build a correctly-formatted block for you to copy —
   paste it in below, between the square brackets [ ... ], anywhere
   between the other articles. Save this file, upload it to your web
   host (replacing the old copy) and the Latest News page will update
   automatically.

   You can also write a block by hand if you prefer — just follow the
   pattern below.

   FIELD GUIDE
   -----------
   id           A short, URL-friendly identifier, e.g. "brighton-pride-2026".
                Lowercase letters, numbers and hyphens only, no spaces.
                MUST BE UNIQUE — this is what the article's web address is
                built from (e.g. article.html?id=brighton-pride-2026), so
                two articles can't share one.
   title        The article headline, e.g. "We marched at Brighton Pride!"
   date         The publish date in YYYY-MM-DD format, e.g. "2026-08-01"
                (this is used to sort articles and to show the date on the
                site — please keep this exact format).
   author       Optional. Shown as "Written by: [name]" next to the date on
                the article page itself (not on the Latest News listing).
                Delete the line entirely if you don't want to show one.
   image        Optional. The MAIN image for the article — shown at the top
                of the article page and as the thumbnail on the Latest News
                listing page, e.g. "assets/images/news/brighton-pride-2026.jpg".
                Upload the image itself to that assets/images/news folder on
                your web host first, then reference its filename here.
                Delete the line entirely (or leave as "") if there's no image.
   imageAlt     Optional. A short description of the main image for screen
                readers, e.g. "Plant-Based Prides volunteers at Brighton
                Pride march". Only needed if you've added a main image.
   excerpt      A one-or-two sentence summary shown on the Latest News
                listing page (not the full article).
   body         The full article text. Leave a blank line between
                paragraphs and they'll display as separate paragraphs.
                Basic HTML tags like <strong>, <em> or <a href="..."> can
                be used inside the text if you want a link or emphasis.
   images       Optional. EXTRA images dispersed through the article body
                (separate from the one main "image" above) — an array of
                one or more blocks like:
                  {
                    src: "assets/images/news/brighton-pride-2026-2.jpg",
                    alt: "Volunteers handing out leaflets",
                    caption: "Handing out leaflets outside the march",
                    afterParagraph: 2,
                  }
                src            Required. Path to the image, same upload
                               process as the main image above.
                alt            A short description for screen readers.
                caption        Optional. Small caption text shown under the
                               image. Delete the line if you don't want one.
                afterParagraph Optional. Which paragraph of the body text
                               to place the image after (1 = after the
                               first paragraph, 2 = after the second, and
                               so on). If you leave this out entirely, the
                               image is spaced out automatically among the
                               images that don't specify one — an easy way
                               to just drop images in without doing the
                               maths yourself.
                Delete the whole "images: [ ... ]" line if an article has
                no extra images — it's entirely optional.

   HOW TO REMOVE AN ARTICLE
   -------------------------
   Delete its whole { ... }, block (including the trailing comma).

   Articles are shown newest-first automatically — you don't need to sort
   them yourself.
   ========================================================================== */

var PBP_NEWS = [
  {
    id: "a-small-winter-get-together",
    title: "A Small Winter Get-Together",
    date: "2026-03-07",
    author: "Henry Newbury",
    image: "assets/images/news/07032026-1.jpeg",
    imageAlt: "Plant-Based Prides meeting attendees stood together for a photo, whilst enjoying some gorgeous plant-based food!",
    excerpt: "On 7th March 2026 we got together to discuss the campaign, and eat some nice food 🫡",
    body: "Last Saturday we gathered at Hackney Downs Studios in London where Henry took a few attendees through the Plant-Based Prides campaign and how it has been shaped so far, along with the developments from the campaign group in Bristol.\n\nThis was followed by a group discussion on the structure of the campaign, and how it might look going forward - notably previous to the meeting the primary focus of the campaign had been on highlighting the environmental implications of meat and dairy and the consequences these have on the global LGBTQ+ community, however Samarth explained their belief for the need to also highlight the moral and ethical implications of animal agriculture on animals, and how the targeting and abuse of animals as a group is contradictory to the ethos of Pride, which is to fight for the rights of marginalised communities. Following this the group agreed on the need to reflect these views from within the community in the structure of the campaign, and Henry agreed to add this direction and POV / approach to the website.\n\nAfter the discussion we had some AMAZING food, thanks to everyone who made the effort to make and bring food along!",
    images: [
      {
        src: "assets/images/news/07032026-2.jpeg",
        alt: "Henry delivers a short introduction to the Plant-Based Prides campaign - the image shows Henry cross legged on a red sofa next to a small computer screen which displays a 'Why Plant-Based Prides' presentation slide.",
        caption: "Henry delivers a short introduction to the Plant-Based Prides campaign.",
        afterParagraph: 2,
      },
    ],
  },
  {
    id: "welcome-to-plant-based-prides-news",
    title: "Pride In London 2025",
    date: "2025-07-09",
    author: "Henry Newbury",
    image: "assets/images/news/09072026-1.jpg",
    imageAlt: "6 Plant-Based Prides volunteers hold a hot pink banner with large white block text which reads 'Plant-Based Prides', as part of the Pride In London Parade. Trafalgar Square, and Nelson's column, can be seen in the background.",
    excerpt:
      "We marched at Pride In London 2025!",
    body:
      "On Saturday 5th July 6 Plant-Based Prides campaigners joined the 2025 Pride In London parade, joining other LGBTQ+ groups, non-profits and organisations all celebrating and standing up for the rights of the global LGBTQ+ community. It was a super wholesome day, and afterwards we grabbed a few snacks and headed to meet up with friends at the park, where Luke identified some Nēnē geese (otherwise known as the Hawaiian goose) which are, interestingly, the rarest goose in the world and surprisingly found in central London. 🧐 The more you know, eh ☝️ \n\n Thanks to all who came to support!",
    images: [
      {
        src: "",
        alt: "",
        caption: "Extra images can have an optional caption like this.",
        afterParagraph: 2,
      },
    ],
  },
];
