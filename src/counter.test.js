import Counter from './counter';
import { shallow, mount } from 'enzyme';


// test("Render Counter component", () => {
//   const wrapper = shallow(<Counter/>);
//   //console.log(wrapper.debug());
//   expect(wrapper.find("Counter").length).toEqual(1);
// });


describe("Render Counter component", () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = mount(<Counter></Counter>);
  });

  test("Next button working for Counter", () => {
    const wrapper1 = shallow(<Counter></Counter>);
    //console.log(wrapper.debug());
    wrapper1.find("input").at(1).simulate("click"); //click next button
    expect(wrapper1.find(".counter").text()).toEqual("1");
  });


  test("Previous button working for Counter", () => {
    //const wrapper = mount(<Counter></Counter>);
    // console.log(wrapper.debug());
    wrapper.find("input").at(1).simulate("click"); //click next button
    wrapper.find("input").at(1).simulate("click"); //click next button
    wrapper.find("input").at(0).simulate("click"); //click previous button
    expect(wrapper.find(".counter").text()).toEqual("1");
  });


  test("Previous buttons should not be less than zero", () => {
    //const wrapper = mount(<Counter></Counter>);
    // console.log(wrapper.debug());
    wrapper.find("input").at(0).simulate("click"); //click previous button
    wrapper.find("input").at(0).simulate("click"); //click previous button
    expect(wrapper.find(".counter").text()).toEqual("0");
  });
});

