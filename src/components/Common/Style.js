import { Dimensions } from 'react-native';


const styles = {
    text: {
        fontSize: Dimensions.get('window').width * 0.047,
        color: 'black',
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: 'normal',
        fontStyle: 'normal'
    },
    miniText: {
        fontSize: Dimensions.get('window').width * 0.03,
        color: 'black',
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: 'normal',
        fontStyle: 'normal'
    },
    title: {
        fontSize: (Dimensions.get('window').width) * 0.1,
        backgroundColor: 'transparent',
        textAlign: 'center',
        color: '#f2b71a',
        fontWeight: '800',
        fontStyle: 'normal'
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
       flex:1,

        backgroundColor: 'transparent',
        borderWidth: .5,
        borderColor: '#CCC'

    },
    imageWraper: { width: 30, height: 30, marginLeft: (Dimensions.get('window').width) * 0.07 },
    tempF: {
        fontSize: (Dimensions.get('window').width) * 0.15,
        textAlign: 'center',
        color: 'orange',
        fontWeight: '800',
        fontStyle: 'normal'
    },
    tempC: {
        fontSize: (Dimensions.get('window').width) * 0.08,
        textAlign: 'center',
        alignSelf: 'center',
        color: 'orange',
        fontWeight: '800',
        fontStyle: 'normal'
    },
    image: {
        width: (Dimensions.get('window').width) * 0.15,
        height: (Dimensions.get('window').width) * 0.15,
        alignSelf: 'center',


    },
    CurrentWeatherWrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
};


export default styles;
