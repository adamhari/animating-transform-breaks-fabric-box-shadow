import React, { useRef, useState } from 'react';
import { Animated, Pressable, StyleSheet, View } from 'react-native';

export default function App() {
  const scale = useRef(new Animated.Value(1)).current;
  const [isScaled, setIsScaled] = useState(false);

  const animateScale = () => {
    Animated.spring(scale, {
      toValue: isScaled ? 1 : 3,
      useNativeDriver: true,
      friction: 5,
      tension: 150,
    }).start(() => {
      setIsScaled(!isScaled);
    });
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={animateScale}>
        <Animated.View style={[styles.box, { transform: [{ scale }] }]} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'skyblue',
    borderRadius: 8,
    boxShadow: '0 0 8px 8px rgba(0, 0, 0, 0.3)',
  },
});
