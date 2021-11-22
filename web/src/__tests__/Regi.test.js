import React from "react";
import axios from "axios";

import { shallow } from "enzyme";
import { mount } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { render, fireEvent } from "@testing-library/react";

import LoginPage from "../Pages/LoginPage/LoginPage";

import MockAdapter from "axios-mock-adapter";

// 다시
