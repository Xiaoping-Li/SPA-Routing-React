import { combineReducers } from 'redux';
import MoviesReducer from './MoviesReducer';
import SelectedMovieReducer from './SelectedMovieReducer';

const rootReducer = combineReducers({
	movies: MoviesReducer,
	selectedMovie: SelectedMovieReducer,
});

export default rootReducer;
