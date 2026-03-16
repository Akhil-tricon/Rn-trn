import { CameraView } from "expo-camera";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Camera = () => {
  const [scanned, setScanned] = useState(false);
  const [flash, setFlash] = useState("off");
  const router = useRouter();
  const { width, height } = Dimensions.get("window");

  const scanBoxSize = 250;

  const scanArea = {
    x: (width - scanBoxSize) / 2,
    y: (height - scanBoxSize) / 2,
    width: scanBoxSize,
    height: scanBoxSize,
  };

  const handleScan = ({ data, bounds }: { data: string; bounds: any }) => {
    console.log("SCAN EVENT:", bounds);

    if (scanned) return;

    if (!bounds || !bounds.origin) return;

    if (!isInsideScanArea(bounds)) return;

    setScanned(true);

    console.log("Scanned inside frame:", data);
  };

  const isInsideScanArea = ({ bounds }: { bounds: any }) => {
    if (!bounds?.origin) return false;
    const { x, y } = bounds.origin;

    return (
      x > scanArea.x &&
      x < scanArea.x + scanArea.width &&
      y > scanArea.y &&
      y < scanArea.y + scanArea.height
    );
  };

  return (
    <>
      <View style={{ flex: 1 }}>
        <CameraView
          style={StyleSheet.absoluteFillObject}
          facing="back"
          // flash={flash}
          onBarcodeScanned={scanned ? undefined : handleScan}
        />
        <View style={styles.overlay}>
          <Text style={styles.text}>Align barcode within frame</Text>
          <View style={styles.scanBox} />
          <TouchableOpacity
            style={styles.flashButton}
            onPress={() =>
              setFlash((prev) => (prev === "off" ? "torch" : "off"))
            }
          >
            <Text style={{ color: "white" }}>
              {flash === "off" ? "Flash ON" : "Flash OFF"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {scanned && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => setScanned(false)}
        >
          <Text style={{ color: "white", fontSize: 18 }}>Scan Again</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Camera;

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 20,
    left: "50%",
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "white",
    fontSize: 18,
    marginBottom: 20,
  },

  scanBox: {
    width: 250,
    height: 250,
    borderWidth: 3,
    borderColor: "#31e4e4",
    borderRadius: 12,
  },
  flashButton: {
    position: "absolute",
    bottom: 80,
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 12,
    borderRadius: 10,
  },
});
