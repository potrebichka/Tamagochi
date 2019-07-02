import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Creature} from './backend-code.js';

let tamagotchi;

// function addUser() {
//   $("#startGame").click(function(){
//     tamagotchi = new Creature();
//     $("#startGame").hide();
//     $("#feed, #play, #rest, #bathroom, #love").delay(800).fadeIn()();
//     tamagotchi.reduceStats();
//   });

function takeAction(){
  if (!tamagotchi.heDead) {
    $("#feed").html(`Food Level: ${tamagotchi.food}`);
    $("#play").html(`Happiness Level: ${tamagotchi.play}`);
    $("#rest").html(`Energy Level: ${tamagotchi.energy}`);
    $("#bathroom").html(`Toilet Satisfaction: ${tamagotchi.toilet}`);
    $("#love").html(`Creature love level: ${tamagotchi.love}`);
    if(tamagotchi.heDead === true){
      $("button").hide();
    }
  }
}



function status() {
  if (tamagotchi.sick) {
    $("#sick").text("I'm sick!");
  } else {
    $("#sick").empty();
  }
  if (tamagotchi.criticalCondition) {
    $("#criticalCondition").text("I need rest and need to sleep!");
  } else {
    $("#criticalCondition").empty();
  }
  if (tamagotchi.heDead) {
    $("#heDead").text("Tamagotchi is dead. Game over!");
  } else {
    $("#heDead").empty();
  }
  if (tamagotchi.dirty) {
    $("#dirty").text("Woops! I pooped myself!");
  } else {
    $("#dirty").empty();
  }
  if (tamagotchi.gone) {
    $("#gone").text("Tamagotchi felt ignored and is now gone!");
  } else {
    $("#gone").empty();
  }
  if (tamagotchi.sad) {
    $("#sad").text("I'm unhappy and need some space. TTYL!");
  } else {
    $("#sad").empty();
  }
}
//
// $(function() {
//   addUser();
//
//
// });
$(document).ready(function() {

  console.log("Hello");
  $('#newUser').submit(function(event) {
    event.preventDefault();
    var userName1 = $('#userName').val();
    let user = new Object;
    user.name = userName1;

    $("#greeting").text("Welcome " + userName1 + "!")


  });

  $("#feedButton").click(function(){
    console.log("hello!");
    tamagotchi.feed();
    takeAction();
  });
  $("#playButton").click(function(){
    tamagotchi.play();
    takeAction();
  });
  $("#restButton").click(function(){
    tamagotchi.rest();
    takeAction();
  });
  $("#bathroomButton").click(function(){
    tamagotchi.bathroom();
    takeAction();
  });
  $("#loveButton").click(function(){
    tamagotchi.love();
    takeAction();
  });
});
