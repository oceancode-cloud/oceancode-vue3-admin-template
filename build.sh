#!/usr/bin/env bash
set -euo pipefail
DIR=$(realpath "$(dirname "$0")")
cd $DIR/
WORKDIR=$(pwd)
output_path=$WORKDIR/output
if [ -d $output_path ]; then
  rm -rf $output_path
fi
mkdir $output_path
pnpm i
pnpm build
web_home=""
if [ ! -z "${APP_WEB_HOME:-}" ]; then
  web_home=${APP_WEB_HOME}
else
  echo "not found APP_WEB_HOME env vairable"
  if [  ! -z "${APP_MAIN_HOME:-}" ]; then
    web_home=${APP_MAIN_HOME}/data/web/html
  fi
fi

if [ "$web_home" != "" ]; then
  echo "web home: $web_home"
  cp -r ./dist/* $web_home/
  echo "copy dist files to ${web_home}"
else
  echo "web home not found."
fi

zip -rlv $output_path/app.zip ./dist
export APP_PRODUCT_PACK_OUTPUT_PRODUCT_PATH=$output_path/app.zip
