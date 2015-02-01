# html2hiccup

Converts HTML into Hiccup compatible Clojure syntax. Heavy lifting done by [hickory](https://github.com/davidsantiago/hickory).

This app is entirely client-side using HTML, SCSS and ClojureScript.

You can try it here: [HTML2Hiccup](https://html2hiccup.buttercloud.com).

## Development

Uncomment the "Dev" sections in index.html while in dev mode

Start compiling:

    lein cljsbuild auto dev

Server:

    lein simpleton 5000

SCSS:

    gulp

## Deploying

Comment out "Dev" sections in index.html while in dev mode

Advanced compilation:

    lein cljsbuild once prod

Prepare assets:

    gulp prod

Upload to S3:

    gulp upload

Prepare and deploy in one go:

    gulp deploy
