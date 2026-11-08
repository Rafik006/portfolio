// Six anonymised production stories. Same structure each time: the problem, what I did, the result,
// the lesson. No employer, product, customer or host names.
export const sectionTitles = {
  problem: "The problem",
  approach: "What I did",
  outcome: "Result",
  lesson: "The lesson",
};

export const stories = [
  {
    id: "gateway",
    pillar: "voice",
    minutes: 4,
    title: "From a 12-call ceiling to hundreds of calls, on one port rule instead of dozens",
    summary:
      "The first WhatsApp-calls bridge topped out at about 12 calls and needed a billed load-balancer rule for every UDP port. I rebuilt the media plane in Go and changed how it reaches the network.",
    result: "~12 → hundreds of calls · dozens of port rules → 1",
    diagram: "Gateway",
    problem: [
      "The first bridge between WhatsApp calls and the AI agent was a Python adapter on a single event loop. It encoded and decoded every call's audio in one process and fell over at about 12 concurrent calls.",
      "Its media went through a cloud load balancer, where every exposed UDP port is a separately billed rule. The old design exposed dozens; the budget for the new service was a handful.",
      "Sharing a few ports was not an option either: the carrier's relay always answers from the same port and keeps each address pair bound to the previous call for minutes. Quick re-dials went silent — a packet capture showed 8 STUN checks out and none back.",
    ],
    approach: [
      "Rewrote the media plane in Go on Pion WebRTC: one set of goroutines per call, one leg interface shared by WhatsApp, SIP and plain phone (RTP) calls.",
      "Took media off the load balancer: pods on host networking, on nodes with their own public IP, so ports pass through 1:1 with no address translation.",
      "One UDP port per call from a pool of 200, with a 3-minute quarantine before reuse, opened by a single firewall rule.",
      "Public address discovered by STUN at start-up; SIP accepted only from the carrier's address ranges.",
      "Built a synthetic call generator before the second feature (80 concurrent calls on a laptop) and measured instead of guessing.",
    ],
    outcome: [
      "Capacity knee measured at about 100 calls on 2 cores; production sized at hundreds of calls per instance, with headroom.",
      "Load-balancer rules for the whole service: dozens → 1, for SIP signalling only.",
      "Back-to-back re-dials connect every time.",
    ],
    lesson: "Capacity and cost are design inputs. Measure the knee, and let the network's behaviour decide the port model.",
    stack: ["Go", "Pion WebRTC", "SIP", "RTP / Opus", "STUN", "Kubernetes"],
  },
  {
    id: "runtime",
    pillar: "agents",
    minutes: 3,
    title: "Two copies of the same agent: from duplicated chat and voice projects to one agent runtime",
    summary:
      "The chat agent and the voice agent had forked into two repositories, and every fix landed twice. I measured the drift, won the architecture decision and built the shared runtime.",
    result: "12,854 lines of drift → one shared core",
    diagram: "Drift",
    problem: [
      "The chat agent and the voice agent started as one codebase and ended up as two repositories.",
      "Every fix had to land twice, or landed once and quietly became a bug in the other channel.",
      "The proposal on the table was to publish the shared code as a versioned package.",
    ],
    approach: [
      "Measured the drift with a script instead of debating it: 47 shared files, 35 of them different, 12,854 changed lines, 60 tickets fixed twice.",
      "Showed that a package would freeze that drift into a version matrix, and proposed a monorepo instead: one shared core, one thin runtime per channel (chat, voice, background jobs). The team chose it.",
      "Captured golden fixtures of each runtime's prompts and tool declarations before moving a line, with a byte-for-byte parity test.",
      "Moved 546 files in one reproducible import under one rule: relocate first, unify later.",
    ],
    outcome: [
      "A fix to the agent now ships to chat and voice in one change.",
      "Test suites grew about four times in seven weeks, because they finally had one home.",
      "The new runtime serves production; I carry the largest share of its commits.",
    ],
    lesson: "When an architecture debate stalls, measure the thing it is supposed to fix. The numbers end the meeting.",
    stack: ["Python", "FastAPI", "uv workspace", "pytest", "Golden fixtures"],
  },
  {
    id: "mcp",
    pillar: "agents",
    minutes: 3,
    title: "Giving an AI assistant write access to configuration, safely (MCP)",
    summary:
      "An assistant should edit tenant configuration from a conversation. Exposing the update endpoint as a tool was not enough, so I built a write path the model cannot get wrong silently.",
    result: "4 gates in front of every write",
    diagram: "McpWrite",
    problem: [
      "Each tenant's configuration is a deeply nested document with hundreds of fields, edited through forms.",
      "The goal: let an AI assistant make those edits from a conversation, through a Model Context Protocol server.",
      "First tries showed three failures: the model invented identifiers, ignored dependencies between fields, and the full schema cost more tokens than the edit itself.",
    ],
    approach: [
      "Read tools first: map a request to the right configuration section; access checked per subscription.",
      "A write path with four gates: the identifier must exist; the value is validated by field type (lists, add-ons, multilingual text); prerequisite fields are resolved from a dependency map; discovery returns only the slice of schema that matters.",
      "One validation endpoint shared by the console forms and the assistant.",
      "Configuration changes notify the search layer, so the agent's answers update.",
    ],
    outcome: [
      "Wrong writes come back to the model as explicit errors, never as silent guesses.",
      "People and the assistant are validated by the same rules: one source of truth for what a valid write is.",
      "Schema discovery costs a fraction of the tokens of loading everything.",
    ],
    lesson: "An LLM with write access is a user that types fast and never reads the manual. Put the manual in the API.",
    stack: ["TypeScript", "NestJS", "MongoDB", "Model Context Protocol", "Redis"],
  },
  {
    id: "hallucinations",
    pillar: "agents",
    minutes: 4,
    title: "Hundreds of QA-reported agent bugs, one proven cause each: how I treat LLM hallucinations",
    summary:
      "QA reports the agent's mistakes in batches of hundreds. Instead of tweaking prompts, every bug gets a proven cause, a fix at the right layer and a replay case that keeps it fixed.",
    result: "300+ bugs closed · 219-case replay suite",
    diagram: "Guardrails",
    problem: [
      "QA logs the agent's mistakes in sweeps of a few hundred conversations at a time.",
      "Many look like hallucinations: an invented option, a wrong price or date, a promise the agent cannot keep.",
      "Prompt tweaks fixed one case and broke another, and nobody could say which change caused what.",
    ],
    approach: [
      "A sweep pipeline: fetch each conversation's trace, match the reported turn, prove the cause in the code or the data, and group bugs by mechanism (a 9-verdict taxonomy, including not-a-bug).",
      "Missing or vague data → fix the data: per-field descriptions, templates and date formats the model reads.",
      "Rules that must always hold → code: a date rule was followed 0 times out of 7 as a prompt instruction, 7 out of 7 as eight lines of code.",
      "Tools that tempted the model to invent parameters → ask-first rules in the prompt, with the server-side check kept as a backstop.",
      "New guards measured on real production answers before release: one proposed guard flagged 2.3% of answers, most of them correct, so I recommended running it log-only first.",
      "Every fixed bug becomes a replay case.",
    ],
    outcome: [
      "300+ bugs closed with a proven cause; one month's 219 fixes came down to 35 fix families.",
      "A 219-case regression suite (199 deterministic checks, 20 judged by an LLM) runs before each release.",
      "Sweep tooling cut the work from about 198k to 148k tokens, with the same verdicts.",
    ],
    lesson: "Judgment stays in the prompt, certainty moves to code, and every fix earns a test that replays it.",
    stack: ["Python", "Gemini", "Elasticsearch", "pytest", "LLM-as-judge"],
  },
  {
    id: "daily",
    pillar: "platform",
    minutes: 3,
    title: "Daily production bugs: one routine from ticket to proven root cause",
    summary:
      "About 22 tickets a month for two and a half years, a quarter of them hotfixes. The same routine every time: reproduce from the trace, prove the cause, ship the smallest fix, show the evidence.",
    result: "665 tickets · 97% closed",
    diagram: "BugLoop",
    problem: [
      "Production bugs arrive every day, across chat, voice, configuration and integrations.",
      "A report carries a symptom and often a guessed cause; fixing the guess sends everyone in the wrong direction.",
      "The conversation tracer we debugged with took 21 seconds per query and slowed the cluster it shared.",
    ],
    approach: [
      "Same routine on every ticket: restate the scope, one branch per repository, reproduce from the trace before touching code.",
      "Trace-driven debugging: the exact turns and tool calls of the conversation, compared with the code deployed that day.",
      "Smallest fix that removes the cause; no special cases in shared code; replay only the affected cases.",
      "Evidence for every acceptance criterion before handing over. When a report was wrong, I showed why: one voice “failure” was the tester's speech-to-text translating the audio.",
      "A P0 arrived with its cause written in: 48 hours of production turns and a Fisher test pointed at a deploy, a control run disproved my own first explanation, and a one-line fix shipped the same day.",
      "Rebuilt the tracer's queries: bounded ranges, collapse ranking, and a storage read-ahead fix for cold reads.",
    ],
    outcome: [
      "665 tickets handled, 97% closed, 163 of them hotfixes.",
      "Tracer: 21 s → 2 s per page load, cold reads 9 s → 1.3 s, no more errors.",
    ],
    lesson: "A ticket's stated cause is a hypothesis. Measuring it costs an hour; fixing the wrong thing costs a week.",
    stack: ["Python", "TypeScript", "Elasticsearch", "Kubernetes", "Datadog", "Sentry"],
  },
  {
    id: "dialogs",
    pillar: "platform",
    minutes: 3,
    title: "One dialog, seven repositories, 36 languages: building and remixing complex dialogs",
    summary:
      "A dialog is one topic the assistant can handle. Creating or remixing one is never a single file: it runs through the schema, the forms, the bot, the AI summaries, translations and a fleet migration.",
    result: "~50 dialogs · up to 7 repos per change",
    diagram: "DialogFanout",
    problem: [
      "Each dialog (opening hours, parking, menus, prices…) is configured per tenant and read by both the classic bot and the AI agent.",
      "A new or remixed dialog touches the configuration schema and defaults, the console form, the bot logic, the summaries the AI reads, FAQ snippets and translations in 36+ languages.",
      "Every existing tenant needs its data migrated, and a mistake reaches thousands of them at once.",
    ],
    approach: [
      "Built and remixed about 50 dialogs, each across up to seven repositories under one ticket.",
      "A remix framework with new form components (select lists, dynamic lists), so the generic console renders new shapes without custom code.",
      "Every remix ships with a migration: dry run with counts per tenant, then the write, then a verification query; AI summaries regenerated fleet-wide.",
      "Found that the pipeline never ran migrations on deploy, and added a release gate that fails when any are pending.",
      "Wrote the workflow down as a reusable skill, so every dialog is built the same way.",
    ],
    outcome: [
      "Fleet sweeps over thousands of tenants with zero failures.",
      "Up to 2,965 strings in 41 locales in a single remix.",
      "No more silent gaps between code and data after a release.",
    ],
    lesson: "A feature is everything it touches. List the touch points before the first line, and make the pipeline fail when one is missing.",
    stack: ["TypeScript", "NestJS", "MongoDB", "Next.js", "Bot Framework", "Laravel", "i18n / ICU"],
  },
];

export const pillarLabel = { agents: "AI agents", voice: "Voice", platform: "Platform" };
