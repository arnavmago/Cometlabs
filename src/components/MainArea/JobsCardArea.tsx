// this component will return Jobs cards, ready to use anywhere.;
import ShowcaseBig from "@/components/Carousels/ShowcaseBig";
import Image from "next/image";
import { Tag } from "@/components/Fest/Dashboard/AllSubmission";
// import { Button, Grid, IconButton, Paper, Box, Stack, Typography } from "@mui/material";
import { Button, Grid, IconButton, Paper, Box, Stack} from "@mui/material";
import { styled } from "@mui/system";
import { GrUpdate } from "react-icons/gr";
import { FaIndustry, FaLocationArrow } from "react-icons/fa";
import { HiOutlineCalendar, HiOutlineLocationMarker } from "react-icons/hi";
import style from "@/styles/typography-styles.module.css";


type TechTag = {
  title: string;
};

// job type (what all we require as inputs)
export type JOB = {
  company: string;
  imageUrl: string;
  companyUrl: string;
  role: string;
  description: string;
  tags: TechTag[];
  id: string;
  remote: string;
  fulltime: string;
  industry: string;
  stipend: string;
};

const CardContainer = styled(Paper)({
  width: 320,
  minHeight: 520,
  padding: "20px 20px 28px",
  margin: "20px 0px",
});


