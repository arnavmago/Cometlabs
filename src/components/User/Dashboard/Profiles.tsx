export interface Profile {
    Username: string;
    Name: string;
    Github?: string;
    LinkedIn?: string;
    Desc: string;
    Tags?: string[]
};

// import { Grid, Typography, Box, Skeleton, Chip } from "@mui/material";
import { Grid, Box, Skeleton, Chip } from "@mui/material";
import * as React from "react";
import dynamic from "next/dynamic";
import { ResumeInfo, ResumeDataType } from '@/components/User/Dashboard/types';
import { OutlinedButton } from "@/styles/theme";
import { InternalLinks } from "@/content/Links";
import { getPercentage } from './Resume';
import style from "@/styles/typography-styles.module.css";

const DynamicCard = dynamic(
    () => import('@/components/User/Dashboard/ProfileCard'),
    { loading: () => <Skeleton variant="rectangular" sx={{ mb: "50px" }} width={320} height={440} /> }
)

interface Props {
    profile: ResumeInfo[];
    isopen?: boolean;
    LastKey?: lastkey;
}

interface Resume {
    profile: ResumeInfo[];
    LastKey: lastkey;
    realProfils: ResumeDataType[];
    TotalUsers: { count: number };
}

interface lastkey {
    Username: string;
}

const ProfilesPage = ({ profile, LastKey, realProfils, TotalUsers }: Resume) => {
    let LastEvaluatedKey = LastKey;

    return (
        <>
            <Box sx={{ mt: { xs: "32px", md: "64px" }, mx: { md: "40px", xs: "20px" } }}>
                <Box sx={{ display: "flex", alignItems: { xs: "flex-start", sm: "center" }, flexDirection: { xs: "column", sm: "row" } }}>
                    {/* <Typography variant="HeadlineLarge"
                        sx={{ maxWidth: `calc(100vw - 100px)` }}
                        noWrap> */}
                        <p className={style.HeadlineLarge}>
                            Most Active Developers </p>
                            {/* </Typography> */}
                    <Chip sx={{ backgroundColor: "surfacevariant.main", color: 'primary.main', fontWeight: "bold", ml: 2 }} label={`Total Developers - ${TotalUsers.count}`} />
                </Box>
                <Grid container sx={{ justifyContent: "space-around", mb: 4 }}>
                    {realProfils.map((pro, i) => {
                        const percentage = getPercentage(pro);
                        return (
                            <Grid item key={i + pro.username}>
                                <div onClick={() => { window.location.href = `${InternalLinks.USER_DASHBOARD}${pro.username}` }}>
                                    <DynamicCard percentage={percentage} data={pro.info} />
                                </div>
                            </Grid>
                        );
                    })}
                </Grid>
                {/* <Box sx={{ margin: "20px 0", display: "flex", justifyContent: "center" }}>
                    <OutlinedButton variant="outlined"
                        onClick={() => handleLoad()}
                    >Load More</OutlinedButton>
                </Box> */}
            </Box>
            <AllProfiles profile={profile} LastKey={LastEvaluatedKey} />
        </>
    )
}


const AllProfiles = ({ profile, LastKey }: Props) => {
    const [prof, setProf] = React.useState(profile)
    const [comp, setComp] = React.useState(
        <Grid container>
            {prof.map((pro, i) => {
                return (
                    <Grid item xs={12} sm={6} md={4} key={i + pro.Username}>
                        <DynamicCard data={pro} />
                    </Grid>
                );
            })}
        </Grid>
    )

    React.useEffect(() => {
        setComp(<Grid container>
            {prof.map((pro, i) => {
                return (
                    <Grid item xs={12} sm={6} md={4} key={i + pro.Username}>
                        <DynamicCard data={pro} />
                    </Grid>
                );
            })}
        </Grid>)
    }, [prof]);

    const handleLoad = async () => {
        let Prof = await fetch(
            process.env.NEXT_PUBLIC_API_URL + "/fest/moreDevProfileInfoList",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify({ LastEvaluatedKey: LastKey })
            }
        );
        if (Prof.ok) {
            const { Profiles, LastEvaluatedKey } = await Prof.json();
            profile.push(...Profiles)
            setProf([...profile]);
            LastKey = LastEvaluatedKey;
        }
    }

    return (
        <>
            {prof ? (
                <Box sx={{ mt: "64px", ml: "40px" }}>
                    {/* <Typography variant="HeadlineLarge" paragraph
                        sx={{ flexGrow: 1, maxWidth: `calc(100vw - 100px)` }}
                        noWrap> */}
                        <p className={style.HeadlineLarge}>
                            More Developers </p>
                            {/* </Typography> */}
                    {comp}
                    <Grid container>
                        {prof.map((pro, i) => {
                            return (
                                // i < 9 &&
                                <Grid item xs={12} sm={6} md={4} key={i + pro.Username}
                                // onClick={() => { GetProfile(pro.Username) }}
                                >
                                    <DynamicCard data={pro} />
                                </Grid>
                            );
                        })}
                    </Grid>
                    {LastKey &&
                        <Box sx={{ margin: "20px 0", display: "flex", justifyContent: "center" }}>
                            <OutlinedButton variant="outlined"
                                onClick={() => handleLoad()}
                            >Load More</OutlinedButton>
                        </Box>
                    }
                </Box>
            ) : (
                // <Typography variant="LabelLarge">
                <p className={style.LabelLarge}>
                    Error!! No Profile Found </p>
                    // </Typography>
            )}
        </>
    )
}

// const SingleProfile = ({ profile, isopen, setopen }: Props) => {
//     console.log(profile, isopen, setopen)

//     return (
//         <>
//             {profile ? (
//                 <>
//                     <Box>
//                         <Stack direction="row" alignItems="center" sx={{ mb: 2 }}>
//                             <IconButton onClick={() => setopen(false)} size="large" color="primary"><HiOutlineArrowCircleLeft /></IconButton>
//                             <Typography variant="HeadlineMedium">You are viewing {data.info.name} Details</Typography>
//                         </Stack>
//                         <ResumeData ResumeData={data} readOnly langs={[]} score={{ leetCodeScore: 0, githubScore: 0, cometScore: 0 }} />
//                     </Box>
//                 </>
//             ) : (
//                 <Typography variant="LabelLarge">Error!! No Profile Found</Typography>
//             )}
//         </>
//     )
// }





export default ProfilesPage;