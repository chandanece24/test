(function(){
const customerImage = document.querySelector ('#customer-img')
const customerName = document.querySelector ('#customer-name')
const customerText = document.querySelector ('#customer-text')
const btn = document.querySelectorAll('.btn')
let index = 0
const customers = []
function Customer(img, name, text){
    this.img = img
    this.name = name
    this.text = text
}
function createCustomer(img, name, text) {
    let Img = `./img/${img}.jpeg`
    let customer = new Customer(img, name, text)
    customers.push(customer)
}
createCustomer(0, 'john', 'Lorem Ipsum g indu make a type specimen book')
createCustomer(1, 'johhn', 'Lorem Ipeve it to make a type specjhkimen book.')
createCustomer(2, 'johhhn', 'Lorem Ipsum is simply dummy texth')
createCustomer(3, 'johny', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lore')
createCustomer(4, 'johni', 'Lorem Ipsum is simply dummesetting industry. Lorem Ipsum has been')



btn.forEach(function(button) {
    btn.addEventListener('click', function(e) {
        if (e.target.parentElement.classlist.contains('prevBtn')) {
            if (index === 0) {
                index = customers.length

            }
            index--
            customerImage.src = customers[index].img
            customerName.textContent = customers[index].name
            customerText.textContent = customers[index].text
        }

        if (e.target.parentElement.classlist.contains('nextvBtn')) {
            index++
            if (index === customers.length) {
                index = 0

            }
         
            customerImage.src = customers[index].img
            customerName.textContent = customers[index].name
            customerText.textContent = customers[index].text
        }
    
 })
 })