import React from "react";
import axios from "axios";

import { shallow } from "enzyme";
import { mount } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { render, screen, fireEvent, getByTestId } from "@testing-library/react";

import LoginPage from "../Pages/LoginPage/LoginPage";

import MockAdapter from "axios-mock-adapter";
import "@testing-library/jest-dom/extend-expect";

it("test LoginPage", async () => {
  const url = "/login";
  render(<LoginPage />);
  const email = screen.getByLabelText("Email");
  const password = screen.getByLabelText("Password");
});

// describe("<LoginPage/>", () => {
//   const mock = new MockAdapter(axios, { delayResponse: 2000 });
//   mock
//     .onPost(
//       "http://3.38.97.234:8000/core-service/login",
//       { email: "cksgh3422@nate.com", password: "1234568" },
//       {
//         headers: {
//           "Content-Type": "Application/json",
//         },
//       }
//     )
//     .reply(200);
// });

//=-------------------------------------------------------------
//=--------------------------NEW--------------------------------
//=-------------------------------------------------------------

//=-------------------------------------------------------------
//=--------------------------NEW--------------------------------
//=-------------------------------------------------------------

// const { getByText, getByLabelText } = render(
//   <BrowserRouter>
//     <LoginPage />
//   </BrowserRouter>
// );

// const button = getByText("로그인");
// const email = getByLabelText("이메일");

// configure({ adapter: new Adapter() });

// describe("<LoginPage/>", () => {
//   let wrapper;
//   let email;

//   test("email check", () => {
//     wrapper = shallow(<LoginPage />);
//     email = wrapper.find('Input[type="email"]');
//     email.simulate("change", {
//       target: { name: "email", value: "cksgh3422@nate.com" },
//     });
//     // wrapper.find('Input[type="email"]').simulate("setEmail", {
//     //   target: { name: "email", value: "cksgh3422@nate.com" },
//     // });

//     // fireEvent.change(email, { target: { value: "cksgh3422@nate.com" } });

//     expect(email.value).toBe("cksgh3422@nate.com");
//   });
// });

//=-------------------------------------------------------------
//=--------------------------NEW--------------------------------
//=-------------------------------------------------------------

//=-------------------------------------------------------------
//=--------------------------NEW--------------------------------
//=-------------------------------------------------------------

//=-------------------------------------------------------------
//=--------------------------NEW--------------------------------
//=-------------------------------------------------------------

//=-------------------------------------------------------------
//=--------------------------NEW--------------------------------
//=-------------------------------------------------------------

//=-------------------------------------------------------------
//=--------------------------NEW--------------------------------
//=-------------------------------------------------------------

// configure({ adapter: new Adapter() });

// describe("LoginPage Test", () => {
//   let wrapper;

//   test("email check", () => {
//     wrapper = shallow(<LoginPage />);
//     wrapper.find('Input[type="email"]').simulate("setEmail", {
//       target: { name: "email", value: "cksgh3422@nate.com" },
//     });
//     expect(wrapper.state("email")).toEqual("cksgh3422@nate.com");
//   });

//   it("password check", () => {
//     wrapper = shallow(<LoginPage />);
//     wrapper.find('Input[type="password"]').simulate("setPassword", {
//       target: {
//         name: "password",
//         value: "1234568",
//       },
//     });
//     expect(wrapper.state("password")).toEqual("1234568");
//   });

//   it("login check with mock email", () => {
//     wrapper = shallow(<LoginPage />);
//     wrapper.find('Input[type="email"]').simulate("setEmail", {
//       target: { name: "email", value: "cksgh3422@nate.com" },
//     });
//     wrapper.find('Input[type="password"]').simulate("setPassword", {
//       target: {
//         name: "password",
//         value: "1234568",
//       },
//     });
//     wrapper.find("button").simulate("click");

//     expect(wrapper.state("okLogin")).toBe(true);
//   });
// });

//=-------------------------------------------------------------
//=--------------------------NEW--------------------------------
//=-------------------------------------------------------------
//=-------------------------------------------------------------
//=--------------------------NEW--------------------------------
//=-------------------------------------------------------------
//=-------------------------------------------------------------
//=--------------------------NEW--------------------------------
//=-------------------------------------------------------------
//=-------------------------------------------------------------
//=--------------------------NEW--------------------------------
//=-------------------------------------------------------------

// describe('<LoginPage>', () => {
//   it('check Login Page', () => {
//     const email = 'cksgh3422@nate.com';
//     const password = '1234568';
//     const wrapper = shallow(<LoginPage login)
//   })
// })

//=-------------------------------------------------------------
//=-------------------------------------------------------------
//=-------------------------NNNEEW------------------------------
//=-------------------------------------------------------------
//=-------------------------------------------------------------
// function setLoginEmail() {
//   return {
//     email: "cksgh3422@nate.com",
//     password: "1234568",
//   };
// }

// test("user Email Login Test", () => {
//   expect(setLoginEmail().toBe(200));
// });
//=-------------------------------------------------------------

// describe("<LoginPage />", () => {
//   it("renders Email", () => {
//     const onSubmitMock = jest.fn();

//     const { getByText, getByLabelText } = render(
//       <BrowserRouter>
//         <LoginPage />
//       </BrowserRouter>
//     );

//     const button = getByText("로그인");
//     const email = getByLabelText("이메일");
//     const password = getByLabelText("비밀번호");

//     fireEvent.change(email, { target: { value: "cksgh3422@nate.com" } });
//     fireEvent.change(password, { target: { value: "1234568" } });

//     fireEvent.click(button);

//     expect(onSubmitMock).toBeCalled();
//   });
// });
//=-------------------------------------------------------------
// jest.mock("axios");
//=-------------------------------------------------------------
//=-------------------------------------------------------------
//=-------------------------------------------------------------
//=--------------------------NEW--------------------------------
