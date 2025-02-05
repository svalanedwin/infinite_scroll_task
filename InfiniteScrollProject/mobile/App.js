import React from 'react';
import { FlatList, Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import { useInfiniteScroll } from '../shared/useInfiniteScroll';

export default function App() {
  const { data, fetchData, loading, hasMore } = useInfiniteScroll('https://jsonplaceholder.typicode.com/posts');

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
        onEndReached={hasMore ? fetchData : null}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading && <ActivityIndicator size="large" color="#0000ff" />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});