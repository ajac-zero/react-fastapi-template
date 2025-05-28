import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import fastapiLogo from "./assets/fastapi.svg";
import { Button } from "@/components/ui/button";

function App() {
  const [counter, setCounter] = useState<number | null>(null);

  // Fetch the current counter value
  const fetchCounter = async () => {
    try {
      const response = await fetch("/api/counter");
      const data = await response.json();
      setCounter(data.counter);
    } catch (error) {
      console.error("Failed to fetch counter:", error);
    }
  };

  // Increment the counter
  const incrementCounter = async () => {
    try {
      await fetch("/api/counter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: 1 }),
      });
      // Fetch the updated counter value
      await fetchCounter();
    } catch (error) {
      console.error("Failed to increment counter:", error);
    }
  };

  // Fetch counter on component mount
  useEffect(() => {
    fetchCounter();
  }, []);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto max-w-4xl">
        {/* Logo section */}
        <div className="flex justify-center items-center gap-8 mb-8">
          <a
            href="https://fastapi.tiangolo.com"
            target="_blank"
            className="hover:scale-110 transition-transform"
          >
            <img src={fastapiLogo} className="h-16 w-16" alt="FastAPI logo" />
          </a>
          <span className="text-4xl font-bold text-muted-foreground">+</span>
          <a
            href="https://react.dev"
            target="_blank"
            className="hover:scale-110 transition-transform"
          >
            <img
              src={reactLogo}
              className="h-16 w-16 animate-spin-slow"
              alt="React logo"
            />
          </a>
        </div>

        {/* Main content */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary/90 to-primary bg-clip-text text-transparent">
            React + FastAPI Template
          </h1>

          <p className="text-muted-foreground text-lg">
            A modern full-stack template featuring React for the frontend and
            FastAPI for the backend
          </p>

          {/* Counter section */}
          <div className="py-8">
            <div className="text-2xl font-semibold mb-4">
              Counter: <span className="text-primary">{counter ?? "..."}</span>
            </div>
            <Button variant="default" size="lg" onClick={incrementCounter}>
              Increment Counter
            </Button>
          </div>

          <div className="flex justify-center gap-4">
            <Button
              variant="default"
              size="lg"
              onClick={() => window.open("https://react.dev/learn", "_blank")}
            >
              Learn React
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                window.open("https://fastapi.tiangolo.com/tutorial/", "_blank")
              }
            >
              FastAPI Docs
            </Button>
          </div>

          <div className="mt-12 p-6 bg-card rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Quick Start</h2>
            <div className="text-left text-muted-foreground space-y-2">
              <p>1. Start the FastAPI backend:</p>
              <code className="block bg-muted p-2 rounded">
                cd backend && uvicorn main:app --reload
              </code>
              <p>2. Start the React frontend:</p>
              <code className="block bg-muted p-2 rounded">
                cd frontend && npm run dev
              </code>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <p>
            Edit <code className="text-primary">gui/App.tsx</code> and save to
            test HMR
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
