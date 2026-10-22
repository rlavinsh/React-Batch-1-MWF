import TodoItem from "./TodoItem";

function TodoList({ todos }) {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Your Tasks</h2>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600">
          {todos.length} Tasks
        </span>
      </div>

      <div className="space-y-3">
        {todos.map((data, idx) => {
          return (
            <TodoItem key={idx} title={data.title} description={data.des} />
          );
        })}
      </div>
    </div>
  );
}

export default TodoList;
