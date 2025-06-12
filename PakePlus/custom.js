console.log(
    '%cbuild from PakePlus： https://github.com/Sjj1024/PakePlus',
    'color:orangered;font-weight:bolder'
)
//function clearCookies(){var cookies=document.cookie.split(';');for(i in cookies){var vals=cookies[i].split('=');var name=vals.shift(0,1).trim();document.cookie=name+'='}}function parseCookies(cookie){clearCookies();var cookies=cookie.split(';');for(i in cookies){var vals=cookies[i].split('=');var name=vals.shift(0,1).trim();document.cookie=name+'='+vals.join('=')}}
//parseCookies("pt_pin=jd_JWnDpRqcgnaf; pt_key=AAJoSqQNADBQTBrcfAAIKfljmp7GzTtAio_dBnJnt3KPniTNAuxUNHJj9piQ_jpNOsng2_JhpHI")
document.cookie="pt_pin=jd_JWnDpRqcgnaf; domain=.jd.com; path=/;"
document.cookie="pt_key=AAJoSqQNADBQTBrcfAAIKfljmp7GzTtAio_dBnJnt3KPniTNAuxUNHJj9piQ_jpNOsng2_JhpHI; domain=.jd.com; path=/;"
// very important, if you don't know what it is, don't touch it
// 非常重要，不懂代码不要动，这里可以解决80%的问题，也可以生产1000+的bug
const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector(
        'head base[target="_blank"]'
    )
    console.log('origin', origin, isBaseTargetBlank)
    if (
        (origin && origin.href && origin.target === '_blank') ||
        (origin && origin.href && isBaseTargetBlank)
    ) {
        e.preventDefault()
        console.log('handle origin', origin)
        location.href = origin.href
    } else {
        console.log('not handle origin', origin)
    }
}

document.addEventListener('click', hookClick, { capture: true })
