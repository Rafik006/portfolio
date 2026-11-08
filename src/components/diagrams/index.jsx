import React from "react";
import "./diagrams.css";

/** Arrowhead markers shared by every diagram. Rendered once, near the diagrams. */
export function DgDefs() {
  return (
    <svg className="dg-defs" aria-hidden="true" focusable="false">
      <defs>
        <marker id="dg-arrowhead" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" className="dg-head" />
        </marker>
        <marker id="dg-arrowhead-accent" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" className="dg-head-accent" />
        </marker>
        <marker id="dg-arrowhead-dead" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" className="dg-head-dead" />
        </marker>
      </defs>
    </svg>
  );
}

const Svg = ({ id, title, children }) => (
  <svg className="dg" viewBox="0 0 640 220" role="img" aria-labelledby={`${id}-t`}>
    <title id={`${id}-t`}>{title}</title>
    {children}
  </svg>
);

const Box = ({ x, y, w, h, label, lines = [], accent = false, muted = false }) => (
  <g>
    <rect className={accent ? "dg-box-accent" : muted ? "dg-box-muted" : "dg-box"} x={x} y={y} width={w} height={h} rx="8" />
    <text className="dg-label" x={x + w / 2} y={y + (lines.length ? 22 : h / 2 + 4)} textAnchor="middle">{label}</text>
    {lines.map((l, i) => (
      <text key={l} className="dg-small" x={x + w / 2} y={y + 40 + i * 17} textAnchor="middle">{l}</text>
    ))}
  </g>
);

export function Gateway() {
  return (
    <Svg id="gateway" title="Before: a Python adapter on one event loop, about 12 calls, a billed load-balancer rule per UDP port. After: a Go media gateway with goroutines per call, a per-call port pool on host networking and one load-balancer rule.">
      <text className="dg-small" x="20" y="22">before</text>
      <text className="dg-small" x="340" y="22">after</text>
      <Box x={20} y={30} w={290} h={76} label="Python adapter" lines={["one event loop · ~12 calls", "a billed LB rule per UDP port"]} muted />
      <path className="dg-arrow-accent" d="M312 68 H334" />
      <Box x={340} y={30} w={280} h={76} label="Go media gateway" lines={["goroutines per call · ~100 calls / 2 cores", "port pool · host network · 1 LB rule"]} accent />
      <Box x={20} y={128} w={150} h={52} label="Callers" lines={[]} />
      <text className="dg-small" x="95" y="172" textAnchor="middle">WhatsApp · SIP · phone</text>
      <path className="dg-arrow-accent" d="M170 154 H240" />
      <Box x={245} y={128} w={150} h={52} label="Media gateway" lines={[]} accent />
      <text className="dg-small" x="320" y="172" textAnchor="middle">WebRTC · SIP · RTP</text>
      <path className="dg-arrow-accent" d="M395 154 H465" />
      <Box x={470} y={128} w={150} h={52} label="Agent runtime" lines={[]} />
      <text className="dg-small" x="545" y="172" textAnchor="middle">speech-to-speech</text>
      <text className="dg-accent-text" x="320" y="208" textAnchor="middle">SILENT RE-DIALS FIXED: one port per call, 3-min quarantine before reuse</text>
    </Svg>
  );
}

