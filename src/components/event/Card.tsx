import Image from "next/image";
import { Box, Paper, Typography, Stack, Chip, Divider } from "@mui/material";
import { styled } from "@mui/system";
// import { InternalLinks } from "@/content/Links";
import { CodeArena } from './types'
// import { Tag } from "@/components/Fest/TechTags";
// import Router from 'next/router';
// import { v4 as uuidv4 } from 'uuid';
import { FaLocationArrow } from "react-icons/fa";
import { useState, useEffect } from "react";
import { viewOnly } from './types';
import { FilledButton } from "@/styles/theme";
import { useSession } from "next-auth/react";
import { DefaultUser } from "@/backend/functions";

interface CardProps extends CodeArena, viewOnly { }

export const CardContainer = styled(Paper)(() => ({
  width: 350,
  minHeight: 457,
  padding: "20px",
  margin: "20px auto",
  // border: "1px solid rgba(255, 255, 255, 0.2)",
  backgroundColor: "transparent",
  backgroundImage: "none",
  '#content[aria-hidden=ture]': { display: "none" }
}));

const SingleCard = ({ view, ...props }: CardProps) => {
  const { data: session } = useSession();
  const user: DefaultUser = session?.user as DefaultUser;
  const regstatedate = new Date(props.details.regStartDate);
  const eStartDate = new Date(props.details.startDate)
  const eendDate = new Date(props.details.endDate)
  const regEndDate = new Date(props.details.regEndDate)
  const today = new Date().getTime();
  const label = regstatedate.getTime() < today ? (eStartDate.getTime() < today ? (eendDate.getTime() < today ? "CodeArena has ended" : `Ongoing ${props.type}`) : `Registration close on ${regEndDate.toLocaleDateString()}`) : `Registration starts from ${regstatedate.toLocaleDateString()}`;
  const startdate = props.details.startDate ? new Date(props.details.startDate).toLocaleDateString() + " " + new Date(props.details.startDate).toLocaleTimeString().replace(/(.*)\D\d+/, '$1') : "Invalid Date";
  const enddate = props.details.endDate ? new Date(props.details.endDate).toLocaleDateString() + " " + new Date(props.details.endDate).toLocaleTimeString().replace(/(.*)\D\d+/, '$1') : "Invalid Date";
  const [total, setTotal] = useState<number>(props.count);
  const [img, setImg] = useState<string[]>([]);
  // const type_edit = `${props.type}_EDIT${props.type}`.toUpperCase();
  // const type_preview = `${props.type}_PREVIEW`.toUpperCase();
  // console.log(type_preview);



  useEffect(() => {
    async function foo() {
      const AccessToken = "Token " + user.accessToken;
      const xyz = await fetch(process.env.NEXT_PUBLIC_API_URL + "/organize/countRegistered", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          authorization: AccessToken
        },
        body: JSON.stringify({ eventId: props.festId }),
      })
      if (xyz.ok) {
        const cnt = await xyz.json();
        setTotal(cnt.total);

        setImg(cnt.profileImage)
        if (img.length === 0) {
          // setImage()
          for (let i = 0; i < cnt.total; i++) {
            const dummy = `https://avatars.dicebear.com/api/human/${i * Math.floor(Math.random() * 1000)}.svg`;
            img.push(dummy)
          }
          setImg([...img]);
        }
      }
    }
    if (total === 0 && user) {
      foo();
    }
  })


  const handleApprove = async (data: CodeArena) => {
    console.log(data);
    try {
      const accessToken = "Token " + user.accessToken;
      let res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/fests/createFest",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: accessToken,
          },
          body: JSON.stringify({ festObj: data }),
        }
      );
      if (res.ok) {
        const { success, error } = await res.json();
        if (!!success) {
          const del = await fetch(
            process.env.NEXT_PUBLIC_API_URL + "/fests/deleteFestRequest",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json;charset=utf-8",
                Authorization: accessToken,
              },
              body: JSON.stringify({ id: data.festId }),
            }
          );
          if (del.ok) {
            const fetchnew = await fetch(
              process.env.NEXT_PUBLIC_API_URL + "/fests/getFestRequests",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json;charset=utf-8",
                  Authorization: accessToken,
                },
              }
            )
            if (fetchnew.ok) {
              const newarenas = await fetchnew.json();
              // arenas = newarenas;
              // setArenas([...newarenas])
              console.log(newarenas);
              window.location.reload();
            }
          }
          localStorage.removeItem("CodeArenaData");
        } else {
          console.log(error);
        }
      } else {
        throw new Error("ON CodeArena DETAIL SAVE: ERROR");
      }
    } catch (error) {
      console.log("CodeArena details could not be saved");
      console.log(error);
    }
  }

  const handleDelete = async (data: CodeArena) => {
    console.log(data);
    try {
      const accessToken = "Token " + user.accessToken;
      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/fests/deleteFestRequest",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: accessToken,
          },
          body: JSON.stringify({ id: data.festId }),
        }
      );
      if (res.ok) {
        localStorage.removeItem("CodeArenaData");
        // setOpen(false)
        // setChecked(false)
        window.location.reload();
      } else {
        throw new Error("ON CodeArena DETAIL SAVE: ERROR");
      }
    } catch (error) {
      console.log("CodeArena details could not be saved");
      console.log(error);
    }
  }

  const handleDeleteApproved = async (data: CodeArena) => {
    try {
      const accessToken = "Token " + user.accessToken;
      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/fests/deleteFest",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: accessToken,
          },
          body: JSON.stringify({ id: data.festId }),
        }
      );
      if (res.ok) {
        localStorage.removeItem("CodeArenaData");
        // setOpen(false)
        // setChecked(false)
        window.location.reload();
      } else {
        throw new Error("ON CodeArena DETAIL SAVE: ERROR");
      }
    } catch (error) {
      console.log("CodeArena details could not be saved");
    }
  }

  const handleUnapproved = async (data: CodeArena) => {
    try {
      delete data["approvedBy"];
      const accessToken = "Token " + user.accessToken;
      let res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/fests/createFestRequest",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: accessToken,
          },
          body: JSON.stringify({ festObj: data }),
        }
      );
      if (res.ok) {
        const { success, error } = await res.json();
        if (!!success) {
          const del = await fetch(
            process.env.NEXT_PUBLIC_API_URL + "/fests/deleteFest",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json;charset=utf-8",
                Authorization: accessToken,
              },
              body: JSON.stringify({ id: data.festId }),
            }
          );
          if (del.ok) {
            window.location.reload();
          }
          localStorage.removeItem("CodeArenaData");
        } else {
          console.log(error);
        }
      } else {
        throw new Error("ON CodeArena DETAIL SAVE: ERROR");
      }
    } catch (error) {
      console.log("CodeArena details could not be saved");
    }
  }

  return (
    <CardContainer elevation={1} sx={{ transition: "transform 0.3s", ':hover': { transform: "scale(1.05)" }, }}>
      <Box
        sx={{
          height: "173px",
          overflow: "hidden",
          mb: "20px", position: "relative"
        }}
      >
        <Image height={180}
          width={308}
          alt={props.details.title + " Cometlabs"}
          src={props.details.imageUrl || `https://source.unsplash.com/400x120/?technology,${props.details.imageUrl}`}
          loading="lazy"
        />
      </Box>
      {props.details && (
        <Stack sx={{ mb: "20px" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }} alignItems="center">
            <Typography variant="TitleLarge" sx={{ fontWeight: 500 }}>{props.details.title}</Typography>
            {props.details.websiteUrl &&
              <a
                href={props.details.websiteUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={props.details.title}
              >
                <FaLocationArrow style={{ fontSize: "1.3rem" }} />
              </a>
            }
          </Box>
          <Box sx={{ height: "60px" }}>
            {props.details.desc ? (
              <Typography variant="LabelLarge" color="onsurfacevariant.main">{props.details.desc}</Typography>
            ) : (<></>)}
          </Box>
          <Stack sx={{ display: "flex", flexDirection: "row", mt: 0.5, justifyContent: "flex-start", alignItems: "flex-start" }}>
            <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
              <Typography variant="BodyLarge" component="p" sx={{ textAlign: "left", width: "100%" }}>Start Date</Typography>
              <Typography variant="BodySmall">{startdate}
              </Typography>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ mr: 2 }} />
            <Box sx={{ display: "flex", flexDirection: "column" }} alignItems="center">
              <Typography variant="BodyLarge" sx={{ textAlign: "left", width: "100%" }}>End Date</Typography>
              <Typography variant="BodySmall" component="p">{enddate}
              </Typography>
            </Box>
          </Stack>
        </Stack>
      )}
      <>
        <Stack direction="row" sx={{ mb: "20px", ml: "10px", minHeight: "30px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {props.count ? (
            <Stack direction="row" position="relative">
              {total && [..."testing"].map((_image, index) => index < 6 && (
                <Box key={index} sx={{ background: "white", height: "30px", width: "30px", boxShadow: `0px 4px 16px 0px #00000025`, borderRadius: "50%", overflow: "hidden", marginLeft: "-10px", zIndex: { index } }}>
                  <Image src={`https://avatars.dicebear.com/api/human/${index * Math.floor(Math.random() * 1000)}.svg`}
                    height={30}
                    width={30}
                    loading='lazy'
                    alt={"-photo"} />
                </Box>
              ))}
            </Stack>
          ) : (
            <Stack direction="row" position="relative">
              {total && img.map((image, index) => index < 6 && (
                <Box key={index} sx={{ background: "white", height: "30px", width: "30px", boxShadow: `0px 4px 16px 0px #00000025`, borderRadius: "50%", overflow: "hidden", marginLeft: "-10px", zIndex: { index } }}>
                  <Image src={image}
                    height={30}
                    width={30}
                    objectFit="cover"
                    loading="lazy"
                    alt={"-photo"} />
                </Box>
              ))}
            </Stack>
          )}
          <Typography variant="LabelMedium" color="outline.main">{total} Registered</Typography>
        </Stack>
      </>

      <Stack direction="row" sx={{ my: "20px", justifyContent: "center", alignItems: "center" }}>
        <Chip sx={{ width: "90%", textAlign: "left" }} label={label} />
      </Stack>
      {/* <FilledButton variant="filled" sx={{ width: "100%" }} href={`${InternalLinks.LANDING_PAGE}fest/${props.festId}`}>
        <Typography variant="LabelLarge" >
          Views
        </Typography>
      </FilledButton> */}
      {!view ? (
        <>
          {props.approvedBy ? (
            <FilledButton variant="filled" sx={{ width: "100%" }} href={`/Explore/${props.type}/Preview/` + props.festId}>
              <Typography variant="LabelLarge">
                View
              </Typography>
            </FilledButton>
          ) : (
            <FilledButton variant="filled" sx={{ width: "100%" }} href={`/Explore/${props.type}/Edit${props.type}/` + props.festId + "/edit"}>
              <Typography variant="LabelLarge">
                Edit
              </Typography>
            </FilledButton>
          )}
        </>
      ) : (
        <>
          {props.approvedBy ? (
            <>
              <Stack rowGap={1}>
                <Stack direction="row" columnGap={1}>
                  <FilledButton variant="filled" sx={{ width: "100%" }} href={`/Explore/${props.type}/Preview/` + props.festId}>
                    <Typography variant="LabelLarge">
                      View
                    </Typography>
                  </FilledButton>
                  <FilledButton variant="filled" sx={{ width: "100%" }} href={`/Explore/${props.type}/Preview/` + props.festId + "/edit"}>
                    <Typography variant="LabelLarge">
                      Edit
                    </Typography>
                  </FilledButton>
                </Stack>
                <Stack direction="row" columnGap={1}>
                  <FilledButton variant="filled" sx={{ width: "100%" }} onClick={() => handleUnapproved(props)}>
                    <Typography variant="LabelLarge">
                      Unapprove
                    </Typography>
                  </FilledButton>
                  <FilledButton variant="filled" sx={{ width: "100%" }} onClick={() => handleDeleteApproved(props)}>
                    <Typography variant="LabelLarge">
                      Delete
                    </Typography>
                  </FilledButton>
                </Stack>
              </Stack>
            </>
          ) : (
            <Stack rowGap={1}>
              <Stack direction="row" columnGap={1}>
                <FilledButton variant="filled" sx={{ width: "100%" }} href={`/Explore/${props.type}/Edit${props.type}/` + props.festId}>
                  <Typography variant="LabelLarge">
                    View
                  </Typography>
                </FilledButton>
                <FilledButton variant="filled" sx={{ width: "100%" }} href={`/Explore/${props.type}/Edit${props.type}/` + props.festId + "/edit"}>
                  <Typography variant="LabelLarge">
                    Edit
                  </Typography>
                </FilledButton>
              </Stack>
              <Stack direction="row" columnGap={1}>
                <FilledButton variant="filled" sx={{ width: "100%" }} onClick={() => handleApprove(props)}>
                  <Typography variant="LabelLarge">
                    Approve
                  </Typography>
                </FilledButton>
                <FilledButton variant="filled" sx={{ width: "100%" }} onClick={() => handleDelete(props)}>
                  <Typography variant="LabelLarge">
                    Delete
                  </Typography>
                </FilledButton>
              </Stack>
            </Stack>
          )}
        </>
      )}
    </CardContainer>
  );
}
export default SingleCard;



