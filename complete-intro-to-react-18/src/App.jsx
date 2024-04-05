import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Details from './Details';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRoot } from 'react-dom/client';
import SearchParams from './SearchParams';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

// const App = () => {
//   return React.createElement(
//     'div', // type of element
//     {}, // attributes (id, class, etc.)/props
//     [
//       React.createElement('h1', {}, 'Adopt Me!'),
//       React.createElement(Pet, { name: 'Luna', animal: 'Dog', breed: 'Havanese' }),
//       React.createElement(Pet, { name: 'Pepper', animal: 'Bird', breed: 'Cockatiel' }),
//       React.createElement(Pet, { name: 'Doink', animal: 'Cat', breed: 'Mixed' }),
//     ], // children
//   );
// };

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <Link to="/"> Adopt Me! </Link>
        </header>

        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
