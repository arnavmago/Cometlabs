// import FaqComponent from "@/components/MainArea/Faq";
// import JobArea from "@/components/MainArea/JobArea";
// import JobCardArea from "@/components/MainArea/JobsCardArea";
import JobsBanner from "@/components/Banners/CareersBanner";
import Page from "@/layout/Page";
import Head from "next/head";
import * as React from "react";
import {
  HiOutlineBriefcase,
  HiOutlineCreditCard,
  HiOutlineTag,
} from "react-icons/hi";
import ReactMarkdown from "react-markdown";
import { Tag } from "@/components/event/TagsReadOnly";
import style from "@/styles/markdown-styles.module.css";
import {
  Box,
  // Button,
  Grid,
  // CardContainer,
  // Skeleton,
  Stack,
  Typography, Tabs, Tab,
} from "@mui/material";
import { CardContainer, FilledButton } from "@/styles/theme";
// import { styled } from "@mui/system";


function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pb: 5 }}>{children}</Box>}
    </div>
  );
}

const Jobs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Head>
        <title>HIRE DEVS | COMETLABS</title>
      </Head>
      <Page>
        <JobsBanner />
        <Tabs variant="scrollable" value={value} onChange={handleChange}>
          <Tab label="Backend developer Senior" sx={{ fontSize: "1rem" }} {...a11yProps(0)} />
          <Tab label="Backend developer Junior" sx={{ fontSize: "1rem" }} {...a11yProps(1)} />
          <Tab label="Backend developer Intern" sx={{ fontSize: "1rem" }} {...a11yProps(2)} />
          <Tab label="Frontend developer Senior" sx={{ fontSize: "1rem" }} {...a11yProps(3)} />
          <Tab label="Frontend developer Junior" sx={{ fontSize: "1rem" }} {...a11yProps(4)} />
          <Tab label="Frontend developer Intern" sx={{ fontSize: "1rem" }} {...a11yProps(5)} />
          <Tab label="Dev-Ops engineer Senior" sx={{ fontSize: "1rem" }} {...a11yProps(6)} />
          <Tab label="Dev-Ops engineer Senior" sx={{ fontSize: "1rem" }} {...a11yProps(7)} />
          <Tab label="Problem setter and tester Senior" sx={{ fontSize: "1rem" }} {...a11yProps(8)} />
          <Tab label="Problem setter and tester Junior" sx={{ fontSize: "1rem" }} {...a11yProps(9)} />
          <Tab label="Problem setter and tester Intern" sx={{ fontSize: "1rem" }} {...a11yProps(10)} />
          <Tab label="AI/ML Data Scientist Senior" sx={{ fontSize: "1rem" }} {...a11yProps(11)} />
          <Tab label="AI/ML Data Scientist Junior" sx={{ fontSize: "1rem" }} {...a11yProps(12)} />
          <Tab label="Developer Relations Intern" sx={{ fontSize: "1rem" }} {...a11yProps(13)} />
          <Tab label="Graphic Designer" sx={{ fontSize: "1rem" }} {...a11yProps(14)} />
          <Tab label="Business Developer" sx={{ fontSize: "1rem" }} {...a11yProps(15)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <CardContainer elevation={1} sx={{ padding: "30px 40px" }}>
                <Typography variant="LabelLarge">
                  Backend Developer (Senior)
                </Typography>
                <Box className="content" sx={{ mt: 4 }}>
                  <ReactMarkdown className={style.reactMarkDown}>
                    {JOB_DESC_back_senior}
                  </ReactMarkdown>
                </Box>
              </CardContainer>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center" }}
                    gutterBottom
                  >
                    <HiOutlineCreditCard
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Interested in this job?"}
                  </Typography>
                  <Box className="content" sx={{ mt: 2 }}>
                    <ReactMarkdown className={style.reactMarkDown}>
                      {JOB_requirement_back}
                    </ReactMarkdown>
                  </Box>
                  <FilledButton variant="contained" href="https://forms.gle/uZuU5AaaPDX8LJf67" fullWidth sx={{ mt: 1 }}>
                    <Typography variant="LabelLarge">Apply Now</Typography>
                  </FilledButton>
                </CardContainer>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center", mb: 2 }}
                    gutterBottom
                  >
                    <HiOutlineTag
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Technologies Focussed"}
                  </Typography>
                  <Grid container spacing={1}>
                    {TECH_TAGS_back?.map((tag, index) => (
                      <Grid item xs="auto" key={tag.title + index}>
                        <Tag label={tag.title} />
                      </Grid>
                    ))}
                  </Grid>
                </CardContainer>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center", mb: 2 }}
                    gutterBottom
                  >
                    <HiOutlineBriefcase
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Career Focussed"}
                  </Typography>
                  <Grid container spacing={1}>
                    {CAREER_TAGS_back?.map((tag, index) => (
                      <Grid item xs="auto" key={tag.title + index}>
                        <Tag label={tag.title} />
                      </Grid>
                    ))}
                  </Grid>
                </CardContainer>
              </Stack>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <CardContainer elevation={1} sx={{ padding: "30px 40px" }}>
                <Typography variant="LabelLarge">
                  Backend Developer (Junior)
                </Typography>
                <Box className="content" sx={{ mt: 4 }}>
                  <ReactMarkdown className={style.reactMarkDown}>
                    {JOB_DESC_back_junior}
                  </ReactMarkdown>
                </Box>
              </CardContainer>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center" }}
                    gutterBottom
                  >
                    <HiOutlineCreditCard
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Interested in this job?"}
                  </Typography>
                  <Box className="content" sx={{ mt: 2 }}>
                    <ReactMarkdown className={style.reactMarkDown}>
                      {JOB_requirement_back}
                    </ReactMarkdown>
                  </Box>
                  <FilledButton variant="contained" href="https://forms.gle/uZuU5AaaPDX8LJf67" fullWidth sx={{ mt: 1 }}>
                    <Typography variant="LabelLarge">Apply Now</Typography>
                  </FilledButton>
                </CardContainer>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center", mb: 2 }}
                    gutterBottom
                  >
                    <HiOutlineTag
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Technologies Focussed"}
                  </Typography>
                  <Grid container spacing={1}>
                    {TECH_TAGS_back?.map((tag, index) => (
                      <Grid item xs="auto" key={tag.title + index}>
                        <Tag label={tag.title} />
                      </Grid>
                    ))}
                  </Grid>
                </CardContainer>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center", mb: 2 }}
                    gutterBottom
                  >
                    <HiOutlineBriefcase
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Career Focussed"}
                  </Typography>
                  <Grid container spacing={1}>
                    {CAREER_TAGS_back?.map((tag, index) => (
                      <Grid item xs="auto" key={tag.title + index}>
                        <Tag label={tag.title} />
                      </Grid>
                    ))}
                  </Grid>
                </CardContainer>
              </Stack>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <CardContainer elevation={1} sx={{ padding: "30px 40px" }}>
                <Typography variant="LabelLarge">
                  Backend Developer (Intern)
                </Typography>
                <Box className="content" sx={{ mt: 4 }}>
                  <ReactMarkdown className={style.reactMarkDown}>
                    {JOB_DESC_back_intern}
                  </ReactMarkdown>
                </Box>
              </CardContainer>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center" }}
                    gutterBottom
                  >
                    <HiOutlineCreditCard
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Interested in this job?"}
                  </Typography>
                  <Box className="content" sx={{ mt: 2 }}>
                    <ReactMarkdown className={style.reactMarkDown}>
                      {JOB_requirement_back}
                    </ReactMarkdown>
                  </Box>
                  <FilledButton variant="contained" href="https://forms.gle/uZuU5AaaPDX8LJf67" fullWidth sx={{ mt: 1 }}>
                    <Typography variant="LabelLarge">Apply Now</Typography>
                  </FilledButton>
                </CardContainer>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center", mb: 2 }}
                    gutterBottom
                  >
                    <HiOutlineTag
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Technologies Focussed"}
                  </Typography>
                  <Grid container spacing={1}>
                    {TECH_TAGS_back?.map((tag, index) => (
                      <Grid item xs="auto" key={tag.title + index}>
                        <Tag label={tag.title} />
                      </Grid>
                    ))}
                  </Grid>
                </CardContainer>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center", mb: 2 }}
                    gutterBottom
                  >
                    <HiOutlineBriefcase
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Career Focussed"}
                  </Typography>
                  <Grid container spacing={1}>
                    {CAREER_TAGS_back?.map((tag, index) => (
                      <Grid item xs="auto" key={tag.title + index}>
                        <Tag label={tag.title} />
                      </Grid>
                    ))}
                  </Grid>
                </CardContainer>
              </Stack>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={3} >
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <CardContainer elevation={1} sx={{ padding: "30px 40px" }}>
                <Typography variant="LabelLarge">
                  Frontend Developer (Senior)
                </Typography>
                <Box className="content" sx={{ mt: 4 }}>
                  <ReactMarkdown className={style.reactMarkDown}>
                    {JOB_DESC_front_senior}
                  </ReactMarkdown>
                </Box>
              </CardContainer>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center" }}
                    gutterBottom
                  >
                    <HiOutlineCreditCard
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Interested in this job?"}
                  </Typography>
                  <Box className="content" sx={{ mt: 2 }}>
                    <ReactMarkdown className={style.reactMarkDown}>
                      {JOB_requirement_front}
                    </ReactMarkdown>
                  </Box>
                  <FilledButton variant="contained" href="https://forms.gle/UkZ43kRAqcxwJeDX8" fullWidth sx={{ mt: 1 }}>
                    <Typography variant="LabelLarge">Apply Now</Typography>
                  </FilledButton>
                </CardContainer>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center", mb: 2 }}
                    gutterBottom
                  >
                    <HiOutlineTag
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Technologies Focussed"}
                  </Typography>
                  <Grid container spacing={1}>
                    {TECH_TAGS_front?.map((tag, index) => (
                      <Grid item xs="auto" key={tag.title + index}>
                        <Tag label={tag.title} />
                      </Grid>
                    ))}
                  </Grid>
                </CardContainer>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center", mb: 2 }}
                    gutterBottom
                  >
                    <HiOutlineBriefcase
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Career Focussed"}
                  </Typography>
                  <Grid container spacing={1}>
                    {CAREER_TAGS_front?.map((tag, index) => (
                      <Grid item xs="auto" key={tag.title + index}>
                        <Tag label={tag.title} />
                      </Grid>
                    ))}
                  </Grid>
                </CardContainer>
              </Stack>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={4} >
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <CardContainer elevation={1} sx={{ padding: "30px 40px" }}>
                <Typography variant="LabelLarge">
                  Frontend Developer (Junior)
                </Typography>
                <Box className="content" sx={{ mt: 4 }}>
                  <ReactMarkdown className={style.reactMarkDown}>
                    {JOB_DESC_front_junior}
                  </ReactMarkdown>
                </Box>
              </CardContainer>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center" }}
                    gutterBottom
                  >
                    <HiOutlineCreditCard
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Interested in this job?"}
                  </Typography>
                  <Box className="content" sx={{ mt: 2 }}>
                    <ReactMarkdown className={style.reactMarkDown}>
                      {JOB_requirement_front}
                    </ReactMarkdown>
                  </Box>
                  <FilledButton variant="contained" href="https://forms.gle/UkZ43kRAqcxwJeDX8" fullWidth sx={{ mt: 1 }}>
                    <Typography variant="LabelLarge">Apply Now</Typography>
                  </FilledButton>
                </CardContainer>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center", mb: 2 }}
                    gutterBottom
                  >
                    <HiOutlineTag
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Technologies Focussed"}
                  </Typography>
                  <Grid container spacing={1}>
                    {TECH_TAGS_front?.map((tag, index) => (
                      <Grid item xs="auto" key={tag.title + index}>
                        <Tag label={tag.title} />
                      </Grid>
                    ))}
                  </Grid>
                </CardContainer>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center", mb: 2 }}
                    gutterBottom
                  >
                    <HiOutlineBriefcase
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Career Focussed"}
                  </Typography>
                  <Grid container spacing={1}>
                    {CAREER_TAGS_front?.map((tag, index) => (
                      <Grid item xs="auto" key={tag.title + index}>
                        <Tag label={tag.title} />
                      </Grid>
                    ))}
                  </Grid>
                </CardContainer>
              </Stack>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={5} >
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <CardContainer elevation={1} sx={{ padding: "30px 40px" }}>
                <Typography variant="LabelLarge">
                  Frontend Developer (Intern)
                </Typography>
                <Box className="content" sx={{ mt: 4 }}>
                  <ReactMarkdown className={style.reactMarkDown}>
                    {JOB_DESC_front_intern}
                  </ReactMarkdown>
                </Box>
              </CardContainer>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center" }}
                    gutterBottom
                  >
                    <HiOutlineCreditCard
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Interested in this job?"}
                  </Typography>
                  <Box className="content" sx={{ mt: 2 }}>
                    <ReactMarkdown className={style.reactMarkDown}>
                      {JOB_requirement_front}
                    </ReactMarkdown>
                  </Box>
                  <FilledButton variant="contained" href="https://forms.gle/UkZ43kRAqcxwJeDX8" fullWidth sx={{ mt: 1 }}>
                    <Typography variant="LabelLarge">Apply Now</Typography>
                  </FilledButton>
                </CardContainer>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center", mb: 2 }}
                    gutterBottom
                  >
                    <HiOutlineTag
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Technologies Focussed"}
                  </Typography>
                  <Grid container spacing={1}>
                    {TECH_TAGS_front?.map((tag, index) => (
                      <Grid item xs="auto" key={tag.title + index}>
                        <Tag label={tag.title} />
                      </Grid>
                    ))}
                  </Grid>
                </CardContainer>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center", mb: 2 }}
                    gutterBottom
                  >
                    <HiOutlineBriefcase
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Career Focussed"}
                  </Typography>
                  <Grid container spacing={1}>
                    {CAREER_TAGS_front?.map((tag, index) => (
                      <Grid item xs="auto" key={tag.title + index}>
                        <Tag label={tag.title} />
                      </Grid>
                    ))}
                  </Grid>
                </CardContainer>
              </Stack>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={6}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <CardContainer elevation={1} sx={{ padding: "30px 40px" }}>
                <Typography variant="LabelLarge">
                  Dev-Ops Engineer (Senior)
                </Typography>
                <Box className="content" sx={{ mt: 4 }}>
                  <ReactMarkdown className={style.reactMarkDown}>
                    {JOB_DESC_dev_senior}
                  </ReactMarkdown>
                </Box>
              </CardContainer>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center" }}
                    gutterBottom
                  >
                    <HiOutlineCreditCard
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Interested in this job?"}
                  </Typography>
                  <Box className="content" sx={{ mt: 2 }}>
                    <ReactMarkdown className={style.reactMarkDown}>
                      {JOB_requirement_dev}
                    </ReactMarkdown>
                  </Box>
                  <FilledButton variant="contained" href="https://forms.gle/asxuYWtpVqZNYSGi6" fullWidth sx={{ mt: 1 }}>
                    <Typography variant="LabelLarge">Apply Now</Typography>
                  </FilledButton>
                </CardContainer>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center", mb: 2 }}
                    gutterBottom
                  >
                    <HiOutlineTag
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Technologies Focussed"}
                  </Typography>
                  <Grid container spacing={1}>
                    {TECH_TAGS_dev?.map((tag, index) => (
                      <Grid item xs="auto" key={tag.title + index}>
                        <Tag label={tag.title} />
                      </Grid>
                    ))}
                  </Grid>
                </CardContainer>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center", mb: 2 }}
                    gutterBottom
                  >
                    <HiOutlineBriefcase
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Career Focussed"}
                  </Typography>
                  <Grid container spacing={1}>
                    {CAREER_TAGS_dev?.map((tag, index) => (
                      <Grid item xs="auto" key={tag.title + index}>
                        <Tag label={tag.title} />
                      </Grid>
                    ))}
                  </Grid>
                </CardContainer>
              </Stack>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={7}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <CardContainer elevation={1} sx={{ padding: "30px 40px" }}>
                <Typography variant="LabelLarge">
                  Dev-Ops Engineer (Junior)
                </Typography>
                <Box className="content" sx={{ mt: 4 }}>
                  <ReactMarkdown className={style.reactMarkDown}>
                    {JOB_DESC_dev_junior}
                  </ReactMarkdown>
                </Box>
              </CardContainer>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center" }}
                    gutterBottom
                  >
                    <HiOutlineCreditCard
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Interested in this job?"}
                  </Typography>
                  <Box className="content" sx={{ mt: 2 }}>
                    <ReactMarkdown className={style.reactMarkDown}>
                      {JOB_requirement_dev}
                    </ReactMarkdown>
                  </Box>
                  <FilledButton variant="contained" href="https://forms.gle/asxuYWtpVqZNYSGi6" fullWidth sx={{ mt: 1 }}>
                    <Typography variant="LabelLarge">Apply Now</Typography>
                  </FilledButton>
                </CardContainer>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center", mb: 2 }}
                    gutterBottom
                  >
                    <HiOutlineTag
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Technologies Focussed"}
                  </Typography>
                  <Grid container spacing={1}>
                    {TECH_TAGS_dev?.map((tag, index) => (
                      <Grid item xs="auto" key={tag.title + index}>
                        <Tag label={tag.title} />
                      </Grid>
                    ))}
                  </Grid>
                </CardContainer>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center", mb: 2 }}
                    gutterBottom
                  >
                    <HiOutlineBriefcase
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Career Focussed"}
                  </Typography>
                  <Grid container spacing={1}>
                    {CAREER_TAGS_dev?.map((tag, index) => (
                      <Grid item xs="auto" key={tag.title + index}>
                        <Tag label={tag.title} />
                      </Grid>
                    ))}
                  </Grid>
                </CardContainer>
              </Stack>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={8}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <CardContainer elevation={1} sx={{ padding: "30px 40px" }}>
                <Typography variant="LabelLarge">
                  Problem Setter and Tester (Senior)
                </Typography>
                <Box className="content" sx={{ mt: 4 }}>
                  <ReactMarkdown className={style.reactMarkDown}>
                    {JOB_DESC_tester_senior}
                  </ReactMarkdown>
                </Box>
              </CardContainer>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center" }}
                    gutterBottom
                  >
                    <HiOutlineCreditCard
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Interested in this job?"}
                  </Typography>
                  <Box className="content" sx={{ mt: 2 }}>
                    <ReactMarkdown className={style.reactMarkDown}>
                      {JOB_requirement_dev}
                    </ReactMarkdown>
                  </Box>
                  <FilledButton variant="contained" href="https://forms.gle/asxuYWtpVqZNYSGi6" fullWidth sx={{ mt: 1 }}>
                    <Typography variant="LabelLarge">Apply Now</Typography>
                  </FilledButton>
                </CardContainer>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center", mb: 2 }}
                    gutterBottom
                  >
                    <HiOutlineTag
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Technologies Focussed"}
                  </Typography>
                  <Grid container spacing={1}>
                    {TECH_TAGS_dev?.map((tag, index) => (
                      <Grid item xs="auto" key={tag.title + index}>
                        <Tag label={tag.title} />
                      </Grid>
                    ))}
                  </Grid>
                </CardContainer>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center", mb: 2 }}
                    gutterBottom
                  >
                    <HiOutlineBriefcase
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Career Focussed"}
                  </Typography>
                  <Grid container spacing={1}>
                    {CAREER_TAGS_dev?.map((tag, index) => (
                      <Grid item xs="auto" key={tag.title + index}>
                        <Tag label={tag.title} />
                      </Grid>
                    ))}
                  </Grid>
                </CardContainer>
              </Stack>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={9}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <CardContainer elevation={1} sx={{ padding: "30px 40px" }}>
                <Typography variant="LabelLarge">
                  Problem Setter and Tester (Junior)
                </Typography>
                <Box className="content" sx={{ mt: 4 }}>
                  <ReactMarkdown className={style.reactMarkDown}>
                    {JOB_DESC_tester_junior}
                  </ReactMarkdown>
                </Box>
              </CardContainer>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center" }}
                    gutterBottom
                  >
                    <HiOutlineCreditCard
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Interested in this job?"}
                  </Typography>
                  <Box className="content" sx={{ mt: 2 }}>
                    <ReactMarkdown className={style.reactMarkDown}>
                      {JOB_requirement_dev}
                    </ReactMarkdown>
                  </Box>
                  <FilledButton variant="contained" href="https://forms.gle/asxuYWtpVqZNYSGi6" fullWidth sx={{ mt: 1 }}>
                    <Typography variant="LabelLarge">Apply Now</Typography>
                  </FilledButton>
                </CardContainer>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center", mb: 2 }}
                    gutterBottom
                  >
                    <HiOutlineTag
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Technologies Focussed"}
                  </Typography>
                  <Grid container spacing={1}>
                    {TECH_TAGS_dev?.map((tag, index) => (
                      <Grid item xs="auto" key={tag.title + index}>
                        <Tag label={tag.title} />
                      </Grid>
                    ))}
                  </Grid>
                </CardContainer>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center", mb: 2 }}
                    gutterBottom
                  >
                    <HiOutlineBriefcase
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Career Focussed"}
                  </Typography>
                  <Grid container spacing={1}>
                    {CAREER_TAGS_dev?.map((tag, index) => (
                      <Grid item xs="auto" key={tag.title + index}>
                        <Tag label={tag.title} />
                      </Grid>
                    ))}
                  </Grid>
                </CardContainer>
              </Stack>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={10}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <CardContainer elevation={1} sx={{ padding: "30px 40px" }}>
                <Typography variant="LabelLarge">
                  Problem Setter and Tester (Intern)
                </Typography>
                <Box className="content" sx={{ mt: 4 }}>
                  <ReactMarkdown className={style.reactMarkDown}>
                    {JOB_DESC_tester_intern}
                  </ReactMarkdown>
                </Box>
              </CardContainer>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center" }}
                    gutterBottom
                  >
                    <HiOutlineCreditCard
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Interested in this job?"}
                  </Typography>
                  <Box className="content" sx={{ mt: 2 }}>
                    <ReactMarkdown className={style.reactMarkDown}>
                      {JOB_requirement_dev}
                    </ReactMarkdown>
                  </Box>
                  <FilledButton variant="contained" href="https://forms.gle/asxuYWtpVqZNYSGi6" fullWidth sx={{ mt: 1 }}>
                    <Typography variant="LabelLarge">Apply Now</Typography>
                  </FilledButton>
                </CardContainer>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center", mb: 2 }}
                    gutterBottom
                  >
                    <HiOutlineTag
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Technologies Focussed"}
                  </Typography>
                  <Grid container spacing={1}>
                    {TECH_TAGS_dev?.map((tag, index) => (
                      <Grid item xs="auto" key={tag.title + index}>
                        <Tag label={tag.title} />
                      </Grid>
                    ))}
                  </Grid>
                </CardContainer>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center", mb: 2 }}
                    gutterBottom
                  >
                    <HiOutlineBriefcase
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Career Focussed"}
                  </Typography>
                  <Grid container spacing={1}>
                    {CAREER_TAGS_dev?.map((tag, index) => (
                      <Grid item xs="auto" key={tag.title + index}>
                        <Tag label={tag.title} />
                      </Grid>
                    ))}
                  </Grid>
                </CardContainer>
              </Stack>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={11}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <CardContainer elevation={1} sx={{ padding: "30px 40px" }}>
                <Typography variant="LabelLarge">
                  AI/ML Data Scientist (Senior)
                </Typography>
                <Box className="content" sx={{ mt: 4 }}>
                  <ReactMarkdown className={style.reactMarkDown}>
                    {JOB_DESC_AIML_senior}
                  </ReactMarkdown>
                </Box>
              </CardContainer>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center" }}
                    gutterBottom
                  >
                    <HiOutlineCreditCard
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Interested in this job?"}
                  </Typography>
                  <Box className="content" sx={{ mt: 2 }}>
                    <ReactMarkdown className={style.reactMarkDown}>
                      {JOB_requirement_dev}
                    </ReactMarkdown>
                  </Box>
                  <FilledButton variant="contained" href="https://forms.gle/asxuYWtpVqZNYSGi6" fullWidth sx={{ mt: 1 }}>
                    <Typography variant="LabelLarge">Apply Now</Typography>
                  </FilledButton>
                </CardContainer>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center", mb: 2 }}
                    gutterBottom
                  >
                    <HiOutlineTag
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Technologies Focussed"}
                  </Typography>
                  <Grid container spacing={1}>
                    {TECH_TAGS_dev?.map((tag, index) => (
                      <Grid item xs="auto" key={tag.title + index}>
                        <Tag label={tag.title} />
                      </Grid>
                    ))}
                  </Grid>
                </CardContainer>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center", mb: 2 }}
                    gutterBottom
                  >
                    <HiOutlineBriefcase
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Career Focussed"}
                  </Typography>
                  <Grid container spacing={1}>
                    {CAREER_TAGS_dev?.map((tag, index) => (
                      <Grid item xs="auto" key={tag.title + index}>
                        <Tag label={tag.title} />
                      </Grid>
                    ))}
                  </Grid>
                </CardContainer>
              </Stack>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={12}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <CardContainer elevation={1} sx={{ padding: "30px 40px" }}>
                <Typography variant="LabelLarge">
                  AI/ML Data Scientist (Junior)
                </Typography>
                <Box className="content" sx={{ mt: 4 }}>
                  <ReactMarkdown className={style.reactMarkDown}>
                    {JOB_DESC_AIML_junior}
                  </ReactMarkdown>
                </Box>
              </CardContainer>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center" }}
                    gutterBottom
                  >
                    <HiOutlineCreditCard
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Interested in this job?"}
                  </Typography>
                  <Box className="content" sx={{ mt: 2 }}>
                    <ReactMarkdown className={style.reactMarkDown}>
                      {JOB_requirement_dev}
                    </ReactMarkdown>
                  </Box>
                  <FilledButton variant="contained" href="https://forms.gle/asxuYWtpVqZNYSGi6" fullWidth sx={{ mt: 1 }}>
                    <Typography variant="LabelLarge">Apply Now</Typography>
                  </FilledButton>
                </CardContainer>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center", mb: 2 }}
                    gutterBottom
                  >
                    <HiOutlineTag
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Technologies Focussed"}
                  </Typography>
                  <Grid container spacing={1}>
                    {TECH_TAGS_dev?.map((tag, index) => (
                      <Grid item xs="auto" key={tag.title + index}>
                        <Tag label={tag.title} />
                      </Grid>
                    ))}
                  </Grid>
                </CardContainer>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center", mb: 2 }}
                    gutterBottom
                  >
                    <HiOutlineBriefcase
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Career Focussed"}
                  </Typography>
                  <Grid container spacing={1}>
                    {CAREER_TAGS_dev?.map((tag, index) => (
                      <Grid item xs="auto" key={tag.title + index}>
                        <Tag label={tag.title} />
                      </Grid>
                    ))}
                  </Grid>
                </CardContainer>
              </Stack>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={13}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <CardContainer elevation={1} sx={{ padding: "30px 40px" }}>
                <Typography variant="LabelLarge">
                  Marketing Intern
                </Typography>
                <Box className="content" sx={{ mt: 4 }}>
                  <ReactMarkdown className={style.reactMarkDown}>
                    {JOB_DESC_market}
                  </ReactMarkdown>
                </Box>
              </CardContainer>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center" }}
                    gutterBottom
                  >
                    <HiOutlineCreditCard
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Interested in this job?"}
                  </Typography>
                  <Box className="content" sx={{ mt: 2 }}>
                    <ReactMarkdown className={style.reactMarkDown}>
                      {JOB_requirement_market}
                    </ReactMarkdown>
                  </Box>
                  <FilledButton variant="contained" href="https://forms.gle/nLeMf5QYsZ7TGvLHA" fullWidth sx={{ mt: 1 }}>
                    <Typography variant="LabelLarge">Apply Now</Typography>
                  </FilledButton>
                </CardContainer>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center", mb: 2 }}
                    gutterBottom
                  >
                    <HiOutlineTag
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Technologies Focussed"}
                  </Typography>
                  <Grid container spacing={1}>
                    {TECH_TAGS_market?.map((tag, index) => (
                      <Grid item xs="auto" key={tag.title + index}>
                        <Tag label={tag.title} />
                      </Grid>
                    ))}
                  </Grid>
                </CardContainer>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center", mb: 2 }}
                    gutterBottom
                  >
                    <HiOutlineBriefcase
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Career Focussed"}
                  </Typography>
                  <Grid container spacing={1}>
                    {CAREER_TAGS_market?.map((tag, index) => (
                      <Grid item xs="auto" key={tag.title + index}>
                        <Tag label={tag.title} />
                      </Grid>
                    ))}
                  </Grid>
                </CardContainer>
              </Stack>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={14}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <CardContainer elevation={1} sx={{ padding: "30px 40px" }}>
                <Typography variant="LabelLarge">
                  Graphic Designer
                </Typography>
                <Box className="content" sx={{ mt: 4 }}>
                  <ReactMarkdown className={style.reactMarkDown}>
                    {JOB_DESC_graphic}
                  </ReactMarkdown>
                </Box>
              </CardContainer>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center" }}
                    gutterBottom
                  >
                    <HiOutlineCreditCard
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Interested in this job?"}
                  </Typography>
                  <Box className="content" sx={{ mt: 2 }}>
                    <ReactMarkdown className={style.reactMarkDown}>
                      {JOB_requirement_graphic}
                    </ReactMarkdown>
                  </Box>
                  <FilledButton variant="contained" href="https://forms.gle/7kJKLabelLarge8fDVSt2Pyi9" fullWidth sx={{ mt: 1 }}>
                    <Typography variant="LabelLarge">Apply Now</Typography>
                  </FilledButton>
                </CardContainer>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center", mb: 2 }}
                    gutterBottom
                  >
                    <HiOutlineTag
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Technologies Focussed"}
                  </Typography>
                  <Grid container spacing={1}>
                    {TECH_TAGS_graphic?.map((tag, index) => (
                      <Grid item xs="auto" key={tag.title + index}>
                        <Tag label={tag.title} />
                      </Grid>
                    ))}
                  </Grid>
                </CardContainer>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center", mb: 2 }}
                    gutterBottom
                  >
                    <HiOutlineBriefcase
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Career Focussed"}
                  </Typography>
                  <Grid container spacing={1}>
                    {CAREER_TAGS_graphic?.map((tag, index) => (
                      <Grid item xs="auto" key={tag.title + index}>
                        <Tag label={tag.title} />
                      </Grid>
                    ))}
                  </Grid>
                </CardContainer>
              </Stack>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={15}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <CardContainer elevation={1} sx={{ padding: "30px 40px" }}>
                <Typography variant="LabelLarge">
                  Business Developer
                </Typography>
                <Box className="content" sx={{ mt: 4 }}>
                  <ReactMarkdown className={style.reactMarkDown}>
                    {JOB_DESC_business}
                  </ReactMarkdown>
                </Box>
              </CardContainer>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center" }}
                    gutterBottom
                  >
                    <HiOutlineCreditCard
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Interested in this job?"}
                  </Typography>
                  <Box className="content" sx={{ mt: 2 }}>
                    <ReactMarkdown className={style.reactMarkDown}>
                      {JOB_requirement_business}
                    </ReactMarkdown>
                  </Box>
                  <FilledButton variant="contained" href="https://forms.gle/3TN6SkE2HDsgDYH3A" fullWidth sx={{ mt: 1 }}>
                    <Typography variant="LabelLarge">Apply Now</Typography>
                  </FilledButton>
                </CardContainer>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center", mb: 2 }}
                    gutterBottom
                  >
                    <HiOutlineTag
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Technologies Focussed"}
                  </Typography>
                  <Grid container spacing={1}>
                    {TECH_TAGS_business?.map((tag, index) => (
                      <Grid item xs="auto" key={tag.title + index}>
                        <Tag label={tag.title} />
                      </Grid>
                    ))}
                  </Grid>
                </CardContainer>
                <CardContainer elevation={1} sx={{ padding: "20px" }}>
                  <Typography
                    variant="LabelLarge"
                    sx={{ display: "flex", alignItems: "center", mb: 2 }}
                    gutterBottom
                  >
                    <HiOutlineBriefcase
                      style={{ marginRight: "8px", fontSize: "1.5rem" }}
                    />
                    {"Career Focussed"}
                  </Typography>
                  <Grid container spacing={1}>
                    {CAREER_TAGS_business?.map((tag, index) => (
                      <Grid item xs="auto" key={tag.title + index}>
                        <Tag label={tag.title} />
                      </Grid>
                    ))}
                  </Grid>
                </CardContainer>
              </Stack>
            </Grid>
          </Grid>
        </TabPanel>
        {/* <JobCardArea /> */}
        {/* <JobArea />
        <FaqComponent /> */}
      </Page>
    </>
  );
}


