export interface Post {
  id: string;
  source: string;
  user: string;
  avatar: string;
  video?: string;
}

export type PostsRoutes = {
  routes: undefined;
  post: { post: Post };
};
