// import { DefaultUser } from "@/backend/functions";
// import { InternalLinks } from "@/content/Links";
import ShortDashboard, { DashboardProps } from "@/layout/ShortDashboard";
import { CardContainer, FilledButton } from "@/styles/theme";
import { Chip, Grid, IconButton, InputAdornment, Modal, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { BiSearch } from "react-icons/bi"
import { MdDelete, MdOutlineCancel } from 'react-icons/md';
import { FestecTracks, TrackCard } from '@/components/MainArea/PlaygroundArea';
import GitArea from "@/components/MainArea/GitArea";
import { DefaultUser } from "@/backend/functions";
import { useRouter } from "next/router";
import * as React from 'react';

const FirstHackButton = () => {
    const [open, setOpen] = useState(false);

    const [user, setUser] = useState<DefaultUser>();

    useEffect(() => {
        async function foo() {
            const usr = JSON.parse(window.localStorage.getItem('user')!);
            if (usr) {
                setUser(usr);
            }
        }
        foo();
    }, [])

    // const link = user ? InternalLinks.LANDING_PAGE + "lab/react/" + user.username + "/f/ayr54dj" : InternalLinks.SIGNIN_PAGE;

    return (
        <>
            <FilledButton onClick={() => { setOpen(true) }} sx={{ width: "max-content", m: "auto", mb: 5 }} startIcon={<BsArrowRightShort />}>
                <Typography variant="LabelLarge">
                    Deploy your First Project
                </Typography>
            </FilledButton>
            <HackModal open={open} setOpen={setOpen} user={user!} />
        </>
    )
}

export default FirstHackButton;

interface MOdalProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    user: DefaultUser;
}

const HackModal = ({ open, setOpen, user }: MOdalProps) => {

    const tabs: DashboardProps["tabs"] = [
        { label: 'Start from a Template', component: <Template user={user!} /> },
        { label: 'Import from Github', component: <GitArea /> },
        { label: "Your Projects", component: <YourProjects /> },
        { label: "Cometlabs Designed", component: <CometlabsDesigned /> },
        { label: "Top from Community", component: <TopFromCommunity /> },
        { label: "Your Starred", component: <YourStarred /> },
    ];

    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <Grid container>
                <Grid item sx={{ borderRadius: "4px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", justifyContent: "space-between", alignContent: "center", width: { xs: "80%", sm: "70%", md: "50%" } }}>
                    <CardContainer elevation={0} sx={{ height: "50%", p: 3, maxWidth: "200x", backgroundColor: "black" }}>
                        <Typography paragraph sx={{ mb: 5 }} variant="TitleLarge">Create a Project</Typography>
                        <ShortDashboard tabs={tabs} />
                    </CardContainer>
                </Grid>
            </Grid>
        </Modal>
    )
}

interface TemplateProps {
    user: DefaultUser
}

const Template = ({ user }: TemplateProps) => {
    const [value, setValue] = useState('');
    // const [selected, setSelected] = useState(-1);
    console.log(value)
    return (
        <div>
            {/* {selected == -1 ? <> */}
            <div style={{ position: 'absolute', top: 10, right: 24, width: '50%' }}>
                <TextField
                    margin="normal"
                    value={value}
                    fullWidth
                    inputProps={{
                        style: {
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "24px",
                        },
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
                        ),
                        endAdornment: (
                            <InputAdornment position="start">
                                {/* <IconButton size="small"> */}
                                <MdOutlineCancel style={{ cursor: "pointer" }} onClick={() => { setValue("") }} />
                                {/* </IconButton> */}
                            </InputAdornment>
                        ),
                    }}
                    label="Search Template"
                    autoFocus
                    size="small"
                    ref={null}
                    onChange={e => { setValue(e.target.value) }}
                />
            </div>
            <Typography paragraph sx={{ mb: 2 }} variant="TitleLarge">Start from the Template</Typography>
            {/* <PlayArea value={value} /> */}
            <Grid container sx={{ maxHeight: "388px", overflowY: "auto", justifyContent: "center", textAlign: "center" }} spacing={1}>
                {FestecTracks.map(
                    (festectracks, i) => (festectracks.title.includes(value!) &&
                        <Grid item key={"pg-" + i}>
                            <TrackCard
                                // index={i}
                                // labs={labs}
                                user={user}
                                {...festectracks}
                            // sx={{ height: "200px", width: "160px" }}
                            />
                        </Grid>)
                )}
            </Grid>
            {/* </> :
                <>hello</>
            } */}
        </div>
    )
}


const CometlabsDesigned = () => {
    return (
        <div>
            <Typography paragraph variant="TitleLarge">Cometlabs Designed</Typography>
            <Typography variant="BodyLarge">coming soon...</Typography>
        </div>
    )
}

const TopFromCommunity = () => {
    return (
        <div>
            <Typography paragraph variant="TitleLarge">Top From Community</Typography>
            <Typography variant="BodyLarge">coming soon...</Typography>
        </div>
    )
}

