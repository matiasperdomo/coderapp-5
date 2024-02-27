import { useEffect, useState } from "react";
import { View ,Image, Pressable, StyleSheet, Text, useWindowDimensions } from "react-native";
import Card from "./Card";

const ProductItem = ({ product, navigation }) => {
  const [isPortrait, setIsPortrait] = useState(true);
  const [isLandscape, setIsLandscape] = useState(false);

  const { width, height } = useWindowDimensions();

  console.log(width, height);

  useEffect(() => {
    if (height > width) {
      setIsPortrait(true);
      setIsLandscape(false);
    } else {
      setIsPortrait(false);
      setIsLandscape(true);
    }
  }, [width, height]);

  return (
    <>
      <Pressable style={styles.pressable} onPress={() => navigation.navigate("ItemDetail", {id: product.id})}>
        <Card style={styles.card}>
          <View style={styles.info}>
            <Text style={width < 350 ? styles.textMin : styles.text}>{product.title}</Text>
            <Text style={{fontSize: 25, fontFamily: "Lexend", fontWeight: 'bold'}}>${product.price}</Text>
            <Pressable style={styles.carrito}>
              <Text>🛒 Agregar al carrito</Text>
            </Pressable>
          </View>
          <Image style={{width: 100, height:100, resizeMode:"cover", borderRadius: 5}} src={product.images[0]}></Image>
        </Card>
      </Pressable>
    </>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: "Lexend",
  },
  card: {
    width: "90%",
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 10,
    backgroundColor: "#fee0d5",
    borderRadius: 10,
    padding: 10,
  },
  info: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  pressable: {
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  carrito: {
    marginRight: 20,
    paddingVertical: 6,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#be7938',
  },
  textMin: {
    width: "70%",
    fontSize: 15,
  },
});
