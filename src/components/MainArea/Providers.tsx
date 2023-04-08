import { IconButton, Stack } from '@mui/material';
import React from 'react'
import { SiGithub, SiGoogle } from "react-icons/si";
import * as NextAuth from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers";

interface Providers {
    providers: Record<NextAuth.LiteralUnion<BuiltInProviderType, string>, NextAuth.ClientSafeProvider>,
}

function Providers({ providers }: Providers) {
    const getIcon = (name: string) => {
        switch (name) {
            case "Google":
                return <SiGoogle fontSize="2rem" />;
            case "GitHub":
                return <SiGithub fontSize="2rem" />;
            default:
                return <SiGoogle />;
        }
    };

    return (
        <Stack direction="row" columnGap={1} sx={{ mb: "30px", justifyContent: "center" }}>
            {providers && Object.values(providers).map((provider) => {
                const providerId = String(provider.name).toLowerCase();
                if (providerId !== "credentials") {
                    return (
                        <IconButton
                            onClick={() => { NextAuth.signIn(providerId) }}
                            key={provider.name}
                            color="inherit"
                            aria-label={provider.name}
                        >
                            {getIcon(provider.name)}
                        </IconButton>
                    );
                }
            })}
        </Stack>
    )
}

export default Providers