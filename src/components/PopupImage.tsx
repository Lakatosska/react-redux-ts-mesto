import { FC } from "react";

export const PopupImage: FC = () => {
  return (
    <div className="popup popup_type_image">
      <div className="popup__container popup__container_type_image">
        <img className="popup__photo" src="" alt=""></img>
        <h2 className="popup__sightseeing"></h2>
        <button
          type="button"
          className="popup__close-button"
          aria-label="закрыть"
        ></button>
      </div>
    </div>
  )
};