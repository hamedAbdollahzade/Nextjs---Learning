import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Example from "./components/Example";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Example />
      </QueryClientProvider>
    </>
  );
}

export default App;
