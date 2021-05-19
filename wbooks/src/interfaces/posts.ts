import Routes from '@constants/routes';

export interface Post {
  id: string;
  source: string;
  user: string;
  avatar: string;
  video?: string;
}
type RootStackParamList = {
  Gallery: Routes.Gallery;
  DetailPost: Routes.DetailPost;
};

export type PostsRoutes = {
  routes: RootStackParamList;
  postData: { post: Post };
};
