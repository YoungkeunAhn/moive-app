import React from 'react';
import propTypes from 'prop-types';
 


const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: "https://mk0asiacryptotopf9lu.kinstacdn.com/wp-content/uploads/2020/09/kimchi-1068x534.jpg",
    rating: 3.5
  },
  {
    id: 2,
    name: "steak",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbbqchiefs.com%2Fwp-content%2Fuploads%2F2019%2F04%2FRibeye-Steak-Garlic-Butter.jpg&f=1&nofb=1",
    rating: 4.5
  },
  {
    id: 3,
    name:"pasta",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic01.nyt.com%2Fimages%2F2017%2F04%2F05%2Fdining%2F05COOKING-NIGMEATBALLS2%2F05COOKING-NIGMEATBALLS2-videoSixteenByNineJumbo1600.jpg&f=1&nofb=1",
    rating: 2.5
  }
]



function Food( { name,picture,rating } ){
  return(
    <div>
      <h3>I like { name }</h3>
      <h3>{ rating } / 5.0</h3>
      <img src={ picture } alt={ name }/>
    </div>
  );
}


Food.propTypes = {
  name: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  rating: propTypes.number
};

function App() {
  return (
    <div className="App">
      {foodILike.map( foods => (
        <Food key={foods.id} name={foods.name} picture={foods.image} rating={foods.rating} />
      ))}
    </div>
    
  );
}

export default App;
