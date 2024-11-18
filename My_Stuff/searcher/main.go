package main

import (
	"bufio"
	"fmt"
	"os"
	"searcher/file"
	"searcher/opener"
	"strings"
)

func main() {
	reader := bufio.NewReader(os.Stdin)

	// Get Notepad++ executable path
	fmt.Print("Enter the EXE path of Notepad++: ")
	cleanPath, _ := reader.ReadString('\n')
	cleanPath = strings.TrimSpace(strings.ReplaceAll(cleanPath, `\`, "/"))
	cleanPath = strings.ReplaceAll(cleanPath, `"`, "")

	for {
		// Get directory input from the user
		fmt.Print("Enter your directory: ")
		directory, _ := reader.ReadString('\n')
		folderSearch := strings.ReplaceAll(strings.TrimSpace(directory), "\\", "/")
		folderSearch = strings.ReplaceAll(folderSearch, `"`, "")
		println(folderSearch)

		// Define search parameters
		fileEnd := ".ini"
		fileName := "rdi"
		removeName := "copy old 2 sample demo"
		searchContent := "prodoc= 2020doc= statements= greenbar= MySQLConfig="

		// Search for files with the specified file extension
		files := file.SearchFiles(folderSearch, fileEnd)
		println()

		// Filter files based on content
		filteredFiles := file.FilterFilesLineByLine(files, searchContent)
		println()

		// Filter files based on the name
		filteredFilesNames, err := file.FilterFilesName(filteredFiles, fileName)
		if err != nil {
			fmt.Println("Error:", err)
		}
		println()

		// Strip specific parts of the file name
		strippedFiles, err := file.StripName(filteredFilesNames, removeName)
		if err != nil {
			fmt.Println("Error:", err)
		}

		// Open filtered files in Notepad++
		opener.OpenNotepad(strippedFiles, cleanPath)
		println()
		fmt.Println("Please check for any missed files.")

		// Ask the user if they want to search another directory
		fmt.Print("Would you like to search another directory? (yes/no): ")
		choice, _ := reader.ReadString('\n')
		choice = strings.TrimSpace(strings.ToLower(choice))
		// && is like the or
		if choice != "yes" && choice != "y" {
			fmt.Println("Exiting the program.")
			break
		}

		println()
	}
}