export function Drift() {
  return (
    <Svg id="drift" title="Two runtimes diverging from one codebase, measured, then converged into a new agent runtime with one shared core and a thin runtime per channel.">
      <text className="dg-small" x="20" y="30">one codebase</text>
      <path className="dg-arrow" d="M80 50 L260 100" />
      <path className="dg-arrow" d="M80 50 L260 160" />
      <rect className="dg-box" x="265" y="80" width="130" height="40" rx="8" />
      <text className="dg-label" x="330" y="105" textAnchor="middle">chat agent repo</text>
      <rect className="dg-box" x="265" y="140" width="130" height="40" rx="8" />
      <text className="dg-label" x="330" y="165" textAnchor="middle">voice agent repo</text>

      <path className="dg-arrow-accent" d="M395 100 L470 125" />
      <path className="dg-arrow-accent" d="M395 160 L470 135" />
      <rect className="dg-box-accent" x="475" y="84" width="145" height="92" rx="8" />
      <text className="dg-label" x="547" y="108" textAnchor="middle">New agent runtime</text>
      <text className="dg-small" x="547" y="128" textAnchor="middle">one shared core</text>
      <text className="dg-small" x="547" y="145" textAnchor="middle">chat · voice · jobs</text>
      <text className="dg-small" x="547" y="162" textAnchor="middle">parity tests</text>
      <text className="dg-accent-text" x="620" y="30" textAnchor="end">RELOCATE FIRST, UNIFY LATER</text>
      <text className="dg-small" x="20" y="208">measured: 47 shared files · 35 differ · 12,854 lines · 60 tickets fixed twice</text>
    </Svg>
  );
}

export function McpWrite() {
  return (
    <Svg id="mcpwrite" title="An AI assistant writes configuration through an MCP server that checks the identifier, validates the value, resolves prerequisites and serves a small schema slice before anything reaches the database.">
      <rect className="dg-box" x="20" y="70" width="140" height="60" rx="8" />
      <text className="dg-label" x="90" y="96" textAnchor="middle">AI assistant</text>
      <text className="dg-small" x="90" y="114" textAnchor="middle">“set the opening hours”</text>
      <path className="dg-arrow-accent" d="M160 100 H220" />
      <rect className="dg-box-accent" x="225" y="40" width="230" height="120" rx="8" />
      <text className="dg-label" x="340" y="66" textAnchor="middle">MCP write server</text>
      <text className="dg-small" x="245" y="90">1 · identifier must exist</text>
      <text className="dg-small" x="245" y="108">2 · value validated by field type</text>
      <text className="dg-small" x="245" y="126">3 · prerequisite fields resolved</text>
      <text className="dg-small" x="245" y="144">4 · small slice of schema only</text>
      <path className="dg-arrow-accent" d="M455 100 H515" />
      <rect className="dg-box" x="520" y="70" width="100" height="60" rx="8" />
      <text className="dg-label" x="570" y="96" textAnchor="middle">Config DB</text>
      <text className="dg-small" x="570" y="114" textAnchor="middle">per tenant</text>
      <path className="dg-arrow-dead" d="M340 160 V192 H90 V130" />
      <text className="dg-small" x="200" y="206" textAnchor="middle">rejected → explicit error back to the model, never a guess</text>
    </Svg>
  );
}

export function Guardrails() {
  const layers = [
    ["Data", "field descriptions · templates", 40],
    ["Code", "deterministic rule: 0/7 → 7/7", 92],
    ["Prompt gate", "ask before calling a tool", 144],
    ["Guard", "measured on real answers", 196],
  ];
  return (
    <Svg id="guardrails" title="Each QA-reported bug is traced to a proven cause, fixed at the right layer (data, code, prompt gate or guard) and turned into a replay case.">
      <Box x={16} y={85} w={110} h={50} label="QA bug" lines={[]} />
      <text className="dg-small" x="71" y="126" textAnchor="middle">from its trace</text>
      <path className="dg-arrow-accent" d="M126 110 H142" />
      <Box x={146} y={85} w={110} h={50} label="Proven cause" lines={[]} accent />
      <text className="dg-small" x="201" y="126" textAnchor="middle">9 verdicts</text>
      {layers.map(([label, line, yc]) => (
        <g key={label}>
          <path className="dg-arrow" d={`M256 110 L278 ${yc}`} />
          <rect className="dg-box" x="282" y={yc - 20} width="220" height="40" rx="8" />
          <text className="dg-label" x="294" y={yc - 3}>{label}</text>
          <text className="dg-small" x="294" y={yc + 13}>{line}</text>
          <path className="dg-arrow-accent" d={`M502 ${yc} L520 110`} />
        </g>
      ))}
      <rect className="dg-box-accent" x="524" y="70" width="100" height="80" rx="8" />
      <text className="dg-label" x="574" y="98" textAnchor="middle">Replay case</text>
      <text className="dg-small" x="574" y="116" textAnchor="middle">219-case suite</text>
      <text className="dg-small" x="574" y="133" textAnchor="middle">every release</text>
    </Svg>
  );
}

