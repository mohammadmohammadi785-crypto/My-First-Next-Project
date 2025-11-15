import type { Metadata } from "next";
import Counter from "./counter";
export const metadata: Metadata = {
  title: {
    absolute: "Counter",
  },
};
export default function page() {
  return <Counter />;
}
