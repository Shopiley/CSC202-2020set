import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

type Props = {
text: string
}

const Component4: React.FC<Props> = (props) => {
//const [state, setState] = useState(initialState);
const [state, setState] = useState({text: props.text, click: 0});
//since two variables are used for one state call, the state variable is declared as an object and accessed as such

return (
<View> 
<Text>Hello {state.text}. Greetings from from React-Native.</Text>
<View>
<TextInput placeholder="Write a name here..." onChangeText= {(name:string) => {setState({...state, text:name})}} autoFocus/>
</View>
<View>
<Text>You clicked {state.click} times</Text>
<Button title="Click Me" onPress={() => {setState({...state, click:state.click + 1 })}}/>
</View>
</View>
)
}
const styles = StyleSheet.create({
    text:{
    color: '#fff',
    fontSize: 20,
    padding: 6,
    alignItems: 'center',
    marginBottom: 3
    }
    })

    Component4.defaultProps = {
    text: "John"
    }
    export default Component4;