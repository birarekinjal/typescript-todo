import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { IStateReduced } from '../store/store';

export const useAppSelector : TypedUseSelectorHook<IStateReduced> = useSelector;
