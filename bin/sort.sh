#!/usr/bin/env bash
set -eu -o pipefail

root_dir="$(cd -P "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

schedule_file="$root_dir/static/json/schedule.json"
talks_file="$root_dir/static/json/talks.json"

if [[ -r "$schedule_file" ]]; then
  content="$(cat "$schedule_file")"
  echo "$content" |\
    jq 'sort_by(.id)' |\
    jq -f "$root_dir/bin/format-talks-json.jq" > "$schedule_file"
  echo "$content" |\
    jq 'sort_by(.id) | map(. | select (.event_type != null))' |\
    jq -f "$root_dir/bin/format-talks-json.jq" > "$talks_file"
fi
