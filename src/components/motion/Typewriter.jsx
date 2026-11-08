import React, { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/** Types each word, holds, deletes, moves to the next. Static first word under reduced motion. */
export default function Typewriter({ words, typeMs = 55, deleteMs = 28, holdMs = 1700, className }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(reduce ? words[0] : "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) return undefined;
    const word = words[index % words.length];
    let timer;
    if (!deleting && text === word) timer = setTimeout(() => setDeleting(true), holdMs);
    else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timer = setTimeout(() => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)), deleting ? deleteMs : typeMs);
    }
    return () => clearTimeout(timer);
  }, [text, deleting, index, words, typeMs, deleteMs, holdMs, reduce]);

  return (
    <span className={className} aria-live="polite" aria-atomic="true">
      {text}
      <span className="caret" aria-hidden="true" />
    </span>
  );
}
