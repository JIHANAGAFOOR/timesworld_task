import React from "react";
import { Form } from "react-bootstrap";

type TextInputProps = {
  type: string;
  state: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name: string;
};

const TextInput: React.FC<TextInputProps> = ({
  type,
  state,
  onChange,
  placeholder,
  name,
}) => {
  return (
    <Form.Group className="mb-3" controlId={name}>
      <Form.Control
        type={type}
        placeholder={placeholder}
        name={name}
        value={state}
        onChange={onChange}
        className="rounded-0"
        style={{ border: "2px solid black" }}
        required
      />
    </Form.Group>
  );
};

export default TextInput;
