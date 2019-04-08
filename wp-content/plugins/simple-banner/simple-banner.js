document.addEventListener('DOMContentLoaded', function () {
    var banner = document.createElement('div');
    banner.id = 'simple-banner';
    banner.className = 'simple-banner';
    document.getElementsByTagName('body')[0].prepend(banner);

    var bodyPaddingLeft = document.getElementsByTagName('body')[0].style.paddingLeft;
    var bodyPaddingRight = document.getElementsByTagName('body')[0].style.paddingRight;
    var noPaddingArray = ['0px', ''];
    var isBodyPaddingLeft = !noPaddingArray.includes(bodyPaddingLeft);
    var isBodyPaddingRight = !noPaddingArray.includes(bodyPaddingRight);

    if (isBodyPaddingLeft || isBodyPaddingRight) {
        var head = document.getElementsByTagName('head')[0];
        var leftAdjust = isBodyPaddingLeft ? 'margin-left:-' + bodyPaddingLeft + ';padding-left:' + bodyPaddingLeft + ';' : '';
        var rightAdjust = isBodyPaddingLeft ? 'margin-right:-' + bodyPaddingRight + ';padding-right:' + bodyPaddingRight + ';' : '';
        var css = '.simple-banner{' + leftAdjust + rightAdjust + '}';
        var style = document.createElement('style');
        style.type = 'text/css';
        style.media = 'screen';
        style.innerText = css;
        document.getElementsByTagName('head')[0].prepend(style);
    }
});
