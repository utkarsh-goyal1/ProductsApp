import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';
import {add_to_cart, remove_from_cart} from './redux/action';
import {useDispatch, useSelector} from 'react-redux';

function Product({item}) {
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);
  const cartItems = useSelector(state => state.cart);

  const handleAddToCart = () => {
    dispatch(add_to_cart(item));
  };

  const handleRemoveFromCart = () => {
    dispatch(remove_from_cart(item.title));
  };

  useEffect(() => {
    const itemInCart = cartItems.some(cartItem => cartItem.title === item.title);
    setIsAdded(itemInCart);
  }, [cartItems, item.title]);
  if (!item || !item.title) {
    return <Text>Item not found</Text>;
  }
  return (
    <View style={styles.productContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>Category: {item.category}</Text>
      <Text style={styles.color}>Price: {item.price}</Text>
      <Text style={styles.color}>Rating: {item.rating}</Text>
      {isAdded ? (
        <Button title="Remove from cart" onPress={handleRemoveFromCart} />
      ) : (
        <Button title="Add to cart" onPress={handleAddToCart} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    margin: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 24,
  },
  color: {
    fontSize: 24,
  },
});

export default Product;
