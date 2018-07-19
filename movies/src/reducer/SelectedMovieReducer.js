 import { SET_SELECTED_MOVIE } from '../actions';

 export default (selectedMovie = null, action) => {
 	switch(action.type) {
 		case SET_SELECTED_MOVIE:
 			return action.payload.data;
 		default:
 			return selectedMovie;
 	}
 };