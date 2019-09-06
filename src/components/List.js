import React from 'react';
import { StyleSheet, FlatListProps } from 'react-native'
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, List as ListKitten } from 'react-native-ui-kitten';
import PropTypes from 'prop-types';

import colors from '../styles/colors';

const styles = StyleSheet.create({

});

export const List = ({
  renderItem,
  data,
  children,
  StyledComponentProps
}) => {

  return (
    <ApplicationProvider
      mapping={mapping}
      theme={lightTheme}>
      <ListKitten
        {...FlatListProps}
        renderItem={renderItem}
        data={data}
        StyledComponentProps={StyledComponentProps}>
        {children}
      </ListKitten>
    </ApplicationProvider>
  );
};

List.propTypes = {
  renderItem: PropTypes.elementType.isRequired,
  data: PropTypes.array,
  children: PropTypes.node,
  StyledComponentProps: PropTypes.object,
};