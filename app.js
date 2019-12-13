const navButton = document.querySelector('.nav-button');
const navOpen = document.querySelector('.nav-open');

//basic tween syntax
/* TweenLite.to(objecttoanimate,timeofanimation,animation properties)*/

// const tween = TweenLite.to(".cover",1,{
//     width:"40%"
// }); for single animation

//create a timeline of animations

//animation for bigger screens
const t1 = new TimelineLite({paused:true,reversed:true});

t1.to('.cover',1,{
    width:'60%',
    ease:Power2.easeOut
})
.to('nav',
    1,
    {
    height:'100%',
    ease:Power2.easeOut
},
'-=0.5')
.fromTo('.nav-open',1,{
    opacity:'0',
    x:50,
    ease:Power2.easeOut
},
{
    opacity:'1',
    x:0,
    onComplete:function(){
        navOpen.style.pointerEvents ='auto';
        console.log('Finished');
    }
});

//animation for mobile screens
const t2 = new TimelineLite({paused:true,reversed:true});

t2
.to('nav',
    1,
    {
    height:'100%',
    ease:Power2.easeOut
})
.fromTo('.nav-open',1,{
    opacity:'0',
    x:70,
    ease:Power2.easeOut
},
{
    opacity:'1',
    x:40,
    onComplete:function(){
        navOpen.style.pointerEvents ='auto';
        console.log('Finished');
    }
});


//triggger animation on clicking navButton

navButton.addEventListener('click',(e) => {
    if(t1.isActive() || t2.isActive()){ //stop user from clicking if animation is going on(ie.fast multiple clicks)
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }
    console.log(screen.width);
    if(screen.width<='1026')
        toggleTween(t2);
    else
        toggleTween(t1);    
});

function toggleTween(tween) {
    tween.reversed()?tween.play():tween.reverse();
}