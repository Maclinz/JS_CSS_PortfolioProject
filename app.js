;(function () {
  document.addEventListener('click', function (e) {
    if (e.target.matches('.control')) {
      document.querySelector('.active-btn').classList.remove('active-btn')
      e.target.classList.add('active-btn')
      document.querySelector('.active').classList.remove('active')
      document.getElementById(e.target.dataset.id).classList.add('active')
      return
    }
    if (e.target.matches('.theme-btn')) {
      document.body.classList.toggle('light-mode')
      return
    }
  })
})()
