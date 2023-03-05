const prices = [];
const items = document.querySelectorAll('.product-item');
items.forEach(item => {
  const price = item.querySelector('.price.regular').textContent;
  prices.push(price);
});
const container = document.createElement('div');
container.innerHTML = `Prices: ${prices.join(', ')}`;
document.body.insertBefore(container, document.body.firstChild);
