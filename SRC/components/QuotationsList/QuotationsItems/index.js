import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function QuotationItems(props) {
    return (
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image 
                    style={styles.logoBitcoin}
                    source={require("../../../img/bitcoin-logo-6-1-1547x2048.png")}
                    />
                    <Text style={styles.dayContation}>{props.data}</Text>
                </View>
            </View>
            <View style={styles.contextRight}>
                <Text style={styles.price}>{props.valor}</Text>
            </View>
        </View>
    )
}