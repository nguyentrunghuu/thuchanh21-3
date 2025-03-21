import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
  const navigation = useNavigation(); // Lấy đối tượng navigation

  const [cartItems, setCartItems] = useState([
    { id: '1', name: 'Orange Juice', brand: "Lauren's", price: 149, quantity: 2, image: require('../assets/juice.png') },
    { id: '2', name: 'Skimmed Milk', brand: "Baskin's", price: 129, quantity: 2, image: require('../assets/milk.png') },
    { id: '3', name: 'Aloe Vera Lotion', brand: "Marley's", price: 1249, quantity: 2, image: require('../assets/lotion.png') },
  ]);

  const updateQuantity = (id, type) => {
    setCartItems(prevCart =>
      prevCart.map(item =>
        item.id === id
          ? { ...item, quantity: type === 'increase' ? item.quantity + 1 : Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Your Cart 👍</Text>
      </View>

      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 120 }}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.brand}>{item.brand}</Text>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.price}>₹ {item.price}</Text>
            </View>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => updateQuantity(item.id, 'decrease')}>
                <Ionicons name="remove-circle-outline" size={24} color="#FF8C42" />
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => updateQuantity(item.id, 'increase')}>
                <Ionicons name="add-circle-outline" size={24} color="#FF8C42" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalAmount}>₹ {totalAmount}</Text>
        </View>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => navigation.navigate('Payment')} // Điều hướng đến PaymentScreen
        >
          <Text style={styles.checkoutText}>Proceed to checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  productDetails: {
    flex: 1,
    marginLeft: 15,
  },
  brand: {
    fontSize: 12,
    color: 'gray',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#FF8C42',
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  // Footer luôn nằm ở đáy màn hình
  footer: {
    position: 'absolute',
    bottom: 60,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // Tạo bóng trên Android
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF8C42',
  },
  checkoutButton: {
    backgroundColor: '#FF8C42',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  checkoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
