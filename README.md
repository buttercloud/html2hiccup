# html2hiccup


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
