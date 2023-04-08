import { CardContainer, FilledButton, StyledCardContainer } from "@/styles/theme";
import { Box, Grid, Typography, Chip, Tooltip, TextField, MenuItem, IconButton } from "@mui/material";
import { ALLSUBMISSIONS, LABS } from "pages/Dashboards/Dev/[id]";
import Image from "next/image";
// import { FestecTracks } from "../MainArea/PlaygroundArea";
import FreeLabs from "./FreeLabs";
import { REPOS } from "../MainArea/ActiveRepos";
import { DefaultUser } from "@/backend/functions";
import { useState } from "react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import router from "next/router";
import { MdDelete } from "react-icons/md";

interface Submission {
    submission: ALLSUBMISSIONS[];
    freelabs: LABS[],
    repositories?: REPOS[];
    user?: DefaultUser;
}

const Projects = ({ submission, freelabs, repositories, user }: Submission) => {

    const [repos, setRepos] = useState(repositories);

    const arrUniq = repos && [...new Map(repos.map(v => [v.owner.login, v])).values()];

    const owners = arrUniq && arrUniq.map(({ owner }) => (owner));

    const dummy = (name: string) => {
        return `https://logo-cover.s3.ap-south-1.amazonaws.com/${name}-cover.png`
    }

    const [submi, setSubmission] = useState(submission);
    const [onrs, setOwners] = useState(owners);
    const [submicollapse, setSubmissionCollapse] = useState(false);
    const [githubcollapse, setGithubCollapse] = useState(false);

    const types = submission && [...new Map(submission.map(v => [v.framework, v])).values()].map(({ framework }) => (framework));

    const handleFreeLabsbyType = (name: string) => {
        const type = submission.filter(lab => lab.framework.toLowerCase().includes(name.toLowerCase()));
        setSubmission(type);
    }

    const handleGithubLabsbyType = (name: string) => {
        const type = owners && owners.filter(owner => owner.login.toLowerCase().includes(name.toLowerCase()));
        setOwners(type);
    }

    const handleReposbyName = (name: string) => {
        const repo = repositories && repositories.filter(owner => owner.full_name.toLowerCase().includes(name.toLowerCase()));
        setRepos(repo);
    }

    return (
        <div style={{ margin: "30px 60px" }}>
            {submi.length > 0 &&
                <CardContainer elevation={1} sx={{ background: "transparent", backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))", p: 4, mb: 4 }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <IconButton sx={{ mr: 1 }} onClick={() => { setSubmissionCollapse(!submicollapse) }}>
                                {submicollapse ? <BiChevronRight /> : <BiChevronDown />}
                            </IconButton>
                            <Typography variant="TitleLarge" color="primary">All Projects</Typography>
                            <Chip sx={{ backgroundColor: "surfacevariant.main", color: 'primary.main', fontWeight: "bold", ml: 2 }} label={`Total Labs - ${submission.length}`} />
                        </div>
                        <TextField style={{ paddingBottom: "0px", width: "150px", maxWidth: "200px" }}
                            size="small"
                            select
                            label="Search By Type"
                            inputProps={{
                                style: {
                                    fontWeight: 400,
                                    fontSize: "16px",
                                    lineHeight: "24px",
                                }
                            }}
                            InputLabelProps={{
                                style: {
                                    fontWeight: 500,
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                }
                            }}
                            onChange={(e) => { handleFreeLabsbyType(e.target.value) }}
                            ref={null}
                        >
                            <MenuItem value="">Select</MenuItem>
                            {types.map((type) => {
                                return (
                                    <MenuItem key={type} value={type}>{type}</MenuItem>
                                )
                            })}
                        </TextField>
                    </div>
                    {!submicollapse && <Grid container>
                        {submi.map((submi) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} key={submi.sub_id}>
                                    <CardContainer sx={{ width: 320, padding: "20px", margin: "20px auto", border: 0, transition: "transform 0.3s", ':hover': { transform: "scale(1.05)" } }}>
                                        <Grid item xs={12} sx={{ height: "133dpx", display: "flex", justifyContent: "center" }}>
                                            <Box
                                                sx={{
                                                    height: "133px",
                                                }}
                                            >
                                                <Image
                                                    src={submi.screenshot ? `data:image/png;base64,${submi.screenshot}` : dummy(submi.framework)}
                                                    width={312}
                                                    height={133}
                                                    alt={"User bg"}
                                                />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sx={{ px: 1.5 }}>
                                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                                                <Typography variant="HeadlineMedium">{submi.framework}</Typography>
                                                <IconButton
                                                    color="error"
                                                    sx={{ p: 0, my: "auto" }}
                                                    onClick={async (e) => {
                                                        e.stopPropagation();
                                                        const accessToken = "Token " + user?.accessToken
                                                        let options = {
                                                            method: "POST",
                                                            headers: {
                                                                "Content-Type": "application/json;charset=utf-8",
                                                                authorization: accessToken
                                                            },
                                                            // body: JSON.stringify({ question_id: freelabs.question_id, user_id: freelabs.user_id }),
                                                        };

                                                        try {
                                                            let res = await fetch(
                                                                process.env.NEXT_PUBLIC_API_URL + "/labs/deleteSavedUserCode",
                                                                options
                                                            );
                                                            if (res.ok) {
                                                                router.reload();
                                                            } else {
                                                                console.log("error")
                                                            }
                                                        } catch (error) {
                                                            console.log(error);
                                                        }
                                                        e.stopPropagation();
                                                    }}
                                                >
                                                    <MdDelete />
                                                </IconButton>
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                <Typography paragraph variant="LabelLarge" sx={{ color: "onsurfacevariant.main", mb: 0 }}>{new Date(submi.Submission_Time).toLocaleDateString()}</Typography>
                                                <Chip sx={{ backgroundColor: "surfacevariant.main", color: 'primary.main', fontWeight: "bold", ml: 2 }} label={submi.type == "f" ? "Project" : "Product"} />
                                            </div>
                                        </Grid>
                                    </CardContainer>
                                </Grid>
                            )
                        })}
                    </Grid>}
                </CardContainer>}
            {freelabs.length > 0 &&
                <CardContainer elevation={1} sx={{ background: "transparent", backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))", mb: 4 }}>
                    <FreeLabs freelabs={freelabs} />
                </CardContainer>}
            {repos && repos.length > 0 ?
                <CardContainer elevation={1} sx={{ background: "transparent", backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))", p: 4, mb: 4 }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <IconButton sx={{ mr: 1 }} onClick={() => { setGithubCollapse(!githubcollapse) }}>
                                {githubcollapse ? <BiChevronRight /> : <BiChevronDown />}
                            </IconButton>
                            <Typography variant="TitleLarge" color="primary">Github Projects</Typography>
                            <Chip sx={{ backgroundColor: "surfacevariant.main", color: 'primary.main', fontWeight: "bold", ml: 2 }} label={`Github Labs - ${repositories && repositories.length}`} />
                        </div>
                        <div>
                            <TextField style={{ paddingBottom: "0px", width: "150px", maxWidth: "200px" }}
                                size="small"
                                select
                                label="Search By Type"
                                inputProps={{
                                    style: {
                                        fontWeight: 400,
                                        fontSize: "16px",
                                        lineHeight: "24px",
                                    }
                                }}
                                InputLabelProps={{
                                    style: {
                                        fontWeight: 500,
                                        fontSize: "14px",
                                        lineHeight: "20px",
                                    }
                                }}
                                onChange={(e) => { handleGithubLabsbyType(e.target.value) }}
                                ref={null}
                            >
                                <MenuItem value="">Select</MenuItem>
                                {owners && owners.map((type) => {
                                    return (
                                        <MenuItem key={type.login} value={type.login}>{type.login}</MenuItem>
                                    )
                                })}
                            </TextField>
                            <TextField style={{ paddingLeft: "8px", paddingBottom: "0px", width: "150px", maxWidth: "200px" }}
                                size="small"
                                label="Search Repository"
                                inputProps={{
                                    style: {
                                        fontWeight: 400,
                                        fontSize: "16px",
                                        lineHeight: "24px",
                                    }
                                }}
                                InputLabelProps={{
                                    style: {
                                        fontWeight: 500,
                                        fontSize: "14px",
                                        lineHeight: "20px",
                                    }
                                }}
                                onChange={(e) => { handleReposbyName(e.target.value) }}
                                ref={null}
                            >
                                {/* {ownersNames.map((owner) => {
                                return (
                                    <MenuItem key={owner} value={owner}>{owner}</MenuItem>
                                )
                            })} */}
                            </TextField>
                        </div>
                    </div>
                    {!githubcollapse && onrs && onrs.map((owner) => {
                        const newRepos = repos.filter(repo => repo.full_name.toLowerCase().includes(owner.login.toLowerCase()))
                        return (
                            <div style={{ marginTop: "32px" }} key={owner.login}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <Typography variant="TitleLarge">{owner.login}</Typography>
                                    <Chip sx={{ backgroundColor: "surfacevariant.main", color: 'primary.main', fontWeight: "bold", ml: 2 }} label={`Github Labs - ${newRepos.length}`} />
                                </div>
                                <Grid container spacing={2} sx={{ mt: 3, mx: "auto" }}>
                                    {newRepos.map((repo) => {
                                        const gitrepourl = repo.full_name.replace("/", "|");
                                        return (
                                            <Grid item key={repo.full_name}>
                                                <Tooltip title={repo.name} placement="top">
                                                    <StyledCardContainer sx={{ cursor: 'pointer', width: "200px", transition: "transform 0.3s", ':hover': { transform: "scale(1.05)" }, p: 2 }} onClick={() => { window.open(`https://cometlabs.in/lab/vite-vanilla/${user!.username}/g/${gitrepourl}?git_url=${gitrepourl}&provider=github`) }}>
                                                        <Typography variant="TitleSmall" sx={{ height: "40px", display: "flex", maxWidth: "160px", overflow: "hidden" }}>{repo.name}</Typography>
                                                        <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
                                                            <Typography variant="BodySmall" paragraph style={{ margin: '0px' }}>{Math.round((new Date().getTime() - new Date(repo.updated_at).getTime()) / (1000 * 60 * 60 * 24))}d ago</Typography>
                                                            <Chip sx={{ backgroundColor: "surfacevariant.main" }} label={repo.private ? 'private' : 'public'} />
                                                        </div>
                                                    </StyledCardContainer>
                                                </Tooltip>
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </div>
                        )
                    })}
                </CardContainer> :
                <FilledButton sx={{ mb: 1, borderRadius: 0 }} onClick={() => { window.open(`https://github.com/login/oauth/authorize?client_id=e07b9a9e6d2763621b8e&scope=repo,user:email&state=${user!.accessToken}`) }}>
                    <Typography variant="LabelLarge">Authorise your Github</Typography>
                </FilledButton>}
            {freelabs.length == 0 && submission.length == 0 &&
                <div>
                    <Typography variant="HeadlineSmall" color="primary" paragraph>No submissions</Typography>
                    <Typography variant="LabelLarge">Created Labs and your submissions will be shown here</Typography>
                </div>}
        </div>
    )
}

export default Projects;

// The girhub page with url = cometlabs.in/github

// import { DefaultUser } from "@/backend/functions";
// import ActiveRepos, { repo } from "@/components/MainArea/ActiveRepos";
// import Page from "@/layout/Page";
// import { CardContainer } from "@/styles/theme";
// import { MenuItem, TextField, Typography } from "@mui/material";
// import { GetServerSideProps } from "next";
// import { getSession } from "next-auth/react";
// import * as React from "react";

// const Github = ({ repositories }: repo) => {

//     const [user, setUser] = React.useState<DefaultUser>();

//     React.useEffect(() => {
//         const user = JSON.parse(localStorage.getItem("user")!);
//         setUser(user);
//         handleReposUpdate(activeOwner);
//     }, [])

//     const arrUniq = [...new Map(repositories.map(v => [v.owner.login, v])).values()];

//     const owners = arrUniq.map(({ owner }) => (owner));

//     console.log(owners);

//     const ownersNames = owners.map(({ login }) => (login));
//     const [activeOwner, setOwner] = React.useState(ownersNames[0]);
//     const [activeRepos, setRepos] = React.useState(repositories);

//     const handleReposUpdate = (value: string) => {
//         const newRepos = repositories.filter(repo => repo.full_name.toLowerCase().includes(value.toLowerCase()))
//         setRepos(newRepos);
//         console.log(activeRepos[1], "newRepos")
//         console.log(new Date(activeRepos[0].updated_at).toLocaleDateString())
//     }

//     return (
//         <Page>
//             <CardContainer elevation={0} style={{ padding: "30px", height: "calc(100vh - 150px)" }}>
//                 <Typography paragraph variant="TitleLarge">Import Git Repositories</Typography>
//                 <TextField style={{ paddingBottom: "20px", minWidth: "max-content", width: "100%", maxWidth: "300px" }}
//                     select
//                     size="small"
//                     defaultValue={activeOwner}
//                     label="Choose Github Organization"
//                     inputProps={{
//                         style: {
//                             fontWeight: 400,
//                             fontSize: "16px",
//                             lineHeight: "24px",
//                         }
//                     }}
//                     InputLabelProps={{
//                         style: {
//                             fontWeight: 500,
//                             fontSize: "14px",
//                             lineHeight: "20px",
//                         }
//                     }}
//                     onChange={(e) => { setOwner(e.target.value), handleReposUpdate(e.target.value) }}
//                     ref={null}
//                 >
//                     {ownersNames.map((owner) => {
//                         return (
//                             <MenuItem key={owner} value={owner}>{owner}</MenuItem>
//                         )
//                     })}
//                 </TextField>
//                 <ActiveRepos repositories={activeRepos} user={user} />
//             </CardContainer>
//         </Page>
//     )
// }

// export default Github;


// export const getServerSideProps: GetServerSideProps = async (context) => {
//     const session = await getSession(context);
//     // const { enqueueSnackbar } = useSnackbar();

//     if (!!session) {
//         const user: DefaultUser = session.user as DefaultUser;
//         const accessToken = "Token " + user.accessToken;
//         try {
//             let res = await fetch(
//                 process.env.NEXT_PUBLIC_API_URL + "/api/getUserRepos",
//                 {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json;charset=utf-8",
//                         Authorization: accessToken,
//                     },
//                 }
//             );
//             if (res.ok) {
//                 const result = await res.json();
//                 const repositories = result.repos;
//                 return {
//                     props: { repositories }
//                 };
//             }
//         } catch (error) {
//             // console.log(error);
//         }

//     }

//     return {
//         redirect: {
//             permanent: false,
//             destination: "/signin",
//         },
//     };
// };