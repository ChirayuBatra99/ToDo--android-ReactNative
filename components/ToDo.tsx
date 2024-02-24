import { StyleSheet, Text, View, Platform, TextInput, Button, KeyboardAvoidingView, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Task from './Task';

export default function ToDo() {
    const [text, onChangeText] = useState('');
    const [task, setTask] = useState('');
    const [taskArray, setTaskArray] = useState(['']);

    const handleAdd = () => {
        setTaskArray([...taskArray, task]);
        setTask('');
    }

    const completeTask = (index: number) => {
        let itemsCopy = [...taskArray];
        itemsCopy.splice(index, 1);
        setTaskArray(itemsCopy);
    }

    return (
        
        <View style={styles.container}>
            <Text style={styles.header}>To Do List</Text>
            <KeyboardAvoidingView
                // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.writeText}
             >
                <TextInput
                    style={styles.taskAdd}
                    placeholder='write a task'
                    value={task}
                    onChangeText={text => setTask(text)}
                />
                <TouchableOpacity onPress={() => handleAdd()}>
                    <View style={styles.plusContainer}>
                        <Text style={styles.plusIcon}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
            <View >
                {taskArray.map((item, index) => {
                    return (
                        <TouchableOpacity style={styles.container1} key={index} onPress={() => completeTask(index)}>
                            <Task key={index} text={item} />
                        </TouchableOpacity>
                    )
                })
                }
            </View>
           
        </View>
   
        
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        fontSize: 30,
        fontWeight: '900'
    },
    container1:{
        left: '-20%',
    },
    whole:{
        flex: 1,
        // position: 'relative',
    }, 
    bottomStick: {
        // position: 'relative',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    container: {
        // flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        // position: 'relative',
        backgroundColor: 'green',
        // justifyContent: 'space-between',

    },
    writeText: {
        flexDirection: 'row',
        // position: 'absolute',
        bottom: 0,
        marginTop: 20,
        marginBottom: 30,
    },
    taskAdd: {
        backgroundColor: 'wheat',
        borderRadius: 60,
        width: '80%',
    },
    plusIcon: {
        color: 'white',
        fontSize: 30,
    },
    plusContainer: {
        flexDirection: 'row',
        backgroundColor: 'blue',
        height: 50,
        width: 50,
        justifyContent: 'center',
        borderRadius: 30,
    }
})