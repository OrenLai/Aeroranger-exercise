Vue.createApp({
  data() {
    return {
      message: 'Welcome to Aero Ranger ANPR system',
      email: '',
      password: '',
      needLogin: true,
      myToken: '',
      loginError: '',
      item:{
        uploadImage:null,
        imageUrl:null
      },
      previewImage:null,    
      cameraImage:null,
      responseWithAlert: false,
      queryResponse:null,
      showResult:false
    }
  },methods:{

    async Login(){
      //login funtion , stpre the JWT token for the query later      
      
      //config params
      const url = 'https://dashboard.api-aeroranger.com/auth/login/'
      const params = new URLSearchParams();
      params.append('email', this.email);
      params.append('password',this.password);
      //make post request with the params
      try {
        const {data} = await axios.post(url, params)
        //switch the display from the login div to application div
        this.needLogin = false
        //store token
        this.myToken = 'Bearer '+data.id_token
      } catch (error) {
        // const errorMessage = error.response.data.error.message       
        this.loginError = error.response.data.error.message + ', please try again'
        console.log(loginError);
      }      
     },
    
    async submitQuery(){
    //send post request to the api endpoint with JWT token 
    // console.log('submit query');

      const url = 'https://dashboard.api-aeroranger.com/api/v1/plates/upload-pr'; 

      //config headers
      const headers = {
        'Authorization':this.myToken,
        'Content-Type' : 'multipart/form-data'        
      }
      //config form data
      let formdata = new FormData();
      formdata.append('image', this.item.uploadImage)
      formdata.append('latitude','0')
      formdata.append('longitude','0')

      try {
        const {data} = await axios.post(url, formdata, {headers:headers})        
         this.showResult = true

         if(data.alerts != null){
           console.log(data.alerts);
           this.responseWithAlert = true
           console.log(this.responseWithAlert);
         }

         console.log(this.showResult);
      } catch (error) {        
        const errMsg = error.response.data.error.message
        console.log(errMsg);
      }  
    },
    
    uploadImage(event) {                
    //select upload image and display preview before uploading
        if(event.target.files.length > 0){
          this.item.uploadImage = event.target.files[0]
          var src = URL.createObjectURL(event.target.files[0]);
          var preview = document.getElementById("upload-preview");
          preview.src = src;
        }
    }
    },    
}).mount('#app')