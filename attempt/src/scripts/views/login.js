var tplLogin = require('../templates/login.string');

SPA.defineView('login',{
  html: tplLogin,
  plugins:['delegated'],
  bindActions:{
    'tap.back':function(){
      this.hide();
    },
    'goto.set':function (e,data) {
      this.modules.content.launch(data.tag);
    }
  }
});
