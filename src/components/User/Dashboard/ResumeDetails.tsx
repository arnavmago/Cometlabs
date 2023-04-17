import "react-markdown-editor-lite/lib/index.css";
import moment from "moment";
import { nanoid } from "nanoid";
import dynamic from "next/dynamic";
import * as React from "react";
import { handleProfileImageUpload } from "@/backend/functions";
import { Controller, useFormContext } from "react-hook-form";
import {
  HiDotsVertical,
  HiOutlineCheckCircle,
  HiOutlineLink,
  HiOutlinePencil,
  HiOutlinePlus,
  HiOutlineCloudUpload,
  HiOutlineTrash,
} from "react-icons/hi";
import { SiFacebook, SiGithub, SiInstagram, SiLinkedin, SiTwitter, SiLeetcode, SiGmail } from "react-icons/si";
import { RiPencilFill } from "react-icons/ri";

import tstyle from "@/styles/typography-styles.module.css";


import {
  Autocomplete,
  Box,
  Grid,
  IconButton,
  MenuItem,
  Skeleton,
  Tooltip,
  Stack,
  TextField,
  Typography, Avatar, TextFieldProps
} from "@mui/material";
import { styled, alpha } from "@mui/system";
import style from "@/styles/markdown-styles.module.css";
import { MobileDatePicker, LocalizationProvider } from "@mui/lab";
import ReactMarkdown from "react-markdown";
import Menu, { MenuProps } from "@mui/material/Menu";
import { ReadOnly, ResumeInfo, ResumeEducation, ResumeExperience, ResumeProjects, ResumeSkills, type } from "./types";
import { Tag } from "@/components/Fest/Dashboard/AllSubmission";
import DateAdapter from "@mui/lab/AdapterMoment";
import { StyledCardContainer, FilledButton, TextButton } from "@/styles/theme";
import Analytics, { SCORE } from "../Analytics";
// import ProfileDetails from "./ProfileDetails";
// import { useSnackbar } from "notistack";
import { useSession } from "next-auth/react";
import { DefaultUser } from "@/backend/functions";
// import { FaRegCopy } from "react-icons/fa";
import { Accept } from 'react-dropzone'

const Editor = dynamic(() => import("react-markdown-editor-lite"), {
  loading: () => <Skeleton height={350} width={"100%"} />,
});

const Dropzone = dynamic(() => import("@/components/Dropzone"), {
  loading: () => <Skeleton height={400} width={"100%"} />,
});


// const StatItem = styled(Grid)({
//   display: "flex",
//   gap: "6px",
//   minWidth: "150px",
// });

const dateOptions: any = {
  month: "short",
  day: "2-digit",
  year: "numeric",
};

const StyledMenu = styled
  ((props: MenuProps) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))
  (({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 4,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  }));

