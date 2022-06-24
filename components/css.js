import React from 'react';

import {
    Dimensions,
    StyleSheet,
} from 'react-native';

export let css = StyleSheet.create({
    listTop: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        color: 'yellow',
        backgroundColor: '#191919',
        paddingVertical: 10,
    },
    listTopElement: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        backgroundColor: "#242424",
    },
    listElement: {
        flex: 1,
        alignItems: 'center',

        borderStyle: 'solid',
        borderColor: 'rgba(100,100,10,0.4)',
        borderWidth: 1,

        padding: 10,
        backgroundColor: "rgba(100,100,10,0.05)",
        marginHorizontal: 2,
    },
    list: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 2,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },

    backgroundStyle: {
        height: Dimensions.get('window').height,
    }
});