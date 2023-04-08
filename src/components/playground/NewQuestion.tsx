import { Typography, Box } from '@mui/material';
import React from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import { DefaultUser } from "@/backend/functions";
// import { useSession } from "next-auth/react";
// import { useSnackbar } from "notistack";
// import { useRouter } from "next/router";
import { InternalLinks } from '@/content/Links';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { CardContainer, FilledButton } from '@/styles/theme';
// import Image from 'next/image';

export type Problem = {
    id: string;
    name: string;
    Tags: string[];
    frameworks: string;
    singleLiner: string;
    dependencies: Record<string, string>;
    files: Record<string, string>;
    Markdown: string;
};

interface framework {
    frame: string;
}

const CreateNewCard = ({ frame }: framework) => {
    console.log(frame);
    // const { data: session } = useSession();
    // const user: DefaultUser = session?.user as DefaultUser;
    // const { enqueueSnackbar } = useSnackbar();
    // const router = useRouter();

    // const handleSubmit = async (_e: any) => {
    //     const Data: Problem = {
    //         id: uuidv4(),
    //         name: 'xsfdfhd',
    //         Tags: [],
    //         frameworks: 'gdgsrl',
    //         singleLiner: 'wetdf',
    //         dependencies: { "sdgfh": "uikk" },
    //         files: { "dgf": "sdf" },
    //         Markdown: 'sdg'
    //     };
    //     console.log(Data);
    //     try {
    //         const accessToken = "Token " + user.accessToken;
    //         let res = await fetch(
    //             process.env.NEXT_PUBLIC_API_URL + "/labs/setQuestion",
    //             {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json;charset=utf-8",
    //                     Authorization: accessToken,
    //                 },
    //                 body: JSON.stringify({ ...Data }),
    //             }
    //         );
    //         if (res.ok) {
    //             const { success, error } = await res.json();
    //             if (!!success) {
    //                 enqueueSnackbar("Question Created", { variant: "success" })
    //                 console.log(success);
    //                 router.push(InternalLinks.LABS_PAGE + "new/" + Data.id)
    //             } else {
    //                 console.log(error);
    //             }
    //         } else {
    //             throw new Error("ON CodeArena DETAIL SAVE: ERROR");
    //         }
    //     } catch (error) {
    //         console.log("CodeArena details could not be saved");
    //         console.log(error);
    //     }
    // };

    return (
        <>
            <CardContainer sx={{ padding: "10px 20px", mt: "20px" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography variant="LabelLarge" sx={{ mt: 1, mb: 1, mr: 1, fontWeight: 600 }}>
                            Problem title
                        </Typography>
                    </Box>
                    <FilledButton endIcon={<HiOutlineExternalLink />}
                        // onClick={() => handleClick()} 
                        // href={InternalLinks.QUESTIONS_PAGE}
                        href={`${InternalLinks.LABS_PAGE}new/${frame}`}
                    >
                        Create question
                    </FilledButton>
                    {/* <Button variant="contained"
                        onClick={handleSubmit}
                        // href={InternalLinks.LABS_PAGE + problem.name}
                        href={`${InternalLinks.LABS_PAGE}${uuidv4()}`}
                    >Create</Button> */}
                </Box>
                <Typography sx={{
                    padding: "0 10px",
                    maxWidth: '100%',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 4,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>
                    Problem Statement
                </Typography>
            </CardContainer>
        </>
    )
}

export default CreateNewCard;


// Router.push(InternalLinks.ORGANIZE_NEW)