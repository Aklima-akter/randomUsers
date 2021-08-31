const loadUser = () => {
    const url = `https://randomuser.me/api/?results=1`;
    fetch(url)
        .then(res => res.json())
        .then(data => showResult(data.results[0]))
}
loadUser();

const showResult = (user) => {
    const profile = document.getElementById('profile');
    const display = document.getElementById('display');
    const intro = document.getElementById('intro');

    profile.src = `${user.picture.large}`;
    display.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
    intro.innerText = 'Hi, My name is';

    document.getElementById('name').addEventListener('mouseover', () => {
        display.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
        intro.innerText = 'Hi, My name is';
    });

    document.getElementById('email').addEventListener('mouseover', () => {
        display.innerText = `${user.email} `;
        intro.innerText = 'My email address is';
    });

    document.getElementById('dob').addEventListener('mouseover', () => {
        display.innerText = `${user.dob.date.slice(0, 10)} `;
        intro.innerText = 'My birthday is';
    });

    document.getElementById('phone').addEventListener('mouseover', () => {
        display.innerText = `${user.phone}`;
        intro.innerText = 'My phone number is';
    });

    document.getElementById('address').addEventListener('mouseover', () => {
        display.innerText = `${user.location.street.number},${user.location.street.name},${user.location.city}`;
        intro.innerText = 'My address is';
    });

    document.getElementById('password').addEventListener('mouseover', () => {
        display.innerText = `${user.login.password} `;
        intro.innerText = 'My password is';
    });

}