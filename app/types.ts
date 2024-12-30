export interface Job {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
}

export interface Provider {
  id: string;
  name: string;
  profession: string;
  hourlyRate: number;
  image: string;
}

export interface ShowcaseWork {
  id: number;
  imageUrl: string;
  title: string;
}

export interface Profile {
  image: string;
  name: string;
  occupation: string;
  location: string;
  bio: string;
}

export interface ReviewProvider {
  id: string;
  name: string;
  profession: string;
  rating: number;
  image: string;
}

export interface ReviewComment {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

