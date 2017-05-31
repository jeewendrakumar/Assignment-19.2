import expect from "expect";
import React from "react";
import RelayMock from "../util/RelayMock";
import BookDrawerInjector from "inject!app/js/components/BookDrawer";
import {shallow} from "enzyme";

const BookDrawer = BookDrawerInjector({"react-relay": RelayMock}).default;

let component;

describe("<BookDrawer />", () => {
    it("Component should rendered as div", () => {
        console.log("Component Render Tests");
    });
    beforeEach(() => {
        const props = {
            index: 1,
            BookDrawer: {
                id: "1",
                title: "Sample BookDrawer title"
            }
        };
        component = shallow(<BookDrawer {...props}/>);
    });

    it("Component should rendered as div", () => {
        expect(component.type()).toBe("div");
    });

    it("Component should rendered as div with proper class", () => {
        expect(component.hasClass("book-drawer")).toBe(true);
    });

    it("Component's should contain input for book name", () => {
        expect(component.find("input").hasClass("form-control")).toBe(true);
    });

    // it("Component's should rendered with a button to close Drawer", () => {
    //     expect(component.find(".cancel").length).toBe(1);
    // });

    // it("Component's should rendered with a button to submit a Book", () => {
    //     expect(component.find(".submit").length).toBe(1);
    // });

    it("Component's button should submit a Book", () => {
        console.log("Mutation Test");
        const spy = expect.createSpy();
        component.setProps({handleSubmit: spy});
        component.find(".submit").simulate("click");
        expect(spy.calls.length).toBe(0);
        spy.restore();
    });

});
