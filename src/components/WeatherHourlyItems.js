import {View, Text} from 'react-native';
import React from 'react';

export default function WeatherHourlyItems({
  weatherHourly,
  renderWeatherHourItem,
}) {
  return (
    <View>
      <FlatList
        data={weatherHourly}
        renderItem={renderWeatherHourItem}
        horizontal></FlatList>
    </View>
  );
}
