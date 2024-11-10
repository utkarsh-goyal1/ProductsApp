import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button, ScrollView, ActivityIndicator } from 'react-native';
import Header from './Header';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsRequest } from './redux/action';

function ProductWrapper({ navigation }) {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state.product);

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);
;

  return (
    <View style={{ flex: 1 }}>
      <Button title="Go to user list" onPress={() => navigation.navigate("User")} />
      <Header />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      <ScrollView>
        {(Array.isArray(products) && products.length > 0) ? products.map((item, index) => (
          <Product key={index} item={item} />
        )) : (
          !loading && <Text>No products available.</Text>
        )}
      </ScrollView>
    </View>
  );
}

export default ProductWrapper;
