import { HomeHeader } from "~/partials";
import { Associated, Course, Intro } from "~/widgets";

export default function Home() {
  return (
    <>
      <HomeHeader />
      {/* Another Part */}
      <Intro />
      <Course />
      {/* Another module */}
      <Associated />
    </>
  );
}
