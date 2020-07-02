const ratings = [
	{ movieId: 1, value:4 },
	{ movieId: 2, value:3 },
	{ movieId: 3, value:2 },
	{ movieId: 4, value:5 },
	{ movieId: 5, value:1 },
	{ movieId: 6, value:3 },
	{ movieId: 7, value:5 },
	{ movieId: 8, value:5 },
];

// Add key to element
const ratingsMovieMap = ratings.reduce(( ratingMovieIds, rating ) => {
	let key = rating.movieId;
	let isRatingSet = key in ratingMovieIds;
	if (!isRatingSet) {
		ratingMovieIds[key] = rating;
	}
	return ratingMovieIds;
}, {});

// console.log(ratingsMovieMap);

// Map
const movies = [
	{ id:1, title: "Iron Man" },
	{ id:2, title: "Spiderman" },
	{ id:3, title: "Thor" },
	{ id:4, title: "Hulk" },
	{ id:5, title: "X-Men" },
	{ id:6, title: "Capitan America" },
];

const sugerencias = movies.map(movie => {
	let rating = ratingsMovieMap[movie.id].value;
	return Object.assign(movie, { rating });
})
	.filter(movie => movie.rating >= 3)
	.map(movie => `${movie.title} * ${movie.rating}`);

// console.log("sugerencias-->", sugerencias);

// Filter
const ingredients = [
  {
    "name": "bread",
    "type": "other",
    "state": "raw"
  },
  {
    "name": "lettuce",
    "type": "vegetable",
    "state": "raw"
  },
  {
    "name": "tomato",
    "type": "vegetable",
    "state": "raw"
  },
  {
    "name": "bacon",
    "type": "meat",
    "state": "raw"
  },
  {
    "name": "burger",
    "type": "meat",
    "state": "raw"
  },
  {
    "name": "onion",
    "type": "vegetable",
    "state": "raw"
  },
  {
    "name": "cheese",
    "type": "dairy",
    "state": "raw"
  }
];

// let burger = '\n';

// for (let i=0; i<ingredients.length; i++) {
//     burger += ingredients[i].name + '\n';
// };

// console.log('Burger:', burger);

const vegetables = ingredients.filter(food => (food.type === 'vegetable'));

console.log(vegetables);

// https://www.youtube.com/watch?v=DYlT8T0pIVo