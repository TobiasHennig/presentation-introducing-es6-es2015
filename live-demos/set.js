let items = new Set(['one', 'two', 'three']);

console.log(items.size);
items.add('two');
console.log(items.size);
items.delete('two');
items.has('two');
items.forEach(item => console.log(item));
items.clear();