export const Education = ({ readOnly }: ReadOnly) => {
  const { setValue, watch } = useFormContext();
  const education: ResumeEducation[] = watch("education");
  const [eduId, setEduId] = React.useState<string>("");

  const handleEduAdd = (_e: any) => {
    const NEW_EDUCATION: ResumeEducation = {
      id: nanoid(),
      startDate: moment().toISOString(),
      endDate: moment().add(1, "days").toISOString(),
      course: "",
      description: "",
      institution: "",
    };
    setValue("education", [...education, NEW_EDUCATION]);
    setEduId(NEW_EDUCATION.id);
  };


  const deleteEdu = (id: string) => {
    setValue(
      "education",
      education.filter((edu) => edu.id !== id)
    );
  };


  const [anchorEl, setAnchorEl] = React.useState(new Array(education.length));

  return (
    <Box>
      {/* <Typography
        variant="TitleLarge"
        paragraph
      > */}
      <p className={tstyle.TitleLarge}>
        Education </p>
      {/* </Typography> */}
      <Box>
        {education.map((edu, i) => {

          const open = Boolean(anchorEl[i]);

          const handleClick = (event: React.MouseEvent<HTMLElement>) => {
            let achorEl = anchorEl;
            achorEl[i] = event.currentTarget;
            setAnchorEl([...achorEl]);
          };

          const handleClose = () => {
            let achorEl = anchorEl;
            achorEl[i] = null;
            setAnchorEl([...achorEl]);
          };

          return (
            <StyledCardContainer
              variant="outlined"
              sx={{ p: 2, mt: 2, px: 4 }}
              key={i}
              onClick={() => { console.log(edu.institution, i) }}
            >
              {readOnly || Boolean(eduId != edu.id) ? (
                <Stack direction="row"
                  justifyContent="space-between"
                  spacing={2}>
                  {/* <Typography variant="TitleLarge"> */}
                  <p className={tstyle.TitleLarge}>
                    {edu.institution} </p>
                  {/* </Typography> */}
                  {!readOnly && <>
                    <IconButton
                      sx={{ ml: 1, color: "onsurfacevariant.main" }}
                      aria-controls="user-menu"
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      size="small"
                    >
                      <HiDotsVertical />
                    </IconButton>
                    <StyledMenu
                      key={edu.id}
                      onClick={() => { console.log(edu.institution, i) }}
                      MenuListProps={{
                        "aria-labelledby": "demo-customized-button",
                      }}
                      anchorEl={anchorEl[i]}
                      open={open}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={() => { setEduId(edu.id), handleClose() }} disableRipple>
                        <HiOutlinePencil style={{ marginRight: "16px" }} />
                        {/* <Typography variant="LabelLarge"> */}
                        <p className={style.LabelLarge}>
                          Edit </p>
                          {/* </Typography> */}
                      </MenuItem>
                      <MenuItem onClick={() => { console.log(edu), deleteEdu(edu.id), handleClose() }} disableRipple>
                        <HiOutlineTrash style={{ marginRight: "16px" }} />
                        {/* <Typography variant="LabelLarge"> */}
                        <p className={tstyle.LabelLarge}>
                          Delete </p>
                          {/* </Typography> */}
                      </MenuItem>
                    </StyledMenu>
                  </>}
                </Stack>
              ) : (
                <Stack direction="row" spacing={2} sx={{ mt: 2, mb: 2 }}>
                  <Controller
                    name={`education[${i}].startDate`}
                    defaultValue={new Date(edu.startDate)}
                    render={({
                      field: { ref, ...field },
                      fieldState: { error },
                    }) => (
                      <LocalizationProvider dateAdapter={DateAdapter} >
                        <MobileDatePicker
                          label="Start Date"
                          inputFormat="DD-MM-yyyy"
                          value={!!field.value ? new Date(field.value) : new Date()}
                          onChange={(newValue: Date | null) => {
                            if (!!newValue) {
                              field.onChange(moment(newValue).toISOString());
                            }
                          }}
                          renderInput={(params: TextFieldProps) => (
                            <TextField
                              {...params}
                              size="small"
                              fullWidth
                              error={!!error}
                              helperText={error ? error.message : null}
                            />
                          )}
                        />
                      </LocalizationProvider>
                    )}
                  />
                  <Controller
                    name={`education[${i}].endDate`}
                    defaultValue={new Date(edu.endDate)}
                    render={({
                      field: { ref, ...field },
                      fieldState: { error },
                    }) => (
                      <LocalizationProvider dateAdapter={DateAdapter} >
                        <MobileDatePicker
                          label="End Date"
                          inputFormat="DD-MM-yyyy"
                          value={!!field.value ? new Date(field.value) : new Date()}
                          onChange={(newValue: Date | null) => {
                            if (!!newValue) {
                              field.onChange(moment(newValue).toISOString());
                            }
                          }}
                          renderInput={(params: TextFieldProps) => (
                            <TextField
                              {...params}
                              size="small"
                              fullWidth
                              error={!!error}
                              helperText={error ? error.message : null}
                            />
                          )}
                        />
                      </LocalizationProvider>
                    )}
                  />
                </Stack>
              )}
              <Stack
                justifyContent="space-between"
                spacing={2}
              >
                {readOnly || Boolean(eduId != edu.id) ? (
                  <>
                    <div>
                      {/* <Typography variant="LabelLarge" color="onsurfacevariant.main"> */}
                      <p className={tstyle.LabelLarge}>
                        {edu.course} </p>
                        {/* </Typography> */}
                    </div>
                    {/* <Typography variant="BodyMedium" color="textSecondary"> */}
                    <p className={tstyle.BodyMedium} >
                      {new Date(edu.startDate).toLocaleDateString(
                        "en-US",
                        dateOptions
                      ) +
                        " - " +
                        new Date(edu.endDate).toLocaleDateString(
                          "en-US",
                          dateOptions
                        )}
                   </p>
                    {/* </Typography> */}
                  </>
                ) : (
                  <>
                    <Controller
                      name={`education[${i}].course`}
                      defaultValue={edu.course}
                      render={({
                        field: { ref, ...field },
                        fieldState: { error },
                      }) => (
                        <TextField
                          size="small"
                          required
                          error={!!error}
                          fullWidth
                          label="Course"
                          {...field}
                        />
                      )}
                    />
                    <Controller
                      name={`education[${i}].institution`}
                      defaultValue={edu.institution}
                      render={({
                        field: { ref, ...field },
                        fieldState: { error },
                      }) => (
                        <TextField
                          label="Institution Name"
                          size="small"
                          required
                          fullWidth
                          error={!!error}
                          {...field}
                        />
                      )}
                    />
                  </>
                )}
              </Stack>
              <Box sx={{ mt: 1 }}>
                {readOnly || Boolean(eduId != edu.id) ? (
                  <Box sx={{ mt: -1, mb: -1 }}>
                    <ReactMarkdown className={style.reactMarkDown}>
                      {edu.description || ""}
                    </ReactMarkdown>
                  </Box>
                ) : (
                  <Controller
                    name={`education[${i}].description`}
                    defaultValue={education[i].description}
                    render={({ field }) => {
                      return (
                        <Box sx={{ mt: 2, mb: 1 }}>
                          <Editor
                            style={{ height: 300 }}
                            value={field.value}
                            renderHTML={(text: string) => {
                              field.onChange(text);
                              return (
                                // <Typography variant="BodyLarge" className="content">
                                <p className={tstyle.BodyLarge}>
                                  <ReactMarkdown className={style.reactMarkDown}>
                                    {text}
                                  </ReactMarkdown>
                                </p>
                               
                              );
                            }}
                          />
                        </Box>
                      );
                    }}
                  />
                )}
              </Box>
              <div>
                {!readOnly && eduId === edu.id && (
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                    <FilledButton
                      startIcon={<HiOutlineCheckCircle />}
                      onClick={() => { if (edu.course && edu.institution) setEduId(""), handleClose() }}
                    >
                      SAVE
                    </FilledButton>
                    <TextButton
                      startIcon={<HiOutlineTrash />}
                      onClick={() => { deleteEdu(edu.id), handleClose() }}
                    >
                      Delete
                    </TextButton>
                  </div>
                )}
              </div>
            </StyledCardContainer>
          )
        })}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        {!readOnly && (
          <TextButton
            startIcon={<HiOutlinePlus />}
            onClick={handleEduAdd}
            sx={{ mt: 1 }}
          >
            Add Education
          </TextButton>
        )}
      </Box>
    </Box >
  )
}

