import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../actions';
import { Link } from 'react-router-dom';

class Movies extends Component {
	componentDidMount() {
		this.props.getMovies();
	}

	render() {
		return (
			<div>
				<ul>
					{this.props.movies.map((movie, i) => {
						return (
							<li key={i}>
								<Link to={`/movies/${movie.id}`}>
									{movie.title}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>

		);
	}
}

const mapStatetoProps = (state) => {
	return {
		movies: state.movies,
	}
}

export default connect(mapStatetoProps, { getMovies })(Movies); 