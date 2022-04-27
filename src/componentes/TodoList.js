import React from 'react';
import {FlatList, View, Text} from 'react-native';
import { Todo } from './Todo';

export const TodoList = ({todosData}) => {
  return (
    <FlatList
        data={todosData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item})=><Todo {...item} />}
    />
  )
}
