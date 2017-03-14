import Ember from 'ember';

export default Ember.Component.extend({
  credentials: Ember.inject.service(),
  openMessageForm: false,
  actions: {
    MessageFormShow() {
      this.set('openMessageForm', true);
    },
    sendMessage() {
     var params = {
       name: this.get('credentials.name'),
       message: this.get('message'),
       time: this.get('time'),
       team: this.get('team')
     };
     debugger;
     this.set('openMessageForm', false);
     this.sendAction('sendMessage', params);
   }
  }
});
