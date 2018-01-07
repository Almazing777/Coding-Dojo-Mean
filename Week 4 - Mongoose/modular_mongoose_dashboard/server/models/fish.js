
const fishSchema = new mongoose.Schema({
  name: String,
  color: String,
  age: Number
}, {
  timestamps:true
});

const Fish = mongoose.model("fish", fishSchema);