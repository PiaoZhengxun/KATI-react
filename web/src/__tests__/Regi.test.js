import React from "react";
import axios from "axios";

import { shallow } from "enzyme";
import { mount } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { render, fireEvent } from "@testing-library/react";

import LoginPage from "../Pages/LoginPage/LoginPage";

import MockAdapter from "axios-mock-adapter";

configure({ adapter: new Adapter() });

describe("LoginPage Test", () => {
  let wrapper;

  test("email check", () => {
    wrapper = shallow(<LoginPage />);
    wrapper.find('Input[type="email"]').simulate("setEmail", {
      target: { name: "email", value: "cksgh3422@nate.com" },
    });
    expect(wrapper.state("email")).toEqual("cksgh3422@nate.com");
  });

  it("password check", () => {
    wrapper = shallow(<LoginPage />);
    wrapper.find('Input[type="password"]').simulate("setPassword", {
      target: {
        name: "password",
        value: "1234568",
      },
    });
    expect(wrapper.state("password")).toEqual("1234568");
  });

  it("login check with mock email", () => {
    wrapper = shallow(<LoginPage />);
    wrapper.find('Input[type="email"]').simulate("setEmail", {
      target: { name: "email", value: "cksgh3422@nate.com" },
    });
    wrapper.find('Input[type="password"]').simulate("setPassword", {
      target: {
        name: "password",
        value: "1234568",
      },
    });
    wrapper.find("button").simulate("click");

    expect(wrapper.state("okLogin")).toBe(true);
  });
});
