export type TCard = {
  likes: [];
  _id: string;
  name: string;
  link: string;
  owner: object;
  createdAt: string;
}

/*
"likes": [],
"_id": "5d1f0611d321eb4bdcd707dd",
"name": "Байкал",
"link": "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
"owner": {
  "name": "Jacques Cousteau",
  "about": "Sailor, researcher",
  "avatar": "https://pictures.s3.yandex.net/frontend-developer/ava.jpg",
  "_id": "ef5f7423f7f5e22bef4ad607",
  "cohort": "local"
  },
"createdAt": "2019-07-05T08:10:57.741Z"
*/

export type TProfile = {
  name: string;
  about: string;
  avatar: string;
  _id: string;
  cohort: string;
}

/*
{
  "name": "Jacques Cousteau",
  "about": "Sailor, researcher",
  "avatar": "https://pictures.s3.yandex.net/frontend-developer/ava.jpg",
  "_id": "e20537ed11237f86bbb20ccb",
  "cohort": "cohort0"
} 
*/