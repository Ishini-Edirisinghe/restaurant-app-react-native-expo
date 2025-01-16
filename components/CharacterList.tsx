import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from API
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://api.api-onepiece.com/v2/characters/en');
        const data = await response.json();
        setCharacters(data.slice(0, 20)); // Assuming the API returns an array
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text className='text-2xl font-extrabold'>One Piece Characters from API</Text>  
      <FlatList
        data={characters}
        keyExtractor={(item:any) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.name}>{item.name}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    marginBottom: 8,
    color: '#333',
  },
});

export default CharacterList;
