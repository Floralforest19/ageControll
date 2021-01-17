import React from 'react';
import { mount } from "enzyme";
import App from './App';
import UserContext from "./context/AgeContextProvider";
import AgeContextProvider from './context/AgeContextProvider';


describe("Test App", () => {

  it("renders correctly", () => {
const wrapper = mount(
  <AgeContextProvider><App/></AgeContextProvider>
)
  })

  it("renders correct message when age is 15", ()=>{
    const wrapper = mount(
      <AgeContextProvider><App/></AgeContextProvider>
    )
    wrapper.find("input").simulate("change",{raget:{value:"15"}})
    expect(wrapper.find(".message").text()).toContain("")

  })

it("renders correct message when age is 16", () => {
  const wrapper = mount(
    <AgeContextProvider><App /></AgeContextProvider>
  )
  wrapper.find("input").simulate("change", { raget: { value: "16" } })
  expect(wrapper.find('.message').text()).toContain("You may")
})

it("renders correct message when age is 17", () => {
  const wrapper = mount(
    <AgeContextProvider><App /></AgeContextProvider>
  )
  wrapper.find("input").simulate("change", { raget: { value: "17" } })
  expect(wrapper.find('.message').text()).toContain("You may")
})
})