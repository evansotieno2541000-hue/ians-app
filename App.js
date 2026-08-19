import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  ScrollView, 
  TouchableOpacity 
} from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* 1. Header Section */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Welcome back,</Text>
          <Text style={styles.userName}>Ian</Text>
        </View>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>I</Text>
        </View>
      </View>

      {/* 2. Scrollable Body Content */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Main Action Banner */}
        <View style={styles.mainCard}>
          <Text style={styles.cardTitle}>Ian's Main Hub</Text>
          <Text style={styles.cardSubtitle}>
            Your primary feature or central status update goes right here.
          </Text>
          <TouchableOpacity style={styles.cardButton}>
            <Text style={styles.cardButtonText}>Get Started</Text>
          </TouchableOpacity>
        </View>

        {/* Section Heading */}
        <Text style={styles.sectionTitle}>Recent Activity</Text>

        {/* Sample Feed / Activity Cards */}
        <View style={styles.itemCard}>
          <Text style={styles.itemTitle}>Feature Module 1</Text>
          <Text style={styles.itemDescription}>Quick preview or description of user data.</Text>
        </View>

        <View style={styles.itemCard}>
          <Text style={styles.itemTitle}>Feature Module 2</Text>
          <Text style={styles.itemDescription}>Secondary activity or status indicator.</Text>
        </View>

      </ScrollView>

      {/* 3. Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={[styles.navText, styles.activeNav]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  greeting: {
    fontSize: 14,
    color: '#718096',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A202C',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#00A896',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  scrollContent: {
    padding: 20,
  },
  mainCard: {
    backgroundColor: '#00A896',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardSubtitle: {
    color: 'rgba(255, 255, 255, 0.85)',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
  cardButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  cardButtonText: {
    color: '#00A896',
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A202C',
    marginBottom: 12,
  },
  itemCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A202C',
    marginBottom: 4,
  },
  itemDescription: {
    fontSize: 14,
    color: '#718096',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 14,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#718096',
  },
  activeNav: {
    color: '#00A896',
    fontWeight: 'bold',
  },
});
