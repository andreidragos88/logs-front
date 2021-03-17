import { makeStyles } from '@material-ui/core/styles';

const useGlobalStyles = makeStyles((theme) => ({
    main: {
        maxWidth: 1300,
        margin: 'auto'
    },

    table: {
        marginTop: 30,
        position: 'relative'
    },

    warning: { color: theme.palette.warning.dark },

    error: { color: theme.palette.error.dark },

    info: { color: theme.palette.info.dark },

    paper: {
        padding: theme.spacing(2),
        textAlign: 'center'
    },

    spinnerWrapper: {
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 15
    }
}));

export default useGlobalStyles;