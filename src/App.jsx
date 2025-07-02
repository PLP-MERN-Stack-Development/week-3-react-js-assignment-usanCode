
import React, { useState } from 'react';
import Button from './components/Button';
import Card from './components/card';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TaskManager from './components/TaskManager';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col bg-blue-100">
      <Navbar />

      
      <main className="flex-1 flex justify-center items-start py-6 px-2">
        <div
          className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-3xl shadow-2xl border-4 border-blue-900 p-8"
          style={{ width: 500, minHeight: 600 }}
          >

          <Card>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-3xl font-bold mb-4">PLP Task Manager</h1>
              <p className="text-lg mb-4">
                Edit <code className="font-mono bg-gray-200 dark:bg-gray-700 p-1 rounded">src/App.jsx</code> and save to test HMR
              </p>
              <div className="flex items-center gap-8 my-8">
          <Button
            variant="danger"
            className="px-8 py-4 text-2xl rounded-2xl"
            onClick={() => setCount((count) => count - 1)}
              >
              -
          </Button>
          <span className="text-2xl font-bold">{count}</span>
          <Button
            variant="success"
            className="px-8 py-4 text-2xl rounded-2xl"
            onClick={() => setCount((count) => count + 1)}
          >
            +
          </Button>
        </div>
              <p className="text-gray-500 dark:text-gray-400 mt-4">
                Implement your TaskManager component here
              </p>
            </div>
          </Card>

          <Card>
            <TaskManager />
          </Card>

          <Card className="mt-8">
            <h2 className="text-2xl font-bold mb-4">API Data</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Fetch and display data from an API here
            </p>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;