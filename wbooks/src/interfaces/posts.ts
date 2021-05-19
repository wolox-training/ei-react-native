import Routes from '@constants/routes';

export interface Post {
  id: string;
  source: string;
  user: string;
  avatar: string;
  video?: string;
}

export type PostsRoutes = {
  routes: Routes;
  postData: { post: Post };
};
