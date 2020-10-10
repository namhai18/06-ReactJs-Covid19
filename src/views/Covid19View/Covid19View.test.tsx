import React from 'react';
import Covid19View from './Covid19View';
import { render, fireEvent, screen } from '../../test/test-utils';

const props: any = {
    infectedList: []
};

describe("Covid19View Component", () => {

    let container: any;
    let wrapper: any;

    beforeEach(() => {
        container = render(<Covid19View {...props} />);

        // container.setProps({
        //     defaultValue: listEmail
        // });

        // console.log(container.children().first().state());
    });
    // it("Covid19View init", () => {
    //     expect(screen.getByText('Total infected confirm : N/A')).toBeInTheDocument()
    // })
});

it('If not log in renders component Covid19View but not have permission', () => {
    render(<Covid19View />, { initialState: { infectedList: [] } })
    expect(screen.getByText('Error 404 : Permission deny')).toBeInTheDocument()
})
