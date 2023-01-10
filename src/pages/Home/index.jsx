import React, { useState } from "react";
import Layout from '../../components/Layout/index'

const Index = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //1.ci variant
    // let tempList = todoList;
    // tempList.push(todo);
    // setTodoList(tempList);
    // setTodo("");
    // console.log(todoList);

    //2.ci variant(qisa yol)
    setTodoList([...todoList, todo]);
    setTodo("");
    console.log("todoList", todoList);
  };
  const deleteTodo = (indexTodo) => {
    setTodoList(todoList.filter((todo, index) => index !== indexTodo));
    console.log(todoList);
  };
  const editTodo = (editedTodo, editedTodoIndex) => {
    setTodo(editedTodo);
    const filteredItems = todoList.filter(
      (item, index) => index !== editedTodoIndex
    );
    setTodoList(filteredItems);
  };
  return (
    <>
    <Layout/>
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-6 gap-4 mt-5">
        <div className="col-start-2 col-span-4">
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Add
            </label>
            <div className="relative">
              <input
                value={todo}
                onChange={handleChange}
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Add todo..."
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add
              </button>
            </div>
          </form>

          {todoList.length ? (
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th className="px-6 py-3">Product name</th>

                    <th className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {todoList.map((todo, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {todo}
                      </th>

                      <td className="px-6 py-4">
                        <span
                          onClick={() => editTodo(todo, index)}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </span>
                        <span
                          onClick={() => deleteTodo(index)}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-2"
                        >
                          Delete
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="flex justify-center mt-5">
              Your todolist is empty.Add a new todo!
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default Index;
