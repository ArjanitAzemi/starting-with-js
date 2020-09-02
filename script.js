/*


////////////////////////////////////////// VARIABLES

var name = "Arjanit";
var age = 18;
var job = "student"
var relationship = "single"

console.log("My name is " + name + " and I'am " + age + " years old. I'am a " + job + " and I'am " + relationship + ".");

var lastname = prompt("But what's his last name?");

console.log("My lastname is " + lastname + " so " + name + " " + lastname + ".");

////////////////////////////////////

var job = null;

job = prompt("What does Ari do?");

switch (job) {
    case 'teacher':
        console.log("Ari teaches kids.");
        break;
    case 'cop':
        console.log("Ari fights crime.");
        break;
    case 'driver':
        console.log("Ari drives a taxi.");
        break;
    default:
        console.log("Ari does something else.");
}


//////////////////////////////////IF STATEMENTS


ariHeight = prompt("What's Ari's height?");
xeniHeight = prompt("What's Xeni's height?");
muliHeight = prompt("What's Muli's height?");
ariAge = prompt("What's Ari's age?")
xeniAge = prompt("What's Xeni's age?")
muliAge = prompt("What's Muli's age?")

var scoreAri = ariHeight + 5 * ariAge;
var scoreXeni = xeniHeight + 5 * xeniAge;
var scoreMuli = muliHeight + 5 * muliAge;

if (scoreAri > scoreXeni && scoreAri > scoreMuli) {
    alert("Ari won the game with " + scoreAri + " points because Xeni had " + scoreXeni + " points and Muli had " + scoreMuli + " points!");
} else if (scoreXeni > scoreAri && scoreXeni > scoreMuli) {
    alert("Xeni won the game with " + scoreXeni + " points and Ari had " + scoreAri + " points and Muli had " + scoreMuli + " points!");
} else if (scoreMuli > scoreAri && scoreMuli > scoreXeni) {
    alert("Muli won the game with " + scoreMuli + " points and Ari had " + scoreAri + " points and Xeni had " + scoreXeni + " points!");
} else {
    alert("It's a draw!")
}


/////////////////////////////////////////////////FUNCTIONS


function calculateAge(yearOfBirth) {
    var age = 2020 - yearOfBirth;
    return age;
}

function yearsUntilR;etirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement >= 0) {
        console.log(name + " retires in " + retirement + " years.");
    } else {
        console.log(name + " has already retired.")
    }

}

yearsUntilRetirement("Ari", 2001);
yearsUntilRetirement("Quke", 1981);
yearsUntilRetirement("Feri", 1984);
yearsUntilRetirement("Nana", 1946);

/////////////////////////////////////////////ARRAYS

var names = ['Ari', 'Muli', 'Xeni'];
var years = new Array('2001', '2000', '2001');

names[2] = 'Emiri';

var Ari = ['Arjanit', 'Azemi', 2001, 'Student', false];

Ari.push('Black');
Ari.unshift('Mr.');
Ari.pop();
Ari.shift();

console.log(Ari);

alert(Ari.indexOf('Azemi'));


if (Ari.indexOf('Student') === -1) {
    console.log('Ari is NOT a teacher.')
}


//////////////OBJECTS

var ari = {
    name: 'Arjanit',
    lastname: 'Azemi',
    yearOfBirth: '2001',
    job: 'student',
    isMarried: 'flase'
};

console.log(ari.lastname);
console.log(ari['lastname']);

var xyz = 'job';
console.log(ari[xyz]);

ari.lastname = 'Azemi1';
ari['job'] = 'programmer';

console.log(ari);

var jane = new Object();
jane.name = 'Jane';
jane.lastname = 'Smith';
jane['yearOfBirth'] = 1945;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);


////////// VERSION 1.0


var ari = {
    name: 'Arjanit',
    lastname: 'Azemi',
    yearOfBirth: 2001,
    job: 'student',
    isMarried: 'flase',
    family: ['Xeni', 'Muli'],
    calculateTheAge: function (yearOfBirth) {
        return 2020 - this.yearOfBirth;
    }
};



console.log(ari.calculateTheAge());
var age = ari.calculateTheAge();
ari.age = age;

console.log(ari);



////////// VERSION 2.0

var ari = {
    name: 'Arjanit',
    lastname: 'Azemi',
    yearOfBirth: 2001,
    job: 'student',
    isMarried: 'flase',
    family: ['Xeni', 'Muli'],
    calculateTheAge: function (yearOfBirth) {
        this.age = 2020 - this.yearOfBirth;
    }
};

ari.calculateTheAge();
console.log(ari)


var mike = {
    yearOfBirth: 1981,
    calculateTheAge: function (yearOfBirth) {
        this.age = 2020 - this.yearOfBirth;
    }
};

mike.calculateTheAge();
console.log(mike)



////// for loop

for (var i = 0; i < 10; i++) {
    console.log(i);
}



var names = ['Arjanit', 'Amir', 'Festim', 'Emir'];

for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (var i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}

/////while loop

var names = ['Arjanit', 'Amir', 'Festim', 'Emir'];

var i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++;
}

//////break and continue

for (var i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }
    console.log(i);
}


function printFullAge(years) {
    var ages = [];
    var fullAges = [];

    for (var i = 0; i < years.length; i++) {
        ages[i] = 2020 - years[i];
    }

    for (i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old and is of full age');
            fullAges.push(true);
        } else {
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + 'years old and is NOT of full age');
            fullAges.push(false);
        }
    }

    return fullAges;

}
var years = [2001, 1981, 1984, 1945, 2004];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2013, 1912, 2008]);


*/





























