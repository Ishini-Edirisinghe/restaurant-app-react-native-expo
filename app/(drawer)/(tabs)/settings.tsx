import { StyleSheet, Image, Platform, TouchableOpacity ,Text} from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Link, router } from 'expo-router';

export default function TabTwoScreen() {
  return (
     <TouchableOpacity style={styles.button} onPress={() => router.push('/login')} >
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
    

  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#FFB800',  // Yellow background
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'black',  // Black text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});
