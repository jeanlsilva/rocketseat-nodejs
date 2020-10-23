import React, { Component } from 'react';
import api from '../services/api';

import { View, Text } from 'react-native';

export default class Main extends Component {
    state = {
        docs: [],
    }
    
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');

        const { docs } = response.data;

        this.setState({ docs }); 
    };

    renderItem = ({item}) => (
        <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
        </View>
    );

    render() {
        return (            
            <View>
                <Flatlist 
                    data={this.state.docs}
                    keyExtractor={item => item._id}
                    renderItem={this.renderItem} 
                />               
            </View>        
        );
    }
}