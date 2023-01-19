const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
  run: ["01-01", "01-02", "01-06", "01-08"],
  sport: ["01-03"],
  pet: ["01-02", "01-07"],
  water: ["03-01"],
  food: ["08-01", "01-07"],
  sleep: ["06-01", "01-01"],
}

nlwSetup.setData(data)
nlwSetup.load()
