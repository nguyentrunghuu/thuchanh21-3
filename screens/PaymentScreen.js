import React, { useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PaymentScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } });

    return () => {
      navigation.getParent()?.setOptions({ tabBarStyle: { height: 50, backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, position: 'absolute', paddingBottom: 5 } });
    };
  }, [navigation]);

  const handlePayment = () => {
    navigation.navigate('Success');
  };

  // Sửa hàm handleBack để dùng goBack thay vì navigate
  const handleBack = () => {
    navigation.goBack(); // Quay lại màn hình trước đó (CartMain)
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.checkoutContainer}>
          <Text style={styles.headerTitle}>Thanh toán</Text>
          <View style={styles.amountContainer}>
            <Text style={styles.totalAmount}>₹ 1,527</Text>
            <Text style={styles.taxText}>Bao gồm GST (18%)</Text>
          </View>
        </View>
      </View>
      
      {/* Các phần còn lại giữ nguyên */}
      <View style={styles.paymentOptions}>
        <TouchableOpacity style={styles.paymentButtonActive}>
          <Ionicons name="card" size={18} color="white" />
          <Text style={styles.paymentTextActive}>Thẻ tín dụng</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentButton}>
          <Ionicons name="logo-apple" size={18} color="black" />
          <Text style={styles.paymentText}>Apple Pay</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Số thẻ</Text>
      <View style={styles.cardNumberContainer}>
        <TextInput style={styles.cardInput} placeholder="2614 4141 0151 8472" keyboardType="number-pad" />
        <Image source={require('../assets/mastercard.png')} style={styles.cardIcon} />
      </View>

      <Text style={styles.label}>Tên chủ thẻ</Text>
      <TextInput style={styles.input} placeholder="Christie Doe" />

      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Ngày hết hạn</Text>
          <TextInput style={styles.input} placeholder="06 / 2024" />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>CVV / CVC</Text>
          <TextInput style={styles.input} placeholder="915" secureTextEntry />
        </View>
      </View>

      <Text style={styles.infoText}>
        Chúng tôi sẽ gửi chi tiết đơn hàng đến email của bạn sau khi thanh toán thành công
      </Text>

      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Ionicons name="lock-closed-outline" size={20} color="white" />
        <Text style={styles.payText}>Thanh toán đơn hàng</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles giữ nguyên, chỉ dịch sang tiếng Việt để dễ hiểu
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: 'white' },
  header: { 
    marginBottom: 30,
    paddingTop: 20 
  },
  backButton: { 
    marginBottom: 10 
  },
  checkoutContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  headerTitle: { fontSize: 24, fontWeight: 'bold' },
  amountContainer: { flexDirection: 'column', alignItems: 'flex-end' },
  totalAmount: { fontSize: 22, fontWeight: 'bold', color: '#27AE60' },
  taxText: { fontSize: 14, color: 'gray' },
  paymentOptions: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  paymentButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F0F0F0', padding: 12, borderRadius: 10, flex: 1, justifyContent: 'center', marginHorizontal: 5 },
  paymentButtonActive: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#27AE60', padding: 12, borderRadius: 10, flex: 1, justifyContent: 'center', marginHorizontal: 5 },
  paymentText: { color: 'black', fontWeight: 'bold', marginLeft: 5 },
  paymentTextActive: { color: 'white', fontWeight: 'bold', marginLeft: 5 },
  label: { fontSize: 14, fontWeight: 'bold', marginTop: 10 },
  cardNumberContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8F8F8', padding: 10, borderRadius: 10, marginTop: 5 },
  cardInput: { flex: 1, fontSize: 16 },
  cardIcon: { width: 30, height: 20, resizeMode: 'contain' },
  input: { backgroundColor: '#F8F8F8', padding: 10, borderRadius: 10, marginTop: 5 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  infoText: { fontSize: 12, color: 'gray', marginTop: 10, textAlign: 'center' },
  payButton: { flexDirection: 'row', backgroundColor: '#27AE60', padding: 15, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginTop: 20 },
  payText: { fontSize: 18, color: 'white', fontWeight: 'bold', marginLeft: 10 },
});

export default PaymentScreen;