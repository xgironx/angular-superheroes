superheroes = [
  {name: 'Superman', phone: '202-111-1111', affiliation:  'marvel', image: 'http://vignette3.wikia.nocookie.net/superman/images/2/27/Superman-dcuo.jpg/revision/latest?cb=20110901025125'},
  {name: 'Batman', phone: '202-222-2222', affiliation:  'dc', image: 'https://yt3.ggpht.com/-pRVD_L1mNb0/AAAAAAAAAAI/AAAAAAAAAAA/0vSfsj5pDP8/s900-c-k-no-mo-rj-c0xffffff/photo.jpg'},
  {name: 'Batwoman', phone: '202-333-3333', affiliation:  'marvel', image: 'http://static3.comicvine.com/uploads/square_small/11114/111147698/5471468-timthumb.php.jpeg'},
  {name: 'Spiderman', phone: '202-444-4444', affiliation:  'dc', image: 'https://cdn0.vox-cdn.com/thumbor/6HMpe8tx99Xv2BYt6Y1Fa0zhrLE=/0x0:1012x675/1280x854/cdn0.vox-cdn.com/uploads/chorus_image/image/45661554/amazing-spider-man-poster-battle-damage.0.0.jpg'},
  {name: 'Captin America', phone: '202-555-5555', affiliation:  'marvel', image: 'http://www.goliath.com/wp-content/uploads/2016/05/Captain-America.jpg'},
  {name: 'Ironman', phone: '202-666-6666', affiliation:  'dc', image: 'https://www.sideshowtoy.com/photo_902622_thumb.jpg'},
]

angular
  .module("heroesApp", [])
  .controller('heroesCtrl', [heroesController])

function heroesController (){
  this.heroes = superheroes

}
