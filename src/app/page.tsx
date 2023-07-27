import { HomeHeader } from "~/partials";
import { Associated, Intro } from "~/widgets";

export default function Home() {
  return (
    <>
      <HomeHeader />
      {/* Another Part */}
      <Intro />
      {/* Another module */}
      <Associated />
    </>
  );
}
