package file

import (
	"errors"
	"fmt"
	"path/filepath"
	"strings"
)

func FilterFilesName(filteredFiles []string, searchName string) ([]string, error) {
	var files []string

	// Iterate over each file in the filteredFiles list
	for _, path := range filteredFiles {
		// Get the base file name (excluding the path) using filepath.Base
		fileName := strings.ToLower(filepath.Base(path))

		// Check if the file name contains the searchName substring
		if strings.Contains(fileName, strings.ToLower(searchName)) {
			fmt.Println(searchName, "Found:", path)
			files = append(files, path)
		}
	}

	if len(files) == 0 {
		return nil, errors.New("no files found with search name: " + searchName)
	}

	return files, nil
}
