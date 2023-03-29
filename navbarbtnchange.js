const UserProfile = document.getElementById('UserProfiles')
const Username = document.getElementById('name')
const logout = document.getElementById('logout')
if(localStorage.getItem('emailVerified')){
    UserProfile.src=`${localStorage.getItem('photourl')}`
    Username.innerHTML=`${localStorage.getItem('name')}`
}

logout.addEventListener('click',(e)=>{
    e.preventDefault()
    localStorage.clear();
    window.location.replace('https://sortedstudynew.github.io/SortedStudy/');
})