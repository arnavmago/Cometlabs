import { Button, PaletteColorOptions, Paper } from "@mui/material";
import { createTheme, SimplePaletteColorOptions, styled } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface Palette {
    onprimary: SimplePaletteColorOptions;
    primarycontainer: SimplePaletteColorOptions;
    onprimarycontainer: SimplePaletteColorOptions;
    newbackground: SimplePaletteColorOptions;
    onbackground: SimplePaletteColorOptions;
    surfacevariant: SimplePaletteColorOptions;
    onsurfacevariant: SimplePaletteColorOptions;
    outline: SimplePaletteColorOptions;
    inverseonsurface: SimplePaletteColorOptions;
    inversesurface: SimplePaletteColorOptions;
    inverseprimary: SimplePaletteColorOptions;
    shadow: SimplePaletteColorOptions;
    tempcolor: SimplePaletteColorOptions;
    color1: SimplePaletteColorOptions;
    color2: SimplePaletteColorOptions;
  }
  interface PaletteOptions {
    onprimary: PaletteColorOptions;
    primarycontainer: PaletteColorOptions;
    onprimarycontainer: PaletteColorOptions;
    newbackground: PaletteColorOptions;
    onbackground: PaletteColorOptions;
    surfacevariant: PaletteColorOptions;
    onsurfacevariant: PaletteColorOptions;
    outline: PaletteColorOptions;
    inverseonsurface: PaletteColorOptions;
    inversesurface: PaletteColorOptions;
    inverseprimary: PaletteColorOptions;
    shadow: PaletteColorOptions;
    tempcolor: PaletteColorOptions;
    color1: PaletteColorOptions;
    color2: PaletteColorOptions;
  }

  interface TypographyVariants {
    DisplayLarge: React.CSSProperties;
    DisplayMedium: React.CSSProperties;
    DisplaySmall: React.CSSProperties;
    HeadlineLarge: React.CSSProperties;
    HeadlineMedium: React.CSSProperties;
    HeadlineSmall: React.CSSProperties;
    TitleLarge: React.CSSProperties;
    TitleMedium: React.CSSProperties;
    TitleSmall: React.CSSProperties;
    LabelLarge: React.CSSProperties;
    LabelMedium: React.CSSProperties;
    LabelSmall: React.CSSProperties;
    BodyLarge: React.CSSProperties;
    BodyMedium: React.CSSProperties;
    BodySmall: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    DisplayLarge?: React.CSSProperties;
    DisplayMedium?: React.CSSProperties;
    DisplaySmall?: React.CSSProperties;
    HeadlineLarge?: React.CSSProperties;
    HeadlineMedium?: React.CSSProperties;
    HeadlineSmall?: React.CSSProperties;
    TitleLarge?: React.CSSProperties;
    TitleMedium?: React.CSSProperties;
    TitleSmall?: React.CSSProperties;
    LabelLarge?: React.CSSProperties;
    LabelMedium?: React.CSSProperties;
    LabelSmall?: React.CSSProperties;
    BodyLarge?: React.CSSProperties;
    BodyMedium?: React.CSSProperties;
    BodySmall?: React.CSSProperties;
  }

  // Update the Typography's variant prop options

}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    button: false;
    inherit: false;
    body1: false;
    body2: false;
    subtitle1: false;
    subtitle2: false;
    caption: false;
    overline: false;
    DisplayLarge: true;
    DisplayMedium: true;
    DisplaySmall: true;
    HeadlineLarge: true;
    HeadlineMedium: true;
    HeadlineSmall: true;
    TitleLarge: true;
    TitleMedium: true;
    TitleSmall: true;
    LabelLarge: true;
    LabelMedium: true;
    LabelSmall: true;
    BodyLarge: true;
    BodyMedium: true;
    BodySmall: true;
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    onprimary: true;
    primarycontainer: true;
    onprimarycontainer: true;
    newbackground: true;
    onbackground: true;
    surfacevariant: true;
    onsurfacevariant: true;
    outline: true;
    inverseonsurface: true;
    inversesurface: true;
    inverseprimary: true;
    shadow: true;
    error: true;
    tempcolor: true;
  }
  interface ButtonPropsVariantOverrides {
    filled: true;
  }
}

const theme = createTheme();

