
function classChange(id,toggleClass , remove){
				let element = document.getElementById(id);
				element.classList.toggle(toggleClass);
				element.classList.remove(remove);
	}

// lazy-Loading img start



let imgElements = document.querySelectorAll("img[data-src]");

const lazyLoadingImage = (entries, observer) => {

  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.src = entry.target.dataset.src;
    
      console.log(entry.target);
  
      // entry.target.classList.remove("lazy-img");  
  
  });
};
const lazyLoadingObserver = new IntersectionObserver(lazyLoadingImage, {
  threshold: 0.1, 
});
imgElements.forEach((img) => lazyLoadingObserver.observe(img));


      // lazy-Loading Video start//


let lazyVideo = document.querySelectorAll("video[data-src]");
const lazyLoadingVideo = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.src = entry.target.dataset.src;
    console.log(enty.target);
  });
};
const lazyVideoObserver = new IntersectionObserver(lazyLoadingVideo, {
  threshold: 0.1, 
});
lazyVideo.forEach((video) => lazyLoadingObserver.observe(video));
