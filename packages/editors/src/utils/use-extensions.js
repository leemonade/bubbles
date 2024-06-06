import { Children, isValidElement } from 'react';

const useExtensions = (children) =>
  Children.toArray(children)
    .filter((child) => isValidElement(child))
    .reduce((stack, current) => {
      if (current.props.children) {
        stack = stack.concat(useExtensions(current.props.children));
      }

      if (current.type.extensions) {
        stack = stack.concat(current.type.extensions);
      }
      return stack;
    }, [])
    .filter((extension, index, stack) => stack.indexOf(extension) === index);

export { useExtensions };
