import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const onboardingImage = require('../assets/ImageOnboarding.png');

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.topFrame}>
        <ImageBackground source={onboardingImage} resizeMode="cover" style={styles.topImage}>
          <View style={styles.imageShade} />
        </ImageBackground>

        <View pointerEvents="none" style={styles.seamShadow} />
      </View>

      <View pointerEvents="none" style={styles.centerScreenText}>
        <View style={styles.copyBlock}>
          <Text style={styles.title}>Fall in Love with Coffee in Blissful Delight!</Text>
          <Text style={styles.description}>
            Welcome to our cozy coffee corner, where every cup is a delightful for you.
          </Text>
        </View>
      </View>

      <View style={styles.bottomPanel}>
        <View pointerEvents="none" style={styles.seamFade} />
        <View pointerEvents="none" style={styles.seamFadeSoft} />

        <Pressable style={styles.button} onPress={() => navigation.replace('Home')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070504',
  },
  topFrame: {
    flex: 0.7,
    overflow: 'visible',
    position: 'relative',
    zIndex: 3,
  },
  topImage: {
    flex: 1,
    overflow: 'hidden',
  },
  imageShade: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(28, 24, 21, 0.08)',
  },
  bottomPanel: {
    flex: 0.2,
    marginTop: -22,
    backgroundColor: '#070504',
    position: 'relative',
    zIndex: 2,
    paddingTop: 30,
    paddingHorizontal: 24,
    paddingBottom: 14,
    justifyContent: 'flex-end',
  },
  centerScreenText: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  seamShadow: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -10,
    height: 50,
    backgroundColor: 'rgba(7, 5, 4, 0.28)',
  },
  seamFade: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 18,
    backgroundColor: 'rgba(7, 5, 4, 0.24)',
  },
  seamFadeSoft: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 16,
    height: 22,
    backgroundColor: 'rgba(7, 5, 4, 0.14)',
  },
  copyBlock: {
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 300,
    fontFamily: 'System',
  },
  title: {
    color: '#fff7f0',
    fontSize: 30,
    lineHeight: 45,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 12,
    fontFamily: 'serif',
  },
  description: {
    color: 'rgba(255, 247, 240, 0.6)',
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '400',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignSelf: 'stretch',
    backgroundColor: '#c67c4e',
    borderRadius: 14,
    minHeight: 70,
    marginTop: -20,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fffaf6',
    fontSize: 16,
    fontWeight: '700',
  },
});