import React, { Fragment } from "react"
import { View, Text, ScrollView, TouchableOpacity, FlatList } from "react-native"
import styles from "./styles"

export default function QuotationsList(props) {
    const dayQurey = props.filterDay 
    return (
        <Fragment>
            <View style={styles.filtert}>
                <TouchableOpacity
                style={styles.buttonquery}
                onPress={()=> dayQurey(7)}>
                    <Text style={styles.textButtonQuery}>7D</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.buttonquery}
                onPress={()=>dayQurey(15)}>
                    <Text style={styles.textButtonQuery}>15D</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.buttonquery}
                onPress={()=>dayQurey(30)}>
                    <Text style={styles.textButtonQuery}>1M</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.buttonquery}
                onPress={()=>dayQurey(90)}>
                    <Text style={styles.textButtonQuery}>3M</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.buttonquery}
                onPress={()=>dayQurey(180)}>
                    <Text style={styles.textButtonQuery}>6M</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <FlatList
                data={props.listTransaction}
                renderItem={({item})=>{
                    return <QuotationItems valor={item.valor} data={item.data}/>
                }}
                />
            </ScrollView>
        </Fragment>
    )
}