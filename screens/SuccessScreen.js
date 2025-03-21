import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const SuccessScreen = () => {
  const navigation = useNavigation();
  
  useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } });

    return () => {
      navigation.getParent()?.setOptions({ tabBarStyle: { height: 50, backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, position: 'absolute', paddingBottom: 5 } });
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Nút Back */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back-outline" size={24} color="#A0A0A0" />
      </TouchableOpacity>

      {/* Ảnh minh họa */}
      <Image source={require('../assets/Group 167.png')} style={styles.image} />

      {/* Tiêu đề & mô tả */}
      <Text style={styles.successText}>Payment Success, Yayy!</Text>
      <Text style={styles.description}>
        We will send order details and invoice in your contact no. and registered email
      </Text>

      {/* Link "Check Details" */}
      <TouchableOpacity style={styles.checkDetails}>
        <Text style={styles.checkText}>Check Details</Text>
        <Ionicons name="arrow-forward-outline" size={16} color="#5B6EF8" />
      </TouchableOpacity>

      {/* Nút Download Invoice */}
      <TouchableOpacity style={styles.downloadButton}>
        <Text style={styles.downloadText}>Download Invoice</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', padding: 20 },
  
  backButton: { position: 'absolute', top: 40, left: 20, padding: 10 },
  
  image: { width: 280, height: 250, resizeMode: 'contain', marginBottom: 20 },
  
  successText: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 5 },
  
  description: { fontSize: 14, color: 'gray', textAlign: 'center', paddingHorizontal: 20, marginBottom: 15 },
  
  checkDetails: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  
  checkText: { fontSize: 16, color: '#5B6EF8', fontWeight: 'bold', marginRight: 5 },
  
  downloadButton: { backgroundColor: '#5B6EF8', paddingVertical: 15, paddingHorizontal: 80, borderRadius: 10 },
  
  downloadText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});

export default SuccessScreen;
