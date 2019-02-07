import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMovie } from '../../actions/searchActions';

export class Movie extends Component {
  compnentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
  }
  render() {
    return (
      <React.Fragment>
        <div class="row">
          <div class="col-md-4 card card-body">
            <img src="#movie-poster" class="thumbnail" alt="Poster" />
          </div>
          <div class="col-md-8">
            <h2 class="mb-4">Movie Title</h2>
            <ul class="list-group">
              <li class="list-group-item">
                <strong>Genre:</strong> Movie Genre
              </li>
              <li class="list-group-item">
                <strong>Released:</strong> Movie Released
              </li>
              <li class="list-group-item">
                <strong>Rated:</strong> Movie Rated
              </li>
              <li class="list-group-item">
                <strong>IMDB Rating:</strong> Movie IMDB Rating
              </li>
              <li class="list-group-item">
                <strong>Director:</strong> Movie Director
              </li>
              <li class="list-group-item">
                <strong>Writer:</strong> Movie Writer
              </li>
              <li class="list-group-item">
                <strong>Actors:</strong> Movie Actors
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="card card-body bg-dark my-5 text-light">
            <div class="col-md-12">
              <h3>About </h3>
              About the movie
              <hr />
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-primary"
              >
                View on IMDB
              </a>
              <a href="#" class="btn btn-default text-light">
                Go Back To Search
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading,
  movie: state.movies.movie
});

export default connect(
  mapStateToProps,
  { fetchMovie }
)(Movie);
