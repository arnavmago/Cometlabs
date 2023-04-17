// import { Typography } from '@mui/material';
import React from 'react';
import Problems, { Problem } from './ProblemsPage';
import style from "@/styles/typography-styles.module.css";


interface framework {
  problem: Problem[];
  question: string;
}


function Questions({ problem }: framework) {
  return (
    <div>
      {problem.length > 0 ? (
        problem.map((question) => {
          return (
            <Problems key={question.id} {...question} />
          )
        })
      ) : (
        // <Typography sx={{ mt: 2 }} variant="LabelLarge">
        <p className={style.LabelLarge}>
          No Questions found
          {/* </Typography> */}
        </p>
      )}
    </div>
  )
}

export default Questions