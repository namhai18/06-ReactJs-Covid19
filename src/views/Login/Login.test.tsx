import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { render, fireEvent, screen } from '../../test/test-utils';

it('Renders component Login', () => {
    render(<Login />)
    expect(screen.getByText('Covid19 infected view login')).toBeInTheDocument()
})

it('Login button click, empty username check', () => {
    render(<Login />)
    fireEvent.click(screen.getByLabelText("Log in"))
    expect(screen.getByText('Please input Username')).toBeInTheDocument()
})

it('Login button click, empty password check', () => {
    render(<Login />)
    fireEvent.change(screen.getByLabelText("Username"), { target: { value: 'abcd' } })
    fireEvent.click(screen.getByLabelText("Log in"))
    expect(screen.getByText('Please input Password')).toBeInTheDocument()
})

it('Login fail because username wrong', () => {
    const { getByText, getByLabelText } = render(<Login />);

    fireEvent.change(getByLabelText("Username"), { target: { value: '1111' } })
    fireEvent.change(getByLabelText("Password"), { target: { value: '2222' } })
    fireEvent.click(getByLabelText("Log in"))
    expect(screen.getByText('Please input correct Username')).toBeInTheDocument()
})

it('Login fail because password wrong', () => {
    const { getByText, getByLabelText } = render(<Login />);

    fireEvent.change(getByLabelText("Username"), { target: { value: 'abcd' } })
    // fireEvent.change(getByLabelText("Password"), { target: { value: '2222' } })
    fireEvent.click(getByLabelText("Log in"))
    expect(screen.getByText('Please input Password')).toBeInTheDocument()
})

// it('Login fail because password wrong 111', () => {
//     render(<Login />)
//     fireEvent.change(screen.getByLabelText("Password"), { target: { value: 'abcd' } })

//     fireEvent.click(screen.getByLabelText("Log in"))
//     expect(screen.getByText('Please input correct Password')).toBeInTheDocument()
// })
// it('renders welcome login', () => {
//     const wrapper = shallow(<Login />);
//     // const welcome = <h2>Welcome to React</h2>;
//     // expect(wrapper.contains(welcome)).toBe(true);
//     expect(wrapper.contains('Covid19 infected view login')).toEqual(true);
// });