// Code your orbitCircumference function here:
function orbitCircumference(radius = 2000) {
  return Math.round(2 * Math.PI * radius);
}

// Code your missionDuration function here:
function missionDuration(revolutions, orbitRadius = 2000, orbitSpd = 28000) {
  return Math.round((revolutions * orbitCircumference(orbitRadius) / orbitSpd) * 100) / 100;
}

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arr) {
  let entry = arr[0];
  let o2 = arr[0].o2Used(1);

  for (let i = 0; i < arr.length; i++) {
    if (o2 > arr[i].o2Used(1)) {
      o2 = arr[i].o2Used(1);
      entry = arr[i];
    }
  }
  return entry;
}

// Code your oxygenExpended function here:
function oxygenExpended(obj, orbitRadius = 2000, orbitSpd = 28000) {
  let hours = missionDuration(3, orbitRadius, orbitSpd)
  let o2 = Math.round(obj.o2Used(hours) * 1000) / 1000;

  return `${obj['name']} will perform the spacewalk, which will last ${hours} hours and require ${o2} kg of oxygen.`
}

// Candidate data & crew array.
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let crew = [candidateA,candidateC,candidateE];

let revolutions = 5;
let radius = 2000;
let speed = 28000;
let cadet = selectRandomEntry(crew);

console.log(`The mission will travel ${orbitCircumference(radius) * revolutions} km around the planet, and it will take ${missionDuration(revolutions, radius, speed)} hours to complete.`);
console.log(oxygenExpended(cadet, radius, speed));