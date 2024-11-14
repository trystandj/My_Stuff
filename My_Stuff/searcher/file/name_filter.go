package file

import (
	"fmt"
	"strings"
)

func FilterFilesName(filteredFiles []string, searchName string) []string {
	var files []string

	// Iterate over each file in the filteredFiles list
	for _, path := range filteredFiles {
		// Get the base file name (excluding the path) using filepath.Base
		fileName := strings.ToLower(path)

		// Check if the file name contains the searchName substring
		if strings.Contains(fileName, strings.ToLower(searchName)) {
			fmt.Println(searchName, "Found:", path)
			files = append(files, path)
		}
	}

	return files
}
