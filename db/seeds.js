const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');

mongoose.connect(dbURI, { useMongoClient: true });

const User = require('../models/user');
const Run = require('../models/run');
const Shape = require('../models/shape');

User.collection.drop();
Shape.collection.drop();
Run.collection.drop();

User.create([
  {
    username: 'mickeysausage',
    email: 'mickey1@mickey.com',
    stravaId: '21848',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    username: 'sallysaunders',
    email: 'sally1@sally.com',
    stravaId: '21848',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    username: 'egbertz',
    email: 'eggbert1@eggbert.com',
    stravaId: '21848',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    username: 'lucygoosey',
    email: 'lucy1@lucy.com',
    stravaId: '21848',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    username: 'daveyravey',
    email: 'davey1@davey.com',
    stravaId: '21848',
    password: 'password',
    passwordConfirmation: 'password'
  }
])
  .then(Users => {
    console.log(`${Users.length} new users added`);
    return Shape.create([
      {
        name: 'Rabbit',
        image: 'http://www.clker.com/cliparts/c/1/D/z/j/6/bunny-outline-md.png'
      },
      {
        name: 'Cat',
        image: 'https://i.pinimg.com/736x/b5/a5/fc/b5a5fcfe367dde3c94ae7cbb5cd5ebb2--free-applique-patterns-applique-templates.jpg'
      },
      {
        name: 'Bird',
        image: 'http://www.vidopedia.com/wp-content/uploads/2017/10/outline-drawings-of-birds-free-download-clip-art-free-clip-art-intended-for-simple-animal-outlines.jpg'
      },
      {
        name: 'Unicorn',
        image: 'http://gclipart.com/wp-content/uploads/2017/03/Unicorn-outline-0-ideas-about-unicorn-head-on-animal-head-decor.jpg'
      },
      {
        name: 'Bull',
        image: 'http://freevector.co/wp-content/uploads/2011/06/26121-cow-head-outline.png'
      },
      {
        name: 'Sea Horse',
        image: 'https://i.pinimg.com/736x/e2/8a/61/e28a6139ea98a64e5c2b82afb149a175--animal-templates-design-templates.jpg'
      }
    ])
      .then(Shape => {
        console.log(`${Shape.length} new shapes added`);
        return Run.create([
          {
            user: Users[1],
            rating: 3.5,
            date: '2017-12-13T18:00:00Z',
            shape: Shape[0],
            comments: [{
              content: 'Great run yo!',
              createdBy: Users[2]
            }, {
              content: 'Fantastic!',
              createdBy: Users[3]
            }]
          },
          {
            user: Users[0],
            rating: 4.5,
            date: '2017-12-14T18:00:00Z',
            shape: Shape[1],
            comments: [{
              content: 'You did great',
              createdBy: Users[3]
            }, {
              content: 'Brill',
              createdBy: Users[4]
            }]
          }
        ]);
      });



  })

  .then(Runs => console.log(`${Runs.length} runs created`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());