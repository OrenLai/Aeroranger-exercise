Vue.createApp({
  data() {
    return {
      message: 'Welcome to Aero Ranger ANPR Application',
      email:'',
      password:''
    }
  },methods:{

    anprLogin(){
      
      console.log(this.email, this.password);
      
      // use axios to make post request
      const url = 'https://dashboard.api-aeroranger.com/auth/login/'
      const params = new URLSearchParams();
      params.append('email', this.email);
      params.append('password',this.password);
      
      axios.post(url, params)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

  }
}).mount('#app')