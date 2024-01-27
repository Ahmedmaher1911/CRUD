var productNameInput = document.getElementById("productNameInput");
var productPriceInput = document.getElementById("productPriceInput");
var productCategoryInput = document.getElementById("productCategoryInput");
var productDescInput = document.getElementById("productDescInput");
var productsContainer = [];

if (localStorage.getItem("product") != null) {
  productsContainer = JSON.parse(localStorage.getItem("product"));
  displayProduct();
}

function addProduct() {
  if (validateProductName() == true) {
    var product = {
      name: productNameInput.value,
      price: productPriceInput.value,
      category: productCategoryInput.value,
      desc: productDescInput.value,
    };
    productsContainer.push(product);
    localStorage.setItem("product", JSON.stringify(productsContainer));
    displayProduct();
    clearvalue();
  }
  else
  {
    window.alert('invalid.........');
  };
}

function clearvalue() {
  productNameInput.value = "";
  productPriceInput.value = "";
  productCategoryInput.value = "";
  productDescInput.value = "";
}

function displayProduct() {
  var cartoona = ` `;
  for (var i = 0; i < productsContainer.length; i++) {
    cartoona += `
           <tr>
           <td >${i}</td>

            <td >${productsContainer[i].name}</td>
            <td>${productsContainer[i].price}</td>
            <td>${productsContainer[i].category}</td>
            <td>${productsContainer[i].desc}</td>
            <td><button onclick="deleteProduct(${i})" type="button" class="btn btn-outline-danger">delete</button></td>
            <td><button type="button" class="btn btn-outline-success">update</button></td>

          </tr>
        
        `;
    document.getElementById("tableBody").innerHTML = cartoona;
  }
}

function deleteProduct(deletedIndex) {
  productsContainer.splice(deletedIndex, 1);
  localStorage.setItem("product", JSON.stringify(productsContainer));
  displayProduct();
}

function searchProduct(term) {
  var cartoona = ``;

  for (var i = 0; i < productsContainer.length; i++) {
    if (
      productsContainer[i].name.toLowerCase().includes(term.toLowerCase()) ==
      true
    ) {
      cartoona += `
           <tr>
           <td >${i}</td>

            <td >${productsContainer[i].name}</td>
            <td>${productsContainer[i].price}</td>
            <td>${productsContainer[i].category}</td>
            <td>${productsContainer[i].desc}</td>
            <td><button onclick="deleteProduct(${i})" type="button" class="btn btn-outline-danger">delete</button></td>
            <td><button type="button" class="btn btn-outline-success">update</button></td>

          </tr>
        
        `;
      document.getElementById("tableBody").innerHTML = cartoona;
    }
  }
}

function validateProductName() {
  var regex = /^ [A-Z][a-z]{3,8}$/;
  if (regex.test(productNameInput.value) == true) {
    return true;
  } else {
    return false;
  }
}

// myBtns = document.querySelectorAll('button');

// for(var i=0 ; i<myBtns.length ;i++)
// {
// myBtns[i].addEventListener('click',sayHello)

// function sayHello( ) {

//   alert("hello") ;



// };


// };
