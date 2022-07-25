import { FC } from "react";

export const PopupWithForm: FC<any> = ({isOpen, name, title, children}) => {
  return (
    <div className={`popup popup_type_$name ${isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container">
          <form className="form" name={name} /* novalidate */>
            <h2 className="form__heading">{title}</h2>

            {children}
          </form>

          <button
            type="button"
            className="popup__close-button"
            aria-label="закрыть"
          ></button>
        </div>
      </div>
  )
};