import { lazy } from 'react';
import { BurgerFormProps } from './BurgerForm';

export const BurgerFormAsync = lazy<React.FC<BurgerFormProps>>(async () => import('./BurgerForm'));
