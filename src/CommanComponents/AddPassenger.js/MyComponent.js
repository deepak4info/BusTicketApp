import * as React from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

const MyComponent = () => {
  const [value, setValue] = React.useState('first');

  return (
    <View>
      <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
        <RadioButton.Item label="First item" value="first" />
        <RadioButton.Item label="Second item" value="second" />
        <RadioButton.Item label="Third item" value="third" />
      </RadioButton.Group>
      <Text>Selected value: {value}</Text>
    </View>
  );
};

export default MyComponent;
