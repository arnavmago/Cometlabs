import Image from "next/image";

import { Container, Link, Typography } from "@mui/material";

export default function custom404() {
  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Image
        src={"/LogoBlack.png"}
        height={260}
        width={300}
        alt={"Cometlabs Logo"}
      />
      <Typography variant="TitleLarge" sx={{ m: 2 }}>
        {"The page you're looking for doesn't exist"}
      </Typography>
      <Typography variant="LabelLarge">
        <Link href="/">
          Back to home page
        </Link>
      </Typography>
    </Container>
  );
}
