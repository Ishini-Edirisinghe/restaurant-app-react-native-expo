import {
  Image,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { Text, ImageBackground } from "react-native";
import { router } from "expo-router";
import { useState } from "react";
import ItemModal from "@/components/Itemmodal";

const PlaceholderImage = require("@/assets/images/promotion.png");
const Foodimg = require("@/assets/images/burger.png");

const data = [
  { name: "ann" },
  { name: "mary" },
  { name: "suzen" },
  { name: "lary" },
  { name: "kate" },
  { name: "jake" },
  { name: "liya" },
];

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItemName, setSelectedItemName] = useState<string | null>(null);

  const handlePress = (name: string) => {
    setSelectedItemName(name); // Set the selected item's name
    setModalVisible(true); // Open the modal
  };
  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      
      <FlatList
        data={data}
        // numColumns={1}
        // columnWrapperStyle={{gap:10, paddingHorizontal:12}}
        contentContainerStyle={{ gap: 10, paddingBottom: 20 }}
        keyExtractor={(item, idx) => item.name + idx}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View>
              
              <TouchableOpacity className="flex-row items-center justify-center 
             rounded-2xl mx-5 border border-gray-300 bg-white shadow"
              style={{ height: 150,}}
              onPress={() => handlePress(item.name)} // Pass item.name to the modal
              >
                <Text className="text-black self-start mt-10 text-xl font-bold	" style={{ color: "black", flex: 1, marginLeft: 40 }}>
                  {item.name}
                </Text>
                {/* Text on the left */}
                <Image
                  source={Foodimg}
                  style={[styles.image, { marginLeft: 10 }]} // Adds space between text and image
                  resizeMode="contain"
                />
              </TouchableOpacity>
              
            </View>
            
          );
        }}
        ListHeaderComponentStyle={{ marginVertical: 10 }}
        ListHeaderComponent={() => (
          <View>
            <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingHorizontal: 12,
          marginTop: 15,
        }}
      >
        <Text  className="font-extrabold">Promotions</Text>
      </View>
            <FlatList
              horizontal={true}
              style={{ paddingVertical: 5 }}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 10, paddingHorizontal: 12 }}
              data={data}
              keyExtractor={(item, idx) => item.name + idx}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "row",
                      backgroundColor: "gray",
                      flex: 1,
                      width: 300,
                      height: 140,
                      borderRadius: 20,
                    }}
                    onPress={() => router.push({ pathname: "/restaurant", params: { name: item.name } })}
                    >             
                    <ImageBackground
                      source={PlaceholderImage}
                      style={{
                        height: 140,
                        width: 300,
                        opacity: 0.8,
                        position: "absolute",
                      }}
                      imageStyle={{
                        borderRadius: 20, // Adding border radius to the image itself
                      }}
                    />
                    <View className="flex-1 items-start justify-start" style={{
                       marginLeft: 40
                      }}>
                      <Text className="text-white text-2xl font-bold">{item.name}</Text>
                      <Text className="text-white">promotion available here</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />

            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                paddingHorizontal: 12,
                marginTop: 15,
              }}
            >
              <Text className="font-extrabold">Popular</Text>
            </View>
            
          </View>
        )}
      />
       {/* Modal */}
      {/* Modal */}
      <ItemModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)} // Close the modal
      >
        <Text style={{ color: 'black', fontSize: 16, padding: 20 }}>
          Selected Item: {selectedItemName}
        </Text>
        <Image
                  source={Foodimg}
                  style={[styles.image, { marginLeft: 10 }]} // Adds space between text and image
                  resizeMode="contain"
                />

      </ItemModal>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },

  image: {
    width: 150, // Set the width of the image
    height: 240, // Set the height of the image
    marginRight: 10, // Add space between image and text
    marginLeft: 0,
    borderRadius: 10,
    // Optional: for rounded corners
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
