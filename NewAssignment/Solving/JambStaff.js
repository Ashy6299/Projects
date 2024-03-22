class JambStaff {
  JambStaffList = [];
  constructor() {}
  newJambStaff(name, idCard, department) {
    const staffData = { name, idCard, department };
    return this.JambStaffList.push(staffData);
  }
  viewJambStaff() {
    console.log(this.JambStaffList);
    return this.JambStaffList;
  }
}

export default JambStaff;
