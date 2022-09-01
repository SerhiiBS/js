import {Component} from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        }
    }

    static getDerivedStateFromError(error) {
        return {hasError: true,}
    }

    componentDidCatch(error, errorInfo) {
        console.log({error, errorInfo})
    }

    handleReload() {
        document.location.reload();
    }

    render() {
        const {hasError} = this.state
        const {children} = this.props
        return hasError
            ? (<div> Error <button onClick={this.handleReload}>Reload page =)</button> </div>)
            : children;
    }
}
export default ErrorBoundary