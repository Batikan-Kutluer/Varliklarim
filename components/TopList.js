import React from 'react';

import {
    Text,
    View,
} from 'react-native';

import { css } from './css';

export default function TopList({ _sort }) {
    let [sort, setSort] = _sort;

    return <View
        style={css.listTop}>
        <View
            style={css.listTopElement}>
            <Text onPress={() => setSort(_ => !_)}>Birim</Text>
        </View>

        <View
            style={css.listTopElement}>
            <Text>Alış</Text>
        </View>

        <View
            style={css.listTopElement}>
            <Text>Satış</Text>
        </View>

        <View
            style={css.listTopElement}>
            <Text>Adet</Text>
        </View>

        <View
            style={css.listTopElement}>
            <Text>Toplam</Text>
        </View>
    </View>
}