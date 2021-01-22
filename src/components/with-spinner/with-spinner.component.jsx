import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

const withSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        console.log(otherProps);
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps} />
            )
    }
    return Spinner;
};
export default withSpinner;
