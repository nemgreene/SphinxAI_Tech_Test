"use client";

import { selectEntries } from "@/lib/features/counter/studentSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid2,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export const Dash = () => {
  const dispatch = useAppDispatch();

  const entries = useAppSelector(selectEntries);

  const columns: GridColDef<(typeof entries)[number]>[] = [
    { field: "id", headerName: "ID", width: 100, flex: 1 },
    {
      field: "foreName",
      headerName: "First name",
      flex: 4,
    },
    {
      field: "surName",
      headerName: "Last name",
      flex: 4,
    },
    {
      field: "form",
      headerName: "Form",
      type: "string",
      flex: 2,
    },
    {
      field: "send",
      headerName: "SEND",
      type: "boolean",
      flex: 2,
    },
  ];

  return (
    <Box
      sx={{
        height: "90vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          width: { xs: "90vw", md: "66vw" },
          maxHeight: "90vh",
          p: 2,
          overflow: "scroll",
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pb: 2,
            }}
          >
            <Typography variant="h4">Student List</Typography>
          </Box>
          <DataGrid
            rows={entries}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[10]}
            disableRowSelectionOnClick
          />
        </CardContent>
      </Card>
    </Box>
  );
};
