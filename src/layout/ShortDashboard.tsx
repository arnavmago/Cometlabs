import * as React from "react";
import {
  Box,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";

const drawerWidth = 200;

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

export interface DashboardProps {
  tabs: Array<{
    label: React.ReactNode;
    component: React.ReactNode;
  }>;
}

export default function ShortDashboard(props: DashboardProps) {
  const { tabs } = props;
  const [selectedIndex, setSelectedIndex] = React.useState(0);


  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedIndex(newValue);
  };

  return (
    <div
      style={{ display: "flex", width: "100%" }}
    >
      <Box
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            maxHeight: "400px",
            maxWidth: "200px"
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={selectedIndex}
            onChange={handleChange}
            TabIndicatorProps={{
              style: {
                width: "0px",
                color: "onsurfacevariant.main"
              },
            }}
            sx={{
              borderTop: "1px solid rgba(255, 255, 255, 0.2)",
              borderBottom: "none",
              boxShadow: "none",
              "& .MuiButtonBase-root.Mui-selected": {
                backgroundColor: 'rgba(171, 199, 255, 0.2)',
              }
            }}
          >
            {tabs.map((tab, i) => (
              <Tab sx={{ border: "1px solid rgba(255, 255, 255, 0.2)", borderTop: "none" }} iconPosition="start" label={<Typography variant="TitleMedium">{tab.label}</Typography>} {...a11yProps(i)} key={"tab-" + i} />
            ))}
          </Tabs>
        </div>
      </Box>

      <div
        style={{
          height: "100%",
          marginLeft: "20px",
          minHeight: "424px"
        }}
      >
        {tabs.map((tab, i) => (
          <TabPanel key={i} value={selectedIndex} index={i}>
            {tab.component}
          </TabPanel>
        ))}
      </div>
    </div>
  );
}
