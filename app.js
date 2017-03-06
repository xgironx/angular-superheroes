                      // ############################
                      // 201703050824   EL DOMINGO   JAY
                      // https://github.com/ga-wdi-lessons/angular-intro
                      // Bootstrap your angular application (i.e., create a module, use ng-app).
                      // Create a controller.
                      // Attach a controller to your view.
                      // Define a collection of superheroes in your app.js. Each superhero should have a name, phone number, comics affiliation and image URL.
                      // Use ng-repeat to render the list of superheroes.
                      // Create a search form. Use ng-model to bind that forms input to a value in the view model.
                      // Use filter to limit the number of superheroes shown in the browser based on user input
                      // Use ng-class to add a class to each superhero in the list indicating their comics affiliation (e.g., ng-class="marvel"). Use that class to color code the list depending on their affiliation (e.g., all marvel heroes should appear as blue).
                      // Add a button next to each superhero. When clicked, their image should appear within their listing (hint: use $index).

//app.js
angular
    .module("superheroApp", [])
    .controller("superheroesCtrl", [superheroController])

let superheroes = [{
    name: 'superhero1',
    phone: 'phone1',
    comics_home: 'marvel',
    image_url: 'image_url1'
}, {
    name: 'superhero2',
    phone: 'phone2',
    comics_home: 'marvel',
    image_url: 'image_url2'
}, {
    name: 'superhero3',
    phone: 'phone3',
    comics_home: 'dc',
    image_url: 'image_url3'
}, {
  name: 'superhero4',
  phone: 'phone4',
  comics_home: 'dc',
  image_url: 'image_url4'
}, {
    name: 'superhero4',
    phone: 'phone4',
    comics_home: '',
    image_url: 'image_url4'
}, {
    name: 'superhero5',
    phone: 'phone5',
    comics_home: 'revell',
    image_url: 'image_url5'
}]

function superheroController() {
    this.superheroes = superheroes
    this.addSuperhero = function() {
        console.log('clicked!')
    }
    this.addSuperhero = function() {
                        alert('in addSuperhero ' + this.newSuperheroName);
                        let superhero = {
                            name: this.newSuperheroName,
                            phone: this.newSuperheroPhone,
                            comics_home: this.newSuperheroComics_home,
                            image_url: this.newSuperheroImage_url
                        }
                        this.superheroes.push(superhero) //IT WORKS IT DID PUSH THE NEW BOOK ONTO THE superheroes ARRAY
                    }
}
