# Prisms Coach Hub — Product Vision

This is the architectural north star for the Coach Hub. Read this before making structural changes, adding a page, or introducing a new pattern. The `prisms-coaching-website-architect` skill enforces the principles below on every build/redesign task — this document is the fuller context behind that skill.

## What this product is

The Coach Hub is **operational infrastructure for a recurring daily workflow**, not a wiki or a documentation site. Its job is to make the coaching cycle fast and unambiguous — every coach, every day, every stage of the school year. Everything else on the site (Integration & Mapping, Teacher Institute, Coach Central) supports coaches at the *other* points in their year where that daily cycle isn't running yet.

## Primary users

One user type, two mental states:
- **In-the-moment mode** — phone in hand, walking into a school or standing in a classroom. Needs near-zero reading, one tap to the thing that matters.
- **Desk mode** — planning, writing follow-up, reviewing materials. Tolerant of more text and browsing.

The PL manager is a secondary audience, served *through* the artifacts coaches produce (Service Tracker Notes, coaching emails), not through the Hub directly — that's a deliberate choice, not a gap.

## The workflow spine

**Prepare → Coach → Log → Follow Up**

Every new feature should be legible as belonging to one of these four steps, or to Coach Central (team/culture). If it fits neither, reconsider whether it belongs on this site.

- **Prepare** — review data, set a focus before a visit
- **Coach** — the visit itself (Live Coach Tool + Coach at a Glance field guide)
- **Log** — record it (Service Tracker)
- **Follow Up** — close the loop with the teacher (Email Generator)

The homepage follows the same logic at a smaller scale: tools/actions coaches use *today* always come before reference material.

## Design principles

1. Feel polished, professional, and intentional — never a generic template.
2. Simplicity beats complexity; ship the simpler design.
3. Navigation is always obvious — a coach never wonders where they are.
4. The most frequently used tools stand out visually; rarely-used links never compete with them.
5. One clear job per page, stated in the page header's purpose line.
6. Reduce unnecessary scrolling — the thing a coach came for is never more than one click from page-load.
7. Reuse existing components (`.card`, `.tool-card`, `.resource-link`, `.section-title`/`.section-desc`) before inventing new ones.
8. Use whitespace intentionally; avoid both crowding and unfinished-feeling empty space.
9. Design for desktop first, verified responsive on mobile — coaches use both.
10. Accessibility is non-negotiable: contrast, focus states, semantic markup, keyboard reachability.
11. Preserve existing functionality unless specifically asked to change it.
12. Anything asking a coach to make a choice should follow the day-type/model selector pattern (Coaching page) — it's the site's most polished interaction and the template for future choice-driven UI.

## Consistency requirements (every page)

- Identical header, nav, search trigger, and footer.
- `.section-title` + `.section-desc` pairing at the top of every content block.
- The pink/coral gradient `.tool-card` means "open this live tool" — reserved only for that, never decorative.
- Resource link convention: solid border + arrow = real link; dashed border + "Add link" badge = a known, honest gap. Never let a missing feature look like a bug — placeholder-with-explanation, always.
- Brand palette discipline: pink `#DB1873`, navy `#353C78`, coral `#E3673B`, rose `#D94A5D`, red `#E65B57` only. Green/yellow/red status colors are reserved for the Live Coach Tool's rating semantics — never used decoratively elsewhere.

## What should never change

- The Prepare → Coach → Log → Follow Up spine.
- "Tools before reference material" ordering, on every page, always.
- Plain HTML/CSS/JS, no build step — this is why iteration has been fast.
- Brand palette restraint, especially keeping status colors meaningful rather than decorative.

## Known inconsistencies (tracked, not yet resolved)

- `resources.html` duplicates links that already live on topic pages (Curriculum Integration Guide, Post-Coaching Email Generator, etc.) with no cross-reference — needs one clear pattern, not two.
- Placeholder density varies a lot by page (Coaching's field guide has none left; Teacher Institute and Resources still have several "Add link" badges) — an honest reflection of content progress, not a design flaw, but worth closing.
- Coach Central's two-column layout (Standards+Handbook | Quote+Meetings) is a one-off, not a reusable template — intentional exception, don't casually repeat it elsewhere.
- `.phase-card` (homepage) and `.cycle-card` (Coaching page) are visually similar but structurally separate components doing adjacent jobs — not wrong, just not actually shared.

## Where the design is strongest (protect this)

The Coaching page's **Coach** section: a real decision tree (day type → model → tailored guidance), routines correctly weighted (primary vs. supporting), content grounded in real routine docs, and visual prominence that announces its own importance. This is the reference implementation for what "operational, not documentation" should feel like everywhere else.

## Strategic opportunities — becoming an operational platform, not a documentation site

Right now the Hub has one genuinely operational moment (Coach at a Glance) surrounded by reference material. To shift the balance:

- **Persistent visit context** — let the Coaching page know "you're coaching at [school] today" across Prepare/Coach/Log/Follow Up, so the four steps feel like one continuous task.
- **Spread the field-guide pattern** — anywhere a coach currently has to read-and-decide (Teacher Institute prep, Integration & Mapping's "what are you trying to do") is a candidate for the same tap-tap-see-guidance interaction.
- **Surface real state, not just links** — "Where We Coach" is the only page showing live data today. Show coaches their own status (visits logged this week, gaps to fill) too.
- **Close more tool-to-tool loops** — Live Coach Tool → Email Generator already works well; Log → the rest of the cycle is the next candidate.

## Roadmap

### V1.0 — Complete MVP
- Fill every remaining "Add link" placeholder (Teacher Institute, Coaching, Resources).
- Finish "New to Coaching?" steps 3 & 4.
- Get the Skill Builder routine doc link; decide whether Skill Builder Day joins the Coach selector.
- Resolve the Resources-vs-per-page-resources duplication.
- Evaluate whether Teacher Institute or Integration & Mapping want their own version of Coach at a Glance.

### V1.5 — Operational improvements
- Lightweight persistent "today's visit" context across Prepare/Coach/Log/Follow Up.
- A real cross-device story for Visit History (currently device-local only).
- Extend the primary/supporting routine + tailored-guidance pattern to Skill Builder Day and any new day types.
- Deeper Service Tracker integration, if/when it supports more than copy-paste.

### V2.0 — Intelligent features
- Auto-suggested Coach Priorities/Look-Fors based on a teacher's recent visit history, not just generic day-type content.
- Smart routing: surface "your next scheduled visit" and pre-select the likely day type/model.
- Coach-facing trends from Live Coach Tool data ("you've flagged Writing & Discourse 3 visits running") — data that talks back to the coach, not just a report that goes elsewhere.
