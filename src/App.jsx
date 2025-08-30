import CounterApp from "./CounterApp";
import LoginForm from "./LoginForm";
import TodoApp from "./TodoApp";

export default function App() {
  return (
    <div>
      <h1>RTL</h1>

      <section style={{ border: "1px solid gray", padding: "1rem", margin: "1rem 0" }}>
        <CounterApp />
      </section>

      <section style={{ border: "1px solid gray", padding: "1rem", margin: "1rem 0" }}>
        <LoginForm />
      </section>

      <section style={{ border: "1px solid gray", padding: "1rem", margin: "1rem 0" }}>
        <TodoApp />
      </section>
    </div>
  );
}
