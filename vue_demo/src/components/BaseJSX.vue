<script>
export default {
  data() {
    return {
      value: "jsx",
      isShow: true,
      inputValue:"nihk",
    };
  },
  methods: {
    vif(num) {
      if (num == 1) return <div>1</div>;
      else if (num == 2) return <p>2</p>;
      else return <span>0</span>;
    },
    handleClick(num){
        console.log("handleClick",num)
    }
  },
    mounted() {
    console.log(this.$refs);
  },
  render() {
      let tag = "h1";//动态元素
    return (
      <div class="jsx">
        <h1>JSX</h1>
        <div>{this.value}</div>
        <div domPropsInnerHTML=" <h2>i am a h2 </h2>"></div>
        <div domPropsTextContent="<h2>i am a h2 </h2>"></div>
        <div v-show={this.isShow}>v-show</div>
        {true && <div> v-if</div>}
        {false ? <div>v-if</div> : <div>v-else</div>}
        {this.vif(3)}
        {[1,2,3].map(item=><div key={item}>{item}</div>)}
        <button onClick={()=>{this.handleClick(5)}}>click</button>
        <div class = { {a:true,b:true}}>class</div>
        <div style={{color:'red',backgroundColor:'green'}}>style</div>
        <input v-model={this.inputValue}/> {this.inputValue}
        <div ref="jsxdiv"></div>
        <tag>tag</tag>
      </div>
    );
  },
};
</script>