const book = {
  title: 'Ego is the enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}

const { name:publisherName = "Anonymous"} = book.publisher

// Array 

const item = ['coffee(black)', '$1.50', '$2.00', '$3.00']
const [product, , mPrice] = item

console.log(`The ${product} is for ${mPrice}`);