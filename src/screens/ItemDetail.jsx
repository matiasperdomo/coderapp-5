import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import allProducts from "../data/products.json";

const ItemDetail = ({ navigation, route }) => {
  const [product, setProduct] = useState(null);

  const { id } = route.params;

  useEffect(() => {
    const productFinded = allProducts.find((product) => product.id === id);
    setProduct(productFinded);
  }, [id]);

  return (
    <View style={styles.main}>
      {product ? (
        <View style={styles.container}>
          <Image
            source={{ uri: product.images[0] }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.textContainer}>
            <Text style={styles.descriptionText}>{product.title}</Text>
            <Text style={styles.descriptionText}>{product.description}</Text>
            <Text style={styles.descriptionTextPrice}>${product.price}</Text>
            <Pressable style={styles.buy}>
              <Text style={styles.buyText}>🛒Comprar</Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <View>
          <Text>Cargando...</Text>
        </View>
      )}
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: "100%",
  },
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
  },
  image: {
    width: "100%",
    height: 400,
    marginVertical: 15,
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 6,
  },
  descriptionText: {
    fontFamily: "Lexend",
    fontSize: 25,
    color: "#431e0b",
    paddingVertical: 4,
    fontWeight: "bold",
  },
  descriptionTextPrice: {
    fontFamily: "Lexend",
    fontSize: 25,
    color: "#431e0b",
    paddingVertical: 6,
    fontWeight: "bold",
  },
  buy: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: "#be7938",
  },
  buyText: {
    fontFamily: "Lexend",
    fontSize: 22,
    color: "white",
  },
});
