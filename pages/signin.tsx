import { GetServerSideProps } from "next";
import { BuiltInProviderType } from "next-auth/providers";
import * as NextAuth from "next-auth/react";
import * as React from "react";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Head from "next/head";
import dynamic from "next/dynamic";
import { SignInFormData } from "@/components/MainArea/SigninArea";
import { CircularProgress } from "@mui/material";

const SigninForm = dynamic(() => import('@/components/MainArea/SigninArea'),
  { loading: () => <Loading />, ssr: false }
);

const PasswordSignin = dynamic(() => import('@/components/MainArea/PasswordSignin'),
  { loading: () => <Loading />, ssr: false }
);

const Loading = () => {
  return (
    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
      <CircularProgress />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context;
  const session = await NextAuth.getSession({ req });
  if (session && res && session.user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      providers: await NextAuth.getProviders(),
    },
  };
};

interface SignInProps {
  providers: Record<
    NextAuth.LiteralUnion<BuiltInProviderType, string>,
    NextAuth.ClientSafeProvider
  >;
  csrfToken: string;
}

export default function SignIn(props: SignInProps) {
  const { watch } = useForm<SignInFormData>();
  const [password, setPassword] = React.useState(false);
  const pass = React.useRef({});
  pass.current = watch("password");
  const [authToken, setauthToken] = React.useState<string>("");

  return (
    <>
      <Head>
        <title>Signin | COMETLABS</title>
      </Head>
      {props &&
        <Box sx={{ width: "100%", minHeight: "100vh" }}>
          {password ? <PasswordSignin authToken={authToken} pass={pass} /> : <SigninForm providers={props.providers} setPassword={setPassword} setauthToken={setauthToken} />}
        </Box>}
    </>
  );
}
