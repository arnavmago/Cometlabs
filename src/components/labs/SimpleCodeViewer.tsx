// import * as React from 'react';
// import { Button, Box } from '@mui/material';
// import ReactMarkdown from "react-markdown";
// import style from "@/styles/markdown-styles.module.css";

// import { useSandpack } from "@codesandbox/sandpack-react";
// import { useSession } from "next-auth/react";
// import { DefaultUser } from "@/backend/functions";

// interface Props {
//   questionid: string;
//   isDark: boolean;
//   setDark: React.Dispatch<React.SetStateAction<boolean>>;
//   framework: string;
// }


// const SimpleCodeViewer = ({ questionid, isDark, setDark, framework }: Props) => {
//   const { sandpack } = useSandpack();
//   const { files } = sandpack;
//   const { data: session } = useSession();
//   const user: DefaultUser = session?.user as DefaultUser;
//   const theme = !isDark ? "Dark" : "Light";
//   const res = ``;
//   const [result, setResult] = React.useState(res);

//   const handleRun = async () => {
//     // console.log(files);
//     if (!!session) {
//       try {
//         const accessToken = "Token " + user.accessToken;
//         let resp = await fetch(
//           `https://sandbox.cometlabs.in/create/${framework}`,
//           {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: accessToken,
//             },
//           }
//         );
//         console.log(resp.body)
//         if (resp.ok) {
//           const res = await resp.json()
//           console.log(res.user)
//           if (!!res.user) {
//             let test = await fetch(
//               `https://sandbox.cometlabs.in/modify/${framework}`,
//               {
//                 method: "POST",
//                 headers: {
//                   "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ data: { user: res.user, ...files } })
//               }
//             );
//             if (test.ok) {
//               const tes = await test.json();
//               console.log(tes, "test");
//             }
//             console.log(res.user);
//             let testrun = await fetch(
//               `https://sandbox.cometlabs.in/test/${framework}`,
//               {
//                 method: "POST",
//                 headers: {
//                   "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ user: res.user })
//               }
//             );
//             // console.log(testrun.body);
//             if (testrun.ok) {
//               const testrunning = await testrun.json();
//               let output;
//               if (testrunning.status) {
//                 output = testrunning.status
//                 if (output === "FAIL") {
//                   output += "  \n  ";
//                   output += testrunning.reason;
//                 }
//               }
//               else {
//                 output = testrunning.stderr.replaceAll("\n", "  \n  ");
//               }
//               console.log(testrunning, "testrunning");
//               // const output1 = output.split('●')[0];
//               // const output2 = 'Test Suites:' + output.split('Test Suites:')[1];
//               setResult(output);
//               // console.log(output1 + output2);
//               let delUser = await fetch(
//                 "https://sandbox.cometlabs.in/delUser",
//                 {
//                   method: "POST",
//                   headers: {
//                     "Content-Type": "application/json",
//                   },
//                   body: JSON.stringify({ user: res.user })
//                 }
//               )
//               if (delUser.ok) {
//                 // console.log("deleted user")
//               }
//             }
//           }
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     else {
//       console.log("error")
//     }
//   }

//   const handleSave = async () => {
//     if (!!session) {
//       try {
//         const accessToken = "Token " + user.accessToken;
//         // console.log(questionid);
//         let test = await fetch(
//           process.env.NEXT_PUBLIC_API_URL + "/labs/saveUserCode",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: accessToken,
//             },
//             body: JSON.stringify({ question_id: questionid, user_id: user.id, files: files })
//           }
//         );
//         if (test.ok) {
//           const tes = await test.json();
//           console.log(tes);
//         }

//       } catch (error) {
//         console.log(error);
//       }
//     }
//     else {
//       console.log("error")
//     }
//   }

//   const handleTheme = () => {
//     setDark(!isDark);
//   }

//   const handleSubmit = async () => {
//     if (!!session) {
//       try {
//         const accessToken = "Token " + user.accessToken;
//         let test = await fetch(
//           process.env.NEXT_PUBLIC_API_URL + "/labs/createSubmission",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: accessToken,
//             },
//             body: JSON.stringify({ question_id: questionid, user_id: user.id, files: files, framework: framework })
//           }
//         );
//         if (test.ok) {
//           const tes = await test.json();
//           console.log(tes);
//         }

//       } catch (error) {
//         console.log(error);
//       }
//     }
//     else {
//       console.log("error")
//     }
//   }

//   // const handleFetch = async () => {
//   //   console.log("Fetch")
//   //   if (!!session) {
//   //     try {
//   //       const accessToken = "Token " + user.accessToken;
//   //       let test = await fetch(
//   //         process.env.NEXT_PUBLIC_API_URL + "/labs/getPlaygroundSubmissions",
//   //         {
//   //           method: "POST",
//   //           headers: {
//   //             "Content-Type": "application/json",
//   //             Authorization: accessToken,
//   //           },
//   //           body: JSON.stringify({ question_id: questionid, user_id: user.id })
//   //         }
//   //       );
//   //       if (test.ok) {
//   //         const tes = await test.json();
//   //         console.log(tes);
//   //       }

//   //     } catch (error) {
//   //       console.log(error);
//   //     }
//   //   }
//   //   else {
//   //     console.log("error")
//   //   }
//   // }

//   // const handleFetchAll = async () => {
//   //   console.log("Get All")
//   //   if (!!session) {
//   //     try {
//   //       const accessToken = "Token " + user.accessToken;
//   //       let test = await fetch(
//   //         process.env.NEXT_PUBLIC_API_URL + "/labs/getPlaygroundSubmissions",
//   //         {
//   //           method: "POST",
//   //           headers: {
//   //             "Content-Type": "application/json",
//   //             Authorization: accessToken,
//   //           },
//   //           body: JSON.stringify({ user_id: user.id })
//   //         }
//   //       );
//   //       if (test.ok) {
//   //         const tes = await test.json();
//   //         console.log(tes);
//   //       }

//   //     } catch (error) {
//   //       console.log(error);
//   //     }
//   //   }
//   //   else {
//   //     console.log("error")
//   //   }
//   // }

//   // const code = files[activePath].code;
//   return (
//     <Box>
//       <Box>
//         <Button variant="contained" onClick={() => { console.log(files), handleRun() }}>Run</Button>
//         <Button variant="contained" onClick={() => { console.log("save"), handleSave() }}>Save files</Button>
//         <Button variant="contained" onClick={() => { console.log("Theme"), handleTheme() }}>{theme}</Button>
//         <Button variant="contained" onClick={() => { console.log("Submit"), handleSubmit() }}>Submit</Button>
//         {/* <Button variant="contained" onClick={() => { console.log("Get Submissions"), handleFetch() }}>Fetch</Button>
//         <Button variant="contained" onClick={() => { console.log("Get All Submissions"), handleFetchAll() }}>Fetch All</Button> */}
//       </Box>
//       {result && <Box sx={{ overflow: "scroll", color: "white", height: "90%" }}>
//         <ReactMarkdown className={style.reactMarkDown}>
//           {result}
//         </ReactMarkdown>
//         {/* <textarea value={result} /> */}
//       </Box>}
//     </Box>
//   );
// };

// export default SimpleCodeViewer;

const SimpleCodeViewer = () => {
  return (<></>)
}

export default SimpleCodeViewer;