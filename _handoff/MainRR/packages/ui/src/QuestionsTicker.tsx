import * as React from "react";
import type { PersonaQuestion } from "./Desk";

/**
 * The hub-mode context rail: "QUESTIONS WE ANSWER /" leader
 * followed by a rotating four-persona query track.
 * Track is duplicated for seamless 80s-linear-infinite scroll.
 */
export function QuestionsTicker({ questions }: { questions: PersonaQuestion[] }) {
  const doubled = [...questions, ...questions];
  return (
    <div className="rr-context">
      <span className="leader">QUESTIONS WE ANSWER /</span>
      <div className="rr-query-track">
        {doubled.map((q, i) => (
          <span key={i}>
            <em>{q.persona} →</em>
            <b>{q.question}</b>
          </span>
        ))}
      </div>
    </div>
  );
}
