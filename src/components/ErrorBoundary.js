import React from 'react';
class ErrorBoundary extends React.Component {
    state = {
        error: null,
    };
    static getDerivedStateFromError(error) {
        return { error };
    }
    componentDidMount() {
        window.onerror = this.logError;
    }
    componentDidCatch(...args) {
        this.logError(args);
    }
    logError(args) {
        try {
            fetch('/error', {
                method: 'post',
                body: JSON.stringify(args),
            });
        } catch (e) {
            /* fuck it */
        }
    }
    render() {
        if (this.state.error) {
            return 'such error'; // as before
        }
        return this.props.children;
    }
}