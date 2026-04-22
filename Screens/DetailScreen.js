import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const sizes = ['S', 'M', 'L'];

export default function DetailScreen({ navigation, route }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()} style={styles.iconButton}>
          <Text style={styles.iconText}>‹</Text>
        </Pressable>

        <Text style={styles.headerTitle}>Detail</Text>

        <Pressable style={styles.iconButton}>
          <Text style={styles.iconText}>♡</Text>
        </Pressable>
      </View>

      <Image source={product.image} style={styles.heroImage} />

      <View style={styles.body}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.subtitle}>{product.category}</Text>

        <View style={styles.metaRow}>
          <View>
            <Text style={styles.rating}>
              <Text style={styles.ratingStar}>★</Text> {product.rating}
            </Text>
            <Text style={styles.reviews}>({product.reviews})</Text>
          </View>

          <View style={styles.actionIcons}>
            <View style={styles.smallIcon}>
              <MaterialCommunityIcons name="motorbike" size={20} color="#c67c4e" />
            </View>
            <View style={styles.smallIcon}>
              <MaterialCommunityIcons name="coffee" size={20} color="#c67c4e" />
            </View>
            <View style={styles.smallIcon}>
              <MaterialCommunityIcons name="package-variant-closed" size={20} color="#c67c4e" />
            </View>
          </View>
        </View>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>{product.description}</Text>

        <Text style={styles.sectionTitle}>Size</Text>
        <View style={styles.sizeRow}>
          {sizes.map((size) => {
            const active = size === 'M';

            return (
              <Pressable key={size} style={[styles.sizeButton, active && styles.sizeButtonActive]}>
                <Text style={[styles.sizeText, active && styles.sizeTextActive]}>{size}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      <View style={styles.footer}>
        <View>
          <Text style={styles.priceLabel}>Price</Text>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        </View>

        <Pressable style={styles.buyButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buyText}>Buy Now</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaf6',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 40,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#f0e3d8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    color: '#2d221c',
    fontSize: 18,
    fontWeight: '600',
  },
  headerTitle: {
    color: '#2b211b',
    fontSize: 23,
    fontWeight: '700',
  },
  heroImage: {
    width: '100%',
    height: 240,
    borderRadius: 28,
    marginBottom: 24,
  },
  body: {
    flex: 1,
  },
  title: {
    color: '#2a1f19',
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 4,
  },
  subtitle: {
    color: '#aea39b',
    fontSize: 14,
    marginBottom: 20,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
  },
  rating: {
    color: '#2d221c',
    fontSize: 20,
    fontWeight: '800',
  },
  ratingStar: {
    color: '#f2b840',
  },
  reviews: {
    color: '#b0a8a3',
    fontSize: 13,
    marginTop: 2,
  },
  actionIcons: {
    flexDirection: 'row',
    gap: 10,
  },
  smallIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: '#fbf2eb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#f0e6de',
    marginBottom: 22,
  },
  sectionTitle: {
    color: '#2c211a',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  description: {
    color: '#9f978f',
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 24,
  },
  sizeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  sizeButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#f0e3d8',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  sizeButtonActive: {
    backgroundColor: '#fff2e8',
    borderColor: '#c67c4e',
  },
  sizeText: {
    color: '#2d221c',
    fontWeight: '600',
  },
  sizeTextActive: {
    color: '#c67c4e',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 18,
  },
  priceLabel: {
    color: '#a89e96',
    fontSize: 14,
    marginBottom: 6,
  },
  price: {
    color: '#c67c4e',
    fontSize: 28,
    fontWeight: '800',
  },
  buyButton: {
    flex: 1,
    marginLeft: 24,
    backgroundColor: '#c67c4e',
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: 'center',
  },
  buyText: {
    color: '#fff7f0',
    fontSize: 16,
    fontWeight: '700',
  },
});