const CAREER_TAGS_back = [
  { title: "Backend" },
  { title: "Research" },
  { title: "Scrapping" },
  { title: "AWS" },
];

const CAREER_TAGS_front = [
  { title: "Frontend" },
  { title: "Understanding Design" },
  { title: "Testing" },
];

const CAREER_TAGS_dev = [
  { title: "SDE" },
  { title: "Sr. SDE" },
  { title: "Developer" },
  { title: "Tech Architect" },
  { title: "Sr. SDET" },
];

const CAREER_TAGS_market = [
  { title: "SDE" },
  { title: "Sr. SDE" },
  { title: "Developer" },
  { title: "Tech Architect" },
  { title: "Sr. SDET" },
];

const CAREER_TAGS_graphic = [
  { title: "SDE" },
  { title: "Sr. SDE" },
  { title: "Developer" },
  { title: "Tech Architect" },
  { title: "Sr. SDET" },
];

const CAREER_TAGS_business = [
  { title: "SDE" },
  { title: "Sr. SDE" },
  { title: "Developer" },
  { title: "Tech Architect" },
  { title: "Sr. SDET" },
];

const TECH_TAGS_back = [
  { title: "NodeJs" },
  { title: "ExpressJS" },
  { title: "AWS" },
  { title: "Webhooks" },
  { title: "Docker" },
];

