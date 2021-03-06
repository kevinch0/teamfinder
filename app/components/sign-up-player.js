import Ember from 'ember';

export default Ember.Component.extend({
  credentials: Ember.inject.service(),
  signUpPlayer: false,
  actions: {
    signUpFormShow() {
      this.set('signUpPlayer', true);
    },
    saveSignUpPlayer() {
      var paramsplayer = {
        name: this.get('name'),
        sex: this.get('sex'),
        loginid: this.get('loginid'),
        loginpassword: this.get('loginpassword'),
        description: this.get('description'),
        build: this.get('build'),
        age: this.get('age'),
        location: this.get('location'),
        email: this.get('email'),
        joinedteams: []
      };
      this.set('signUpPlayer', false);
      this.sendAction('saveSignUpPlayer', paramsplayer);
      this.send('saveNewPlayer');
    },
    saveNewPlayer() {
      this.get('credentials').newPlayer();
      alert("Your account has now been created, please sign in below");
    }
  }
});
