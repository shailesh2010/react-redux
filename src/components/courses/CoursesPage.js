import React from 'react';

class CoursesPage extends React.Component {
  constructor(props, context)  {
    super(props, context);
    this.state = {
      course : {
        title: ""
      }
    };
    this.onTileChange = this.onTileChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }
  onTileChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course:course});
  }

  onClickSave() {
    alert(`Saving ${this.state.course.title}`);
  }
  render() {
    return (
      <div>
        <h1>This is courses Page</h1>
        <input
          type="text"
          onChange={this.onTileChange}
          value={this.state.course.title} />
        <input
          type="submit"
          onClick={this.onClickSave}
          value="Save" />
      </div>
    );
  }
}

export default CoursesPage;
