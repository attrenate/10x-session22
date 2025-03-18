// 1. Pokémon Battle – Function Basics

function compareAttack(pokemon1 = 'pikachu', attack1, pokemon2 = 'Charizard', attack2){
    if(attack1 > attack2){
        console.log('Pikachu is stronger');
    } else if(attack1 < attack2){
        console.log('Charizard is stronger');
    }
}
compareAttack("Pikachu", 55, "Charizard", 84);

// 2. Hogwarts Spell Casting – Function Parameters

function castSpell(spell, wizard){
    return wizard + ' casts ' + spell;
}

console.log(castSpell('Expelliarmus', 'Hermione')); 

// 3. One Piece Bounty Calculator – Return Values

function calculateBounty(currentBounty, increase){
    return currentBounty + increase;
}

console.log(calculateBounty(1500000000, 500000000));

// 4. Jedi Training – Default Parameters

function trainJedi(name, strength = 50){
    console.log('Jedi ' + name + ' has ' + strength + ' power.');
}

console.log(trainJedi('Luke', 100));
console.log(trainJedi('Rey'));

// 5. Gollum’s Precious – String Manipulation

function gollumSays(phrase){
    return phrase + '... ' + phrase + '... ' + phrase + '...'
}

console.log(gollumSays('My precious'));

// 6. Super Mario Power-Up – Function Expressions

function powerUp(x){
    let jumpHeight = 44;
    return x * jumpHeight;
}

console.log(powerUp(5));

// 7. Naruto’s Shadow Clone Jutsu – Arrow Functions

const shadowClone = (count) => count * 5;

console.log(`${shadowClone(10)} clones created!`);


// 8. Sorting the Sorting Hat – Callback Functions

function sortStudent(name, callback) {
    console.log(`Sorting ${name} into...`);
    console.log(callback());
}


sortStudent("Harry", () => "Gryffindor");
