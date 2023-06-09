import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Platform, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import defaultStyles from '../config/styles';
import colors from '../config/colors';
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';

function AppPicker({icon,placeholder,items, onSelectItem, selectedItem}) {
    const [modalVisiable, setModalVisable] = useState(false)
    return (
        <React.Fragment>

            <TouchableWithoutFeedback onPress={() => setModalVisable(true)}>
    
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} />}
    
                    <AppText style={styles.text}>{selectedItem? selectedItem.label: placeholder}</AppText>
    
                    <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.medium} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisiable} animationType='slide'>
                <Screen><Button title='Close' onPress={()=> setModalVisable(false)} />
                <FlatList
                data={items}
                keyExtractor={item =>item.value.toString()}
                renderItem={({item})=><PickerItem label={item.label} 
                onPress={()=>{
                    setModalVisable(false);
                    onSelectItem(item);
                }}/>}
                 />
                </Screen>
            </Modal>
        </React.Fragment>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding:15,
        marginVertical:10
    },
    
    icon: {
        margin:10
    },
    text: {
        flex: 1,
    }
})

export default AppPicker;