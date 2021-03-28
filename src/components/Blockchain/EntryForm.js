import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../actions/index';

class EntryForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      alertCourseId: "",
      alertCredits: "",
      alertProcess: "",
      alertExamination: "",
      alertCourseTitle: ""
    }
  }

  handleChangeInput = event => {
    let { value, name } = event.target;

    let typeInput = event.target.getAttribute("typeinput");

    const newInfo = { ...this.props.infoTaiKhoan };

    newInfo[name] = value;

    const newErrors = { ...this.props.errorsTaiKhoan };

    newErrors[name] = value.trim() === '' ? `${name} không được bỏ trống!` : '';

    // switch (typeInput) {
    //   case 'credits':
    //     const regexCredits = /^\d$|^1[0-2]$/;
    //     if (!regexCredits.test(value)) {
    //       newErrors[name] = `${name} không đúng định dạng!`;
    //     } else {
    //       newErrors[name] = `${name} được chấp nhận!`;
    //     }
    //     break;
    
    //   case 'process':
    //     const regexProcess = /^\d\.[1-9]$|^\d$|^10$/;
    //     if (!regexProcess.test(value)) {
    //       newErrors[name] = `${name} không đúng định dạng!`;
    //     } else {
    //       newErrors[name] = `${name} được chấp nhận!`;
    //     }
    //     break;
    
    //   case 'examination':
    //     const regexExamination = /^\d\.[1-9]$|^\d$|^10$/;
    //     if (!regexExamination.test(value)) {
    //       newErrors[name] = `${name} không đúng định dạng!`;
    //     } else {
    //       newErrors[name] = `${name} được chấp nhận!`;
    //     }
    //     break;
    
    //   case 'courseid':
    //     const regexCourseId = /^[A-Z]{2,3}[0-9]{4}$/;
    //     if (!regexCourseId.test(value)) {
    //       newErrors[name] = `${name} không đúng định dạng!`;
    //     } else {
    //       newErrors[name] = `${name} được chấp nhận!`;
    //     }
    //     break;
    // }

    if (typeInput === 'coursetitle') {
      newErrors[name] = `The ${name} entered is accepted!`;
      this.setState({
        alertCourseTitle: "text-success"
      })
 
    }
    
    if (typeInput === 'credits') {
      const regexCredits = /^\d$|^1[0-2]$/;
      if (!regexCredits.test(value)) {
        newErrors[name] = `The ${name} entered is incorrect format!`;
        this.setState({
          alertCredits: "text-danger"
        })
      }
      else {
        newErrors[name] = `The ${name} entered is accepted!`;
        this.setState({
          alertCredits: "text-success"
        })
      }
    }
    
    if (typeInput === 'process') {
      const regexProcess = /^\d\.[1-9]$|^\d$|^10$/;
      if (!regexProcess.test(value)) {
        newErrors[name] = `The ${name} entered is incorrect format!`;
        this.setState({
          alertProcess: "text-danger"
        })
      }
      else {
        newErrors[name] = `The ${name} entered is accepted!`;
        this.setState({
          alertProcess: "text-success"
        })
      }
    }
    
    if (typeInput === 'examination') {
      const regexExamination = /^\d\.[1-9]$|^\d$|^10$/;
      if (!regexExamination.test(value)) {
        newErrors[name] = `The ${name} entered is incorrect format!`;
        this.setState({
          alertExamination: "text-danger"
        })
      }
      else {
        newErrors[name] = `The ${name} entered is accepted!`;
        this.setState({
          alertExamination: "text-success"
        })
      }
    }
    
    if (typeInput === 'courseid') {
      const regexCourseId = /^[A-Z]{2,3}[0-9]{4}$/;
      if (!regexCourseId.test(value)) {
        newErrors[name] = `The ${name} entered is incorrect format!`;
        this.setState({
          alertCourseId: "text-danger"
        })
      }
      else {
        newErrors[name] = `The ${name} entered is accepted!`;
        this.setState({
          alertCourseId: "text-success"
        })
      }
    }

    if (typeInput === 'credits') {
      const regexCredits = /^\d$|^1[0-2]$/;
      if (!regexCredits.test(value)) {
        newErrors[name] = `The ${name} entered is incorrect format!`;
        this.setState({
          alertColor: "text-danger"
        })
      }
      else {
        newErrors[name] = `The ${name} entered is accepted!`;
        this.setState({
          alertColor: "text-success"
        })
      } 
    }

    if (typeInput === 'process') {
      const regexProcess = /^\d\.[1-9]$|^\d$|^10$/;
      if (!regexProcess.test(value)) {
        newErrors[name] = `The ${name} entered is incorrect format!`;
        this.setState({
          alertColor: "text-danger"
        })
      }
      else {
        newErrors[name] = `The ${name} entered is accepted!`;
        this.setState({
          alertColor: "text-success"
        })
      } 
    }

    // if (typeInput === 'examination') {
    //   const regexExamination = /^\d\.[1-9]$|^\d$|^10$/;
    //   if (!regexExamination.test(value)) {
    //     newErrors[name] = `${name} không đúng định dạng!`;
    //   }
     
    // }

    // if (typeInput === 'courseid') {
    //   const regexCourseId = /^[A-Z]{2,3}[0-9]{4}$/;
    //   if (!regexCourseId.test(value)) {
    //     newErrors[name] = `${name} không đúng định dạng!`;
    //   }
    
    // }

    this.props.handleOrigin(newErrors, newInfo);
  };

  handleSubmit = event => {
    event.preventDefault(); // Chặn sự kiện submit

    let valid = true;
    console.log("kt1", this.props.infoTaiKhoan)
    console.log("kt2", this.props.errorsTaiKhoan)

    for (const key in this.props.infoTaiKhoan) {
      if (this.props.infoTaiKhoan[key].toString().trim() === '') {
        valid = false;
      }
    }

    console.log("valid", valid)

    for (const key in this.props.errorsTaiKhoan) {
      if (this.props.errorsTaiKhoan[key].toString().includes("incorrect")) {
        valid = false;
      }
    }

    console.log("valid", valid)

    if (!valid) {
      alert('Dữ liệu không hợp lệ!');
      return false;
    }
    else 
      return true;
  };

  handleSave = (event, courseId) => {
    const flag = this.handleSubmit(event);
    if(flag) {
      this.props.addNewCourse();
      this.props.saveCourseOnSuccess(courseId);
      this.props.updateCourseOnFailure();
      this.props.deleteCourseOnFailure();
    }
    
  };

  handleUpdate = courseId => {
    let valid = true;

    console.log('infoTaiKhoan', this.props.infoTaiKhoan);

    for (const key in this.props.infoTaiKhoan) {
      if (this.props.infoTaiKhoan[key].toString().trim() === '') {
        valid = false;
      }
    }

    for (const key in this.props.errorsTaiKhoan) {
      if (this.props.errorsTaiKhoan[key].toString().includes("incorrect")) {
        valid = false;
      }
    }

    if (!valid) {
      alert('Dữ liệu không hợp lệ!');
      return;
    }

    this.props.updateThisCourse();
    this.props.updateCourseOnSuccess(courseId);
    this.props.deleteCourseOnFailure();
    this.props.saveCourseOnFailure();
  };

  render() {
    console.log('delete', this.props.updateAction);
    const {
      courseId,
      courseTitle,
      credits,
      factor,
      process,
      examination
    } = this.props.infoTaiKhoan;

    return (
      <div className="table-format">
        <div className="card mt-4">
          <div className="card-header bg-light">
            <h5 className="m-0 p-0">Entry Form</h5>
          </div>
          <div className="card-body">
            <form onSubmit={event => this.handleSave(event, courseId)}>
              <div className="row">
                <div className="col-6">
                  <p className="p-0 m-0 pb-1">courseId</p>
                  <input
                    type="text"
                    typeinput="courseid"
                    className="form-control"
                    name="courseId"
                    value={courseId}
                    onChange={this.handleChangeInput}
                    disabled={!this.props.isReg}
                  />
                  <p className={this.state.alertCourseId}>
                    {this.props.errorsTaiKhoan.courseId}
                  </p>
                </div>
                <div className="col-6">
                  <p className="p-0 m-0 pb-1">courseTitle</p>
                  <input
                    type="text"
                    typeinput="coursetitle"
                    className="form-control"
                    name="courseTitle"
                    value={courseTitle}
                    onChange={this.handleChangeInput}
                  />
                  <p className={this.state.alertCourseTitle}>
                    {this.props.errorsTaiKhoan.courseTitle}
                  </p>
                </div>
                <div className="col-6">
                  <p className="p-0 m-0 pt-3 pb-1">credits</p>
                  <input
                    type="text"
                    className="form-control"
                    name="credits"
                    typeinput="credits"
                    value={credits}
                    onChange={this.handleChangeInput}
                  />
                  <p className={this.state.alertCredits}>
                    {this.props.errorsTaiKhoan.credits}
                  </p>
                </div>
                <div className="col-6">
                  <p className="p-0 m-0 pt-3 pb-1">factor</p>
                  <select
                    className="form-control"
                    name="factor"
                    value={factor}
                    onChange={this.handleChangeInput}
                  >
                    <option>{this.props.infoTaiKhoan.factor}</option>
                    <option>0.5</option>
                    <option>0.6</option>
                    <option>0.7</option>
                    <option>0.8</option>
                  </select>
                </div>
                <div className="col-6">
                  <p className="p-0 m-0 pt-3 pb-1">process</p>
                  <input
                    type="text"
                    className="form-control"
                    name="process"
                    typeinput="process"
                    value={process}
                    onChange={this.handleChangeInput}
                  />
                  <p className={this.state.alertProcess}>
                    {this.props.errorsTaiKhoan.process}
                  </p>
                </div>
                <div className="col-6">
                  <p className="p-0 m-0 pt-3 pb-1">examination</p>
                  <input
                    type="text"
                    className="form-control"
                    name="examination"
                    typeinput="examination"
                    value={examination}
                    onChange={this.handleChangeInput}
                  />
                  <p className={this.state.alertExamination}>
                    {this.props.errorsTaiKhoan.examination}
                  </p>
                </div>
                <div className="col-12 mt-3">
                  <button
                    className={
                      this.props.isReg
                        ? 'btn mr-2 btn-success'
                        : 'btn mr-2 btn-light'
                    }
                    disabled={!this.props.isReg}
                    onClick={this.saveCourse}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className={
                      !this.props.isReg
                        ? 'btn mr-2 btn-primary'
                        : 'btn mr-2 btn-light'
                    }
                    disabled={this.props.isReg}
                    onClick={() => this.handleUpdate(courseId)}
                  >
                    Update
                  </button>
                  {!this.props.isReg ? (
                    <button
                      className="btn mr-2 btn-danger"
                      onClick={this.props.cancelThisUpdate}
                    >
                      Cancel
                    </button>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ListTaiKhoan: state.TranscriptReducer.courseList,
  errorsTaiKhoan: state.TranscriptReducer.errors,
  infoTaiKhoan: state.TranscriptReducer.info,
  isReg: state.TranscriptReducer.isReg
});

const mapDispatchToProps = (dispatch, props) => {
  return {
    cancelThisUpdate: () => {
      dispatch(action.cancelThisUpdate());
    },
    addNewCourse: () => {
      dispatch(action.addNewCourse());
    },
    handleOrigin: (newErrors, newInfo) => {
      dispatch(action.handleOrigin(newErrors, newInfo));
    },
    updateThisCourse: () => {
      dispatch(action.updateThisCourse());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EntryForm);