import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Image, ScrollView, SafeAreaView, Platform } from 'react-native';
import 'react-native-gesture-handler';
import Component1 from './src/components/Component1';
import Component2 from './src/components/Component2';
import Component4 from './src/components/Component4';
import Component5 from './src/components/Component5';
import Component6 from './src/components/Component6';
import Component7 from './src/components/Component7';
import Component9 from './src/components/Component9';
//Let's create a simple separator component that will only be used here in App.tsx

const Separator: React.FC = () => {
  return <View style={styles.separator}></View>
}
const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
        <ScrollView>
          <View style={styles.container}>
            <Image style={styles.logo} source={require('./src/PAU-Logo.png')} />
          </View>
          <Component1 route={undefined!} navigation={undefined!} />
          <Separator />
          <Component2 name='Pius' />
          <Component2 />
          <Separator />
          <Component4 text={'Sope'} />
          <Separator />
          <Component5 />
          <Separator />
          <Component6 />
          <Separator />
          <Component7 />
          <Separator />
          <Component9 />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'stretch', //across the flex direction (left to right)
    padding: 15,
    justifyContent: 'center', //along the flex direction (top to bottom)
  },
  separator: {
    backgroundColor: '#eee',
    height: 3,
    width: '100%'
  },
  screenHeader: {
    flex: 1,
    paddingTop: 27,
    justifyContent: 'center',
    backgroundColor: 'darkblue'
  },
  screenBody: {
    flex: 6,
    justifyContent: 'center',
  },
  logo: {
    alignSelf: 'center',
    width: 200,
    height: 82
  }
});
export default App;