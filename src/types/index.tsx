export interface IParams {
  id: string;
}

export interface ITechList {
  id: string;
  title: string;
  status: string;
}

export interface IUserInfo {
  name: string;
  password?: string;
  email: string;
  course_module: string;
  contact: string;
  bio: string;
}

export interface ICardProps {
  text: string;
  endpoint?: string;
  altura?: string;
}

export interface IDivStyledProps {
  altura?: string;
}

interface ITechs {
  title: string
}

export interface IComunidade {
  id: string;
  name: string;
  course_module: string;
  techs: ITechs[];
  avatar_url: string;
}

export interface IModalAvatar {
  token: string;
  closeModalAvatar: () => void;
}