import React from 'react';
import PropTypes from 'prop-types';
import { TotalLayoutHeader } from '../../TotalLayout';

function TLayoutHeader({ formTitlePlaceholder, subtitle, ...props }) {
  return <TotalLayoutHeader {...props} formTitlePlaceholder={subtitle ?? formTitlePlaceholder} />;
}

TLayoutHeader.displayName = 'TLayoutHeader';
TLayoutHeader.propTypes = {
  formTitlePlaceholder: PropTypes.string,
  subtitle: PropTypes.string,
};

export { TLayoutHeader };
