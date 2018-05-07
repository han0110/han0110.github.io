# reference from https://github.com/vibertthio/portfolio

cd public/
echo "clean all the html, js relevent files in ./public.."

find . -name "*.css.map" -type f -delete
find . -name "*.css" -type f -delete
find . -name "*.html" -type f -delete
find . -name "*.json" -type f -delete
find . -name "*.js.map" -type f -delete
find . -name "*.js" -type f -delete
cd ..

echo "clean cache"
rm -rf ./.cache/

printf "\n"
