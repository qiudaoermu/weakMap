import '../assets/styles/footer.styl';
export default {
  data() {
    return {
      author: "Jocky"
    };
  },
  render() {
    return (
      <div id='footer'>
        <span>Wriiten by {this.author}</span>
      </div>
    );
  }
};
