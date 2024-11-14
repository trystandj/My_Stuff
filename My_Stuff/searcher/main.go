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

	var directory string

	fmt.Print("Enter you directory: ")

	reader := bufio.NewReader(os.Stdin)
	directory, _ = reader.ReadString('\n')
	directory = strings.TrimSpace(directory)
	folderSearch := strings.ReplaceAll(directory, "\\", "/")
	println(folderSearch)

	// folderSearch := "C:/Program Files (x86)/DocLogic"
	fileEnd := ".ini"
	fileName := "prodoc"
	searchContent := "prodoc 2020doc statements greenbar mysql"

	//search.go brings back a file list with the specified file end
	files := file.SearchFiles(folderSearch, fileEnd)
	println()
	// filter brings back a list of files with the containg search content
	filteredFiles := file.FilterFilesLineByLine(files, searchContent)
	println()
	filteredFilesNames := file.FilterFilesName(filteredFiles, fileName)
	println()
	opener.OpenNotepad(filteredFilesNames)
	println()
	fmt.Println("Please check for any missed files.")
}
