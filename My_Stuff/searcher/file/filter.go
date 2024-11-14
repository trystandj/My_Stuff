package file

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func FilterFilesLineByLine(files []string, searchString string) []string {
	var filteredFiles []string

	// Split the search string into individual search words (tokens)
	searchWords := strings.Fields(strings.ToLower(searchString)) // Convert to lowercase for case-insensitive search

	for _, file := range files {
		// Open the file for reading
		f, err := os.Open(file)
		if err != nil {
			fmt.Printf("Error opening file %s: %v\n", file, err)
			continue
		}

		// Defer closing the file
		defer func(f *os.File) {
			if err := f.Close(); err != nil {
				fmt.Printf("Error closing file %s: %v\n", file, err)
			}
		}(f)

		// Use a flag to determine if a match was found in the current file
		fileMatched := false

		// Scan the file line by line
		scanner := bufio.NewScanner(f)
		for scanner.Scan() {
			line := strings.ToLower(scanner.Text()) // Convert line to lowercase for case-insensitive search

			// Check if any search word is in the current line
			for _, word := range searchWords {
				if strings.Contains(line, word) {
					fmt.Println(word, "Found search term in:", file)
					filteredFiles = append(filteredFiles, file)
					fileMatched = true
					break // Stop searching this file after the first match
				}
			}

			// Exit early if a match is found
			if fileMatched {
				break
			}
		}

		if err := scanner.Err(); err != nil {
			fmt.Printf("Error scanning file %s: %v\n", file, err)
		}
	}

	return filteredFiles
}