const TECH_TAGS_front = [
  { title: "TypeScript" },
  { title: "NEXT" },
  { title: "ReactJS" },
  { title: "MUI" },
  { title: "UI & UX design" },
  { title: "GraphQL" },
  { title: "Jest" },
  { title: "figma/framer" },
];

const TECH_TAGS_dev = [
  { title: "Automation" },
  { title: "Coding" },
  { title: "Scripting" },
  { title: "Cloud" },
  { title: "Testing" },
];

const TECH_TAGS_market = [
  { title: "Communication skills" },
  { title: "Techniques" },
  { title: "Promotion" },
  { title: "Research" },
  { title: "SEO" },
];

const TECH_TAGS_graphic = [
  { title: "Illustrator" },
  { title: "UI/UX Design" },
  { title: "Photoshop" },
  { title: "Filmora" },
];

const TECH_TAGS_business = [
  { title: "Communication skills" },
  { title: "Techniques" },
  { title: "UI/UX Design" },
  { title: "Photoshop" },
  { title: "Filmora" },
];


const JOB_DESC_front_senior = `
# About this Role:

As a Senior position holder, we require you to have good leadership skills and can lead the team with smoothness. While working as a Frontend Developer, you will get to learn more about advanced tech, that will add onto your skill sets. You can take up as challenging work as you are capable of. You should get a rush from creating things from scratch and take pleasure in watching users try to tear them apart through sheer volume and strange, unthinkable use cases, regular updates, and consistent efforts. You are believed to make everything smooth, secure, and stronger than ever! If you find yourself meeting the requirements, then apply now.

# General Requirements:

- 3+ years of working experience or equivalent is preferred. (What we need is skills and the ability to implement them in real-world projects).
- Available for work in the office and work in full-time mode.
- Working with the team on scheduled hours together, sharing the real-time screen & discussing, giving regular updates, suggestions & feedback 
to the team.

# Domain-Specific Requirements:
## Mandatory to have:
- Advanced knowledge of React, Angular, Vue, Node, Next, TypeScript.
- Willingness to learn and keep up to date with new technologies, versions, and improvements.
- Up To date with new updates and releases so that you can implement them.
- Deployment experience using Vercel and understanding of SEO best practices.
- Advanced knowledge in MUI and its customization.
- Design Oriented Mindset and familiarity with design tools like Figma./ framer etc.
- Good command with testing technologies like Jest, Mocha, Cypress, Puppeteer, React Testing Library etc.
- Experience with leading a team will be preferred.
- Ability to write reusable, clean, testable, scalable, and well-designed efficient codes.
- Maintaining existing React, Next, and TypesScript systems, including finding and fixing bugs.
## Nice to have ( increases your chances of selection) :
- Experience in app development will be an added advantage
- Knowledge of GraphQL (Apollo), WebPack. 
- Knowledge of MongoDB and AWS DynamoDB.
- Knowledge about other tech stacks like - backend, DevOps, Cloud, AI/ML.
- Have experience with tools like Figma and Framer and other wireframing/designing tools.
- Responsible for ensuring that security, benchmarking, optimization, and versioning of the codebase are maintained in the Agile development process.

## Preferred to have (not mandatory) :

- Previous experience with top-product-based startups.
- Experience with Cloud Computing and AWS suite.
- Should have the knowledge of basics of AWS.
- Experience with containerization, infrastructure as code (IaC), Continuous Integration/Deployment (CI/CD).

If you don’t meet 100% of the above qualifications, you should still consider applying. Studies show that you can still be considered for a role if you meet just 50% of the role’s requirements.

# How to Apply:
- The Application form for the mentioned role is here.
- The application form could be opened further but the selection criteria are on Rolling Basis.
# Benefits & Perks:
- Pay range (xLPA - yLPA) depends on overall performance during the Job.
- Research work is to be conducted under faculties of IIIT Hyderabad along the Technical team of the Company.
- Opportunity to work with 200+ Tech Startups in CIE at IIIT Hyderabad, a tech incubator with over 13+ years of rich experience in seeding, nurturing, and growing deep-tech startups.
- Exclusive Merchandise / Goodies.
- In-Office Events, 24*7 access to Plug & Play DesksTechnology, & Business Mentoring, Industry Connects, Access to Community Events, Access to Demo Days, Self Branding Opportunities, Friendly work environments.
- Certificate of Appreciation & Letter of Recommendation.
- Preferred Considerations in job openings/opportunities in Partner Companies at CIE IIITH, T-Hub & PAN India.
`;

