let superheroData = [

  { name: "Iron Man", affiliation: "marvel", image_url: "#", number: "1-800-Iron-Man" },
  { name: "Captain America", affiliation: "marvel", image_url: "#", number: "1-800-America" },
  { name: "Black Widow", affiliation: "marvel", image_url: "#", number: "unlisted" },
  { name: "Nick Fury", affiliation: "marvel", image_url: "#", number: "" },
  { name: "The Hulk", affiliation: "marvel", image_url: "#", number: "1-800-SMASHES" },
  { name: "Vision", affiliation: "marvel", image_url: "#", number: "just think and I'm there" },
  { name: "Thor", affiliation: "marvel", image_url: "#", number: "" },
  { name: "Scarlet Witch", affiliation: "marvel", image_url: "#", number: "" },
  { name: "Falcon", affiliation: "marvel", image_url: "#", number: "" },
  { name: "Iron Patriot", affiliation: "marvel", image_url: "#", number: "1-866-WAR-MCHN" },
  { name: "Professor X", affiliation: "marvel", image_url: "#", number: "" },
  { name: "Deadpool", affiliation: "marvel", image_url: "#", number: "" },
  { name: "Cable", affiliation: "marvel", image_url: "#", number: "" },


  { name: "Batman", affiliation: "dc", image_url: "#", number: "" },
  { name: "Superman", affiliation: "dc", image_url: "#", number: "" },
  { name: "Supergirl", affiliation: "dc", image_url: "#", number: "" },
  { name: "The Flash", affiliation: "dc", image_url: "#", number: "" },
  { name: "Aquaman", affiliation: "dc", image_url: "https://upload.wikimedia.org/wikipedia/en/0/0a/Aquaman_issue_1,_the_new_52.jpg", number: "" },
  { name: "Wonder Woman", affiliation: "dc", image_url: "#", number: "" },
  { name: "Cyborg", affiliation: "dc", image_url: "#", number: "" },
  { name: "Green Arrow", affiliation: "dc", image_url: "#", number: "" },
  { name: "J'onn J'onzz", affiliation: "dc", image_url: "#", number: "" },
  { name: "Spawn", affiliation: "dc", image_url: "#", number: "" }




]

angular
  .module("superheroApp", [])
  .controller("superheroCtrl",[ superheroController ])

  function superheroController () {
    this.superheros = superheroData
    this.addSuperhero = function() {
      let superhero = {title: this.newPostTitle, author: this.newPostAuthor,content: this.newPostContent, photo_url: this.newPostPic}
      this.superheros.push(superhero)
    }
    this.superheroAlphabet = function(text) {
      let alphabet = this.superheros.filter(x=>text?x.name.includes(text):true).map(x=>x.name)
      alphabet = alphabet.sort().map(y=>y[0])
      let returnArray = []
      alphabet.forEach((z,i)=>{
        i ? (z==alphabet[i-1]?false:returnArray.push(z)) : returnArray.push(z)
      })
      console.log(returnArray)
      return returnArray
    }
    this.alphabetHeros = function(letter) {
      // return this.superheros.map(x=>x.name).filter(y=>y[0]==letter).sort()
      return this.superheros.filter(x=>x.name[0]==letter).sort()
    }




  }
