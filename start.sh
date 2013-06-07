#!/bin/bash

function webserver() {
	local port="${1:-8000}"
	sleep 0.5 & open "http://localhost:8000/" &
	http-server -s -p $port 2>&1 >/dev/null &
}

webserver
