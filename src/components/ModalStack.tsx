import React, { FC } from 'react';
import { connect } from 'react-redux';

import Portal from './Portal';

interface ModalStackProps {
  modals: ReadonlyArray<Modal>;
}

const ModalStack: FC<ModalStackProps> = (props) => {
  const { modals } = props;
  return (
    <Portal>
      {modals.map((modal) => (
        <modal.Modal key={modal.id} />
      ))}
    </Portal>
  );
};

export default connect((state: State) => ({
  modals: state.modals,
}))(ModalStack);
