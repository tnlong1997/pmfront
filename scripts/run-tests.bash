# !/usr/bin/env bash

# if any command inside script returns error, exit and return that error
set -e

# magic line to ensure that we're always inside the root of our application,
# no matter from which directory we'll run script
# thanks to it we can just enter `./scripts/run-tests.bash`
cd "${0%/*}/.."

# let's fake failing test for now
# echo "Running tests"
# echo "............................"
# echo "Failed!" && exit 1

# example of commands for different languages
echo "-> Running linting tests..."

echo "---> Running overall js linting tests..."
npm run lint

echo "---> Running overall html linting tests..."
npm run htmllint

echo "---> Running overall css linting tests..."
npm run csslint

cd "pmweb"

echo ""
echo "---> Running Angular linting test..."
ng lint
# npm run lint        # JS code quality check
# npm test         # JS unit tests
# flake8 .         # python code quality check
# nosetests        # python nose
# just put your usual test command here
