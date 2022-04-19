import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DetailWeather = ({location}) => {
  return (
    <View style={styles.wrapperDetail}>
      <View>
        <Text style={styles.detail}>Chi tiết thời tiết</Text>
      </View>
      <View style={styles.wrapperInfo}>
        <View style={styles.info}>
          <View style={styles.info_item}>
            <Text style={styles.main}>{`${location.temparature}`}</Text>
            <Text style={styles.sub}>độ C nhiệt độ</Text>
          </View>
          <View style={styles.info_item}>
            <Text style={styles.main}>{`${location.visibility}`}</Text>
            <Text style={styles.sub}>độ C nhiệt độ</Text>
          </View>
        </View>
        <View style={styles.info}>
          <View style={styles.info_item}>
            <Text style={styles.main}>{`21\u2103`}</Text>
            <Text style={styles.sub}>độ C nhiệt độ</Text>
          </View>
          <View style={styles.info_item}>
            <Text style={styles.main}>{`21\u2103`}</Text>
            <Text style={styles.sub}>độ C nhiệt độ</Text>
          </View>
        </View>
        <View style={styles.info}>
          <View style={styles.info_item}>
            <Text style={styles.main}>{`21\u2103`}</Text>
            <Text style={styles.sub}>độ C nhiệt độ</Text>
          </View>
          <View style={styles.info_item}>
            <Text style={styles.main}>{`21\u2103`}</Text>
            <Text style={styles.sub}>độ C nhiệt độ</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailWeather;

const font = 'Lato-Regular';
const styles = StyleSheet.create({
  wrapperDetail: {},
  detail: {
    color: '#fff',
    fontFamily: font,
    fontSize: 15,
    fontWeight: 'bold',
  },
  wrapperInfo: {
    width: '200%',
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  info_item: {
    marginTop: 20,
  },
  main: {
    fontSize: 22,
    color: '#fff',
    marginBottom: 2,
  },
  sub: {
    color: '#91919A',
  },
});
