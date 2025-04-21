import axios from "axios";

export const getTodos = async () => {
    try {
        const response = await axios.get("/api/todos");
        return response.data;

    } catch (error) {
        console.error("Error fetching todos:", error);
        return error
    }
};

export const getSingleTodo = async (id: string) => {
    try {
        const response = await axios.get(`/api/todos/${id}`);
        return response.data;

    } catch (error) {
        console.error("Error fetching todo:", error);
        return error
    }
}

export const createTodo = async ({ title, isCompleted }: { title: string, isCompleted: boolean }) => {
    try {
        const response = await axios.post("/api/todos", { title, isCompleted });
        return response.data;
    } catch (error) {
        console.error("Error creating todo:", error);
        return error
    }
};


export const updateTodo = async (id: string, title?: string, isCompleted?: boolean) => {
    try {
        const response = await axios.put(`/api/todos/${id}`, { title, isCompleted });
        return response.data;
    } catch (error) {
        console.error("Error updating todo:", error);
        return error
    }
};


export const deleteTodo = async (id: string) => {
    try {
        const response = await axios.delete(`/api/todos/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting todo:", error);
        return error
    }
};
