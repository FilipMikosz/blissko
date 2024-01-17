import { SafeAreaView, StatusBar } from 'react-native'
import { WebView } from 'react-native-webview'

export const Praca = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden />
      <WebView
        source={{
          uri: 'https://drive.google.com/drive/folders/15JYA8-vyJ9rqcUiNY0cx85Gwhb-AUjdy?usp=sharing',
        }}
      />
    </SafeAreaView>
  )
}
