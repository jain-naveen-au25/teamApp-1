const initialState=[
  {id:0,name:"Naveen Jain", company:"Delta", status:"active", notes:"xyz"}
]
export const contactReducer=(state=initialState, action)=>{
  switch(action.type){
    case "ADD_MEMBER":
      state=[...state,action.payload];
      return state
    case "DELETE_MEMBER":
    const memberFilter=state.filter((member)=>
      member.id===action.payload.id
      ?Object.assign(member,action.payload)
      :member

    );
    state=memberFilter;
    return state
    case "MEMBER_UPDATE":
    const memberUpdate=state.filter((member)=>
    member.id=action.payload.id
    ?Object.assign(member,action.payload)
    :member)
    state = memberUpdate;
    return state
    case "RESET_MEMBER":
    state=[{name:null,company:null,status:null,notes:null}];
    return state
    default:
    return state
  }
}