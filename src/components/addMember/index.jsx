import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
const AddPost = ({members,addMembers})=>{
  const [name, setName]=useState("");
  const [company, setCompany]=useState("");
  const [status, setStatus]=useState("");
  const [notes, setNotes]=useState("");
  const history= useHistory();
  const handleSubmit=(e)=>{
    if (!name||!company||!status){
      toast.warning("name, companyName & status are mandatory")
    }
    const data= {
      id:members.length>0 ? members[members.length-1].id +1 : 0,
      name,
      company,
      status,
      notes
    }
    addMembers(data);
    toast.success("Member Added Successfully");
    history.push('/')
  }

 return (
    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2">Add Post</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Enter Name Here"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Enter Company Name Here"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Enter Status Here"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
              <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Enter Notes Here"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
            </div>
            <div className="form-group">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Add Student"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  addContact: (data) => {
    dispatch({ type: "ADD_CONTACT", payload: data });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(AddPost);