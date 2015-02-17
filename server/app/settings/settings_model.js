// ~> Model

module.exports = function(app, db, config) {

  var fox   = require("foxjs"),
      model = fox.model,
      hash  = fox.crypto,
      log   = fox.log;

  var revokedApplicationUrl = config.server.uri+"/applications/:applicationId/revoke.json";

  var Schema      = db.Schema,              // Mongoose schema object for MongoDB documents.
      ObjectId    = Schema.ObjectId;        // Object ID used in mongoose schemas

  var Settings = new Schema({
    database: {
      initialized: { type: Boolean, default: false }
    },
    demo: {
      enabled: { type: Boolean, default: false }
    },
    shaid: {
      enabled: { type: Boolean, default: false },
      token: { type: String, default: hash.generateHashedKeySync(24) },
      revokeUrl: { type: String, default: revokedApplicationUrl }
    }
  });


  /* ************************************************** *
   * ******************** Static Methods
   * ************************************************** */

  /**
   * Get the settings object or a new empty object.
   * @param cb
   */
  Settings.statics.get = function(cb) {
    var Settings = this;

    Settings.find({}, function(err, settings) {
      if(err) {
        cb(err);
      } else if(! settings || settings.length === 0) {
        cb(undefined, undefined);
      } else {
        cb(undefined, settings[0]);
      }
    });
  };


  /* ************************************************** *
   * ******************** CRUD Override Methods
   * ************************************************** */

  /* Enabling CRUD will automatically take care of
   * update, and delete methods for the object. However
   * you can still add your own custom functionality
   * here, by overriding the default methods.
   *
   * In addition to overriding you can add more methods
   * that CRUD will automatically use such as sanitize.
   */

  /**
   * Strip out secret information that should not be seen
   * outside of this server.
   */
  Settings.methods.sanitize = function() {
    return this;
  };


  /* ************************************************** *
   * ******************** Plugins
   * ************************************************** */

  // Enable additional functionality through plugins
  // you have written or 3rd party plugins.

  // Add addition fields and methods to this schema to
  // create, read, update, and delete schema objects.
  Settings.plugin(model.crudPlugin);


  /* ************************************************** *
   * ******************** Export Schema(s)
   * ************************************************** */

  db.model('Settings', Settings);

};