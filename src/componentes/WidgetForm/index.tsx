import { useState } from "react";

import { CloseButton } from "../CloseButton";

import bugImageURL from "../../assets/bug.svg";
import ideiaImageURL from "../../assets/ideia.svg";
import outroImageURL from "../../assets/outro.svg";

const feedbackTypes = {
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

type feedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setfeedbackType] = useState<feedbackType | null>(null);

  return (
    <div
      className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col 
      items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto"
    >
      <header>
        <span className="text-xl leading-6 ">Deixe seu Feedback</span>

        <CloseButton />
      </header>

      {!feedbackType ? (
        <div className="flex py-8 gap-2 w-full">
          {Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button
                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 
              border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                key={key}
                onClick={() => setfeedbackType(key as feedbackType)}
              >
                <img src={value.image.source} alt={value.image.alt} />
                <span>{value.title}</span>
              </button>
            );
          })}
        </div>
      ) : (
        <p>Hello Word!</p>
      )}
    </div>
  );
}
