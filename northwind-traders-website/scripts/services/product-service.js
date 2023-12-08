class ProductsService {
    
    productsUrl = "http://localhost:3000/products";
    categoriesUrl = "http://localhost:3000/categories";

    async getAllCategories() {
        let response = await fetch(this.categoriesUrl);
        let data = await response.json();
        console.log(data)
        return categoriesArray;
    }
}