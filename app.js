Vue.createApp({
  data() {
    return {
      message: 'Welcome to Aero Ranger ANPR Application',
      email: '',
      password: '',
      needLogin: true,
      myToken: '',
      loginError: ''
    }
  },methods:{

    async anprLogin(){
      
      // console.log(this.email, this.password);
      
      //config params
      const url = 'https://dashboard.api-aeroranger.com/auth/login/'
      const params = new URLSearchParams();
      params.append('email', this.email);
      params.append('password',this.password);
      //make post request with the params
      try {
        const {data} = await axios.post(url, params)
        console.log(data.id_token);
        //switch the display from the login div to application div
        this.needLogin = false
        //store token
        this.myToken = 'Bearer '+data.id_token
        console.log(this.myToken);
      } catch (error) {
        // const errorMessage = error.response.data.error.message       
        this.loginError = error.response.data.error.message + ', please try again'
        console.log(loginError);
      }      
     },

    swapFunction(){
      this.needLogin = ! this.needLogin
    }

    },    
}).mount('#app')