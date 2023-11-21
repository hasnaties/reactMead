import authReducer from "../../reducers/authReducer";

const uid = "xqwSqa3";

test('should Set login state', () => {
  
  const action = {
    type: "LOGIN",
    uid
  };
  const state = authReducer({}, action);

  expect(state.uid).toBe(uid);
});

test('should Set logout state', () => {
  
  const action = {
    type: "LOGOUT"
  };
  const state = authReducer({uid}, action)
  
  expect(state).toEqual({});
});