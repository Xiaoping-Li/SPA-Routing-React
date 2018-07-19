 import React, { Component } from 'react';
 import { connect } from 'react-redux';
 import { setSelectedMovie } from '../actions';

 class MovieDetail extends Component {
 	componentDidMount() {
 		this.props.setSelectedMovie(this.props.match.params.id);
 	}

 	render() {
 		if (this.props.setSelectedMovie === null) return null;
 		return (
 			<div>
 				<h1>{this.props.selectedMovie.title}</h1>
 				<h3>Director: {this.props.selectedMovie.director}</h3>
 				<h3>MetaScore: {this.props.selectedMovie.metascore}</h3>
 				<h3>stars: {this.props.selectedMovie.stars}</h3>
 			</div>
 		);
 	}
 }

 const mapStateToProps = (state) => {
 	return {
 		selectedMovie: state.selectedMovie,
 	}
 }

 export default connect(mapStateToProps, { setSelectedMovie})(MovieDetail);