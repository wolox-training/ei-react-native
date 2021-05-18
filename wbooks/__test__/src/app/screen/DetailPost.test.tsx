import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react-native';

import { Mockposts } from '../../../../src/constants/mockposts';
import { Post } from '../../../../src/interfaces/posts';
import DetailPost from '../../../../src/app/screens/DetailPost';
import MockedNavigator from '../components/MockedNavigator';

const MOCKED_TEST = Mockposts[0];
const posts: Post = MOCKED_TEST;
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(posts);

describe('detailposts', () => {
  test('source not be null, id not visible', () => {
    function renderPost() {
      const params: any = {
        route: {
          key: undefined,
          name: 'post',
          params: {
            post: posts
          }
        }
      };
      const navigation: any = {
        routes: undefined,
        post: { post: posts }
      };
      return <DetailPost route={params.route} navigation={navigation} key={posts.id} />;
    }

    const { getByText, queryByText } = render(
      <Provider store={store}>
        <MockedNavigator component={renderPost} params={posts} key={posts.id} />
      </Provider>
    );
    expect(getByText(posts.user)).toBeDefined();
    expect(queryByText(posts.user)).not.toBeNull();
    expect(queryByText(posts.id)).toBeNull();
  });
});
