newspaperTracker.factory('BeatsFactory', function BeatsFactory(){
  var factory = {};
  factory.beats = [];
	factory.addBeat = function() {
    factory.beats.push({ title: factory.beatTitle, id: factory.beats.length + 1, reporters: [] });
    factory.beatTitle = null;
	};
  return factory;
});