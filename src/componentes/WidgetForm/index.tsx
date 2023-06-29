import { useState } from "react";

import bugImageURL from "../../assets/bug.svg";
import ideiaImageURL from "../../assets/ideia.svg";
import outroImageURL from "../../assets/outro.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageURL,
      alt: "Imagem de um problema",
    },
  },
  IDEIA: {
    title: "Ideia",
    image: {
      source: ideiaImageURL,
      alt: "Imagem de uma lampada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: outroImageURL,
      alt: "Imagem de um balão de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setfeedbackType] = useState<FeedbackType | null>(null);

  function handleRestartFeedback() {
    setfeedbackType(null);
  }

  return (
    <div
      className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col 
      items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto"
    >
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setfeedbackType} />
      ) : (
        <FeedbackContentStep
          feedbackType={feedbackType}
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      )}
    </div>
  );
}
