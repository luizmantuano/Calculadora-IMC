import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';

const ResultImc = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{props.messageResultImc}</Text>
      <Text style={styles.txt}>{props.resultImc}</Text>
    </View>
  );
};

export default ResultImc;
