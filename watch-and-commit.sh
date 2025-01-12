#!/bin/bash

# Log file path
LOG_FILE="$HOME/git-auto.log"

# Store the state file in home directory
STATE_FILE="$HOME/.last_commit_state"

# Initialize or read last_hash
if [ -f "$STATE_FILE" ]; then
    last_hash=$(cat "$STATE_FILE")
else
    last_hash=$(find . -type f -not -path '*/\.*' -exec md5 {} \; | sort | md5)
    echo "$last_hash" > "$STATE_FILE"
fi

# Calculate current hash of all files (excluding hidden files and .git directory)
current_hash=$(find . -type f -not -path '*/\.*' -exec md5 {} \; | sort | md5)

# If hash changed, files were modified
if [ "$current_hash" != "$last_hash" ]; then
    timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo "[$timestamp] Changes detected, committing..." >> "$LOG_FILE"
    
    # Add all changes
    git add .
    
    # Commit with timestamp
    git commit -m "Auto commit: Changes detected at $timestamp"
    
    # Push to current branch
    current_branch=$(git symbolic-ref --short HEAD)
    git push origin $current_branch
    
    echo "[$timestamp] Changes committed and pushed successfully!" >> "$LOG_FILE"
    
    # Update state file
    echo "$current_hash" > "$STATE_FILE"
else
    timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo "[$timestamp] No changes detected" >> "$LOG_FILE"
fi
