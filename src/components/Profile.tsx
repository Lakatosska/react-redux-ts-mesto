import { FC } from 'react';
import photo from '../images/photo-profile.jpg'

export const Profile: FC = () => {
  return (
    <section className='profile'>
      <div className='profile__info'>

        <div className="profile__avatar">
          <img
            className="profile__avatar-image"
            src={photo}
            alt="фотография владельца аккаунта"
          />
        </div>
      </div>

      <div className="profile__item">
        <h1 className="profile__name">Lakatosska</h1>
        <button
          type="button"
          className="profile__edit-button"
          aria-label="изменить данные профиля"
        ></button>
        <p className="profile__job">Исследователь жизни</p>
      </div>

      <button
        type="button"
        className="profile__add-button"
        aria-label="добавить фотографию"
      ></button>
      
    </section>
  )
};