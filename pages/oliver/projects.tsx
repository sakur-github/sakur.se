import type { NextPage } from "next";
import { Typography, Card, Box, useTheme } from "@mui/material";
import { ReactElement, useEffect } from "react";
import { styled } from "@mui/system";
import OliverLayout from "components/Layouts/OliverLayout";

const MyCard = styled(Card)`
  padding: 2rem;
  p {
    margin: 1rem 0;
  }
`;

const Oliver: NextPage = () => {
  const theme = useTheme();
  const cardStyle = {
    backgroundColor:
      theme.palette.mode === "light"
        ? "rgba(255, 255, 255, 0.6)"
        : "rgba(0, 0, 0, 0.6)",
  };
  return (
    <>
      <Typography variant="h3">Projects</Typography>
      <Typography>
        I have participated in a lot of different projects over the years.
        Here's a selection.
      </Typography>
    </>
  );
};

Oliver.getLayout = (page: ReactElement) => {
  return <OliverLayout>{page}</OliverLayout>;
};

export default Oliver;
