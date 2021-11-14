import React from 'react'
import { Form, FormGroup, Label, Input, Button, FormText } from 'reactstrap';
function FindPwPage() {
    return (
        <div style={{width: '50%', margin: '30px auto'}}>
        <div style={{display:'flex', flexDirection: "column",
              alignItems: "center",justifyContent: "center",fontSize:'1.5rem',margin:'20px'}}>
              <div style={{marginBottom:'20px'}}>비밀번호 찾기</div>
              <hr width="120%"/>
             
        </div>
        <Form>
        <FormGroup>
          <Label for="exampleEmail">이메일</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="가입한 이메일을 입력하세요" />
        </FormGroup>

        <Button>완료</Button>
      </Form>
     
        </div>
    )
}

export default FindPwPage
