import React from 'react';
import { Text, View, Platform, Image } from 'react-native';
import styles from './Style'

const CurrentWeatherItem = (props) => {
    const { image, tempF,tempC, CurrentWeatherWrapper, text } = styles;
    return (
        <View style={CurrentWeatherWrapper}>
         <Image
          style={image}
          source={{uri: props.data.icon_url}}
        />
           <View style={{ flexDirection: 'row'}}>
           <Text style={tempF}>{props.data.temp.english}F </Text>
           <Text style={tempC}>/{props.data.temp.metric} C </Text>
           </View>
   
        <Text style={text}>{props.data.FCTTIME.pretty}  </Text>
        <Text style={text}>humidity: {props.data.humidity}, {props.data.condition}</Text>
      
        </View>
    );
};

export { CurrentWeatherItem };

