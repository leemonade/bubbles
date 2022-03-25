import { useContext } from 'react';
import { ModalContext } from '../context/ModalsContext';

export function useModals() {
  const ctx = useContext(ModalContext);

  if (!ctx) {
    throw new Error(
      '[@bubbles-ui/modals] useModals hook was called outside of context, wrap your app with ModalsProvider component'
    );
  }

  return ctx;
}
