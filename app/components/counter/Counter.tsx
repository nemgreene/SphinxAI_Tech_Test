"use client";

import { useState } from "react";

import {
  selectCount,
  selectStatus,
  selectEntries,
} from "@/lib/features/counter/counterSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import styles from "./Counter.module.css";
import { Box, Typography } from "@mui/material";

export const Counter = () => {
  const dispatch = useAppDispatch();

  const entries = useAppSelector(selectEntries);

  return <Box>Landing Page</Box>;
};
