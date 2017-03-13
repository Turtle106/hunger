function story() {
    tributesLiving = [];
    tributesLiving.push(document.getElementById('m1').value)
    tributesLiving.push(document.getElementById('f1').value)
    tributesLiving.push(document.getElementById('m2').value)
    tributesLiving.push(document.getElementById('f2').value)
    tributesLiving.push(document.getElementById('m3').value)
    tributesLiving.push(document.getElementById('f3').value)
    tributesLiving.push(document.getElementById('m4').value)
    tributesLiving.push(document.getElementById('f4').value)
    tributesLiving.push(document.getElementById('m5').value)
    tributesLiving.push(document.getElementById('f5').value)
    tributesLiving.push(document.getElementById('m6').value)
    tributesLiving.push(document.getElementById('f6').value)
    tributesLiving.push(document.getElementById('m7').value)
    tributesLiving.push(document.getElementById('f7').value)
    tributesLiving.push(document.getElementById('m8').value)
    tributesLiving.push(document.getElementById('f8').value)
    tributesLiving.push(document.getElementById('m9').value)
    tributesLiving.push(document.getElementById('f9').value)
    tributesLiving.push(document.getElementById('m10').value)
    tributesLiving.push(document.getElementById('f10').value)
    tributesLiving.push(document.getElementById('m11').value)
    tributesLiving.push(document.getElementById('f11').value)
    tributesLiving.push(document.getElementById('m12').value)
    tributesLiving.push(document.getElementById('f12').value)
    
    document.write("<link rel='stylesheet' type='text/css' href='hunger.css'>");
    console.log("Log0: ", tributesLiving)
    for (i=1; i <= 14; i++) {
        var v = Math.floor(Math.random()*tributesLiving.length)
        var randTribute = tributesLiving[v];
        var randTribute2 = tributesLiving[Math.floor(Math.random()*tributesLiving.length)];
        var randTribute3 = tributesLiving[Math.floor(Math.random()*tributesLiving.length)];
        
        while (randTribute === randTribute2) {
            var randTribute2 = tributesLiving[Math.floor(Math.random()*tributesLiving.length)];
            console.log("Loop2")
        }
        
        while (randTribute === randTribute3 || randTribute3 === randTribute2) {
            var randTribute3 = tributesLiving[Math.floor(Math.random()*tributesLiving.length)];
        }
        var immediateEventsDeath = [" is shot by " + randTribute2 +  " with a bow", " is blown skyhigh by the capital", " is stabbed with a sword", " is impaled by a thrown dagger", " is strangled by " + randTribute2, " is killed by a wild charmander", " is viciously decapitated by " + randTribute2];
    
        var immediateEvents = [" is nearly killed by " + randTribute2, " finds a stream and collects water", " grabs a backpack and runs", " runs from the center", " evades the bloodbath", " grabs a dagger and runs", " teams with " + randTribute2 + " and " + randTribute3, " hides near the action watching", " runs screaming", " narrowly escapes with a bow and a couple dozen arrows"]
        var randomNumberBetween0and3 = Math.floor(Math.random() * 4);
        var item = immediateEvents[Math.floor(Math.random()*immediateEvents.length)];
        var death = immediateEventsDeath[Math.floor(Math.random()*immediateEventsDeath.length)]; 
        if (randomNumberBetween0and3 === 3) {
            document.write(randTribute + death + "<br>");
            tributesLiving.splice(v, 1);
        } else {
            document.write(randTribute + item + "<br>");
        }
    }

    
        
    console.log("Log1: ", tributesLiving)
    while (tributesLiving.length > 1) {console.log("I made it!")
         v = Math.floor(Math.random()*tributesLiving.length)
         randTribute = tributesLiving[v];
         randTribute2 = tributesLiving[Math.floor(Math.random()*tributesLiving.length)];
        while (randTribute === randTribute2) {
            var randTribute2 = tributesLiving[Math.floor(Math.random()*tributesLiving.length)];
        }
    
    var mortalReminders = [" falls off a cliff", " eats poisonous berries", " is shot by " + randTribute2 +  " with a bow", " burns in a fire", " dies in an explosion", " is trampled by genetically altered rabid squirrels", " eats poisonous mushrooms", " unknowingly walks into a giant venus fly trap thinking it's a cave", " dies of sleep deprevation", " dies of thirst", " dies of infection", " walks into a high voltage forcefield"];
    var events = [" is sent medical supplies from an unknown sponsor", " is nearly killed by " + randTribute2, " finds a stream and collects water", " spies on " + randTribute2, " hides", " steals food from " + randTribute2, " befriends an army of squirrels", " catches a wild geodude", " finds a mech suit", " questions life", " eats pie", " resorts to cannibalism", " talks to a butterfly", " sleeps in a tree", " gets on the bad side of the capital", " starts hallucinating", " wonders what comes after life", " makes a makeshift spear", " treats wounds", " recieves a hatches from an unknown sponsor", " says: " + randTribute2 + ", there's a forcefield back there"];
        var randomNumberBetween0and6 = Math.floor(Math.random() * 7);
        var item = events[Math.floor(Math.random()*events.length)];
        var death = mortalReminders[Math.floor(Math.random()*mortalReminders.length)];
        if (randomNumberBetween0and6 === 3) {
            document.write(randTribute + death + "<br>");
            tributesLiving.splice(v, 1);
        } else {
            document.write(randTribute + item + "<br>");
        }
    
    
        if (tributesLiving.length === 1) {
            document.write(tributesLiving + " wins!");
        }
	console.log("<A HREF="javascript:history.go(0)">REFRESH</A>");
    
    }
    
}
  
    
    
    
    
    
    
    
    