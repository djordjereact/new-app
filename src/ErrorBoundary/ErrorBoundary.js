import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessagee: ''
    }

    componentDidCatch = (error,info) => {
        this.setState({hasError: true, errorMessagee: error});
    }

    render() {
        if (this.state.hasError) {
            return <h1>{this.state.errorMessagee}</h1>;
        }else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;
