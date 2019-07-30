import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';
// Field is Component
// reduxForm is function

class StreamCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  // handleSubmit은 자동으로 preventDefault() 함수를 포함한다.
  // 또한 event parameter를 자동으로 받는다
  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createStream },
)(StreamCreate);
