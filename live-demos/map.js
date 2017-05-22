let items = new Map();

items.set('key', 'value');
items.set({}, 'another value');
console.log(items.size);
items.get('key');
items.has('key');
items.delete('key');
items.forEach((value, key) => console.log(value));
items.clear();
