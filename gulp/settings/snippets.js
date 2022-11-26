//=============/=============/ svg /=============/=============
/*
{
  "svg": {
    "scope": "html",
    "prefix": "q-svg",
    "body": [
      "<svg class=\"$2\">",
      "  <use xlink:href=\"img/svg/sprite.svg#$1\"></use>",
      "</svg>"
    ],
  }
}
*/


 //=============/=============/ comments in css /=============/=============
/*
{
  "comments in scss": {
    "scope": "css,scss",
    "prefix": "q-comments-scss",
    "body": [
      "//=============/ $1 /=============",
      "$2"
    ],
  }
}
*/


//=============/=============/ comments in js /=============/=============
/*
{
  "comments in js": {
    "scope": "javascript,typescript",
    "prefix": "q-comments-js",
    "body": [
      "//=============/=============/ $1 /=============/=============",
      "$2"
    ],
  }
}
*/


//=============/=============/ picture /=============/=============
/*
{
  "picture": {
    "prefix": "q-picture",
    "body": [
      "<picture>",
      "  <source srcset=\"@img$1$2.webp\" type=\"image/webp\">",
      "  <img loading=\"lazy\" src=\"@img$1\" alt=\"$3\">",
      "</picture>"
    ],
  }
}
*/

//=============/=============/ spoiler /=============/=============

/*
{
	"spoiler": {
		"scope": "html",
		"prefix": "q-spoiler",
		"body": [
			"<div class=\"_spoiler\">",
			"  <button class=\"_btn-reset _spoiler__btn\">Пункт</button>",
			"    <ul class=\"_list-reset _spoiler__droplist\">",
			"      <li>Подпункт</li>",
			"    </ul>",
			"</div>"
		],
	}
}
*/
