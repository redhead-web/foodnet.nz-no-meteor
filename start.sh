#!/bin/sh

# Server-use startup script

forever start -c "n use 7.2.1" --append -l ~/Deploy/Logs/foodnet-staging.forever.log -o ~/Deploy/Logs/foodnet-staging.stdout.log -e ~/Deploy/Logs/foodnet-staging.stderr.log ~/Deploy/foodnet-staging/server
