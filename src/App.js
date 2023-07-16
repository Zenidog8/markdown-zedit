import React from 'react';
import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';

import MarkdownEditor from './components/mardown-editor';

const App = () => {
  return (
    <Container className="p-3">
      <h1>Markdown zEDIT</h1>
      <MarkdownEditor/>
    </Container>
  );
};

export default App;
