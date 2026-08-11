/* ==========================================================================
   PLANT-BASED PRIDES — EVENTS ADMIN FILE
   ==========================================================================

   THIS IS THE FILE TO EDIT WHEN YOU WANT TO ADD, CHANGE OR REMOVE AN EVENT
   ON THE WEBSITE. You do not need to touch any other file, and you do not
   need any coding knowledge — just follow the pattern below.

   HOW TO ADD A NEW EVENT
   -----------------------
   1. Copy one whole block, from the opening "{" to the closing "}," below.
   2. Paste it inside the square brackets [ ... ], anywhere between the
      other events.
   3. Edit the text between the quote marks " " for each line.
   4. Save the file. Upload it to your web host (replacing the old copy)
      and the Events page will update automatically — the field order
      doesn't matter, but keep the commas between blocks.

   FIELD GUIDE
   -----------
   title        The event name, e.g. "Brighton Pride 2026"
   date         The event date in YYYY-MM-DD format, e.g. "2026-08-01"
                (this is used to sort events and to show the day/month/year
                boxes on the site — please keep this exact format)
   endDate      Optional. Only add this if the event runs over several days,
                same YYYY-MM-DD format. Delete the line entirely if not needed.
   location     City / venue, e.g. "Brighton, UK"
   description  A sentence or two about the event, or about what
                Plant-Based Prides is doing there.
   link         Optional. A web address for more information (event page,
                ticket page, or a Plant-Based Prides sign-up link). Delete
                the line entirely if there's no link yet.
   linkLabel    Optional. The text shown on the button, e.g. "Event details".
                Only needed if you've added a link.

   HOW TO REMOVE AN EVENT
   -----------------------
   Delete its whole { ... }, block (including the trailing comma).

   Past events are automatically moved into a "Past events" section once
   their date has passed — you don't need to move them yourself.
   ========================================================================== */

const PBP_EVENTS = [
  {
    title: "Example: London Pride 2026",
    date: "2026-06-27",
    location: "London, UK",
    description:
      "Plant-Based Prides will be marching with a delegation and handing out information on plant-based catering options for Pride events. Replace this with your first real event, or delete it.",
    link: "https://act.plantbasedbritain.org/plant_based_pride_sign_up",
    linkLabel: "Join the delegation",
  },
  {
    title: "Example: Plant-Based Catering Webinar",
    date: "2026-04-15",
    location: "Online",
    description:
      "A short online session for Pride organisers on switching event catering to plant-based options — practical tips, supplier contacts and cost comparisons. Replace this with your next real event, or delete it.",
    linkLabel: "More info coming soon",
  },
];
