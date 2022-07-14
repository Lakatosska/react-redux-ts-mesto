import { FC } from 'react';
import { data } from "../utils/constants";
import { TCard } from '../utils/types';
import { Card } from "./Card";

interface CardProps {
  cards: TCard[]
}

export const Cards: FC<CardProps> = ({ cards }) => {

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