package opener

import (
	"fmt"
	"os"
	"os/exec"
)

func OpenNotepad(files []string) {
	fmt.Println("\nOpening files in Notepad...")

	for _, file := range files {
		// Check if the file exists
		if _, err := os.Stat(file); os.IsNotExist(err) {
			fmt.Printf("File does not exist: %s\n", file)
			continue
		}

		// Use the default notepad command available in the system's PATH
		cmd := exec.Command("C:\\Program Files (x86)\\Notepad++\\notepad++.exe", file)

		// Start the Notepad process to open the file
		err := cmd.Start()

		// Error handling to log any issues when opening the file
		if err != nil {
			fmt.Printf("Error opening file %s in Notepad: %v\n", file, err)
		} else {
			fmt.Printf("Successfully opened file: %s in Notepad\n", file)
		}
	}
}
