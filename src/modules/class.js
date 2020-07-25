class User {
  constructor(personDetail) {
    this.personDetail = personDetail;
  }
  
  get theDetail() {
    let {
      name, 
      gender, 
      height 
    } = this.personDetail;

    return {
      name, 
      gender, 
      height 
    }
  }
}


  