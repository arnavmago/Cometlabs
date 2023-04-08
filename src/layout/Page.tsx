import { FC, useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { DefaultUser } from "@/backend/functions";
import dynamic from "next/dynamic";

const Header = dynamic(() => import('@/layout/Header'),
  { ssr: false, }
);

const Footer = dynamic(() => import('@/layout/Footer'),
  { ssr: false, }
);

interface PageProps {
  noFooter?: boolean;
  noHeader?: boolean;
}

const Page: FC<PageProps> = ({ children, noFooter, noHeader }) => {
  const [user, setUser] = useState<DefaultUser>({} as DefaultUser)

  useEffect(() => {
    const usr = JSON.parse(localStorage.getItem('user')!)
    setUser(usr);
  }, [])

  return (

    <>
      {noHeader ? <div /> : <Header user={user} />}
      <Container
        sx={{ minHeight: "100vh" }}
      >
        {children}
      </Container>
      {noFooter ? <div /> : <Footer user={user} />}
    </>
  );
}

export default Page;
