(function() {
    var names = ["Marry", "John", "Cristiano", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Henry"];
    for (name in names) {
      name = names[name];
      if (name[0].toLowerCase()=='j') {
        byeSpeaker.speak(name);
      } else {
        helloSpeaker.speak(name);
      }
    }
  })();