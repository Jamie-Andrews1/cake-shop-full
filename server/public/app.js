const image = document.querySelectorAll('.cake');
const title = document.querySelectorAll('.title');
const price = document.querySelectorAll('.price');

class Product {
  constructor(image, title, price){
    this.image = image;
    this.title = title;
    this.price = price;
  }
  
  
}

const cake1 = new Product(src = './images/cake1.jpg', 'Sweet Item', 6 )

const search = document.querySelector('.search');

search.addEventListener('keyup', filter);

function filter(e){
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.cake').forEach
  (function(task) {
    const item = task.textContent;
    if(item.toLowerCase().indexOf(text) != -1 ){
    task.style.display = 'block';
    } else {
    task.style.display = 'none';
  }})
};