import React from 'react';

export default class ErrorBoundary extends React.Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        return this.state.hasError ? (
            <div>Sorry, an error has occured</div>
        ) : (
            this.props.children
        );
    }
}