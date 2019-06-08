import { light as lTheme } from './light';
import { mirage as mTheme } from './mirage';
import { dark as dTheme } from './dark';

const rootValues = {
  atom: '0.4',
  headerFontSize: '2.2',
  bodyFontSize: '1.6',
  borderColor: '#666',
  bgColor: '#fff',
  borderDefault: '0.2rem solid #666',
  breakpoint: '41.5',
};

export const light = { ...rootValues, ...lTheme };

export const dark = { ...rootValues, ...dTheme };

export const mirage = { ...rootValues, ...mTheme };
