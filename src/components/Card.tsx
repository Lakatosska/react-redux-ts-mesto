import { FC } from 'react';

type TCard = {
  link: string;
  name: string;
}

interface ICardData {
  cardData: TCard;
}

export const Card: FC<ICardData> = ({ cardData }) => {
  const { link, name } = cardData;
  return (
    <li className="card">
      <img className="card__photo" src={link} alt="фото достопримечательности" />
      <button type="button" className="card__trash-button"></button>
      <div className="card__info">
        <h2 className="card__sightseeing">{name}</h2>
        <button type="button" className="card__heart-button"></button>
      </div>
    </li>
  )
};