 # Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.

#!/usr/bin/env bash
set -euo pipefail
DIR=$(realpath "$(dirname "$0")")
WORKDIR=$(pwd)
pnpm link --global @oceancode/ocean-wui
pnpm link --global ocean-admin-api