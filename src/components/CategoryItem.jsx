import { Pressable, StyleSheet, Text } from "react-native";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../features/shop/shopSlice";

const CategoryItem = ({ category, navigation }) => {
  const dispatch = useDispatch()

  return (
    <Pressable style={{alignItems: "center"}}
      onPress={() => {
        dispatch(setCategorySelected(category))
        navigation.navigate("ItemListCategories", { category });
      }}
    >
      <Card style={styles.cardContainer}>
        <Text style={styles.text}>🔸{category}</Text>
      </Card>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  cardContainer: {
    width: "90%",
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 10,
  },
  text: {
    color: "#431e0b",
    fontSize: 20,
    textTransform: "capitalize",
    fontFamily: "Lexend",
  },
});
