import { FC } from "react";
import { Profile } from "../components/Profile";
import { Cards } from "../components/Cards";


export const HomePage: FC = () => {

  return (
    <>
      <Profile />
      <Cards />
    </>
  );
};