import { Component } from "react";

const withLogging = (WrappedComponent) =>
  class WithLogging extends Component {
    constructor(props) {
      super(props);
      if (!WrappedComponent.name) {
        WithLogging.displayName = `WithLogging(Component)`;
      } else {
        WithLogging.displayName = `WithLogging(${WrappedComponent.name})`;
      }
    }

    componentDidMount() {
      console.log(
        `Component ${WrappedComponent.name || "Component"} is mounted`
      );
    }

    componentWillUnmount() {
      console.log(
        `Component ${WrappedComponent.name || "Component"} is going to unmount`
      );
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

export default withLogging;