export const Projects = ({ readOnly }: ReadOnly) => {
  const { setValue, watch } = useFormContext();
  const [proId, setProId] = React.useState<string>("");
  const projects: ResumeProjects[] = watch("projects");
  const [data, setData] = React.useState<type[]>([]);
  const [text, setText] = React.useState("A");

  React.useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/fests/getTechnology", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify({ name: text })
    })
      .then(async (res) => res.json())
      .then((json) => {
        setData(json);
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [text]);

  const handleProAdd = (_e: any) => {
    const NEW_PROJECT: ResumeProjects = {
      id: nanoid(),
      description: "",
      github_repo: "",
      project_url: "",
      name: "",
      highlights: [""],
      tags: [],
    };
    setValue("projects", [...projects, NEW_PROJECT]);
    setProId(NEW_PROJECT.id);
  };

  const deletePro = (proId: string) => {
    setValue(
      "projects",
      projects.filter((pro) => pro.id !== proId)
    );
  };

  const [anchorEl, setAnchorEl] = React.useState(new Array(projects.length));


  return (
    <Box>
      {/* <Typography paragraph
        variant="TitleLarge"
      > */}
      <p className={tstyle.TitleLarge}>
        Projects </p>
      {/* </Typography> */}
      <div>
        {projects.map((pro, i) => {
          const open = Boolean(anchorEl[i]);

          const handleClick = (event: React.MouseEvent<HTMLElement>) => {
            let achorEl = anchorEl;
            achorEl[i] = event.currentTarget;
            setAnchorEl([...achorEl]);
          };

          const handleClose = () => {
            let achorEl = anchorEl;
            achorEl[i] = null;
            setAnchorEl([...achorEl]);
          };

          return (
            <StyledCardContainer
              variant="outlined"
              sx={{ p: 2, mt: 2, px: 4 }}
              key={"pro-" + i}
            >
              <Stack spacing={2}>
                {readOnly || Boolean(proId != pro.id) ? (
                  <Stack
                    justifyContent="space-between"
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      {/* <Typography variant="TitleLarge" paragraph> */}
                      <p className={tstyle.TitleLarge}>
                        {pro.name} </p>
                      {/* </Typography> */}
                      {/* </div>
                <div style={{ display: "flex", alignItems: "center" }}> */}
                      {!readOnly && proId != pro.id && (
                        <>
                          <IconButton
                            sx={{ ml: 1, color: "onsurfacevariant.main" }}
                            aria-controls="user-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={(e) => { handleClick(e) }}
                            size="small"
                          >
                            <HiDotsVertical />
                          </IconButton>
                          <StyledMenu
                            id="demo-customized-menu"
                            MenuListProps={{
                              "aria-labelledby": "demo-customized-button",
                            }}
                            anchorEl={anchorEl[i]}
                            open={open}
                            onClose={handleClose}
                          >
                            <MenuItem onClick={() => { setProId(pro.id), handleClose() }} disableRipple>
                              <HiOutlinePencil style={{ marginRight: "16px" }} />
                              {/* <Typography variant="LabelLarge"> */}
                              <p className={tstyle.LabelLarge}>
                                Edit </p>
                                {/* </Typography> */}
                            </MenuItem>
                            <MenuItem onClick={() => {
                              // console.log(pro.name)
                              deletePro(pro.id), handleClose()
                            }} disableRipple>
                              <HiOutlineTrash style={{ marginRight: "16px" }} />
                              {/* <Typography variant="LabelLarge"> */}
                              <p className={style.LabelLarge}>
                                Delete </p>
                                {/* </Typography> */}
                            </MenuItem>
                          </StyledMenu>
                        </>
                      )}
                    </div>
                    <Box sx={{ display: 'flex' }}>
                      <TextButton
                        color="primary"
                        href={pro.project_url}
                        startIcon={<HiOutlineLink />}
                      >
                        {/* <Typography variant="LabelLarge"> */}
                        <p className={tstyle.LabelLarge}>
                          Live Project </p>
                          {/* </Typography> */}
                      </TextButton>
                      <TextButton
                        color="primary"
                        href={pro.github_repo}
                        startIcon={<SiGithub />}
                      >
                        {/* <Typography variant="LabelLarge"> */}
                        <p className={tstyle.LabelLarge}>
                          Source Code</p>
                        {/* </Typography> */}
                      </TextButton>
                    </Box>
                  </Stack>
                ) : (
                  <>
                    <Controller
                      name={`projects[${i}].name`}
                      defaultValue={pro.name}
                      render={({
                        field: { ref, ...field },
                        fieldState: { error },
                      }) => (
                        <TextField
                          required
                          size="small"
                          error={!!error}
                          fullWidth
                          label="Project Name"
                          {...field}
                        />
                      )}
                    />
                    <Controller
                      name={`projects[${i}].github_repo`}
                      defaultValue={pro.github_repo}
                      render={({
                        field: { ref, ...field },
                        fieldState: { error },
                      }) => (
                        <TextField
                          label="Github Repo URL"
                          size="small"
                          required
                          fullWidth
                          error={!!error}
                          {...field}
                        />
                      )}
                    />
                    <Controller
                      name={`projects[${i}].project_url`}
                      defaultValue={pro.project_url}
                      render={({
                        field: { ref, ...field },
                        fieldState: { error },
                      }) => (
                        <TextField
                          label="Project URL"
                          size="small"
                          required
                          fullWidth
                          error={!!error}
                          {...field}
                        />
                      )}
                    />
                  </>
                )}
              </Stack>
              <Box sx={{ mt: 1 }}>
                {readOnly || Boolean(proId != pro.id) ? (
                  <ReactMarkdown className={style.reactMarkDown}>
                    {pro.description || ""}
                  </ReactMarkdown>
                ) : (
                  <Controller
                    name={`projects[${i}].description`}
                    defaultValue={projects[i].description}
                    render={({ field }) => {
                      return (
                        <Box sx={{ mt: 2, mb: 2 }}>
                          <Editor
                            style={{ height: 300 }}
                            value={field.value}
                            renderHTML={(text: string) => {
                              field.onChange(text);
                              return (
                                // <Typography variant="BodyLarge" className="content">
                                <p className={tstyle.BodyLarge}>
                                  <ReactMarkdown className={style.reactMarkDown}>
                                    {text}
                                  </ReactMarkdown>
                                  </p>                                
                               
                              );
                            }}
                          />
                        </Box>
                      );
                    }}
                  />
                )}
              </Box>
              <div>
                {readOnly || Boolean(proId != pro.id) ? (
                  <div>
                    {pro.tags?.length === 0 && (
                      <></>
                    )}
                    <Grid container spacing={1}>
                      {pro.tags?.map((tag, index) => (
                        <Grid item xs="auto" key={tag.name + index}>
                          <Tag label={tag.name} />
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                ) : (
                  <Controller
                    name={`projects[${i}].tags`}
                    defaultValue={pro.tags}
                    render={() => (
                      <Autocomplete
                        multiple
                        getOptionLabel={(data) => data.name}
                        options={data}
                        onChange={(_e, value) => {
                          // value.forEach((val))
                          setValue(`projects[${i}].tags`, [
                            ...value
                          ])
                        }}
                        defaultValue={pro.tags}
                        isOptionEqualToValue={(option, value) => option.name === value.name}
                        renderInput={(params) => {
                          if (((params.inputProps as any).value) !== "") {
                            setText((params.inputProps as any).value);
                          }
                          return (
                            <TextField {...params}
                              label="Technologies" placeholder="Type Tags" variant='standard' />
                          );
                        }
                        }
                      />
                    )}
                  />
                )}
              </div>
              <div>
                {!readOnly && proId === pro.id && (
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                    <FilledButton
                      startIcon={<HiOutlineCheckCircle />}
                      onClick={() => { setProId(""), handleClose(), console.log(projects) }}
                    >
                      SAVE
                    </FilledButton>
                    <TextButton
                      startIcon={<HiOutlineTrash />}
                      onClick={() => { deletePro(pro.id), handleClose() }}
                    >
                      Delete
                    </TextButton>
                  </div>
                )}
              </div>
            </StyledCardContainer>
          )
        })}
      </div>
      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        {!readOnly && (
          <TextButton
            color="success"
            startIcon={<HiOutlinePlus />}
            onClick={handleProAdd}
            sx={{ mt: 1 }}
          >
            Add Projects
          </TextButton>
        )}
      </Box>
    </Box>
  )
}

export const Experience = ({ readOnly }: ReadOnly) => {
  const { setValue, watch } = useFormContext();
  const [expId, setExpId] = React.useState<string>("");
  const experience: ResumeExperience[] = watch("experience");


  const handleExpAdd = (_e: any) => {
    const NEW_EXPERIENCE: ResumeExperience = {
      id: nanoid(),
      startDate: moment().toISOString(),
      endDate: moment().add(1, "days").toISOString(),
      name: "",
      position: "",
      description: "",
      urlLink: "",
      urlName: "",
    };
    setValue("experience", [...experience, NEW_EXPERIENCE]);
    setExpId(NEW_EXPERIENCE.id);
  };

  const deleteExp = (expId: string) => {
    setValue(
      "experience",
      experience.filter((exp) => exp.id !== expId)
    );
  };

  const [anchorEl, setAnchorEl] = React.useState(new Array(experience.length));

  return (
    <Box>
      {/* <Typography paragraph
        variant="TitleLarge"
      > */}
      <p className={tstyle.TitleLarge}>
        Experience </p>
      {/* </Typography> */}
      <div>
        {experience.map((exp, i) => {
          const open = Boolean(anchorEl[i]);

          const handleClick = (event: React.MouseEvent<HTMLElement>) => {
            let achorEl = anchorEl;
            achorEl[i] = event.currentTarget;
            setAnchorEl([...achorEl]);
          };

          const handleClose = () => {
            let achorEl = anchorEl;
            achorEl[i] = null;
            setAnchorEl([...achorEl]);
          };

          return (
            <StyledCardContainer
              variant="outlined"
              sx={{ mt: 2, p: 2, px: 4 }}
              key={"exp-" + i}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                {readOnly || Boolean(expId != exp.id) ? (
                  <>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {/* <Typography variant="TitleLarge" sx={{ mr: 1 }}> */}
                      <p className={tstyle.TitleLarge}>
                        {exp.position + ","}
                        </p>
                        {/* </Typography> */}
                      {/* <Typography variant="BodyLarge" color="onsurfacevariant.main"> */}
                      <p className={tstyle.BodyLarge}>
                        {exp.name} </p>
                      {/* </Typography> */}
                    </div>
                    {!readOnly && expId != exp.id && (
                      <div>
                        <IconButton
                          sx={{ ml: 1, color: "onsurfacevariant.main" }}
                          aria-controls="user-menu"
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                          onClick={handleClick}
                          size="small"
                        >
                          <HiDotsVertical />
                        </IconButton>
                        <StyledMenu
                          id="demo-customized-menu"
                          MenuListProps={{
                            "aria-labelledby": "demo-customized-button",
                          }}
                          anchorEl={anchorEl[i]}
                          open={open}
                          onClose={handleClose}
                        >
                          <MenuItem onClick={() => { setExpId(exp.id), handleClose() }} disableRipple>
                            <HiOutlinePencil style={{ marginRight: "16px" }} />
                            {/* <Typography variant="LabelLarge"> */}
                            <p className={tstyle.LabelLarge}>
                              Edit </p>
                              {/* </Typography> */}
                          </MenuItem>
                          <MenuItem onClick={() => { deleteExp(exp.id), handleClose() }} disableRipple>
                            <HiOutlineTrash style={{ marginRight: "16px" }} />
                            {/* <Typography variant="LabelLarge"> */}
                            <p className={tstyle.LabelLarge}>
                              Delete </p>
                              {/* </Typography> */}
                          </MenuItem>
                        </StyledMenu>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <Controller
                      name={`experience[${i}].position`}
                      defaultValue={exp.position}
                      render={({
                        field: { ref, ...field },
                        fieldState: { error },
                      }) => (
                        <TextField
                          size="small"
                          error={!!error}
                          fullWidth
                          required
                          label="Role / Position"
                          {...field}
                        />
                      )}
                    />
                    <Controller
                      name={`experience[${i}].name`}
                      defaultValue={exp.name}
                      render={({
                        field: { ref, ...field },
                        fieldState: { error },
                      }) => (
                        <TextField
                          label="Company Name"
                          size="small"
                          required
                          fullWidth
                          error={!!error}
                          {...field}
                        />
                      )}
                    />
                  </>
                )}
              </Stack>
              <div>
                {readOnly || Boolean(expId != exp.id) ? (
                  <>
                    {/* <Typography variant="LabelLarge" color="onsurfacevariant.main"> */}
                    <p className={tstyle.LabelLarge}>
                      {new Date(exp.startDate).toLocaleDateString(
                        "en-US",
                        dateOptions
                      ) +
                        " - " +
                        new Date(exp.endDate).toLocaleDateString(
                          "en-US",
                          dateOptions
                        )}
                        </p>
                    {/* </Typography> */}
                  </>
                ) : (
                  <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                    <Controller
                      name={`experience[${i}].startDate`}
                      defaultValue={new Date(exp.startDate)}
                      render={({
                        field: { ref, ...field },
                        fieldState: { error },
                      }) => (
                        <LocalizationProvider dateAdapter={DateAdapter} >
                          <MobileDatePicker
                            label="Start Date"
                            inputFormat="DD-MM-yyyy"
                            value={!!field.value ? new Date(field.value) : new Date()}
                            onChange={(newValue: Date | null) => {
                              if (!!newValue) {
                                field.onChange(moment(newValue).toISOString());
                              }
                            }}
                            renderInput={(params: TextFieldProps) => (
                              <TextField
                                {...params}
                                size="small"
                                fullWidth
                                error={!!error}
                                helperText={error ? error.message : null}
                              />
                            )}
                          />
                        </LocalizationProvider>
                      )}
                    />
                    <Controller
                      name={`experience[${i}].endDate`}
                      defaultValue={new Date(exp.endDate)}
                      render={({
                        field: { ref, ...field },
                        fieldState: { error },
                      }) => (
                        <LocalizationProvider dateAdapter={DateAdapter}>
                          <MobileDatePicker
                            label="End Date"
                            inputFormat="DD-MM-yyyy"
                            value={!!field.value ? new Date(field.value) : new Date()}
                            onChange={(newValue: Date | null) => {
                              if (!!newValue) {
                                field.onChange(moment(newValue).toISOString());
                              }
                            }}
                            renderInput={(params: TextFieldProps) => (
                              <TextField
                                {...params}
                                size="small"
                                fullWidth
                                error={!!error}
                                helperText={error ? error.message : null}
                              />
                            )}
                          />
                        </LocalizationProvider>
                      )}
                    />
                  </Stack>
                )}
              </div>
              <Box>
                {readOnly || Boolean(expId != exp.id) ? (
                  <Box sx={{ mt: -1, mb: -1 }}>
                    <ReactMarkdown className={style.reactMarkDown}>
                      {exp.description || ""}
                    </ReactMarkdown>
                  </Box>
                ) : (
                  <Controller
                    name={`experience[${i}].description`}
                    defaultValue={experience[i].description}
                    render={({ field }) => {
                      return (
                        <Box sx={{ mt: 2 }}>
                          <Editor
                            style={{ height: 300 }}
                            value={field.value}
                            renderHTML={(text: string) => {
                              field.onChange(text);
                              return (
                                // <Typography variant="BodyLarge" className="content">
                                <p className={tstyle.BodyLarge}>
                                  <ReactMarkdown className={style.reactMarkDown}>
                                    {text}
                                  </ReactMarkdown>
                                  </p>
                                // </Typography>
                              );
                            }}
                          />
                        </Box>
                      );
                    }}
                  />
                )}
              </Box>
              <div>
                {!readOnly && expId === exp.id && (
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                    <FilledButton
                      startIcon={<HiOutlineCheckCircle />}
                      onClick={() => { if (exp.name && exp.position) setExpId(""), handleClose() }}
                    >
                      SAVE
                    </FilledButton>
                    <TextButton
                      startIcon={<HiOutlineTrash />}
                      onClick={() => { deleteExp(exp.id), handleClose() }}
                    >
                      Delete
                    </TextButton>
                  </div>
                )}
              </div>
            </StyledCardContainer>
          )
        })}
      </div>
      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        {!readOnly && (
          <TextButton
            startIcon={<HiOutlinePlus />}
            onClick={handleExpAdd}
            sx={{ mt: 1 }}
          >
            Add Experience
          </TextButton>
        )}
      </Box>
    </Box>
  )
}

export const Skills = ({ readOnly }: ReadOnly) => {
  const { setValue, watch } = useFormContext();
  const skills: ResumeSkills[] = watch("skills");
  const [data, setData] = React.useState<type[]>(skills);
  const [text, setText] = React.useState("A");

  React.useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/fests/getTechnology", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify({ name: text })
    })
      .then(async (res) => res.json())
      .then((json) => {
        setData(json);
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [text]);

  const SkillSection = (
    <div>
      {readOnly ? (
        <Grid container spacing={1} sx={{ mt: 1.5 }}>
          {skills.map((tag, index) => (
            <Grid item xs="auto" key={tag.name + index}>
              <Tag label={tag.name} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <>
          <Controller
            name="skills"
            render={() => (
              <Autocomplete
                multiple
                getOptionLabel={(data) => data.name}
                options={data}
                defaultValue={skills}
                onChange={(_e, value) => {
                  // value.forEach((val))
                  setValue("skills", value)
                  // skills = value;
                }}
                isOptionEqualToValue={(option, value) => option.name === value.name}
                renderInput={(params) => {
                  if (((params.inputProps as any).value) !== "") {
                    setText((params.inputProps as any).value);
                  }
                  return (
                    <TextField {...params} label="Technical Skils" variant='standard' />
                  );
                }
                }
              />
            )}
          />
        </>
      )}
    </div>
  );


  return (
    <Box>
      {/* <Typography paragraph
        variant="TitleLarge"
      > */}
      <p className={tstyle.TitleLarge}>
        Skills </p>
      {/* </Typography> */}
      {SkillSection}
    </Box>
  )
}

interface resumeProps extends ReadOnly {
  langs: {},
  gitusername: string,
  score: SCORE,
}

export default function ResumeDetails({ readOnly, score, langs }: resumeProps) {
  const { watch, setValue, getValues } = useFormContext();
  const info: ResumeInfo = watch("info");
  const username: string = watch("username");
  // const coverLetter: string = watch("coverLetter");

  // const Details = (
  //   <Stack direction="column" >
  //     <StatItem>
  //       {!readOnly ? (
  //         <Controller
  //           name={"info.gender"}
  //           defaultValue={info.gender}
  //           render={({ field, fieldState: { error } }) => (
  //             <TextField
  //               size="small"
  //               label="Gender"
  //               select
  //               fullWidth
  //               inputProps={{
  //                 style: {
  //                   fontWeight: 400,
  //                   fontSize: "16px",
  //                   lineHeight: "24px",
  //                 }
  //               }}
  //               InputLabelProps={{
  //                 style: {
  //                   fontWeight: 500,
  //                   fontSize: "14px",
  //                   lineHeight: "20px",
  //                 }
  //               }}
  //               {...field}
  //               error={!!error}
  //               {...field}
  //               ref={null}
  //             >
  //               <MenuItem value={"Male"}>{"Male"}</MenuItem>
  //               <MenuItem value={"Female"}>{"Female"}</MenuItem>
  //               <MenuItem value={"Other"}>{"Other"}</MenuItem>
  //             </TextField>
  //           )}
  //         />
  //       ) : (
  //         <>
  //           <IconButton disabled size="small" sx={{ color: "onsurfacevariant.main" }}>
  //             <HiOutlineUser />
  //           </IconButton>
  //           <Typography variant="LabelLarge">{info.gender}</Typography>
  //         </>
  //       )}
  //     </StatItem>
  //     <StatItem>
  //       {!readOnly ? (
  //         <Tooltip title="Update email from settings tab" placement="bottom-start" >
  //           <Box sx={{ width: "100%" }}>
  //             <Controller
  //               name="info.email"
  //               defaultValue={info.email}
  //               rules={{
  //                 pattern: {
  //                   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  //                   message: "Invalid email",
  //                 },
  //               }}
  //               render={({ field, fieldState: { error } }) => (
  //                 <TextField
  //                   margin="normal"
  //                   fullWidth
  //                   disabled
  //                   id="email"
  //                   label="Email Address"
  //                   inputProps={{
  //                     style: {
  //                       fontWeight: 400,
  //                       fontSize: "16px",
  //                       lineHeight: "24px",
  //                     }
  //                   }}
  //                   InputLabelProps={{
  //                     style: {
  //                       fontWeight: 500,
  //                       fontSize: "14px",
  //                       lineHeight: "20px",
  //                     }
  //                   }}
  //                   autoComplete="email"
  //                   size="small"
  //                   error={!!error}
  //                   helperText={error ? error.message : null}
  //                   {...field}
  //                   ref={null}
  //                 />
  //               )}
  //             />
  //           </Box>
  //         </Tooltip>
  //       ) : (
  //         <>
  //           <IconButton disabled size="small" sx={{ color: "onsurfacevariant.main" }}>
  //             <HiOutlineMail />
  //           </IconButton>
  //           <Typography variant="LabelLarge">{info.email}</Typography>
  //         </>
  //       )}
  //     </StatItem>
  //     <StatItem>
  //       {!readOnly ? (
  //         <Tooltip title="Update Username from settings tab" placement="bottom-start" >
  //           <Box sx={{ width: "100%" }}>
  //             <Controller
  //               name="info.email"
  //               defaultValue={info.email}
  //               rules={{
  //                 pattern: {
  //                   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  //                   message: "Invalid email",
  //                 },
  //               }}
  //               render={({ field, fieldState: { error } }) => (
  //                 <TextField
  //                   margin="normal"
  //                   fullWidth
  //                   disabled
  //                   id="email"
  //                   label="Email Address"
  //                   inputProps={{
  //                     style: {
  //                       fontWeight: 400,
  //                       fontSize: "16px",
  //                       lineHeight: "24px",
  //                     }
  //                   }}
  //                   InputLabelProps={{
  //                     style: {
  //                       fontWeight: 500,
  //                       fontSize: "14px",
  //                       lineHeight: "20px",
  //                     }
  //                   }}
  //                   autoComplete="email"
  //                   size="small"
  //                   error={!!error}
  //                   helperText={error ? error.message : null}
  //                   {...field}
  //                   ref={null}
  //                 />
  //               )}
  //             />
  //           </Box>
  //         </Tooltip>
  //       ) : (
  //         <>
  //           <IconButton disabled size="small" sx={{ color: "onsurfacevariant.main" }}>
  //             <HiOutlineMail />
  //           </IconButton>
  //           <Typography variant="LabelLarge">{info.email}</Typography>
  //         </>
  //       )}
  //     </StatItem>
  //   </Stack >
  // );


  // const Letter = (
  //   <div>
  //     {readOnly ? (
  //       <Typography variant="BodyLarge" className="content">
  //         {coverLetter}
  //       </Typography>
  //     ) : (
  //       <Controller
  //         name="coverLetter"
  //         defaultValue={coverLetter}
  //         render={({ field, fieldState: { error } }) => (
  //           <TextField
  //             margin="normal"
  //             fullWidth
  //             multiline
  //             minRows={3}
  //             id="letter"
  //             placeholder="Write about yourself (your Introduction)"
  //             inputProps={{
  //               style: {
  //                 fontWeight: 400,
  //                 fontSize: "16px",
  //                 lineHeight: "24px",
  //               }
  //             }}
  //             InputLabelProps={{
  //               style: {
  //                 fontWeight: 500,
  //                 fontSize: "14px",
  //                 lineHeight: "20px",
  //               }
  //             }}
  //             autoComplete="letter"
  //             size="small"
  //             error={!!error}
  //             helperText={error ? error.message : null}
  //             {...field}
  //             ref={null}
  //           />
  //         )}
  //       />
  //     )}
  //   </div>
  // );

  // const { enqueueSnackbar } = useSnackbar();
  const { data: session } = useSession();
  const user: DefaultUser = session?.user as DefaultUser;
  // const [uid, setUid] = React.useState<string>();

  const handleDpUpload = async (acceptedFiles: Array<File>) => {
    const accessToken = "Token " + user.accessToken
    const profImage = await handleProfileImageUpload(
      getValues("info.email"),
      acceptedFiles[0],
      accessToken,
    );
    if (!!profImage) {
      setValue("info.profileImage", profImage);
      const user: DefaultUser = JSON.parse(localStorage.getItem("user") || "{}") as DefaultUser;
      user.profileImage = profImage;
      user.name = info.name;
      localStorage.setItem("user", JSON.stringify(user));
      window.dispatchEvent(new Event("storage"));
    } else {
      alert("Image Upload Error");
    }
  };

  // const handleGenerate = async () => {
  //   try {
  //     const accessToken = "Token " + user.accessToken;
  //     let res = await fetch(
  //       process.env.NEXT_PUBLIC_API_URL + "/organize/getUniversalReferral",
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json;charset=utf-8",
  //           Authorization: accessToken,
  //         },
  //       }
  //     );
  //     if (res.ok) {
  //       const { referral_code } = await res.json();
  //       if (!!referral_code) {
  //         setUid(referral_code);
  //       }
  //     } else {
  //       throw new Error("ERROR");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const socials = (
    <div>
      {readOnly ? (
        <>
          {info.socials && (
            <Stack direction="row" spacing={1} justifyContent="flex-start">
              <IconButton color="primary" target="_blank" href={(info.socials.facebookUrl) || ("#")}>
                <SiFacebook />
              </IconButton>
              <IconButton color="primary" target="_blank" href={(info.email) || ("#")}>
                <SiGmail />
              </IconButton>
              <IconButton color="primary" target="_blank" href={(info.socials.linkedinUrl) || ("#")}>
                <SiLinkedin />
              </IconButton>
              <IconButton color="primary" target="_blank" href={(info.socials.githubUrl) || ("#")}>
                <SiGithub />
              </IconButton>
              <IconButton color="primary" target="_blank" href={(info.socials.twitterUrl) || ("#")}>
                <SiTwitter />
              </IconButton>
              <IconButton color="primary" target="_blank" href={(info.socials.instagramUrl) || ("#")}>
                <SiInstagram />
              </IconButton>
              <IconButton color="primary" target="_blank" href={(info.socials.leetcodeUrl) || ("#")}>
                <SiLeetcode />
              </IconButton>
            </Stack>
          )}
        </>
      ) : (
        <>
          {info.socials && (
            <div style={{ minWidth: "300px" }}>
              <Box sx={{ mb: 2, mt: 2 }}>
                <Controller
                  name="info.socials.facebookUrl"
                  defaultValue={info.socials.facebookUrl}
                  rules={{
                    pattern: {
                      value:
                        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi,
                      message: "Please enter a valid URL",
                    },
                  }}
                  render={({ field: { ref, ...field }, fieldState: { error } }) => (
                    <TextField
                      label="Link Facebook"
                      placeholder="https://www.facebook.com/"
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
                      size="small"
                      fullWidth
                      error={!!error}
                      {...field}
                    />
                  )}
                />
              </Box>
              <Tooltip title="change email from settings" placement="bottom-start">
                <Box sx={{ mb: 2, mt: 2 }}>
                  <Controller
                    name="info.email"
                    defaultValue={info.email || ""}
                    rules={{
                      required: "Email required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email",
                      },
                    }}
                    render={({ field, fieldState: { error } }) => (
                      <TextField
                        disabled
                        fullWidth
                        size="small"
                        id="email"
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
                        label="Email Address"
                        autoComplete="email"
                        error={!!error}
                        {...field}
                        ref={null}
                      />
                    )}
                  />
                </Box>
              </Tooltip>
              <Box sx={{ mb: 2 }}>
                <Controller
                  name="info.socials.linkedinUrl"
                  defaultValue={info.socials.linkedinUrl}
                  rules={{
                    pattern: {
                      value:
                        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi,
                      message: "Please enter a valid URL",
                    },
                  }}
                  render={({ field: { ref, ...field }, fieldState: { error } }) => (
                    <TextField
                      label="Link LinkedIn"
                      placeholder="https://www.linkedin.com/"
                      size="small"
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
                      fullWidth
                      error={!!error}
                      {...field}
                    />
                  )}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Controller
                  name="info.socials.instagramUrl"
                  defaultValue={info.socials.instagramUrl}
                  rules={{
                    pattern: {
                      value:
                        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi,
                      message: "Please enter a valid URL",
                    },
                  }}
                  render={({ field: { ref, ...field }, fieldState: { error } }) => (
                    <TextField
                      label="Link Instagram"
                      placeholder="https://www.instagram.com/"
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
                      fullWidth
                      size="small"
                      error={!!error}
                      {...field}
                    />
                  )}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Controller
                  name="info.socials.twitterUrl"
                  defaultValue={info.socials.twitterUrl}
                  rules={{
                    pattern: {
                      value:
                        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi,
                      message: "Please enter a valid URL",
                    },
                  }}
                  render={({ field: { ref, ...field }, fieldState: { error } }) => (
                    <TextField
                      label="Link Twitter"
                      placeholder="https://www.twitter.com/"
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
                      fullWidth
                      size="small"
                      error={!!error}
                      {...field}
                    />
                  )}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Controller
                  name="info.socials.githubUrl"
                  defaultValue={info.socials.githubUrl}
                  rules={{
                    pattern: {
                      value:
                        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi,
                      message: "Please enter a valid URL",
                    },
                  }}
                  render={({ field: { ref, ...field }, fieldState: { error } }) => (
                    <TextField
                      label="Link Github"
                      placeholder="https://www.github.com/"
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
                      fullWidth
                      size="small"
                      // variant="standard"
                      error={!!error}
                      {...field}
                    />
                  )}
                />
              </Box>
              <Box >
                <Controller
                  name="info.socials.leetcodeUrl"
                  defaultValue={info.socials.leetcodeUrl}
                  rules={{
                    pattern: {
                      value:
                        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi,
                      message: "Please enter a valid URL",
                    },
                  }}
                  render={({ field: { ref, ...field }, fieldState: { error } }) => (
                    <TextField
                      label="Link LeetCode"
                      placeholder="https://www.leetcode.com/"
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
                      fullWidth
                      size="small"
                      // variant="standard"
                      error={!!error}
                      {...field}
                    />
                  )}
                />
              </Box>
            </div>
          )}
        </>
      )}
    </div>
  )

  const ProfileImage = (
    <Box
      sx={{
        borderRadius: "100%",
        height: "200px",
        width: "200px",
        justifyContent: "center", mx: "auto"
      }}
    >
      <div style={{ border: "2px solid white", height: "200px", width: "200px", borderRadius: "50%" }}>
        <div style={{ position: "relative", overflow: "hidden", width: "196px", height: "196px", borderRadius: "50%" }}>
          {!!info.profileImage || readOnly ? (
            <>
              <div style={{ border: "2px" }}>
                <Avatar
                  src={info.profileImage || "https://picsum.photos/id/1/200/300"}
                  alt={"Profile"}
                  sx={{
                    height: "200px",
                    width: "200px",
                  }}
                />
              </div>
              {!readOnly && (
                <IconButton
                  size="small"
                  sx={{
                    zIndex: 10,
                    position: "relative",
                    left: 120,
                    top: -30,
                    color: "onprimary.main",
                    backgroundColor: "primary.main",
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: "primary.main"
                    }
                  }}
                  onClick={() => setValue("info.profileImage", "")}
                >
                  <RiPencilFill />
                </IconButton>
              )}
            </>
          ) : (
            <Dropzone
              multiple={false}
              accept={"image/jpeg, image/jpg, image/png" as unknown as Accept}
              maxFiles={1}
              onDrop={handleDpUpload}
            >
              <HiOutlineCloudUpload fontSize={"1.2rem"} />
            </Dropzone>
          )}
        </div>
      </div>
    </Box>
  );

  const nameuser = (
    <div>
      {readOnly ? (
        <Grid item xs={12} sx={{ mt: 0.5 }}>
          {/* <Typography variant="TitleLarge" component="p"> */}
          <p className={tstyle.TitleLarge}>
            {info.name} </p>
          {/* </Typography> */}
          {/* <Typography variant="BodyLarge" color="onsurfacevariant.main"> */}
          <p className={tstyle.BodyLarge}>
            {username} </p>
          {/* </Typography> */}
        </Grid>
      ) : (
        <Stack spacing={2}>
          <Controller
            name="info.name"
            defaultValue={info.name || ""}
            rules={{
              required: "Enter your name",
            }}
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
              <TextField
                fullWidth
                label="Name"
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
                size="small"
                placeholder="Enter Your Name"
                error={!!error}
                helperText={error ? error.message : null}
                {...field}
              />
            )}
          />
          <Tooltip title="change username from settings" placement="bottom-start">
            <div>
              <Controller
                name="username"
                defaultValue={username || ""}
                rules={{
                  required: "Enter your username",
                }}
                render={({ field: { ref, ...field }, fieldState: { error } }) => (
                  <TextField
                    fullWidth
                    disabled
                    size="small"
                    label="Username"
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
                    placeholder="Enter Your Username"
                    error={!!error}
                    helperText={error ? error.message : null}
                    {...field}
                  />
                )}
              />
            </div>
          </Tooltip>
        </Stack>
      )}
    </div>
  )

  const bio = (
    <div>
      {readOnly ? (
        <>
          <Typography
            paragraph
            variant="BodyLarge"
            color="onsurfacevariant.main"
            align="left"
            sx={{ mt: 1.5 }}
          >
            {info.bio}
          </Typography>
        </>
      ) : (
        <div style={{ marginTop: "12PX" }}>
          <Controller
            name="info.bio"
            defaultValue={info.bio}
            rules={{}}
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
              <TextField
                label="Bio"
                placeholder={"Developer's bio"}
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
                fullWidth
                multiline
                rows={4}
                error={!!error}
                {...field}
              />
            )}
          />
        </div>
      )}
    </div>
  )

  return (
    <Box sx={{ padding: "54px 36px" }}>
      <Stack direction={{ md: "row", xs: "column" }} spacing={6}>
        {ProfileImage}
        <div style={{ width: "100%" }}>
          {nameuser}
          {bio}
          {socials}
        </div>
      </Stack>
      {/* {!uid ? <FilledButton onClick={handleGenerate}>
        <Typography variant="LabelLarge">Show Unique Referral</Typography>
      </FilledButton>
        : <TextField
          margin="normal"
          fullWidth
          disabled={!!uid}
          value={uid}
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
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => {
                  navigator.clipboard.writeText(uid!),
                    enqueueSnackbar("Copied to Clipboard!");
                }} disabled={!uid}><FaRegCopy />
                </IconButton>
              </InputAdornment>
            )
          }}
          ref={null}
        />}
      <Typography variant="HeadlineMedium" paragraph sx={{ pt: 2, pb: 2 }}>
        {info.name}
      </Typography>
      {Details}
      <Box>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Typography variant="TitleLarge" paragraph>
          About Me
        </Typography>
        {Letter}
      </Box> */}
      <Stack spacing={"40px"} sx={{ my: "40px" }}>
        <Skills readOnly={readOnly} />
        <Education readOnly={readOnly} />
        <Experience readOnly={readOnly} />
        <Projects readOnly={readOnly} />
      </Stack>
      <Analytics score={score} gitusername={info.socials.githubUrl!.replace("https://github.com/", "")} langs={langs} />
    </Box >
  );
}
