// import * as React from "react";
// import ReactMarkdown from "react-markdown";
// import style from "@/styles/markdown-styles.module.css";
// import { Box, Grid, Skeleton, TextField, Typography } from "@mui/material";
// import QuestionForm from "./QuestionForm";
// import { SandpackFiles, SandpackPredefinedTemplate } from "@codesandbox/sandpack-react";
// import dynamic from "next/dynamic";
// import { Controller, useFormContext } from "react-hook-form";
// import "react-markdown-editor-lite/lib/index.css";
// import { Tag } from "../event/TagsReadOnly";
// import { FilledButton } from "@/styles/theme";

// const Editor = dynamic(() => import("react-markdown-editor-lite"), {
//   loading: () => <Skeleton height={350} width={"100%"} />,
// });

// export type Problem = {
//   id: string;
//   name: string;
//   Tags: [],
//   frameworks: SandpackPredefinedTemplate;
//   singleLiner: string;
//   // dependencies: Record<string, string>;
//   files: SandpackFiles
//   Markdown: string;
// };
// interface Problems {
//   problem: Problem;
//   readOnly?: boolean;
//   framework: SandpackPredefinedTemplate;
//   files: SandpackFiles;
// }


// export type ProblemsProps = {
//   questions: Problem[];
// };



// export default function Problems({ problem, readOnly, framework, files }: Problems) {
//   problem.files = files;


//   const EditProblem = () => {
//     const { watch } = useFormContext()
//     const pro: Problem = watch("");

//     return (
//       <>
//         <Box sx={{ mb: 2 }}>
//           <Controller
//             name="name"
//             defaultValue={pro.name || ""}
//             rules={{
//               required: `Please provide a problem name`,
//             }}
//             render={({ field: { ref, ...field }, fieldState: { error } }) => (
//               <TextField
//                 fullWidth
//                 variant="standard"
//                 InputProps={{ sx: { fontSize: "1.2rem", fontWeight: 400 } }}
//                 placeholder={`Enter Problem name`}
//                 error={!!error}
//                 helperText={error ? error.message : null}
//                 {...field}
//               />
//             )}
//           />
//         </Box>
//         <Box sx={{ mb: 2 }}>
//           <Controller
//             name="Tags"
//             defaultValue={framework || ""}
//             rules={{
//               required: `Please provide at least 1 tag`,
//             }}
//             render={({ field: { ref, ...field }, fieldState: { error } }) => (
//               <TextField
//                 fullWidth
//                 variant="standard"
//                 InputProps={{ sx: { fontSize: "1.2rem", fontWeight: 400 } }}
//                 placeholder={`Enter problem tags`}
//                 error={!!error}
//                 helperText={error ? error.message : null}
//                 {...field}
//               />
//             )}
//           />
//         </Box>
//         <Box sx={{ mb: 2 }}>
//           <Controller
//             name="singleLiner"
//             defaultValue={pro.singleLiner || ""}
//             rules={{
//               required: `Please say what the problem is about`,
//             }}
//             render={({ field: { ref, ...field }, fieldState: { error } }) => (
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 multiline
//                 rows={4}
//                 inputProps={{ maxLength: 120 }}
//                 InputProps={{ sx: { fontSize: "1.2rem", fontWeight: 400 } }}
//                 placeholder={`Enter Problem's description`}
//                 error={!!error}
//                 helperText={error ? error.message : null}
//                 {...field}
//               />
//             )}
//           />
//         </Box>
//         <Box sx={{ mb: 2 }}>
//           <Controller
//             name="Markdown"
//             defaultValue={pro.Markdown || ""}
//             rules={{
//               required: "Explain problem in detail",
//             }}
//             render={({ field }) => {
//               return (
//                 <div>
//                   <Editor
//                     style={{ height: 350 }}
//                     value={field.value}
//                     renderHTML={(text: string) => {
//                       field.onChange(text);
//                       return (
//                         <Typography variant="LabelLarge" className="content">
//                           <ReactMarkdown className={style.reactMarkDown}>
//                             {text}
//                           </ReactMarkdown>
//                         </Typography>
//                       );
//                     }}
//                   />
//                 </div>
//               );
//             }}
//           />
//         </Box>
//       </>
//     )
//   }


//   if (readOnly) {
//     return (
//       <>
//         <QuestionForm  {...problem}>
//           <Box sx={{ display: 'flex', flexDirection: "column" }}>
//             <EditProblem />
//             <FilledButton variant="contained" type="submit" fullWidth>Save and Upload</FilledButton>
//           </Box>
//         </QuestionForm>
//       </>
//     )
//   }

//   return (
//     <>
//       {problem && <Box sx={{ padding: "10px 20px", height: "100vh" }} key={problem.name}>
//         <Typography variant="LabelLarge" sx={{ mt: 1, mb: 1, fontWeight: 600 }}>
//           {problem.name}
//         </Typography>
//         <Grid container spacing={1}>
//           {problem.Tags.map((tag, index) => (
//             <Grid item xs="auto" key={index}>
//               <Tag label={tag} size="small" />
//             </Grid>
//           ))}
//         </Grid>
//         {problem && problem.Markdown &&
//           <Typography variant="LabelLarge">
//             <ReactMarkdown className={style.reactMarkDown}>
//               {`${problem.Markdown}`}
//             </ReactMarkdown>
//           </Typography>
//         }
//       </Box>}
//     </>
//   );
// }


const Problems = () => {
  return (<></>)
}

export default Problems