import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import SunIcon from '../../assets/sun.svg';
import CloudIcon from '../../assets/cloudy.svg';
import MoonIcon from '../../assets/moon.svg';
import RainIcon from '../../assets/rain.svg';
import MenuIcon from '../../assets//menu.svg';
import SearchIcon from '../../assets/search.svg';
const WeatherIcon = weatherType => {
  if (weatherType === 'Sunny') {
    return <SunIcon width={34} height={34} fill="#fff" />;
  }
  if (weatherType === 'Rainy') {
    return <RainIcon width={34} height={34} fill="#fff" />;
  }
  if (weatherType === 'Cloudy') {
    return <CloudIcon width={34} height={34} fill="#fff" />;
  }
  if (weatherType === 'Night') {
    return <MoonIcon width={34} height={34} fill="#fff" />;
  }
};
const CityItem = ({location, bgImg}) => {
  const {width: windowWidth, height: windowHeight} = useWindowDimensions();
  return (
    <View style={{width: windowWidth, height: windowHeight}}>
      <ImageBackground
        source={bgImg}
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: 20,
          }}>
          <View style={styles.topInfoWrapper}>
            <View>
              <Text style={styles.city}>{location.city}</Text>
              <Text style={styles.time}>{location.dateTime}</Text>
            </View>
            <View>
              <Text style={styles.temparature}>{location.temparature}</Text>
              <View style={{flexDirection: 'row'}}>
                {WeatherIcon(location.weatherType)}
                <Text style={styles.weatherType}>{location.weatherType}</Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              borderBottomColor: 'rgba(255,255,255,0.7)',
              marginTop: 20,
              borderBottomWidth: 1,
            }}
          />
          <View style={styles.bottomInfoWrapper}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.infoText}>Wind</Text>
              <Text style={[styles.infoText, {fontSize: 24}]}>
                {location.wind}
              </Text>
              <Text style={styles.infoText}>km/h</Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <Text style={styles.infoText}>Rain</Text>
              <Text style={[styles.infoText, {fontSize: 24}]}>
                {location.rain}
              </Text>
              <Text style={styles.infoText}>%</Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <Text style={styles.infoText}>Humidity</Text>
              <Text style={[styles.infoText, {fontSize: 24}]}>
                {location.humidity}
              </Text>
              <Text style={styles.infoText}>%</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appHeader: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: getStatusBarHeight() + 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
  },
  topInfoWrapper: {
    flex: 1,
    marginTop: 160,
    justifyContent: 'space-between',
  },
  city: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
  },
  time: {
    color: '#fff',
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
  },
  temparature: {
    color: '#fff',
    fontFamily: 'Lato-Light',
    fontSize: 85,
  },
  weatherType: {
    color: '#fff',
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 34,
    marginLeft: 10,
  },
  bottomInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  infoText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
  },
  infoBar: {
    width: 45,
    height: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  indicatorWrapper: {
    position: 'absolute',
    top: 140,
    left: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  normalDot: {
    height: 5,
    width: 5,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: '#fff',
  },
});

export default CityItem;
