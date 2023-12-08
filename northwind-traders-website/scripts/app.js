let productService;

let productFiltersMenu;
let categoryFilterMenu;

document.addEventListener('DOMContentLoaded', ()=>{
    
    productService = new ProductsService();

    productFiltersMenu = document.getElementById('productFiltersMenu');
    productFiltersMenu.addEventListener('change', filterProducts);

    categoryFilterMenu = document.getElementById('categoryFilterMenu');

    loadData();


    
})

async function loadData() {
    
    const categories = await productService.getAllCategories();

    categories.forEach(category => {
        const option = new Option(category.name, category.id);
        categoryFilterMenu.appendChild(option);
    })
}

async function filterProducts() {

}