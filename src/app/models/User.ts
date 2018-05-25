export interface User {
  firstName:String,
  lastName:String,
  dob?: 
  {
    m?: Number,
    d?: Number,
    y?: Number
  },
  address?: 
  {
    street?:String,
    city?:String,
    state?:String
  }
}