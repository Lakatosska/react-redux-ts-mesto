import { FC, useEffect } from "react";
import { Profile } from "../components/Profile";
import { Cards } from "../components/Cards";
import { useAppSelector, useAppDispatch } from "../services/store";
import { fetchCards, fetchProfile } from "../services/ActionCreators";
//import { deleteCard } from "../utils/api";
//import { deleteCard } from "../services/ActionCreators";

export const HomePage: FC = () => {

  return (
    <>
      <Profile />
      <Cards />
    </>
  );
};