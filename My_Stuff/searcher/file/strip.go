package file

import (
	"errors"
	"fmt"
	"path/filepath"
	"strings"
)

// StripName removes files from the list if their names contain any word from the searchName substring.
func StripName(filteredFiles []string, searchName string) ([]string, error) {
	var files []string
	searchWords := strings.Fields(strings.ToLower(searchName))

	// Iterate over each file in the filteredFiles list
	for _, path := range filteredFiles {
		// Get the base file name (excluding the path) using filepath.Base
		fileName := strings.ToLower(filepath.Base(path))
		shouldSkip := false

		// Check if the file name contains any word from searchWords
		for _, word := range searchWords {
			if strings.Contains(fileName, word) {
				fmt.Println("Removing file:", fileName, "with strip name:", word)
				// Mark this file to be skipped
				shouldSkip = true
				break // No need to check other words if one match is found
			}
		}

		// Skip the file if it matches any search word
		if shouldSkip {
			continue
		}

		// Add the file to the result list if it does not contain the search name
		files = append(files, path)
	}

	// Check if the resulting list is empty
	if len(files) == 0 {
		return nil, errors.New("all files contained the search name: " + searchName)
	}

	return files, nil
}
