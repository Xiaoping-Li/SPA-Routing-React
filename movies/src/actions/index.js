import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';
export const SET_SELECTED_MOVIE = 'SET_SELECTED_MOVIE';

export const getMovies = () => {
	const promise = axios.get('http://localhost:5000/api/movies'); 
	return {
		type: GET_MOVIES,
		payload: promise
	};
};

export const setSelectedMovie = (id) => {
	const promise = axios.get(`http://localhost:5000/api/movies/${id}`);
	return {
		type: SET_SELECTED_MOVIE,
		payload: promise
	};
};