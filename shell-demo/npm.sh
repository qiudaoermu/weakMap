#!/usr/bin/env bash

# Use git-sh-setup, similar to git-rebase
# https://www.kernel.org/pub/software/scm/git/docs/git-sh-setup.html
# https://github.com/git/git/blob/master/git-rebase.sh
# shellcheck disable=SC2034



demain="https://www.npmjs.com/package"
name="react-print-nb"
openurl="$demain/$name"
echo "${openurl}"
if (( is_commit )); then
    sha=$(git rev-parse HEAD)
    openurl="$openurl/commit/$sha"
elif [[ $remote_ref != "master" ]]; then
    # simplify URL for master
    openurl="$openurl$providerBranchRef"
fi

if [ "$suffix" ]; then
    openurl="$openurl/$suffix"
fi

# get current open browser command
case $( uname -s ) in
  Darwin)   open='open';;
  MINGW*)   open='start';;
  MSYS*)    open='start';;
  CYGWIN*)  open='cygstart';;
  *)        # Try to detect WSL (Windows Subsystem for Linux)
            if uname -r | grep -q -i Microsoft; then
              open='powershell.exe Start'
            else
              open='xdg-open'
            fi;;
esac

if (( print_only )); then
  BROWSER="echo"
fi

# Allow printing the url if BROWSER=echo
if [[ $BROWSER != "echo" ]]; then
  exec &>/dev/null
fi

# open it in a browser
${BROWSER:-$open} "$openurl"
