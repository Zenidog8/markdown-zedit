import React, { useState } from 'react';
import { marked } from 'marked';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    const getRenderedMarkdown = () => {
        return { __html: marked(markdown) };
    };

    return (
        <Container>

            <Row className="mb-3 p-3">
                <InputGroup as={Col}>
                    <Form.Control
                        as="textarea"
                        aria-label="Markdown textarea"
                        style={{"min-height": "100%"}}
                        value={markdown}
                        onChange={handleMarkdownChange}
                        placeholder="Enter Markdown"
                        rows={30}
                    />
                </InputGroup>
                <InputGroup as={Col}>
                    <Container fluid dangerouslySetInnerHTML={getRenderedMarkdown()} />
                </InputGroup>
            </Row>

        </Container>

    );
};

export default MarkdownEditor;
