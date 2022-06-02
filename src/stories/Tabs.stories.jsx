import React from 'react';
import {TabItem, Tabs} from '../components/Tabs';

export default {
  title: 'Shared/Tabs',
  component: Tabs,
  subcomponents: {TabItem}
};

const Template = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: [
    <TabItem label='First tab' index={0}>
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
    </TabItem>,
    <TabItem label='Second tab' index={1}>
      <p>
        Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit tortor eget felis porttitor volutpat.
      </p>
      <p>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque,
        auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat.
      </p>
      <p>
        Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum
        porta.
      </p>
      <p>
        Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id
        imperdiet et, porttitor at sem.
      </p>
      <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta dapibus.</p>
    </TabItem>
  ]
};

export const DefaultIndex = Template.bind({});
DefaultIndex.args = {
  ...Default.args,
  defaultIndex: 1
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: [
    <TabItem label='First tab' index={0}>
      <p>
        Donec rutrum congue leo eget malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
        quis lorem ut libero malesuada feugiat.
      </p>
      <p>
        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada.
        Proin eget tortor risus.
      </p>
    </TabItem>,
    <TabItem label='Disabled tab' index={1} disabled>
      <p>
        Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum
        porta.
      </p>
      <p>
        Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id
        imperdiet et, porttitor at sem.
      </p>
      <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta dapibus.</p>
    </TabItem>,
    <TabItem label='Third tab' index={2}>
      <p>
        Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum
        porta.
      </p>
    </TabItem>
  ]
};
