import React from 'react';
import { Image } from 'react-native'
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { StyleType, Button } from 'react-native-ui-kitten';

import { ListItem } from '../components/ListItem';
import { BufferView } from '../decoration';

export const propTypes = {
  title: 'Title',
  description: 'This is an example description',
  titleStyle: {},
  descriptionStyle: {},
  onPress: action('onPress'),
};



export const Icon = () => {
  return <Image style={StyleType} source={require('./../assets/icon/fill/person.png')} />;
};

export const Accessory = () => {
  return <Button style={StyleType}>BUTTON</Button>;
};

storiesOf('ListItem', module)
  .addDecorator(BufferView)
  .add('default', () => <ListItem {...propTypes} />)
  .add('icon', () => <ListItem {...propTypes} icon={Icon} />)
  .add('accessory', () => <ListItem {...propTypes} icon={Icon} accessory={Accessory} />);