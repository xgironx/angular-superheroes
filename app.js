let superheroContacts = [
  {
    name: "Black Panther",
    phone: "123-456-1234",
    affiliation: "Marvel Comics",
    image: "http://static2.gamespot.com/uploads/scale_super/1552/15524586/3052678-screen+shot+2016-04-22+at+5.44.40+pm.jpg"
  },
  {
    name: "Michonne",
    phone: "546-853-3069",
    affiliation: "Image Comics",
    image: "http://static.comicvine.com/uploads/scale_super/11/118136/4385717-michonne-clip.jpg"
  },
  {
    name: "Kamau Kogo",
    phone: "693-235-2058",
    affiliation: "Image Comics",
    image: "http://static2.comicvine.com/uploads/scale_small/4/48605/4280824-kamaukogo.jpg"
  },
  {
    name: "Storm",
    phone: "389-396-1938",
    affiliation: "Marvel Comics",
    image: "http://static.comicvine.com/uploads/original/1/11768/507741-marvel_in_november_2008_20080818082758009.jpg"
  }
]

angular.module("comicsContactsApp", [])
.controller("comicsContactsController", [comicsContactsControllerFunction])

function comicsContactsControllerFunction(){
  this.superheroes = superheroContacts
}
