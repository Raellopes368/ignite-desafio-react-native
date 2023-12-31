import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    setTasks(prev => [...prev, { title:  newTaskTitle, done: false, id: tasks.length + 1}])
  }

  function handleToggleTaskDone(id: number) {
    const allTasks = [...tasks];
		const task = allTasks.find(item => item.id === id);
		if(task) task.done = !task.done;
		setTasks(allTasks) 
  }

  function handleRemoveTask(id: number) {
    setTasks(prev => prev.filter(item => item.id !== id))
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})