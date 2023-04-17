import { DefaultUser } from "@/backend/functions";
import { FilledButton } from "@/styles/theme";
// import { Icon, InputAdornment, MenuItem, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material";
import { Icon, InputAdornment, MenuItem, Table, TableBody, TableCell, TableContainer, TableRow, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { BiLockAlt, BiSearch } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import style from "@/styles/typography-styles.module.css";

export interface REPOS {
    id: number;
    name: string;
    full_name: string;
    html_url: string;
    description: string;
    owner: {
        login: string;
    };
    updated_at: string;
    private: boolean;
}

export interface repo {
    repositories: REPOS[];
}

const GitArea = () => {
    const [repos, setRepos] = useState<REPOS[]>();
    console.log(repos, 'repos');
    const usr = JSON.parse(window.localStorage.getItem('user') || "{}");

    useEffect(() => {
        async function foo() {
            const accessToken = "Token " + usr.accessToken;
            try {
                let res = await fetch(
                    process.env.NEXT_PUBLIC_API_URL + "/api/getUserRepos",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8",
                            Authorization: accessToken,
                        },
                    }
                );
                if (res.ok) {
                    const result = await res.json();
                    const repositories = result.repos;
                    setRepos(repositories);
                }
            } catch (error) {
                // console.log(error);
            }
        }
        foo();
    },)

    return (
        <div style={{ marginTop: "-40px" }}>
            {/* <Typography paragraph sx={{ mb: 2 }} variant="LabelLarge">Connect with a Git provider to import an existing project from a Git Repository.</Typography> */}
            <p className={style.LabelLarge}>
            Connect with a Git provider to import an existing project from a Git Repository.
            </p>
            {!usr ? 
            // <Typography variant="LabelLarge">Connect to Github</Typography>
            <p className={style.LabelLarge}>
            Connect to Github
            </p>
             : <div style={{ margin: "20px", display: "flex", marginBottom: "32px", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: 'center' }}>
                    <SiGithub />
                    {/* <Typography style={{ marginLeft: "6px" }} variant="LabelLarge">Connect Github</Typography> */}
                    <p className={style.LabelLarge} style={{marginLeft: "6px"}}>Connect Github</p>

                </div>
                <div style={{ display: 'flex', alignItems: "center", cursor: 'pointer' }} onClick={() => { window.open(`https://github.com/login/oauth/authorize?client_id=e07b9a9e6d2763621b8e&scope=repo,user:email&state=${usr.accessToken}`) }}>
                    {/* <Typography style={{ marginRight: "6px" }} variant="LabelLarge">{usr.username}</Typography> */}
                    <p className={style.LabelLarge} style={{marginRight: "6px"}}>{usr.username}</p>
                    <MdOutlineCancel />
                </div>
            </div>}
            {repos && repos.length > 0 &&
                <GitHubRepos repositories={repos} user={usr} />
            }
        </div>
    )
}

export default GitArea;

interface githubrepo {
    repositories: REPOS[];
    user: DefaultUser | undefined;
}

