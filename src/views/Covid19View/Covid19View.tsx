import { Container, createStyles, FormControl, InputLabel, makeStyles, MenuItem, Select, Theme } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import * as action from "../../redux/Covid19View/action";

interface Props {
    getAllCovidSummary: Function;
    infectedList: any;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

// Region main function -->
function Covid19View(props: Props) {
    const classes = useStyles();

    // Region state -->
    const [country, setCountry] = React.useState('');
    const [infectedConfirm, setInfectedConfirm] = React.useState('N/A');
    const [deaths, setDeaths] = React.useState('N/A');
    // Region state <--

    // Region use -->
    useEffect(() => {
        if (localStorage.getItem('key')) {
            props.getAllCovidSummary();
        } else {
            // window.location.href = "/";
        }

        console.log('useEffect');
    },
        []
    )
    // Region use <--

    // Region action on screen -->
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setCountry(event.target.value as string);
        debugger;
        let indexCountry = props.infectedList.findIndex((item: any) => {
            return item.Country === event.target.value;
        });
        if (indexCountry !== -1) {
            setInfectedConfirm(props.infectedList[indexCountry].TotalConfirmed);
            setDeaths(props.infectedList[indexCountry].TotalDeaths);
        } else {
            setInfectedConfirm('N/A');
            setDeaths('N/A');
        }
    };

    const drawEmailTypeSelect = () => {

        if (props.infectedList && props.infectedList.length > 0) {
            return props.infectedList.map((v: any, index: any) => {
                // return <MenuItem key={v.id} value={v.id}>{'[' + v.emailTemplateNumber + '] ' + v.emailTemplateName}</MenuItem>
                return <MenuItem key={v.CountryCode} value={v.Country}>{v.Country}</MenuItem>
            });
        }
    }
    // Region action on screen <--

    // Region main-render html -->
    return (
        (localStorage.getItem('key')) ?
            <Container maxWidth="sm">
                <p></p>
                <p></p>
                <div>Covid19 infected count by country view.</div>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Country</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        name="type"
                        id="type"
                        label="Country"
                        value={country}
                        //   error={state.type_error}
                        required
                        //onBlur={(event) => validatorInput(event, "type")}
                        //onChange={(event) => validatorInput(event, "type")}
                        onChange={handleChange}
                    //   inputProps={{ readOnly: props.readOnly }}
                    //   className={props.className}
                    //   disabled={props.disabled}
                    >
                        <MenuItem value="   ">
                            <em>  </em>
                        </MenuItem>
                        {drawEmailTypeSelect()}
                    </Select>
                </FormControl>
                <p>Total infected confirm : {infectedConfirm}</p>
                <p>Total deaths : {deaths}</p>
            </Container> :
            <div><h3>Error 404 : Permission deny</h3></div>
    )
    // Region main-render html <--

}
// Region main function <--

// Region redux connect -->
const mapStateToProps = function (state: any) {
    return {
        infectedList: state.covid19ViewReducer.infectedList
    };
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        getAllCovidSummary: () => {
            dispatch(action.actGetAllCovidSummary());
        },
    }
}
// Region redux connect <--

export default connect(mapStateToProps, mapDispatchToProps)(Covid19View);