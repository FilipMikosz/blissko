import { SafeAreaView, StatusBar } from 'react-native'
import { WebView } from 'react-native-webview'

export const Relaks = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden />
      <WebView
        source={{
          uri: 'https://drive.google.com/drive/folders/1GiZyFs9Xnj0sjXp6rgqtnA8jrpzFI_Et?usp=sharing',
        }}
      />
    </SafeAreaView>
  )
}
