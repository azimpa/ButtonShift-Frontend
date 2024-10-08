import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createWorkBoard, fetchUsers } from '../store/workBoardsSlice';
import NavBar from './NavBar';
import { PlusIcon, XIcon } from 'lucide-react';

const CreateWorkBoard = () => {
  const [boardName, setBoardName] = useState('');
  const [boardDescription, setBoardDescription] = useState('');
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [newTaskAssignees, setNewTaskAssignees] = useState('');
  const [newTaskStatus, setNewTaskStatus] = useState('todo');
  const [showTaskFields, setShowTaskFields] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector(state => state.workBoards.users);

  useEffect(() => {
    dispatch(fetchUsers()); // Fetch users when the component loads
  }, [dispatch]);

  const addTask = () => {
    if (newTaskTitle.trim()) {
      setTasks([...tasks, {
        title: newTaskTitle.trim(),
        description: newTaskDescription.trim(),
        assignees: newTaskAssignees ? newTaskAssignees.trim().split(',').map(assignee => assignee.trim()) : [],
        status: newTaskStatus,
      }]);
      setNewTaskTitle('');
      setNewTaskDescription('');
      setNewTaskAssignees('');
      setNewTaskStatus('todo'); // Reset the status dropdown
      setShowTaskFields(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const workBoardData = {
      title: boardName,
      description: boardDescription,
      tasks: tasks,
    };
    try {
      console.log(workBoardData);
      await dispatch(createWorkBoard(workBoardData)).unwrap();
      setBoardName('');
      setBoardDescription('');
      setTasks([]);
    } catch (error) {
      console.error('Failed to create work board:', error);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-100">
      <NavBar title="Create a Workboard" />
      <div className="flex-1 flex items-start justify-center p-6 pt-16">
        <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Create New Work Board</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="boardName" className="block text-sm font-medium text-gray-800 mb-1">Board Name</label>
              <input
                id="boardName"
                type="text"
                placeholder="Enter board name"
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
                value={boardName}
                onChange={(e) => setBoardName(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="boardDescription" className="block text-sm font-medium text-gray-800 mb-1">Board Description</label>
              <textarea
                id="boardDescription"
                placeholder="Enter board description"
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
                rows="3"
                value={boardDescription}
                onChange={(e) => setBoardDescription(e.target.value)}
              />
            </div>

            <div className="border border-gray-300 rounded-md p-4 bg-gray-50">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Tasks</h3>
              {!showTaskFields ? (
                <button
                  type="button"
                  className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  onClick={() => setShowTaskFields(true)}
                >
                  <PlusIcon size={20} />
                  <span className="ml-2">Add a Task</span>
                </button>
              ) : (
                <div className="space-y-4 bg-white p-4 rounded-md shadow-sm">
                  <input
                    type="text"
                    placeholder="Task Title"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                  />
                  <textarea
                    placeholder="Task Description (Optional)"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    rows="2"
                    value={newTaskDescription}
                    onChange={(e) => setNewTaskDescription(e.target.value)}
                  />
                  {/* User assignment dropdown */}
                  <select
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={newTaskAssignees}
                    onChange={(e) => setNewTaskAssignees(e.target.value)}
                  >
                    <option value="">Assign Task</option>
                    {users && users.map((user) => (
                      <option key={user.id} value={user.username}>
                        {user.username}
                      </option>
                    ))}
                  </select>
                  <div className="flex justify-between items-center">
                    <select
                      value={newTaskStatus}
                      onChange={(e) => setNewTaskStatus(e.target.value)} // Set the task status
                      className="p-2 border border-gray-300 rounded-md  bg-gray-600"
                    >
                      <option value="todo">To-Do</option>
                      <option value="in_progress">In Progress</option>
                      <option value="completed">Done</option>
                    </select>
                    <button
                      type="button"
                      onClick={addTask}
                      className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
                    >
                      Add Task
                    </button>
                  </div>
                </div>
              )}
            </div>

            {tasks.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-900">Added Tasks</h3>
                {tasks.map((task, index) => (
                  <div key={index} className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
                    <div>
                      <p className="font-medium text-gray-900">{task.title}</p>
                      <p className="text-sm text-gray-700">{task.status}</p>
                    </div>
                    <button className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
                      Edit
                    </button>
                  </div>
                ))}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gray-600 text-white py-3 rounded-md hover:bg-gray-700 transition-colors duration-200 font-medium"
            >
              Create Work Board
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateWorkBoard;
