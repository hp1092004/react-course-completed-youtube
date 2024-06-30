function Hello() {

  let myName = "Harshad";
  let fullName = ()=> {
    return 'Prashant Jain'
  }
  let number = 456;
  return <p>
    Message No: {number}  Hello this is the future speaking. I am your master {fullName()}
  </p>
}

export default Hello;