const router = require('express').Router();
const { User, BookingInfo } = require('../models');
const { Asia, Africa, Australia, South, Europe } = require('../models');
const { North } = require('../models');
const withAuth = require('../utils/auth');

// Load HOME PAGE first, option
  // router.get('/', async (req, res) => {
  //   res.render('homepage');
  //   });


// sends them to log in first
    router.get('/', withAuth, async (req, res) => {
      try {
        const userData = await User.findAll({
          attributes: { exclude: ['password'] },
          order: [['name', 'ASC']],
        });
    
        const users = userData.map((project) => project.get({ plain: true }));
    
        res.render('homepage', {
          users,
          // Pass the logged in flag to the template
          logged_in: req.session.logged_in,
        });
      } catch (err) {
        res.status(500).json(err);
      }
    });

    router.get('/login', (req, res) => {
      // If a session exists, redirect the request to the homepage
     router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});
      res.render('login');
    });

// Display Homepage of Site
  router.get('/homepage', async(req, res) => {
  res.render('homepage');
    });

// Display Book Now Route
  router.get('/booking/book', async (req, res) => {
  res.render('booknow');
  });
     
  //end session after booking
  // router.get('/end', async (req, res) => {
  //   res.render('end');
  //   });

  router.get('/end', async (req, res) => {
      const confirmData = await BookingInfo.findAll().catch((err) => {
       res.join(err);
    });
     const booking = confirmData.map((confirm) => confirm.get({ plain: true }));
     res.render('end', { booking });
     console.log('BOOOKINGGGGGGGGGGGGG!!!!', booking)
       }); 

    //check to see if created account prior to booking, otherwise, create an account
router.get('/logout',async (req, res) => {
 try {res.render("logout");

} catch (err){
  console.log ('err')
  res.status(500).json(err)
}
});


// Display destinations by continents 
    //Africa
      router.get('/africa', async (req, res) => {
         const africaData = await Africa.findAll().catch((err) => {
          res.join(err);
       });
        const destination = africaData.map((africa) => africa.get({ plain: true }));
        res.render('africa', { destination });
        console.log('ITS WORKING!!!!', destination)
          }); 
    //Asia
      router.get('/asia', async (req, res) => {
        const asiaData = await Asia.findAll().catch((err) => {
          res.join(err);
        });
        const destination = asiaData.map((asia) => asia.get({ plain: true }));
        res.render('africa', { destination });
        console.log('ITS WORKING!!!!', destination)
          }); 

    //Australia
      router.get('/australia', async (req, res) => {
        const australiaData = await Australia.findAll().catch((err) => {
          res.join(err);
        });
        const destination = australiaData.map((australia) => australia.get({ plain: true }));
        res.render('africa', { destination });
        console.log('ITS WORKING!!!!', destination)
          }); 
    
    //South America
     router.get('/south', async (req, res) => {
       const southData = await South.findAll().catch((err) => {
           res.join(err);
            });
       const destination = southData.map((south) => south.get({ plain: true }));
       res.render('africa', { destination });
       console.log('ITS WORKING!!!!', destination)
              }); 
      
    //Europe
      router.get('/europe', async (req, res) => {
        const europeData = await Europe.findAll().catch((err) => {
          res.join(err);
        });
        const destination = europeData.map((europe) => europe.get({ plain: true }));
        res.render('africa', { destination });
        console.log('ITS WORKING!!!!', destination)
          }); 
    
    //North America

      router.get('/north', async (req, res) => {
        const northData = await North.findAll().catch((err) => {
          res.join(err);
        });
        const destination = northData.map((north) => north.get({ plain: true }));
        res.render('africa', { destination });
        console.log('ITS WORKING!!!!', destination)
          }); 

         
module.exports = router;




    
     







