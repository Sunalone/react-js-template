import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: [],
    title: "Hello World",
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, { payload }) => {
            const newTodo = {
                text: payload.text,
                id: new Date().getTime(),
            };

            return {
                ...state,
                todoList: [...state.todoList, newTodo],
            };
        },
        deleteTodo: (state, { payload }) => {
            return {
                ...state,
                todoList: state.todoList.filter((item) => item.id !== payload.id),
            };
        },
    },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
