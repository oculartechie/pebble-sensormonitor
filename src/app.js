/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');

// Create a Card with title and subtitle
var card = new UI.Card({
  title:'Basement',
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
    var temperature = Math.round(data.result) + 'C';

    // Always upper-case first letter of description
    var tempDescription = 'Temp';
  
    // Show to user
    card.body(tempDescription + ': ' + temperature);
    
  },
  function(error) {
    // Failure!
    console.log('Failed fetching temperature data: ' + error);
  }
);