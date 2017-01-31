function Ninja() {
  var feints = 0;
  this.getFeints = () => {
    return feints;
  }
  this.feint = () => {
    feints++;
  }
}

export default Ninja;
