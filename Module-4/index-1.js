const dataCache = new Map();

const expensiveTask = (id) => {
  console.log("Ran the expensive task for:", id);

  return {
    id: id,
    data: `Some data for id: ${id}`,
    timestamp: new Date().getTime(),
  };
};

const getData = (id) => {
  if (dataCache.has(id)) {
    console.log("Cache HIT for id:", id);
    return dataCache.get(id);
  }

  console.log("Cache MISS for id:", id);
  const data = expensiveTask(id);
  dataCache.set(id, data);

  return data;
};

console.log(dataCache);

console.log(getData(123));
console.log(getData(123));
console.log(getData(124));

console.log(dataCache)
//output 
/*
Map(0) {}
Cache MISS for id: 123
Ran the expensive task for: 123
{ id: 123, data: 'Some data for id: 123', timestamp: 1762412560690 }
Cache HIT for id: 123
{ id: 123, data: 'Some data for id: 123', timestamp: 1762412560690 }
Cache MISS for id: 124
Ran the expensive task for: 124
{ id: 124, data: 'Some data for id: 124', timestamp: 1762412560691 }
Map(2) {
  123 => { id: 123, data: 'Some data for id: 123', timestamp: 1762412560690 },
  124 => { id: 124, data: 'Some data for id: 124', timestamp: 1762412560691 }
}
*/