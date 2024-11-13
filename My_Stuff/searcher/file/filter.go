package file

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

// FilterFilesLineByLine filters files by searching for a term line by line (memory efficient for large files).
func FilterFilesLineByLine(files []string, search string) []string {
	var filteredFiles []string

	for _, file := range files {
		// Open the file for reading
		f, err := os.Open(file)
		if err != nil {
			fmt.Printf("Error opening file %s: %v\n", file, err)
			continue
		}

		// It's best to close the file right after opening it using a defer statement
		// but it's important to close it before returning from the loop.
		// This avoids leaving files open unnecessarily.
		defer func(f *os.File) {
			if err := f.Close(); err != nil {
				fmt.Printf("Error closing file %s: %v\n", file, err)
			}
		}(f)

		// Scan the file line by line
		scanner := bufio.NewScanner(f)
		for scanner.Scan() {
			if strings.Contains(strings.ToLower(scanner.Text()), strings.ToLower(search)) {
				fmt.Println("Found search term in:", file)
				filteredFiles = append(filteredFiles, file)

				break // Stop searching after the first match
			}
		}

		if err := scanner.Err(); err != nil {
			fmt.Printf("Error scanning file %s: %v\n", file, err)
		}
	}

	return filteredFiles
}
