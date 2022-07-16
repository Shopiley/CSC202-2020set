import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ShowUser5 from './ShowUser5';

type User = {
id: string, //this needs to be string for keyExtractor in FlatList not to complain
name: string,
username: string,
email: string,
address:{
street: string,
suite: string,
city: string,
zipcode: string 
geo: {
lat: number,
lng: number
}
},
phone: string,
website: string,
company: {
name: string,
catchPhrase: string,
bs: string
}
}

type Props = {
users?: User[] //array of users
}

const ShowUser8: React.FC<Props> = (props) =>{
return (<ShowUser5 />)
}


export default ShowUser8;