const JOB_DESC_front_junior = ` 
# About this Role:

As a team member, we require you to have good collaborative skills and can work with other teammates with smoothness. While working as a Frontend Developer, you will get to learn more about advanced tech, that will add onto your skill sets. You can take up as challenging work as you are capable of. You should get a rush from creating things from scratch and take pleasure in watching users try to tear them apart through sheer volume and strange, unthinkable use cases, regular updates, and consistent efforts. You are believed to make everything smooth, secure, and stronger than ever! If you find yourself meeting the requirements, then apply now.

# General Requirements:

- Pursuing / Completed Bachelors in Computer Science (IT Sector) or equivalent work experience is preferred. (Branch / College Tier does not matter to us at all, What we need is skills and the ability to implement them in real-world projects)
- Available for work in the office and work in full-time mode.
- Working with the team on scheduled hours together, sharing the real-time screen & discussing, giving regular updates, suggestions & feedback to the team.
# Domain-Specific Requirements:
## Mandatory to have:
- Advanced and thorough knowledge of React, Node, Next, TypeScript.
- Willingness to learn and keep up to date with new technologies, versions, and improvements.
- Up To date with new updates and releases so that you can implement them.
- Deployment experience using Vercel and understanding of SEO best practices.
- Advanced knowledge in MUI and its customization.
- Design Oriented Mindset and familiarity with design tools like Figma./ framer etc.
- Good command with testing technologies like Jest, Mocha, Cypress, Puppeteer, React Testing Library etc.
- Knowledge of MongoDB and AWS DynamoDB.
- Ability to write reusable, clean, testable, scalable, and well-designed efficient codes.
- Maintaining existing React, Next, and TypesScript systems, including finding and fixing bugs.
- Knowledge of designing and wireframing tools.
- Experience in app development will be an added advantage
- Knowledge of GraphQL (Apollo), WebPack. 
## Nice to have ( increases your chances of selection) :
- Have experience with tools like Figma and Framer.
- Should have the knowledge of basics of AWS.
- Knowledge about other tech stacks like - backend, DevOps, Cloud, AI/ML.
- Experience with containerization, infrastructure as code (IaC), Continuous Integration/Deployment (CI/CD)
- Maintain the quality of the code and suggest enhancements and optimizations.
- Responsible for ensuring that security, benchmarking, optimization, and versioning of the codebase are maintained in the Agile development process.
- Interacting with development teams to develop a strong understanding of the product and testing objectives to work in a startup environment.
## Preferred to have (not mandatory) :
- Previous experience with top-product-based startups.
- Experience with Cloud Computing and AWS suite.
- Has basic knowledge of containerization, cluster orchestration, or infrastructure management frameworks (such as Kubernetes, Docker, Terraform, CloudFormation).

If you don’t meet 100% of the above qualifications, you should still consider applying. Studies show that you can still be considered for a role if you meet just 50% of the role’s requirements.
# How to Apply:
- The Application form for the mentioned role is here.
- The application form could be opened further but the selection criteria are on Rolling Basis.
# Benefits & Perks:
- Pay range (xLPA - yLPA) depends on overall performance during the Job.
- Research work is to be conducted under faculties of IIIT Hyderabad along the Technical team of the Company.
- Opportunity to work with 200+ Tech Startups in CIE at IIIT Hyderabad, a tech incubator with over 13+ years of rich experience in seeding, nurturing, and growing deep-tech startups.
- Exclusive Merchandise / Goodies.
- In-Office Events, 24*7 access to Plug & Play DesksTechnology, & Business Mentoring, Industry Connects, Access to Community Events, Access to - Demo Days, Self Branding Opportunities, Friendly work environments.
- Certificate of Appreciation & Letter of Recommendation.
- Preferred Considerations in job openings/opportunities in Partner Companies at CIE IIITH, T-Hub & PAN India.
`;

const JOB_DESC_front_intern = `
# About this Role:
We conduct our internship program under strict observance & monitoring and also hope to get our future team members from among our interns. You can take up as challenging work as you are capable of. You should get a rush from creating things from scratch and take pleasure in watching users try to tear them apart through sheer volume and strange, unthinkable use cases, regular updates, and consistent efforts. You are believed to make everything smooth, secure, and stronger than ever! If you find yourself meeting the requirements, then apply now.
# General Requirements:
- Pursuing / Completed Bachelors in Computer Science (IT Sector) or equivalent work experience is preferred. (Branch / College Tier does not matter to us at all, What we need is skills and the ability to implement them in real-world projects)
- Available for work in the office and work in full-time mode.
- Working with the team on scheduled hours together, sharing the real-time screen & discussing, giving regular updates, suggestions & feedback to the team.
# Domain-Specific Requirements:
## Mandatory to have:
- Advanced knowledge of React, Next Js and Typescript and MUI.
- Willingness to learn and keep up to date with new technologies, versions, and improvements.
- Up To date with new updates and releases so that you can implement them.
- Deployment experience using Vercel and understanding of SEO best practices.
- Design Oriented Mindset and familiarity with design tools like Figma./ framer etc.
- Good command with testing technologies like Jest, Mocha, Cypress, Puppeteer, React Testing Library etc.
- Ability to write reusable, clean, testable, scalable, and well-designed efficient codes.
- Maintaining existing React, Next, and TypesScript systems, including finding and fixing bugs.
## Nice to have ( increases your chances of selection) :
- Knowledge about other tech stacks like - backend, DevOps, Cloud, AI/ML.
- Experience in app development will be an added advantage
- Knowledge of GraphQL (Apollo), WebPack. 
- Knowledge of MongoDB and AWS DynamoDB.
- Have experience with tools like Figma and Framer.
- Should have the knowledge of basics of AWS.
- Experience with Cloud Computing and AWS suite.
- Maintain the quality of the code and suggest enhancements and optimizations.
- Responsible for ensuring that security, benchmarking, optimization, and versioning of the codebase are maintained in the Agile development process.
- Interacting with development teams to develop a strong understanding of the product and testing objectives to work in a startup environment.
## Preferred to have (not mandatory) :
- Previous experience with top-product-based startups.
- Valid Open Source Contributions in GSoC, GSoD, etc, and other open-source programs.
- Good Rankings/Stars/ Ratings on different coding platforms like Codeforces, Codechef, Leetcode, Topcoder, etc.
If you don’t meet 100% of the above qualifications, you should still consider applying. Studies show that you can still be considered for a role if you meet just 50% of the role’s requirements.
# How to Apply:
- The Application form for the mentioned role is here.
- The application form could be opened further but the selection criteria are on Rolling Basis.
# Benefits & Perks:
- Stipend (INR x - y) depends on overall performance during the internship.
- Research work is to be conducted under faculties of IIIT Hyderabad along the Technical team of the Company.
- Opportunity to work with 200+ Tech Startups in CIE at IIIT Hyderabad, a tech incubator with over 13+ years of rich experience in seeding, nurturing, and growing deep-tech startups.
- Exclusive Merchandise / Goodies.
- In-Office Events, 24*7 access to Plug & Play DesksTechnology, & Business Mentoring, Industry Connects, Access to Community Events, Access to Demo Days, Self Branding Opportunities, Friendly work environments.
- Certificate of Appreciation & Letter of Recommendation.
- Opportunity to get a Pre-Placement Offer at COMETLABS.
- Preferred Considerations in job openings/opportunities in Partner Companies at CIE IIITH, T-Hub & PAN India.

`;

