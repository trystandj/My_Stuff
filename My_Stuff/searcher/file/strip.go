package file

import (
	"errors"
	"fmt"
	"path/filepath"
	"strings"
)

// StripName removes files from the list if their names contain the searchName substring.
func StripName(filteredFiles []string, searchName string) ([]string, error) {
	var files []string

	// Iterate over each file in the filteredFiles list
	for _, path := range filteredFiles {
		// Get the base file name (excluding the path) using filepath.Base
		fileName := strings.ToLower(filepath.Base(path))

		// Check if the file name contains the searchName substring
		if strings.Contains(fileName, strings.ToLower(searchName)) {
			fmt.Println("Removing file: ", fileName, "with strip name:", searchName)
			// Skip this file as it contains the search name
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
