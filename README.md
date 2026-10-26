# Michael Christwin portfolio

A responsive static portfolio built with semantic HTML and CSS. No runtime JavaScript, dependencies, external fonts, tracking, or build step. Project visuals are lightweight CSS illustrations, not screenshots.

## Preview

From this directory, run:

```sh
python3 -m http.server 8080 --directory dist
```

Open `http://localhost:8080`. On a remote server, use your SSH client's port forwarding, such as `ssh -L 8080:localhost:8080 user@server`.

## Edit

- Content, projects, experience, and links: `dist/index.html`.
- Colors, layout, and responsive rules: `dist/styles.css`. Shared tokens are defined in `:root`.
- Browser icon: `dist/favicon.svg`.

All essential content renders without scripts. Navigation uses native anchors, with a skip link, visible keyboard focus, and reduced-motion support. Layouts adapt to phone, tablet, and desktop widths.

No email, availability claim, undated work dates, or project metrics have been invented. The GitHub profile serves as the connection destination. Add a verified email or contact link to the final section when available.

## Deploy anywhere

Publish the contents of `dist/` to any static host, including GitHub Pages, Cloudflare Pages, Netlify, or an NGINX server. Leave the build command empty and set the output directory to `dist`. No environment variables are needed.

For NGINX, place `dist` at your chosen web root and configure a server block like this (replace the path and hostname):

```nginx
server {
    listen 80;
    server_name portfolio.example.com;
    root /var/www/michael-portfolio/dist;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

Configure HTTPS through your hosting provider or existing server certificate tooling. For future asset changes, deploy the HTML and CSS together and use revalidation rather than long immutable caching on these unversioned filenames.
