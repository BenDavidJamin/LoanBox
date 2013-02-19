echo -n "Pick release mode (debug/release): "
read -e mode  
if [ "debug" = "$mode" ]; then
  r.js -o build/app.debug.js
elif [ "release" = "$mode" ]; then
  r.js -o build/app.release.js
else
  echo $mode " is not a valid release mode (debug/release)."
  exit "ERROR"
fi

cd ../dist
mv vendor/requirejs/require.js require.js
rm -rf vendor/* build js/views js/models js/collections build.txt
mkdir vendor/requirejs && mv require.js vendor/requirejs/require.js
mv css/style.css style.css && rm -rf css/* && mv style.css css/style.css
# return the status of the last command
exit $?
