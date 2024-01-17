import { SafeAreaView, StatusBar } from 'react-native'
import { WebView } from 'react-native-webview'

export const Regeneracja = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden />
      <WebView
        source={{
          uri: 'https://drive.google.com/drive/folders/1kD8P9BS4_waJbVYoJNfIC42QzUx9MclL?usp=sharing',
        }}
      />
    </SafeAreaView>
  )
}
