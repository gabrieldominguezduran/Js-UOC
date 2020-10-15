// Solución 1

const car1 = {
  brand: 'Ford',
  getBrand() {
    console.log(this.brand);
  },
};
car1.getBrand();
const cardBrandFunction1 = () => car1.getBrand();
cardBrandFunction1();

// le asignamos a la variable cardBrandFunction1 una función anonima en forma de arrow function que regresa la llamada del método del objeto car1

//Solución 2

const car2 = {
  brand: 'Ford',
  getBrand() {
    console.log(this.brand);
  },
};
car2.getBrand();
const cardBrandFunction2 = car2;
cardBrandFunction2.getBrand();

// en el segundo código asignamos a la variable cardBrandFunction2 el objeto car2, con lo que pasamos las propiedades de car2 a cardBrandfunction2
