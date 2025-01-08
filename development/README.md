
<br>

### Notes

Launch an interactive environment via

```shell
docker run --rm -i -t -p 8080:80 -w /app 
  --mount type=bind,src="$(pwd)",target=/app 
    dynamic
```

Subsequently, launch a web server via

```shell
nginx -g 'daemon off;'
```

The URL is 

```yaml
http://localhost:8080
```

Note, for an immediate web server launch $\rightarrow$

```shell
docker run --rm -i -t -p 8080:80 -w /app 
  --mount type=bind,src="$(pwd)",target=/app 
    dynamic nginx -g 'daemon off;'
```


<br>
<br>


### References

JavaScript Modules
* [Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
* [Modules](https://javascript.info/modules)
* [Module Errors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/import_decl_module_top_level#importing_in_a_non-module_script)
* [SCRIPT](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)

live server
* [live server](https://itnext.io/dockerizing-modern-web-apps-cd9667eebf44)
* [github](https://github.com/tapio/live-server)
* [npm](https://www.npmjs.com/package/live-server)

NGINX
* [docker hub](https://hub.docker.com/_/nginx)
* [docker nginx](https://toxigon.com/setting-up-nginx-with-docker)
* [extra help](https://itnext.io/dockerizing-modern-web-apps-cd9667eebf44)
* [more](https://www.socketxp.com/iot/remote-access-nginx-web-server-from-internet/)

Docker
* [docker run](https://docs.docker.com/reference/cli/docker/container/run/)

<br>
<br>

<br>
<br>

<br>
<br>

<br>
<br>