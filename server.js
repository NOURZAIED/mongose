const mongoose = require('mongoose');
const express = require('express');
const app = express();
const Person = require('./schema')
mongoose.set('strictQuery', true)


mongoose.connect("mongodb://127.0.0.1:27017/myapp", err => err? console.log(err): console.log('DB is connected ...'))

app.listen(5000, err =>err?  console.log(err): console.log('server is running.'))

// //create a Person
//  const newPerson = new Person({name:'Med', age:18, favoriteFoods:['Pizza', 'Pasta']})
// newPerson.save()

// app.listen(5000, (err) => {
//   err? console.log(err) : console.log('Server running on 5000 ...')
// }); 

// create person tab
// const people = [
//     { name: 'nour', age: 26, favoriteFoods: ['pizza', 'burgers'] },
//     { name: 'taher', age: 28, favoriteFoods: ['salad', 'sushi'] },
//     { name: 'mohamed', age: 20, favoriteFoods: ['steak', 'potatoes'] }
//   ];
  
//   Person.create(people, (error, docs) => {
//     if (error) {
//       console.error(error);
//     } else {
//       console.log('People created:', docs);
//     }
//   });


//model.find

// const name = 'nour';

// Person.find({ name: name }, (error, people) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log('People named ${name}:', people);
//   }
// });

//model.find.one

// const food = 'pizza';

// Person.findOne({ favoriteFoods: food }, (error, person) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log('Person who likes ${food}:', person);
//   }
// });

//model.find.byid

// const personId = '63e375b93458460dcb302ac9';

// Person.findById(personId, (error, person) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log('Person with id ${personId}:', person);
//   }
// });


//Updates by Running Find, Edit, then Save

// const personId = '63e375b93458460dcb302ac9';

// Person.findById(personId, (error, person) => {
//   if (error) {
//     console.error(error);
//   } else {
//     person.favoriteFoods.push('hamburger');
//     person.save((error) => {
//       if (error) {
//         console.error(error);
//       } else {
//         console.log('Person with id ${personId} updated successfully:', person);
//       }
//     });
//   }
// });

//New Updates on a Document Using model.findOneAndUpdate()
// const personName = 'taher';

// Person.findOneAndUpdate(
//   { name: personName },
//   { age: 20 },
//   { new: true },
//   (error, updatedPerson) => {
//     if (error) {
//       console.error(error);
//     } else {
//       console.log('Person with name "${personName}" updated successfully:', updatedPerson);
//     }
//   }
// );

//Delete One Document Using model.findByIdAndRemove

// const personId = '63e375b93458460dcb302ac9';

// Person.findByIdAndRemove(personId, (error, removedPerson) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log('Person with _id "${personId}" removed successfully:', removedPerson);
//   }
// });

// Delete Many Documents with model.remove()

// Person.remove({ name: 'taher' }, (error, removedPeople) => {
//     if (error) {
//       console.error(error);
//     } else {
//       console.log('People with name "taher" removed successfully:', removedPeople);
//     }
//   });

//Chain Search Query Helpers to Narrow Search Results
// Person.find({ favoriteFoods: 'burrito' })
//   .sort({ name: 1 })
//   .limit(2)
//   .select({ age: 0 })
//   .exec((error, foundPeople) => {
//     if (error) {
//       console.error(error);
//     } else {
//       console.log('People who like burritos:', foundPeople);
//     }
//   });




