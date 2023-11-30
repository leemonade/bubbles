const mergeExtensions = (...component) =>
  component.reduce((stack, current) => {
    if (current.extensions) {
      stack = stack.concat(current.extensions);
    }
    return stack;
  }, []);

export { mergeExtensions };
