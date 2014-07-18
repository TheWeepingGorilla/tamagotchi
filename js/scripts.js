var Tamagotchi = {
  initialize: function(name) {
    this.name = name;
    this.foodLevel = 10;
    this.sleepLevel = 10;
    this.activityLevel = 10;
  },

  hungry: function() {
    this.foodLevel = this.foodLevel - 1;
  },

  fed: function() {
    this.foodLevel = this.foodLevel + 1;
  },

  sleepy: function() {
    this.sleepLevel = this.sleepLevel - 1;
  },

  sleepyTime: function() {
    this.sleepLevel = this.sleepLevel + 1;
  },

  bored: function() {
    this.activityLevel = this.activityLevel - 1;
  },

  recess: function() {
    this.activityLevel = this.activityLevel +1;
  },

  isAlive: function() {
    if ( (this.foodLevel !== 0) && (this.sleepLevel !== 0) && (this.activityLevel !== 0) ) {
      return true;
    } else {
      return false;
    }
  }

};

$(document).ready(function() {
  $('#new-tamagotchi-form').submit(function(event) {
    var newTamagotchi = Object.create(Tamagotchi);

    newTamagotchi.initialize($('input#new-tamagotchi-name').val());
    $('#food').append(newTamagotchi.foodLevel);
    $('#activity').append(newTamagotchi.activityLevel);
    $('#sleep').append(newTamagotchi.sleepLevel);
    event.preventDefault();

    $('#hourglass').click(function(event) {
      newTamagotchi.hungry();
      newTamagotchi.sleepy();
      newTamagotchi.bored();
      if (!newTamagotchi.isAlive()) {
        alert("Game Over man!  Game over!");
      }
      $('#food').empty();
      $('#food').append(newTamagotchi.foodLevel);
      $('#activity').empty();
      $('#activity').append(newTamagotchi.activityLevel);
      $('#sleep').empty();
      $('#sleep').append(newTamagotchi.sleepLevel);
    });

    $('#foodbtn').click(function(event) {
      newTamagotchi.fed();
      $('#food').empty();
      $('#food').append(newTamagotchi.foodLevel);
    });

    $('#playbtn').click(function(event) {
      newTamagotchi.recess();
      $('#activity').empty();
      $('#activity').append(newTamagotchi.activityLevel);
    });

    $('#sleepbtn').click(function(event) {
      newTamagotchi.sleepyTime();
      $('#sleep').empty();
      $('#sleep').append(newTamagotchi.sleepLevel);
    });

  });
});



