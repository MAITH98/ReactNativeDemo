import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // If using Expo, you can use vector icons

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('../../../assets/frontend.jpg')} 
          style={styles.profileImage} 
        />
        <Text style={styles.headerText}>Welcome, Rihal Team!</Text>
      </View>

      <Text style={styles.title}>React Native Journey</Text>
      <Text style={styles.description}>
      This app was developed in less than 48 hours as a demonstration of what I've learned over the past two weeks. While it showcases key concepts, due to time constraints, not all features and knowledge gained could be fully implemented.
      </Text>

      <View style={styles.pointContainer}>
        <View style={styles.point}>
          <Ionicons name="code-slash" size={24} color="#160653" />
          <Text style={styles.pointText}>React (Web Development)</Text>
        </View>

        <View style={styles.point}>
          <Ionicons name="logo-apple-appstore" size={24} color="#160653" />
          <Text style={styles.pointText}>React Native (App Development)</Text>
        </View>

        <View style={styles.point}>
          <Ionicons name="add" size={24} color="#160653" />
          <Text style={styles.pointText}>Extra Skills (e.g., PostgreSQL)</Text>
        </View>
      </View>

      <Text style={styles.footerText}>Grateful for this opportunity</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2c3e50',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#7f8c8d',
    marginBottom: 40,
  },
  pointContainer: {
    alignItems: 'center',
  },
  point: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  pointText: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 10,
    color: '#160653',
  },
  footerText: {
    fontSize: 14,
    color: '#95a5a6',
    textAlign: 'center',
    marginTop: 20,
  },
});
