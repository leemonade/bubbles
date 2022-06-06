import namor from 'namor';
import { v4 as uuidv4 } from 'uuid';

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    firstName: Math.floor(Math.random() * 30), // namor.generate({ words: 1, numbers: 0 }),
    lastName: Math.floor(Math.random() * 30), // namor.generate(),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status: statusChance > 0.66 ? 'relationship' : statusChance > 0.33 ? 'complicated' : 'single',
  };
};

export function makeData(...lens) {
  console.log('namor:', namor);
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newPerson(),
        id: uuidv4(),
      };
    });
  };

  return makeDataLevel();
}
