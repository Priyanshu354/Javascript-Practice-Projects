const url = "https://api.github.com/users";
const SubmitBtn = document.querySelector('#subBtn');
const ProfileBtn = document.querySelector('#ProfileBtn');
const userInput = document.querySelector('#userInput');
const profileConatiner = document.querySelector('.profileConatiner');
const loading = document.querySelector('.loading');

const generate = (profile) => {
    return (
        `
        <div class="Profile-box">
            <div class="topsection">
                <div class="profile">
                    <div class="image"> 
                        <img src="${profile.avatar_url}" alt="Avatar">
                    </div>
                    <div class="detail">
                        <h1>${profile.name}</h1>
                        <h3>@${profile.login}</h3>
                    </div>
                </div>
                <div class="checkprofileBtn">
                <a href="${profile.html_url}">
                <button id="ProfileBtn">Check Profile</button>
            </a>
                </div>
            </div>
            <div class="bottomsection">
                <h1>About</h1>
                <h3>${profile.bio}</h3>
                <div class="influence">
                    <div class="followers">
                        <h2>Followers</h2>
                        <h5>${profile.followers}</h5>
                    </div>
                    <div class="following">
                        <h2>Following</h2>
                        <h5>${profile.following}</h5>
                    </div>
                    <div class="repo">
                        <h2>Repoes</h2>
                        <h5>${profile.public_repos}</h5>
                    </div>
                </div>
            </div>
        </div>
        `
    );
}

const fetchProfile = async () => {
    const Username = userInput.value;
    loading.innerText = "Loading...";

    try {
        const res = await fetch(`${url}/${Username}`);
        const data = await res.json();

        if(data.bio){
            loading.innerText = "";
            profileConatiner.innerHTML = generate(data);
        }
        else{
            loading.innerHTML = data.message;
            loading.style.color = "red";
        }
        console.log(data); 
    } catch (error) {
        console.error(error);
        loading.innerText = "";
    }
}

SubmitBtn.addEventListener('click', fetchProfile); 
