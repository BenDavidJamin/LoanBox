if [ "debug" = "$1" ]; then
  r.js -o build/app.debug.js
  cd ../debug
elif [ "production" = "$1" ]; then
  r.js -o build/app.production.js
  cd ../production
else
  echo $1 " is not a valid release mode (debug/production)."
  exit "ERROR"
fi

mv vendor/requirejs/require.js require.js
rm -rf vendor/* build js/views js/models js/collections build.txt
mkdir vendor/requirejs && mv require.js vendor/requirejs/require.js
mv css/style.css style.css && rm -rf css/* && mv style.css css/style.css
# return the status of the last command
exit $?
