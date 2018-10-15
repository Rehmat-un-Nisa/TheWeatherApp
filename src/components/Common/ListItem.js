import React from 'react';
import { Text, View, Dimensions, Image } from 'react-native';
import styles from './Style'

const ListItem = (props) => {
    const { text, wrapper, imageWraper } = styles;
    return (
        <View style={wrapper}>
            <Image
                style={imageWraper}
                source={{ uri: props.url }}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>

                <View style={{ flexDirection: 'column' }}>
                <Text style={text}>{props.condition}</Text>
                    <Text style={text}>{props.temp.english} F/{props.temp.metric}C</Text>
                    <Text style={text}>Humidity:{props.humidity}</Text>
                </View>

                <View style={{ flexDirection: 'column' , alignSelf: 'flex-end', marginRight:15}}>
                    <Text style={text}>{props.dateTime}</Text>
                </View>

            </View>



        </View>
    );
};

export { ListItem };

