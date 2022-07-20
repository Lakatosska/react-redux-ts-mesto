import { FC } from "react";
import { TCard } from "../utils/types";



export const PopupImage: FC<TCard> = (cardData: TCard) => {
  return (
    <div className={`popup popup_type_image ${cardData? 'popup_opened' : ''}`}>
      <div className="popup__container popup__container_type_image">
        <img className="popup__photo" src={cardData.link} alt={cardData.name}></img>
        <h2 className="popup__sightseeing">{cardData.name}</h2>
        <button
          type="button"
          className="popup__close-button"
          aria-label="закрыть"
        ></button>
      </div>
    </div>
  )
};