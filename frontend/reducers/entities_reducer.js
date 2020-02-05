import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import PostsReducer from './posts_reducer';
import RequestsReducer from './requests_reducer';
import FriendshipsReducer from './friendships_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    posts: PostsReducer,
    requests: RequestsReducer,
    friendships: FriendshipsReducer
});

export default EntitiesReducer;
