import React, { FC } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

const ProviderWrapper: FC = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default ProviderWrapper;
