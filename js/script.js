const wrapper = document.querySelector('.wrapper')
const parallaxList = document.querySelector('.parallax__list')
const parallaxItems = parallaxList.querySelectorAll('li')

for (const item of parallaxItems) item.classList.add('layer')

window.onload = () => {
	wrapper.classList.add('active')
	const parallax = new Parallax(parallaxList)
}