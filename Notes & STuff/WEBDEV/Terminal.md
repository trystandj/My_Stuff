#webdev 
- -Move around your directory structure: `cd`
	- Create directories: `mkdir`
	- Create files (and modify their metadata): `touch`
	- Copy files or directories: `cp`
	- Move files or directories: `mv`
	- Delete files or directories: `rm`

- Download files found at specific URLs: `curl`

- Search for fragments of text inside larger bodies of text: `grep`

- View a file's contents page by page: `less`, `cat`

- Manipulate and transform streams of text (for example changing all the instances of `<div>`s in an HTML file to `<article>`): `awk`, `tr`, `sed`

#### Cd 
- if you want to move back up to the previous directory, use two dots: `cd ..`
- `tab` shortcut is very useful, autocompletes names
- You can add \ to go to a directory within a directory 

#### ls 
- Ls/ls allows you to view a list of files withing a directory and additional details 

#### Creating, copying, moving, removing
**Make sure to make backups or test before doing anything major so you don't accidently mess up entire directories**
Have a play with them in a test directory you've created somewhere so that you don't accidentally delete anything important, using the example commands below for guidance:

- `mkdir` — this creates a new directory inside the current directory you are in, with the name you provide after the command name. For example, `mkdir my-awesome-website` will make a new directory called `my-awesome-website`.
- `rmdir` — removes the named directory, but only if it's empty. For example, `rmdir my-awesome-website` will remove the directory we created above. If you want to remove a directory that is not empty (and also remove everything it contains), then you can use `rm -r` instead (see below), but this is dangerous. Make sure there is nothing you might need inside the directory later on, as it will be gone forever.
- `touch` — creates a new empty file, inside the current directory. For example, `touch mdn-example.md` creates a new empty file called `mdn-example.md`.
- `mv` — moves a file from the first specified file location to the second specified file location, for example `mv mdn-example.md mdn-example.txt` (the locations are written as file paths). This command moves a file called `mdn-example.md` in the current directory to a file called `mdn-example.txt` in the current directory. Technically the file is being moved, but from a practical perspective, this command is actually renaming the file.
- `cp` — similar in usage to `mv`, `cp` creates a copy of the file in the first location specified, in the second location specified. For example, `cp mdn-example.txt mdn-example.txt.bak` creates a copy of `mdn-example.txt` called `mdn-example.txt.bak` (you can of course call it something else if you wish).
- `rm` — removes the specified file. For example, `rm mdn-example.txt` deletes a single file called `mdn-example.txt`. Note that this delete is permanent and can't be undone via the recycle bin that you might have on your desktop user interface.
**Note:** Many terminal commands allow you to use asterisks as "wild card" characters, meaning "any sequence of characters". This allows you to run an operation against a potentially large number of files at once, all of which match the specified pattern. As an example, `rm mdn-*` would delete all files beginning with `mdn-`. `rm mdn-*.bak` would delete all files that start with `mdn-` and end with `.bak`.