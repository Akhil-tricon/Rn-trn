import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { products } from '../../data/products'

export default function ProductScreen() {

  const { barcode } = useLocalSearchParams();

  const product = products[barcode as string];

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Product not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      <Text>Price: ₹{product.price}</Text>
      <Text>Stock: {product.stock}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold"
  }
});