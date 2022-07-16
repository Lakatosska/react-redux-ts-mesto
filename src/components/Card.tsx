import { FC, useState } from 'react';
import { useAppSelector } from '../services/store';
import { TCard } from '../utils/types';


interface ICardData {
  cardData: TCard;
}

export const Card: FC<ICardData> = ({ cardData }) => {

  const [ ActionTrashButton, setActionTrashButton ] = useState(false);

  const { profile } = useAppSelector(state => state.profileReducer);
  const { cards } = useAppSelector(state => state.cardsReducer);

  /*
  const isOwn = cardData.owner._id === profile._id;
    if (isOwn) { setActionTrashButton(true) }

    return (
    ...
      {ActionTrashButton &&
      (<button type="button" className="card__trash-button"></button>)}
    ...
  */

  const isOwn = cardData.owner._id === profile._id;

  return (
    <li className="card">
      <img className="card__photo" src={cardData.link} alt="фото достопримечательности" />

     
      {isOwn && (<button type="button" className="card__trash-button"></button>)}

      <div className="card__info">
        <h2 className="card__sightseeing">{cardData.name}</h2>
        <button type="button" className="card__heart-button"></button>
      </div>
    </li>
  )

  
};