import { Box, Button, Card, CardContent, Container, createStyles, Grid, makeStyles, TextField, Theme, Typography } from "@material-ui/core";
import React, { FormEvent, useEffect, useRef } from "react";
import { connect } from "react-redux";
import * as action from "../../redux/Covid19View/action";

interface Props {
    getLogin: Function;
}

const useStyles1 = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(2),
                width: 200,
            },
        },
    }),
);

const useStyles = makeStyles((theme) => ({

    error: {
        color: '#ff0000',
        fontSize: '11px',
        textAlign: 'center',
    },
    floatRight: {
        float: 'right',
    },
    fields: {
        margin: theme.spacing(-1),
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            flexGrow: 1,
            margin: theme.spacing(1),
        },
    },
    login: {
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        // padding: '250px 500px 250px 500px',
        // padding: '250px 0px 250px 0px',
    },
    card: {
        height: '420px',
        width: theme.breakpoints.values.md,
        maxWidth: '100%',
        overflow: 'unset',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        '& > *': {
            flexGrow: 1,
            flexBasis: '50%',
            width: '50%',
        },
        border: '1px solid',
        padding: '20px 20px 0px 20px',
    },
    errorMessage: {
        padding: '15px 0px 10px 0px',
    },
    progress: {
        padding: '20px 20px 10px 20px',
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    progressCircular: {
        // color: '#6798e5',
        animationDuration: '550ms',
    },
}));



function Login(props: Props) {

    const [statusErrorUserName, setStatusErrorUserName] = React.useState(false);
    const [statusErrorTextUserName, setStatusErrorTextUserName] = React.useState('');
    const [statusErrorPassWord, setStatusErrorPassWord] = React.useState(false);
    const [statusErrorTextPassWord, setStatusErrorTextPassWord] = React.useState('');
    const [userName, setUserName] = React.useState('');
    const [passWord, setPassWord] = React.useState('');

    useEffect(() => {
        console.log("useEffect");
        localStorage.removeItem('key');
    },
        []
    )

    const classes = useStyles();
    const classes1 = useStyles1();

    function validate() {
        // If backend have login api then check userName and passWord with database .
        if ((userName == 'test1@covid19api.com') && (passWord == '123456789')) {
            return true;
        } else if ((userName != 'test1@covid19api.com') && (passWord != '123456789')) {
            setStatusErrorUserName(true);
            setStatusErrorTextUserName('Please input correct UserName');
            setStatusErrorPassWord(true);
            setStatusErrorTextPassWord('Please input correct PassWord');
            return false;
        }
        else {
            setStatusErrorUserName(true);
            setStatusErrorTextUserName('Please input UserName');
            setStatusErrorPassWord(true);
            setStatusErrorTextPassWord('Please input PassWord');
            return false;
        }
    }

    const submitLogin = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (validate()) {
            await props.getLogin();
            // After success login collect key from jwt token and store to localStorage to authorization user
            let localTokenKey: any;
            if ((localStorage.getItem('key')) == null) {
                localTokenKey = ''
            } else {
                localTokenKey = (localStorage.getItem('key'))
            }
            if (localTokenKey != '') {
                window.location.href = "/covid19View";
            }
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        if (name == "username") {
            if (value == '') {
                setStatusErrorUserName(true);
                setStatusErrorTextUserName('Please input UserName');
            } else {
                setUserName(value);
                setStatusErrorUserName(false);
                setStatusErrorTextUserName('');
            }
        }
        if (name == "password") {
            if (value == '') {
                setStatusErrorPassWord(true);
                setStatusErrorTextPassWord('Please input Password');
            } else {
                setPassWord(value);
                setStatusErrorPassWord(false);
                setStatusErrorTextPassWord('');
            }
        }
        // if (value.length > 64) {
        //     if (value.length == 65) {
        //         setEditPriorityCellValue(value);
        //     }
        //     setStatusError(true);
        //     setStatusErrorText('最大64文字まで入力できます。');
        // }

        // if ((value.length <= 64) && (value.length > 0)) {
        //     setEditPriorityCellValue(value);
        //     setStatusError(false);
        //     setStatusErrorText('');
        // }

    };

    function submitLoginForm(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        props.getLogin();
        // let object: any;
        let localTokenKey: any;
        if ((localStorage.getItem('key')) == null) {
            localTokenKey = ''
        } else {
            localTokenKey = (localStorage.getItem('key'))
        }
        if (localTokenKey != '') {
            window.location.href = "/covid19View";
        }
        // window.location.href = "/covid19View";
        // if (Validate()) {
        //     setIsLoading(true);
        //     apiPost(Constants.loginUrl, loginForm, () => console.log("Login error!")).then((res: any) => {
        //         if (res && res.data && res.code === 200 && res.message !== 'ログインできませんでした') {
        //             processLoginData(res);
        //         } else {
        //             setIsLoading(false);
        //             showSnackBarAlert(30000, "error", MESSAGE.ERROR_LOGIN_FAILED);
        //         }
        //     });
        // }
    }

    return (

        <Container className={classes.login} component="main" maxWidth="sm">

            <Card className={classes.card}>
                <form onSubmit={submitLogin} className={classes1.root} autoComplete="off">
                    <h3>Covid19 infected view login</h3>
                    <Grid item md={12} xs='auto'>
                        <TextField
                            error={statusErrorUserName}
                            id="outlined-error-helper-text"
                            label="Username"
                            defaultValue=""
                            helperText={statusErrorTextUserName}
                            variant="outlined"
                            name={'username'}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item md={12} xs='auto'>
                        <TextField
                            error={statusErrorPassWord}
                            id="outlined-error-helper-text"
                            label="Password"
                            defaultValue=""
                            helperText={statusErrorTextPassWord}
                            variant="outlined"
                            name={'password'}
                            onChange={handleChange}
                        />
                    </Grid>
                    <input
                        id="login-button"
                        type='submit'
                        style={{ display: 'none' }}
                        disabled={false}
                    />
                    <label htmlFor="login-button">
                        <Button
                            className="loginButton font-weight-bold custom"
                            variant="contained"
                            color="primary"
                            component="span"
                            size='medium'
                            disabled={false}
                        >
                            Log in
                        </Button>
                    </label>
                </form>
            </Card>
        </Container>

    )
}

// Region redux connect -->
// const mapStateToProps = function (state: any) {
//     return {
//         infectedList: state.covid19ViewReducer.infectedList
//     };
// }
const mapDispatchToProps = (dispatch: any) => {
    return {
        getLogin: async () => {
            await dispatch(action.actGetLogin());
        },
    }
}
// Region redux connect <--

export default connect(null, mapDispatchToProps)(Login);