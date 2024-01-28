// @ts-check
// @ts-ignore
import { usePlayer } from "@empirica/core/player/classic/react";
import React, { useState } from "react";
import { Questions } from "../components/Questions";

const emptyOptions = {
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
};

const defaultOptions = {
  ...emptyOptions,
  1: "Not at all",
  4: "Moderately",
  7: "Very Much",
};

const greatDealOptions = {
  ...defaultOptions,
  7: "A great deal",
};

const questions = [
  {
    question:
      "I find interactions with my counterpart to be highly predictable.",
    name: "predict-q1",
    options: defaultOptions,
  },
  {
    question:
      "My counterpart consistently responds in a way that meets my expectations.",
    name: "predict-q2",
    options: defaultOptions,
  },
  {
    question: "My experiences with my counterpart have been uniform and predictable.",
    name: "predict-q3",
    options: defaultOptions,
  },
  {
    question:
      "I feel that my counterpart treats all individuals impartially, without judgment.",
    name: "judg-q1",
    options: defaultOptions,
  },
  {
    question:
      "A significant portion of my self-worth is at stake in my interactions with my counterpart.",
    name: "judg-q2",
    options: defaultOptions,
  },
  {
    question:
      "I feel like I am being evaluated by my counterpart during our negotiations.",
    name: "judg-q3",
    options: defaultOptions,
  },
  {
    question:
      "My counterpart ensures unbiased and fair outcomes in our interactions.",
    name: "nonbiased-q1",
    options: defaultOptions,
  },
  {
    question:
      "I believe the outcome of my interaction with my counterpart was based on objective and unbiased criteria.",
    name: "nonbiased-q2",
    options: defaultOptions,
  },
  {
    question: "The decisions made by my counterpart reflect a fair process.",
    name: "nonbiased-q3",
    options: defaultOptions,
  },
  {
    question:
      "My counterpart was polite during the negotiation?",
    name: "polite-q1",
    options: defaultOptions,
  },
  {
    question:
      "My counterpart was very fluent during the negotiation.",
    name: "fluency-q1",
    options: defaultOptions,
  },
  {
    question:
      "My counterpart was very articulate during the negotiation.",
    name: "fluency-q2",
    options: defaultOptions,
  }
];

export function MediatorSurvey({ next }) {
  const [currentPage, setCurrentPage] = useState(0);

  // Function to update the current page from the Questions component
  const handleUpdateCurrentPage = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <div className="mx-auto mt-3 w-full max-w-screen-md p-20 sm:mt-5">
      <h3 className="text-lg font-medium leading-6 text-gray-900">
        Negotiation Experience (page {currentPage + 1} of 4)
      </h3>
      <p className="mt-2 text-gray-500">
        These questions are about your thoughts toward your negotiation counterpart. For
        each question, please select a number from 1-7 that most accurately
        reflects your opinion. 
      </p>

      <div className="mt-12">
        <Questions
          playerKey="mediatorSurvey"
          questions={questions}
          onDone={next}
          onUpdateCurrentGroup={handleUpdateCurrentPage} // Add this prop
          withLabelKey
          groupSize={3}
        />
      </div>
    </div>
  );
}
