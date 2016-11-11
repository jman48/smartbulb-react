!#/bin/bash

#
#Build and tag SmartBulb web application
#

function title {
	printf "\n\n**** $1 ****\n\n"
}

title "Patching version"
npm -no-git-tag-version version patch
VERSION=$(node -p -e "require('./package.json').version")

title "Commiting and tagging version"
git commit -am "[Automated] Updated application version to $VERSION"
git tag $VERSION
git push
git push --tags

title "Clearing old build files and folders"
rm bundle.js
rm -rf dist

title "Creating release $VERSION"
mkdir dist
npm run build
cp index.html dist
cp bundle.js dist

title "Release done. Please check the dist folder for release"
