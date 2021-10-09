const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const fs = require("fs");
var menu = () => {
    console.log("1.Create Directory");
    console.log("2.Remove Directory");
    console.log("3.Write file");
    console.log("4.Read file");
    console.log("5.Delete file");
    console.log("6.Append data to File");
    console.log("7.Update / Replace file with new data");
    console.log("8.Rename File");
    console.log("9.Exit");
    choice();
}
var choice = () => {
    rl.question("Enter your choice here: ", (ans) => {
        if (ans === "1") {
            console.log("Create Directory");
            createdir();
        } else if (ans === "2") {
            console.log("Remove Directory");
            removedir();
        } else if (ans === "3") {
            console.log("Write File : ");
            writeFile();
        } else if (ans === "4") {
            console.log("Read File : ");
            readFile();
        } else if (ans === "5") {
            console.log("Delete File : ");
            deleteFile();
        } else if (ans === "6") {
            console.log("Append File : ");
            appendFile();
        } else if (ans === "7") {
            console.log("Update or Replace File : ");
            updateFile();
        } else if (ans === "8") {
            console.log("Rename File : ");
            renameFile();
        } else if (ans === "9") {
            console.log("Bye...!");
            r1.close();
        } else {
            console.log("invalid choice!!!");
            menu();
        }
    })
}
menu();
var createdir = () => {
    rl.question("Enter the name of directory: ", (ans) => {
        var dir = "./";
        dir = dir + ans;
        console.log(dir);
        fs.mkdir(dir, { recursive: true }, (err) => {
            if (err) throw err;
        });
        console.log("Created Succesfully");
        menu();
    });
};
var removedir = () => {
    rl.question("Enter the name of directory which u want to delete : ", (ans) => {
        fs.rmdir(ans, () => {
            console.log("Directory Deleted");
            menu();
        });
        console.log("Directory not Found");
    });
};
var writeFile = () => {
    rl.question("Enter the file name without extention: ", (fname) => {
        rl.question("Enter the contents of the file : ", (content) => {
            fs.writeFile(fname + ".txt", content, (err) => {
                if (err) throw err;
                console.log("Content Added succesfully");
                menu();
            });
        });
    });
};
var readFile = () => {
    rl.question("Enter the file name without extention: ", (fname) => {
        fs.readFile(fname + ".txt", "utf8", (err, data) => {
            if (err) throw err;
            console.log(data);
            menu();
        });
    });
};
var deleteFile = () => {
    rl.question("Enter the fiename want to delete: ", (fname) => {
        fs.unlink(fname, (err) => {
            if (err) throw err;
            console.log("Deleted Succesfully");
            menu();
        })
    })
}
var appendFile = () => {
    rl.question("Enter the filename want to Append: ", (fname) => {
        rl.question("Enter the contents  want to enter in the file : ", (content) => {
            fs.appendFile(fname, content, (err) => {
                if (err) throw err;
                console.log("Append succesfully");
                menu();
            });
        });
    });
};
var updateFile = () => {
    rl.question("Enter the file name want to update or replace  : ", (fname) => {
        rl.question("Enter the contents of the file : ", (content) => {
            fs.writeFile(fname + ".txt", content, (err) => {
                if (err) throw err;
                console.log("updated succesfully");
                menu();
            });
        });
    });
}
var renameFile = () => {
    rl.question("Enter the file name want to rename : ", (fname) => {
        rl.question("Enter the file name  want to rename your file :", (rename) => {
            fs.rename(fname, rename, (err) => {
                if (err) throw err;
                console.log("Rename succesfully");
                menu();
            });
        });
    });
};