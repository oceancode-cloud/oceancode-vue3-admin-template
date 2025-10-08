/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */

import { resolve } from 'path';

export const libResolves = [
  {
    find: 'ocean-admin-api',
    replacement: resolve(process.cwd(), '.', './node_modules/ocean-admin-api'),
  },
  {
    find:'@oceancode/ocean-wui2',
    replacement: resolve(process.cwd(), '.', './node_modules/@oceancode/ocean-wui'),
  },
];