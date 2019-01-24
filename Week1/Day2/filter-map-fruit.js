let contents = [{
    category: 'fruit',
    item: {
        name: 'mango',
        rating: 8,
        price: 1
    }},
    {category: 'fruit',
    item: {
        name: 'grapes',
        rating: 7,
        price: 1.99
    }},
    {category: 'electronics',
    item: {
        name: 'Bluetooth Headphones',
        rating: 5,
        price: 49.99
    }},
    {category: 'electronics',
    item: {
        name: 'Stereo',
        rating: 7,
        price: 79.99
    }},
    {category: 'furniture',
    item: {
        name: 'Desk Chair',
        rating: 9,
        price: 170
    }},
    {category: 'furniture',
    item: {
        name: 'Coffee Table',
        rating: 4,
        price: 74.99
    }},
    {category: 'fruit',
    item: {
        name: 'apples',
        rating: 4,
        price: 1.99
    }},
    {category: 'fruit',
    item: {
        name: 'bananas',
        rating: 2,
        price: 1
    }},
    {category: 'fruit',
    item: {
        name: 'avacados',
        rating: 3,
        price: 2
    }},
    {category: 'electronics',
    item: {
        name: 'Laptop',
        rating: 7,
        price: 799.99
    }},
];

let fruits = contents.filter((element) => {
    return element.category === 'fruit';
}).map((element) => {
    return element.item;  
});
console.log(`Original: `, contents);
console.log(fruits);