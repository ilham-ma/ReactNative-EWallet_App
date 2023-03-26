import {useSelector, useDispatch} from 'react-redux';
import type {TypedUseSelectorHook} from 'react-redux';
import type {AppDispatch, RootState} from '../redux/app.store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
