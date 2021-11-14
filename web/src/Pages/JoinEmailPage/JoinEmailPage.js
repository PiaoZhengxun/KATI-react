import React from 'react'
import { Form, FormGroup, Label, Input, Button, FormText } from 'reactstrap';
function JoinEmailPage() {
    return (
     
<div style={{width: '50%', margin: '30px auto'}}>
<div style={{display:'flex', flexDirection: "column",
      alignItems: "center",justifyContent: "center",fontSize:'1.5rem',fontWeight:"600",margin:'20px'}}>
      <div style={{marginBottom:'30px'}}>회원가입</div>
    
      <div style={{fontSize:"0.8rem", marginLeft:"1.2rem"}}>회원가입을 위해 필요한 정보들을 입력해 주세요.</div>
      <hr width="120%"/>
     
     </div>
            <Form>
        <FormGroup>
          <Label for="exampleEmail">이메일</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="이메일을 입력하세요" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">비밀번호</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="비밀번호를 입력하세요" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">비밀번호 확인</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="비밀번호를 확인하세요" />
        </FormGroup>

        <FormGroup>
          <Label for="exampleEmail">이름</Label>
          <Input type="text" name="email" id="exampleEmail" placeholder="카티에서 사용 할 이름을 입력하세요" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">주소</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="주소를 입력하세요" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">생년월일</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="1997-08-01" />
        </FormGroup>



        <Button>완료</Button>
      </Form>
        </div>
    )
}

export default JoinEmailPage
