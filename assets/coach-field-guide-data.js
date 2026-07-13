// ─────────────────────────────────────────────────────────────────────────
// Coach at a Glance — content data
//
// EDIT THIS FILE to update the field guide. Nothing below is wired to
// rendering logic (that lives in coach-field-guide.js) — this file is pure
// content, organized so each piece is easy to find and replace.
//
// EVERYTHING MARKED "PLACEHOLDER" is draft copy standing in for final
// guidance and has not been reviewed/approved. Replace it before relying on
// it with coaches. Routine `url` fields are all `null` (no real link exists
// yet) — fill them in with real resource URLs as they become available.
// ─────────────────────────────────────────────────────────────────────────

// ─── Step 1 options: coaching day types ────────────────────────────────
// Only these three show in the selector today. Skill Builder Day is fully
// modeled below (routines + field guide) but intentionally left out of this
// list per current scope — add it here (and nowhere else) when it's ready.
var DAY_TYPES = [
  { id: 'content-module', label: 'Content Module Day', hint: 'A VR content module lesson' },
  { id: 'tutorial', label: 'Tutorial Day', hint: "Students' first time in VR" },
  { id: 'transfer-assessment', label: 'Transfer / Assessment Day', hint: 'CFU, revision, or transfer task' }
];

// Modeled and ready, not yet added to DAY_TYPES above (see comment there).
var SKILL_BUILDER_DAY_TYPE = { id: 'skill-builder', label: 'Skill Builder Day', hint: 'Spaced retrieval practice' };

// ─── Step 2 options: coaching model ────────────────────────────────────
var COACHING_MODELS = [
  { id: 'co-teaching', label: 'Co-Teaching', hint: 'You and the teacher share the room' },
  { id: 'teacher-led', label: 'Teacher-Led', hint: 'Teacher leads; you observe & support' }
];

// ─── Routine definitions ───────────────────────────────────────────────
// `url: null` means no real link exists yet — the UI shows a clearly
// marked "Add link" placeholder instead of guessing at one.
var ROUTINES = {
  hardware:   { name: 'Hardware & Technology', url: null },
  jitf:       { name: 'Just-in-Time Feedback', url: null },
  writing:    { name: 'Writing & Discourse', url: null },
  assessment: { name: 'Assessment & Revision', url: null },
  spaced:     { name: 'Spaced Repetition Practice', url: null }
};

// ─── Which routines matter for each day type ───────────────────────────
// `primary` = Primary Focus, `supporting` = Supporting Routine. Not every
// routine belongs on every day — leave an array empty rather than padding
// it with routines that aren't actually relevant that day.
var DAY_ROUTINES = {
  'content-module': { primary: ['hardware', 'jitf', 'writing'], supporting: [] },
  'tutorial': { primary: ['hardware'], supporting: ['jitf'] },
  'transfer-assessment': { primary: ['assessment', 'writing'], supporting: [] },
  'skill-builder': { primary: ['spaced'], supporting: ['hardware', 'jitf'] }
};

