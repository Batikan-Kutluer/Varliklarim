import React, { useEffect } from 'react';

import { fix, string_compare, highToLow, lowToHigh } from './utils';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
} from 'react-native';

import ListRow from './components/List';
import TopList from './components/TopList';

import { css } from './components/css';

let borsaApi = async () => await ((await fetch("https://borsa-api-bati.herokuapp.com/")).json())

const App = () => {
  const [borsa, setBorsa] = React.useState([])
  const [toplam, setToplam] = React.useState(0)

  const [sort, setSort] = React.useState(false)

  const [loading, setLoading] = React.useState(true);

  const isDarkMode = true;

  const backgroundStyle = {
    ...css.backgroundStyle,
    backgroundColor: "#1f1f1f"
  };

  useEffect(() => {
    if (loading) loadBorsa();
  }, [loading])

  async function loadBorsa() {
    setLoading(false)

    // Try if server is down.
    borsaApi().then(({ data }) => {
      setToplam(fix(data.map(item => item.toplam).reduce((a, b) => a + b)))

      setBorsa(data.sort((a, b) => sort ? lowToHigh(a, b) : highToLow(a, b)));
    }).catch(err => {
      console.log(err);
    })

    setTimeout(() => setLoading(true), 5 * 1000);
  }

  useEffect(() => {
    setBorsa(_ => _.sort((a, b) => sort ? lowToHigh(a, b) : highToLow(a, b)));
  }, [sort])

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>

        <Text style={css.title}>Varlıklarım</Text>

        <ScrollView>
          <TopList _sort={[sort, setSort]} />

          {

            borsa.length == 0 ? <Text>Liste Yükleniyor...</Text> : borsa.map((item, index) => {
              return <ListRow item={item} index={index} key={index}></ListRow>
            })

          }

          <ListRow item={
            {
              birim: "Toplam",
              alis: 0,
              satis: 0,
              adet: 0,
              toplam: toplam,
            }
          } />

        </ScrollView>

      </ScrollView>
    </SafeAreaView >
  );
};

export default App;
