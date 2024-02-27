import { Text, View, StyleSheet, Image } from "react-native";
import Logo from "../../assets/eypet-logo.png"

function Header({ title }) {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={{marginTop: 30, width:"60%", height:"60%", resizeMode: 'contain'}} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: 150,
    width: "100%",
    backgroundColor: "#fee0d5",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    padding: 10,
    textAlign: "center",
    color: "#431e0b",
    fontSize: 25,
    textTransform: "uppercase",
    fontFamily: "Boogaloo"
  },
});
