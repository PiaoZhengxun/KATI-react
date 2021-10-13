import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

function JoinPage() {
  return (
    <Form>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="email@email.com"
        />
      </FormGroup>
    </Form>
  );
}

export default JoinPage;
