// cleamos nuestra clase principal
// la clase no retorna nada
// unicamente contiene propiedades y métodos

// Instanciando un objeto weakMap
const _private = new WeakMap();


class Book{
// método constructor, se ejecuta por default
// this hace referencia al objeto
	// _ signfica que es privada
 constructor(title,author,price){

 const properties = {

	 _title: title,
	 _author: author,
	 _price: price,
 
 }

 // el métdo set de weakmap coloca nuestras propiedades como privadas
 // de esta manera tenemos todas nuestras propiedas como privadas
 _private.set(this, {properties});
 // el métdo get de weakmap obtiene nuestras propiedades como privadas
 //_private.get(this, {properties});

 // ¿Como accedemos a las propiedades privadas? 
 // se emplean los métodos de acceso getter y setter
 }


	 getAllData(){
		 console.log(`Titulo: ${this.title} Author: ${this.author} Price: ${this.price}
			 `);

	 }

	get title(){
   	  return _private.get(this).properties['_title'];	
	}

	set title(newTitle){
   	  return _private.set(this).properties['_title'] = newTitle;	
	}


	get author(){
   	  return _private.get(this).properties['_author'];	
	}

	set auhor(newAuthor){
   	  return _private.set(this).properties['_author'] = newAuthor;	
	}

	get price(){
   	  return _private.get(this).properties['_price'];	
	}

	set price(newPrice){
   	  return _private.set(this).properties['_price'] = newPrice;	
	}
}

// Creando clase comic usando herencia
class Comic extends Book{
	constructor(name,author,price,ilustrators){
		// se emplea el método super para indicar que se estan usando de la clase padre
		super(name,author,price);
		this.ilustrators = ilustrators;
	}


	addIlustrator(newIlustrator = []){
		this.ilustrators.push(newIlustrator);
	}


	getAllData(){
		super.getAllData();
		console.log(`Ilustrador(s): ${this.ilustrators}`);
	}
}



class ShoppingCart{
 constructor(){
	 this.products = [];
 }


 addProduct(){
 }


 addProduct(amount,price){
	 this.products.push(...Array(amount).fill(price));
 }


  showProduct(){
    console.log(this.products);
  }

  calcTotal(){
	  return this.products
		  .map(price => price)
	  	  .reduce((ac,price) => ac + price,0);
  }


  printTicket(){
	  console.log(this.calcTotal());
  }



}



// Instanciando objetos
const book1 = new Book('1984','G.O',350);
const book2 = new Book('Frankestein','M.S',200);
console.log(book1.title);

const comic1 = new Comic('The Killing Joke','A.M',150,['A.S']);
console.log(comic1.author);
console.log(comic1.price);
console.log(comic1.ilustrators);

comic1.addIlustrator('W.E');
console.log(comic1.ilustrators);


const cart = new ShoppingCart();
cart.addProduct(2,comic1.price);
cart.addProduct(1,book1.price);
cart.showProduct();
//cart.calcTotal();
cart.printTicket();

book1.getAllData();
comic1.getAllData();


