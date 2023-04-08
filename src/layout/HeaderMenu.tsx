// import { DefaultUser } from "next-auth";
// import { signOut } from "next-auth/react";
// import { useSnackbar } from "notistack";
import React from "react";
import Router from 'next/router'
import {
  // HiOutlineCog,
  HiOutlineLogout,
  HiOutlineUser
} from "react-icons/hi";

// import Link from "@/components/Link";
import { InternalLinks } from "@/content/Links";
import Avatar from "@mui/material/Avatar";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import { alpha, styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { MdDarkMode } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";
import { DefaultUser } from "@/backend/functions";

// export let Mode: boolean = true;


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
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "0",
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

export let mode: boolean;

export const UserGreet = ({ user }: HeaderProps) => {

  return (
    <Typography variant="TitleMedium" sx={{ mr: 1 }}>
      Hi, {user && user.username?.split(' ').slice(0, 1).join(' ')}!
    </Typography>
  )
}

interface HeaderProps {
  user: DefaultUser;
}

export default function HeaderMenu({ user }: HeaderProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // const { enqueueSnackbar } = useSnackbar();
  const open = Boolean(anchorEl);
  // const Router = Router();

  const handleModeChange = (e: any) => {
    if (localStorage.getItem('theme') === '0') {
      localStorage.setItem('theme', '1')
      setTheme("1")
    } else {
      localStorage.setItem('theme', '0')
      setTheme("0")
    }
    window.dispatchEvent(new Event("storage"));
    handleClose();
    e.preventDefault();
    // Router.reload()
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Singnout function for logging out
  const handleSignOut = async (_e: any) => {
    Router.push("/logout");
  };

  const [theme, setTheme] = React.useState("0")

  // const [image, setImage] = React.useState<string>("")
  React.useEffect(() => {
    // setImage(!!usr.profileImage ? usr.profileImage : `https://avatars.dicebear.com/api/human/${Math.floor(Math.random() * 10)}.svg`)
    setTheme(localStorage.getItem('theme') || "0")
    // window.onstorage = () => {
    //   setUser({ ...JSON.parse(localStorage.getItem("user") || "{}") });
    // }
    // setUser({ ...JSON.parse(localStorage.getItem("user") || "{}") });
    // async function foo() {
    //   const user = await JSON.parse(localStorage.getItem("user")!);
    //   setUser(user);
    // }
    // foo();
  }, []);



  return (
    <Stack direction={"row"} alignItems={"center"} spacing={1}>
      {/* Greeting Message to the logged user */}
      <UserGreet user={user} />
      {/* logged user's personal profileImage */}
      <Avatar sx={{ border: "2px solid", borderColor: "primary.main" }}
        aria-controls="user-menu"
        aria-haspopup="menu"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        src={user && user.profileImage || "https://picsum.photos/id/1/200/300"}
        alt={user.username}
      />
      {/* Actual Menu containing Profile Dashboard and logout option */}
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => { window.location.href = InternalLinks.DEV_DASHBOARD + user.username || InternalLinks.SIGNIN_PAGE, console.log(InternalLinks.DEV_DASHBOARD + user.username) }} disableRipple>
          <HiOutlineUser style={{ marginRight: "16px" }} />
          <Typography variant="LabelLarge">Profile</Typography>
        </MenuItem>
        <MenuItem onClick={(e) => { handleModeChange(e) }} disableRipple>
          {theme === "0" ? (
            <>
              <WiDaySunny style={{ marginRight: "16px" }} />
              <Typography variant="LabelLarge">Light Theme</Typography>
            </>
          ) : (
            <>
              <MdDarkMode style={{ marginRight: "16px" }} />
              <Typography variant="LabelLarge">Dark Theme</Typography>
            </>
          )}
        </MenuItem>
        <MenuItem onClick={handleSignOut} disableRipple>
          <HiOutlineLogout style={{ marginRight: "16px" }} />
          <Typography variant="LabelLarge">Logout</Typography>
        </MenuItem>
      </StyledMenu>
    </Stack>
  );
}
