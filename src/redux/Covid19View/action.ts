import * as ActionType from './type';
import Axios from 'axios';

export function actGetAllCovidSummary(): any {
    return async (dispatch: any) => {
        let infectedList: any;
        debugger;
        await Axios({
            method: 'GET',
            url: 'https://api.covid19api.com/summary',
            headers: { 'X-Access-Token': localStorage.getItem('key') },
            // data: {
            //     objTeam: recordItem, // This is the body part
            // }
            // params
            // params: { projectId: projectId },
        }).then((rs) => {
            debugger;
            infectedList = rs.data.Countries;
        });

        dispatch({
            type: ActionType.GET_ALL_COVID_SUMMARY,
            data: infectedList,
        });
    }
}

export function actGetLogin(): any {
    return async (dispatch: any) => {

        await Axios({
            method: 'POST',
            url: 'https://api.covid19api.com/auth/access_token',
            headers: {
                'Authorization': 'Basic Z28tY29yb25hLWFkbWluOjU1NzdZdnpVNGJLNjNhMVdJUTNaMDQzSA==',
                'Content-Type': 'application/json'
            },
            data: {
                Email: 'test1@covid19api.com',
                Subscription: 'basic' // This is the body part
            },
        }).then((rs) => {

            localStorage.setItem('key', JSON.stringify(rs.data.Key));
            console.log(rs.data.Key);
        });

        dispatch({
            type: ActionType.GET_ALL_COVID_SUMMARY,
            data: '',
        });
    }
}