import React, {useEffect, useState} from "react";
import {Divider, Button, Container, Text} from "@chakra-ui/react"
import List from "./components/List";
import Form from "./components/Form";
import Contacts from "./components/Contacts";

const generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r && 0x3 | 0x8);
        return v.toString(16);
    });
}

function App() {
    const localStorageRef = localStorage.getItem('todos')
    const [todos, setTodos] = useState(JSON.parse(localStorageRef) || [])

    useEffect(() => {
        const notCompletedTodosCount = todos.filter((todo) => todo.completed === false).length
        document.title = notCompletedTodosCount > 0 ? notCompletedTodosCount + ' todos' : notCompletedTodosCount + ' todo';
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const addTodo = value => {
        const newTodos = [...todos, {id: generateUUID(), name: value, completed: false}]
        setTodos(newTodos)
    }

    const editTodo = (id, value) => {
        const newTodos = [...todos]
        newTodos.find(item => item.id === id).name = value
        setTodos(newTodos)
    }

    const updateTodo = id => {
        const newTodos = [...todos]
        newTodos.find(item => item.id === id).completed = !(newTodos.find(item => item.id === id).completed)
        setTodos(newTodos)
    }

    const removeTodo = id => {
        const newTodos = todos.filter(item => item.id !== id)
        setTodos(newTodos)
    }

    const removeAllTodos = completed => {
        if (completed === undefined) return setTodos([])
        const newTodos = todos.filter(item => item.completed === !completed)
        setTodos(newTodos)
    }

    return (

        <div className="App">
            <Container p={7}>
                <Form addTodo={addTodo}/>
                <Divider mb={5} />
                {todos.length > 0
                    ?
                    <>
                        <List todos={todos}
                              onDelete={removeTodo}
                              onEdit={editTodo}
                              onUpdate={updateTodo}/>

                            <Button mt={5} width="100%"
                                    onClick={() => removeAllTodos(true)}>Remove completed</Button>
                            <Button mt={2}
                                    width="100%"
                                    onClick={() => removeAllTodos(false)}>Remove not completed</Button>
                            <Button mt={2}
                                    width="100%"
                                    border="1px"
                                    borderColor="red.500"
                                    onClick={() => removeAllTodos()}>Remove all</Button>
                    </>
                    : <Text fontSize="2xl">Your To-Do list is empty...</Text>}
                <Divider my={5} />
                <Contacts/>

            </Container>
        </div>
    )


}

export default App;
