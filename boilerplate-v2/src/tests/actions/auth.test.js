import { login, logout } from "../../actions/auth";

test('should Return Login action object', () => {
  
  const uid = "xqwSqa3";
  const action = login(uid);
  
  expect(action).toEqual({
    type: "LOGIN",
    uid
  });

});
test('should Return Logout action object', () => {
  
  expect(logout()).toEqual({
    type: "LOGOUT"
  });
});