const JOB_requirement_front = `
- **Joining** Immediate
- **Stipend** INR 25,000 - INR 35,000
- **CTC** 7-10 LPA
- **Type** In-Office
- **Duration** 5-6 Months
- **Timing** 40 hours a week
`;

const JOB_DESC_back_senior = `
# About this Role:

At COMETLABS you will be working with Nodejs and python backends with MongoDB and dynamo DB. At COMETLABS You can take up as challenging work as you are capable of. You should get a rush from creating things from scratch and take pleasure in watching users try to tear them apart through sheer volume and strange, unthinkable use cases, regular updates, and consistent efforts. You are believed to make everything smooth, secure, and stronger than ever! If you find yourself meeting the requirements, then apply now!!

# General Requirements:
- 2+ Years of experience in software development.
- Available for work full-time as soon as possible.
- Working with the team on scheduled hours together, sharing the real-time screen & discussing, giving regular updates, suggestions & feedback to the team.
- Domain-Specific Requirements (Sr. Backend):
- Mandatory to have:
- Comfortable with Node Js, Express Js, Python, Flask, Django and AWS DynamoDB, MongoDB, AWS Lambda. Knowledge about JavaScript, ES6+, Typescript, implementation of JSON, NPM Scripts, and REST APIs.
- Knowledge of Webhooks, Data Structures, and Object-Oriented Programming Relational & Non-Relational Databases.
- Knowledge of CDN, server & client side, CI/CD Pipelines.
- Knowledge of DevOps & Containerization, AWS EC2 / Docker / Kubernetes.
- Experience with other AWS services like SNS & SQS.
- Experience with automation testing frameworks such as Cypress, Selenium, and Puppeteer
- Knowledge of writing test cases with Mocha, Jest, etc.
- Expert knowledge in microservices architectures, clustering concepts, containers, or managing highly available systems.
 
# Nice to have (increases your chances of selection) :
- Comfortable with Git/GitHub.
- Some knowledge of AI and ML.
- Ability to write reusable, clean, testable, scalable, and well-designed efficient codes.
 
If you don’t meet 100% of the above qualifications, you should still consider applying. Studies show that you can still be considered for a role if you meet just 50% of the role’s requirements.

# How to Apply:
- The Application form for the mentioned role is here.
- The application form could be opened further but the selection criteria are on Rolling Basis.

# Benefits & Perks:

- Research work is to be conducted under the faculties of IIIT Hyderabad along with the Technical team of the Company.
- Opportunity to work with 200+ Tech Startups in CIE at IIIT Hyderabad, a tech incubator with over 13+ years of rich experience in seeding, nurturing, and growing deep-tech startups.
- Exclusive Merchandise / Goodies.
- In-Office Events, 24*7 access to Plug & Play DesksTechnology, & Business Mentoring, Industry Connects, Access to Community Events, Access to Demo Days, Self Branding Opportunities, Friendly work environments.
- Preferred Considerations in job openings/opportunities in Partner Companies at CIE IIITH, T-Hub & PAN India.
`;

const JOB_DESC_back_junior = `
# About this Role:

At COMETLABS you will be working with Nodejs and python backends with MongoDB and dynamo DB. At COMETLABS You can take up as challenging work as you are capable of. You should get a rush from creating things from scratch and take pleasure in watching users try to tear them apart through sheer volume and strange, unthinkable use cases, regular updates, and consistent efforts. You are believed to make everything smooth, secure, and stronger than ever! If you find yourself meeting the requirements, then apply now !!

# General Requirements:
- Completed Bachelors in Computer Science (IT Sector) or equivalent work experience is preferred.
- Available for work full-time as soon as possible.
- Working with the team on scheduled hours together, sharing the real-time screen & discussing, giving regular updates, suggestions & feedback to the team.

# Domain-Specific Requirements:
## Mandatory to have:
- Comfortable with Node Js, Express Js, Python, Flask, Django and AWS DynamoDB, MongoDB, AWS Lambda. Knowledge about JavaScript, ES6+, Typescript, implementation of JSON, NPM Scripts, and REST APIs.
- Knowledge of Webhooks, Data Structures, and Object-Oriented Programming Relational & Non-Relational Databases.
- Knowledge of CDN, server & client side, CI/CD Pipelines.
- Experience with other AWS services like SNS & SQS.
- Knowledge of writing test cases with Mocha, Jest, etc.
 
## Nice to have (increases your chances of selection) :
- Comfortable with Git/GitHub.
- Knowledge of DevOps & Containerization, AWS EC2 / Docker / Kubernetes.
- Ability to write reusable, clean, testable, scalable, and well-designed efficient codes.
 
## Preferred to have (not mandatory) :
- Previous experience with top-product-based startups.
 
If you don’t meet 100% of the above qualifications, you should still consider applying. Studies show that you can still be considered for a role if you meet just 50% of the role’s requirements.

# How to Apply:
- The Application form for the mentioned role is here.
- The application form could be opened further but the selection criteria are on Rolling Basis.
# Benefits & Perks:
- Research work is to be conducted under the faculties of IIIT Hyderabad along with the Technical team of the Company.
- Opportunity to work with 200+ Tech Startups in CIE at IIIT Hyderabad, a tech incubator with over 13+ years of rich experience in seeding, nurturing, and growing deep-tech startups.
- Exclusive Merchandise / Goodies.
- In-Office Events, 24*7 access to Plug & Play DesksTechnology, & Business Mentoring, Industry Connects, Access to Community Events, Access to Demo Days, Self Branding Opportunities, Friendly work environments.
- Preferred Considerations in job openings/opportunities in Partner Companies at CIE IIITH, T-Hub & PAN India.
`;

const JOB_DESC_back_intern = `
# About this Role:

We conduct our internship program under strict observance & monitoring and also hope to get our future team members from among our interns. You can take up as challenging work as you are capable of. You should get a rush from creating things from scratch and take pleasure in watching users try to tear them apart through sheer volume and strange, unthinkable use cases, regular updates, and consistent efforts. You are believed to make everything smooth, secure, and stronger than ever! If you find yourself meeting the requirements, then apply now !!

# General Requirements:
- Completed Bachelors in Computer Science (IT Sector) or equivalent work experience is preferred.
- Available for work full-time as soon as possible.
- Working with the team on scheduled hours together, sharing the real-time screen & discussing, giving regular updates, suggestions & feedback to the team.

# Domain-Specific Requirements:
## Mandatory to have:
- Comfortable with Node Js, Express Js, Python, Flask, Django and AWS DynamoDB, MongoDB, AWS Lambda. Knowledge about JavaScript, ES6+, Typescript, implementation of JSON, NPM Scripts, and REST APIs.
- Knowledge of Webhooks, Data Structures, and Object-Oriented Programming Relational & Non-Relational Databases.
- Knowledge of CDN, server & client side, CI/CD Pipelines.
- Experience with other AWS services like SNS & SQS.
 
## Nice to have (increases your chances of selection) :
- Comfortable with Git/GitHub.
- Knowledge of DevOps & Containerization, AWS EC2 / Docker / Kubernetes.
- Ability to write reusable, clean, testable, scalable, and well-designed efficient codes.
 
## Preferred to have (not mandatory) :
- Good Rankings/Stars/ Ratings on different coding platforms like Codeforces, Codechef, Leetcode, Topcoder, etc.
 
If you don’t meet 100% of the above qualifications, you should still consider applying. Studies show that you can still be considered for a role if you meet just 50% of the role’s requirements.
 
# How to Apply:
- The Application form for the mentioned role is here.
- The application form could be opened further but the selection criteria are on Rolling Basis.
# Benefits & Perks:
- Stipend (INR 25,000 - 35,000) depends on overall performance during the internship.
- Research work is to be conducted under the faculties of IIIT Hyderabad along with the Technical team of the Company.
- Opportunity to work with 200+ Tech Startups in CIE at IIIT Hyderabad, a tech incubator with over 13+ years of rich experience in seeding, nurturing, and growing deep-tech startups.
- Exclusive Merchandise / Goodies.
- In-Office Events, 24*7 access to Plug & Play DesksTechnology, & Business Mentoring, Industry Connects, Access to Community Events, Access to Demo Days, Self Branding Opportunities, Friendly work environments.
- Certificate of Appreciation & Letter of Recommendation.
- Opportunity to get a Pre-Placement Offer at COMETLABS.
- Preferred Considerations in job openings/opportunities in Partner Companies at CIE IIITH, T-Hub & PAN India.
`;

const JOB_requirement_back = `
- **Joining** Immediate
- **Stipend** INR 25,000 - INR 35,000
- **CTC** 12-14 LPA
- **Type** In-Office
- **Duration** 5-6 Months
- **Timing** 40 hours a week
`;

