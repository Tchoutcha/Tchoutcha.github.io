#!/usr/bin/env bash
# Usage: ./publish.sh "NOM" "email@inria.fr"
# Fills in your last name and email, then pushes the site to github.com/Tchoutcha/Tchoutcha.github.io
set -euo pipefail
NOM="${1:?Usage: ./publish.sh NOM EMAIL}"
EMAIL="${2:?Usage: ./publish.sh NOM EMAIL}"

grep -rl "TODO_NOM" _config.yml _data | xargs sed -i "s/TODO_NOM/${NOM}/g"
sed -i "s|^# email: TODO@inria.fr|email: ${EMAIL}|" _data/socials.yml

git init -q -b main
git add -A
git commit -qm "Initial website"
git remote add origin git@github.com:Tchoutcha/Tchoutcha.github.io.git
git push -u --force origin main
echo "Pushed. Now: Settings > Pages > Source: Deploy from a branch > gh-pages / (root)"
