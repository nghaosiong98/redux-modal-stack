import { action } from 'typesafe-actions';

export const openModal = (payload: Modal) => action('@modal/open', payload);
export const closeModal = () => action('@modal/close');
