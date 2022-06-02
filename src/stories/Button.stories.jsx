import React from 'react';
import Button from '../components/Button';
import {ReactComponent as Icon} from '../assets/icons/stackalt.svg';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Shared/Button',
  component: Button
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: {control: 'color'}
  // }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Color = (args) => (
  <div className='preview-grid'>
    <Button color='primary' {...args}>Primary</Button>
    <Button color='secondary'>Secondary</Button>
    <Button color='success'>Success</Button>
    <Button color='error'>Error</Button>
    <Button color='info'>Info</Button>
    <Button color='warning'>Warning</Button>
  </div>
);

export const Disabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Disabled.args = {
  children: 'Disabled',
  disabled: true
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  children: 'End icon',
  endIcon: <Icon />
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  children: 'Full width',
  fullWidth: true
};

export const Loading = Template.bind({});
Loading.args = {
  children: 'Button',
  loading: true
};

export const Size = (args) => (
  <div className='preview-grid'>
    <Button size='small' {...args}>Small</Button>
    <Button size='medium'>Medium</Button>
    <Button size='large'>Large</Button>
  </div>
);

export const StartIcon = Template.bind({});
StartIcon.args = {
  children: 'Start icon',
  startIcon: <Icon />
};

export const Variant = (args) => (
  <div className='preview-grid'>
    <Button variant='contained' {...args}>Contained</Button>
    <Button variant='outlined'>Outlined</Button>
    <Button variant='text'>Text</Button>
  </div>
);
