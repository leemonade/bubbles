import React, { forwardRef } from 'react';
import { TagifyInputStyles } from './TagifyInput.styles';
import { MixedTags } from './react.tagify'; // React-wrapper file
import style from './tagify.css'; // Tagify CSS

console.log(style);

const TagifyInput = forwardRef(({ mixed, ...props }, ref) => {
  const { classes, cx } = TagifyInputStyles({});

  if (mixed) return <MixedTags className={classes.root} tagifyRef={ref} {...props} />;
  return <MixedTags className={classes.root} tagifyRef={ref} {...props} />;
});

TagifyInput.propTypes = {
  //
};

export { TagifyInput };
