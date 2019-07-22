import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  //Arrow function을 사용하여 bind해줘야한다
  //setState를 이용하여 term의 값을 바꿔준다
  //parameter(event)의 target.value를 이용

  //onChange handler: 타입에 따른 변화
  //this.onInputChange에 ()없이 사용
  //onInputChange라는 이름은 변화할수 있다
  // 간단하게 => onChange={e => this.setState({ term: e.target.value })}

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  //event.preventDefault(); => 브라우져가 자동으로 서밋하지 못하게 해준다
  // 또한 값을 입력하고 enter를 눌렀을때 값을 초기화 시키는것을 막아준다
  onFormSubmit = (event) => {
    event.preventDefault();

    // TODO: Make sure we call
    // Callback from parent component
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
