import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function InventoryScanner() {

  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);

  const handleBarCodeScanned = ({ data }: any) => {

    setScanned(true);

    router.push({
      pathname: "/product/[barcode]",
      params: { barcode: data }
    });

  };

  if (!permission) return <View />;

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text>Camera permission required</Text>
        <Button title="Allow Camera" onPress={requestPermission} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={{ flex: 1 }}
        barcodeScannerSettings={{
          barcodeTypes: ["qr", "ean13", "code128", "upc_a"]
        }}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 }
});