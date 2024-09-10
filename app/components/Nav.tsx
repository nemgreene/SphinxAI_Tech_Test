"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import Link from "@mui/material/Link";
import * as NextLink from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";

interface LinksInterface {
  display: string;
  url: string;
}

const links: Array<LinksInterface> = [
  { display: "Dash", url: "/" },
  { display: "Add Student", url: "/add" },
];

export const Nav = () => {
  const pathname = usePathname();

  const [value, setValue] = React.useState(
    links.map((v) => v.url).indexOf(pathname) || 0
  );

  const router = useRouter();

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    router.push(links[newValue].url);
  };
  React.useEffect(() => {
    setValue(links.map((v) => v.url).indexOf(pathname) || 0);
  }, [pathname]);

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {links.map((v: LinksInterface, i: number) => (
            <Tab key={i} label={v.display} {...a11yProps(i)} />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};
