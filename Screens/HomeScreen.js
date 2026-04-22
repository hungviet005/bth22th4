import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather, Ionicons } from '@expo/vector-icons';

const categories = ['All Coffee', 'Macchiato', 'Latte', 'Americano'];
const promoImage = require('../assets/Banner.png');
const productImages = {
  caffeMocha: require('../assets/Image & Rating.png'),
  flatWhite: require('../assets/Image & Rating (1).png'),
  caramelLatte: require('../assets/Image & Rating (2).png'),
  americano: require('../assets/Image & Rating (3).png'),
};

const products = [
  {
    id: 'caffe-mocha',
    name: 'Caffe Mocha',
    subtitle: 'Deep Foam',
    category: 'All Coffee',
    price: 4.53,
    rating: 4.8,
    reviews: 230,
    image: productImages.caffeMocha,
    description:
      'A cappuccino is an approximately 150 ml beverage with espresso, steamed milk, and a soft layer of foam for a rich and smooth finish.',
  },
  {
    id: 'flat-white',
    name: 'Flat White',
    subtitle: 'Espresso',
    category: 'Macchiato',
    price: 3.53,
    rating: 4.6,
    reviews: 178,
    image: productImages.flatWhite,
    description:
      'Balanced espresso and creamy milk with a silky finish, built for a softer coffee profile and clean mouthfeel.',
  },
  {
    id: 'caramel-latte',
    name: 'Caramel Latte',
    subtitle: 'Sweet Blend',
    category: 'Latte',
    price: 5.1,
    rating: 4.9,
    reviews: 312,
    image: productImages.caramelLatte,
    description:
      'Velvety espresso layered with caramel notes and steamed milk for a fuller and sweeter coffee moment.',
  },
  {
    id: 'americano',
    name: 'Classic Americano',
    subtitle: 'Bold Taste',
    category: 'Americano',
    price: 3.1,
    rating: 4.5,
    reviews: 141,
    image: productImages.americano,
    description:
      'A clean and bold espresso diluted with hot water, ideal for those who want a strong but smooth cup.',
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>

      <View style={styles.hero}>
        <View style={styles.topRow}>
          <View style={styles.locationBlock}>
            <Text style={styles.locationLabel}>Location</Text>
            <View style={styles.locationRow}>
              <Text style={styles.locationValue}>Bilzen, Tanjungbalai</Text>
              <Ionicons name="chevron-down" size={12} color="#fff8f2" />
            </View>
          </View>
        </View>

        <View style={styles.searchRow}>
          <View style={styles.searchBox}>
            <Feather name="search" size={18} color="#8f8a86" style={styles.searchIcon} />
            <TextInput
              placeholder="Search coffee"
              placeholderTextColor="#8f8a86"
              style={styles.searchInput}
            />
          </View>

          <Pressable style={styles.filterButton}>
            <Feather name="sliders" size={18} color="#fff" />
          </Pressable>
        </View>
      </View>

      <View style={styles.promoCard}>
        <Image source={promoImage} style={styles.promoCardImage} />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryRow}
      >
        {categories.map((category, index) => {
          const active = index === 0;

          return (
            <Pressable key={category} style={[styles.categoryChip, active && styles.activeChip]}>
              <Text style={[styles.categoryText, active && styles.activeChipText]}>{category}</Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <View style={styles.grid}>
        {products.map((product) => (
          <Pressable
            key={product.id}
            style={styles.card}
            onPress={() => navigation.navigate('Detail', { product })}
          >
            <Image source={product.image} style={styles.cardImage} />

            <Text style={styles.cardTitle}>{product.name}</Text>
            <Text style={styles.cardSubtitle}>{product.subtitle}</Text>

            <View style={styles.cardFooter}>
              <Text style={styles.price}>${product.price.toFixed(2)}</Text>
              <View style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
              </View>
            </View>
          </Pressable>
        ))}
      </View>

      </ScrollView>

      <View style={styles.bottomNavWrap}>
        <View style={styles.tabBar}>
          <View style={styles.tabItem}>
            <Ionicons name="home" size={20} color="#c67c4e" />
            <View style={styles.activeDot} />
          </View>
          <View style={styles.tabItem}>
            <Feather name="heart" size={19} color="#b6b0ac" />
          </View>
          <View style={styles.tabItem}>
            <Feather name="shopping-bag" size={19} color="#b6b0ac" />
          </View>
          <View style={styles.tabItem}>
            <Feather name="bell" size={19} color="#b6b0ac" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f6ede4',
  },
  container: {
    flex: 1,
    backgroundColor: '#f6ede4',
  },
  content: {
    paddingBottom: 120,
  },
  hero: {
    backgroundColor: '#1f1a17',
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    paddingTop: 35,
    paddingHorizontal: 24,
    paddingBottom: 128,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  locationBlock: {
    marginTop: 36,
  },
  locationLabel: {
    color: '#9b938d',
    fontSize: 12,
    marginBottom: 6,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  locationValue: {
    color: '#fff8f2',
    fontSize: 15,
    fontWeight: '600',
  },
  searchRow: {
    flexDirection: 'row',
    gap: 12,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2623',
    borderRadius: 16,
    paddingHorizontal: 16,
    minHeight: 54,
  },
  searchIcon: {
    color: '#8f8a86',
    fontSize: 18,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: '#fff9f5',
    fontSize: 14,
  },
  filterButton: {
    width: 54,
    borderRadius: 16,
    backgroundColor: '#c67c4e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  promoCard: {
    marginHorizontal: 24,
    marginTop: -52,
    borderRadius: 24,
    overflow: 'hidden',
  },
  promoCardImage: {
    width: '100%',
    height: 160,
    borderRadius: 24,
  },
  categoryRow: {
    paddingHorizontal: 24,
    paddingTop: 22,
    paddingBottom: 10,
    gap: 10,
  },
  categoryChip: {
    backgroundColor: '#f2e7dc',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
  },
  activeChip: {
    backgroundColor: '#c67c4e',
  },
  categoryText: {
    color: '#39291f',
    fontWeight: '600',
  },
  activeChipText: {
    color: '#fff7f0',
  },
  grid: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 18,
  },
  card: {
    width: '48%',
    backgroundColor: '#fffaf6',
    borderRadius: 20,
    padding: 10,
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: 128,
    borderRadius: 16,
    marginBottom: 10,
  },
  cardTitle: {
    color: '#2f241d',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  cardSubtitle: {
    color: '#a09a96',
    fontSize: 12,
    marginBottom: 12,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    color: '#2d2019',
    fontSize: 18,
    fontWeight: '800',
  },
  addButton: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#c67c4e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  bottomNavWrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 16,
    alignItems: 'center',
  },
  tabBar: {
    width: '88%',
    backgroundColor: '#fffaf6',
    borderRadius: 22,
    paddingVertical: 16,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeDot: {
    width: 9,
    height: 4,
    borderRadius: 999,
    backgroundColor: '#c67c4e',
    marginTop: 7,
  },
});