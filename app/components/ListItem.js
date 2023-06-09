import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors';
import AppText from './AppText';

function ListItem({title, subTitle, image, IconComponent, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
            underlayColor={colors.light} onPress={onPress}>

                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailContainer}>
                        <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle}
                        numberOfLines={2}>{subTitle}</AppText>}
                    </View>
                    <MaterialCommunityIcons
                    name='chevron-right'
                    color={colors.medium}
                    size={25}
                    />
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white
    },
    detailContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "center"
    },

    image: {
        width: 70,
        height:70,
        borderRadius:35,
        marginRight: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
        
    },
    subTitle: {
        color: colors.medium,
    }
})

export default ListItem;