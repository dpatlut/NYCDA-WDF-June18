let currentProductPage = 1;
const showMoreButton = document.getElementById('show-more');

let createProducts = (page) => {
    axios.get("https://www.redbullshopus.com/products.json?limit=9&page=" + page).then((response) => {
			currentProductPage ++;
			let productsPulled = response.data.products
			productsPulled.forEach(element => {
				let wrapper = document.createElement('div')

				let productImage = element.images[0].src;
				let productTitle = element.title;
				let productPrice = element.variants[0].price;
				let productAvailability = element.variants[0].available;
				
				let divTile = "<div class='tile col-md-4 col-sm-6'></div>"
                let divProduct = "<div class='product'></div>"
                
				showMoreButton.insertAdjacentHTML('beforeend', divTile)
				showMoreButton.insertAdjacentHTML('beforeend', "<div class='product-image'><img src='" + productImage + "'></div>")
				showMoreButton.insertAdjacentHTML('beforeend', "<div class='product-title'>" + productTitle + "</div>")

                
				if (productAvailability) {
					showMoreButton.insertAdjacentHTML('beforeend', "<div class='product-price'>" + productPrice + "</div>");
				} else {
					showMoreButton.insertAdjacentHTML('beforeend', "<div class='product-status'>OUT OF STOCK</div>");
				}

				document.body.appendChild(wrapper)
			});			
    }).catch(function (error) {
        console.log(error)
     })
}

createProducts(1);


showMoreButton.addEventListener('click', (e)=> {
	createProducts(currentProductPage)
})

