function smoothScroll(target,duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
        if(startTime ===null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease_j(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0,run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease_j(t, b, c, d){
        t /= d/2;
        if (t < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
        t -= 2;
        return c/2 * (Math.sqrt(1 - t*t) + 1) + b;
    }

    requestAnimationFrame(animation);
}

var News = document.querySelector('#News');
var Track = document.querySelector('#Track');
var Statistics = document.querySelector('#Statistics');
var AreasAffected = document.querySelector('#AreasAffected');
var Home = document.querySelector('#Home');

News.addEventListener('click', function(){
    smoothScroll('#NewsColumn',1000);
});
Track.addEventListener('click', function(){
    smoothScroll('#TrackColumn',1000); 
});
Statistics.addEventListener('click', function(){
    smoothScroll('#StatisticsColumn',1000);  
});
AreasAffected.addEventListener('click', function(){
    smoothScroll('#AreasAffectedColumn',1000);
});
Home.addEventListener('click', function(){
    smoothScroll('#HomeColumn',1000);
});