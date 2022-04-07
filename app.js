Vue.createApp({
  data() {
    return {
      message: 'Welcome to Aero Ranger ANPR system',
      //login part variables 
      email: '',
      password: '',
      needLogin: true,
      myToken: '',
      loginError: '',
      // upload part variables 
      item:{
        uploadImage:null,
        imageUrl:null
      },
      previewImage:null,    
      cameraImage:null,
      //result display variables
      showResult:false,
      responseWithAlert: false,
      queryError:false,
      queryErrorMsg:"",
      //anpr info
      make:"",
      model:"",
      color:"",
      plate:"",
      imageUrl:""

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
         this.queryError = false
        // check vehicle hit/alert or vehicle read
         if(data.alerts != null){
           this.responseWithAlert = true
           console.log(this.responseWithAlert);
         }
         // store relevent data for display         
        this.make = data.vehicleMake
        this.model = data.vehicleModel
        this.color = data.vehicleColour
        this.plate = data.plate
        this.imageUrl = data.image

      } catch (error) {     
        this.showResult = true   
        if (error.response){
          this.queryError = true
          this.queryErrorMsg = error.response.data.error 
          console.log(this.queryError);
          console.log(this.queryErrorMsg);
        }           
      }  
    },
    
    uploadImage(event) {                
    //select upload image and display preview before uploading
        if(event.target.files.length > 0){
          this.item.uploadImage = event.target.files[0]
          var src = URL.createObjectURL(event.target.files[0]);
          //use DOM object to add src to the img element
          var preview = document.getElementById("upload-preview");
          preview.src = src;
        }
    }
  },    
}).mount('#app')