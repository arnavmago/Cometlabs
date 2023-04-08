import { DefaultUser } from "@/backend/functions";
import { FilledButton } from "@/styles/theme";
import { MenuItem, Typography, Icon, TextField, TableContainer, Paper, Table, TableBody, TableRow, TableCell } from '@mui/material'
import * as React from "react";
import { BiLockAlt } from "react-icons/bi";

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

interface githubrepo {
    repositories: REPOS[];
    user: DefaultUser | undefined;
}

const ActiveRepos = ({ repositories, user }: githubrepo) => {

    const TechStack = ["react", "next", "nuxt", "angular", "vue", "swelet", "other"];

    const [playground, setPlayground] = React.useState("react");

    
    return (
        <>
        <TableContainer sx={{height: "calc(100% - 100px)", "& .MuiTableCell-root": { p: "6px 12px" }, maxWidth: { xs: "100%", sm: "80%", md: "50%" }, borderRadius: "0px !important", boxShadow: "none", backgroundImage: "none" }} component={Paper}>
                    <Table aria-label="simple table">
                        <TableBody>
            {repositories.map((repo) => {
                const gitrepourl = repo.full_name.replace("/", "|");
                return ( 
                    <TableRow key={repo.id}
                                    sx={{ '&:first-of-type td': { borderBottom: "1px solid rgba(81, 81, 81, 1)" }, "& .MuiTableCell-root": { padding: "8px" } }}
                                >
                                    <TableCell 
                                    // sx={{ flexDirection: {md: "column", xs: "column" }}}
                                     style={{ display: "flex", justifyContent: "space-between"}}
                                     >
                                    <div>
                                        <Typography variant="TitleSmall">{repo.name}
                                        </Typography>
                                        {repo.private && <Icon><BiLockAlt fontSize="16px" /></Icon>}
                                        <Typography variant="BodySmall"paragraph style={{ margin: '0px'}}>{Math.round((new Date().getTime() - new Date(repo.updated_at).getTime()) / (1000 * 60 * 60 * 24))}d ago</Typography>
                                    </div>
                                    <div style={{ float: 'right' }}>
                                        <TextField
                                            select
                                            sx={{ width: "120px", marginRight: "20px"}}
                                            size="small"
                                            value={TechStack[0]}
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
                                            onChange={(e) => { setPlayground(e.target.value) }}
                                            ref={null}
                                            >
                                            {TechStack.map((tech) => {
                                                return (
                                                    <MenuItem key={tech} value={tech}>{tech}</MenuItem>
                                                    )
                                                })}
                                        </TextField>
                                        <FilledButton style={{ marginRight: "20px"}} onClick={() => { window.open(`https://cometlabs.in/lab/${playground}/${user!.username}/g/${gitrepourl}?git_url=${gitrepourl}&provider=github`) }}>
                                            <Typography variant="LabelLarge">Import</Typography>
                                        </FilledButton>
                                    </div>
                        {/* <Typography style={{ marginRight: "16px" }} paragraph></Typography> */}
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

export default ActiveRepos;




                            // {searchValue.map((row) => (
                                
                                    
                            //         <TableCell sx={{ width: "90px" }}>
                            //             <Autocomplete
                            //                 fullWidth
                            //                 getOptionLabel={(data) => data}
                            //                 filterOptions={(x) => x}
                            //                 options={row.package.versions}
                            //                 onChange={async (_e, value) => {
                            //                     setDLoading(true)
                            //                     row.package.version = value
                            //                     const deps = await fetch(import.meta.env.VITE_PLAYGROUND_API_URL + "/install/" + params.framework, {
                            //                         method: "POST",
                            //                         headers: { "Content-Type": "application/json" },
                            //                         body: JSON.stringify({
                            //                             user: previewUrl,
                            //                             [row.package.name]: value,
                            //                             token: import.meta.env.VITE_PLAYGROUND_API_TOKEN
                            //                         })
                            //                     })
                            //                     if (deps.ok) {
                            //                         const depend = await deps.json()
                            //                     }
                            //                     handleSaveDependencies()
                            //                     setDLoading(false)
                            //                 }}
                            //                 sx={{ "& .MuiAutocomplete-inputRoot": { paddingRight: "0px !important" } }}
                            //                 renderInput={(params) => {
                            //                     return (
                            //                         <TextField
                            //                             {...params}
                            //                             sx={{
                            //                                 "& input::placeholder": {
                            //                                     fontWeight: 400,
                            //                                     fontSize: "12px",
                            //                                     lineHeight: "16px",
                            //                                 }
                            //                             }}
                            //                             // inputProps={{
                            //                             //     style: {
                            //                             //         fontWeight: 400,
                            //                             //         fontSize: "12px",
                            //                             //         lineHeight: "16px",
                            //                             //     }
                            //                             // }}
                            //                             // InputLabelProps={{
                            //                             //     style: {
                            //                             //         fontWeight: 400,
                            //                             //         fontSize: "12px",
                            //                             //         lineHeight: "16px",
                            //                             //     }
                            //                             // }}
                            //                             placeholder={row.package.version} variant='standard' />
                            //                     )
                            //                 }
                            //                 }
                            //             />
                            //         </TableCell>
                            //         <TableCell sx={{ width: "30px" }}>
                            //             <IconButton sx={{ p: "4px" }}
                            //                 onClick={() => { handleDeletePackage(row.package.name) }}
                            //             >
                            //                 <IoMdClose fontSize="small" />
                            //             </IconButton>
                            //         </TableCell>
                            // ))}