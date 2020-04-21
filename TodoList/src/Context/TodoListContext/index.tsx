import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface Props {
    children: JSX.Element | Array<JSX.Element>;
}

// 초기값을 할당하여 Context를 생성
const TodoListContext = createContext<ITodoListContext>({
    todoList: [], //문자열
    addTodoList: (todo: string): void => {}, // 함수
    removeTodoList: (index: number): void => {}, // 함수
    removeAllTodoList: (): void => {},
});

// Context의 프로바이더 컴포넌트를 만들고 공통 부모 컴포넌트의 부모 컴포넌트로서 사용한다.
const TodoListContextProvider = ({ children }: Props) => {
    // 생성한 state를 Context에 저장
    const [todoList, setTodoList] = useState<Array<string>>([]);

    const addTodoList = (todo: string): void => {
        const list = [...todoList, todo]; //...todoList: todoList의 모든 데이터를 넣고, todo를 추가
        setTodoList(list); // State 값을 변경한다
        AsyncStorage.setItem('todoList', JSON.stringify(list)); // 데이터를 물리적으로 저장
    };

    const removeTodoList = (index: number): void => {
        let list = [...todoList];
        list.splice(index, 1);
        setTodoList(list);
        AsyncStorage.setItem('todoList', JSON.stringify(list)); // 물리적으로 저장된 값도 업데이트
    };
    
    const removeAllTodoList = (): void => {
        const list = [null];
        setTodoList([]);
        AsyncStorage.setItem('todoList', JSON.stringify(list));
    };

    // 'todolist'를 가지고와서 null이 아니면 JSON.parse 함수를 사용하여 문자열 배열로 변경하는 함수
    const initData = async() => {
        try {
            // await는 Promise를 기다리는데 .setItem과 .getItem은 모두 Promise임
            const list = await AsyncStorage.getItem('todolist'); 
            // list에 값이 생길때까지 아래 코드가 돌지 않고 멈춰있다
            if (list != null) {
                setTodoList(JSON.parse(list));
            }
        } catch (e) {
            console.log(e); // 에러가 나면 console.log에 남겨라
        }
    };

    // 처음 렌더링될 때만 initData()를 실행해라
    useEffect(() => {
        initData();
    }, []);

    return (
        <TodoListContext.Provider value={{
            todoList,
            addTodoList,
            removeTodoList,
            removeAllTodoList,
        }}>
            {children}
        </TodoListContext.Provider>
    );
};

export { TodoListContextProvider, TodoListContext };