const JOB_DESC_dev_senior = `
# About this Role:
At COMETLABS you will be working with AWS and managing our different CI/CD. At COMETLABS You can take up as challenging work as you are capable of. You should get a rush from creating things from scratch and take pleasure in watching users try to tear them apart through sheer volume and strange, unthinkable use cases, regular updates, and consistent efforts. You are believed to make everything smooth, secure, and stronger than ever! If you find yourself meeting the requirements, then apply now !!

# General Requirements:
- 2+ Years of experience in software development.
- Available for work full-time as soon as possible.
- Working with the team on scheduled hours together, sharing the real-time screen & discussing, giving regular updates, suggestions & feedback to the team.
# Domain-Specific Requirements:
## Mandatory to have:
- Must experience in creating CI/CD pipelines using tools like GitHub, Jenkins, and so on.
- Hands-on experience with different cloud providers like AWS, Azure, GCP, and Digitalocean.
- Has experience operating high-availability, fault-tolerant, scalable, distributed software in production.
- Has experience diagnosing and resolving problems in high-throughput web applications and network services.
- Experience to utilise infrastructure as code solutions.
- Experience in using monitoring tools like Prometheus, Grafana, ELK, etc.
- Working knowledge of Unix/Linux internals.
- Has advanced knowledge of containerization, cluster orchestration, or infrastructure management frameworks (such as Kubernetes, Docker, Terraform, CloudFormation)
- Has working knowledge of Kubernetes and container orchestration
- Good analytical and troubleshooting skills.
- Willingness to learn new technologies and adapt according to the team's requirements.
- Demonstrates good communication skills, team spirit, and handling cross-team collaborations
- Must have strong software development experience with at least one of the following languages: Python, Ruby, Java or Go.
- Should demonstrate strong organizational and interpersonal skills, with experience developing and instilling a culture of operational maturity.
If you don’t meet 100% of the above qualifications, you should still consider applying. Studies show that you can still be considered for a role if you meet just 50% of the role’s requirements.
# How to Apply:
- The Application form for the mentioned role is here.
- The application form could be opened further but the selection criteria are on Rolling Basis.
# Benefits & Perks:
- Research work is to be conducted under the faculties of IIIT Hyderabad along with the Technical team of the Company.
- Opportunity to work with 200+ Tech Startups in CIE at IIIT Hyderabad, a tech incubator with over 13+ years of rich experience in seeding, nurturing, and growing deep-tech startups.
- Exclusive Merchandise / Goodies.
- In-Office Events, 24*7 access to Plug & Play DesksTechnology, & Business Mentoring, Industry Connects, Access to Community Events, Access to Demo Days, Self Branding Opportunities, Friendly work environments.
- Preferred Considerations in job openings/opportunities in Partner Companies at CIE IIITH, T-Hub & PAN India.
`;

const JOB_DESC_dev_junior = `
# About this Role:
At COMETLABS you will be working with AWS and managing our different CI/CD. At COMETLABS You can take up as challenging work as you are capable of. You should get a rush from creating things from scratch and take pleasure in watching users try to tear them apart through sheer volume and strange, unthinkable use cases, regular updates, and consistent efforts. You are believed to make everything smooth, secure, and stronger than ever! If you find yourself meeting the requirements, then apply now !!

# General Requirements:
- Completed Bachelors in Computer Science (IT Sector) or equivalent work experience is preferred.
- Available for work full-time as soon as possible.
- Working with the team on scheduled hours together, sharing the real-time screen & discussing, giving regular updates, suggestions & feedback to the team.
 
# Domain-Specific Requirements:
## Mandatory to have:
- Must experience in creating CI/CD pipelines using tools like GitHub, Jenkins, and so on.
- Hands-on experience with different cloud providers like AWS, Azure, GCP, and Digitalocean.
- Experience to utilize infrastructure as code solutions.
- Working knowledge of Unix/Linux internals.
- Has advanced knowledge of containerization, cluster orchestration, or infrastructure management frameworks (such as Kubernetes, Docker, Terraform, CloudFormation)
- Good analytical and troubleshooting skills.
- Willingness to learn new technologies and adapt according to the team's requirements.
- Demonstrates good communication skills, team spirit, and handling cross-team collaborations
- Should demonstrate strong organizational and interpersonal skills, with experience developing and instilling a culture of operational maturity.
If you don’t meet 100% of the above qualifications, you should still consider applying. Studies show that you can still be considered for a role if you meet just 50% of the role’s requirements.

# How to Apply:
- The Application form for the mentioned role is here.
- The application form could be opened further but the selection criteria are on Rolling Basis.
# Benefits & Perks:
- Research work is to be conducted under the faculties of IIIT Hyderabad along with the Technical team of the Company.
- Opportunity to work with 200+ Tech Startups in CIE at IIIT Hyderabad, a tech incubator with over 13+ years of rich experience in seeding, nurturing, and growing deep-tech startups.
- Exclusive Merchandise / Goodies.
- In-Office Events, 24*7 access to Plug & Play DesksTechnology, & Business Mentoring, Industry Connects, Access to Community Events, Access to Demo Days, Self Branding Opportunities, Friendly work environments.
- Preferred Considerations in job openings/opportunities in Partner Companies at CIE IIITH, T-Hub & PAN India.
`;

const JOB_requirement_dev = `
- **Joining** Immediate
- **Stipend** INR 25,000 - INR 35,000
- **CTC** 12-14 LPA
- **Type** Joint Research between COMETLABS and IIIT Hyderabad
- **Duration** 3-4 Months
- **Timing** 40 hours a week
`;

const JOB_DESC_market = `
# **About This Role:**

***"Creative and Growth Mindset about the products, company & users is key eligibility to grab the role."***

We conduct our internship program under strict observance & monitoring and also hope to get our future team members from among our interns. You can take up as challenging work as you are capable of. You should get a rush from creating things from scratch and take pleasure in watching users try to tear them apart through sheer volume and strange, unthinkable use cases, regular updates, and consistent efforts. You are believed to make everything smooth, secure, and stronger than ever! 

If you find yourself meeting the requirements, then [apply now](https://forms.gle/nLeMf5QYsZ7TGvLHA) !!

# Roles & Responsibilities:

- Pursuing/completing bachelor's or equivalent work experience is preferred. (Branch / College Tier **does not matter to us at all,** What we need is skills and the ability to deliver regular content).
- Regular Engagement in Social Media Activities/Extra-Curricular Activities would be there and preferred to have.

- Collaborative(**Team Player**), Creative (**Open Minded**), **Honest & Helpful** nature would be an eye-catching supplement.
- Having proper coordination for **regular handling of social media ([Instagram](https://www.instagram.com/cometlabs/)/[Linkedin](https://www.linkedin.com/company/cometlabs/)/[Facebook](https://www.facebook.com/cometlabs.in)/[Twitter](https://twitter.com/cometlabs_ai)/[YouTube](https://www.youtube.com/channel/UC9dP1nUtKZnP4Q3YtLTXVLQ)/), activities with content, creativity, and influencing capability.**
- Fluent public speaking skills, ability to engage audience on social media platforms, going live on social med.
- Discord Management.
- Excellent oral and written communication skills.
- Good hold on google sheets and MS Office tools.
- Marketing / Advertising / "Word of Mouth" skill ( **Ability to bring of/ convince new members whether students or professionals**) would be beneficial to have.
- **Full of entrepreneurial spirit (curious about startup/corporate culture) or always ready to take a stand, thinking for innovation & better improvements, thus helping to make a smooth decision-making process.**

# Preferred to Have (Not Mandatory):

- Have experience in creating, designing & managing newsletters related to any topics like startups, product, community, tech, marketing, business, etc.
- Sound Knowledge of Graphic Design/Video Editing/Animation and its tools (Adobe Illustrator, Photoshop, Premiere Pro, Figma, etc) required [prior experience would give an edge.]
- Good Knowledge of UI/UX design would be an add-on.
- Any achievements/badges to show in the field of content creation, design, and video editing (samples/portfolio page/medium/dribble, etc.) are available.

# How to Apply:

- The Application form for the mentioned role is [here.](https://forms.gle/nLeMf5QYsZ7TGvLHA)
- The selection criteria are on Rolling Basis.
****

# Benefits & Perks:

- Stipend (INR 12,000 - 15,000) depends on overall performance during the internship.
- Opportunity to work with 200+ Tech Startups in [CIE](https://cie.iiit.ac.in/) at IIIT Hyderabad, a Tech incubator with over 13+ years of rich experience in seeding, nurturing, and growing deep-tech startups.
- Exclusive Merchandise / Goodies.
- In-Office Events, 24*7 access to Plug & Play Desks Technology,  & Business Mentoring, Industry Connects, Access to Community Events, Access to Demo Days, Self Branding Opportunities, Friendly work environments.
- Certificate of Appreciation & Letter of Recommendation.
- Opportunity to get a Pre-Placement Offer at COMETLABS.
- Preferred Considerations in job openings/opportunities in Partner Companies at [CIE](https://www.youtube.com/watch?v=Jxw4Wa6g1eE&t=1s) IIITH, [T-Hub](https://www.youtube.com/watch?v=7wnlb45vRrw) & PAN India.
`;

const JOB_requirement_market = `
- **Joining** Immediate
- **Stipend** INR 12,000 - INR 15,000
- **Type** In-Office
- **Duration** 3-4 Months
- **Timing** 40 hours a week
`;

const JOB_DESC_graphic = `
# About this Role:

***"Creative and Growth Mindset about the products, company & users is key eligibility to grab the role."***

We conduct our internship program under strict observance & monitoring and also hope to get our future team members from among our interns. You can take up as challenging work as you are capable of. You should get a rush from creating things from scratch and take pleasure in watching users try to tear them apart through sheer volume and strange, unthinkable use cases, regular updates, and consistent efforts. You are believed to make everything smooth, secure, and stronger than ever! 

If you find yourself meeting the requirements, then [apply now](https://forms.gle/7kJKh68fDVSt2Pyi9) !!

# Roles & Responsibilities:

- Pursuing/completing bachelor's or equivalent work experience is preferred. (Branch / College Tier **does not matter to us at all,** What we need is skills and the ability to deliver regular content).
- Regular Engagement in Social Media Activities/Extra-Curricular Activities would be there and preferred to have.

- Collaborative(**Team Player**), Creative (**Open Minded**), **Honest & Helpful** nature would be an eye-catching supplement.
- Having proper coordination for **regular handling of social media ([Instagram](https://www.instagram.com/cometlabs/)/[Linkedin](https://www.linkedin.com/company/cometlabs/)/[Facebook](https://www.facebook.com/cometlabs.in)/[Twitter](https://twitter.com/cometlabs_ai)/[YouTube](https://www.youtube.com/channel/UC9dP1nUtKZnP4Q3YtLTXVLQ)/), activities with content, creativity, and influencing capability.**
- Fluent public speaking skills, ability to engage audience on social media platforms, going live on social med.
- Discord Management.
- Excellent oral and written communication skills.
- Good hold on google sheets and MS Office tools.
- Marketing / Advertising / "Word of Mouth" skill ( **Ability to bring of/ convince new members whether students or professionals**) would be beneficial to have.
- **Full of entrepreneurial spirit (curious about startup/corporate culture) or always ready to take a stand, thinking for innovation & better improvements, thus helping to make a smooth decision-making process.**

# Preferred to Have (Not Mandatory):

- Have experience in creating, designing & managing newsletters related to any topics like startups, product, community, tech, marketing, business, etc.
- Sound Knowledge of Graphic Design/Video Editing/Animation and its tools (Adobe Illustrator, Photoshop, Premiere Pro, Figma, etc) required [prior experience would give an edge.]
- Good Knowledge of UI/UX design would be an add-on.
- Any achievements/badges to show in the field of content creation, design, and video editing (samples/portfolio page/medium/dribble, etc.) are available.

# How to Apply:

- The Application form for the mentioned role is [here.](https://forms.gle/7kJKh68fDVSt2Pyi9)
- The Deadline to apply for the mentioned role is **23-12-2021, 11:59 PM IST.**
- The application form could be opened further but the selection criteria are on Rolling Basis.

# Benefits & Perks:

- Stipend (INR 6,000 - 15,000) depends on overall performance during the internship.
- Exclusive Merchandise / Goodies.
- Certificate of Appreciation & Letter of Recommendation.
- Friendly work environment, flexible working hours, and opportunity to work with an early-stage startup.
- Chance to become a full-time team member at COMETLABS.
- Preferred Considerations in job openings/opportunities (in future).
- Accommodation costs would be taken care of by the company only if you join in-person offline.
`;

