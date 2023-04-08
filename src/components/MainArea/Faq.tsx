import * as React from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { Grid, Typography } from "@mui/material";
import ShowcaseBig from "../Carousels/ShowcaseBig";

type FAQ = {
  question: string;
  answer: string;
};

// The according for single question and it's answer
function FaqAccordian({ question, answer }: FAQ) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<HiOutlineChevronDown />}>
        <Typography variant="LabelLarge">
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="LabelLarge" color="textSecondary">
          {answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}


// The showcase component for all FAQ's which should be converted to Grid System.
const FaqComponent = () => {
  return (
    <ShowcaseBig
      title="Frequently Asked Questions">
      {FAQs.map((faq, i) => (
        <Grid container sx={{ width: "300px" }} key={"pg-" + i}>
          <Grid item>
            <FaqAccordian question={faq.question} answer={faq.answer} />
          </Grid>
        </Grid>
      ))}
    </ShowcaseBig>
  );
}


// dummy FAQ question answer


export default FaqComponent;

const FAQs = [
  {
    question: "How do I get a job as a React.js developer?",
    answer:
      "As a React.js developer, you need to learn JavaScript, React Plus, GIT, HTML, and JSX, which are the core technologies required for the React.js developer jobs. Along with that, upskill yourself for debugging techniques, analytical thinking, Node + NPM and Redux. Use resume guides to gain more information on the skills which can help you get jobs in the same field.",
  },
  {
    question: "How much do React.js developers make?",
    answer:
      "The salary of a React.js developer will depend on a number of factors such as experience, seniority, skill-set, location, etc. On an average a React.js developer with 3 years of experience can expect a compensation between $10,000 and $50,000 per annum. If you are a developer looking to work, apply for jobs and work from the comfort of your home",
  },
  {
    question: "How much do React.js developers make?",
    answer:
      "The salary of a React.js developer will depend on a number of factors such as experience, seniority, skill-set, location, etc. On an average a React.js developer with 3 years of experience can expect a compensation between $10,000 and $50,000 per annum. If you are a developer looking to work, apply for jobs and work from the comfort of your home",
  },
  {
    question: "How much do React.js developers make?",
    answer:
      "The salary of a React.js developer will depend on a number of factors such as experience, seniority, skill-set, location, etc. On an average a React.js developer with 3 years of experience can expect a compensation between $10,000 and $50,000 per annum. If you are a developer looking to work, apply for jobs and work from the comfort of your home",
  },
  {
    question: "How much do React.js developers make?",
    answer:
      "The salary of a React.js developer will depend on a number of factors such as experience, seniority, skill-set, location, etc. On an average a React.js developer with 3 years of experience can expect a compensation between $10,000 and $50,000 per annum. If you are a developer looking to work, apply for jobs and work from the comfort of your home",
  },
];


