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
//
// Field roles, kept distinct on purpose (avoid repeating the same idea in
// two fields):
//   - Priorities        = mental orientation / decision filters, not actions
//   - Coach Moves        = concrete, specific actions
//   - Look Fors          = observable signals to watch for as the visit unfolds
//   - Success Indicators = end-of-visit outcomes (independence/understanding),
//                          not a restatement of Look Fors
// ─────────────────────────────────────────────────────────────────────────

// ─── Step 1 options: coaching day types ────────────────────────────────
// `hasModel: false` means this day type doesn't have a Co-Teaching /
// Teacher-Led distinction in real practice — step 2 is skipped entirely and
// the field guide is looked up directly by day type (see FIELD_GUIDE below).
var DAY_TYPES = [
  { id: 'tutorial', label: 'Tutorial Day', hint: "Students' first time in VR", hasModel: false },
  { id: 'content-module', label: 'Content Module Day', hint: 'A VR Content Module lesson', hasModel: true },
  { id: 'transfer-assessment', label: 'Transfer / Assessment Day', hint: 'Transfer day activities, CFUs, revisions', hasModel: true },
  { id: 'skill-builder', label: 'Skill Builder Day', hint: 'Spaced retrieval practice', hasModel: true }
];

// ─── Step 2 options: coaching model ────────────────────────────────────
// Maps to the Coaching to Independence guide's Round 1 / Round 2 framing.
// Only shown for day types with `hasModel: true` above.
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