const GitHubRepos = ({ repositories, user }: githubrepo) => {

    const arrUniq = repositories && [...new Map(repositories.map(v => [v.owner.login, v])).values()];

    const owners = arrUniq.map(({ owner }) => (owner));

    const ownersNames = owners.map(({ login }) => (login));
    const [activeOwner, setOwner] = useState<string>(ownersNames[0]);
    const [activeRepos, setActiveRepos] = useState(repositories);

    const handleReposUpdate = (value: string) => {
        const newRepos = repositories.filter(repo => repo.full_name.toLowerCase().includes(value.toLowerCase()))
        setActiveRepos(newRepos);
        console.log(activeRepos[1], "newRepos")
        // console.log(new Date(activeRepos[0].updated_at).toLocaleDateString())
    }


    return (
        <>
            <div>
                {/* <Typography paragraph variant="TitleLarge">Import Git Repositories</Typography> */}
                <p className={style.TitleLArge}>Import Git Repositories</p>
                
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "32px", marginBottom: "16px" }}>
                    <TextField style={{ paddingBottom: "0px", width: "100%", maxWidth: "200px" }}
                        select
                        size="small"
                        defaultValue={activeOwner}
                        label="Github Account"
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
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <BiSearch />
                                </InputAdornment>
                            )
                        }}
                        onChange={(e) => { setOwner(e.target.value), handleReposUpdate(e.target.value) }}
                        ref={null}
                    >
                        {ownersNames.map((owner) => {
                            return (
                                <MenuItem key={owner} value={owner}>{owner}</MenuItem>
                            )
                        })}
                    </TextField>
                    <TextField style={{ paddingBottom: "0px", width: "100%", maxWidth: "200px" }}
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
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <BiSearch />
                                </InputAdornment>
                            )
                        }}
                        onChange={(e) => { handleReposUpdate(e.target.value) }}
                        ref={null}
                    >
                        {ownersNames.map((owner) => {
                            return (
                                <MenuItem key={owner} value={owner}>{owner}</MenuItem>
                            )
                        })}
                    </TextField>
                </div>
                <ActiveRepos repositories={activeRepos} user={user} />
            </div>
        </>
    )
}

const ActiveRepos = ({ repositories, user }: githubrepo) => {

    const TechStack = ["react", "next", "nuxt", "angular", "vue", "swelet"];

    return (
        <>
            <TableContainer sx={{ overflowY: 'auto', bottom: 0, maxHeight: "230px", width: "100%", height: "100%", "& .MuiTableCell-root": { p: "6px 12px" }, borderRadius: "0px !important", }} >
                <Table aria-label="simple table">
                    <TableBody>
                        {repositories.map((repo) => {
                            const gitrepourl = repo.full_name.replace("/", "|");
                            let playground = 'react';
                            return (
                                <TableRow key={repo.id}
                                    sx={{ '&:first-of-type td': { borderBottom: "1px solid rgba(81, 81, 81, 1)" }, "& .MuiTableCell-root": { padding: "8px" } }}
                                >
                                    <TableCell
                                        // sx={{ flexDirection: {md: "column", xs: "column" }}}
                                        style={{ display: "flex", justifyContent: "space-between" }}
                                    >
                                        <div style={{ maxWidth: "220px" }}>
                                            {/* <Typography variant="TitleSmall">{repo.name}
                                            </Typography> */}
                                            <p className={style.TitleSmall}>{repo.name}</p>
                                            {repo.private && <Icon><BiLockAlt fontSize="16px" /></Icon>}
                                            {/* <Typography variant="BodySmall" paragraph style={{ margin: '0px' }}>{Math.round((new Date().getTime() - new Date(repo.updated_at).getTime()) / (1000 * 60 * 60 * 24))}d ago</Typography> */}
                                            <p className={style.BodySmall}  style={{ margin: '0px' }}>{Math.round((new Date().getTime() - new Date(repo.updated_at).getTime()) / (1000 * 60 * 60 * 24))}d ago</p>
                                        </div>
                                        <div style={{ float: 'right' }}>
                                            <TextField
                                                select
                                                variant="standard"
                                                sx={{ width: "100px", marginRight: "20px" }}
                                                size="small"
                                                value={playground}
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
                                                onChange={(e) => { playground = e.target.value }}
                                                ref={null}
                                            >
                                                {TechStack.map((tech) => {
                                                    return (
                                                        <MenuItem key={tech} value={tech}>{tech}</MenuItem>
                                                    )
                                                })}
                                            </TextField>
                                            <FilledButton onClick={() => { window.open(`https://cometlabs.in/lab/${playground}/${user!.username}/g/${gitrepourl}?git_url=${gitrepourl}&provider=github`) }}>
                                                {/* <Typography variant="LabelLarge">Import</Typography> */}
                                                <p className={style.LabelLarge}>Import</p>
                                            </FilledButton>
                                        </div>
                                        {/* <Typography style={{ marginRight: "16px" }} paragraph></Typography> */}
                                        <p style={{marginRight:"16px"}}>paragraph</p>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}