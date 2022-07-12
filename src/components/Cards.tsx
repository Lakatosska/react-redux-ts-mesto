import { FC } from 'react';
import { data } from "../utils/constants";
import { Card } from "./Card";

export const Cards: FC = () => {
  return (
    <section className="cards">
      <ul className="cards__list">
        {data.map(item =>
          <Card cardData={item} />
        )}
      </ul>
    </section>
  )
};