"use client";

import { selectEntries } from "@/lib/features/counter/studentSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export const Dash = () => {
  const dispatch = useAppDispatch();

  const entries = useAppSelector(selectEntries);
  const columns: GridColDef<any>[] = [
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
              flex: 1,
            }}
          >
            <Typography variant="h4">Student List</Typography>
          </Box>
          <DataGrid
            sx={{
              maxHeight: { xs: "70vh", md: "unset" },
              height: { xs: 350, md: "100%" },
            }}
            slotProps={{
              loadingOverlay: {
                variant: "skeleton",
                noRowsVariant: "skeleton",
              },
            }}
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
