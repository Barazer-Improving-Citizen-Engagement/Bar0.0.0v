import { Stack } from "expo-router"

const homeLayout = () => {
  return(
    <Stack>
    <Stack.Screen name="explore" options={{headerShadowVisible: false}}/>
    </Stack>

  )
}

export default homeLayout;