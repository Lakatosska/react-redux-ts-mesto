import { FC } from 'react';
//import { data } from "../utils/constants";
import { TCard } from '../utils/types';
import { Card } from "./Card";
import { useAppSelector } from '../services/store';

export const Cards: FC = () => {

  const { cards } = useAppSelector(state => state.cardsReducer);
  console.log("component is rerendered");
  console.log("cards", cards);

  return (
    <section className="cards">
      <ul className="cards__list">
        {cards?.map(item =>
          <Card key={item._id} cardData={item} />
        )}
      </ul>
    </section>
  )
};