#!/bin/bash
# File              : gify.sh
# Author            : Amar Lakshya <amar.lakshya@protonmail.com>
# Date              : 16.01.2021
# Last Modified Date: 16.01.2021
# Last Modified By  : Amar Lakshya <amar.lakshya@protonmail.com>
set -e

function enc() {
    palette="/tmp/palette.png"
    filters="fps=$4,scale=$3:-1:flags=lanczos"
    ffmpeg -v warning -i "$1" -vf "$filters,palettegen" -y "$palette"
    ffmpeg -v warning -i "$1" -i $palette -lavfi "$filters [x]; [x][1:v] paletteuse" -y "$2"
}

mp4s=$(find ./ -type f -name  '*.mp4')
for i in $mp4s;
do
    echo -n "$i: "
    gif_file=$(echo ".$(echo $i | cut -d '.' -f2).gif")
    if [  ! -f "$gif_file" ]; then
        echo "encoding to gif"
        enc "$i" $gif_file 480 30
        echo "![$gif_file](./gifs/$gif_file)" >> ../README.md
    else
        echo "nothing to do"
    fi
done

