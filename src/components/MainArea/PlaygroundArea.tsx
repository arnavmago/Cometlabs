// this component will return playground cards, ready to use anywhere.
import { Grid, IconButton, Modal, TextField, Typography } from "@mui/material";
import { DefaultUser } from "@/backend/functions";
import * as React from "react";
// import ShowcaseSmall from "@/components/Carousels/ShowcaseSmall";
import Image from "next/image";
import { CardContainer, TextButton } from "@/styles/theme";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import { MdOutlineCancel } from 'react-icons/md';
import dynamic from "next/dynamic";

const ModalPlayground = dynamic(() => import('@/components/MainArea/Modals'),
  { ssr: false }
);


interface play {
  plus?: boolean;
  value?: string;
}


const PlayArea = ({ plus, value }: play) => {
  const [user, setUser] = React.useState<DefaultUser>();


  React.useEffect(() => {
    async function foo() {
      const usr = JSON.parse(window.localStorage.getItem('user') || "{}");
      if (usr) {
        setUser(usr);
      }
    }
    foo();
  }, [])

  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Grid direction="row" container spacing={2} justifyContent="center">
        {FestecTracks.map(
          (festectracks, i) => (festectracks.title.includes(value!) && i < 5 &&
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
        {plus && <Grid item>
          <CardContainer sx={{ textAlign: "center", p: 2, height: "80px", width: "66px", border: 0, cursor: "pointer" }}
            onClick={() => { setOpen(true) }} elevation={1}>
            <Image
              src="/plus.png"
              height={34}
              width={34}
              alt={"add-logo"}
            />
            {/* <Typography sx={{ fontWeight: 500, mt: 1 }}>{props.title}</Typography> */}
          </CardContainer>
        </Grid>}
      </Grid>
      <ModalPlayground open={open} setOpen={setOpen} user={user} />
      {/* <Modal open={open} onClose={() => setOpen(false)}>
        <Grid container>
          <Grid item sx={{ borderRadius: "4px", textAlign: "center", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", justifyContent: "space-between", alignContent: "center", width: { xs: "80%", sm: "70%", md: "50%" } }}>
            <CardContainer elevation={0} sx={{ p: 3, pb: { md: 7, xs: 4 }, maxWidth: "200x" }}>
              <Typography paragraph sx={{ mb: 5 }} variant="TitleLarge">Explore COMETLABS</Typography>
              <Grid direction="row" container spacing={2} justifyContent="center" alignItems="center">
                {FestecTracks.map(
                  (festectracks, i) =>
                    <Grid item key={"pg-" + i}>
                      <TrackCard
                        // index={i}
                        user={user}
                        {...festectracks}
                      />
                    </Grid>
                )}
              </Grid>
            </CardContainer>
          </Grid>
        </Grid>
      </Modal> */}
    </>
  );
}


export default PlayArea;

interface TrackCardProps extends Track {
  selected?: boolean;
  sx?: any;
  user?: DefaultUser | undefined;
  // index: number,
  // labs?: Array<LABS>;
}

export function TrackCard({ selected, sx, user, ...props }: TrackCardProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('MyLab');

  const handleClick = (name: string) => {
    if (user) {
      // localStorage.setItem("free", JSON.stringify(`${props.title}-lab`));
      localStorage.setItem("free", JSON.stringify(name));
      const link = "/lab/" + props.title + "/" + user.username + "/f/" + uuidv4();
      if (!user.username) {
        router.push('/signin')
      } else {
        router.push(link)
      }
    }
    else {
      router.push('/signin')
    }
  }

  const handleClose = (_event: string, reason: string) => {
    if (reason && reason == "backdropClick")
      return;
    setOpen(false)
  }

  function capitalizeFirstLetter(string: string) {
    const str = string.replace("-t", "-T");
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function capitalizeLetter(string: string) {
    const str = string.replace("-t", " T");
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <>
      <CardContainer sx={{ "&:hover": { backgroundColor: "surfacevariant.main" }, height: "100px", width: "100px", p: 1, py: 2, display: "flex", flexDirection: "column", justifyContent: "space-between", backgroundColor: "transparent", backgroundImage: "none" }} onClick={() => { setOpen(true) }} elevation={1}>
        <div style={{ width: "40px", height: "40x", margin: "auto", marginTop: "0px" }}>
          <Image
            src={`/new/${capitalizeFirstLetter(props.title)}.png`}
            height={40}
            width={40}
            // layout="fill"
            alt={props.title + "-logo"}
          />
        </div>
        <Typography variant="BodySmall">{capitalizeLetter(props.title)}</Typography>
      </CardContainer>
      <Modal open={open} onClose={handleClose}>
        <Grid container>
          <Grid item sx={{ borderRadius: "4px", textAlign: "center", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", justifyContent: "space-between", alignContent: "center", width: { xs: "80%", sm: "70%", md: "50%" } }}>
            <IconButton sx={{ position: "absolute", right: "16px", top: "16px" }} onClick={() => { setOpen(false) }}><MdOutlineCancel /></IconButton>
            <CardContainer elevation={0} sx={{ p: 3, pb: { md: 7, xs: 4 }, maxWidth: "200x", backgroundColor: "black" }}>
              <Typography paragraph sx={{ mb: 5 }} variant="TitleLarge">Create {props.title[0].toUpperCase() + props.title.slice(1)}-LAB</Typography>
              <TextField
                margin="normal"
                required
                defaultValue="MyLab"
                label="Enter Lab Name"
                type="text"
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
                onChange={(e) => setName(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <TextButton
                      color="primary"
                      onClick={() => { handleClick(name) }}
                    >
                      <Typography variant="LabelMedium">Open</Typography>
                    </TextButton>
                  ),
                }}
                ref={null}
              />
            </CardContainer>
          </Grid>
        </Grid>
      </Modal>
    </>
  )
}

export interface Track {
  title: string;
  // imageUrl: string;
}

export const FestecTracks: Array<Track> = [
  {
    // imageUrl: "",
    title: "react"
  },
  {
    // imageUrl: "",
    title: "angular",
  },
  {
    // imageUrl: "",
    title: "vue",
  },
  {
    // imageUrl: "",
    title: "next",
  },
  {
    // imageUrl: "",
    title: "nuxt",
  },
  {
    // imageUrl: "",
    title: "react-Typescript"
  },
  {
    // imageUrl: "",
    title: "next-Typescript",
  },
  {
    // imageUrl: "",
    title: "quasar",
  },
  {
    // imageUrl: "",
    title: "quasar-Typescript",
  },
  {
    // imageUrl: "",
    title: "remix",
  },
  {
    // imageUrl: "",
    title: "remix-Typescript",
  },
  {
    // imageUrl: "",
    title: "solid",
  },
  {
    // imageUrl: "",
    title: "solid-Typescript",
  },
  {
    // imageUrl: "",
    title: "svelte",
  },
  {
    // imageUrl: "",
    title: "vite-Lit",
  },
  {
    // imageUrl: "/vite-lit-typescript.png",
    title: "vite-Lit-Typescript",
  },
  {
    // imageUrl: "/vite-preact.svg",
    title: "vite-Preact",
  },
  {
    // imageUrl: "/vite-preact-typescript.svg",
    title: "vite-Preact-Typescript",
  },
  {
    // imageUrl: "/vite-react.svg",
    title: "vite-React",
  },
  {
    // imageUrl: "/vite-react-typescript.svg",
    title: "vite-React-Typescript",
  },
  {
    // imageUrl: "",
    title: "vite-Svelte",
  },
  {
    // imageUrl: "",
    title: "vite-Svelte-Typescript",
  },
  {
    // imageUrl: "",
    title: "vite-Vanilla",
  },
  {
    // imageUrl: "",
    title: "vite-Vanilla-Typescript",
  },
  {
    // imageUrl: "",
    title: "vue-Typescript",
  },
  {
    // imageUrl: "",
    title: "express"
  },
  {
    // imageUrl: "",
    title: "feathers"
  },
  {
    // imageUrl: "",
    title: "nest"
  },
  {
    // imageUrl: "",
    title: "java"
  },
  {
    // imageUrl: "",
    title: "c"
  },
  {
    // imageUrl: "",
    title: "cpp"
  },
  {
    // imageUrl: "",
    title: "swift"
  },
  {
    // imageUrl: "",
    title: "python"
  },
];