import reactLogo from "./assets/react.svg";
import fastapiLogo from "./assets/fastapi.svg";
import { Button } from "@/components/ui/button";

function App() {
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
