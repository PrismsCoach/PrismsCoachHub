// ─────────────────────────────────────────────────────────────────────────
// Coach at a Glance — content data
//
// EDIT THIS FILE to update the field guide. Nothing below is wired to
// rendering logic (that lives in coach-field-guide.js) — this file is pure
// content, organized so each piece is easy to find and replace.
//
// SOURCED FROM: the Hardware & Technology, Just-in-Time Feedback, Writing &
// Discourse, Assessment & Revision, and Skill Builder routine docs (26-27),
// plus the Prisms Coaching to Independence implementation guide (2026) —
// specifically its Round 1 (co-taught, coach establishes the vision) vs.
// Round 2 (teacher-led, coach supports independence) framing, which maps
// to Co-Teaching / Teacher-Led below. Content here is synthesized from
// those docs, not copied verbatim — sanity-check it against the source
// docs (linked in ROUTINES below) before treating it as final.
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
// Maps to the Coaching to Independence guide's Round 1 / Round 2 framing.
var COACHING_MODELS = [
  { id: 'co-teaching', label: 'Co-Teaching', hint: 'Round 1 — you and the teacher co-facilitate' },
  { id: 'teacher-led', label: 'Teacher-Led', hint: 'Round 2 — teacher leads; you support independence' }
];

// ─── Routine definitions ───────────────────────────────────────────────
// `url: null` means no real link exists yet — the UI shows a clearly
// marked "Add link" placeholder instead of guessing at one.
var ROUTINES = {
  hardware:   { name: 'Hardware & Technology', url: 'https://docs.google.com/document/d/131Kq3SoUH0xbrTfO9hX8bMVBVD7ZP8uYA0bbJdxx92w/view?tab=t.0' },
  jitf:       { name: 'Just-in-Time Feedback', url: 'https://docs.google.com/document/d/1tD7wYrmV7Pap2vlmk4nphd-go509Y1AQCuWJXcAVtE8/view?tab=t.0' },
  writing:    { name: 'Writing & Discourse', url: 'https://docs.google.com/document/d/1uUQKxixOcYQxydBR3wTAA7KQbcP831ja19Ctvu6minc/view?tab=t.0' },
  assessment: { name: 'Assessment & Revision', url: 'https://docs.google.com/document/d/1z6AzlSlc2FFHdFNUWYLp7OaHxU5Nt2P7iaI_xrXs59g/view' },
  // No doc link provided yet for Skill Builder routines — add it here once you have it.
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
// whatIfs entries are { if: 'scenario', then: 'response' } pairs.
var FIELD_GUIDE = {

  'content-module__co-teaching': {
    goal: 'Co-facilitate Just-in-Time Feedback and post-VR writing, discourse, and synthesis routines to establish what high-quality implementation looks like.',
    priorities: [
      'Model the Teacher Dashboard and Just-in-Time Feedback moves in real time',
      'Protect the Synthesis Activity and writing time before discussion starts',
      'Show, don\'t just tell — establish a vision the teacher can run independently next time'
    ],
    coachMoves: [
      'Co-facilitate feedback in order: hints/peer support first, then individual conferencing (screencast, Teacher Talk Track, Socratic questions), then small/whole-group conferencing if a misconception is shared',
      'Model providing the Synthesis Activity before VR ends, and monitoring the Dashboard to confirm students reach the Critical Task',
      'Coach student writing side by side with the teacher — press for a claim, ask for evidence, prompt for reasoning',
      'Facilitate discourse together: select 2-3 representative student responses and use discussion prompts ("Do you agree or disagree? Why?")'
    ],
    lookFors: [
      'Teacher Dashboard open and monitored throughout VR',
      'Hints and peer support tried before individual conferencing',
      'Students write independently before any discussion begins',
      'Teacher connects student thinking back to the lesson objective during consolidation'
    ],
    challenges: [
      'Individual conferencing happening before hints/peer support are tried',
      'Synthesis Activity introduced too late, after most students have already left VR',
      'Discussion starting before students have written anything down'
    ],
    whatIfs: [
      { if: 'a student is stuck and hints/peer support haven\'t worked', then: 'move to individual conferencing — screencast and use the Teacher Talk Track or Socratic questions' },
      { if: 'several students share the same misconception', then: 'pause for small or whole-group conferencing rather than repeating the same individual conference' }
    ],
    successIndicators: [
      'Teacher used the Dashboard to identify who needed support, unprompted',
      'Writing happened before discussion, every time',
      'Teacher can describe the difference between hints/peer support, individual conferencing, and group conferencing'
    ]
  },

  'content-module__teacher-led': {
    goal: 'Teacher leads Just-in-Time Feedback and post-VR writing, discourse, and synthesis; you direct only when needed and build their confidence toward independence.',
    priorities: [
      'Let the teacher choose the right level of feedback (hints → individual → group) before stepping in',
      'Watch specifically for whether writing happens before discussion',
      'Build independence — resist doing it for them'
    ],
    coachMoves: [
      'Observe which Just-in-Time Feedback level the teacher reaches for and whether it matches what\'s actually happening',
      'Step in only if a shared misconception goes unaddressed, or writing time is about to be skipped',
      'Note specific moments of strong Dashboard use or discourse facilitation for the debrief',
      'Whisper-coach sparingly — a quiet prompt, not a takeover'
    ],
    lookFors: [
      'Teacher tries hints/peer support before jumping to individual conferencing',
      'Synthesis Activity assigned before VR time runs out',
      'Teacher uses discussion prompts to press for reasoning, not just answers'
    ],
    challenges: [
      'Teacher jumps straight to individual conferencing without trying hints/peer support first',
      'Discourse becomes teacher-led telling instead of student discussion',
      'Consolidation gets rushed or skipped at the end'
    ],
    whatIfs: [
      { if: 'the teacher misses a shared misconception affecting multiple students', then: 'a brief, direct nudge to pause for group conferencing — this is worth interrupting for' },
      { if: 'writing time is about to be skipped', then: 'whisper-coach a reminder before discussion starts, rather than letting it go' }
    ],
    successIndicators: [
      'Teacher independently matched the right feedback level to the situation',
      'Writing preceded discussion without a prompt from you',
      'You have specific evidence for the debrief, not general impressions'
    ]
  },

  'tutorial__co-teaching': {
    goal: 'Model hardware routines and set up 2-3 student tech helpers so the class can run its own tech logistics going forward.',
    priorities: [
      'Model the full hardware routine start to finish',
      'Set up tech helpers with the 5 primary troubleshooting issues so students can support each other',
      'Give all instructions before headsets go on, not after'
    ],
    coachMoves: [
      'Model preparing equipment (headsets powered off before charging, controllers matched to their headset)',
      'Choose a distribution method with the teacher — pre-placed, grab-and-go, or tech helpers — and model it',
      'Walk through headset setup together: strap fit, play boundary, and the VR Norms (Explore, Persist)',
      'Identify and train 2-3 tech helpers on the 5 primary troubleshooting issues'
    ],
    lookFors: [
      'All instructions given before any headset goes on',
      'Auto Launch used from the Teacher Dashboard where possible',
      'Tech helpers actively distributing/collecting rather than the teacher doing it alone',
      'Headsets sanitized and returned correctly at the end'
    ],
    challenges: [
      'No tech helpers identified yet, so the teacher is doing all the logistics solo',
      'Headset distribution or login taking up most of the period',
      'Students unsure of VR Norms language (Explore / Persist) since it\'s their first exposure'
    ],
    whatIfs: [
      { if: 'a student is hesitant to put the headset on', then: 'make the Frame conversation engaging, remind them breaks are OK, and offer a timer if it helps' },
      { if: 'distribution is taking too long', then: 'pre-set headsets on desks before class next time, or lean more on tech helpers' }
    ],
    successIndicators: [
      '2-3 tech helpers are identified and know the 5 primary troubleshooting issues',
      'Teacher can run Auto Launch from the Dashboard independently',
      'The hardware routine start-to-finish took less time than at the start of the visit'
    ]
  },

  'tutorial__teacher-led': {
    goal: 'Teacher runs the hardware routine independently; you observe and support only for genuine tech issues.',
    priorities: [
      'Let the teacher lead distribution, setup, and cleanup even if it\'s slower',
      'Step in for real hardware failures, not normal first-time pacing',
      'Confirm tech helpers know the 5 primary troubleshooting issues'
    ],
    coachMoves: [
      'Observe whether instructions are given before headsets go on',
      'Note whether tech helpers are being used and how confidently',
      'Step in directly only for a genuine hardware failure (won\'t power on, login broken, etc.)',
      'Save pacing or sequencing feedback for the debrief rather than interrupting'
    ],
    lookFors: [
      'Teacher gives all instructions before headsets go on',
      'Tech helpers handle distribution/collection with minimal teacher involvement',
      'Sanitizing and headset shutdown routine is followed at the end'
    ],
    challenges: [
      'Teacher hasn\'t set up tech helpers yet and is doing everything solo',
      'A real hardware issue takes several minutes to resolve without your help',
      'Confusing "still learning the routine" with an actual problem worth stepping in for'
    ],
    whatIfs: [
      { if: 'a headset won\'t power on or a student is logged into the wrong account', then: 'step in immediately — this is a logistics fix, not a moment to protect' },
      { if: 'setup is just slower than you\'d do it yourself', then: 'let it run — first-time pacing is expected' }
    ],
    successIndicators: [
      'Teacher completed the full routine with tech helpers actively involved',
      'You only stepped in for genuine hardware failures',
      'Teacher and tech helpers both know the 5 primary troubleshooting issues by the end'
    ]
  },

  'transfer-assessment__co-teaching': {
    goal: 'Co-facilitate the CFU and revision routine to establish what a real revision cycle looks like.',
    priorities: [
      'Model matching the revision pathway (procedural, conceptual, or written communication) to the actual misconception',
      'Protect real revision time, not just a review',
      'Confirm understanding before moving on — "revised" should mean more than "resubmitted"'
    ],
    coachMoves: [
      'Co-review AI feedback with the teacher and sort responses into Ready to move on / Nearly there / Needs review',
      'Model selecting the right revision pathway: procedural (redo on paper, Skill Builder if it\'s a prerequisite gap), conceptual (conference briefly, revisit the Synthesis Activity), or written communication (use the sentence frame in Writing Guidance)',
      'Ask the pathway-specific diagnostic questions together — "What is the question asking?" or "What evidence supports your thinking?"',
      'Confirm students can explain what changed before retaking the CFU'
    ],
    lookFors: [
      'Revision pathway matches the actual type of error, not a one-size-fits-all "try again"',
      'Students retake the CFU after revising, not just review the answer',
      'Teacher confirms understanding before moving on'
    ],
    challenges: [
      'Every student gets the same revision approach regardless of error type',
      'Revision becomes "look at the answer again" instead of a real pathway',
      'No time left to retake the CFU after revising'
    ],
    whatIfs: [
      { if: 'time is short and revision is at risk of being skipped', then: 'protect a shortened version — even one pathway, fully done, beats a rushed pass at all three' },
      { if: 'a student\'s error doesn\'t clearly match one pathway', then: 'model asking the diagnostic questions together to figure out which one actually fits' }
    ],
    successIndicators: [
      'Every student was routed to the pathway that matched their actual error',
      'Students could explain what changed in their thinking',
      'Teacher independently ran at least one full revision pathway by the end'
    ]
  },

  'transfer-assessment__teacher-led': {
    goal: 'Teacher runs the CFU and revision cycle independently; you confirm the revision pathway actually matches the error.',
    priorities: [
      'Watch whether the teacher distinguishes procedural, conceptual, and written-communication errors',
      'Notice whether revision is genuine or just a resubmission',
      'Collect specific evidence on what worked and what didn\'t for the debrief'
    ],
    coachMoves: [
      'Observe how the teacher sorts AI feedback results and assigns revision pathways',
      'Whisper-coach only if revision time is about to be cut entirely',
      'Note which pathway-specific diagnostic questions got used (or didn\'t) for the debrief'
    ],
    lookFors: [
      'Different error types get routed to different revision pathways',
      'Students explain what changed before retaking the CFU',
      'Teacher confirms understanding rather than assuming it from a resubmission'
    ],
    challenges: [
      'All errors treated the same way regardless of type',
      'Revision skipped or rushed when time runs short',
      'Retaking the CFU happens without students first explaining their change in thinking'
    ],
    whatIfs: [
      { if: 'the teacher is about to skip revision for time', then: 'a quiet prompt to protect even a shortened version beats skipping it entirely' },
      { if: 'revision pathway doesn\'t match the error type', then: 'flag it for the debrief rather than correcting it live' }
    ],
    successIndicators: [
      'Revision pathways matched actual error types without your prompting',
      'Students retook the CFU after genuinely revising, not just resubmitting',
      'You have specific, nameable evidence for the follow-up email'
    ]
  },

  // Modeled ahead of time for when Skill Builder Day is added to the selector.
  'skill-builder__co-teaching': {
    goal: 'Co-select and launch a targeted Skill Builder tied to a specific prerequisite, reinforcement, or fluency goal.',
    priorities: [
      'Confirm the specific learning goal (prerequisite, reinforcement, or fluency) before choosing a Skill Builder',
      'Model auto-launching students to the right problem type from the Dashboard',
      'Choose the grouping format (small group, whole class, differentiated, station rotation) that matches the goal'
    ],
    coachMoves: [
      'Co-identify the learning goal and select the matching Skill Builder and 3-5 targeted questions together',
      'Model auto-launching students from the Teacher Dashboard to the selected problem type',
      'Circulate together, using the Dashboard to spot misconceptions in real time',
      'Model the paper-based Synthesis Activity or Practice Activity to extend the learning afterward'
    ],
    lookFors: [
      'The Skill Builder and questions chosen clearly match a specific goal, not a default pick',
      'Grouping format matches the goal (e.g., small group for reteaching, whole class for shared practice)',
      'Dashboard is actively monitored during the activity, not just at the start'
    ],
    challenges: [
      'Skill Builder assigned without a clear learning goal behind it',
      'Grouping format doesn\'t match the actual goal (e.g., whole class for a need that\'s really individual)',
      'No follow-up plan for revisiting the skill later'
    ],
    whatIfs: [
      { if: 'there\'s no clear data pointing to a specific goal', then: 'pull CFU or prerequisite data together before choosing — a targeted pick beats a generic one' },
      { if: 'the whole class doesn\'t need the same thing', then: 'model switching to differentiated practice or station rotation instead' }
    ],
    successIndicators: [
      'A specific learning goal drove the Skill Builder choice',
      'Grouping format matched the goal',
      'A next spaced-practice opportunity is already being planned'
    ]
  },
  'skill-builder__teacher-led': {
    goal: 'Teacher runs Skill Builder practice independently; you confirm it\'s targeted rather than a generic assignment.',
    priorities: [
      'Notice whether the teacher can name the specific goal behind today\'s pick',
      'Observe whether grouping format matches the goal',
      'Save process feedback for the debrief'
    ],
    coachMoves: [
      'Ask briefly about the data behind today\'s Skill Builder choice, without taking over',
      'Observe whether the Dashboard is used to monitor progress during the activity',
      'Note whether a next spaced-practice opportunity is already planned'
    ],
    lookFors: [
      'Teacher references specific data (CFU results, prerequisite gaps) when explaining the choice',
      'Grouping format (small group / whole class / differentiated / station rotation) matches the actual need',
      'A next reassignment or check-in is already on the calendar'
    ],
    challenges: [
      'Skill Builder chosen without a clear rationale',
      'Same grouping format used regardless of the actual goal',
      'No spaced follow-up planned'
    ],
    whatIfs: [
      { if: 'the teacher can\'t articulate why this Skill Builder was chosen today', then: 'flag it for the debrief rather than interrupting the lesson' },
      { if: 'grouping clearly doesn\'t match the need', then: 'note it for the debrief as a concrete next-visit conversation' }
    ],
    successIndicators: [
      'Clear data-to-practice connection, explained by the teacher',
      'Grouping format matched the actual goal',
      'A spaced follow-up is already planned'
    ]
  }
};
