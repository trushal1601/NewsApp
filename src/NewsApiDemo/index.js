import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import axios from 'axios';

const NewsApiDemo = ({navigation}) => {
  const [data, setData] = useState([{}]);
  const getNewsApiData = async () => {
    const res = await axios.get(
      'https://newsapi.org/v2/top-headlines?country=in&apiKey=39a1b26694f645aeacadb24b272f360f',
    );
    setData(res.data.articles);
  };
  useEffect(() => {
    getNewsApiData();
  }, []);

  return (
    <View style={{flex: 1}}>
      <Text style={styles.headerText}>News</Text>
      <FlatList
        // horizontal
        data={data}
        renderItem={item => {
          return (
            <TouchableOpacity
              style={styles.container}
              onPress={() => Linking.openURL(item.item.url)}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: item?.item?.urlToImage,
                }}
              />
              <Text style={styles.title}>{item.item.title}</Text>
              <Text style={styles.date}>{item.item.publishedAt}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: 'red',
  },
  tinyLogo: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    // padding: 10,
  },
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
    // backgroundColor: '#E0D3D1',
    padding: 20,
    borderRadius: 10,
    elevation: 8,
    // shadowColor: '#581845',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
  },
  date: {
    marginTop: 10,
    textAlign: 'right',
  },
  headerText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
  },
});

export default NewsApiDemo;
