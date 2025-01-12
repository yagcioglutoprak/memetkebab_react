#!/bin/bash

# Log file path
LOG_FILE="$HOME/git-auto.log"

# Get the current date for the commit message
current_date=$(date '+%Y-%m-%d %H:%M:%S')

echo "[$current_date] Starting auto-git process..." >> "$LOG_FILE"

# Check if there are changes to commit
if [[ -n $(git status -s) ]]; then
    # Add all changes
    git add .

    # Create commit with date
    git commit -m "Auto commit: $current_date"

    # Push to the current branch
    current_branch=$(git symbolic-ref --short HEAD)
    git push origin $current_branch

    echo "[$current_date] Changes committed and pushed successfully!" >> "$LOG_FILE"
else
    echo "[$current_date] No changes to commit" >> "$LOG_FILE"
fi
