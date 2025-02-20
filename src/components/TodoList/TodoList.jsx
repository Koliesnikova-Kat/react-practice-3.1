import { useSelector } from 'react-redux';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import Text from '../Text/Text';
import Todo from '../Todo/Todo';

const TodoList = () => {
  const todos = useSelector(state => state.todo.items);
  const filter = useSelector(state => state.filter.name.toLowerCase());

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(filter),
  );

  return (
    <>
      {filteredTodos.length > 0 ? (
        <Grid>
          {filteredTodos.map((todo, index) => (
            <GridItem key={todo.id}>
              <Todo
                text={todo.text}
                todoNumber={index + 1}
                id={todo.id}
                todo={todo}
              />
            </GridItem>
          ))}
        </Grid>
      ) : (
        <Text textAlign="center">We did not find any todo😯</Text>
      )}
    </>
  );
};

export default TodoList;
