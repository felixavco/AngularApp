export interface User {
  firstName:String,
  lastName:String,
  email: string,
  dob?: 
  {
    m?: Number,
    d?: Number,
    y?: Number
  },
  isActive?: Boolean, 
  registered?: any, 
  hide?: Boolean;
}