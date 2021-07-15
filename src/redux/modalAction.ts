import { action } from 'typesafe-actions';

export const openModal = <P>(payload: WrapModal<P>) =>
  action('@modal/open', payload);
export const closeModal = () => action('@modal/close');
