import {render, screen, cleanup} from '@testing-library/react';
// import Sidebar from '../Admindashboard/sidebarT';
import Doclist from '../Admindashboard/doctorlistT'
import PatList from '../Admindashboard/patientlistT'
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";

afterEach(() => {
    cleanup();
})



 test('should render Admin Doctor List ', () => { 
    render(< Doclist/>);
    var SB = screen.getByTestId("test1");
    expect(SB).toBeInTheDocument();
})

test('should render Admin patient List', () => { 
    render(< PatList/>);
    var SB = screen.getByTestId("tet1");
    expect(SB).toBeInTheDocument();
})


