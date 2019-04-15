const data=[
{

    name:'Ahsan',
    age:24,
    gender:'Male',
    lookingfor:'Female',
    location:'Srinagar, Jammu and Kashmir',
    image:'https://randomuser.me/api/portraits/men/12.jpg'
},
{

    name:'Neha',
    age:24,
    gender:'Female',
    lookingfor:'Male',
    location:'Srinagar, Jammu and Kashmir',
    image:'https://randomuser.me/api/portraits/women/15.jpg'
},
{

    name:'Junaid',
    age:24,
    gender:'Male',
    lookingfor:'Female',
    location:'Srinagar, Jammu and Kashmir',
    image:'https://randomuser.me/api/portraits/men/13.jpg'
},

{

    name:'Albeena',
    age:24,
    gender:'Female',
    lookingfor:'Male',
    location:'Srinagar, Jammu and Kashmir',
    image:'https://randomuser.me/api/portraits/women/14.jpg'
}];


const profiles=profileScroller(data);
nextProfile();



document.getElementById('next').addEventListener('click',nextProfile);


function nextProfile(){


const currentProfile=profiles.next().value;

if(currentProfile !==undefined){

    document.getElementById('profileDisplay').innerHTML=`

       <ul class="list-group">
       
       <li class="list-group-item">Name:${currentProfile.name}</li>
       <li class="list-group-item">Age:${currentProfile.age}</li>

       <li class="list-group-item">Location:${currentProfile.location}</li>

       <li class="list-group-item">looking For :${currentProfile.lookingfor}</li>

       </ul>
     `;


document.getElementById('imageDisplay').innerHTML=`

         <img src="${currentProfile.image}" class="img-responsive" >

`;


}
else{
    console.log(1);

    window.location.reload();
}





}


 function profileScroller(profiles){
  
     let nextIndex=0;


     return {

         next:function(){

            return nextIndex < profiles.length?
            {value:profiles[nextIndex++],done:false}:
            {done:true}
         }



     };



 }







