#!/bin/sh
input=$(cat)
cwd=$(echo "$input" | jq -r '.cwd // .workspace.current_dir // empty')
model=$(echo "$input" | jq -r '.model.display_name // empty')
remaining=$(echo "$input" | jq -r '.context_window.remaining_percentage // empty')

parts=""

[ -n "$cwd" ] && parts="$cwd"

if [ -n "$model" ]; then
  [ -n "$parts" ] && parts="$parts | "
  parts="${parts}${model}"
fi

if [ -n "$remaining" ]; then
  [ -n "$parts" ] && parts="$parts | "
  parts="${parts}ctx: $(printf '%.0f' "$remaining")% left"
fi

echo "$parts"