const YourProjects = () => {
    // submission
    // freelabs
    const [submission, setSubmission] = useState<ALLSUBMISSIONS[]>();
    const [freelabs, setFreelabs] = useState<LABS[]>();
    const usr = JSON.parse(window.localStorage.getItem('user') || "{}");

    useEffect(() => {
        async function foo() {
            const accessToken = "Token " + usr.accessToken;
            try {
                let sub = await fetch(
                    process.env.NEXT_PUBLIC_API_URL + "/labs/getPlaygroundSubmissions",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8",
                            Authorization: accessToken,
                        },
                        body: JSON.stringify({ user_id: usr.id }),
                    }
                );
                if (sub.ok) {
                    const result = await sub.json();
                    setSubmission(result);
                }

                let free = await fetch(
                    process.env.NEXT_PUBLIC_API_URL + "/labs/getSavedUserCode",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8",
                            Authorization: accessToken
                        },
                        body: JSON.stringify({ user_id: usr.id })
                    }
                );
                if (free.ok) {
                    const result = await free.json();
                    setFreelabs(result);
                }
            } catch (error) { }
        }
        foo();
    },)

    const router = useRouter();

    return (
        <div style={{ maxHeight: "420px", overflowY: "auto", marginTop: "-32px" }}>
            {submission && submission.length > 0 &&
                <div style={{ marginBottom: "16px", paddingTop: "0px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Typography variant="TitleLarge" color="primary">All Projects</Typography>
                        <Chip sx={{ backgroundColor: "surfacevariant.main", color: 'primary.main', fontWeight: "bold", ml: 2 }} label={`Total Labs - ${submission.length}`} />
                    </div>
                    <Grid container>
                        {submission.map((submi) => {
                            return (
                                <Grid item key={submi.sub_id} xs={6}>
                                    <CardContainer sx={{ p: 1.5, my: 2, border: "none", ':hover': { backgroundColor: "surfacevariant.main" } }}>
                                        {/* <Grid item xs={12} sx={{ mb: "10px", height: "133dpx", display: "flex", justifyContent: "center" }}>
                                            <div style={{ height: "133px" }}>
                                                <Image
                                                    src={submi.screenshot ? `data:image/png;base64,${submi.screenshot}` : dummy(submi.framework)}
                                                    width={312}
                                                    height={133}
                                                    alt={"User bg"}
                                                />
                                            </div>
                                        </Grid> */}
                                        <Typography paragraph variant="HeadlineMedium">{submi.framework}</Typography>
                                        <Typography variant="BodyLarge">{submi.type == "f" ? "Project" : "Product"}</Typography>
                                        <Typography paragraph variant="LabelLarge" sx={{ color: "onsurfacevariant.main" }}>{new Date(submi.Submission_Time).toLocaleDateString()}</Typography>
                                    </CardContainer>
                                </Grid>
                            )
                        })}
                    </Grid>
                </div>}
            {freelabs && freelabs.length > 0 &&
                <div style={{ marginBottom: "32px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Typography variant="TitleLarge" color="primary">Practice Playgrounds</Typography>
                        <Chip sx={{ backgroundColor: "surfacevariant.main", color: 'primary.main', fontWeight: "bold", ml: 2 }} label={`Total Labs - ${freelabs.length}`} />
                    </div>
                    <Grid container spacing={2} sx={{ mt: 3, justifyContent: "space-around" }}>
                        {freelabs.map((lab) => {
                            const link = "https://cometlabs.in/lab/" + lab.framework + "/" + usr.username + "/" + lab.type + "/" + lab.question_id;
                            return (
                                <Grid item key={lab.question_id} xs={6}>
                                    <CardContainer sx={{ cursor: 'pointer', border: "none", ":hover": { backgroundColor: "surfacevariant.main" } }} onClick={() => { window.open(link) }}>
                                        <div style={{ padding: "16px" }}>
                                            <div style={{ display: 'flex', justifyContent: "space-between", marginBottom: "8px" }}>
                                                {lab.question && <Typography paragraph sx={{ mt: 1, maxHeight: "20px", overflow: "hidden" }} variant="TitleMedium">{lab.question}</Typography>}
                                                <Chip label={`${lab.framework}-lab`} sx={{ my: "auto", color: "onsurfacevariant.main" }} />
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: "space-between" }}>
                                                <div>
                                                    <Typography paragraph sx={{ m: 0, color: 'onsurfacevariant.main', maxHeight: "24px", overflow: "hidden" }} variant="LabelLarge">Last Modified</Typography>
                                                    <Typography paragraph sx={{ m: 0, color: 'onsurfacevariant.main', maxHeight: "24px", overflow: "hidden" }} variant="LabelLarge">{new Date(lab.modifiedAt).toDateString()}</Typography>
                                                </div>
                                                <IconButton
                                                    color="error"
                                                    sx={{ p: 0, my: "auto" }}
                                                    onClick={async (e) => {
                                                        e.stopPropagation();
                                                        const accessToken = "Token " + usr.accessToken;
                                                        let options = {
                                                            method: "POST",
                                                            headers: {
                                                                "Content-Type": "application/json;charset=utf-8",
                                                                authorization: accessToken
                                                            },
                                                            body: JSON.stringify({ question_id: lab.question_id, user_id: lab.user_id }),
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
                                        </div>

                                    </CardContainer >
                                </Grid>
                            )
                        })}
                    </Grid>
                </div>}
        </div>
    )
}

export interface LABS {
    files: {},
    modifiedAt: Date;
    question_id: string;
    type: string;
    user_id: string;
    name: string;
    framework: string;
    public: boolean;
    question?: string;
}

export interface ALLSUBMISSIONS {
    sub_id: string;
    question_id: string;
    user_id: string;
    type: 'f' | 'h' | 'l';
    files: Record<string, string>;
    output: {
        stderr: string;
        stdout: string;
    };
    screenshot: string;
    Status: string;
    Testcase_Passed: number;
    Testcase_Total: number;
    Submission_Time: Date;
    framework: string;
}


const YourStarred = () => {
    return (
        <div>
            <Typography paragraph variant="TitleLarge">Your Starred</Typography>
            <Typography variant="BodyLarge">coming soon...</Typography>
        </div>
    )
}