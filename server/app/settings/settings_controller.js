// ~> Controller
// ~A Scott Smereka

module.exports = function(app, db, config) {

  var fox     = require('foxjs'),
    sender    = fox.send,
    auth      = fox.authentication,
    model     = fox.model,
    _         = require('underscore'),
    accessToken = fox.accessToken,       // Fox methods for authorizing users based on access tokens.
    Settings  = db.model('Settings');

  var updateRoute = model.updateRoute(),
      createRoute = model.createRoute(),
      removeRoute = model.removeRoute;

  // Load user roles used for authentication.
  var adminRole = auth.queryRoleByName("admin");

  var allowAdmin = [                                   // Authenticate a call allowing only the super admin or higher roles.
    accessToken.allow,
    auth.allowRolesOrHigher([adminRole])
  ];


  /* ************************************************** *
   * ******************** Routes and Permissions
   * ************************************************** */

  app.get('/settings.:format', allowAdmin, getSettings);
  app.put('/settings.:format', allowAdmin, updateSettings);
  app.post('/settings.:format', allowAdmin, createSettings);
  app.delete('/settings.:format', allowAdmin, deleteSettings);


  /* ************************************************** *
   * ******************** Route Methods
   * ************************************************** */

  function getSettings(req, res, next) {
    Settings.get(function(err, settings) {
      if(err) {
        next(err);
      } else {
        sender.setResponse(settings || {}, req, res, next);
      }
    });
  }

  function updateSettings(req, res, next) {
    console.log("Update")
    Settings.get(function(err, settings) {
      if(err) {
        next(err);
      } else if( ! settings || settings._id === undefined) {
        next(new Error("Settings has not yet been created."));
      } else {
        req.params.id = settings._id;
        updateRoute(req, res, next);
      }
    });
  }

  function createSettings(req, res, next) {
    //return next();
    Settings.get(function(err, settings) {
      if(err) {
        next(err);
      } else if( ! settings) {
        createRoute(req, res, next);
      } else  {
        console.log("Settings Object:  ");
        console.log(settings);
        next(new Error("Settings has already been created."));
      }
    });
  }

  function deleteSettings(req, res, next) {
    Settings.get(function(err, settings) {
      if(err) {
        next(err);
      } else if(settings) {
        req.queryResult = settings;
        removeRoute(req, res, next);
      } else {
        sender.setResponse(sender.createSuccessObject(true), req, res, next);
      }
    });
  }

};
