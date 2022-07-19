import { FC, useEffect } from "react";
import { Profile } from "../components/Profile";
import { Cards } from "../components/Cards";
import { useAppSelector, useAppDispatch } from "../services/store";
import { fetchCards, fetchProfile } from "../services/ActionCreators";
import { deleteCard } from "../utils/api";
//import { deleteCard } from "../services/ActionCreators";

export const HomePage: FC = () => {

  const { cards } = useAppSelector(state => state.cardsReducer);
  const { profile } = useAppSelector(state => state.profileReducer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCards())
  }, [dispatch])

  useEffect(()=>{
    dispatch(fetchProfile())
  },[])

  return (
    <>
      <Profile profile={profile}/>
      <Cards cards={cards}/>
    </>
  );
};