// import { DefaultUser } from "@/backend/functions";
// import { useSession } from "next-auth/react";
// import { useSnackbar } from "notistack";
// import { FC } from "react";
// import { FormProvider, useForm } from "react-hook-form";
// import { v4 as uuidv4 } from 'uuid';
// import { Problem } from './Problems';


// const ArenaForm: FC<Problem> = ({ children, ...data }) => {
//     // let resumeState: ResumeDataType = DEFAULT;
//     const { data: session } = useSession();
//     const user: DefaultUser = session?.user as DefaultUser;
//     const { enqueueSnackbar } = useSnackbar();
//     // const router = useRouter;


//     const methods = useForm({
//         mode: "onChange",
//         defaultValues: { ...DEFAULT, ...data },
//     });

//     methods.watch((data) => {
//         if (typeof window !== "undefined") {
//             localStorage.setItem("ProblemData", JSON.stringify(data));
//         }
//     });

//     const handleFestFormSubmit = async (data: Problem) => {
//         console.log(data);
//         const id = uuidv4();
//         console.log(id, "id");
//         const Data: Problem = {
//             id: id,
//             name: data.name,
//             Tags: data.Tags,
//             frameworks: data.frameworks,
//             singleLiner: data.singleLiner,
//             files: data.files,
//             Markdown: data.Markdown
//         };
//         console.log(Data, "Data");
//         try {
//             const accessToken = "Token " + user.accessToken;
//             let res = await fetch(
//                 process.env.NEXT_PUBLIC_API_URL + "/labs/setQuestion",
//                 {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json;charset=utf-8",
//                         Authorization: accessToken,
//                     },
//                     body: JSON.stringify({ ...Data }),
//                 }
//             );
//             if (res.ok) {
//                 const { message, error } = await res.json();
//                 if (!!message) {
//                     enqueueSnackbar("Question Created", { variant: "success" })
//                     console.log(message, "message");
//                     // router.push(InternalLinks.LABS_PAGE + "new/" + Data.id)
//                 } else {
//                     console.log(error), "error";
//                 }
//             } else {
//                 throw new Error("ON Problem DETAIL SAVE: ERROR");
//             }
//         } catch (error) {
//             console.log("Problem details could not be saved");
//             console.log(error);
//         }
//     };

//     return <FormProvider {...methods}>
//         <form
//             onSubmit={methods.handleSubmit((data: Problem) =>
//                 handleFestFormSubmit(data)
//             )}
//         >
//             {children}
//         </form>
//     </FormProvider>;
// };

// export default ArenaForm;

// export const DEFAULT: Problem = {
//     id: "",
//     name: "",
//     Tags: [],
//     frameworks: "angular",
//     singleLiner: "",
//     files: { "": "" },
//     Markdown: ""
// };



const ArenaForm = () => {
    return (
        <div>ArenaForm</div>
    )
}

export default ArenaForm;