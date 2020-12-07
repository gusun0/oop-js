// el producto podemos definirlo como una clase, 
// que propiedades tiene y que métodos tiene
// métodos, guardar producto, listar producto

class Product{
 constructor(name, price, year){
	 this.name = name;
	 this.price = price;
	 this.year = year;
   }
}


class UI{
 addProduct(product){
    const productList = document.getElementById('product-list'); 
    // creando un elemento de HTML
   const element = document.createElement('div');
   element.innerHTML = `
  		 <div class="card text-center mb-4">
			 <div class="card-body">
 				<strong>Product Name</strong>: ${product.name}
 				<strong>Product Price</strong>: ${product.price}
 				<strong>Product Year</strong>: ${product.year}
	 			<a class="btn btn-danger" name="delete" href="#">Delete</a>
			 </div>
		 </div>
	 `;

  productList.appendChild(element);
  this.resetForm();
 }

 resetForm(){
    document.getElementById('product-form').reset(); 
 }

 deleteProduct(element){
  if(element.name === 'delete'){
	 element.parentElement.parentElement.parentElement.remove();
	  this.showMessage('Product Deleted','info');

  }

 }

 showMessage(message, cssClass){
    const div = document.createElement('div'); 
    div.className = `alert alert-${cssClass} mt-4`;
    div.appendChild(document.createTextNode(message));
    
   // Mostrando en el DOM
   const container = document.querySelector('.container');
   // Seleccionando la aplicación entera
   const app = document.querySelector('#App');
   // Hacemos eso para insertar antes de un elemento
   container.insertBefore(div,app);
   
  setTimeout(function (){
     document.querySelector('.alert').remove(); 
  }, 2000)

 }
}


// Interactuando con eventos de la app ( eventos del DOM) 
// Evento para capturar el submit del formulario
document.getElementById('product-form')
	.addEventListener('submit', function (e) {
	 e.preventDefault(); 

	const name = document.getElementById('name').value
	const price = document.getElementById('price').value;
	const year = document.getElementById('year').value;
	const product = new Product(name, price, year);	
	const ui = new UI();
	
	if(name === '' || price === '' || year === ''){

 	return ui.showMessage('Datos incompletos','danger');
	}
	
	ui.addProduct(product);
	ui.showMessage('Agregaste un valor','success');

});


// Evento para capturar el evento delete

document.getElementById('product-list').addEventListener('click', function (e) {
// para ver que elemento seleccionas del DOM	
	//console.log(e.target); 
	
	const ui = new UI();
	ui.deleteProduct(e.target);

})






