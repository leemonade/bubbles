/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { settings } from '@src/settings';
import React from 'react';

export const PrefixContext = React.createContext(settings.prefix);

export function usePrefix() {
  return React.useContext(PrefixContext);
}
