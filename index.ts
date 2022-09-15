import axios from 'axios';
import * as https from 'https';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const call = async () => {
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });

  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/todos/1',
    {
      httpsAgent,
    }
  );

  const todo = data as Todo;

  const id = todo.id;
  const title = todo.title;
  const finished = todo.completed;

  const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
  The todo with ID: ${id}
  Has a title of: ${title}
  Is it finished: ${finished}
  `);
  };

  logTodo(id, title, finished);
};

call();