// ─── Coach at a Glance content ──────────────────────────────────────────
// Keyed "<dayType>__<model>" for day types with hasModel: true, or just
// "<dayType>" (no model suffix) for day types with hasModel: false — e.g.
// 'tutorial' below has no '__co-teaching' / '__teacher-led' split because
// Tutorial Day is always coach-modeled in practice, not teacher-led.
// whatIfs entries are { if: 'scenario', then: 'response' } pairs.
var FIELD_GUIDE = {

  'content-module__co-teaching': {
    goal: 'Co-facilitate Just-in-Time Feedback and post-VR writing, discourse, and synthesis routines to establish what high-quality implementation looks like.',
    priorities: [
      'You\'re establishing the model the teacher will run solo next time — narrate your reasoning, not just your actions',
      'Match the feedback level to the need; don\'t default to individual conferencing',
      'Writing always comes before discussion, no exceptions'
    ],
    coachMoves: [
      'Co-facilitate feedback in order: hints/peer support first, then individual conferencing (screencast, Teacher Talk Track, Socratic questions), then small/whole-group conferencing if a misconception is shared',
      'Provide the Synthesis Activity before VR ends and monitor the Dashboard to confirm students reach the Critical Task',
      'Coach student writing side by side with the teacher — press for a claim, ask for evidence, prompt for reasoning',
      'Select 2-3 representative student responses and use discussion prompts ("Do you agree or disagree? Why?") to facilitate discourse together'
    ],
    lookFors: [
      'Teacher Dashboard open and monitored throughout VR',
      'Hints and peer support tried before individual conferencing',
      'Students write independently before any discussion begins'
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
      'Teacher can describe, unprompted, when to use hints/peer support vs. individual vs. group conferencing',
      'A full write-before-discuss cycle happened without you prompting it',
      'Teacher connected student thinking back to the lesson objective during consolidation'
    ]
  },

  'content-module__teacher-led': {
    goal: 'Teacher leads Just-in-Time Feedback and post-VR writing, discourse, and synthesis; you direct only when needed and build their confidence toward independence.',
    priorities: [
      'Default to watching, not doing — independence is today\'s goal, not efficiency',
      'Reserve whisper-coaching for moments that would otherwise go unaddressed',
      'Specific evidence beats general impressions — collect it for the debrief as you go'
    ],
    coachMoves: [
      'Observe which Just-in-Time Feedback level the teacher reaches for and whether it matches what\'s actually happening',
      'Step in only if a shared misconception goes unaddressed, or writing time is about to be skipped',
      'Whisper-coach sparingly — a quiet prompt, not a takeover'
    ],
    lookFors: [
      'Teacher tries hints/peer support before jumping to individual conferencing',
      'Synthesis Activity assigned before VR time runs out',
      'Discussion prompts press for reasoning, not just answers'
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
      'Teacher matched the right feedback level to the situation without a prompt from you',
      'Writing preceded discussion without your intervention',
      'You leave with specific, nameable evidence for the debrief'
    ]
  },

  // Tutorial Day is always coach-modeled in practice — no Co-Teaching /
  // Teacher-Led split. Key is the bare day type id, no model suffix.
  'tutorial': {
    goal: 'Model hardware routines and set up 2-3 student tech helpers so the class can run its own tech logistics going forward.',
    priorities: [
      'This is modeling, not evaluation — the goal is establishing the routine, not testing the teacher',
      'Everything happens before headsets go on — sequence matters more than speed today',
      'Tech helpers are the long-term fix — invest the time even if it\'s slower right now'
    ],
    coachMoves: [
      'Prepare equipment together: headsets powered off before charging, controllers matched to their headset',
      'Choose and model a distribution method — pre-placed, grab-and-go, or tech helpers',
      'Walk through headset setup as a group: strap fit, play boundary, and the VR Norms (Explore, Persist)',
      'Identify and train 2-3 tech helpers on the 5 primary troubleshooting issues'
    ],
    lookFors: [
      'All instructions given before any headset goes on',
      'Auto Launch used from the Teacher Dashboard where possible',
      'Tech helpers actively distributing/collecting, not just watching'
    ],
    challenges: [
      'No tech helpers identified yet, so the teacher is doing all the logistics solo',
      'Headset distribution or login eating most of the period',
      'Students unsure of VR Norms language (Explore / Persist) since it\'s their first exposure'
    ],
    whatIfs: [
      { if: 'a student is hesitant to put the headset on', then: 'make the Frame conversation engaging, remind them breaks are OK, and offer a timer if it helps' },
      { if: 'distribution is taking too long', then: 'pre-set headsets on desks before class next time, or lean more on tech helpers' }
    ],
    successIndicators: [
      '2-3 tech helpers can independently handle the 5 primary troubleshooting issues',
      'Teacher can run Auto Launch from the Dashboard without help',
      'The hardware routine start-to-finish took noticeably less time than when the visit began'
    ]
  },

  'transfer-assessment__co-teaching': {
    goal: 'Co-facilitate the CFU and revision routine to establish what a real revision cycle looks like.',
    priorities: [
      'The revision pathway should match the actual error — there\'s no default pathway',
      'Revision means retaking the CFU, not just reviewing the answer',
      'You\'re modeling the diagnostic questions the teacher will ask solo next time'
    ],
    coachMoves: [
      'Co-review AI feedback with the teacher and sort responses into Ready to move on / Nearly there / Needs review',
      'Model selecting the right revision pathway: procedural (redo on paper, Skill Builder if it\'s a prerequisite gap), conceptual (conference briefly, revisit the Synthesis Activity), or written communication (sentence frame in Writing Guidance)',
      'Ask the pathway-specific diagnostic questions together — "What is the question asking?" or "What evidence supports your thinking?"',
      'Confirm students can explain what changed before retaking the CFU'
    ],
    lookFors: [
      'Revision pathway matches the actual type of error',
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
      'Teacher can independently match error type to revision pathway',
      'Students could explain what changed in their own thinking',
      'A full revision-and-retake cycle happened without you leading it'
    ]
  },

  'transfer-assessment__teacher-led': {
    goal: 'Teacher runs the CFU and revision cycle independently; you confirm the revision pathway actually matches the error.',
    priorities: [
      'Watch for pathway-matching, not just whether revision happens at all',
      'A resubmission isn\'t the same as a revision — look for real change in thinking',
      'Hold specific feedback for the debrief rather than correcting live'
    ],
    coachMoves: [
      'Observe how the teacher sorts AI feedback results and assigns revision pathways',
      'Whisper-coach only if revision time is about to be cut entirely',
      'Note which diagnostic questions got used, or didn\'t, for the debrief'
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
      'A Skill Builder should always trace back to a specific data point — never a default pick',
      'Grouping format should match the goal, not habit',
      'You\'re modeling the selection process, not just running the activity'
    ],
    coachMoves: [
      'Co-identify the learning goal and select the matching Skill Builder and 3-5 targeted questions together',
      'Model auto-launching students from the Teacher Dashboard to the selected problem type',
      'Circulate together, using the Dashboard to spot misconceptions in real time',
      'Model the paper-based Synthesis Activity or Practice Activity to extend the learning afterward'
    ],
    lookFors: [
      'The Skill Builder and questions chosen clearly match a specific goal',
      'Grouping format matches the goal (small group for reteaching, whole class for shared practice, etc.)',
      'Dashboard actively monitored throughout the activity, not just at the start'
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
      'Teacher can articulate the specific data point behind the choice',
      'Grouping format matched the goal without you needing to suggest it',
      'A next spaced-practice opportunity is already planned'
    ]
  },
  'skill-builder__teacher-led': {
    goal: 'Teacher runs Skill Builder practice independently; you confirm it\'s targeted rather than a generic assignment.',
    priorities: [
      'Listen for whether the teacher can name the specific goal, not just the skill',
      'A missing spaced follow-up is a bigger flag than an imperfect grouping choice',
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
      'Clear data-to-practice connection, explained by the teacher unprompted',
      'Grouping format matched the actual goal',
      'A spaced follow-up is already planned'
    ]
  }
};
