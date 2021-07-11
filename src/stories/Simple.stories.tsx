import React from 'react';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Provider from '../Provider';
import ModalStack from '../components/ModalStack';
import SampleModal from '../components/SampleModal';
import * as modalStackActions from '../redux/modalAction';

const Simple: FC = () => {
  const dispatch = useDispatch();

  const openModal = (payload: Modal) =>
    dispatch(modalStackActions.openModal(payload));

  return (
    <>
      <ModalStack />
      <div>
        <button
          type="button"
          onClick={() => openModal({ Modal: SampleModal, id: 'sampleModal' })}
        >
          Open Modal
        </button>
      </div>
    </>
  );
};

export default {
  title: 'Modal/Basic',
  component: Simple,
  decorators: [(story) => <Provider>{story()}</Provider>],
} as ComponentMeta<typeof Simple>;

const Template: ComponentStory<typeof Simple> = (args) => <Simple {...args} />;

export const Default = Template.bind({});
