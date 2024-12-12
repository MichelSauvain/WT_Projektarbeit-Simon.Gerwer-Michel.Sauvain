function icon() {
  var nav = document.querySelector("nav");
  nav.classList.toggle("responsive");
}

window.onload = function() {
  var img = document.getElementById('bilder/left.png'); // Assuming you give your image an id
  img.onclick = left_freeride;
};

window.onload = function() {
  var img = document.getElementById('bilder/right.png'); // Assuming you give your image an id
  img.onclick = right_freeride;
};



function left_freeride() {
  window.location.href = 'slalom.html';
}

function right_freeride() {
  window.location.href = 'on_piste.html';
}



function left_all_mountain() {
  window.location.href = 'touren_ski.html';
}

function right_all_mountain() {
  window.location.href = 'race.html';
}



function left_on_piste() {
  window.location.href = 'freeride.html';
}

function right_on_piste() {
  window.location.href = 'touren_ski.html';
}



function left_race() {
  window.location.href = 'all_mountain.html';
}

function right_race() {
  window.location.href = 'slalom.html';
}



function left_slalom() {
  window.location.href = 'race.html';
}

function right_slalom() {
  window.location.href = 'freeride.html';
}



function left_touren_ski() {
  window.location.href = 'on_piste.html';
}

function right_touren_ski() {
  window.location.href = 'all_mountain.html';
}
