import React, { Children, useState } from 'react';

import {
    Text,
    View,
} from 'react-native';

import { css } from './css';


function ListElement({ children }) {
    return <View style={css.listElement}>
        <Text>{children}</Text>
    </View>;
}


export default function ListRow({ item, index }) {
    return <View
        style={css.list}
        key={index}>

        <ListElement>{item.birim}</ListElement>
        <ListElement>{item.alis}</ListElement>
        <ListElement>{item.satis}</ListElement>
        <ListElement>{item.adet}</ListElement>
        <ListElement>{item.toplam}</ListElement>
    </View>
}