import type { Metadata } from "next";
import { Dash } from "./components/dash/Dash";

export default function IndexPage() {
  return <Dash />;
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
