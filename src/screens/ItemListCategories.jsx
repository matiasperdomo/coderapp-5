import { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import { useSelector } from "react-redux";

function ItemListCategories({ navigation }) {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const productsFilteredByCategory = useSelector(
    (state) => state.shopReducer.value.productsFilteredByCategory
  );

  useEffect(() => {
    const productsFiltered = productsFilteredByCategory.filter((product)=> product.title.includes(keyword))
    setProducts(productsFiltered)
  }, [productsFilteredByCategory, keyword]);

  return (
    <View style={styles.container}>
      <Search onSearch={setKeyword} />
      <FlatList style={styles.flatlist}
        data={products}
        renderItem={({ item }) => <ProductItem product={item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default ItemListCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#be7938",
  },
  flatlist: {
    width: "100%",
  },
});
