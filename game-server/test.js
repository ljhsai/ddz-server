var foo = function(arg1, arg2)  {
  console.log(arg1, arg2);
};

var bar = function(callback) {
  callback(3);
};
//
//foo(1,2);
//
//bar(foo.bind(null, 4, 5));
//
//
//var dt = new Date();
//
//var s = ["one", "two", "three"];
//
//var i = s.indexOf("twox");
//
////delete s[i];
//s.splice(i, 1);
//
//console.log(s, i);
//
//for (var index in s) {
//  console.log(index, s[index]);
//}
//
//var mongoose = require('mongoose');
//
//mongoose.connect('mongodb://192.168.0.240/test');
//
//console.log('after connected');
//
//var userSchema  =mongoose.Schema({
//  name: String,
//  password: String,
//  ex: Number
//});
//
//var User = mongoose.model('User', userSchema);
//
////var u = new User({name: 'edwardzhou', password: '123456'});
////
////u.save();
//User.find({name: 'edwardzhou'}, function(err, docs) {
//  for(var index in docs) {
//    if (index > 0) {
//      var user = docs[index];
//      user.remove();
//    } else {
//      var user = docs[index];
//      console.log(user, user instanceof User);
//      user.ex = 1;
//      user.save();
//    }
//  }
//});
//
//var MongoClient = require('mongodb').MongoClient;
//
////MongoClient.connect("mongodb://dev/mydb", {}, function(err, db) {
////  var cursor = db.collection('gameRooms').find({}).limit(1);
////  cursor.each(function(err, doc){
////    console.log(doc);
////  });
////  console.log("after cursor.each")
////});
//
//var now = new Date();
//console.log(now);
//console.log(now - dt);

var Combinatorics = require('js-combinatorics').Combinatorics;

var CardUtil = require('./app/util/cardUtil');

CardUtil.buildCardTypes();
var cc = 0;
for( var cardId in CardUtil.allCardTypes) {
  console.log(cardId);
  cc ++;
}

//var comb = CardUtil.getValidIdCharsCombination(0, 1, 2, false, true);
//console.log(comb);

console.log(CardUtil.allCardTypes['wW'])

var PokeCard = require('./app/domain/pokeCard');
var allPokes = PokeCard.getAllPokeCards();
//console.log(allPokes);

var pokes = PokeCard.shuffle();
var pp;
console.log('--------------shuffled------------');
//console.log(pokes);
pp = pokes.slice(3, 5);
console.log(CardUtil.pokeCardsToIdChars(CardUtil.sortPokeCards(pp)));
console.log(CardUtil.getCardType(pp));
console.log('--------------sorted------------');
//console.log(CardUtil.sortPokeCards(pokes))
CardUtil.sortPokeCards(pokes)

pp = pokes.slice(3, 7);
console.log(CardUtil.pokeCardsToIdChars(pp));
console.log(CardUtil.getCardType(pp));