// ─── Coach at a Glance content, keyed "<dayType>__<model>" ─────────────
// PLACEHOLDER copy throughout — concise stand-ins, not final guidance.
// whatIfs entries are { if: 'scenario', then: 'response' } pairs.
var FIELD_GUIDE = {

  'content-module__co-teaching': {
    goal: 'PLACEHOLDER: Students move through VR, synthesis, and writing with the teacher owning as much of the routine as they\'re ready for.',
    priorities: [
      'PLACEHOLDER: Watch for where the teacher needs a model vs. where they\'ve got it',
      'PLACEHOLDER: Keep the Teacher Dashboard open and visible to both of you',
      'PLACEHOLDER: Protect time for synthesis and writing at the end of VR'
    ],
    coachMoves: [
      'PLACEHOLDER: Model a routine once, then hand it back explicitly ("Your turn next time")',
      'PLACEHOLDER: Circulate together during VR, dividing the room by proximity',
      'PLACEHOLDER: Use a shared hand signal to swap who\'s leading mid-lesson',
      'PLACEHOLDER: Narrate your own moves out loud so the teacher sees the reasoning, not just the action'
    ],
    lookFors: [
      'PLACEHOLDER: Headsets on and students in VR within the first few minutes',
      'PLACEHOLDER: Teacher checking the Dashboard unprompted',
      'PLACEHOLDER: Students writing before discussion starts'
    ],
    challenges: [
      'PLACEHOLDER: Hardware setup eats into VR time',
      'PLACEHOLDER: Teacher hangs back and waits for you to lead everything',
      'PLACEHOLDER: Synthesis gets rushed or skipped when the period runs long'
    ],
    whatIfs: [
      { if: 'PLACEHOLDER: The teacher defers to you on every decision', then: 'PLACEHOLDER: Name it directly — ask them to make the next call and back them up' },
      { if: 'PLACEHOLDER: A student is stuck in VR and no one has noticed', then: 'PLACEHOLDER: Step in yourself, then flag the miss to the teacher afterward, not during' }
    ],
    successIndicators: [
      'PLACEHOLDER: Teacher took the lead on at least one routine without prompting',
      'PLACEHOLDER: Synthesis and writing happened before the bell',
      'PLACEHOLDER: You leave with one specific thing to hand off next visit'
    ]
  },

  'content-module__teacher-led': {
    goal: 'PLACEHOLDER: The teacher runs the full lesson; you observe closely and step in only when it genuinely matters.',
    priorities: [
      'PLACEHOLDER: Stay out of the teacher\'s way unless a student is at real risk of disengaging',
      'PLACEHOLDER: Track what you\'ll want to name in the debrief',
      'PLACEHOLDER: Notice Dashboard use without taking over it yourself'
    ],
    coachMoves: [
      'PLACEHOLDER: Whisper-coach only — brief, quiet, in-the-moment prompts',
      'PLACEHOLDER: Position yourself where you can see the whole room, not just one student',
      'PLACEHOLDER: Jot specific moments (not vague impressions) for the follow-up email',
      'PLACEHOLDER: Step in directly only if a student is stuck and the teacher hasn\'t noticed'
    ],
    lookFors: [
      'PLACEHOLDER: Teacher circulating and using the Dashboard independently',
      'PLACEHOLDER: Clear expectations given before headsets go on',
      'PLACEHOLDER: Writing time protected before discussion'
    ],
    challenges: [
      'PLACEHOLDER: Urge to jump in too early instead of letting the teacher recover on their own',
      'PLACEHOLDER: Hard to collect specific evidence while also staying invisible',
      'PLACEHOLDER: Teacher misses a stuck student and the window to help closes fast'
    ],
    whatIfs: [
      { if: 'PLACEHOLDER: A student is visibly stuck and the teacher hasn\'t seen it', then: 'PLACEHOLDER: A quiet, direct nudge to the teacher beats fixing it yourself' },
      { if: 'PLACEHOLDER: The lesson is going great and there\'s nothing to whisper-coach', then: 'PLACEHOLDER: Good — that\'s success. Spend the time gathering specific detail for the email' }
    ],
    successIndicators: [
      'PLACEHOLDER: You stepped in rarely, and only when it mattered',
      'PLACEHOLDER: You leave with 2-3 specific, named moments for the debrief',
      'PLACEHOLDER: The teacher ran the lesson without needing you to rescue it'
    ]
  },

  'tutorial__co-teaching': {
    goal: 'PLACEHOLDER: Get students and the teacher comfortable with headsets, the Dashboard, and classroom logistics for the first time.',
    priorities: [
      'PLACEHOLDER: Hardware and hardware only — don\'t let content depth become the focus today',
      'PLACEHOLDER: Model the distribution/collection routine once, then hand it to students',
      'PLACEHOLDER: Make sure the teacher leaves knowing how to open the Dashboard alone'
    ],
    coachMoves: [
      'PLACEHOLDER: Narrate the headset fit/boundary-setting steps out loud as you demo them',
      'PLACEHOLDER: Assign tech helpers together with the teacher, not for them',
      'PLACEHOLDER: Show the Dashboard on your device first, then hand control to the teacher',
      'PLACEHOLDER: Keep language simple — this is a first exposure, not a deep dive'
    ],
    lookFors: [
      'PLACEHOLDER: Students can put on and adjust a headset with minimal help by the end',
      'PLACEHOLDER: Teacher opens the Dashboard without being told how',
      'PLACEHOLDER: Cleanup routine runs smoother the second time than the first'
    ],
    challenges: [
      'PLACEHOLDER: Headset fit issues eat up most of the period',
      'PLACEHOLDER: Teacher feels like they need to "catch up" on content — redirect back to hardware',
      'PLACEHOLDER: Too many first-day tech hiccups at once (charging, login, fit)'
    ],
    whatIfs: [
      { if: 'PLACEHOLDER: A student can\'t get a comfortable headset fit', then: 'PLACEHOLDER: Try the three standard fixes (lens adjustment, strap, brightness) before troubleshooting further' },
      { if: 'PLACEHOLDER: The teacher wants to skip ahead to content today', then: 'PLACEHOLDER: Gently hold the line — a shaky hardware routine costs more time later than it saves today' }
    ],
    successIndicators: [
      'PLACEHOLDER: Every student got a working headset on and could navigate basic controls',
      'PLACEHOLDER: Teacher can run the Dashboard solo next time',
      'PLACEHOLDER: No major tech logistics problem is left unresolved for next visit'
    ]
  },

  'tutorial__teacher-led': {
    goal: 'PLACEHOLDER: The teacher runs the first VR experience themselves; you\'re there as a safety net for hardware issues only.',
    priorities: [
      'PLACEHOLDER: Let the teacher lead distribution and setup even if it\'s slower than you\'d do it',
      'PLACEHOLDER: Step in for hardware failures, not pacing or content choices',
      'PLACEHOLDER: Notice what the teacher will need modeled next visit'
    ],
    coachMoves: [
      'PLACEHOLDER: Whisper-coach hardware fixes only — let everything else play out',
      'PLACEHOLDER: Stay near the charging cart/tech station in case of an issue',
      'PLACEHOLDER: Resist narrating what you\'d do differently in the moment'
    ],
    lookFors: [
      'PLACEHOLDER: Teacher gives clear instructions before headsets go on',
      'PLACEHOLDER: Tech helpers are being used, even informally',
      'PLACEHOLDER: Teacher attempts the Dashboard without prompting'
    ],
    challenges: [
      'PLACEHOLDER: Slower first-time pacing that isn\'t actually a problem — resist the urge to speed it up',
      'PLACEHOLDER: A hardware issue you could fix in seconds takes the teacher several minutes',
      'PLACEHOLDER: Knowing when "struggling" becomes "stuck" and needs your help'
    ],
    whatIfs: [
      { if: 'PLACEHOLDER: A real hardware failure (dead battery, login issue) stalls the class', then: 'PLACEHOLDER: Step in immediately — this one\'s a logistics fix, not a teaching moment to protect' },
      { if: 'PLACEHOLDER: Setup is just slow, not broken', then: 'PLACEHOLDER: Let it run — first-time pacing is expected and will improve' }
    ],
    successIndicators: [
      'PLACEHOLDER: Teacher completed the full tutorial routine with minimal coach intervention',
      'PLACEHOLDER: You only stepped in for genuine hardware failures',
      'PLACEHOLDER: Teacher and students both leave more comfortable with the hardware than they started'
    ]
  },

  'transfer-assessment__co-teaching': {
    goal: 'PLACEHOLDER: Students demonstrate and revise their thinking through a CFU or transfer task, with writing and discourse doing the heavy lifting.',
    priorities: [
      'PLACEHOLDER: Protect a real revision window — don\'t let the CFU become a one-and-done check',
      'PLACEHOLDER: Model how to use contrasting responses to drive discussion',
      'PLACEHOLDER: Keep hardware/dashboard logistics off today\'s radar — they\'re not the focus'
    ],
    coachMoves: [
      'PLACEHOLDER: Co-facilitate the CFU review — you pull data, teacher leads discussion (or swap)',
      'PLACEHOLDER: Model pulling two contrasting responses and asking "which is stronger, and why?"',
      'PLACEHOLDER: Prompt for a silent-write step before any discussion starts',
      'PLACEHOLDER: Hand the revision protocol to the teacher partway through'
    ],
    lookFors: [
      'PLACEHOLDER: Students write independently before any discussion begins',
      'PLACEHOLDER: CFU results get reviewed with time left to act on them',
      'PLACEHOLDER: Revision is visible and specific, not just "try again"'
    ],
    challenges: [
      'PLACEHOLDER: CFU review gets pushed to the end and there\'s no time left to revise',
      'PLACEHOLDER: Discussion happens before anyone has written anything down',
      'PLACEHOLDER: Only a few voices dominate the whole-class discussion'
    ],
    whatIfs: [
      { if: 'PLACEHOLDER: Time is running out and the CFU hasn\'t been reviewed yet', then: 'PLACEHOLDER: Protect a shortened 5-minute review over skipping it entirely' },
      { if: 'PLACEHOLDER: The same few students are doing all the talking', then: 'PLACEHOLDER: Use cold-call or partner-share to widen who\'s heard from' }
    ],
    successIndicators: [
      'PLACEHOLDER: Every student revised something based on the CFU or discussion',
      'PLACEHOLDER: Writing happened before talking, every time',
      'PLACEHOLDER: Teacher ran at least one full revision cycle without your lead'
    ]
  },

  'transfer-assessment__teacher-led': {
    goal: 'PLACEHOLDER: The teacher runs the assessment/transfer cycle solo; you watch for whether writing, discourse, and revision are all actually happening.',
    priorities: [
      'PLACEHOLDER: Track whether revision is real or just "check your answer again"',
      'PLACEHOLDER: Notice if discussion is replacing writing instead of following it',
      'PLACEHOLDER: Collect specific evidence for the debrief rather than general impressions'
    ],
    coachMoves: [
      'PLACEHOLDER: Whisper-coach only if writing time is about to get skipped entirely',
      'PLACEHOLDER: Note which students haven\'t been heard from by the debrief',
      'PLACEHOLDER: Hold specific language for the follow-up rather than commenting in the moment'
    ],
    lookFors: [
      'PLACEHOLDER: Teacher builds in a genuine silent-write step',
      'PLACEHOLDER: CFU or transfer task results actually get looked at before class ends',
      'PLACEHOLDER: Revision is specific to the misconception, not just "redo it"'
    ],
    challenges: [
      'PLACEHOLDER: Assessment turns into a compliance check instead of a thinking task',
      'PLACEHOLDER: Revision step gets cut when time runs short',
      'PLACEHOLDER: Hard to know when to step in vs. let a flat discussion play out'
    ],
    whatIfs: [
      { if: 'PLACEHOLDER: Class is about to end with zero time for revision', then: 'PLACEHOLDER: A quiet prompt to the teacher to protect even 2 minutes beats none' },
      { if: 'PLACEHOLDER: Discussion has gone flat and no one is building on ideas', then: 'PLACEHOLDER: Note it for the debrief rather than jumping in to rescue it yourself' }
    ],
    successIndicators: [
      'PLACEHOLDER: A real revision cycle happened, not just a review',
      'PLACEHOLDER: You have specific, nameable moments for the follow-up email',
      'PLACEHOLDER: Teacher independently protected writing time before discussion'
    ]
  },

  // Modeled ahead of time for when Skill Builder Day is added to the selector.
  'skill-builder__co-teaching': {
    goal: 'PLACEHOLDER: Use Skill Builders as spaced practice tied to a specific, data-identified gap — not a one-off assignment.',
    priorities: [
      'PLACEHOLDER: Confirm the specific skill gap driving today\'s Skill Builder before starting',
      'PLACEHOLDER: Model how to connect the practice back to an upcoming module',
      'PLACEHOLDER: Plan the next spaced reassignment before you leave'
    ],
    coachMoves: [
      'PLACEHOLDER: Co-review CFU/prerequisite data together to confirm the target skill',
      'PLACEHOLDER: Model a quick retrieval-practice warm-up routine',
      'PLACEHOLDER: Hand the scheduling of the next reassignment to the teacher'
    ],
    lookFors: [
      'PLACEHOLDER: The assigned Skill Builder maps to an identified gap, not a default pick',
      'PLACEHOLDER: Teacher can explain why this skill, right now',
      'PLACEHOLDER: A specific reassignment date gets set before the visit ends'
    ],
    challenges: [
      'PLACEHOLDER: Skill Builder gets treated as a one-time assignment with no follow-up',
      'PLACEHOLDER: No clear data tie to the specific gap being targeted'
    ],
    whatIfs: [
      { if: 'PLACEHOLDER: There\'s no clear data pointing to a specific gap', then: 'PLACEHOLDER: Pull it together before assigning — a targeted Skill Builder beats a generic one' }
    ],
    successIndicators: [
      'PLACEHOLDER: A specific skill gap was named and targeted',
      'PLACEHOLDER: A spaced reassignment is scheduled, not just hoped for'
    ]
  },
  'skill-builder__teacher-led': {
    goal: 'PLACEHOLDER: Teacher runs Skill Builder practice independently; you confirm it\'s targeted and spaced rather than generic.',
    priorities: [
      'PLACEHOLDER: Observe whether the practice ties to real data',
      'PLACEHOLDER: Notice whether this is a one-off or part of a spaced plan'
    ],
    coachMoves: [
      'PLACEHOLDER: Ask about the data behind today\'s pick, briefly, without taking over',
      'PLACEHOLDER: Save any process feedback for the debrief'
    ],
    lookFors: [
      'PLACEHOLDER: Teacher references specific data when explaining the choice',
      'PLACEHOLDER: A next reassignment already exists on the calendar'
    ],
    challenges: [
      'PLACEHOLDER: Skill Builder chosen without a clear rationale',
      'PLACEHOLDER: No spaced follow-up planned'
    ],
    whatIfs: [
      { if: 'PLACEHOLDER: The teacher can\'t articulate why this skill was chosen', then: 'PLACEHOLDER: Flag it for the debrief rather than interrupting the lesson' }
    ],
    successIndicators: [
      'PLACEHOLDER: Clear data-to-practice connection, explained by the teacher',
      'PLACEHOLDER: A spaced follow-up is already planned'
    ]
  }
};
