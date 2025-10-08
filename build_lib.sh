#!/usr/bin/env bash
set -euo pipefail
pnpm link --global @oceancode/ocean-wui
pnpm link --global ocean-admin-api

echo "link lib"