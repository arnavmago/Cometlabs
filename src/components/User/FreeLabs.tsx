import { StyledCardContainer } from "@/styles/theme";
// import { Chip, Grid, Typography, IconButton, TextField, MenuItem, Avatar } from "@mui/material"
import { Chip, Grid,  IconButton, TextField, MenuItem, Avatar } from "@mui/material"
import { LABS } from "pages/Dashboards/Dev/[id]";
import { useRouter } from "next/router";
// import { ExternalLinks } from "@/content/Links";
// import { DefaultUser } from "@/backend/functions";
import { useState } from "react";
import { MdDelete } from 'react-icons/md';
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import style from "@/styles/typography-styles.module.css";

interface FreeLabs {
    freelabs: LABS[];
}

export interface FreeRoamLab {
    id: string;
    name: string;
    track: Track;
}

const FreeLabs = ({ freelabs }: FreeLabs) => {
    const [labs, setFreelabs] = useState(freelabs);
    const [collapse, setCollapse] = useState(false);

    const types = freelabs && [...new Map(freelabs.map(v => [v.framework, v])).values()].map(({ framework }) => (framework));

    const handleFreeLabsbyName = (name: string) => {
        const labsname = freelabs.filter(lab => lab.question.toLowerCase().includes(name.toLowerCase()));
        console.log(labsname);
        setFreelabs(labsname);
    }

    const handleFreeLabsbyType = (name: string) => {
        const labstype = freelabs.filter(lab => lab.framework.toLowerCase().includes(name.toLowerCase()));
        console.log(labstype);
        setFreelabs(labstype);
    }

    return (
        <div style={{ margin: "32px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                    <IconButton sx={{ mr: 1 }} onClick={() => { setCollapse(!collapse) }}>
                        {collapse ? <BiChevronRight /> : <BiChevronDown />}
                    </IconButton>
                    {/* <Typography width="100%" variant="TitleLarge" color="primary"> */}
                    <p className={style.TitleLarge} style={{color:"#c4c6d0"}}>
                        Practice Playgrounds
                        {/* </Typography> */}
                        </p>
                    <Chip sx={{ backgroundColor: "surfacevariant.main", color: 'primary.main', fontWeight: "bold", ml: 2 }} label={`Total Labs - ${freelabs.length}`} />
                </div>
                <div style={{ display: "flex" }}>
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
                        onChange={(e) => { handleFreeLabsbyName(e.target.value) }}
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
            {!collapse && <Grid container spacing={2} sx={{ mt: 3, justifyContent: "space-around" }}>
                {labs && labs.map((lab) => {
                    return (
                        <Grid item key={lab.question_id}>
                            <SingleLab {...lab} />
                        </Grid>
                    )
                })}
                {/* {labs && labs.length == 0 && <Typography variant="LabelLarge">No Labs found</Typography>} */}
                {labs && labs.length == 0 && <p className={style.LabelLarge}>No Labs found</p>}
            </Grid>}
        </div>
    )
}

const SingleLab = (freelabs: LABS) => {

    const user = JSON.parse(localStorage.getItem("user")!)
    const accessToken = "Token " + user.accessToken;

    const getLabType = (type: string) => {
        switch (type) {
            case 'f':
                return "project";

            case 'h':
                return "hackathon";

            case 'l':
                return "product";

            case 'g':
                return "github";
        }
    }

    const router = useRouter();

    const link = "https://cometlabs.in/lab/" + freelabs.framework + "/" + user.username + "/" + freelabs.type + "/" + freelabs.question_id;

    const name = freelabs.framework.split("-");

    return (
        <StyledCardContainer sx={{ cursor: 'pointer', width: "250px", transition: "transform 0.3s", ':hover': { transform: "scale(1.05)" } }} onClick={() => { window.open(link) }}>
            <div style={{ height: "144px", backgroundColor: "black", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {name && name.map((value) => {
                    return (
                        <Avatar
                            // loader={Loader}
                            // src={freelabs.framework}
                            key={value}
                            src={`/new/${value}.png` || '/new/Vanilla.png'}
                            alt={"logo"}
                            sx={{ height: "50px", width: "50px", marginLeft: "4px", marginRight: "4px" }}
                        />
                    )
                })}
            </div>
            <div style={{ padding: "16px" }}>
                <div style={{ display: 'flex', justifyContent: "space-between", marginBottom: "8px" }}>
                    <Chip label={getLabType(freelabs.type)} sx={{ my: "auto", color: "onsurfacevariant.main" }} />
                    <IconButton
                        color="error"
                        sx={{ p: 0, my: "auto" }}
                        onClick={async (e) => {
                            e.stopPropagation();
                            let options = {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json;charset=utf-8",
                                    authorization: accessToken
                                },
                                body: JSON.stringify({ question_id: freelabs.question_id, user_id: freelabs.user_id }),
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
                {/* <Typography paragraph sx={{ mt: 1, maxHeight: "20px", overflow: "hidden" }} variant="TitleMedium"> */}
                <p className={style.TitleMedium} style={{maxHeight: "20px", overflow: "hidden"}}>
                    {freelabs.question} </p>
                    {/* </Typography> */}
                {/* <Typography paragraph sx={{ m: 0, color: 'onsurfacevariant.main', maxHeight: "24px", overflow: "hidden" }} variant="LabelLarge"> */}
                <p className={style.LabelLarge} style={{color: '#c4c6d0', maxHeight: "24px", overflow: "hidden"}}>
                    Last Modified {new Date(freelabs.modifiedAt).toDateString()} </p>
                    {/* </Typography> */}
            </div>

        </StyledCardContainer >
    )
}

export default FreeLabs;


export interface Track {
    title: "angular" | "react" | "javaScript" | "typeScript" | "vue" | "svelte" | "next" | "nuxt" | "other";
    imageUrl: string;
}

export const FestecTracks: Array<Track> = [
    {
        imageUrl: "https://cdn.svgporn.com/logos/react.svg",
        title: "react",
    },
    {
        imageUrl: "https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png",
        title: "next",
    },
    {
        imageUrl: "https://cdn.svgporn.com/logos/vue.svg",
        title: "vue",
    },
    {
        imageUrl: "https://nuxtjs.ir/logos/nuxt-icon-white.png",
        title: "nuxt",
    },
    {
        imageUrl: "https://cdn.svgporn.com/logos/angular-icon.svg",
        title: "angular",
    },
    {
        imageUrl: "https://cdn.svgporn.com/logos/svelte-icon.svg",
        title: "svelte",
    },
];