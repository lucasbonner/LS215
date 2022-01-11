/*
We want you to write a function, organizeItems, that organizes items by category.
The argument to the function is an array of item objects. Each item object has 3
properties, category (string), itemName (string), and onSale (Boolean).
Here's an example:

var itemData = [
  { category: 'fruit',  itemName: 'apple', onSale: false },
  { category: 'canned', itemName: 'beans', onSale: false },
  { category: 'canned', itemName: 'corn',  onSale: true  },
  { category: 'frozen', itemName: 'pizza', onSale: false },
  { category: 'fruit',  itemName: 'melon', onSale: true  },
  { category: 'canned', itemName: 'soup',  onSale: false },
];

The return value should be an object with category properties.
 Each property value is an array of items that belong to that category.
Here's an example return object based on our example input:

{
  fruit:  ['apple', 'melon($)'],
  canned: ['beans', 'corn($)', 'soup'],
  frozen: ['pizza']
};

Note that items having onSale set to true should have '($)'
 appended to their item name.

Please complete the function organizeItems and validate it is
 working by running the tests.Your function should work for any
 similarly formatted input data, not just the example data we've provided.

If you find yourself struggling with this problem for more
 than 20 minutes or so, you might need to study more before
  taking the Technical Admissions Assessment (TAA).


Problem:
write a function that takes array of item objects
  each item object has
    category(string), itemName(string), and onSale(boolean)
return should be an object with category properties
  each property value is an array of items that belong to that category
items that have onSale set to tru should have '($)' appended to their item name

Example:
var itemData = [
  { category: 'fruit',  itemName: 'apple', onSale: false },
  { category: 'canned', itemName: 'beans', onSale: false },
  { category: 'canned', itemName: 'corn',  onSale: true  },
  { category: 'frozen', itemName: 'pizza', onSale: false },
  { category: 'fruit',  itemName: 'melon', onSale: true  },
  { category: 'canned', itemName: 'soup',  onSale: false },
];

// {
//   fruit:  ['apple', 'melon($)'],
//   canned: ['beans', 'corn($)', 'soup'],
//   frozen: ['pizza']
// };

have an empty result object
iterate thru itemData
first subobj:
{ category: 'fruit',  itemName: 'apple', onSale: false }
itemNameAdd = subObj.itemName
if onSale is true
  itemNameAdd += '($)'

if (!result[subobj.category])
  result[subobj.category] = [itemNameAdd]
else
  result[subobj.category].push(itemNameAdd);

Algorithm:
use reduce
  have an empty obj
  have itemNameAdd equal to the subObj itemName
    on each subObj check if onSale is true
      if it is add ($) to itemNameAdd
    if the result has a property of subObj category
      add the current itemNameAdd
    otherwise
      create a property of subObj category for result
*/
var itemData = [
  { category: 'fruit',  itemName: 'apple', onSale: false },
  { category: 'canned', itemName: 'beans', onSale: false },
  { category: 'canned', itemName: 'corn',  onSale: true  },
  { category: 'frozen', itemName: 'pizza', onSale: false },
  { category: 'fruit',  itemName: 'melon', onSale: true  },
  { category: 'canned', itemName: 'soup',  onSale: false },
];

function organizeItems(items) {
  return items.reduce((result, subObj) => {
    let itemToAdd = subObj['onSale'] ? subObj['itemName'] + '($)' : subObj['itemName'];
    let newKey = subObj['category'];
    result[newKey] ? result[newKey].push(itemToAdd) : result[newKey] = [itemToAdd];
    return result;
  }, {});
}

console.log(organizeItems(itemData));
// {
//   fruit:  ['apple', 'melon($)'],
//   canned: ['beans', 'corn($)', 'soup'],
//   frozen: ['pizza']
// };
