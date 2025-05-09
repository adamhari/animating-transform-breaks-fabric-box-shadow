import React, {useRef, useState} from 'react';
import {Animated, Pressable, View} from 'react-native';

export default function App() {
  const shrunkScale = 0.5;
  const grownScale = 2;

  const scale = useRef(new Animated.Value(shrunkScale)).current;
  const [isGrown, setIsGrown] = useState(false);

  const animateScale = () => {
    Animated.spring(scale, {
      toValue: isGrown ? grownScale : shrunkScale,
      useNativeDriver: true,
      friction: 5,
      tension: 150,
    }).start();
    setIsGrown(!isGrown);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Pressable onPress={animateScale}>
        <Animated.View
          style={[
            {
              width: 50,
              height: 50,
              backgroundColor: 'skyblue',
              borderRadius: 8,
              boxShadow: '0 0 8px 8px rgba(0, 0, 0, 0.3)',
            },
            {transform: [{scale}]},
          ]}
        />
      </Pressable>
    </View>
  );
}
