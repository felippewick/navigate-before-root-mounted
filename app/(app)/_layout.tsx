import React from "react";
import { Slot, SplashScreen, router } from "expo-router";
import { useFonts } from "expo-font";
import { Text } from "react-native";
export default function AppLayout() {
  const [loaded] = useFonts({
    // SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
  });

  React.useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  React.useEffect(() => {
    if (!loaded) return;
    router.push("/about");
  }, [loaded]);

  // It is OK to defer rendering this nested layout's content. We couldn't
  // defer rendering the root layout's content since a navigation event (the
  // redirect) would have been triggered before the root layout's content had
  // been mounted.
  if (!loaded) {
    return <Text>Loading...</Text>;
  }

  return <Slot />;
}
