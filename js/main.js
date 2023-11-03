const share = document.querySelector('.share')
const articleFooter = document.querySelector('.article__footer')

const showSocialShare = () => {
	articleFooter.classList.toggle('active')
}

share.addEventListener('click', showSocialShare)
