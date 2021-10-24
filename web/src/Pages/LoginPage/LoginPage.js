import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

function LoginPage() {
  return (
    <div style={{width:'100%',height:'100%',backgroundColor:'white'}}>
      <div>
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
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="PASSWORD"
            />
          </FormGroup>
          <Button>Login</Button>
        </Form>
      </div>
      <div>
        <a href="http://3.38.97.234:8000/core-service/oauth2/authorization/kakao">
          <img src="../../src/Images/kakaoLogin.PNG" alt="카카오" width="55" />
        </a>
        <a href="http://3.38.97.234:8000/core-service/oauth2/authorization/naver">
          <img src="../../src/Images/naverLogin.PNG" alt="네이버" width="55" />
        </a>
      </div>
    </div>
  );
}

export default LoginPage;
