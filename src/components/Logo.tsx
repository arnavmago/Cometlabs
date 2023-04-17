import { Box } from "@mui/material";
// import Typography from "@mui/material/Typography";
import Image from "next/image";
import * as React from "react";
import style from "@/styles/typography-styles.module.css";

interface footer {
  isDark?: boolean;
}

// exportinng Typograhic version of COMETLABS logo
export default function Logo({ isDark }: footer) {
  const [theme, setTheme] = React.useState("0")

  React.useEffect(() => {
    window.addEventListener("storage", () => {
      const the = window.localStorage.getItem('theme') || "0";
      setTheme(the)
    })
  }, [])

  if (isDark) {
    return (
      <Box>
        <Image
          src="/Dark_Logo.svg"
          alt={"logo"}
          height={14}
          width={110}
        />
        {/* <Typography paragraph sx={{ mb: 0, mt: -0.5 }}
          color="onsurfacevariant.main"
          variant="LabelSmall"
        > */}
        <p className={style.LabelSmall} style={{ color: "#c4c6d0" }}>
          (Backed by CIE-IIITH)
        </p>
        {/* </Typography> */}
      </Box>
    )
  }

  return (
    <Box>
      <Image
        src={theme == "0" ? "/Dark_Logo.svg" : "/Light_Logo.svg"}
        alt={"logo"}
        height={14}
        width={110}
      />
      {/* <Typography paragraph sx={{ mb: 0, mt: -0.5 }}
        color="onsurfacevariant.main"
        variant="LabelSmall"
      > */}
      <p className={style.LabelSmall} style={{ color: "#c4c6d0" }}>
        (Backed by CIE-IIITH)
      </p>
      {/* </Typography> */}
    </Box>
  );
}
