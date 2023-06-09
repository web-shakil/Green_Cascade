import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

function ListingDetailsScreen({route}) {
const listing = route.params;

    return (
        <View>
            <Image style={styles.image} source={listing.image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>${listing.price}</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                    image={require("../assets/nokib.jpg")} title="Nokibul Alam" subTitle="5 Listings" />
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
    },
    detailsContainer: {
        padding: 20,
        
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
        marginBottom: 7,
    },
    price: {
        color: colors.secondery,
        fontWeight: "bold",
        fontSize: 12,
        marginVertical:10
    },
    userContainer: {
        marginVertical: 40
    }
})

export default ListingDetailsScreen;