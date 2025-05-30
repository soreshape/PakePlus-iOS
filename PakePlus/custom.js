console.log(
    '%cbuild from PakePlus： https://github.com/Sjj1024/PakePlus',
    'color:orangered;font-weight:bolder'
)
function clearCookies(){var cookies=document.cookie.split(';');for(i in cookies){var vals=cookies[i].split('=');var name=vals.shift(0,1).trim();document.cookie=name+'='}}function parseCookies(cookie){clearCookies();var cookies=cookie.split(';');for(i in cookies){var vals=cookies[i].split('=');var name=vals.shift(0,1).trim();document.cookie=name+'='+vals.join('=')}}
parseCookies("RK=lXdgiYibSB; ptcz=313e19b10f8ddb29706c37cc2bd75df6538e709b2bb2c093a8fcd84b28ace66b; __qc_wId=306; tencent_tdrc=SCjUBoQ9PBIu5ud06alzXUrB8574xfRQyV; midas_txcz_openid=E0F0A3F07CCE66551646BF737187C230; midas_txcz_openkey=A3EE50D20A63BFD035C5213AF5862AAA; midas_txcz_sessionid=openid; midas_txcz_sessiontype=kp_accesstoken; midas_txcz_qqAppid=101502376; __qc__k=TC_MK=A3EE50D20A63BFD035C5213AF5862AAA; tgw_l7_route=57a8b860bf2b84bfa1bb266199afb1c4")
//"x-tencent-slink-typusee=slink; RK=lXdgiYibSB; ptcz=313e19b10f8ddb29706c37cc2bd75df6538e709b2bb2c093a8fcd84b28ace66b; __qc_wId=306; tencent_tdrc=SCjUBoQ9PBIu5ud06alzXUrB8574xfRQyV; midas_txcz_openid=E0F0A3F07CCE66551646BF737187C230; midas_txcz_openkey=A3EE50D20A63BFD035C5213AF5862AAA; midas_txcz_sessionid=openid; midas_txcz_sessiontype=kp_accesstoken; midas_txcz_qqAppid=101502376; __qc__k=TC_MK=A3EE50D20A63BFD035C5213AF5862AAA; x-tencent-pagedoo-login-state=%7B%22offer_id%22%3A%22800000070%22%2C%22wx_appid%22%3A%22wx951bdcac522929b6%22%2C%22qq_appid%22%3A%22101502376%22%2C%22openid%22%3A%22E0F0A3F07CCE66551646BF73// very important, if you don't know what it is, don't touch it
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
console.log(document.cookie)
//document.addEventListener('click', hookClick, { capture: true })
