export default {
  name: 'ElMarker',

  props: {
    mark: {
      type: [String]
    }
  },
  render() {

    return (
      <div class="el-slider__marks-text">
        { mark }
      </div>
    );
  }
};
