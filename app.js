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
    image_url: 'https://upload.wikimedia.org/wikipedia/en/0/0a/Aquaman_issue_1,_the_new_52.jpg'
}, {
    name: 'superhero2',
    phone: 'phone2',
    comics_home: 'marvel',
    image_url: 'http://static.boredpanda.com/blog/wp-content/uploads/2016/06/movie-superheroes-then-and-now-16-575173430481f__880.jpg'
}, {
    name: 'superhero3',
    phone: 'phone3',
    comics_home: 'dc',
    image_url: 'http://static.boredpanda.com/blog/wp-content/uploads/2016/06/movie-superheroes-then-and-now-26-57518e1660914__880.jpg'
}, {
  name: 'superhero4',
  phone: 'phone4',
  comics_home: 'dc',
  image_url: 'http://static.boredpanda.com/blog/wp-content/uploads/2016/06/movie-superheroes-then-and-now-22-57517946422b7__880.jpg'
}, {
    name: 'superhero4',
    phone: 'phone4',
    comics_home: '',
    image_url: 'http://static.boredpanda.com/blog/wp-content/uploads/2016/06/movie-superheroes-then-and-now-13-57518b9ec22bd__880.jpg'
}, {
    name: 'superhero5',
    phone: 'phone5',
    comics_home: 'revell',
    image_url: 'http://static.boredpanda.com/blog/wp-content/uploads/2016/06/movie-superheroes-then-and-now-1-5751507b9d1b5__880.jpg'
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
