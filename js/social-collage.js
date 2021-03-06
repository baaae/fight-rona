
/** The array above we may substitute with a jquery/ajax/http
 *  request. It may be easier to use the array... especially
 *  if we are going to do the ChangePosts() function. **/
const some_social_posts = [
    /** Example: **/
    /*{
        // Any image really, it could be the posters profile pic or
        // it could be some image that they put in the post
        'img': 'https://www.dummyimage.com/50x50',
        // This can replace 'post-title' if we don't have the title
        'name': 'Someone', // If there is a title just put it here
        'content': 'filler text, filler text, filler text',
        // We can send them to the post if they want
        'url': 'https://www.facebook.com/somepost'
        
    }*/
    {
        'img':      'https://scontent-den4-1.xx.fbcdn.net/v/t1.0-0/p235x350/15203359_10153924511386333'+
                    '_740904405255521843_n.jpg?_nc_cat=103&_nc_sid=13bebb&_nc_oc=AQnD94pJgbW2ASyTWaun_'+
                    'i2XIj6C7gjs2TEy0HD0nFwKRUia5IxSN58r_tBUhmbcRamt-UQjI2Y17k1nKh4qmjXF&_nc_ht=sconte'+
                    'nt-den4-1.xx&_nc_tp=6&oh=36531deb44fde93f24038efbecc21d96&oe=5F2A9A5B',
        'name':     'Kirk Fritz',
        'content':  'Here is my take regardless of the possible root cause of this entire thing:<br>'+
                    'I will wear a mask in public, for ME and for YOU. I want you to know that I am '+
                    'educated enough to know that, although I have been very careful, I could be '+
                    'asymptomatic and still give you the virus. I don’t “live in fear” of the virus-- '+
                    'I just want to be a part of the solution, not the problem. I don’t feel the '+
                    '“government is controlling me”; I feel like I’m being a contributing adult to '+
                    'society and I want to teach children the same. I want them to grow up as I did '+
                    'knowing that the world doesn’t revolve around me... that it’s not all about me '+
                    'and my personal comfort...that if we all could live with the consideration of '+
                    'others in mind, this whole world would be a much better place. Wearing a mask '+
                    'doesn’t make me weak, scared, stupid or even “controlled”; it makes me considerate. '+
                    'I want to keep myself, my family and loved ones, my coworkers, and even strangers '+
                    'as safe as possible.<br><a href=\"https://www.facebook.com/hashtag/doingmypart\">'+
                    '#DoingMyPart</a> <a href=\"https://www.facebook.com/hashtag/payitforward\">#PayIt'+
                    'Forward</a> <a href=\"https://www.facebook.com/hashtag/responsiblyadulting\">#ResponsiblyAdulting</a>',
        'url':      'https://www.facebook.com/kirk.fritz/posts/10156958099441333',
        'place':    'Facebook'
    },
    {
        'img':      'https://scontent-den4-1.xx.fbcdn.net/v/t1.0-0/p526x296/107570917_2672933536327288'+
                    '_784229713720617969_o.jpg?_nc_cat=103&_nc_sid=110474&_nc_oc=AQmo0LZBL3S6-Nz_oq5kx'+
                    'eQS5i9g5eixJ-VAVT8UchpYx5CyP1ogegf9ZBrCm5O8iK25l7fUKfJnWFIu9DCZGFN7&_nc_ht=sconte'+
                    'nt-den4-1.xx&_nc_tp=6&oh=d768feec5273b2fd46546c3ecf2e22e0&oe=5F2D3414',
        'name':     'Daniel Roberts',
        'content':  'I was verbally denied service initially when I walked inside the Post Office. '+
                    'I didn’t notice the sign taped to the door in Spanish and then English requiring '+
                    'a mask or face covering.<br>Because I am respectful of the wishes of business '+
                    'that I decide to patronize, I decided to comply to the fullest extent on my '+
                    'capabilities. I not only wore a “mask”, but also a “face covering.”<br>Now many '+
                    'people may have an opinion about my action, but please note. I am in full '+
                    'compliance with the requirements stated. I was not only served, I was happily '+
                    'served. And the experience may have been the highlight of my service providers day. '+
                    '<a href=\"https://www.facebook.com/hashtag/intotalcompliance\">#inTotalCompliance'+
                    '</a> <a href=\"https://www.facebook.com/hashtag/doingmypart\">#doingMyPart</a> <a '+
                    'href=\"https://www.facebook.com/hashtag/helpingunderstandthescience\">#helping'+
                    'UnderstandTheScience</a> <a href=\"https://www.facebook.com/hashtag/jasonlives2020\"'+
                    '>#jasonLives2020</a> <a href=\"https://www.facebook.com/hashtag/thispostisaccurate\"'+
                    '>#thisPOSTisaccurate</a> <a href=\"https://www.facebook.com/hashtag/waittillfriday13th\"'+
                    '>#WaitTillFriday13th</a> <a href=\"https://www.facebook.com/hashtag/scaryworldwelivein\"'+
                    '>#ScaryWorldWeLiveIn</a> <a href=\"https://www.facebook.com/hashtag/reuseablemask\"'+
                    '>#reUseablemask</a> <a href=\"https://www.facebook.com/hashtag/yoursexpiresinminutes\">#yoursExpiresInMinutes</a>',
        'url':      'https://www.facebook.com/permalink.php?story_fbid=2672945086326133&id=100008320032038',
        'place':    'Facebook'
    },
    {
        'img':      'https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/s960x960/106483888_2849107071884159'+
                    '_595111972194198173_o.jpg?_nc_cat=101&_nc_sid=110474&_nc_oc=AQl-SYq9KA8WbI8RPoRgF'+
                    'NcPvCFeHd59bfHSUTUDVujYCCXjWQv5O3zWAm8U2XHneth6Yk5f-Yz-HKjfpSQ2ET1P&_nc_ht=sconte'+
                    'nt-den4-1.xx&_nc_tp=7&oh=2361d63fb26d597f833221b199917a84&oe=5F2BA0AE',
        'name':     '',
        'content':  'New job....probably not the smartest thing for me to be doing, but someone has '+
                    'too. I will be helping test about 200 people a day for Covid-19. <a href=\"https:'+
                    '//www.facebook.com/hashtag/covidclinic\">#CovidClinic</a> <a href=\"https://www.'+
                    'facebook.com/hashtag/doingmypart\">#DoingMyPart</a>. 👩‍⚕️💉',
        'url':      'https://www.facebook.com/southernpinoy/posts/2848009725327227',
        'place':    'Facebook'
    },
    {
        'img':      'https://scontent-den4-1.xx.fbcdn.net/v/t1.0-0/p526x296/107452805_321335539243427'+
                    '_698617758369788171_n.jpg?_nc_cat=105&_nc_sid=8bfeb9&_nc_oc=AQn9Pw7_zhXy_bC2cgQG'+
                    '1Wt91kV8C2DhuSqtjmKlOFWa2EVXo79jD6aPgS8Wu3rJnbyHHCLfSrtMKwprHSFWZR09&_nc_ht=scon'+
                    'tent-den4-1.xx&_nc_tp=6&oh=204b2bbc6cf595422330260e6c809e2b&oe=5F2A45B2',
        'name':     'Five Over Four Realty',
        'content':  'Sentiment stolen. Wording adapted. Process proven. 😷🍬🍫🐴👍<br>'+
                    '<a href=\"https://www.facebook.com/hashtag/nevermissamonday\">#nevermissamonday</a> '+
                    '<a href=\"https://www.facebook.com/hashtag/butitsgonnabehot\">#butitsgonnabehot</a> '+
                    '<a href=\"https://www.facebook.com/hashtag/soimaydoskittlesinstead\">#soimaydoskittlesinstead</a> '+
                    '<a href=\"https://www.facebook.com/hashtag/doingmypart\">#doingmypart</a> '+
                    '<a href=\"https://www.facebook.com/hashtag/raleighrealestate\">#raleighrealestate</a> '+
                    '<a href=\"https://www.facebook.com/hashtag/fiveoverfourrealty\">#fiveoverfourrealty</a> '+
                    '<a href=\"https://www.facebook.com/hashtag/homewithjill\">#homewithjill</a>',
        'url':      'https://www.facebook.com/fiveoverfourrealty/posts/321337999243181',
        'place':    'Facebook'
    },
    {
        'img':      'https://scontent-den4-1.xx.fbcdn.net/v/t1.0-0/s600x600/105899088'+
                    '_3130207720380551_2453438122385790232_n.jpg?_nc_cat=102&_nc_sid='+
                    '730e14&_nc_oc=AQkUIYCDwKrYrImwd0BV0KRfqX1YOO5oez1TO81n0a70PUQaQU'+
                    'hh584LafS-xjYHjMbBVBOxzlrq9HTnuTtPVZHy&_nc_ht=scontent-den4-1.xx'+
                    '&_nc_tp=7&oh=aa2109999d465ca69b388a2c6236e537&oe=5F2B2C06',
        'name':     'Darãlius Lyons',
        'content':  'Because we sometimes encounter unforeseen obstacles while out here, trust me when '+
                    'I say it’s been a rough ROUGH start to this Monday morning,..... but yet and still '+
                    'My GOD is gracious with his Mercy and Favor and for that I’m grateful. Good morning good People '+
                    '<a href=\"https://www.facebook.com/hashtag/doingmypart\">#DoingMyPart</a> '+
                    '<a href=\"https://www.facebook.com/hashtag/keepingamericastrong\">#KeepingAmericaStrong</a> '+
                    '<a href=\"https://www.facebook.com/hashtag/keepingamericamoving\">#KeepingAmericaMoving</a> '+
                    '<a href=\"https://www.facebook.com/hashtag/essential\">#Essential</a>',
        'url':      '',
        'place':    'Facebook'
    },
    {
        'img':      'https://scontent-den4-1.xx.fbcdn.net/v/t1.0-0/p370x247/84308834'+
                    '_10221227494391223_2669530858453836613_n.jpg?_nc_cat=110&_nc_si'+
                    'd=85a577&_nc_oc=AQlnVhPH2Nh2kjgJxAshjtZdNClnRivM5ocRRDcAsUcgTGG'+
                    'Jir9dIpZi2NdM67oLiIWvyzmVDf4Qypbk3GpyGUt0&_nc_ht=scontent-den4-'+
                    '1.xx&_nc_tp=6&oh=c4052d5fff2b4560261d0cc2a609eaf0&oe=5F2B1625',
        'name':     'Lamar Moore',
        'content':  'I’m not going to stop .. no matter where I am .. what I do.. I stand '+
                    'for us and our communities .. and it takes a village .. people like '+
                    'Amanda Puck, Mariano’s, Greg Mohr, Scott Weiner making this all possible.. '+
                    'and Ladell Johnson who has been a huge staple in Bronzeville community '+
                    'for a long time ..<br><a href=\"https://www.facebook.com/hashtag/doingmypart\">'+
                    '#doingmypart</a> <a href=\"https://www.facebook.com/hashtag/letshelpeachother\">#letshelpeachother</a>',
        'url':      'https://www.facebook.com/lamarm1/posts/10220981308596732',
        'place':    'Facebook'
    },
    {
        'img':      'https://scontent-den4-1.xx.fbcdn.net/v/t1.0-0/s600x600/100791870'+
                    '_10223621963044137_6081938059257970688_n.jpg?_nc_cat=111&_nc_sid'+
                    '=8bfeb9&_nc_oc=AQlQb2HGNlttfdXKiHGkkldGPQ47NRkB0y7EHQ0OWxhIyp0CP'+
                    'M_L8cbC74YXquFdXE_s5MhsysALJKYtoSPRdYAJ&_nc_ht=scontent-den4-1.x'+
                    'x&_nc_tp=7&oh=7b5a010803d1ff5b39848de8d4ebacc4&oe=5F2B3008',
        'name':     'Tee Brantley',
        'content':  'Thisssssss gave me chill ❤️❤️❤️❤️❤️❤️❤️ it’s some amazing cops out there '+
                    'I know & I loveeeeee and forever thankful for them <a href='+
                    '\"https://www.facebook.com/hashtag/letshelpeachother\">#letshelpeachother</a>❤️<br>'+
                    '<img class=\"show-img\" src=\"https://scontent-den4-1.xx.fbcdn.net/v/t1.0-0/p280x280/'+
                    '101306780_10223624079377044_3939053303324737536_n.jpg?_nc_cat=102&'+
                    '_nc_sid=110474&_nc_oc=AQmTL74rf2Zp1KdpV82HwW3kk_1qjidAZRI_9abInNik'+
                    '27rY25J4Ol46-2RwGoUa7Hrn7ez9ZGDHnMNXZczDagpo&_nc_ht=scontent-den4-'+
                    '1.xx&_nc_tp=6&oh=c4ba77ad335b8519a4e150366031ef20&oe=5F2AD44F\"><br>'+
                    '<img class=\"show-img\" src=\"https://scontent-den4-1.xx.fbcdn.net/v/t1.0-0/p280x280/'+
                    '100099800_10223624080377069_7243979007794872320_n.jpg?_nc_cat=107&'+
                    '_nc_sid=110474&_nc_oc=AQkDBLLKghYJT2XcD6kF_VwevifQCkeQLlTE4GKxPVE8'+
                    'jTtA5rWc4PaLwH1nHMJJTIML00uxjM8jbydeHVizjVJ3&_nc_ht=scontent-den4-'+
                    '1.xx&_nc_tp=6&oh=9f58148c3122c1e22e5a84a9360396ee&oe=5F2BDE32\">',
        'url':      'https://www.facebook.com/tee.brantley1/posts/10223621973724404',
        'place':    'Facebook'
    },
    {
        'img':      'https://scontent-den4-1.cdninstagram.com/v/t51.2885-15/e15/98330291'+
                    '_259021882133625_8788643313350160637_n.jpg?_nc_ht=scontent-den4-1.c'+
                    'dninstagram.com&_nc_cat=109&_nc_ohc=Pr5k6FLFo70AX_Jg74f&oh=6a4e1e45'+
                    '40da5e9b4ae485501f5bc3c7&oe=5F30DE9D',
        'name':     'Covid Art Museum',
        'content':  'Remember to be kind to the people around you this week—whether they’re '+
                    'your neighbors or just people passing by 🤗<br><br>This was a card on '+
                    '<a href=\"https://www.covidgoodnews.com/\">covidgoodnews.com</a> '+
                    'as a link to the photo on Instagram',
        'url':      'https://www.instagram.com/p/CAYCjUnDKoq/',
        'place':    'Instagram'
    },
    {
        'img':      'https://scontent-den4-1.xx.fbcdn.net/v/t1.0-0/p526x296/105401476'+
                    '_10221190211779181_1825994353930936565_o.jpg?_nc_cat=109&_nc_sid'+
                    '=110474&_nc_oc=AQmqrMyWfK_Khho_822WlrPsu-c6buul7JMPiBxj0fPvxA9-I'+
                    'aOG6KJKRevmftQMAJuHvBP01aVhQv_zQzVnVjav&_nc_ht=scontent-den4-1.x'+
                    'x&_nc_tp=6&oh=d6e2e1e9f3cc5a65cb89bd5cd6737384&oe=5F2B4BB2',
        'name':     'Lamar Moore',
        'content':  'Be someone’s smile today<br>'+
                    'Takes away some of the stress<br>'+
                    'And it may make someone’s day.<br>'+
                    'Happiness is cure wheat defeat is a disease<br>'+
                    'Make it a great day<br>',
        'url':      'https://www.facebook.com/lamarm1/posts/10221190212139190',
        'place':    'Facebook'
    },
]