const JOB_requirement_graphic = `
- **Joining** Immediate
- **Stipend** INR 6000 - INR 15,000
- **Duration** 3-4 Months
- **Timing** 40 hours a week
`;

const JOB_DESC_business = `
# **About This Role:**

***"Creative and Growth Mindset about the products, company & users is key eligibility to grab the role."***

We conduct our internship program under strict observance & monitoring and also hope to get our future team members from among our interns. You can take up as challenging work as you are capable of. You should get a rush from creating things from scratch and take pleasure in watching users try to tear them apart through sheer volume and strange, unthinkable use cases, regular updates, and consistent efforts. You are believed to make everything smooth, secure, and stronger than ever! 

If you find yourself meeting the requirements, then [apply now](https://forms.gle/3TN6SkE2HDsgDYH3A) !!

# Roles & Responsibilities:

- Pursuing / Completed Bachelors in CSE/ECE (IT Sector) / BBA / BCA or equivalent work experience with a **Business, Technology & Entrepreneurial background** is preferred. 
(Branch / College Tier does not matter to us at all**.** What we need is skills and the ability to implement them in real-world projects).
- Have experience in prospecting potential clients in Freelancing / B2B SAAS Companies, pitching the product to those clients/investors, identifying new market opportunities, and promoting the company and its product.

- Strong secondary research acumen with excellent interpersonal, communication & presentational skills in English as well as Hindi Languages.
- Strong organizational skills with experience in building & leading teams to build tech products. Design thinking, user empathy, and deep understanding of Software Developers Behaviours.
- Fluent public speaking skills, ability to engage audience on social media platforms, going live on social media.
- Deep understanding of the latest software development, artificial intelligence technologies & UX of software products.
- Excellent oral and written communication skills.
- Fluency in writing Pitch Decks, Customer Decks, Cold Emailing & Texting, Video Conferencing, Google Sheets & Live Presentations.
- Marketing / Advertising / "Word of Mouth" skill ( **Ability to bring of/ convince new members whether students or professionals**) would be beneficial to have.
- **Full of entrepreneurial spirit (curious about startup/corporate culture) or always ready to take a stand, thinking for innovation & better improvements, thus helping to make a smooth decision-making process.**

# Preferred to Have (Not Mandatory):

- Have experience with tools like Google Analytics, AWS, Figma, Canva, Notion/Trello, Jira, Miro, Mixpanel, and Framer.
- Previous experience in building tech products using technologies like React, Next(11+), Material UI, Flutter, React Native, etc.
- Interacting with development teams to develop a strong understanding of the product and testing objectives to work in a startup environment
- Any achievements/badges to show in the field of content creation, design, and video editing (samples/portfolio page/medium/dribble, etc.) are available.

# How to Apply:

- The Application form for the mentioned role is [here.](https://forms.gle/3TN6SkE2HDsgDYH3A)
- The selection criteria are on Rolling Basis.
****

# Benefits & Perks:

- Stipend (INR 12,000 - 15,000) depends on overall performance during the internship.
- Opportunity to work with 200+ Tech Startups in [CIE](https://cie.iiit.ac.in/) at IIIT Hyderabad, a Tech incubator with over 13+ years of rich experience in seeding, nurturing, and growing deep-tech startups.
- Exclusive Merchandise / Goodies.
- In-Office Events, 24*7 access to Plug & Play Desks Technology,  & Business Mentoring, Industry Connects, Access to Community Events, Access to Demo Days, Self Branding Opportunities, Friendly work environments.
- Certificate of Appreciation & Letter of Recommendation.
- Opportunity to get a Pre-Placement Offer at COMETLABS.
- Preferred Considerations in job openings/opportunities in Partner Companies at [CIE](https://www.youtube.com/watch?v=Jxw4Wa6g1eE&t=1s) IIITH, [T-Hub](https://www.youtube.com/watch?v=7wnlb45vRrw) & PAN India.
`;

const JOB_requirement_business = `
- **Joining** Immediate
- **Stipend** INR 25,000(10,000 + Revenue Commission)
- **Type** In-Office
- **Duration** 3-4 Months
- **Timing** 40 hours a week
`;

const JOB_DESC_tester_senior = `
# About this Role:
As a Senior position holder, we require you to have good leadership skills and can lead the team with smoothness. While working as a Problem Setter and Tester, you will get to learn more into deep tech. You can take up as challenging work as you are capable of. You should get a rush from creating things from scratch and take pleasure in watching users try to tear them apart through sheer volume and strange, unthinkable use cases, regular updates, and consistent efforts. You are believed to make everything smooth, secure, and stronger than ever! If you find yourself meeting the requirements, then apply now.
# General Requirements:
- 2+ years of working experience or equivalent is preferred. (What we need is skills and the ability to implement them in real-world projects).
- Available for work in the office and work in full-time mode.
- Working with the team on scheduled hours together, sharing the real-time screen & discussing, giving regular updates, suggestions & feedback to the team.
# Domain-Specific Requirements:
## Mandatory to have:
- Advanced and thorough knowledge of React, Angular, Vue, Node, Next, Nuxt, Django, and Flask.
- Willingness to learn and keep up to date with new technologies, versions, and improvements.
- Must have good content writing skills.
- Should have experience with different testing frameworks like jest, mocha, chai, cypress, selenium, pytest, etc
- Must have knowledge of writing test cases for the given problem code. 
- Can write problem statements/code with different topics in a given framework/Library.
- Can write problem statements/code for different levels of severity/ toughness.
- Can write test cases with different levels of toughness for the same problem statement/code
- Can write testing code with different levels of testing like Unit, Integration, and E2E testing.
- Familiarity with modern cloud and DevOps oriented test technologies, analytics, and tools
- Experience with building infrastructure for testing in production.
- Good communication, presentation skills, and ability to work well in a development team.
- Must have experience with different Linting frameworks like eslint, jslint, etc.
## Nice to have ( increases your chances of selection) :
- Programming experience in modern software languages such as Java, Python; with various scripting languages for lab automation (bash, python, Perl, etc); with automation/configuration management using GitLab CI or equivalent
- Experience in test automation and test-driven-development initiatives
- Test-related aspects of the Software Development Process and Configuration Management including Agile Scrum
- Deep experience automating the verification of at least 2 dimensions of non-functional requirements - performance, scalability, security, resiliency, longevity of cloud-based software.
## Preferred to have (not mandatory) :
- Previous experience with top-product-based startups.
- Experience with UI Automation and practices to increase efficiency and quality of UI development.
- Experience as a user of a CI/CD/DevOps ecosystem/pipeline
- Deliver quality measured by seamless end-to-end customer experience with an understanding of and ideally experience with SuperNetOps and DevSecOps personae/roles.
If you don’t meet 100% of the above qualifications, you should still consider applying. Studies show that you can still be considered for a role if you meet just 50% of the role’s requirements.
# How to Apply:
- The Application form for the mentioned role is here.
- The application form could be opened further but the selection criteria are on Rolling Basis.
# Benefits & Perks:
- Pay range (xLPA - yLPA) depends on overall performance during the Job.
- Research work is to be conducted under faculties of IIIT Hyderabad along the Technical team of the Company.
- Opportunity to work with 200+ Tech Startups in CIE at IIIT Hyderabad, a tech incubator with over 13+ years of rich experience in seeding, nurturing, and growing deep-tech startups.
- Exclusive Merchandise / Goodies.
- In-Office Events, 24*7 access to Plug & Play DesksTechnology, & Business Mentoring, Industry Connects, Access to Community Events, Access to Demo Days, Self Branding Opportunities, Friendly work environments.
- Certificate of Appreciation & Letter of Recommendation.
- Preferred Considerations in job openings/opportunities in Partner Companies at CIE IIITH, T-Hub & PAN India.
`;

const JOB_DESC_tester_junior = `
# About this Role:
As a team member, we require you to have good collaborative skills and can work with other teammates with smoothness. While working as a Problem Setter and Tester, you will get to learn more about deep tech and will explore more the world of testing. You can take up as challenging work as you are capable of. You should get a rush from creating things from scratch and take pleasure in watching users try to tear them apart through sheer volume and strange, unthinkable use cases, regular updates, and consistent efforts. You are believed to make everything smooth, secure, and stronger than ever! If you find yourself meeting the requirements, then apply now.
# General Requirements:
- Pursuing / Completed Bachelors in Computer Science (IT Sector) or equivalent work experience is preferred. (Branch / College Tier does not matter to us at all, What we need is skills and the ability to implement them in real-world projects)
- Available for work in the office and work in full-time mode.
- Working with the team on scheduled hours together, sharing the real-time screen & discussing, giving regular updates, suggestions & feedback to the team.
# Domain-Specific Requirements:
## Mandatory to have:
- Advanced and thorough knowledge of React, Angular, Vue, Node, Next, Nuxt, Django, and Flask.
- Willingness to learn and keep up to date with new technologies, versions, and improvements.
- Must have good content writing skills.
- Should have experience with different testing frameworks like jest, mocha, chai, cypress, selenium, pytest, etc
- Must have knowledge of writing test cases for the given problem code. 
- Can write problem statements/code with different topics in a given framework/Library.
- Can write problem statements/code for different levels of severity/ toughness.
- Can write test cases with different levels of toughness for the same problem statement/code
- Can write testing code with different levels of testing like Unit, Integration, and E2E testing.
- Good communication, presentation skills, and ability to work well in a development team.
- Must have experience with different Linting frameworks like eslint, jslint, etc.
## Nice to have ( increases your chances of selection) :
- Programming experience in modern software languages such as Java, Python; with various scripting languages for lab automation (bash, python, Perl, etc); with automation/configuration management using GitLab CI or equivalent
- Experience in test automation and test-driven-development initiatives
- Test-related aspects of the Software Development Process and Configuration Management including Agile Scrum.
- Familiarity with modern cloud and DevOps oriented test technologies, analytics, and tools
- Experience with building infrastructure for testing in production.
## Preferred to have (not mandatory) :
- Previous experience with top-product-based startups.
- Valid Open Source Contributions in GSoC, GSoD, etc, and other open-source programs.
- Good Rankings/Stars/ Ratings on different coding platforms like Codeforces, Codechef, Leetcode, Topcoder, etc.
- If you don’t meet 100% of the above qualifications, you should still consider applying. Studies show that you can still be considered for a role if you meet just 50% of the role’s requirements.
# How to Apply:
- The Application form for the mentioned role is here.
- The application form could be opened further but the selection criteria are on Rolling Basis.
# Benefits & Perks:
- Pay range (xLPA - yLPA) depends on overall performance during the Job.
- Research work is to be conducted under faculties of IIIT Hyderabad along the Technical team of the Company.
- Opportunity to work with 200+ Tech Startups in CIE at IIIT Hyderabad, a tech incubator with over 13+ years of rich experience in seeding, nurturing, and growing deep-tech startups.
- Exclusive Merchandise / Goodies.
- In-Office Events, 24*7 access to Plug & Play DesksTechnology, & Business Mentoring, Industry Connects, Access to Community Events, Access to Demo Days, Self Branding Opportunities, Friendly work environments.
- Certificate of Appreciation & Letter of Recommendation.
- Preferred Considerations in job openings/opportunities in Partner Companies at CIE IIITH, T-Hub & PAN India.
`;

