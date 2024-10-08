import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../api/axios';

// Fetch work boards
export const fetchWorkBoards = createAsyncThunk(
  'workBoards/fetchWorkBoards',
  async () => {
    const response = await instance.get('boards/workboards/');  // Corrected URL
    return response.data;
  } 
);
   

// Create a new work board
export const createWorkBoard = createAsyncThunk(
  'workBoards/createWorkBoard',
  async (workBoardData) => {
    const response = await instance.post('boards/workboards/', workBoardData);  // Corrected URL
    return response.data;
  }
);

// Update a task
export const updateTask = createAsyncThunk(
  'workBoards/updateTask',
  async ({ taskId, taskData }) => {
    const response = await instance.patch(`boards/tasks/${taskId}/`, taskData);  // Used backticks for template literal
    return response.data;
  }
);

// Fetch users
export const fetchUsers = createAsyncThunk(
  'workboard/fetchUsers',
  async () => {
    const response = await instance.get('boards/users/');  // Corrected URL
    return response.data;
  }
);

const workBoardsSlice = createSlice({
  name: 'workBoards',
  initialState: {
    boards: [],
    users: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkBoards.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWorkBoards.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.boards = action.payload;
      })
      .addCase(fetchWorkBoards.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createWorkBoard.fulfilled, (state, action) => {
        state.boards.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const updatedTask = action.payload;
        const board = state.boards.find(b => b.id === updatedTask.work_board);
        if (board) {
          const taskIndex = board.tasks.findIndex(t => t.id === updatedTask.id);
          if (taskIndex !== -1) {
            board.tasks[taskIndex] = updatedTask;
          }
        }
      })
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default workBoardsSlice.reducer;
