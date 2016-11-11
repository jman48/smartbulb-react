#!/bin/bash

#
#Build, tag and package SmartBulb web application
#

function title {
	printf "\n\n**** $1 ****\n\n"
}

RELEASE_DIR=release

title "Patching version"
npm -no-git-tag-version version patch
VERSION=$(node -p -e "require('./package.json').version")

title "Commiting and tagging version"
#Use a custom tag message if provided
if [ -z "$1" ]; then
	TAG_MESSAGE="[Automated] Created version $VERSION"
else
	echo "Using custom tag message..."
	TAG_MESSAGE=$1
fi

git commit -am "[Automated] Updated application version to $VERSION"
git tag -a $VERSION -m $TAG_MESSAGE
git push
git push --tags

title "Clearing old build files and folders"
rm bundle.js
rm -rf $RELEASE_DIR

title "Creating release $VERSION"
mkdir $RELEASE_DIR
npm run build
cp index.html $RELEASE_DIR
cp bundle.js $RELEASE_DIR
cp package.json $RELEASE_DIR

title "Packaging application"
RELEASE_FILE=$(npm pack $RELEASE_DIR)

title "Release done. File $RELEASE_FILE created for release"