const JOB_DESC_tester_intern = `
# About this Role:
We conduct our internship program under strict observance & monitoring and also hope to get our future team members from among our interns. You can take up as challenging work as you are capable of. You should get a rush from creating things from scratch and take pleasure in watching users try to tear them apart through sheer volume and strange, unthinkable use cases, regular updates, and consistent efforts. You are believed to make everything smooth, secure, and stronger than ever! If you find yourself meeting the requirements, then apply now.
# General Requirements:
- Pursuing / Completed Bachelors in Computer Science (IT Sector) or equivalent work experience is preferred. (Branch / College Tier does not matter to us at all, What we need is skills and the ability to implement them in real-world projects)
- Available for work in the office and work in full-time mode.
- Working with the team on scheduled hours together, sharing the real-time screen & discussing, giving regular updates, suggestions & feedback to the team.
# Domain-Specific Requirements:
## Mandatory to have:
- knowledge of frameworks like React, Angular, Vue, Node, Next, Nuxt, Django, and Flask. (minimum 3)
- Must have good content writing skills.
- Should have experience with different testing frameworks like jest, mocha, chai, cypress, selenium, pytest, etc
- Must have knowledge of writing test cases for the given problem code. 
- Can write problem statements/code with different topics in a given framework/Library.
- Can write problem statements/code for different levels of severity/ toughness.
- Can write test cases with different levels of toughness for the same problem statement/code
- Can write testing code with different levels of testing like Unit, Integration, and E2E testing.
## Nice to have ( increases your chances of selection) :
- Experience in different Linting frameworks like eslint, jslint, etc.
- Experience in test automation and test-driven-development initiatives.
- Familiarity with modern cloud and DevOps oriented test technologies, analytics, and tools
- Experience with building infrastructure for testing in production.
## Preferred to have (not mandatory) :
- Previous experience with top-product-based startups.
- Valid Open Source Contributions in GSoC, GSoD, etc, and other open-source programs.
- Good Rankings/Stars/ Ratings on different coding platforms like Codeforces, Codechef, Leetcode, Topcoder, etc.
- If you don’t meet 100% of the above qualifications, you should still consider applying. Studies show that you can still be considered for a role if you meet just 50% of the role’s requirements.
# How to Apply:
- The Application form for the mentioned role is here.
- The application form could be opened further but the selection criteria are on Rolling Basis.
# Benefits & Perks:
- Stipend (INR x - y) depends on overall performance during the internship.
- Research work is to be conducted under faculties of IIIT Hyderabad along the Technical team of the Company.
- Opportunity to work with 200+ Tech Startups in CIE at IIIT Hyderabad, a tech incubator with over 13+ years of rich experience in seeding, nurturing, and growing deep-tech startups.
- Exclusive Merchandise / Goodies.
- In-Office Events, 24*7 access to Plug & Play DesksTechnology, & Business Mentoring, Industry Connects, Access to Community Events, Access to Demo Days, Self Branding Opportunities, Friendly work environments.
- Certificate of Appreciation & Letter of Recommendation.
- Opportunity to get a Pre-Placement Offer at COMETLABS.
- Preferred Considerations in job openings/opportunities in Partner Companies at CIE IIITH, T-Hub & PAN India.
`;

const JOB_DESC_AIML_senior = `
# About this Role:
As a team member, we require you to have good collaborative skills and can work with other teammates with smoothness. While working as an AI/ML Data scientist, you will be making and training models and will learn new skills in the journey. You can take up as challenging work as you are capable of. You should get a rush from creating things from scratch and take pleasure in watching users try to tear them apart through sheer volume and strange, unthinkable use cases, regular updates, and consistent efforts. You are believed to make everything smooth, secure, and stronger than ever! If you find yourself meeting the requirements, then apply now !!
# General Requirements:
- 2+ Years of experience in software development.
- Available for work full-time as soon as possible.
- Working with the team on scheduled hours together, sharing the real-time screen & discussing, giving regular updates, suggestions & feedback to the team.
# Domain-Specific Requirements:
## Mandatory to have:
- You should have a strong understanding of data structures, data modelling, and software architecture Deep knowledge of maths, probability, statistics, and algorithms Code experience in Python JavaR, as well as an understanding of machine learning frameworks (like Keras or PyTorch) and libraries (like scikit-learn).
- Machine Learning/Artificial Intelligence as it relates to Data, DevOps, MLOps, Google Cloud expertise
- Understand and build Google or other Cloud AWS infrastructure including API Gateways, Cognito, and WAF using code references, using Serverless framework, Cloud formation
- Understand and replicate CI/CD pipeline code using code references
- Understanding of Google Cloud and/or the other cloud services (AWS)
- Collaborate with AI/ML Framework product owners, data scientists, platform/data engineers, ML engineers, DevOps engineers, and domain experts to design ML pipelines to increase production and development workflows and align data accordingly
- Self-Driven and autonomous, able to communicate internally and externally across a major client
- Demonstrated skill and passion for operational excellence and solution delivery. Demonstrated ability to challenge effectively and reduce complexity
- Knowledge of the principles, algorithms, and tools of deep learning, including models, training strategies, training dataset building, cost functions, quality metrics, etc.
- Knowledgeable about convolutional networks and common architectures (Inception, ResNet, DenseNet, etc)
- Proficient in at least one Machine Learning library (TensorFlow, Torch, MXNet, etc)
- Strong experience in Python and science libraries like Numpy, Pandas, and Matplotlib.
- Experience in NLP (Natural Language Processing) would be nice to have.
## Nice to have ( increases your chances of selection) :
- Understanding of public cloud services such as Cloud formation, Serverless Frameworks, Google, SDKs, AWS CI/CD, Azure DevOps, etc
- Basic understanding of CI/CD DevOps processes & tooling including Cloud Formation, Terraform, ARM Templates, Code Pipeline, Git, Maven/Gradle, Jenkins
- Someone who has experience in building backend microservices- REST, standard web services.
- Experience and understanding of common API formats like REST, SOAP, GraphQL
- Write software to automate API-driven tasks at scale and contribute to the product codebase in (Java, JS, React, Node, Go, and Python)
- Design API level details including different layers of code, service-endpoint, and service contracts
## Preferred to have (not mandatory) :
- Maintain the quality of the code and suggest enhancements and optimizations.
- Responsible for ensuring that security, benchmarking, optimization, and versioning of the codebase are maintained in the Agile development process.
- Interacting with development teams to develop a strong understanding of the product and testing objectives to work in a startup environment.
 
If you don’t meet 100% of the above qualifications, you should still consider applying. Studies show that you can still be considered for a role if you meet just 50% of the role’s requirements.
 
# How to Apply:
- The Application form for the mentioned role is here.
- The application form could be opened further but the selection criteria are on Rolling Basis.
# Benefits & Perks:
- Research work is to be conducted under the faculties of IIIT Hyderabad along with the Technical team of the Company.
- Opportunity to work with 200+ Tech Startups in CIE at IIIT Hyderabad, a tech incubator with over 13+ years of rich experience in seeding, nurturing, and growing deep-tech startups.
- Exclusive Merchandise / Goodies.
- In-Office Events, 24*7 access to Plug & Play DesksTechnology, & Business Mentoring, Industry Connects, Access to Community Events, Access to Demo Days, Self Branding Opportunities, Friendly work environments.
- Preferred Considerations in job openings/opportunities in Partner Companies at CIE IIITH, T-Hub & PAN India.
`;

const JOB_DESC_AIML_junior = `
# About this Role:
As a team member, we require you to have good collaborative skills and can work with other teammates with smoothness. While working as an AI/ML Data scientist, you will be making and training models and will learn new skills in the journey. You can take up as challenging work as you are capable of. You should get a rush from creating things from scratch and take pleasure in watching users try to tear them apart through sheer volume and strange, unthinkable use cases, regular updates, and consistent efforts. You are believed to make everything smooth, secure, and stronger than ever! If you find yourself meeting the requirements, then apply now !!
# General Requirements:
- Completed Bachelors in Computer Science (IT Sector) or equivalent work experience is preferred.
- Available for work full-time as soon as possible.
- Working with the team on scheduled hours together, sharing the real-time screen & discussing, giving regular updates, suggestions & feedback to the team.
# Domain-Specific Requirements 
## Mandatory to have:
- You should have a strong understanding of data structures, data modeling, and software architecture Deep knowledge of maths, probability, statistics, and algorithms Code experience in Python JavaR, as well as an understanding of machine learning frameworks (like Keras or PyTorch) and libraries (like scikit-learn).
- Machine Learning/Artificial Intelligence as it relates to Data, DevOps, MLOps, Google Cloud expertise
- Understand and build Google or other Cloud AWS infrastructure including API Gateways, Cognito, and WAF using code references, using Serverless framework, Cloud formation
- Collaborate with AI/ML Framework product owners, data scientists, platform/data engineers, ML engineers, DevOps engineers, and domain experts to design ML pipelines to increase production and development workflows and align data accordingly
- Self-Driven and autonomous, able to communicate internally and externally across a major client
- Knowledgeable about convolutional networks and common architectures (Inception, ResNet, DenseNet, etc)
- Proficient in at least one Machine Learning library (TensorFlow, Torch, MXNet, etc)
- Strong experience in Python and science libraries like Numpy, Pandas, and Matplotlib.
## Nice to have ( increases your chances of selection):
- Understanding of public cloud services such as Cloud formation, Serverless Frameworks, Google, SDKs, AWS CI/CD, Azure DevOps, etc
- Basic understanding of CI/CD DevOps processes & tooling including Cloud Formation, Terraform, ARM Templates, Code Pipeline, Git, Maven/Gradle, Jenkins
- Someone who has experience in building backend microservices- REST, standard web services.
- Experience and understanding of common API formats like REST, SOAP, GraphQL
- Write software to automate API-driven tasks at scale and contribute to the product codebase in (Java, JS, React, Node, Go, and Python)
- Design API level details including different layers of code, service-endpoint, and service contracts
- Experience in NLP (Natural Language Processing) would be nice to have.
## Preferred to have (not mandatory) :
- Maintain the quality of the code and suggest enhancements and optimizations.
- Responsible for ensuring that security, benchmarking, optimization, and versioning of the codebase are maintained in the Agile development process.
- Interacting with development teams to develop a strong understanding of the product and testing objectives to work in a startup environment.
If you don’t meet 100% of the above qualifications, you should still consider applying. Studies show that you can still be considered for a role if you meet just 50% of the role’s requirements.
# How to Apply:
- The Application form for the mentioned role is here.
- The selection criteria are on Rolling Basis.
# Benefits & Perks:
- Research work is to be conducted under the faculties of IIIT Hyderabad along with the Technical team of the Company.
- Opportunity to work with 200+ Tech Startups in CIE at IIIT Hyderabad, a tech incubator with over 13+ years of rich experience in seeding, nurturing, and growing deep-tech startups.
- Exclusive Merchandise / Goodies.
- In-Office Events, 24*7 access to Plug & Play DesksTechnology, & Business Mentoring, Industry Connects, Access to Community Events, Access to Demo Days, Self Branding Opportunities, Friendly work environments.
- Preferred Considerations in job openings/opportunities in Partner Companies at CIE IIITH, T-Hub & PAN India.
`;

export default Jobs;
