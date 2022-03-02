export const mergeExtensions = (...component) => {
  return component.reduce((stack, current) => {
    if (current.extensions) {
      stack = stack.concat(current.extensions);
    }
    return stack;
  }, []);
};
