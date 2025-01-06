import { Image, StyleSheet, Platform, View, FlatList, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Text ,ImageBackground} from 'react-native';

const PlaceholderImage = require('@/assets/images/promotion.png');

const data =[
  {name:"ann"},
  {name:"mary"},
  {name:"suzen"},
  {name:"lary"},
  {name:"kate"},
  {name:"jake"},
  {name:"liya"},

];

export default function HomeScreen() {
  return (
    <View style= {{flex:1, marginTop:20}}>
      <View
           style={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            flexDirection:"row",
            paddingHorizontal:12,
            marginTop:15
          }}>


            <Text style={{fontWeight:"600"}}>Promotions</Text>
          </View>
      <FlatList 
      data={data}
      // numColumns={1}
      // columnWrapperStyle={{gap:10, paddingHorizontal:12}}
      contentContainerStyle={{gap:10, paddingBottom:20}}
      keyExtractor={(item,idx)=>item.name+idx}
      showsVerticalScrollIndicator={false}
      renderItem={({item})=>{
        return(
          <TouchableOpacity
          style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"row",
            backgroundColor:"pink",
            flex:1,
            height:200,
            borderRadius:20,
            marginHorizontal: 20, // Adds left and right space
            
          }}
          >
           <Text style={{ color: "black", flex: 1,marginLeft: 10 }}>{item.name}</Text> {/* Text on the left */}
        <Image
          source={PlaceholderImage}
          style={[styles.image, { marginLeft: 10 }]} // Adds space between text and image
          resizeMode="contain"
        />
          </TouchableOpacity>
        )
      }}
      ListHeaderComponentStyle={{marginVertical:10}}
      ListHeaderComponent={()=>(
        <View>
          <FlatList
          horizontal={true}
          style={{paddingVertical:5}}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{gap:10,paddingHorizontal:12}}
          data={data}
          keyExtractor={(item,idx)=>item.name+idx}
          renderItem={({item})=>{
            return(
              <TouchableOpacity
              style={{display:"flex",
                justifyContent:"center",
                alignItems:"center",
                flexDirection:"row",
                backgroundColor:"gray",
                flex:1,
                width:300,
                height:140,
                borderRadius:20
              }}
              >
                 {/* <Image
                    source={PlaceholderImage}
                    style={styles.image}
                    resizeMode='contain'
                /> */}

<ImageBackground
            source={PlaceholderImage}
            style={{
              height: 140,
              width: 300,
              opacity: 0.6,
              position: 'absolute',
            }}
            imageStyle={{
              borderRadius: 20, // Adding border radius to the image itself
            }}
          />
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <Text style={{color:"white"}}>{item.name}</Text>
          </View>
              {/* <Text style={{color:"black"}}>{item.name}</Text> */}
              </TouchableOpacity>
            )
          }}
          />

          <View
           style={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            flexDirection:"row",
            paddingHorizontal:12,
            marginTop:15
          }}>


            <Text style={{fontWeight:"600"}}>Popular</Text>
          </View>

        </View>
      )}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
 
  image: {
    width: 200, // Set the width of the image
    height: 340, // Set the height of the image
    marginRight: 10, // Add space between image and text
    marginLeft: 0,
    borderRadius: 10, 
    // Optional: for rounded corners
  },
 
});

