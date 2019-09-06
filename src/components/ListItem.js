import React from 'react';
import { StyleSheet } from 'react-native'
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, ListItem as ListItemKitten } from 'react-native-ui-kitten';
import PropTypes from 'prop-types';

import colors from '../styles/colors';

const styles = StyleSheet.create({

});

export const ListItem = ({
  title,
  description,
  titleStyle,
  descriptionStyle,
  children,
  accessory,
  icon,
  onPress
}) => {

  return (
    <ApplicationProvider
      mapping={mapping}
      theme={lightTheme}>
      <ListItemKitten
        title={title}
        description={description}
        titleStyle={titleStyle}
        descriptionStyle={descriptionStyle}
        accessory={accessory}
        icon={icon}
        onPress={onPress}>
        {children}
      </ListItemKitten>
    </ApplicationProvider>
  );
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  titleStyle: PropTypes.object,
  descriptionStyle: PropTypes.object,
  children: PropTypes.node,
  accessory: PropTypes.elementType,
  icon: PropTypes.elementType,
  onPress: PropTypes.func,
};