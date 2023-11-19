#!/usr/bin/env python
# -*- coding: utf-8 -*-

def count_areas(matrix_str):
    # Convert matrix string to nested list
    matrix = []
    rows = matrix_str.split(';')
    for row in rows:
        matrix.append([int(element) for element in row.split(',')])

    # Initialize count and visited array
    count = 0
    visited = [[False] * len(matrix[0]) for _ in range(len(matrix))]

    # Recursive function to explore connected '1' cells
    def explore(i, j):
        visited[i][j] = True

        # Check neighboring cells in all directions
        directions = [(i - 1, j), (i + 1, j), (i, j - 1), (i, j + 1)]
        for row, col in directions:
            if 0 <= row < len(matrix) and 0 <= col < len(matrix[0]) and matrix[row][col] == 1 and not visited[row][col]:
                explore(row, col)

    # Iterate through matrix and explore unvisited '1' cells
    for i in range(len(matrix)):
        for j in range(len(matrix[0])):
            if matrix[i][j] == 1 and not visited[i][j]:
                explore(i, j)
                count += 1

    return count


# Count and display the number of areas
if __name__ == '__main__':
    assert count_areas("1,0,1;0,1,0") == 3
    assert count_areas("1,0,1;1,1,0") == 2
    assert count_areas("1,1,1,0;0,1,0,0") == 1
