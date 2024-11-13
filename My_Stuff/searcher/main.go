package main

import (
	"fmt"
	"searcher/file"
	"searcher/opener"
)

func main() {
	// Your main logic here...
	folderSearch := "C:/Program Files (x86)/DocLogic"
	fileEnd := ".ini"
	searchContent := "statementss"

	files := file.SearchFiles(folderSearch, fileEnd)

	filteredFiles := file.FilterFilesLineByLine(files, searchContent)

	opener.OpenNotepad(filteredFiles)

	fmt.Println("Please check for any missed files.")
}