const the = createTheme(theme, {
  components: {
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          boxShadow: `0px 4px 16px 0px #A6A6A640`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        borderRadius: "4px",
      },
    },
    MuiTextField: {
      styleOverrides: {
        inputProps: {
          style: {
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
          }
        },
        InputLabelProps: {
          style: {
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "20px",
          }
        },
      }
    }
  },
});


export const lighttheme = createTheme({
  ...the,
  typography: {
    fontFamily: "Inter",
    fontWeightBold: 600,
    button: {
      textTransform: "none",
    },
    DisplayLarge: {
      fontWeight: 600,
      fontSize: "57px",
      lineHeight: "64px",
    },
    DisplayMedium: {
      fontWeight: 600,
      fontSize: "45px",
      lineHeight: "52px",
    },
    DisplaySmall: {
      fontWeight: 600,
      fontSize: "36px",
      lineHeight: "44px",
    },
    HeadlineLarge: {
      fontWeight: 500,
      fontSize: "32px",
      lineHeight: "40px",
    },
    HeadlineMedium: {
      fontWeight: 500,
      fontSize: "28px",
      lineHeight: "36px",
    },
    HeadlineSmall: {
      fontWeight: 500,
      fontSize: "24px",
      lineHeight: "32px",
    },
    TitleLarge: {
      fontWeight: 500,
      fontSize: "22px",
      lineHeight: "28px",
    },
    TitleMedium: {
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "24px",
    },
    TitleSmall: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "20px",
    },
    LabelLarge: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "20px",
    },
    LabelMedium: {
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "16px",
    },
    LabelSmall: {
      fontWeight: 500,
      fontSize: "11px",
      lineHeight: "16px",
    },
    BodyLarge: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
    },
    BodyMedium: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
    },
    BodySmall: {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "16px",
    },
  },
  palette: {
    primary: { main: "#0D81FD" },
    onprimary: { main: "#FFFFFF" },
    primarycontainer: { main: "#D6E2FF" },
    onprimarycontainer: { main: "#001A42" },
    newbackground: { main: "#FDFBFF" },
    onbackground: { main: "#1B1B1D" },
    surfacevariant: { main: "#E1E2EC" },
    onsurfacevariant: { main: "#44474F" },
    outline: { main: "#74777F" },
    inverseonsurface: { main: "#F2F0F4" },
    inversesurface: { main: "#2F3033" },
    inverseprimary: { main: "#ABC7FF" },
    shadow: { main: "#000000" },
    error: { main: "#BA1B1B" },
    tempcolor: { main: "#FDFBFF" },
    color1: { main: "#AE86EF" },
    color2: { main: "#FFCF27" },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          boxShadow: `0px 4px 16px 0px #A6A6A640`,
        },
      },
    },
  },
});


export const darktheme = createTheme({
  ...the,
  typography: {
    fontFamily: "Inter",
    fontWeightBold: 600,
    button: {
      textTransform: "none",
    },
    DisplayLarge: {
      fontWeight: 600,
      fontSize: "57px",
      lineHeight: "64px",
    },
    DisplayMedium: {
      fontWeight: 600,
      fontSize: "45px",
      lineHeight: "52px",
    },
    DisplaySmall: {
      fontWeight: 600,
      fontSize: "36px",
      lineHeight: "44px",
    },
    HeadlineLarge: {
      fontWeight: 500,
      fontSize: "32px",
      lineHeight: "40px",
    },
    HeadlineMedium: {
      fontWeight: 500,
      fontSize: "28px",
      lineHeight: "36px",
    },
    HeadlineSmall: {
      fontWeight: 500,
      fontSize: "24px",
      lineHeight: "32px",
    },
    TitleLarge: {
      fontWeight: 500,
      fontSize: "22px",
      lineHeight: "28px",
    },
    TitleMedium: {
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "24px",
    },
    TitleSmall: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "20px",
    },
    LabelLarge: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "20px",
    },
    LabelMedium: {
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "16px",
    },
    LabelSmall: {
      fontWeight: 500,
      fontSize: "11px",
      lineHeight: "16px",
    },
    BodyLarge: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
    },
    BodyMedium: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
    },
    BodySmall: {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "16px",
    },
  },
  palette: {
    mode: 'dark',
    background: { default: "#060606" },
    primary: { main: "#ABC7FF" },
    onprimary: { main: "#002E6A" },
    primarycontainer: { main: "#004495" },
    onprimarycontainer: { main: "#D6E2FF" },
    newbackground: { main: "#1B1B1D" },
    onbackground: { main: "#E4E2E6" }, // = surface
    surfacevariant: { main: "#44474F" }, // = onsurface
    onsurfacevariant: { main: "#C4C6D0" },
    outline: { main: "#8E9099" },
    inverseonsurface: { main: "#1B1B1D" },
    inversesurface: { main: "#E4E2E6" },
    inverseprimary: { main: "#005AC1" },
    shadow: { main: "#000000" },
    error: { main: "#FFB4A9" },
    tempcolor: { main: "#0b0b0b" },
    color1: { main: "#AE86EF" },
    color2: { main: "#FFCF27" },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(255, 255, 255, 0.2)",
        },
      },
    },
  }
});

