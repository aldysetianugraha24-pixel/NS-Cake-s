function order(product) {
    let phone = "085173371753"
    let message = `Saya ingin memesan ${product}`
    let url = 'https://wa.me/' + phone + '?text=' + encodeURIComponent(message)
    window.open(url, '_blank')
}
