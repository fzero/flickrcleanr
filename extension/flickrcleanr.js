// Need to set a few styles AFTER Yahoo's CSS is loaded.
var $navBar = document.getElementById('global-nav');
var $body = document.getElementsByTagName('body')[0];
$navBar.style['top'] = '0';
$body.style['padding-top'] = '49px';