export const CardContainer = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.newbackground.main,
  borderRadius: 0
}))

export const StyledCardContainer = styled(Paper)({
  backgroundColor: "transparent", border: "2px solid", borderImageSource: "linear-gradient(180deg, #003B93 0%, rgba(102, 164, 255, 0.1) 100%)", borderImageSlice: 1, backgroundImage: "none"
})

export const FilledButton = styled(Button)(({ theme }) => ({
  borderRadius: "4px",
  padding: "10px 24px",
  color: theme.palette.onprimary.main,
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: (theme.palette.primary.main),
    opacity: (theme.palette.primary.main, 0.8),
  },
  '&:focus': {
    color: theme.palette.onprimary.main,
    backgroundColor: theme.palette.primary.main,
  },
  '&:disabled': {
    color: theme.palette.onbackground.main,
    // backgroundColor: "#363636", // on-background + opacity color
    backgroundColor: theme.palette.newbackground.main,
    opacity: 0.8,
  },
}));

export const OutlinedButton = styled(Button)(({ theme }) => ({
  border: `1px solid ${theme.palette.outline.main}`,
  borderRadius: "4px",
  padding: "10px 24px",
  color: theme.palette.primary.main,
  '&:hover': {
    // backgroundColor: (theme.palette.primary.main),
    opacity: (theme.palette.primary.main, 0.8),
  },
  '&:focus': {
    opacity: (theme.palette.primary.main, 1.2),
  },
  '&:disabled': {
    borderColor: theme.palette.onbackground.main,
    color: theme.palette.onbackground.main,
    opacity: 0.12,
  },
}));

export const TextButton = styled(Button)(({ theme }) => ({
  borderRadius: "4px",
  padding: "10px 24px",
  color: theme.palette.primary.main,
  '&:hover': {
    opacity: (theme.palette.primary.main, 0.8),
  },
  '&:focus': {
    opacity: (theme.palette.primary.main, 1.2),
  },
  '&:disabled': {
    color: theme.palette.onbackground.main,
    opacity: 0.12,
  },
}));

export const ElevatedButton = styled(Button)(({ theme }) => ({
  borderRadius: "4px",
  position: "absolute",
  padding: "10px 24px",
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.newbackground.main,
  '&:hover ': {
    backgroundColor: theme.palette.newbackground.main,
    opacity: (theme.palette.primary.main, 0.8),
  },
  '&:focus': {
    backgroundColor: theme.palette.newbackground.main,
    opacity: (theme.palette.primary.main, 1.2),
  },
  '&:disabled': {
    color: theme.palette.onbackground.main,
    backgroundColor: "#363636", // on-background + opacity color
    opacity: 0.4,
  },
}));

export const TonalButton = styled(Button)(({ theme }) => ({
  borderRadius: "4px",
  padding: "10px 24px",
  color: theme.palette.onbackground.main,
  // backgroundColor: theme.palette.primary.main,
  // opacity: (theme.palette.primary.main, 1.2),
  // backgroundColor: `rgba(${theme.palette.primary.main}, 0.12)`,
  '&:hover': {
    backgroundColor: `rgba(171, 199, 255, 0.08)`,
    // backgroundColor: `rgba(${theme.palette.onprimarycontainer.main}, 0.16)`,
  },
  '&:focus': {
    backgroundColor: `rgba(171, 199, 255, 0.16)`,
  },
  '&:disabled': {
    color: theme.palette.onbackground.main,
    backgroundColor: "#363636", // on-background + opacity color
    opacity: 0.4,
  },
}));