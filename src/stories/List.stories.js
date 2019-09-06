import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { List } from '../components/List';
import { ListItem } from '../components/ListItem';
import { BufferView } from '../decoration';

const data = [
  {
    title: 'Title',
    description: 'This is an example description'
  },
  {
    title: 'Title',
    description: 'This is an example description'
  },
  {
    title: 'Title',
    description: 'This is an example description'
  }
];

onItemPress = (index) => {
  // Handle item press
};

export function renderItem(info) {
  return (
    <ListItem
      title={`${info.item.title}`}
      description={`${info.item.description}`}
      onPress={onItemPress}
    />
  );
};

storiesOf('List', module)
  .addDecorator(BufferView)
  .add('default', () => <List data={data} renderItem={renderItem} />);