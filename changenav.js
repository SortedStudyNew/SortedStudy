

if(localStorage.getItem('emailVerified')){
    const signup = document.getElementById('singup')
    signup.style.display='none'
    const placephoto = document.getElementById('logined')
    console.log(placephoto)
    placephoto.classList.remove('ali')
    placephoto.classList.add('dropdown')
    placephoto.innerHTML=`
    <a class="nav-link dropdown-toggle text-white " href="#" role="button" data-bs-toggle="dropdown"
    aria-expanded="true">
    <img src="" alt="" class="UserProfile" id="UserProfiles">
  </a>
  <ul class="dropdown-menu ">
    <li><a class="dropdown-item " id="name"></a></li>
    <li><a class="dropdown-item " id="logout">Logout</a></li>
  </ul>`
  const UserProfile = document.getElementById('UserProfiles')
  const Username = document.getElementById('name')
 UserProfile.src=`${localStorage.getItem('photourl')}`
 Username.innerHTML=`${localStorage.getItem('name')}`
}
const logout = document.getElementById('logout')
logout.addEventListener('click',(e)=>{
    e.preventDefault()
    localStorage.clear();
    window.location.replace('https://sortedstudynew.github.io/SortedStudy/');
})