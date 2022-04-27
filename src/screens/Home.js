import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TodoList } from '../componentes/TodoList';
import {todosData} from '../../data/todos';
import { useNavigation } from '@react-navigation/native';


export const Home = () => {
    const [localData, setLocalData] = useState(
        todosData.sort((a,b)=> {return a.isCompleted - b.isCompleted})
    );
    const [isHidden, setIsHidden] = useState(false);
    const handleHidePress = () => {
        if(isHidden){  
            setIsHidden(false)  
            setLocalData(todosData.sort((a,b)=> {return a.isCompleted - b.isCompleted}))
            return;
        } 
        setIsHidden(!isHidden)
        setLocalData(localData.filter(todo => !todo.isCompleted))
    }
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image
            source={{uri:'https://tierragamer.com/wp-content/uploads/2019/12/One-Punch-Man-Saitama-Sonrisa-768x432.jpg'}}
            style={styles.picture}
            />
            <View style={styles.button}>
            <Text style={styles.title}>Today</Text>
            <TouchableOpacity onPress={handleHidePress}>
                <Text style={{color:'#3478f6'}}>{ isHidden ? 'Show Completed':'Hide Complete'}</Text>
            </TouchableOpacity>
            </View>
            <TodoList todosData={localData.filter(todo => todo.isToday)} />
            
            <Text style={styles.title}>Tomorrow</Text>
            <TodoList todosData={todosData.filter(todo => !todo.isToday)} />
            <TouchableOpacity onPress={()=>navigation.navigate('AddTodo')}  style={styles.buttonplus}>
                <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingTop:60,
        paddingHorizontal:15,
      },
      picture: {
          width:42,
          height:42,
          borderRadius:21,
          alignSelf: 'flex-end',
      },
      title: {
          fontSize: 34,
          fontWeight: 'bold',
          marginBottom: 35,
          marginTop: 10,
      },
      button:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      buttonplus : {
          width: 42,
          height: 42, 
          borderRadius: 21,
          backgroundColor: '#000',
          position: 'absolute',
          bottom:50,
          right: 20,
          shadowColor: '#000',
          shadowOffset: {
              width: 0,
              height: 2,
          }, 
          shadowOpacity: .5,
          shadowRadius: 5,
          elevation: 5,
      }, 
      plus : {
          fontSize: 40,
          color: '#fff',
          position: 'absolute',
          top: -6,
          left: 9,
      },
    });