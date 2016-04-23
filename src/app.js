/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');

// Create a Card with title and subtitle
var card = new UI.Card({
  title:'Basement Environment',
  //subtitle:'Fetching...'
});

// Display the Card
card.show();

var ajax = require('ajax');

// Construct URL
//var cityName = 'London';
var myParticleAccessToken = '';
var myParticleDeviceId = '';
var TempURL = 'https://api.spark.io/v1/devices/' + myParticleDeviceId 
          + '/temperaturec?access_token=' + myParticleAccessToken;

// Make the request
ajax(
  {
    url: TempURL,
    type: 'json'
  },
  function(data) {
    // Success!
    console.log('Successfully fetched temperature data!');
    
    // Extract data
    var temperature = Math.round(result) + 'C';

    // Always upper-case first letter of description
    var tempDescription = 'Temperature';
  
    // Show to user
    //card.subtitle(location + ', ' + temperature);
    card.body(tempDescription + ': ' + temperature);
    
  },
  function(error) {
    // Failure!
    console.log('Failed fetching temperature data: ' + error);
  }
);

/*

var Vector2 = require('vector2');

var main = new UI.Card({
  title: 'Pebble.js',
  icon: 'images/menu_icon.png',
  subtitle: 'Hello World!',
  body: 'Press any button.',
  subtitleColor: 'indigo', // Named colors
  bodyColor: '#9a0036' // Hex colors
});

main.show();

main.on('click', 'up', function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'Pebble.js',
        icon: 'images/menu_icon.png',
        subtitle: 'Can do Menus'
      }, {
        title: 'Second Item',
        subtitle: 'Subtitle Text'
      }]
    }]
  });
  menu.on('select', function(e) {
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
  });
  menu.show();
});

main.on('click', 'select', function(e) {
  var wind = new UI.Window({
    fullscreen: true,
  });
  var textfield = new UI.Text({
    position: new Vector2(0, 65),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'Text Anywhere!',
    textAlign: 'center'
  });
  wind.add(textfield);
  wind.show();
});

main.on('click', 'down', function(e) {
  var card = new UI.Card();
  card.title('A Card');
  card.subtitle('Is a Window');
  card.body('The simplest window type in Pebble.js.');
  card.show();
});

*/