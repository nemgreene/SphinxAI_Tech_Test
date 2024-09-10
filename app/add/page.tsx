"use client";

import { addStudent } from "@/lib/features/counter/studentSlice";
import { useAppDispatch } from "@/lib/hooks";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

interface IFormInputs {
  surName: string;
  foreName: string;
  form: string;
  send: boolean;
}

export default function VerifyPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { handleSubmit, control, reset, register } = useForm<IFormInputs>({
    defaultValues: {
      send: false,
      surName: "",
      foreName: "",
      form: "",
    },
  });
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    dispatch(addStudent(data));
    router.push("/");
    reset();
  };
  const options = ["1A", "1B", "2A", "2B"];

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
      <Card sx={{ p: 4 }}>
        <CardContent>
          <Typography
            variant="h5"
            sx={{ p: 2, display: "flex", justifyContent: "center" }}
          >
            Add Student
          </Typography>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Controller
              name="foreName"
              control={control}
              rules={{ required: { value: true, message: "Required Field" } }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  helperText={error ? error.message : null}
                  size="small"
                  error={!!error}
                  onChange={onChange}
                  value={value}
                  fullWidth
                  label={"First Name*"}
                  variant="outlined"
                ></TextField>
              )}
            />
            <Controller
              name="surName"
              control={control}
              rules={{ required: { value: true, message: "Required Field" } }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  helperText={error ? error.message : null}
                  size="small"
                  error={!!error}
                  onChange={onChange}
                  value={value}
                  fullWidth
                  label={"Surname*"}
                  variant="outlined"
                ></TextField>
              )}
            />
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item xs={6}>
                <Controller
                  name="form"
                  control={control}
                  rules={{
                    required: { value: true, message: "Required Field" },
                  }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      select
                      helperText={error ? error.message : null}
                      size="small"
                      error={!!error}
                      onChange={onChange}
                      value={value}
                      fullWidth
                      label={"Form*"}
                      variant="outlined"
                    >
                      {options.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="subtitle1">SEND: </Typography>{" "}
                <Controller
                  name="send"
                  control={control}
                  render={({ field }) => <Checkbox {...field} />}
                />
              </Grid>
            </Grid>
            <Button fullWidth variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
