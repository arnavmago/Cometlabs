import {
  HiOutlineChevronDoubleLeft,
  HiOutlineCog,
  HiOutlineCube,
  HiOutlineDocumentText,
  HiOutlineQuestionMarkCircle
} from "react-icons/hi";

import { IconButton, Stack } from "@mui/material";
import { styled } from "@mui/system";
import { MdDarkMode } from "react-icons/md";
import { CardContainer } from "@/styles/theme";

const Sidebar = styled(CardContainer)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100vh - 92px",
  borderRadius: "0px",
  minWidth: "64px",
  padding: "24px 0px",
});

const SidebarOptionContainer = styled(CardContainer)({
  height: "40px",
  width: "44px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "0px",
  borderTopRightRadius: "8px",
  borderBottomRightRadius: "8px",
});

type SidebarOptionProps = {
  selected?: boolean;
  icon: React.ReactNode;
  name: string;
  id?: string;
};

interface SideBarProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export default function SideBar({ activeTab, setActiveTab }: SideBarProps) {
  const SidebarOption = ({ selected, icon, name }: SidebarOptionProps) => (
    <SidebarOptionContainer
      onClick={() => setActiveTab(name)}
      elevation={selected ? 3 : 0}
      sx={{
        borderRight: selected ? "4px solid #0D81FD" : "none",
      }}
    >
      {icon}
    </SidebarOptionContainer>
  );

  return (
    <Sidebar elevation={2}>
      <Stack spacing={2}>
        {SidebarOptions.map((tab) => (
          <SidebarOption
            key={tab.id}
            selected={activeTab === tab.name}
            icon={tab.icon}
            name={tab.name}
          />
        ))}
      </Stack>
      <IconButton size="small" href="/">
        <HiOutlineChevronDoubleLeft />
      </IconButton>
    </Sidebar>
  );
}

const SidebarOptions: SidebarOptionProps[] = [
  {
    id: "kabiksdas",
    icon: <HiOutlineQuestionMarkCircle fontSize="1.3rem" />,
    name: "problem",
  },

  {
    id: "labkbkjbasd",
    icon: <HiOutlineDocumentText fontSize="1.3rem" />,
    name: "explorer",
  },

  {
    id: "kanodnal",
    icon: <HiOutlineCube fontSize="1.3rem" />,
    name: "cube",
  },

  {
    id: "bajsdbkajbs",
    icon: <HiOutlineCog fontSize="1.3rem" />,
    name: "settings",
  },

  {
    id: "bajfghtyajbs",
    icon: <MdDarkMode fontSize="1.3rem" />,
    name: "dark",
  },
];