/** This will allow us to go through the posts without
 *  messing up the original array of posts **/
var get_posts = some_social_posts

/** This is a maybe... It will only be used if we
 *  have the posts change during the page viewing **/
var posts2return = []


/** This function will be called once the first post element
 *  loads. That way we know that it isn't trying to change
 *  text and images of things that don't exist. **/
function ShowPosts() {
    for (let i = 0; i<9; i++) {
        let p_img = document.querySelector('#img'+(i+1)+' > img')
        let p_title = document.querySelector('#img'+(i+1)+' > h4')
        let p_content = document.querySelector('#img'+(i+1)+' > p')
        let p_url = document.querySelector('#img'+(i+1)+' > div > a')
        let p_place = document.querySelector('#img'+(i+1)+' > div > span')
        p_img.src = get_posts[i].img
        p_title.innerHTML = get_posts[i].name
        p_content.innerHTML = get_posts[i].content
        p_url.setAttribute('href',get_posts[i].url)
        p_place.innerHTML = get_posts[i].place
    }
}


/** This function will be called ever-so-often to make
 *  some of the posts change. We don't have to include
 *  this, but it would be cool. I was thinking maybe
 *  have it when they change it flips around and then
 *  shows a different post. **/
function ChangePosts() {
    
}


/** This function will allow the user to click the images
 *  on the post and it will enlage it (or so it will seem) **/
