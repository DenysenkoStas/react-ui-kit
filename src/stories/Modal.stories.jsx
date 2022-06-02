import React, {useState} from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

export default {
  title: 'Shared/Modal',
  component: Modal
};

const Template = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: [
    <>
      <h2>Donec sollicitudin molestie malesuada</h2>
      <p>
        Donec rutrum congue leo eget malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
        quis lorem ut libero malesuada feugiat.
      </p>
      <p>
        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada.
        Proin eget tortor risus.
      </p>
      <p>
        Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur aliquet quam id dui posuere
        blandit. Pellentesque in ipsum id orci porta dapibus.
      </p>
    </>
  ],
  open: true
};

export const FullScreen = Template.bind({});
FullScreen.args = {
  ...Default.args,
  fullScreen: true
};

export const MaxWidth = Template.bind({});
MaxWidth.args = {
  ...Default.args,
  maxWidth: 400
};

export const Open = () => {
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  return (
    <>
      <Button onClick={openModal}>Open modal</Button>
      <Modal open={modal} onClose={closeModal} {...{children: Default.args.children}} />
    </>
  );
};
