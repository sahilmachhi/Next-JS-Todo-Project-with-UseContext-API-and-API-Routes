import AddTodoButton from "@/components/AddTodoButton";
import TodoList from "@/components/TodoList";


export default function Home() {

  return (
    <>
      <div className='container mx-auto w-full px-8'>
        <div className="my-12">
          <div className="flex flex-col items-center justify-center gap-8">
            <TodoList />
            <AddTodoButton />
          </div>
        </div>
      </div>
    </>
  );
}
