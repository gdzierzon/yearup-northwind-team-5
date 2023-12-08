let productService;
let productFilters;
document.addEventListener('DOMContentLoaded', ()=>{
    productService = new ProductsService();
    productFilters = document.getElementById('productFilters');
    productFilters.addEventListener('change', filterProducts);
    
})