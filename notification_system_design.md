# Stage 1

## Problem
Users are unable to identify important notifications due to high volume.

## Solution
Implemented a Priority Inbox that displays top N important unread notifications.

## Priority Logic
Priority is based on:
1. Type Weight:
   - Placement > Result > Event
2. Recency:
   - Newer notifications are given higher priority

Priority Score:
weight * 1e13 + timestamp

## Features
- Displays Top N notifications (10, 15, 20)
- Dropdown to change N dynamically
- Filters unread notifications

## Logging
Used a reusable logging function:
Log(stack, level, package, message)

Logs added at:
- Component render
- Dropdown change
- Data processing

## Scalability
For real-time updates:
- A Min Heap of size N can be used
- Ensures efficient updates (O(log N))

## Tech Stack
- React (Vite)
- JavaScript