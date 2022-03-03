import namor from 'namor';

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newTag = () => {
  return namor.generate({ words: 1, numbers: 0, saltLength: 2 });
};

export function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return newTag();
    });
  };

  return makeDataLevel();
}