export function BugLoop() {
  const steps = [
    ["Ticket", "scope"],
    ["Trace", "exact turns"],
    ["Root cause", "proven"],
    ["Fix", "smallest"],
    ["Replay", "affected cases"],
    ["Evidence", "per criterion"],
  ];
  return (
    <Svg id="bugloop" title="One routine for every bug: ticket, trace, proven root cause, smallest fix, replay, evidence. A rebuilt tracer cut one query from 21 seconds to 2.">
      {steps.map(([label, line], i) => {
        const x = 16 + i * 105;
        return (
          <g key={label}>
            <rect className={i === 2 ? "dg-box-accent" : "dg-box"} x={x} y="40" width="92" height="56" rx="8" />
            <text className="dg-label" x={x + 46} y="64" textAnchor="middle">{label}</text>
            <text className="dg-small" x={x + 46} y="82" textAnchor="middle">{line}</text>
            {i < steps.length - 1 && <path className="dg-arrow-accent" d={`M${x + 92} 68 H${x + 101}`} />}
          </g>
        );
      })}
      <text className="dg-small" x="16" y="136">conversation tracer, one query</text>
      <rect className="dg-bar" x="16" y="144" width="420" height="10" />
      <text className="dg-small" x="444" y="153">21 s before</text>
      <rect className="dg-bar-accent" x="16" y="164" width="40" height="10" />
      <text className="dg-accent-text" x="64" y="173">2 s after · bounded queries, collapse ranking, read-ahead fix</text>
      <text className="dg-small" x="320" y="206" textAnchor="middle">one routine for every ticket · a reported cause is a hypothesis</text>
    </Svg>
  );
}

export function DialogFanout() {
  const top = [
    ["Config schema", "JSON + defaults", 30],
    ["Console form", "generic renderer", 250],
    ["Bot logic", "dialog flow", 470],
  ];
  const bottom = [
    ["AI summaries", "what the agent reads", 30],
    ["36+ languages", "ICU templates", 250],
    ["Fleet migration", "dry run first", 470],
  ];
  return (
    <Svg id="dialogfanout" title="One new or remixed dialog fans out to the configuration schema, the console form, the bot logic, the AI summaries, translations in 36+ languages and a fleet migration.">
      {top.map(([label, line, x]) => (
        <g key={label}>
          <Box x={x} y={16} w={140} h={48} label={label} lines={[]} />
          <text className="dg-small" x={x + 70} y="56" textAnchor="middle">{line}</text>
          <path className="dg-arrow-accent" d={`M320 92 L${x + 70} 68`} />
        </g>
      ))}
      <rect className="dg-box-accent" x="250" y="92" width="140" height="44" rx="8" />
      <text className="dg-label" x="320" y="112" textAnchor="middle">One dialog</text>
      <text className="dg-small" x="320" y="128" textAnchor="middle">new or remixed</text>
      {bottom.map(([label, line, x]) => (
        <g key={label}>
          <path className="dg-arrow-accent" d={`M320 136 L${x + 70} 160`} />
          <Box x={x} y={164} w={140} h={44} label={label} lines={[]} />
          <text className="dg-small" x={x + 70} y="202" textAnchor="middle">{line}</text>
        </g>
      ))}
    </Svg>
  );
}

export const diagrams = { Gateway, Drift, McpWrite, Guardrails, BugLoop, DialogFanout };
