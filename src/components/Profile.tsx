import { FC } from 'react';
//import photo from '../images/photo-profile.jpg'
import { TProfile } from '../utils/types';

interface ProfileProps {
  profile: TProfile
}

export const Profile: FC<ProfileProps> = ({ profile }) => {

  return (
    <section className='profile'>
      <div className='profile__info'>

        <div className="profile__avatar">
          <img
            className="profile__avatar-image"
            src={profile.avatar}
            alt="фотография владельца аккаунта"
          />
        </div>
      </div>

      <div className="profile__item">
        <h1 className="profile__name">{profile.name}</h1>
        <button
          type="button"
          className="profile__edit-button"
          aria-label="изменить данные профиля"
        ></button>
        <p className="profile__job">{profile.about}</p>
      </div>

      <button
        type="button"
        className="profile__add-button"
        aria-label="добавить фотографию"
      ></button>
      
    </section>
  )
};