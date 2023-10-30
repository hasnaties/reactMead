import moment from 'moment';

export default [{
  id: '1',
  description: "this is the first test description.",
  note: "this is note first.",
  amount: 195,
  createdAt: moment(0).valueOf()
}, {
  id: '2',
  description: "this is the rent.",
  note: "House rent.",
  amount: 109500,
  createdAt: moment(0).subtract(3, 'days').valueOf()
}, {
  id: '3',
  description: "this vehicle rent.",
  note: "fee.",
  amount: 4500,
  createdAt: moment(0).add(3, 'days').valueOf()
}];