import { Stack } from "expo-router"

const StackLayout = () => {
  return(
    <Stack>
    <Stack.Screen name="explore" options={{headerShadowVisible: false}}/>
    </Stack>

  )
}

export default StackLayout;