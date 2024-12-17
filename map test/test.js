function productCardTemplate(user) {
    return`
    <li class="product-card">
            <a href="product_pages/?product=hey">
              <h3 class="card__brand">${user.name}</h3>
              <h2 class="card__name">${user.age}</h2>
              <p class="product-card__price">hey</p></a
            >
          </li>
    `
    
}

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];

  const productList = users.map(user => 
    productCardTemplate(user)
)

console.log(productList)
const unorderedList = document.querySelector(".list")
unorderedList.innerHTML[0] =  '<li class="product-card">Test 1</li>'
unorderedList.innerHTML = productList;



