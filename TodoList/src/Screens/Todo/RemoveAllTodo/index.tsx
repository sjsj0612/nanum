import React, {useContext} from 'react';
import RemoveAllButton from './RemoveAllButton';

import { TodoListContext } from '~/Context/TodoListContext';

interface Props {}

const RemoveAllTodo = ({ }: Props) => {
    const { removeAllTodoList } = useContext<ITodoListContext>(
        TodoListContext
    );
    
    return (
        <RemoveAllButton onPress={() => removeAllTodoList()} />
    );
};

export default RemoveAllTodo;


