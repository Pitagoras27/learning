// Map. devuelve un nuevo arreglo. Pero hay que tener especial atención cuando se trababaje con arrays de objetos ya que estos son modificados por referencia y si no se devuelve un nuevo objeto modificado se estará mutando el objeto original.

const products = [
  {id: '1', area: 'Show shop', product: 'shoes', price: 2000},
  {id: '2', name: 'Electronic', product: 'mobil', price: 5000},
  {id: '3', name: 'Toy Store', product: 'Puzzle', price: 600}
];

const offer = products.map(product => {
  if(product.price < 1000) return product;
  let newPrice = product.price * 0.9;
  return {...product, price: newPrice};
});

console.log(offer);

// Si quiero obtener unicamente un valor puedo utilizar la destructuración para acceder a él

const idProduct = user.map(({ id }) => id);
console.log(idProduct);

// Filter
// Para obtener los productos a los que aplican un descuento
  const conditionalFunction = item => item.price > 1000;
  const expensive = products.filter(conditionalFunction);
  console.log(expensive);

  // Para filtrar los más barátos
  const cheap = product => !conditionalFunction(product);
  const others = products.filter(cheap);
  console.log(others);