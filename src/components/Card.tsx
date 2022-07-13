import { FC } from 'react';
import { TCard } from '../utils/types';

interface ICardData {
  cardData: TCard;
}

export const Card: FC<ICardData> = ({ cardData }) => {
  return (
    <li className="card">
      <img className="card__photo" src={cardData.link} alt="фото достопримечательности" />
      <button type="button" className="card__trash-button"></button>
      <div className="card__info">
        <h2 className="card__sightseeing">{cardData.name}</h2>
        <button type="button" className="card__heart-button"></button>
      </div>
    </li>
  )
};