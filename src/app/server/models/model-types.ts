export type Image = {
  alt?: string;
  url: string;
};

export type Post = {
  _id: string;
  title: string;
  description?: string;
  imageUrl?: string;
  slug: {
    current: string;
  };
};

export type Home = {
  _id: string;
  title: string;
  posts?: Post[];
};

export type Category = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  imageUrl: string;
};

export type PostCategory = Category & {
  description : string;
};

export type Profile = {
  name: string;
  introduction: any;
  imageUrl: string;
  slogan : string;

}