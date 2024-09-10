import { createAppSlice } from "@/lib/createAppSlice";
import type { AppThunk } from "@/lib/store";
import type { PayloadAction } from "@reduxjs/toolkit";

import data from "./DummyData.json";

export interface StudentEntry {
  id: string;
  foreName: string;
  surName: string;
  form: string;
  send: boolean;
}
export interface StudentSliceState {
  entries: StudentEntry[];
}

const initialState: StudentSliceState = {
  entries: data,
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const studentSlice = createAppSlice({
  name: "student",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: (create) => ({
    addStudent: create.reducer(
      (
        state,
        {
          payload,
        }: PayloadAction<{
          foreName: string;
          surName: string;
          form: string;
          send: boolean;
        }>
      ) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        let insert = {
          ...payload,
          id:
            state.entries
              .map((v) => v.id)
              .sort()
              .reverse()[0] + 1,
        };
        state.entries.push(insert);
      }
    ),

    // Use the `PayloadAction` type to declare the contents of `action.payload`
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectEntries: (store) => store.entries,
  },
});

// Action creators are generated for each case reducer function.
export const { addStudent } = studentSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectEntries } = studentSlice.selectors;
