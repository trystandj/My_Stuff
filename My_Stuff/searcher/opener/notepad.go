package opener

import (
	"fmt"
	"os"
	"os/exec"
)

func OpenNotepad(files []string, exePath string) {

	fmt.Println("\nOpening files in Notepad...")

	for _, file := range files {

		if _, err := os.Stat(file); os.IsNotExist(err) {
			fmt.Printf("File does not exist: %s\n", file)
			continue
		}

		cmd := exec.Command(exePath, file)

		err := cmd.Start()

		if err != nil {
			fmt.Printf("Error opening file %s in Notepad: %v\n", file, err)
		} else {
			fmt.Printf("Successfully opened file: %s in Notepad\n", file)
		}
	}
}
