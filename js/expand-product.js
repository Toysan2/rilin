function expandProduct(productId) {
    const productDetails = document.getElementById(`productDetails${productId}`)
    const productDiv = document.getElementById(productId)

    if (productDiv.classList.contains('expanded')) {
        productDiv.classList.remove('expanded')
    } else {
        productDiv.classList.add('expanded')
    }
}