var returnX = 0
var returnY = 0
function EnlargePic(elem) {
    var a = document.getElementById('img-show')
    var b = document.getElementById('partial-color')
    a.src = elem.src
    a.style.transition = 'all 0.01s linear'
    a.style.top = (event.clientY-(512/2))+'px'
    a.style.left = (event.clientX-(512/2))+'px'
    returnX = (event.clientX-(512/2))
    returnY = (event.clientY-(512/2))
    a.style.transition = 'all 0.01s linear'
    setTimeout(() => {
        a.style.transition = 'all 0.5s ease-in-out'
        a.style.opacity = '1'
        a.style.top = 'calc(50%)'
        a.style.left = 'calc(50%)'
        a.style.transform = 'scale(1) translate(-50%, -50%)'
        b.style.width = '100%'
        b.style.height = '100%'
        b.style.background = 'rgba(0,0,0,0.7)'
    }, 30);
}
function ClosePic() {
    var a = document.getElementById('img-show')
    var b = document.getElementById('partial-color')
    a.style.transition = 'all 0.5s ease-in-out'
    a.style.transform = 'scale(0) translate(0%, 0%)'
    a.style.left = returnX+'px'
    a.style.top = returnY+'px'
    setTimeout(() => {
        b.style.background = 'transparent'
        setTimeout(() => {
            b.style.width = '0%'
            b.style.height = '0%'
        }, 500);
    }, 500);
}

let some_iterator = ''
function LoadListeners() {
    if (document.getElementsByClassName('show-img').length > 0) {
        ShowPosts()
        let _this = document.getElementsByClassName('show-img')
        for (let i = 0; i < _this.length; i++) {
            _this[i].addEventListener('click', () => {EnlargePic(_this[i])})
        }
        clearInterval(some_iterator)
    }
}
some_iterator = setInterval(LoadListeners, 100);