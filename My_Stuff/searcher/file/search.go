package file

import (
	"fmt"
	"os"
	"path/filepath"
	"strings"
)

func SearchFiles(directory string, fileEnd string) []string {
	var files []string

	err := filepath.Walk(directory, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			fmt.Println("error:", path)
			return err
		}
		if strings.HasSuffix(strings.ToLower(info.Name()), strings.ToLower(fileEnd)) {
			fmt.Println("Found:", path)
			files = append(files, path)
		}
		return nil
	})

	if err != nil {
		fmt.Println("Error:", err)
	}

	return files
}
