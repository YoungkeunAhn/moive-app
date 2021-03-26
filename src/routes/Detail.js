import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div>
          <img src={location.state.poster} alt={location.state.title} />
          <h1 className="movie__title">{location.state.title}</h1>
          <span className="movie__year">{location.state.year}</span>
          <div className="movie__genres">{location.state.genres}</div>
          <p className="movie__summary">{location.state.summary}</p>
        </div>
      );
    } else {
      return null;
    }
  }
}

// function Detail(props) {
//   console.log(props);
//   const { title, year, summary, genres, poster } = props.location.state;
//   return (
//     <div>
//       <img src={poster} alt={title} />
//       <h1 className="movie__title">{title}</h1>
//       <span className="movie__year">{year}</span>
//       <div className="movie__genres">{genres}</div>
//       <p className="movie__summary">{summary}</p>
//     </div>
//   );
// }

export default Detail;