// UI of single Job Card
function JobCard(job: JOB) {
  const companyUrl = job.companyUrl || "#";
  return (
    <CardContainer elevation={1}>
      <Stack spacing={2} sx={{ height: "100%" }}>
        <Stack direction="row" spacing={2} alignItems={"center"} justifyContent="space-between">
          <Stack>
            <Stack direction="row">
              {/* <Typography variant="LabelLarge" sx={{ fontWeight: 500 }}>
                {job.company}
              </Typography> */}
              <p className={style.LabelLarge} style={{fontWeight:"500"}}>{job.company}</p>
              <IconButton href={companyUrl} color="primary"><FaLocationArrow style={{ fontSize: "1rem" }} /></IconButton>
            </Stack>
            {/* <Typography variant="LabelLarge" color="primary">
              {job.role}
            </Typography> */}
            <p className={style.LabelLarge} style={{color:"primary"}}>{job.role}</p>
          </Stack>
          <Image
            src={job.imageUrl}
            alt="company logo"
            height={60}
            width={60}
          />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Stack direction="row">
            <HiOutlineLocationMarker size="1rem" />
            {/* <Typography variant="LabelLarge">
              {job.remote}
            </Typography> */}
            <p className={style.LabelLarge} >{job.remote}</p>
          </Stack>
          <Stack direction="row">
            <HiOutlineCalendar style={{ fontSize: "1rem" }} />
            {/* <Typography variant="LabelLarge">
              {job.fulltime}
            </Typography> */}
            <p className={style.LabelLarge} >{job.fulltime}</p>
          </Stack>
          <Stack direction="row" sx={{ display: "flex" }}>
            <FaIndustry size="1rem" />
            {/* <Typography variant="LabelLarge">
              {job.industry}
            </Typography> */}
            <p className={style.LabelLarge} >{job.industry}</p>
          </Stack>
        </Stack>
        <Grid container rowGap={1} sx={{ justifyContent: "space-between", height: "90px" }}>
          {job.tags?.map((tag, index) => (
            <Grid item xs="auto" key={tag.title + index}>
              <Tag label={tag.title} size="small" />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ overflow: "hidden", textOverflow: "ellipsis", maxHeight: "215px", }}>
          {/* <Typography variant={"LabelLarge"} >
            {job.description}
          </Typography> */}
          <p className={style.LabelLarge}>{job.description}</p>
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Box sx={{ display: "flex" }} alignItems="center">
            <IconButton color="primary" size="small"><GrUpdate style={{ fontSize: "12px" }} /></IconButton>
            {/* <Typography variant="LabelLarge">2 days ago</Typography> */}
            <p className={style.LabelLarge} >2 days ago</p>
          </Box>
          {/* <Typography variant="LabelLarge" color="primary">
            Stipend {job.stipend}/month
          </Typography> */}
          <p className={style.LabelLarge} style={{color:"primary"}}>Stipend{job.stipend}/month</p>
        </Stack>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          href={"https://bit.ly/comet2career"}
          target={"_blank"}
          sx={{ padding: "16px 24px" }}
        >
          {/* <Typography variant="LabelLarge" sx={{ lineHeight: "16px", fontWeight: 500 }}>Apply now</Typography> */}
          <p className={style.LabelLarge} style={{lineHeight:"16px",fontWeight:"500"}}>Apply now</p>
        </Button>
      </Stack>
    </CardContainer>
  );
}


// whole JObCardArea
const JobCardArea = () => {
  return (
    <ShowcaseBig
      title="Top Jobs on COMETLABS"
    >
      {/* passing job details for each job and returning a job card -> which contains cards espicially designed for job */}
      {JOBS.map((job) => {
        return <JobCard {...job} key={job.id + "-top-jobs"} />;
      })}
    </ShowcaseBig>
  );
}

export default JobCardArea;

// hard coded jobs details which is being passed as props to jobs card.
const JOBS: JOB[] = [
  {
    id: "VoidPeakGames",
    company: "Void Peak Games",
    companyUrl: "",
    role: "Game Programmer",
    imageUrl: "/Job_Icons/VoidPeakGames.svg",
    description:
      "We are a team of enthusiastic gamers turned game creators trying to live our passion and bring our ideas to life. Our mission is to create immersive, thought-provoking, and challenging gameplay that will thrill and inspire generations of new and old gamers alike. The team at Voidpeak ",
    tags: [
      { title: "C++" },
      { title: "Unreal Engine" },
      { title: "C#" },
      { title: "Object-Oriented Design" },
      { title: "Unity 3D" },
      { title: "Design Pattern" },
    ],
    remote: "Remote",
    fulltime: "Full-Time",
    industry: "Technology",
    stipend: "1Lakh",
  },
  {
    id: "BlissExtracts",
    company: "Bliss Extracts",
    companyUrl: "",
    role: "Marketing Strategist",
    imageUrl: "/Job_Icons/BlissExtracts.svg",
    description:
      "We are looking for an enthusiastic Marketing Specialist to help us in our overall marketing efforts. You will be an integral part of the development of marketing plans to reach targets from brand awareness to product promotion. The goal is to deliver effective marketing programs that will help our reputation and growth.",
    tags: [
      { title: "Event Management" },
      { title: "Advertising" },
      { title: "Product" },
      { title: "Branding" },
      { title: "Market Research" },
      { title: "Promotion" },
    ],
    remote: "In-Office",
    fulltime: "Full-Time",
    industry: "Retail",
    stipend: "8K",
  },
  {
    id: "VoidPeakGames",
    company: "Void Peak Games",
    companyUrl: "",
    role: "Script Writer",
    imageUrl: "/Job_Icons/VoidPeakGames.svg",
    description:
      "As a Scriptwriter at Voidpeak Games, you will create through words, experiences that players can fully immerse themselves into. You’re responsible for developing the narrative aspects that make up the player experience. Be it a story or gameplay-focused game, you craft content that gives purpose to the people, places, and things within it, and ...",
    tags: [
      { title: "Script Writing" },
      { title: "Creative Writing" },
      { title: "Gaming" },
      { title: "Content Creation" },
      { title: "Communication Skills" },
      // { title: "Node.JS" },
    ],
    remote: "Remote",
    fulltime: "Full-Time",
    industry: "Technology",
    stipend: "1Lakh",
  },

  {
    id: "Product Labs",
    company: "Product Labs",
    companyUrl: "",
    role: "Frontend Developer",
    imageUrl: "/Job_Icons/productlabs.png",
    description:
      "We're looking for an experienced frontend developer who can lead a team and collaborate with the design and business team for implementing visual and interactive elements that users engage with through their web browser when using a web application. ",
    tags: [
      { title: "Typescript" },
      { title: "Redux" },
      { title: "React.js" },
      { title: "Node.js" },
      { title: "CSS animations" },
      { title: "Vue.js" },
    ],
    remote: "Remote",
    fulltime: "Full-Time",
    industry: "Technology",
    stipend: "25k",
  },
  {
    id: "Zobaze",
    company: "Zobaze",
    companyUrl: "",
    role: "Android Developer",
    imageUrl: "/Job_Icons/zobaze.png",
    description:
      "We are looking for a self initiated developer who could write clean, efficient codes, monitor performance of live apps and work on optimizing them. Collaborating with cross-functional teams to define and design new features.Staying up to date with new mobile technology trends, applications, and protocols.  ",
    tags: [
      { title: "Flutter" },
      { title: "API" },
      { title: "Node.js" },
      { title: "Firebase" },
      { title: "Dart" },
      { title: "AWS" },
      { title: "Testing" }
    ],
    remote: "Remote",
    fulltime: "Full-Time",
    industry: "Technology",
    stipend: "30k",
  },
];

