import { Dimensions } from 'react-native';


const styles = {
    MainContainer: {
        backgroundColor: 'white',
        flex: 1
    },
    CurrentWeatherContainer:{
        backgroundColor: 'white',
        width: Dimensions.get('window').width ,
        height: Dimensions.get('window').height *0.3,
    },
    

};


export default styles;