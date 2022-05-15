import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { nextReduxCookieMiddleware } from 'next-redux-cookie-wrapper';

// types
import { Store, StoreDispatch, RootState } from '~/types/store';

import { combinedReducers } from './reducer';
import { postSlice } from './slices/postSlice';
import { authSlice } from './slices/authSlice';

export const makeStore = () =>
  configureStore({
    reducer: combinedReducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().prepend(
        nextReduxCookieMiddleware({
          subtrees: [`${postSlice.name}.selectedPost`, `${authSlice.name}.currentUser`],
        }),
      ),
  });

export const wrapper = createWrapper<Store>(makeStore);

export const useStoreDispatch = () => useDispatch<StoreDispatch>();

export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;
