import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

// types
import { Store, StoreDispatch, RootState } from '~/types/store';

import rootReducer, { combinedReducers } from './reducer';

export const makeStore = () =>
  configureStore({
    reducer: rootReducer as typeof combinedReducers,
  });

export const wrapper = createWrapper<Store>(makeStore, { debug: true });

export const useStoreDispatch = () => useDispatch<StoreDispatch>();

export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;
