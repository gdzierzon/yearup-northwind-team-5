class ProductsService{
    
APIurl = "http://localhost:3000/products";
async getAll(){
    let products = await fetch(APIurl);
    let response = await products.json();
    let productsArray = response.products;
    console.log(productsArray)
}
}