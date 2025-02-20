import { useSelector } from 'react-redux';
import Container from './components/Container/Container';
import EditForm from './components/EditForm/EditForm';
import Filter from './components/Filter/Filter';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Text from './components/Text/Text';
import TodoList from './components/TodoList/TodoList';

export const App = () => {
  const todos = useSelector(state => state.todo.items);
  const currentTodo = useSelector(state => state.todo.currentTodo);

  return (
    <>
      <Header />
      <Section>
        <Container>
          {currentTodo ? <EditForm /> : <Form />}

          {todos.length > 0 ? (
            <>
              <Filter />
              <TodoList />
            </>
          ) : (
            <Text textAlign="center">Create your first todo😉</Text>
          )}
        </Container>
      </Section>
    </>
  );
};
