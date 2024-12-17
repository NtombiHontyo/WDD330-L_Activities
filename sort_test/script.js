const parent = document.querySelector("ul")
const select = document.querySelector("select")

const prices = [{name: "hname", price: 15}, {name: "dname1", price: 5}, {name: "aname2", price: 115}, {name: "tname3", price: 8} ]

function template(price) {
    return `<li>Name: ${price.name}. Price: ${price.price} </li>`
}

function renderList(list) {
    const htmlString = list.map(price => 
        template(price)
        )
        
        console.log(htmlString)
        parent.innerHTML = htmlString.join("");
}

select.addEventListener("change", () => {
    const option = select.value;

    //Sort items based on selected option
    const sortedItems = [...prices].sort((a, b) => {
        if (option === "low-to-high") {
            return a.price - b.price;
        } else if (option === "a-z") {
            return a.name.localeCompare(b.name)
        }
    })

    renderList(sortedItems)
})

renderList(prices)


