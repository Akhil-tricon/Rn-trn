import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Scanner() {

  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);

  const handleBarCodeScanned = ({ type, data }: any) => {
    console.log("Barcode Type:", type);
    console.log("Barcode Data:", data);
    alert(`Scanned: ${data}`);
    setScanned(true);
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
          barcodeTypes: ["qr", "ean13", "code128", "upc_a"],
        }}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
      />

      {scanned && (
        <Button title="Scan Again" onPress={() => setScanned(false)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});