import React, { Component } from 'react';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions';
import { ListItem, CurrentWeatherItem } from '../Common';

import styles from './Style'

class WeatherScreen extends Component {

    dataList = [];
    componentWillMount() {
        this.props.getWeatherData();
    }

/**This method converts current date time into epoch timestamp and compares it with the 
 * api epoch to find the Current Weather based on the closest hour
 * 
 * Note: 
 */
    renderCurrentWeatherDetails() {

        var milliseconds = Math.round((new Date()).getTime() / 1000);
        console.log(milliseconds);
        var epochList = this.dataList;
        smallestDiff = Math.abs(milliseconds - epochList[0].FCTTIME.epoch);
        closest = 0; //index of the current closest number

        for (i = 1; i < epochList.length; i++) {
            currentDiff = Math.abs(milliseconds - epochList[i].FCTTIME.epoch);
            if (currentDiff < smallestDiff) {
                smallestDiff = currentDiff;
                closest = i;
            }
        }
        console.log(epochList[closest].FCTTIME.epoch); 
        
            return (
            <CurrentWeatherItem
                data={epochList[closest]}
            />);
    }

/**This method renders Loader Or List data based on Loading state  
 */
    renderListOrLoader() {
        if (this.props.loading) {
            return (<ActivityIndicator size="large" color="#CCC" />);
        } else {
            return (
                <FlatList
                    data={this.dataList}
                    renderItem={({ item }) =>
                        <ListItem
                            dateTime={item.FCTTIME.pretty}
                            condition={item.condition}
                            url={item.icon_url}
                            temp={item.temp}
                            humidity={item.humidity}
                        />
                    }

                    ListHeaderComponent={this.renderCurrentWeatherDetails()}
                    keyExtractor={item => item.FCTTIME.pretty}
                />);
        }

    }

    render() {
        if (this.props.weatherData !== '') {
            this.dataList = JSON.parse(this.props.weatherData);
        }

        return (
            <View style={styles.MainContainer}>
                {this.renderListOrLoader()}
            </View>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActionCreators, dispatch);
}

const mapStateToProps = (state) => {
    const { loading, weatherData } = state.main;
    return { loading, weatherData };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherScreen);